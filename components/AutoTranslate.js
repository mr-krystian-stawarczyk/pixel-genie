"use client";
import { useEffect, useMemo, useState } from "react";
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
	const [out, setOut] = useState(pure);

	const key = useMemo(() => `${i18n.language}::${pure}`, [i18n.language, pure]);

	useEffect(() => {
		if (i18n.language === "de" || noTranslate.includes(pure)) {
			setOut(pure);
			return;
		}

		const cached = memCache.get(key);
		if (cached) {
			setOut(cached);
			return;
		}

		let cancelled = false;

		fetch(
			`/.netlify/functions/translate?text=${encodeURIComponent(
				pure
			)}&lang=${i18n.language}`
		)
			.then((res) => res.json())
			.then((data) => {
				const t = data?.translation ?? pure;
				if (!cancelled) {
					memCache.set(key, t);
					setOut(t);
				}
			})
			.catch(() => !cancelled && setOut(pure));

		return () => (cancelled = true);
	}, [key, pure, i18n.language]);

	// ✅ Always return SAFE STRING (no array)
	const safe =
		typeof out === "string"
			? out.replace(/^\[|\]$/g, "")
			: String(out).replace(/^\[|\]$/g, "");

	return <span>{safe}</span>;
}
