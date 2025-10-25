// /pages/webentwicklung/[city].js
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import citiesData from "@/data/citiesData";

// Lazy map (bez SSR aby uniknąć błędów window/Leaflet)
const CityMap = dynamic(() => import("@/components/CityMap"), { ssr: false });

/* ────────────────────────────────────────────────────────────────────────────
   Pomocnicze utils – trzymamy wewnątrz pliku, żeby nie było zależności
   ──────────────────────────────────────────────────────────────────────────── */
const SITE_ORIGIN = "https://pixel-genie.de";

/** Minimalny, bezpieczny slugify (zgodny z Twoimi wcześniejszymi slugami) */
function slugify(input = "") {
	return String(input)
		.normalize("NFKD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/ß/g, "ss")
		.replace(/[^a-zA-Z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "")
		.toLowerCase();
}

/** Capitalize tylko 1. literę; zostawia złożone nazwy (np. monheim-am-rhein) */
function niceCityName(city) {
	if (!city) return "";
	const parts = city.split("-");
	return parts.map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join("-");
}

/** Generator SEO – zero zależności; tytuł/description pod miasto */
function generateWebDevSeo(cityData) {
	const city = cityData?.city ?? "";
	const cityLabel = niceCityName(city);
	const canonical = `${SITE_ORIGIN}/webentwicklung/${slugify(city)}`;

	const title = `Webentwicklung ${cityLabel} – Pixel-Genie | Schnelle, SEO-starke Websites`;
	const description =
		`Pixel-Genie entwickelt performante, SEO-optimierte Websites in ${cityLabel}. ` +
		`Webentwicklung mit Next.js/WordPress, Core Web Vitals, UX/CRO, Hosting & Support. ` +
		`Kostenlose Erstanalyse anfragen!`;

	const keywords = [
		`Webentwicklung ${cityLabel}`,
		`Webentwickler ${cityLabel}`,
		`Webagentur ${cityLabel}`,
		"Webdesign",
		"SEO",
		"Next.js",
		"WordPress",
		"Core Web Vitals",
		"Landingpages",
		"E-Commerce",
	].join(", ");

	const openGraph = {
		title,
		description,
		url: canonical,
		images: [`${SITE_ORIGIN}/assets/og-default.jpg`],
	};

	const twitter = {
		title,
		description,
	};

	return { title, description, keywords, canonical, openGraph, twitter };
}

/* ────────────────────────────────────────────────────────────────────────────
   Next.js SSG
   ──────────────────────────────────────────────────────────────────────────── */
export async function getStaticPaths() {
	const paths = citiesData.map((c) => ({
		params: { city: (c.slug ?? slugify(c.city)).toLowerCase() },
	}));
	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const slugParam = (params.city || "").toLowerCase();
	const cityData = citiesData.find(
		(c) => (c.slug ?? slugify(c.city)).toLowerCase() === slugParam
	);

	if (!cityData) return { notFound: true };

	const dataWithSlug = { ...cityData, slug: slugParam };
	const seo = generateWebDevSeo(dataWithSlug);

	return {
		props: {
			cityData: dataWithSlug,
			seo,
		},
	};
}

/* ────────────────────────────────────────────────────────────────────────────
   Komponent strony
   ──────────────────────────────────────────────────────────────────────────── */
export default function WebentwicklungCityPage({ cityData, seo }) {
	const {
		city,
		postalCode,
		address,
		phone,
		email,
		population,
		geo,
		elevation,
		areaKm2,
		boroughs,
		economicHighlights = {},
		historySnippet,
	} = cityData;

	const cityName = niceCityName(city);
	const canonicalUrl = seo.canonical;

	// style „surface” zgodne z Twoim motywem
	const surfaceStyle = {
		backgroundColor: "transparent",
		color: "var(--text-color)",
		borderColor: "rgba(255,255,255,0.12)",
	};
	const sectionStyle = {
		backgroundColor: "transparent",
		color: "var(--text-color)",
	};
	const mutedStyle = { opacity: 0.85 };

	const handleEmailClick = () => {
		if (typeof window !== "undefined") {
			window.location.href = "mailto:pixelgenie.marketing@gmail.com";
		}
	};

	/* ──────────────────────────────────────────────────────────────────────────
     JSON-LD @graph – LocalBusiness + Service + WebPage + BreadcrumbList + FAQ
     ────────────────────────────────────────────────────────────────────────── */
	const jsonLd = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "LocalBusiness",
				"@id": `${canonicalUrl}#business`,
				name: `Pixel-Genie Webentwicklung ${cityName}`,
				url: canonicalUrl,
				image: `${SITE_ORIGIN}/assets/webseiten-seo-webdesign-logo.png`,
				logo: `${SITE_ORIGIN}/assets/webseiten-seo-webdesign-logo.png`,
				description: seo.description,
				priceRange: "€€",
				telephone: phone,
				email: email,
				address: {
					"@type": "PostalAddress",
					streetAddress: address || "",
					addressLocality: cityName,
					postalCode: postalCode || "",
					addressCountry: "DE",
				},
				geo: {
					"@type": "GeoCoordinates",
					latitude: geo?.latitude ?? 0,
					longitude: geo?.longitude ?? 0,
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
				"@id": `${canonicalUrl}#service`,
				serviceType: `Webentwicklung in ${cityName}`,
				provider: { "@id": `${canonicalUrl}#business` },
				areaServed: { "@type": "City", name: cityName },
				offers: {
					"@type": "Offer",
					priceCurrency: "EUR",
					price: "499",
					availability: "https://schema.org/InStock",
					url: canonicalUrl,
				},
			},
			{
				"@type": "WebPage",
				"@id": `${canonicalUrl}#webpage`,
				name: seo.title,
				url: canonicalUrl,
				inLanguage: "de-DE",
				description: seo.description,
				isPartOf: { "@type": "WebSite", url: SITE_ORIGIN, name: "Pixel-Genie" },
			},
			{
				"@type": "BreadcrumbList",
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: "Webentwicklung",
						item: `${SITE_ORIGIN}/webentwicklung`,
					},
					{
						"@type": "ListItem",
						position: 2,
						name: `Webentwicklung ${cityName}`,
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
						name: `Was kostet Webentwicklung in ${cityName}?`,
						acceptedAnswer: {
							"@type": "Answer",
							text:
								`Die Kosten starten bei 499 € für schlanke Unternehmensseiten. ` +
								`Komplexere Projekte (Shop, Integrationen, Mehrsprachigkeit) werden individuell kalkuliert.`,
						},
					},
					{
						"@type": "Question",
						name: `Wie lange dauert ein Webprojekt in ${cityName}?`,
						acceptedAnswer: {
							"@type": "Answer",
							text: `Typisch 2–4 Wochen bis zum Go-Live – abhängig von Umfang, Inhalten und Feedbackzyklen.`,
						},
					},
					{
						"@type": "Question",
						name: `Ist SEO/Performance inbegriffen?`,
						acceptedAnswer: {
							"@type": "Answer",
							text: `Ja. Wir liefern Core-Web-Vitals-saubere, SEO-optimierte Implementierungen (Technik, IA, Meta, Schema).`,
						},
					},
					{
						"@type": "Question",
						name: `Bieten Sie Wartung & Support an?`,
						acceptedAnswer: {
							"@type": "Answer",
							text: `Auf Wunsch inkl. Updates, Monitoring, Hosting-Beratung, Content-Pflege und Sicherheitsmaßnahmen.`,
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
				<meta name="keywords" content={seo.keywords} />
				<meta name="robots" content="index,follow" />
				<link rel="canonical" href={canonicalUrl} />

				{/* OG / Twitter */}
				<meta property="og:title" content={seo.openGraph.title} />
				<meta property="og:description" content={seo.openGraph.description} />
				<meta property="og:url" content={seo.openGraph.url} />
				<meta property="og:image" content={seo.openGraph.images?.[0]} />
				<meta property="og:type" content="website" />
				<meta property="og:locale" content="de_DE" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={seo.twitter.title} />
				<meta name="twitter:description" content={seo.twitter.description} />

				{/* Structured Data */}
				<script
					type="application/ld+json"
					// eslint-disable-next-line react/no-danger
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</Head>

			{/* ─────────────────────────────────────────────────────────────────────── */}
			{/* HERO */}
			{/* ─────────────────────────────────────────────────────────────────────── */}
			<section className="py-5 mt-5 " style={sectionStyle}>
				<Container>
					<Row className="align-items-center mt-5">
						<Col lg={7} className="mb-4 mb-lg-0">
							<h1 className="display-5 fw-bold mb-3">
								Webentwicklung in {cityName} – schnell, sichtbar, konvertierend
								🚀
							</h1>
							<p className="lead" style={mutedStyle}>
								<strong>Pixel-Genie</strong> entwickelt moderne, SEO-starke
								Websites in {cityName}. <br></br>Wir kombinieren performante
								Technik (Next.js/WordPress), klare Informationsarchitektur und
								Conversion-Design – damit aus Besuchern Anfragen und Kunden
								werden.
							</p>
							<div className="d-flex gap-3 flex-wrap mt-3">
								<Button
									variant="primary"
									size="lg"
									className="text-white"
									onClick={handleEmailClick}
								>
									Kostenlose Erstanalyse anfordern →
								</Button>
							</div>
						</Col>

						<Col lg={5}>
							<Card className="shadow-sm" style={surfaceStyle} border="1">
								<Card.Body>
									<h2 className="h4 fw-semibold mb-3">
										Warum Webentwicklung in {cityName}?
									</h2>
									<p style={mutedStyle}>
										In {cityName} entscheidet die digitale Sichtbarkeit über
										Reichweite und Umsatz. Eine schnelle, mobiloptimierte und
										SEO-saubere Website ist die Basis für nachhaltiges Wachstum
										– lokal wie regional.
									</p>
									<ul className="mb-0" style={mutedStyle}>
										<li>
											Core Web Vitals „grün“: Ladezeit, Stabilität,
											Interaktivität
										</li>
										<li>
											Saubere OnPage-Struktur + Schema.org für Rich Results
										</li>
										<li>Klares Messaging, das verkauft (UX/CRO)</li>
									</ul>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>

			{/* ─────────────────────────────────────────────────────────────────────── */}
			{/* Leistungen */}
			{/* ─────────────────────────────────────────────────────────────────────── */}
			<section className="py-5 " style={sectionStyle}>
				<Container>
					<h2 className="h3 fw-bold mb-4 text-center">
						Leistungen in {cityName}
					</h2>
					<Row>
						<Col md={6}>
							<ul>
								<li>Individuelle Webentwicklung (Next.js, React, WordPress)</li>
								<li>
									SEO-optimierte Informationsarchitektur & technisches SEO
								</li>
								<li>Responsives Design & Barrierefreiheit (a11y)</li>
								<li>Headless CMS (Sanity, Strapi) & Content-Pipelines</li>
							</ul>
						</Col>
						<Col md={6}>
							<ul>
								<li>Performance-Optimierung (CWV, Bildpipeline, Caching)</li>
								<li>Tracking & Analytics (Consent-ready, GA4, GSC)</li>
								<li>Conversion-Optimierung (UX, Microcopy, A/B-Tests)</li>
								<li>Wartung, Updates, Hosting-Beratung</li>
							</ul>
						</Col>
					</Row>
				</Container>
			</section>

			{/* ─────────────────────────────────────────────────────────────────────── */}
			{/* Stadtinfo + Karte */}
			{/* ─────────────────────────────────────────────────────────────────────── */}
			<section className="py-5" style={sectionStyle}>
				<Container>
					<Row>
						<Col lg={8}>
							<Card className="shadow-sm mb-3" style={surfaceStyle} border="1">
								<Card.Body>
									<h2 className="h4 fw-semibold mb-3">Über {cityName}</h2>
									{historySnippet && <p style={mutedStyle}>{historySnippet}</p>}
									<ul className="list-unstyled" style={mutedStyle}>
										{postalCode && (
											<li>
												<strong>Postleitzahl:</strong> {postalCode}
											</li>
										)}
										{typeof areaKm2 !== "undefined" && (
											<li>
												<strong>Fläche:</strong> {areaKm2} km²
											</li>
										)}
										{typeof population !== "undefined" && (
											<li>
												<strong>Einwohner:</strong>{" "}
												{Number(population).toLocaleString("de-DE")}
											</li>
										)}
										{typeof elevation !== "undefined" && (
											<li>
												<strong>Höhe:</strong> {elevation} m ü. NN
											</li>
										)}
										{Array.isArray(boroughs) && boroughs.length > 0 && (
											<li>
												<strong>Stadtteile:</strong> {boroughs.join(", ")}
											</li>
										)}
									</ul>
									{economicHighlights &&
										Object.keys(economicHighlights).length > 0 && (
											<p style={mutedStyle}>
												Wirtschaftliche Schwerpunkte:{" "}
												<strong>
													{Object.values(economicHighlights).join(" • ")}
												</strong>
											</p>
										)}
								</Card.Body>
							</Card>
						</Col>

						<Col lg={4}>
							<Card className="h-100 shadow-sm" style={surfaceStyle} border="1">
								<Card.Body className="p-0">
									<CityMap
										key={cityData.city}
										cityData={cityData}
										height={320}
									/>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>

			{/* ─────────────────────────────────────────────────────────────────────── */}
			{/* Prozess + USPs */}
			{/* ─────────────────────────────────────────────────────────────────────── */}
			<section className="py-5 " style={sectionStyle}>
				<Container>
					<Row className="align-items-start">
						<Col lg={7} className="mb-4">
							<Card className="shadow-sm" style={surfaceStyle} border="1">
								<Card.Body>
									<h2 className="h4 fw-semibold mb-3">Unser Web-Prozess</h2>
									<ol className="mb-3" style={mutedStyle}>
										<li className="mb-2">
											<strong>Audit & Ziele:</strong> Status-Quo, Wettbewerbs-
											und Keyword-Potenziale in {cityName}.
										</li>
										<li className="mb-2">
											<strong>IA & UX:</strong> Informationsarchitektur,
											Wireframes, Conversion-Flows.
										</li>
										<li className="mb-2">
											<strong>Build:</strong> Entwicklung (Next.js/WordPress),
											Schema, Tracking, Sicherheit.
										</li>
										<li className="mb-2">
											<strong>Performance:</strong> CWV-Optimierung
											(LCP/INP/CLS), Bildpipeline, Caching.
										</li>
										<li className="mb-2">
											<strong>Go-Live & Scale:</strong> QA, Launch-Plan,
											A/B-Tests, Roadmap.
										</li>
									</ol>
									<p className="mb-0" style={mutedStyle}>
										Fokus: messbare Ergebnisse – mehr Anfragen, mehr Umsatz,
										bessere Sichtbarkeit.
									</p>
								</Card.Body>
							</Card>
						</Col>
						<Col lg={5}>
							<Card className="shadow-sm" style={surfaceStyle} border="1">
								<Card.Body>
									<h3 className="h5 fw-bold mb-3">Warum Pixel-Genie?</h3>
									<ul className="mb-3" style={mutedStyle}>
										<li>Technik ✕ SEO ✕ UX – ganzheitlich gedacht</li>
										<li>Transparente KPIs, monatliche Reports</li>
										<li>Lokale Expertise in {cityName}</li>
										<li>Static-first: Code, den Google wirklich mag</li>
									</ul>
									<Button variant="outline-primary" onClick={handleEmailClick}>
										Jetzt Termin vereinbaren →
									</Button>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>

			{/* ─────────────────────────────────────────────────────────────────────── */}
			{/* Preis-Pakete (Beispiel) */}
			{/* ─────────────────────────────────────────────────────────────────────── */}
			<section className="py-5" style={sectionStyle}>
				<Container>
					<h2 className="h3 fw-bold mb-4 text-center">
						Flexible Pakete für {cityName}
					</h2>
					<Row>
						<Col md={4} className="mb-3">
							<Card className="shadow-sm h-100" style={surfaceStyle} border="1">
								<Card.Body>
									<h3 className="h5 fw-bold">Starter</h3>
									<p style={mutedStyle}>Für kleine Unternehmen</p>
									<h4 className="display-6">499 €</h4>
									<ul style={mutedStyle}>
										<li>Technik-Audit + Quick Wins</li>
										<li>1 Landingpage, 3 Unterseiten</li>
										<li>OnPage-SEO + Schema</li>
										<li>Basis-Tracking</li>
									</ul>
									<Button variant="primary" onClick={handleEmailClick}>
										Angebot anfordern
									</Button>
								</Card.Body>
							</Card>
						</Col>
						<Col md={4} className="mb-3">
							<Card className="shadow-sm h-100" style={surfaceStyle} border="1">
								<Card.Body>
									<h3 className="h5 fw-bold">Growth</h3>
									<p style={mutedStyle}>Wachstum & Skalierung</p>
									<h4 className="display-6">1.490 €</h4>
									<ul style={mutedStyle}>
										<li>Komplettes IA/UX-Konzept</li>
										<li>Headless CMS + Komponenten</li>
										<li>Blog + Content-Templates</li>
										<li>Performance-Monitoring</li>
									</ul>
									<Button variant="primary" onClick={handleEmailClick}>
										Angebot anfordern
									</Button>
								</Card.Body>
							</Card>
						</Col>
						<Col md={4} className="mb-3">
							<Card className="shadow-sm h-100" style={surfaceStyle} border="1">
								<Card.Body>
									<h3 className="h5 fw-bold">Pro</h3>
									<p style={mutedStyle}>Dominanz in den SERPs</p>
									<h4 className="display-6">auf Anfrage</h4>
									<ul style={mutedStyle}>
										<li>E-Commerce / Multi-Language</li>
										<li>Digital PR + Authority-Links</li>
										<li>Erweiterte CRO + A/B-Tests</li>
										<li>SLAs & Dedicated Support</li>
									</ul>
									<Button variant="primary" onClick={handleEmailClick}>
										Angebot anfordern
									</Button>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>

			{/* ─────────────────────────────────────────────────────────────────────── */}
			{/* Micro-Case Studies (ohne sensible Daten) */}
			{/* ─────────────────────────────────────────────────────────────────────── */}
			<section className="py-5 " style={sectionStyle}>
				<Container>
					<Row>
						<Col md={12}>
							<h2 className="h3 fw-bold mb-4">Ergebnisse, die zählen</h2>
						</Col>
						<Col lg={4} className="mb-3">
							<Card className="shadow-sm h-100" style={surfaceStyle} border="1">
								<Card.Body>
									<h3 className="h6 fw-bold">Lokaler Dienstleister</h3>
									<p style={mutedStyle}>
										+214 % organische Anfragen in 3 Monaten (Map Pack + lokaler
										Content).
									</p>
									<ul style={mutedStyle}>
										<li>CTR +2,1 pp dank Snippets</li>
										<li>CWV: „good“ site-wide</li>
									</ul>
								</Card.Body>
							</Card>
						</Col>
						<Col lg={4} className="mb-3">
							<Card className="shadow-sm h-100" style={surfaceStyle} border="1">
								<Card.Body>
									<h3 className="h6 fw-bold">E-Commerce (lokal → regional)</h3>
									<p style={mutedStyle}>
										5× mehr Keywords in TOP3, Umsatz +38 % (SEO + CRO).
									</p>
									<ul style={mutedStyle}>
										<li>IA & Themencluster</li>
										<li>Redaktionelle Links</li>
									</ul>
								</Card.Body>
							</Card>
						</Col>
						<Col lg={4} className="mb-3">
							<Card className="shadow-sm h-100" style={surfaceStyle} border="1">
								<Card.Body>
									<h3 className="h6 fw-bold">B2B-Services</h3>
									<p style={mutedStyle}>
										3× mehr Demo-Requests, SEO-Leads überholen Paid-Leads.
									</p>
									<ul style={mutedStyle}>
										<li>EEAT-Content & Referenzen</li>
										<li>Starkes internes Linking</li>
									</ul>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>

			{/* ─────────────────────────────────────────────────────────────────────── */}
			{/* FAQ (HTML) – spójny z JSON-LD */}
			{/* ─────────────────────────────────────────────────────────────────────── */}
			<section className="py-5" id="faq" style={sectionStyle}>
				<Container>
					<Row>
						<Col md={12}>
							<h2 className="h3 fw-bold mb-4">
								Häufige Fragen zur Webentwicklung in {cityName}
							</h2>
						</Col>
						<Col md={6}>
							<h3 className="h6 fw-semibold mb-2">
								Was kostet professionelle Webentwicklung?
							</h3>
							<p style={mutedStyle}>
								Einstieg ab 499 € – abhängig von Umfang, Design und Funktionen.
								Shops, Integrationen und Mehrsprachigkeit werden individuell
								kalkuliert.
							</p>

							<h3 className="h6 fw-semibold mb-2">
								Wie lange dauert ein Webprojekt?
							</h3>
							<p style={mutedStyle}>
								Meist 2–4 Wochen bis zum Launch. Wir arbeiten mit klaren
								Milestones und transparenten Feedback-Schleifen.
							</p>
						</Col>
						<Col md={6}>
							<h3 className="h6 fw-semibold mb-2">
								Werde ich bei Google gefunden?
							</h3>
							<p style={mutedStyle}>
								Ja. Wir entwickeln ausschließlich SEO-saubere, CWV-optimierte
								Websites mit Schema, sauberer IA und optimalen Meta-Signalen.
							</p>

							<h3 className="h6 fw-semibold mb-2">
								Übernehmt ihr Hosting & Betreuung?
							</h3>
							<p style={mutedStyle}>
								Auf Wunsch ja: Updates, Monitoring, Sicherheits-Patches,
								Performance, Content-Pflege.
							</p>
						</Col>
					</Row>
				</Container>
			</section>

			{/* ─────────────────────────────────────────────────────────────────────── */}
			{/* Interne Verlinkung – weitere Standorte */}
			{/* ─────────────────────────────────────────────────────────────────────── */}
			<section className="py-5 " style={sectionStyle}>
				<Container>
					<Row className="my-4">
						<Col>
							<h3 className="text-center fw-semibold mb-4">
								Weitere Standorte in der Nähe von {cityName}
							</h3>
							<Row className="justify-content-center">
								{citiesData
									.filter(
										(c) =>
											(c.slug ?? slugify(c.city)) !==
											(cityData.slug ?? slugify(city))
									)
									.slice(0, 24)
									.map((c, i) => {
										const cityLabel =
											c.city?.charAt(0).toUpperCase() + c.city?.slice(1);
										const citySlug = (c.slug ?? slugify(c.city)).toLowerCase();
										return (
											<Col
												key={i}
												xs={12}
												sm={6}
												md={4}
												lg={3}
												className="mb-3 d-flex justify-content-center"
											>
												<Link
													href={`/webentwicklung/${citySlug}`}
													className="d-flex align-items-center justify-content-center text-decoration-none fw-medium text-center rounded-3 hover"
													style={{
														color: "var(--text-color)",
														backgroundColor: "rgba(255,255,255,0.05)",
														border: "1px solid rgba(255,255,255,0.1)",
														minHeight: "56px",
														maxWidth: "240px",
														width: "100%",
														padding: "0.5rem 0.75rem",
														lineHeight: "1.2",
														textAlign: "center",
														whiteSpace: "normal",
														wordBreak: "break-word",
														transition: "all 0.3s ease",
													}}
												>
													<span className="d-block">
														Webentwicklung <br />
														{cityLabel}
													</span>
												</Link>
											</Col>
										);
									})}
							</Row>

							<div className="text-center mt-4">
								<Link href="/webentwicklung" className="fw-bold">
									← Alle Standorte anzeigen
								</Link>
							</div>
						</Col>
					</Row>
				</Container>
			</section>

			{/* ─────────────────────────────────────────────────────────────────────── */}
			{/* Kontakt / CTA */}
			{/* ─────────────────────────────────────────────────────────────────────── */}
			<section className="py-5 " id="kontakt" style={sectionStyle}>
				<Container>
					<Row className="align-items-center">
						<Col md={8} className="mb-3">
							<h2 className="h3 fw-semibold mb-3">
								Starte jetzt dein Webprojekt in {cityName}
							</h2>
							<p style={mutedStyle}>
								Hol dir eine kostenfreie Erstanalyse: Wir prüfen Technik,
								Inhalte und lokale Sichtbarkeit – du erhältst klare Prioritäten
								für die nächsten Wochen.
							</p>
						</Col>
						<Col md={4} className="text-md-end">
							<Button
								variant="primary"
								size="lg"
								className="text-white"
								onClick={handleEmailClick}
							>
								✨ Kostenlose Analyse anfordern
							</Button>
						</Col>
					</Row>

					<Row className="mt-4">
						<Col md={6} className="mb-3">
							<Card className="shadow-sm" style={surfaceStyle} border="1">
								<Card.Body>
									<h3 className="h5 fw-bold mb-2">📍 Kontakt</h3>
									<p className="mb-1">
										<strong>Adresse:</strong> {address}
									</p>
									<p className="mb-1">
										<strong>PLZ / Ort:</strong> {postalCode} {cityName}
									</p>
									<p className="mb-1">
										<strong>Telefon:</strong> {phone}
									</p>
									<p className="mb-0">
										<strong>E-Mail:</strong> {email}
									</p>
								</Card.Body>
							</Card>
						</Col>
						<Col md={6} className="mb-3">
							<Card className="shadow-sm h-100" style={surfaceStyle} border="1">
								<Card.Body>
									<h3 className="h5 fw-bold mb-2">Weitere Leistungen</h3>
									<div className="d-flex flex-wrap gap-2">
										<Button
											as={Link}
											href="/webseitenerstellung"
											variant="outline-primary"
											size="sm"
										>
											<p>Webseiten</p>
										</Button>
										<Button
											as={Link}
											href="/suchmaschinenoptimierung"
											variant="outline-primary"
											size="sm"
										>
											<p>SEO</p>
										</Button>
										<Button
											as={Link}
											href="/webdesign"
											variant="outline-primary"
											size="sm"
										>
											<p>Webdesign</p>
										</Button>
										<Button
											as={Link}
											href="/seo"
											variant="outline-primary"
											size="sm"
										>
											<p>SEO-Agentur </p>
										</Button>
									</div>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>

			{/* ─────────────────────────────────────────────────────────────────────── */}
			{/* Footer-Hinweis (intern) */}
			{/* ─────────────────────────────────────────────────────────────────────── */}
			<footer className="py-4 text-center" style={sectionStyle}>
				<Container>
					<p className="mb-0 small" style={mutedStyle}>
						Weitere Leistungen:{" "}
						<Link href="/webseitenerstellung" className="text-decoration-none">
							Webseiten
						</Link>{" "}
						|{" "}
						<Link
							href="/suchmaschinenoptimierung"
							className="text-decoration-none"
						>
							SEO
						</Link>{" "}
						|{" "}
						<Link href="/webdesign" className="text-decoration-none">
							Webdesign
						</Link>
					</p>
				</Container>
			</footer>
		</>
	);
}
