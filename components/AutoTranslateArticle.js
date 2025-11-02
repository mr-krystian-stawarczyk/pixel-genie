"use client";
import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";

const API_URL = "/.netlify/functions/translate";
const BATCH_LIMIT = 450;

export default function AutoTranslateArticle({ html, slug }) {
	const { i18n } = useTranslation();
	const [translatedHtml, setTranslatedHtml] = useState(html);
	const containerRef = useRef(null);

	useEffect(() => {
		const browserLang = navigator.language.split("-")[0];
		const activeLang = i18n.language.split("-")[0] || browserLang;

		const cacheKey = `article_${slug}_${activeLang}`;
		const cached = localStorage.getItem(cacheKey);
		if (cached) {
			setTranslatedHtml(cached);
			return;
		}

		const el = containerRef.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) return;
				observer.disconnect();
				translateArticle();
			},
			{ threshold: 0.1 }
		);

		observer.observe(el);

		async function translateArticle() {
			try {
				const parser = new DOMParser();
				const doc = parser.parseFromString(html, "text/html");

				const walker = doc.createTreeWalker(doc.body, NodeFilter.SHOW_TEXT);
				const textNodes = [];
				while (walker.nextNode()) {
					const node = walker.currentNode;
					const text = node.nodeValue.trim();
					if (text.length) textNodes.push({ node, text });
				}

				// 🚀 Najpierw szybki batch „Above the Fold”
				const fastBatch = textNodes.slice(0, 800);
				const restNodes = textNodes.slice(800);
				const qFast = fastBatch.map((x) => x.text).join("\n");
				const resFast = await fetch(
					`${API_URL}?text=${encodeURIComponent(qFast)}&lang=${activeLang}`
				);
				const dataFast = await resFast.json();
				const fastLines = dataFast.translation.split("\n");
				fastBatch.forEach(
					(item, i) => (item.node.nodeValue = fastLines[i] || item.text)
				);
				setTranslatedHtml(doc.body.innerHTML);

				// 🐢 Potem reszta w tle z throttlingiem
				let batches = [];
				let current = [];
				let length = 0;

				for (const item of restNodes) {
					if (length + item.text.length > BATCH_LIMIT) {
						batches.push(current);
						current = [];
						length = 0;
					}
					current.push(item);
					length += item.text.length;
				}
				if (current.length) batches.push(current);

				for (const batch of batches) {
					const q = batch.map((x) => x.text).join("\n");
					const res = await fetch(
						`${API_URL}?text=${encodeURIComponent(q)}&lang=${activeLang}`
					);
					const data = await res.json();
					const translatedBatch = data.translation.split("\n");
					batch.forEach((item, i) => {
						if (translatedBatch[i]) item.node.nodeValue = translatedBatch[i];
					});
					setTranslatedHtml(doc.body.innerHTML);
					await new Promise((r) => setTimeout(r, 200)); // Throttle
				}

				const finalHtml = doc.body.innerHTML;
				setTranslatedHtml(finalHtml);
				localStorage.setItem(cacheKey, finalHtml);
			} catch {
				setTranslatedHtml(html);
			}
		}

		return () => observer.disconnect();
	}, [html, slug, i18n.language]);

	return (
		<div
			ref={containerRef}
			className="translated-article"
			style={{ transition: "opacity 0.3s ease" }}
			dangerouslySetInnerHTML={{ __html: translatedHtml }}
		/>
	);
}
