// /components/seo-city/SeoHead.js
import Head from "next/head";
import { useRouter } from "next/router";

export default function SeoHead({ seo }) {
	const router = useRouter();
	const canonicalUrl =
		seo?.canonical || `https://www.pixel-genie.de${router.asPath}`;
	const title = seo?.title || "SEO Agentur NRW – Pixel-Genie";
	const description =
		seo?.description ||
		"Lokale SEO-Agentur in NRW – mehr Sichtbarkeit, mehr Leads, mehr Umsatz.";
	const city = seo?.city || router.query.city || null;

	// Breadcrumbs JSON-LD — automatyczne generowanie
	const breadcrumbs = [
		{
			"@type": "ListItem",
			position: 1,
			name: "Home",
			item: "https://www.pixel-genie.de/",
		},
		{
			"@type": "ListItem",
			position: 2,
			name: "SEO",
			item: "https://www.pixel-genie.de/seo",
		},
		city && {
			"@type": "ListItem",
			position: 3,
			name: `SEO ${city}`,
			item: canonicalUrl,
		},
	].filter(Boolean);

	const schemaGraph = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "BreadcrumbList",
				itemListElement: breadcrumbs,
			},
			...(Array.isArray(seo?.schemaGraph) ? seo.schemaGraph : []),
		],
	};

	// Dynamiczne og:image z nazwą miasta
	const ogImage =
		seo?.image ||
		`/api/og?title=SEO%20${encodeURIComponent(city || "NRW")}&bg=green`;

	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<link rel="canonical" href={canonicalUrl} />
			<meta property="og:url" content={canonicalUrl} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={ogImage} />
			<meta property="og:type" content="website" />
			<meta property="og:locale" content="de_DE" />
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(schemaGraph),
				}}
			/>
			<link
				rel="icon"
				href="/assets/pixel-genie-nettetal-webentwicklung-logo.png"
			/>
		</Head>
	);
}
