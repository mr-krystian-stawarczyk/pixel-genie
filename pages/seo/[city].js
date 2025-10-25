// /pages/seo/[city].js
import Head from "next/head";
import Link from "next/link";
import citiesData from "@/data/citiesData";
import slugify from "@/lib/slugify";
import generateSeoData from "@/lib/generateSeoData";

export async function getStaticPaths() {
	const paths = citiesData.map((c) => ({
		params: { city: (c.slug ?? slugify(c.city)).toLowerCase() },
	}));

	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const slugParam = params.city.toLowerCase();
	const cityData = citiesData.find(
		(c) => (c.slug ?? slugify(c.city)).toLowerCase() === slugParam
	);

	if (!cityData) return { notFound: true };

	const dataWithSlug = {
		...cityData,
		slug: slugParam,
	};

	const seo = generateSeoData(dataWithSlug);

	return {
		props: {
			cityData: dataWithSlug,
			seo,
		},
	};
}

export default function SeoCityPage({ cityData, seo }) {
	const { city } = cityData;

	const cityName = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();

	const canonicalUrl = seo.canonical; // ✅ always ends with /

	// ✅ JSON-LD (ONE SCRIPT)
	const jsonLd = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "LocalBusiness",
				"@id": `${canonicalUrl}#business`,
				name: `SEO Agentur ${cityName}`,
				url: canonicalUrl,
				telephone: cityData.phone,
				email: cityData.email,
				areaServed: {
					"@type": "City",
					name: cityName,
				},
				address: {
					"@type": "PostalAddress",
					addressLocality: cityName,
					postalCode: cityData.postalCode || "",
					addressCountry: "DE",
				},
			},
			{
				"@type": "BreadcrumbList",
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: "SEO",
						item: "https://pixel-genie.de/seo/",
					},
					{
						"@type": "ListItem",
						position: 2,
						name: `SEO Agentur ${cityName}`,
						item: canonicalUrl,
					},
				],
			},
			{
				"@type": "FAQPage",
				mainEntity: [
					{
						"@type": "Question",
						name: `Warum ist SEO in ${cityName} wichtig?`,
						acceptedAnswer: {
							"@type": "Answer",
							text: `Unternehmen in ${cityName} gewinnen durch lokale SEO mehr Anfragen & Kunden über Google.`,
						},
					},
					{
						"@type": "Question",
						name: `Was kostet SEO in ${cityName}?`,
						acceptedAnswer: {
							"@type": "Answer",
							text: `SEO-Optimierungen in ${cityName} starten ab 99€ monatlich – technische SEO und Content inklusive.`,
						},
					},
				],
			},
		],
	};

	return (
		<>
			<Head>
				<title>{seo.title}</title>
				<meta name="description" content={seo.description} />
				<meta name="robots" content="index,follow" />
				<link rel="canonical" href={canonicalUrl} />

				{/* OpenGraph */}
				<meta property="og:title" content={seo.openGraph.title} />
				<meta property="og:description" content={seo.openGraph.description} />
				<meta property="og:url" content={seo.openGraph.url} />
				<meta property="og:type" content="website" />
				<meta property="og:locale" content="de_DE" />

				{/* Twitter */}
				<meta name="twitter:card" content={seo.twitter.card} />
				<meta name="twitter:title" content={seo.twitter.title} />
				<meta name="twitter:description" content={seo.twitter.description} />

				{/* ✅ JSON-LD injected once */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(jsonLd),
					}}
				/>
			</Head>

			<main style={{ maxWidth: "700px", margin: "2rem auto", padding: "1rem" }}>
				<h1>SEO Agentur in {cityName}</h1>
				<p>
					Pixel-Genie verbessert Ihre Sichtbarkeit in {cityName} – damit Sie
					mehr lokale Kunden über Google gewinnen.
				</p>

				<p>
					<strong>Kontakt:</strong> {cityData.phone} — {cityData.email}
				</p>

				<p>
					<Link href="/seo/">← Alle SEO-Standorte ansehen</Link>
				</p>
			</main>
		</>
	);
}
