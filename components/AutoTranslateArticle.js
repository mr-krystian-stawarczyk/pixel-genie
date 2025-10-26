import { useEffect, useState } from "react";

const API_URL = "/.netlify/functions/translate";

// Max length for MyMemory stability
const BATCH_LIMIT = 450;

export default function AutoTranslateArticle({ html, slug }) {
	const [translatedHtml, setTranslatedHtml] = useState(html);

	useEffect(() => {
		const cacheKey = `article_${slug}_${navigator.language}`;
		const cached = localStorage.getItem(cacheKey);
		if (cached) {
			setTranslatedHtml(cached);
			return;
		}

		(async () => {
			try {
				// Extract text content inside tags
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

				// Group text into batches
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

				// Translate batch by batch
				for (const batch of batches) {
					const q = batch.map((x) => x.text).join("\n");
					const lang = navigator.language.split("-")[0];

					const res = await fetch(
						`${API_URL}?text=${encodeURIComponent(q)}&lang=${lang}`
					);
					const data = await res.json();

					const translatedBatch = data.translation.split("\n");

					batch.forEach((item, i) => {
						if (translatedBatch[i]) {
							item.node.nodeValue = translatedBatch[i];
						}
					});
				}

				const result = doc.body.innerHTML;
				setTranslatedHtml(result);
				localStorage.setItem(cacheKey, result);
			} catch (error) {
				console.error("Translation failed:", error);
				setTranslatedHtml(html); // graceful fallback
			}
		})();
	}, [html, slug]);

	return (
		<div
			className="translated-article"
			dangerouslySetInnerHTML={{ __html: translatedHtml }}
		/>
	);
}
