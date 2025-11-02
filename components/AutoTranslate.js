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
		if (i18n.language === "de" || noTranslate.includes(pure)) {
			setOut(pure);
			return;
		}

		// 🧠 Cache priorytetowo
		const cachedRAM = memCache.get(key);
		if (cachedRAM) {
			setOut(cachedRAM);
			return;
		}
		const cachedLocal = localStorage.getItem(key);
		if (cachedLocal) {
			memCache.set(key, cachedLocal);
			setOut(cachedLocal);
			return;
		}

		let cancelled = false;
		fetch("/.netlify/functions/translate", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ text: pure.slice(0, 480), lang: i18n.language }),
		})
			.then((res) => res.json())
			.then((data) => {
				if (cancelled) return;
				let t = data?.translation ?? pure;
				t = String(t)
					.replace(/^\[|\]$/g, "")
					.trim();
				setOut(t);
				memCache.set(key, t);
				localStorage.setItem(key, t);
			})
			.catch(() => !cancelled && setOut(pure));

		return () => (cancelled = true);
	}, [key, pure, i18n.language]);

	return (
		<span
			ref={spanRef}
			style={{
				transition: " 0.3s ease",
				opacity: 1, // nie przyciemnia tekstu
			}}
		>
			{out}
		</span>
	);
}
