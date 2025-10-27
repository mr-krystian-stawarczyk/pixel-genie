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

		// ✅ Lazy translate: tylko gdy widoczne w viewport
		const el = containerRef.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) return;
				observer.disconnect(); // ✅ tylko raz

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

				let batches = [];
				let current = [];
				let length = 0;

				for (const item of textNodes) {
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
			dangerouslySetInnerHTML={{ __html: translatedHtml }}
		/>
	);
}
