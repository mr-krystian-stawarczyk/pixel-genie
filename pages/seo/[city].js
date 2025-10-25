// /pages/seo/[city].js
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import citiesData from "@/data/citiesData";
import slugify from "@/lib/slugify";
import generateSeoData from "@/lib/generateSeoData";

const CityMap = dynamic(() => import("@/components/CityMap"), { ssr: false });

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
	const { city, geo } = cityData;
	const cityName = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
	const canonicalUrl = seo.canonical;

	// ✅ FINAL JSON-LD with Google Business Profile + Map + Image
	const jsonLd = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "LocalBusiness",
				"@id": `${canonicalUrl}#business`,
				name: `Pixel-Genie SEO Agentur ${cityName}`,
				url: canonicalUrl,
				image:
					"https://pixel-genie.de/assets/pixel-genie-webseiten-seo-nettetal-logo.png",
				logo: "https://pixel-genie.de/assets/pixel-genie-webseiten-seo-nettetal-logo.png",
				telephone: cityData.phone,
				email: cityData.email,
				hasMap: `https://www.google.com/maps/search/?api=1&query=${geo.latitude},${geo.longitude}`,
				geo: {
					"@type": "GeoCoordinates",
					latitude: geo.latitude,
					longitude: geo.longitude,
				},
				address: {
					"@type": "PostalAddress",
					addressLocality: cityName,
					postalCode: cityData.postalCode || "",
					addressCountry: "DE",
				},
				sameAs: [
					"https://www.facebook.com/pixelgenie.de",
					"https://www.instagram.com/pixelgenie.de",
					"https://www.linkedin.com/company/pixel-genie",
					"https://share.google/fbLjMXTKkW8OeFeEX",
				],
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
							text: `SEO in ${cityName} startet ab 99€ monatlich – inklusive technischer Optimierung & Content-Marketing.`,
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
				<link
					rel="icon"
					href="/assets/pixel-genie-webseiten-seo-nettetal-logo.png"
					type="image/png"
				/>

				{/* OG */}
				<meta
					property="og:image"
					content="https://pixel-genie.de/assets/pixel-genie-webseiten-seo-nettetal-logo.png"
				/>
				<meta property="og:title" content={seo.openGraph.title} />
				<meta property="og:description" content={seo.openGraph.description} />

				{/* Twitter */}
				<meta name="twitter:card" content={seo.twitter.card} />
				<meta name="twitter:title" content={seo.twitter.title} />

				{/* ✅ JSON-LD */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(jsonLd),
					}}
				/>
			</Head>

			<main style={{ maxWidth: "850px", margin: "2rem auto", padding: "1rem" }}>
				<h1 className="display-5 fw-bold">
					SEO Agentur in {cityName} – lokale Sichtbarkeit 🚀
				</h1>

				<p>
					Pixel-Genie sorgt dafür, dass Unternehmen in {cityName} bei Google
					ganz oben stehen und täglich mehr Anfragen erhalten.
				</p>

				<h2 className="h4 mt-4 mb-3">📍 Standortkarte</h2>
				<CityMap cityData={cityData} height={320} />

				<p className="mt-4">
					<Link href="/seo/">← Alle SEO-Standorte</Link>
				</p>
			</main>
		</>
	);
}
