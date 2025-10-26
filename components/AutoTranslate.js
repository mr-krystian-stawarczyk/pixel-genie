"use client";
import { useEffect, useMemo, useState, useRef } from "react";
import { useTranslation } from "react-i18next";

const noTranslate = [
	"Pixel Genie",
	"Pixel",
	"SEO",
	"Webdesign",
	"Branding",
	"Social Media Marketing",
];

const memCache = new Map();

export default function AutoTranslate({ children }) {
	const { i18n } = useTranslation();

	const pure =
		typeof children === "string" ? children.trim() : String(children);

	const key = useMemo(() => `${i18n.language}::${pure}`, [i18n.language, pure]);

	const [out, setOut] = useState(pure);

	const spanRef = useRef(null);

	useEffect(() => {
		// 🇩🇪 Niemiecki — bez tłumaczenia
		if (i18n.language === "de" || noTranslate.includes(pure)) {
			setOut(pure);
			return;
		}

		// 🚀 Lazy translation — ignoruj gdy niewidoczny
		if (spanRef.current && !spanRef.current.offsetParent) {
			return;
		}

		const cached = memCache.get(key);
		if (cached) {
			setOut(cached);
			return;
		}

		let cancelled = false;

		fetch(
			`/.netlify/functions/translate?text=${encodeURIComponent(pure)}&lang=${i18n.language}`
		)
			.then((res) => res.json())
			.then((data) => {
				let t = data?.translation ?? pure;
				t = String(t)
					.replace(/^\[|\]$/g, "")
					.trim(); // ✅ safe no brackets

				if (!cancelled) {
					memCache.set(key, t);
					setOut(t);
				}
			})
			.catch(() => {
				if (!cancelled) setOut(pure);
			});

		return () => (cancelled = true);
	}, [key, pure, i18n.language]);

	return <span ref={spanRef}>{out}</span>;
}
