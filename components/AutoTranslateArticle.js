"use client";
import { useEffect, useState, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";

const articleCache = new Map(); // lang::slug => HTML

export default function AutoTranslateArticle({ html, slug }) {
	const { i18n } = useTranslation();
	const lang = i18n.language;
	const key = useMemo(() => `${lang}::${slug}`, [lang, slug]);
	const [content, setContent] = useState(html);
	const ref = useRef(null);

	useEffect(() => {
		if (!html) return;

		// 🟡 DE = oryginał
		if (lang === "de") {
			setContent(html);
			return;
		}

		// ✅ Cache
		const cached = articleCache.get(key);
		if (cached) {
			setContent(cached);
			return;
		}

		let cancelled = false;

		const fetchTranslation = async () => {
			try {
				const res = await fetch(
					`/.netlify/functions/translate?text=${encodeURIComponent(
						html
					)}&lang=${lang}`
				);
				const data = await res.json();

				if (!cancelled) {
					const translated = data?.translation || html;
					articleCache.set(key, translated);
					setContent(translated);
				}
			} catch (err) {
				!cancelled && setContent(html);
			}
		};

		fetchTranslation();

		return () => (cancelled = true);
	}, [key, lang, html]);

	return <div ref={ref} dangerouslySetInnerHTML={{ __html: content }} />;
}
