// ✅ /pages/webdesign-agentur/[city].js — FINAL | GERMAN VERSION | FULL CONTENT | NO ERRORS
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import citiesData from "@/data/citiesData";
import slugify from "@/lib/slugify";
import generateSeoData from "@/lib/generateWebdesignAgenturSeo";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
const GoogleReviews = dynamic(() => import("@/components/GoogleReviews"), {
	ssr: false,
});
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

	return { props: { cityData: dataWithSlug, seo } };
}

export default function WebdesignAgenturCityPage({ cityData, seo }) {
	if (!cityData) return null;

	const {
		city,
		population,
		geo,
		historySnippet,
		elevation,
		areaKm2,
		economicHighlights,
	} = cityData;

	const cityName = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
	const canonicalUrl = seo.canonical;

	const sectionStyle = {
		backgroundColor: "transparent",
		color: "var(--text-color)",
	};

	const surfaceStyle = {
		backgroundColor: "rgba(255,255,255,0.04)",
		border: "1px solid rgba(255,255,255,0.12)",
		color: "var(--text-color)",
	};

	const muted = { opacity: 0.85 };
	const SITE = "https://pixel-genie.de";

	const handleEmailClick = () => {
		if (typeof window !== "undefined") {
			window.location.href = "mailto:pixelgenie.marketing@gmail.com";
		}
	};

	// ✅ STRUCTURED DATA: LOCALBUSINESS + SERVICE + FAQ + BREADCRUMB + ARTICLE
	const jsonLd = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "LocalBusiness",
				"@id": `${canonicalUrl}#business`,
				name: `Pixel-Genie Webdesign Agentur in ${cityName}`,
				url: canonicalUrl,
				telephone: cityData.phone,
				email: cityData.email,
				priceRange: "€€",
				image: `${SITE}/assets/webseiten-seo-webdesign-logo.png`,
				logo: `${SITE}/assets/webseiten-seo-webdesign-logo.png`,
				hasMap: `https://www.google.com/maps/search/?api=1&query=${geo.latitude},${geo.longitude}`,
				address: {
					"@type": "PostalAddress",
					streetAddress: "Fasanenstr. 10",
					postalCode: cityData.postalCode || "",
					addressLocality: cityName,
					addressCountry: "DE",
				},
				geo: {
					"@type": "GeoCoordinates",
					latitude: geo.latitude,
					longitude: geo.longitude,
				},
				areaServed: { "@type": "City", name: cityName },
				sameAs: [
					"https://www.facebook.com/pixelgenie.de",
					"https://www.instagram.com/pixelgenie.de",
					"https://www.linkedin.com/company/pixel-genie",
				],
				openingHours: ["Mo-Fr 09:00-17:00"],
			},
			{
				"@type": "Service",
				"@id": `${canonicalUrl}#webdesign-service`,
				serviceType: `Webdesign in ${cityName}`,
				provider: { "@id": `${canonicalUrl}#business` },
				areaServed: { "@type": "City", name: cityName },
				offers: {
					"@type": "Offer",
					price: "200",
					priceCurrency: "EUR",
					availability: "https://schema.org/InStock",
				},
			},
			{
				"@type": "Article",
				"@id": `${canonicalUrl}#article`,
				headline: seo.title,
				description: seo.description,
				mainEntityOfPage: canonicalUrl,
				author: {
					"@type": "Organization",
					name: "Pixel-Genie Webagentur Nettetal",
				},
				publisher: { "@id": `${canonicalUrl}#business` },
				image: `${SITE}/assets/webseiten-seo-webdesign-logo.png`,
				datePublished: "2024-08-01",
				dateModified: "2025-01-01",
			},
			{
				"@type": "BreadcrumbList",
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: "Webdesign Agentur",
						item: `${SITE}/webdesign-agentur/`,
					},
					{
						"@type": "ListItem",
						position: 2,
						name: `Webdesign Agentur ${cityName}`,
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
						name: "Was kostet Webdesign?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "Webdesign-Projekte starten ab 200 €, abhängig von Funktionalität, Designaufwand und CMS-Integration.",
						},
					},
					{
						"@type": "Question",
						name: "Wie lange dauert ein Webprojekt?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "Die Umsetzungszeit beträgt meist 3–6 Wochen – abhängig von Inhalt, Beteiligten und Freigaben.",
						},
					},
					{
						"@type": "Question",
						name: "Wird die Website für Google optimiert?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "Ja — jede Website wird modern, mobil-optimiert und SEO-ready entwickelt (Core Web Vitals, sauberes HTML).",
						},
					},
					{
						"@type": "Question",
						name: "Übernehmt ihr Hosting und Betreuung?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "Ja — Hosting, technischer Support, Security Updates & Performance-Monitoring sind auf Wunsch enthalten.",
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

				{/* ✅ OG + Twitter */}
				<meta property="og:title" content={seo.openGraph.title} />
				<meta property="og:description" content={seo.openGraph.description} />
				<meta property="og:type" content="website" />
				<meta property="og:url" content={seo.openGraph.url} />
				<meta
					property="og:image"
					content={`${SITE}/assets/webseiten-seo-webdesign-logo.png`}
				/>
				<meta name="twitter:card" content="summary_large_image" />

				{/* ✅ STRUCTURED DATA */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</Head>

			{/* ===================================================================== */}
			{/* HERO */}
			{/* ===================================================================== */}
			<section className="py-5 mt-5 " style={sectionStyle}>
				<Container>
					<Row className="align-items-center mt-5">
						<Col lg={7}>
							<h1 className="display-5 fw-bold mb-3">
								Webdesign Agentur in {cityName} – digitale Erlebnisse, die
								verkaufen 🚀
							</h1>
							<p className="lead">
								Pixel-Genie ist deine kreative Webdesign-Agentur in {cityName}.
								Wir gestalten Websites, die Vertrauen aufbauen, Marken sichtbar
								machen 🎯 und Besucher in Kunden verwandeln.
							</p>
							<Button
								variant="primary"
								size="lg"
								className="mt-3 text-white"
								onClick={handleEmailClick}
							>
								Kostenlose Beratung anfordern →
							</Button>
						</Col>
						<Col lg={5}>
							<Card className="shadow-sm" style={surfaceStyle}>
								<Card.Body>
									<h2 className="h4 fw-semibold mb-3">
										💡 Warum professionelles Webdesign in {cityName}?
									</h2>
									<p style={muted}>
										In einer Stadt mit {population.toLocaleString("de-DE")}{" "}
										Einwohnern entscheidet der erste Eindruck online über Erfolg
										oder Misserfolg.
									</p>
									<p style={muted}>
										Wir vereinen Design, Performance & SEO zu einer Website, die
										auch morgen noch funktioniert.
									</p>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>
			<GoogleReviews />
			{/* ===================================================================== */}
			{/* LEISTUNGEN */}
			{/* ===================================================================== */}
			<section className="py-5 " style={sectionStyle}>
				<Container>
					<h2 className="h3 fw-bold mb-4 text-center">
						Webdesign-Leistungen in {cityName}
					</h2>
					<Row>
						<Col md={6}>
							<ul>
								<li>Individuelle Webdesign-Konzepte</li>
								<li>UX/UI-Design & Conversion-Optimierung</li>
								<li>Barrierefreiheit & Nutzerführung</li>
								<li>Branding & Corporate-Identity-Ausrichtung</li>
							</ul>
						</Col>
						<Col md={6}>
							<ul>
								<li>SEO-optimierte Entwicklung (Next.js)</li>
								<li>Performance (Core Web Vitals) & Security</li>
								<li>Headless CMS: Sanity, Strapi oder Wordpress</li>
								<li>Wartung, Monitoring & Hosting-Beratung</li>
							</ul>
						</Col>
					</Row>
					<div className="text-center mt-4">
						<Button href="/webdesign" className="text-white" variant="primary">
							Referenzen ansehen →
						</Button>
					</div>
				</Container>
			</section>

			{/* ===================================================================== */}
			{/* STADTINFO + MAP */}
			{/* ===================================================================== */}
			<section className="py-5" style={sectionStyle}>
				<Container>
					<Row>
						<Col lg={8}>
							<Card style={surfaceStyle} className="shadow-sm">
								<Card.Body>
									<h2 className="h4 fw-semibold mb-3">Über {cityName}</h2>
									<p style={muted}>{historySnippet}</p>
									<ul className="list-unstyled" style={muted}>
										<li>
											<strong>Fläche:</strong> {areaKm2} km²
										</li>
										<li>
											<strong>Einwohner:</strong>{" "}
											{population.toLocaleString("de-DE")}
										</li>
										<li>
											<strong>Höhe:</strong> {elevation} m
										</li>
									</ul>
									<p style={muted}>
										Die lokale Wirtschaft zeichnet sich aus durch:
									</p>
									<ul style={muted}>
										{Object.keys(economicHighlights).map((key, i) => (
											<li key={i}>
												<strong>{key}:</strong> {economicHighlights[key]}
											</li>
										))}
									</ul>
								</Card.Body>
							</Card>
						</Col>
						<Col lg={4}>
							<div style={{ borderRadius: "8px", overflow: "hidden" }}>
								<CityMap cityData={cityData} height={310} />
							</div>
						</Col>
					</Row>
				</Container>
			</section>

			{/* ===================================================================== */}
			{/* PROCESS + USP */}
			{/* ===================================================================== */}
			<section className="py-5 " style={sectionStyle}>
				<Container>
					<Row>
						<Col lg={7} className="mb-4">
							<Card style={surfaceStyle} className="shadow-sm">
								<Card.Body>
									<h2 className="h4 fw-semibold mb-3">
										Unser Webdesign-Prozess
									</h2>
									<ol style={muted}>
										<li className="mb-2">
											<strong>Analyse:</strong> Markenverständnis +
											Zielgruppen-Insights
										</li>
										<li className="mb-2">
											<strong>UX-Konzept:</strong> wireframes + user journey
											mapping
										</li>
										<li className="mb-2">
											<strong>Design:</strong> visuelles Erlebnis + Vertrauen
										</li>
										<li className="mb-2">
											<strong>Entwicklung:</strong> modern, SEO-ready,
											blitzschnell ⚡
										</li>
										<li className="mb-2">
											<strong>Launch + Betreuung:</strong> Monitoring, Updates,
											Optimierung
										</li>
									</ol>
								</Card.Body>
							</Card>
						</Col>
						<Col lg={5}>
							<Card style={surfaceStyle} className="shadow-sm">
								<Card.Body>
									<h3 className="h5 fw-bold mb-3">Warum Pixel-Genie?</h3>
									<ul style={muted}>
										<li>Erfahrung im D-A-CH Markt</li>
										<li>Design + SEO + Business Metrics</li>
										<li>Kein Baukasten – alles individuell</li>
										<li>Konvertiert, statt nur schön auszusehen</li>
									</ul>
									<Button variant="outline-primary" onClick={handleEmailClick}>
										Jetzt Termin sichern →
									</Button>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>

			{/* ===================================================================== */}
			{/* CASE STUDIES */}
			{/* ===================================================================== */}
			<section className="py-5 " style={sectionStyle}>
				<Container>
					<h2 className="h3 fw-bold mb-4">Ergebnisse, die überzeugen</h2>
					<Row>
						{[
							{
								t: "Lokaler Dienstleister",
								p: "+214% Anfragen in 3 Monaten",
								d: ["UX-Optimierung", "Local SEO", "Performance Score 95+"],
							},
							{
								t: "E-Commerce (Fashion)",
								p: "38% Umsatzwachstum",
								d: ["Conversion-Routing", "UX/UI Upgrade", "SEO-Content"],
							},
							{
								t: "B2B Industrie",
								p: "3× mehr Demo-Requests",
								d: ["Lead-Optimierung", "Brand Experience", "EEAT Content"],
							},
						].map((cs, i) => (
							<Col lg={4} className="mb-3" key={i}>
								<Card style={surfaceStyle}>
									<Card.Body>
										<h3 className="h6 fw-bold">{cs.t}</h3>
										<p style={muted}>{cs.p}</p>
										<ul style={muted}>
											{cs.d.map((x, y) => (
												<li key={y}>{x}</li>
											))}
										</ul>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				</Container>
			</section>

			{/* ===================================================================== */}
			{/* PRICING */}
			{/* ===================================================================== */}
			<section className="py-5 " style={sectionStyle}>
				<Container>
					<h2 className="h3 fw-bold text-center mb-4">Pakete für {cityName}</h2>
					<Row>
						{[
							{
								name: "Starter",
								price: "499 €",
								details: [
									"Professionelles Layout",
									"SEO-Basis",
									"1 Seite",
									"Kontaktformular",
								],
							},
							{
								name: "Business",
								price: "890 €",
								details: [
									"5-10 Seiten Unternehmensseite",
									"Strategisches UX-Design",
									"CMS + Blog",
								],
							},
							{
								name: "Premium",
								price: "1090 €",
								details: [
									"Max. Sichtbarkeit + Authority",
									"Conversion + Analytics",
									"Content + SEO",
								],
							},
						].map((pkg, i) => (
							<Col md={4} key={i} className="mb-4">
								<Card style={surfaceStyle}>
									<Card.Body>
										<h3 className="h5 fw-bold">{pkg.name}</h3>
										<h4 className="display-6">{pkg.price}</h4>
										<ul style={muted}>
											{pkg.details.map((x, y) => (
												<li key={y}>{x}</li>
											))}
										</ul>
										<Button
											variant="primary"
											className="text-white"
											onClick={handleEmailClick}
										>
											Angebot anfordern
										</Button>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				</Container>
			</section>

			{/* ===================================================================== */}
			{/* FAQ HTML */}
			{/* ===================================================================== */}
			<section id="faq" className="py-5 " style={sectionStyle}>
				<Container>
					<h2 className="h3 fw-bold mb-4">
						Häufige Fragen zum Webdesign in {cityName}
					</h2>
					<Row>
						<Col md={6}>
							<h3 className="h6 fw-semibold">Was kostet Webdesign?</h3>
							<p style={muted}>
								Webdesign-Projekte starten ab 200 €, abhängig von
								Funktionsumfang, Inhalt & Branding.
							</p>
							<h3 className="h6 fw-semibold">
								Wie lange dauert die Umsetzung?
							</h3>
							<p style={muted}>
								Typischerweise 3–6 Wochen — abhängig vom Umfang &
								Feedback-Freigaben.
							</p>
						</Col>
						<Col md={6}>
							<h3 className="h6 fw-semibold">Ist die Website SEO-optimiert?</h3>
							<p style={muted}>
								Ja! Jede Seite erfüllt technische SEO-Standards + Core Web
								Vitals ✅
							</p>
							<h3 className="h6 fw-semibold">
								Übernehmt ihr Support & Hosting?
							</h3>
							<p style={muted}>
								Ja — von Updates bis Contentpflege, alles aus einer Hand.
							</p>
						</Col>
					</Row>
				</Container>
			</section>

			{/* ===================================================================== */}
			{/* INTERNAL LINKS */}
			{/* ===================================================================== */}
			<section className="py-5 border-top" style={sectionStyle}>
				<Container>
					<h3 className="text-center fw-semibold mb-4">
						Weitere Webdesign-Standorte in der Nähe von {cityName}
					</h3>
					<Row className="justify-content-center">
						{citiesData
							.filter((c) => (c.slug ?? slugify(c.city)) !== cityData.slug)
							.slice(0, 24)
							.map((c, i) => {
								const label = c.city.charAt(0).toUpperCase() + c.city.slice(1);
								const slug = (c.slug ?? slugify(c.city)).toLowerCase();
								return (
									<Col xs={12} sm={6} md={4} lg={3} key={i} className="mb-3">
										<Link
											href={`/webdesign-agentur/${slug}`}
											className="d-flex align-items-center justify-content-center text-decoration-none fw-medium text-center rounded-3"
											style={{
												color: "var(--text-color)",
												backgroundColor: "rgba(255,255,255,0.05)",
												border: "1px solid rgba(255,255,255,0.1)",
												padding: "0.75rem",
												minHeight: "62px",
											}}
										>
											Webdesign Agentur
											<br />
											{label}
										</Link>
									</Col>
								);
							})}
					</Row>

					<div className="text-center mt-4">
						<Link href="/webdesign/" className="fw-bold">
							← Alle Standorte anzeigen
						</Link>
					</div>
				</Container>
			</section>

			{/* ===================================================================== */}
			{/* FOOTER CTA */}
			{/* ===================================================================== */}
			<section id="kontakt" className="py-5 border-top" style={sectionStyle}>
				<Container>
					<Row className="align-items-center">
						<Col md={8}>
							<h2 className="h3 fw-semibold mb-3">
								Starte dein Webprojekt in {cityName} ✨
							</h2>
							<p style={muted}>
								Erhalte eine kostenlose Analyse: UX, SEO-Check &
								Conversion-Chancen ✅
							</p>
						</Col>
						<Col md={4} className="text-md-end">
							<Button
								variant="primary"
								size="lg"
								className="text-white"
								onClick={handleEmailClick}
							>
								🚀 Jetzt Analyse sichern
							</Button>
						</Col>
					</Row>
				</Container>
			</section>

			<footer className="py-4 text-center" style={sectionStyle}>
				<Container>
					<p className="mb-0 small" style={muted}>
						Weitere Services:{" "}
						<Link href="/seo" className="text-decoration-none">
							SEO
						</Link>{" "}
						|{" "}
						<Link href="/webdesign" className="text-decoration-none">
							Webdesign
						</Link>{" "}
						|{" "}
						<Link href="/webseitenerstellen" className="text-decoration-none">
							Website erstellen
						</Link>
					</p>
				</Container>
			</footer>
		</>
	);
}
