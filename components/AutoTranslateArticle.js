import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const API_URL = "/.netlify/functions/translate";
const BATCH_LIMIT = 450; // API safe limit

export default function AutoTranslateArticle({ html, slug }) {
	const { i18n } = useTranslation();
	const [translatedHtml, setTranslatedHtml] = useState(html);

	useEffect(() => {
		const browserLang = navigator.language.split("-")[0];
		const activeLang = i18n.language.split("-")[0] || browserLang;

		const cacheKey = `article_${slug}_${activeLang}`;
		const cached = localStorage.getItem(cacheKey);

		if (cached) {
			setTranslatedHtml(cached);
			return;
		}

		(async () => {
			try {
				// Cleanup old cached versions of this slug
				["de", "en", "pl", "nl"].forEach((lng) => {
					if (lng !== activeLang)
						localStorage.removeItem(`article_${slug}_${lng}`);
				});

				const parser = new DOMParser();
				const doc = parser.parseFromString(html, "text/html");

				const walker = doc.createTreeWalker(
					doc.body,
					NodeFilter.SHOW_TEXT,
					null,
					false
				);

				const textNodes = [];
				while (walker.nextNode()) {
					const node = walker.currentNode;
					const text = node.nodeValue.trim();
					if (text.length > 0) {
						textNodes.push({ node, text });
					}
				}

				let batches = [];
				let current = [];
				let length = 0;

				for (const item of textNodes) {
					const addLen = item.text.length;
					if (length + addLen > BATCH_LIMIT) {
						batches.push(current);
						current = [];
						length = 0;
					}
					current.push(item);
					length += addLen;
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
						if (translatedBatch[i]) {
							item.node.nodeValue = translatedBatch[i];
						}
					});
				}

				const finalHtml = doc.body.innerHTML;
				setTranslatedHtml(finalHtml);
				localStorage.setItem(cacheKey, finalHtml);
			} catch (err) {
				console.error("Failed to translate article:", err);
				setTranslatedHtml(html);
			}
		})();
	}, [html, slug, i18n.language]); // ✅ update when language changes

	return (
		<div
			className="translated-article"
			dangerouslySetInnerHTML={{ __html: translatedHtml }}
		/>
	);
}
