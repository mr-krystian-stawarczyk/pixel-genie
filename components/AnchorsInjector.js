// /components/AnchorsInjector.js
import { useEffect } from "react";
import slugify from "@/lib/slugify";

/**
 * Użycie:
 * <AnchorsInjector containerSelector={`#article-${article.slug}`} />
 * Komponent nie renderuje nic — tylko nadaje ID nagłówkom H2-H4 w artykule.
 */
export default function AnchorsInjector({ containerSelector }) {
	useEffect(() => {
		const el = document.querySelector(containerSelector);
		if (!el) return;
		const headers = el.querySelectorAll("h2, h3, h4");
		headers.forEach((h) => {
			const currentId = h.getAttribute("id");
			if (!currentId) {
				const id = slugify(h.textContent || h.innerText || "");
				h.setAttribute("id", id);
			}
		});
	}, [containerSelector]);

	return null;
}
