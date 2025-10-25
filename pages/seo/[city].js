// ✅ /pages/seo/[city].js — FINAL SEO + Full Content + LocalBusiness + Service + Map
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import citiesData from "@/data/citiesData";
import slugify from "@/lib/slugify";
import generateSeoData from "@/lib/generateSeoData";
import SEOStats from "@/components/SEOStats";

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

	const dataWithSlug = { ...cityData, slug: slugParam };
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

	// ✅ FINAL GOOGLE SCHEMA — FULL RICH RESULTS ENABLED
	const jsonLd = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "LocalBusiness",
				"@id": `${canonicalUrl}#business`,
				name: `SEO Agentur ${cityName} – Pixel-Genie`,
				url: canonicalUrl,
				image: "https://pixel-genie.de/assets/webseiten-seo-webdesign-logo.png",
				logo: "https://pixel-genie.de/assets/webseiten-seo-webdesign-logo.png",
				telephone: cityData.phone,
				email: cityData.email,
				hasMap: `https://www.google.com/maps/search/?api=1&query=${geo.latitude},${geo.longitude}`,
				geo: {
					"@type": "GeoCoordinates",
					latitude: geo.latitude ?? 0,
					longitude: geo.longitude ?? 0,
				},
				address: {
					"@type": "PostalAddress",
					streetAddress: cityData.address || "",
					addressLocality: cityName,
					postalCode: cityData.postalCode || "",
					addressCountry: "DE",
				},
				areaServed: { "@type": "City", name: cityName },
				sameAs: [
					"https://www.facebook.com/pixelgenie.de",
					"https://www.instagram.com/pixelgenie.de",
					"https://www.linkedin.com/company/pixel-genie",
					"https://share.google/fbLjMXTKkW8OeFeEX",
				],
			},
			{
				"@type": "Service",
				"@id": `${canonicalUrl}#seo-service`,
				serviceType: `Local SEO in ${cityName}`,
				provider: { "@id": `${canonicalUrl}#business` },
				areaServed: { "@type": "City", name: cityName },
				offers: {
					"@type": "Offer",
					priceCurrency: "EUR",
					price: "99",
					availability: "InStock",
					url: canonicalUrl,
				},
			},
			{
				"@type": "BreadcrumbList",
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: "SEO Agentur",
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
				"@id": `${canonicalUrl}#faq`,
				mainEntity: [
					{
						"@type": "Question",
						name: `Wie lange dauert SEO in ${cityName}?`,
						acceptedAnswer: {
							"@type": "Answer",
							text: `Erste Verbesserungen nach 4–8 Wochen, stabile Rankings nach 3–6 Monaten – abhängig vom Wettbewerb in ${cityName}.`,
						},
					},
					{
						"@type": "Question",
						name: `Was kostet SEO in ${cityName}?`,
						acceptedAnswer: {
							"@type": "Answer",
							text: `Lokale SEO-Pakete starten ab 99 € monatlich – inklusive technischer Optimierung und Content-Strategie.`,
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

				{/* ✅ OG / Twitter */}
				<meta property="og:title" content={seo.openGraph.title} />
				<meta property="og:description" content={seo.openGraph.description} />
				<meta
					property="og:image"
					content="https://pixel-genie.de/assets/webseiten-seo-webdesign-logo.png"
				/>
				<meta property="og:url" content={seo.openGraph.url} />
				<meta property="og:type" content="website" />
				<meta property="og:locale" content="de_DE" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={seo.twitter.title} />
				<meta name="twitter:description" content={seo.twitter.description} />

				{/* ✅ Full Structured Data */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</Head>

			{/* ✅ PAGE CONTENT */}
			<section
				style={{ maxWidth: "900px", margin: "4rem auto", padding: "1rem" }}
			>
				<h1 className="display-5 fw-bold">
					SEO Agentur in {cityName} – Sichtbarkeit, die verkauft 🚀
				</h1>

				<p className="lead">
					Mit lokalen SEO-Strategien sorgen wir dafür, dass Unternehmen in{" "}
					{cityName}
					die Top-Plätze bei Google besetzen und täglich mehr Anfragen erhalten.
				</p>

				<h2 className="h4 mt-5 mb-3">📊 Lokale SEO-Power</h2>
				<SEOStats cityData={cityData} />

				<h2 className="h4 mt-5 mb-3">📍 Standortkarte</h2>
				<CityMap cityData={cityData} height={340} />

				<h2 className="h4 mt-5 mb-3">🔥 Was wir für {cityName} tun</h2>
				<ul>
					<li>Technische SEO mit Fokus auf Core Web Vitals</li>
					<li>Content-Strategien für lokale Zielgruppen</li>
					<li>Google Business Profil Optimierung</li>
					<li>Backlinks und Wettbewerbsanalyse</li>
					<li>Conversion Optimierung (UX & CRO)</li>
				</ul>

				<h2 id="faq" className="h4 mt-5 mb-3">
					Häufige Fragen zur SEO in {cityName}
				</h2>
				<p>
					✅ Schnelle Ergebnisse sichtbar? Ja! ✅ Lokaler Wettbewerb? Wir kennen
					ihn genau! ✅ Messbare Erfolge? Monatliche Reports!
				</p>

				<div className="mt-5">
					<Link href="/seo/" className="fw-bold">
						← Alle SEO-Standorte anzeigen
					</Link>
				</div>
			</section>
		</>
	);
}
