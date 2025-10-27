// /components/TableOfContents.js
import { useEffect, useState } from "react";
import slugify from "@/lib/slugify";

export default function TableOfContents({ html }) {
	const [headings, setHeadings] = useState([]);

	useEffect(() => {
		if (!html) return;
		const tmp = document.createElement("div");
		tmp.innerHTML = html;

		const items = [...tmp.querySelectorAll("h2, h3, h4")].map((h) => {
			const id =
				h.getAttribute("id") || slugify(h.textContent || h.innerText || "");
			return {
				id,
				text: h.textContent || h.innerText || "",
				level: h.tagName, // "H2" | "H3" | "H4"
			};
		});
		setHeadings(items);
	}, [html]);

	if (!headings.length) return null;

	return (
		<nav
			className="toc mb-4 p-3 rounded shadow-sm"
			aria-label="Inhaltsverzeichnis"
			style={{ background: "rgba(0,0,0,0.03)" }}
		>
			<h4 className="fw-bold mb-3">Inhaltsverzeichnis</h4>
			<ul className="list-unstyled m-0">
				{headings.map((h) => (
					<li
						key={h.id}
						style={{
							marginLeft: h.level === "H3" ? 12 : h.level === "H4" ? 24 : 0,
							lineHeight: 1.5,
						}}
					>
						<a href={`#${h.id}`} className="text-decoration-none">
							{h.text}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
