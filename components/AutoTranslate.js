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

const memCache = new Map(); // RAM cache

export default function AutoTranslate({ children }) {
	const { i18n } = useTranslation();

	const pure =
		typeof children === "string" ? children.trim() : String(children);

	const key = useMemo(() => `${i18n.language}::${pure}`, [i18n.language, pure]);

	const [out, setOut] = useState(pure);
	const spanRef = useRef(null);

	useEffect(() => {
		if (i18n.language === "de" || noTranslate.includes(pure)) {
			setOut(pure);
			return;
		}

		// ✅ Nie tłumacz jeśli niewidoczny
		if (spanRef.current && !spanRef.current.offsetParent) return;

		// ✅ 1️⃣ najpierw RAM cache
		const cachedRAM = memCache.get(key);
		if (cachedRAM) {
			setOut(cachedRAM);
			return;
		}

		// ✅ 2️⃣ localStorage = persistent cache
		const cachedLocal = localStorage.getItem(key);
		if (cachedLocal) {
			memCache.set(key, cachedLocal);
			setOut(cachedLocal);
			return;
		}

		// ✅ fetch tłumaczenia tylko jeśli brak cache
		let cancelled = false;
		fetch(
			`/.netlify/functions/translate?text=${encodeURIComponent(
				pure
			)}&lang=${i18n.language}`
		)
			.then((res) => res.json())
			.then((data) => {
				let t = data?.translation ?? pure;
				t = String(t)
					.replace(/^\[|\]$/g, "")
					.trim();
				if (!cancelled) {
					setOut(t);
					memCache.set(key, t);
					localStorage.setItem(key, t); // ✅ zapis do pamięci trwałej
				}
			})
			.catch(() => {
				if (!cancelled) setOut(pure);
			});

		return () => (cancelled = true);
	}, [key, pure, i18n.language]);

	return <span ref={spanRef}>{out}</span>;
}
