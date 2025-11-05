"use client";
import Head from "next/head";

export default function BreadcrumbsJsonLd({ items = [], canonical }) {
	const graph = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((it, idx) => ({
			"@type": "ListItem",
			position: idx + 1,
			name: it.name,
			item: it.url,
		})),
	};

	return (
		<Head>
			<link rel="canonical" href={canonical} />
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
			/>
		</Head>
	);
}
