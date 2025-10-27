import { useEffect, useState } from "react";

export default function TableOfContents({ html }) {
	const [headings, setHeadings] = useState([]);

	useEffect(() => {
		const tmp = document.createElement("div");
		tmp.innerHTML = html;

		// Znajdź nagłówki H2-H4 i utwórz slug-ID
		const found = [...tmp.querySelectorAll("h2, h3, h4")].map((h) => {
			const id = h.innerText
				.toLowerCase()
				.trim()
				.replace(/[^a-z0-9]+/g, "-");

			// Nadpisujemy id bezpośrednio na HTML
			h.setAttribute("id", id);

			return {
				id,
				text: h.innerText,
				level: h.tagName,
			};
		});

		setHeadings(found);
	}, [html]);

	if (!headings.length) return null;

	return (
		<nav
			className="toc mb-4 p-3 rounded shadow-sm"
			style={{ background: "rgba(0,0,0,0.03)" }}
		>
			<h4 className="fw-bold mb-3">Inhaltsverzeichnis</h4>
			<ul className="list-unstyled">
				{headings.map((h) => (
					<li
						key={h.id}
						style={{
							marginLeft: h.level === "H3" ? 12 : h.level === "H4" ? 24 : 0,
						}}
					>
						<a href={`#${h.id}`}>{h.text}</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
