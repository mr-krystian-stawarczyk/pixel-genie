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
		revalidate: 3600,
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
				telephone: cityData.phone,
				email: cityData.email,
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
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(jsonLd),
					}}
				/>
			</Head>

			<main style={{ maxWidth: "700px", margin: "2rem auto", padding: "1rem" }}>
				<h1>SEO Agentur in {cityName}</h1>
				<p>
					Wir verbessern Ihre Sichtbarkeit in {cityName}, damit Sie mehr Kunden
					gewinnen.
				</p>

				<p>
					<strong>Kontakt:</strong> {cityData.phone} – {cityData.email}
				</p>

				<p>
					<Link href="/seo">← Alle Standorte</Link>
				</p>
			</main>
		</>
	);
}
