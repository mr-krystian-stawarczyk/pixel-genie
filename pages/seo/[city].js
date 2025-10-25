// /pages/seo/[city].js
import Head from "next/head";
import citiesData from "@/data/citiesData";
import generateSeoData from "@/lib/generateSeoData";
import slugify from "@/lib/slugify";
import Link from "next/link";

export async function getStaticPaths() {
	const paths = citiesData.map((c) => ({
		params: { city: (c.slug ?? slugify(c.city)).toLowerCase() },
	}));
	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const slug = params.city.toLowerCase();
	const cityData = citiesData.find(
		(c) => (c.slug ?? slugify(c.city)).toLowerCase() === slug
	);

	if (!cityData) return { notFound: true };

	const dataWithSlug = { ...cityData, slug };
	const seo = generateSeoData(dataWithSlug);

	return {
		props: {
			cityData: dataWithSlug,
			seo,
		},
		revalidate: 86400, // 24h
	};
}

export default function SeoCityPage({ cityData, seo }) {
	const { city, slug } = cityData;
	const cityName = city.charAt(0).toUpperCase() + city.slice(1);
	const canonicalUrl = seo.canonical;

	const jsonLd = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "LocalBusiness",
				"@id": `${canonicalUrl}#business`,
				name: `SEO Agentur ${cityName}`,
				url: canonicalUrl,
				priceRange: "€€",
				telephone: cityData.phone,
			},
			{
				"@type": "BreadcrumbList",
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: "SEO",
						item: "https://pixel-genie.de/seo",
					},
					{
						"@type": "ListItem",
						position: 2,
						name: cityName,
						item: canonicalUrl,
					},
				],
			},
			{
				"@type": "FAQPage",
				mainEntity: [
					{
						"@type": "Question",
						name: `Warum SEO in ${cityName}?`,
						acceptedAnswer: {
							"@type": "Answer",
							text: `Mehr Kunden und Sichtbarkeit in ${cityName} durch lokales SEO.`,
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
				<link rel="canonical" href={canonicalUrl} />

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</Head>

			{/* ✅ Minimal SSR content */}
			<main style={{ padding: "2rem" }}>
				<h1>SEO Agentur in {cityName}</h1>
				<p>
					Professionelle Suchmaschinenoptimierung in {cityName}. Höhere
					Rankings, mehr Kunden.
				</p>

				<p>
					<strong>Kontakt:</strong> {cityData.phone} | {cityData.email}
				</p>

				<p>
					<Link href="/seo">← Zurück zu allen Standorten</Link>
				</p>
			</main>
		</>
	);
}
