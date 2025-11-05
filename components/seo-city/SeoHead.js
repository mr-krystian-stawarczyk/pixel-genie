// /components/seo-city/SeoHead.js
import Head from "next/head";

export default function SeoHead({ seo }) {
	const canonicalUrl = seo?.canonical;
	const title = seo?.title || "SEO NRW";
	const description =
		seo?.description || "Lokalne SEO i widoczność, która sprzedaje.";

	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			{canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}
			{canonicalUrl ? <meta property="og:url" content={canonicalUrl} /> : null}
			<meta property="og:image" content="/og?title=SEO%20NRW&bg=green" />
			<meta property="og:locale" content="de_DE" />
			{seo?.schemaGraph ? (
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.schemaGraph) }}
				/>
			) : null}
			<link
				rel="icon"
				href="/assets/pixel-genie-nettetal-webentwicklung-logo.png"
			/>
		</Head>
	);
}
