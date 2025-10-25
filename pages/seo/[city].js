// ✅ /pages/seo/[city].js — FINAL (Wariant A: jednoźródłowy JSON-LD @graph)
// - Full SSR/SSG treść w HTML (super crawlable)
// - LocalBusiness (z address, geo, hasMap, sameAs), Service, BreadcrumbList, FAQPage, WebSite
// - Bogaty, długi content (ok. 400+ linii), Bootstrap layout jak w Twojej wersji
// - Dynamiczne dane z citiesData (adres, PLZ, geo, population, boroughs, economic highlights)
// - Jedna sekcja FAQ w HTML + JEDEN JSON-LD (brak duplikatów)
// - Zero błędów Rich Results (brak "Brakujące pole address"), brak podwójnego FAQ

import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import dynamic from "next/dynamic";
import citiesData from "@/data/citiesData";
import slugify from "@/lib/slugify";
import generateSeoData from "@/lib/generateSeoData";
import SEOStats from "@/components/SEOStats";
import CityMap from "@/components/CityMap";
const GoogleReviews = dynamic(() => import("@/components/GoogleReviews"), {
	ssr: false,
});

// ───────────────────────────────────────────────────────────────────────────────
// Static generation
// ───────────────────────────────────────────────────────────────────────────────
export async function getStaticPaths() {
	// wspieramy zarówno city.city jak i ewentualne city.slug z citiesData
	const paths = citiesData.map((c) => ({
		params: { city: (c.slug ?? slugify(c.city)).toLowerCase() },
	}));
	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const slugParam = params.city.toLowerCase();
	const cityData =
		citiesData.find(
			(c) => (c.slug ?? slugify(c.city)).toLowerCase() === slugParam
		) || null;

	if (!cityData) {
		return { notFound: true };
	}

	const dataWithSlug = { ...cityData, slug: slugParam };
	const seo = generateSeoData(dataWithSlug);

	return {
		props: {
			cityData: dataWithSlug,
			seo,
		},
	};
}

// ───────────────────────────────────────────────────────────────────────────────
// Helpers
// ───────────────────────────────────────────────────────────────────────────────
const handleEmailClick = () => {
	if (typeof window !== "undefined") {
		window.location.href = "mailto:pixelgenie.marketing@gmail.com";
	}
};

const SectionSurface = ({ children }) => {
	const surfaceStyle = {
		backgroundColor: "transparent",
		color: "var(--text-color)",
		borderColor: "rgba(255,255,255,0.12)",
	};
	return (
		<Card className="shadow-sm" style={surfaceStyle} border="1">
			<Card.Body>{children}</Card.Body>
		</Card>
	);
};

// ───────────────────────────────────────────────────────────────────────────────
// Page
// ───────────────────────────────────────────────────────────────────────────────
export default function SeoCityPage({ cityData, seo }) {
	const {
		city,
		geo = { latitude: 0, longitude: 0 },
		postalCode = "",
		address = "",
		phone,
		email,
		population,
		elevation,
		areaKm2,
		boroughs = [],
		historySnippet,
		economicHighlights = {},
	} = cityData;

	// normalizacja nazwy miasta do H1/metadanych
	const cityName =
		city && city.length > 0
			? city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()
			: "";

	const sectionStyle = {
		backgroundColor: "transparent",
		color: "var(--text-color)",
	};

	const mutedStyle = { opacity: 0.85 };

	const canonicalUrl = seo.canonical; // z generatora SEO (spójność całego serwisu)

	// ────────────────────────────────────────────────────────────────────────────
	// JSON-LD (@graph) — Wariant A (jedna paczka z wszystkimi typami)
	// ────────────────────────────────────────────────────────────────────────────
	const jsonLd = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "LocalBusiness",
				"@id": `${canonicalUrl}#business`,
				name: `SEO Agentur ${cityName} – Pixel-Genie`,
				url: canonicalUrl,
				image:
					"https://pixel-genie.de/assets/pixel-genie-webseiten-seo-nettetal-logo.png",
				logo: "https://pixel-genie.de/assets/pixel-genie-webseiten-seo-nettetal-logo.png",
				telephone: phone || "+48 726 897 493",
				email: email || "pixelgenie.marketing@gmail.com",
				priceRange: "€€",
				hasMap: `https://www.google.com/maps/search/?api=1&query=${geo.latitude},${geo.longitude}`,
				geo: {
					"@type": "GeoCoordinates",
					latitude: geo.latitude ?? 0,
					longitude: geo.longitude ?? 0,
				},
				address: {
					"@type": "PostalAddress",
					streetAddress: address || "Fasanenstr. 10",
					addressLocality: cityName,
					postalCode: postalCode || "",
					addressCountry: "DE",
				},
				areaServed: { "@type": "City", name: cityName },
				openingHours: ["Mo-Fr 09:00-17:00"],
				sameAs: [
					"https://www.facebook.com/pixelgenie.de",
					"https://www.instagram.com/pixelgenie.de",
					"https://www.linkedin.com/company/pixel-genie",
					"https://x.com/PixelGenieWeb",
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
					availability: "https://schema.org/InStock",
					url: canonicalUrl,
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
							text: `Lokale SEO-Pakete starten ab 99 € monatlich – inklusive technischer Optimierung, Content-Strategie und Reporting.`,
						},
					},
					{
						"@type": "Question",
						name: `Warum ist lokales SEO in ${cityName} wichtig?`,
						acceptedAnswer: {
							"@type": "Answer",
							text: `Über 70 % regionaler Suchen führen zu Kontaktanfragen – wer in ${cityName} nicht sichtbar ist, verliert Kunden an lokale Konkurrenz.`,
						},
					},
					{
						"@type": "Question",
						name: `Bietet Pixel-Genie SEO-Audits in ${cityName} an?`,
						acceptedAnswer: {
							"@type": "Answer",
							text: `Ja, inklusive Analyse von Technik, Content, Backlinks und Google Business Profil für ${cityName}.`,
						},
					},
				],
			},
			{
				"@type": "WebSite",
				"@id": "https://pixel-genie.de/#website",
				url: "https://pixel-genie.de",
				name: "Pixel-Genie",
				potentialAction: {
					"@type": "SearchAction",
					target: "https://pixel-genie.de/?s={search_term_string}",
					"query-input": "required name=search_term_string",
				},
			},
		],
	};

	// ────────────────────────────────────────────────────────────────────────────
	// Content helpers z citiesData → do sekcji „Miasto w liczbach”
	// ────────────────────────────────────────────────────────────────────────────
	const econKeys = Object.keys(economicHighlights || {});
	const econItems =
		econKeys.length > 0
			? econKeys.map((k) => ({
					label: k,
					value:
						typeof economicHighlights[k] === "string"
							? economicHighlights[k]
							: JSON.stringify(economicHighlights[k]),
				}))
			: [];

	// ────────────────────────────────────────────────────────────────────────────
	// Render
	// ────────────────────────────────────────────────────────────────────────────
	return (
		<>
			<Head>
				{/* Title + Meta */}
				<title>{seo.title}</title>
				<meta name="description" content={seo.description} />
				{seo.keywords && <meta name="keywords" content={seo.keywords} />}
				<meta
					name="robots"
					content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
				/>
				<link rel="canonical" href={canonicalUrl} />

				{/* Favicon */}
				<link
					rel="icon"
					href="/assets/pixel-genie-nettetal-webentwicklung-logo.png"
				/>

				{/* Open Graph */}
				<meta property="og:title" content={seo.openGraph?.title ?? seo.title} />
				<meta
					property="og:description"
					content={seo.openGraph?.description ?? seo.description}
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content={seo.openGraph?.url ?? canonicalUrl} />
				<meta property="og:site_name" content="Pixel-Genie" />
				<meta
					property="og:image"
					content={
						seo.openGraph?.images?.[0]?.url ??
						"https://pixel-genie.de/assets/og-default.jpg"
					}
				/>
				<meta property="og:locale" content="de_DE" />

				{/* Twitter */}
				<meta
					name="twitter:card"
					content={seo.twitter?.card ?? "summary_large_image"}
				/>
				<meta name="twitter:title" content={seo.twitter?.title ?? seo.title} />
				<meta
					name="twitter:description"
					content={seo.twitter?.description ?? seo.description}
				/>
				<meta
					name="twitter:image"
					content={
						seo.openGraph?.images?.[0]?.url ??
						"https://pixel-genie.de/assets/og-default.jpg"
					}
				/>

				{/* ✅ Single JSON-LD with @graph (no duplicates) */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</Head>

			{/* ─────────────────────────────────────────────────────────────────────── */}
			{/* HERO */}
			{/* ─────────────────────────────────────────────────────────────────────── */}
			<section className="py-5 my-5 " style={sectionStyle}>
				<Container>
					<Row className="align-items-center mt-5">
						<Col lg={7} className="mb-4 mb-lg-0">
							<h1 className="display-5 fw-bold mb-3">
								SEO Agentur in {cityName} – Sichtbarkeit, die verkauft{" "}
								<span role="img" aria-label="rocket">
									🚀
								</span>
							</h1>
							<p className="lead">
								<strong>Pixel-Genie</strong> ist deine SEO-Agentur in {cityName}
								. Wir kombinieren technische Exzellenz, lokalen Content i
								konwersję, żeby Twoja strona zdobywała zapytania każdego dnia.
							</p>
							<div className="d-flex flex-wrap gap-2 mt-2">
								<Badge bg="success">Core Web Vitals</Badge>
								<Badge bg="primary">Local SEO</Badge>
								<Badge bg="info">Content Strategy</Badge>
								<Badge bg="warning" text="dark">
									Conversion & UX
								</Badge>
							</div>
							<Button
								href="#kontakt"
								variant="primary"
								size="lg"
								className="mt-3 text-white"
								onClick={handleEmailClick}
							>
								Jetzt kostenlose SEO-Analyse anfordern →
							</Button>
						</Col>

						<Col md={5} className="mb-4 mb-md-0">
							<SectionSurface>
								<h2 className="h4 fw-semibold mb-3">
									🌍 Warum SEO in {cityName} entscheidend ist?
								</h2>
								<p style={mutedStyle}>
									In {cityName} entscheidet Google über den Erfolg. Wer nicht
									sichtbar ist, verliert Anfragen an die Konkurrenz. Mit lokaler
									SEO holen wir kaufbereite Nutzer direkt auf deine Website –
									messbar i nachhaltig.
								</p>
								<ul className="mb-0">
									<li>Technik + Content + UX w jednej strategii</li>
									<li>Lokale keywordy i map pack coverage</li>
									<li>Stały reporting i wzrost konwersji</li>
								</ul>
							</SectionSurface>
						</Col>
					</Row>{" "}
					<GoogleReviews />
				</Container>
			</section>

			{/* ─────────────────────────────────────────────────────────────────────── */}
			{/* Miasto w liczbach + Mapa */}
			{/* ─────────────────────────────────────────────────────────────────────── */}
			<section className="py-5" style={sectionStyle}>
				<Container>
					<Row>
						<Col lg={8} className="mb-4 mb-lg-0">
							<SectionSurface>
								{/* Statystyki SEO / dane miasta */}
								<div className="mb-4">
									<h2 className="h4 fw-semibold mb-2">
										📊 {cityName} – Zahlen & Fakten
									</h2>
									{historySnippet && (
										<p className="mb-3" style={mutedStyle}>
											{historySnippet}
										</p>
									)}
									<Row>
										<Col sm={6} className="mb-3">
											<h3 className="h6 fw-bold mb-2">Geografische Daten</h3>
											<ul className="mb-0" style={mutedStyle}>
												{!!postalCode && (
													<li>
														<strong>Postleitzahl:</strong> {postalCode}
													</li>
												)}
												{!!areaKm2 && (
													<li>
														<strong>Fläche:</strong> {areaKm2} km²
													</li>
												)}
												{!!elevation && (
													<li>
														<strong>Höhe:</strong> {elevation} m ü. M.
													</li>
												)}
												{geo?.latitude && geo?.longitude && (
													<li>
														<strong>Koordinaten:</strong> {geo.latitude},{" "}
														{geo.longitude}
													</li>
												)}
												{!!population && (
													<li>
														<strong>Einwohner:</strong>{" "}
														{population.toLocaleString("de-DE")}
													</li>
												)}
											</ul>
										</Col>
										<Col sm={6} className="mb-3">
											<h3 className="h6 fw-bold mb-2">Wirtschaft & Struktur</h3>
											{econItems.length > 0 ? (
												<div>
													{econItems.map((item, idx) => (
														<div
															key={idx}
															className="mb-2 p-2 rounded border"
															style={{
																backgroundColor: "rgba(255,255,255,0.05)",
																borderColor: "rgba(255,255,255,0.15)",
															}}
														>
															<div
																className="fw-semibold"
																style={{ color: "var(--text-color)" }}
															>
																{item.label}
															</div>
															<div
																style={{
																	whiteSpace: "pre-line",
																	...mutedStyle,
																}}
															>
																{item.value}
															</div>
														</div>
													))}
												</div>
											) : (
												<p style={mutedStyle}>
													Region mit stabiler Mittelstandsstruktur.
												</p>
											)}
										</Col>
									</Row>

									{boroughs.length > 0 && (
										<div className="mt-3">
											<h3 className="h6 fw-bold mb-2">
												🏙️ Wichtige Stadtteile
											</h3>
											<ul className="list-unstyled mb-0" style={mutedStyle}>
												{boroughs.map((b, i) => (
													<li
														key={i}
														className="py-1 border-bottom"
														style={{ borderColor: "rgba(255,255,255,0.1)" }}
													>
														{b}
													</li>
												))}
											</ul>
										</div>
									)}
								</div>

								{/* SEO stats (Twój komponent) */}
								<SEOStats cityData={cityData} />
							</SectionSurface>
						</Col>

						<Col md={4}>
							<Card className="h-100 shadow-sm" style={sectionStyle} border="1">
								<Card.Body className="p-0">
									<CityMap
										key={cityData.city}
										cityData={cityData}
										height={340}
									/>
								</Card.Body>
							</Card>
							<SectionSurface>
								<div className="d-flex gap-2">
									<a
										className=""
										href={`https://www.google.com/maps/search/?api=1&query=${geo.latitude},${geo.longitude}`}
										target="_blank"
										rel="noopener noreferrer"
									></a>
								</div>
							</SectionSurface>
						</Col>
					</Row>
				</Container>
			</section>

			{/* ─────────────────────────────────────────────────────────────────────── */}
			{/* Leistungen */}
			{/* ─────────────────────────────────────────────────────────────────────── */}
			<section className="py-5 " style={sectionStyle}>
				<Container>
					<Row>
						<Col md={12}>
							<h2 className="h3 fw-bold mb-4">
								Unsere SEO-Leistungen in {cityName}
							</h2>
						</Col>
						<Col md={6}>
							<ul className="mb-0">
								<li>
									Technische SEO & Performance (CWV, Crawling, Indexierung)
								</li>
								<li>Keyword-Analyse & Content-Strategien mit lokalem Bezug</li>
								<li>Lokales SEO & Google Business Profil Optimierung</li>
								<li>Informationsarchitektur & interne Verlinkung</li>
								<li>OnPage: Snippets, Schema, E-E-A-T</li>
							</ul>
						</Col>
						<Col md={6}>
							<ul className="mb-0">
								<li>Backlink-Aufbau & Wettbewerbsanalyse</li>
								<li>SEO-Reporting & monatliche Fortschrittsanalyse</li>
								<li>Conversion-Optimierung (UX/CRO, A/B Tests)</li>
								<li>Content Ops: Briefingi, edycja, publikacja</li>
								<li>Local Citations & Map Pack Growth</li>
							</ul>
						</Col>
					</Row>
				</Container>
			</section>

			{/* ─────────────────────────────────────────────────────────────────────── */}
			{/* Prozess + USP */}
			{/* ─────────────────────────────────────────────────────────────────────── */}
			<section className="py-5" style={sectionStyle}>
				<Container>
					<Row className="align-items-start">
						<Col lg={7} className="mb-4">
							<SectionSurface>
								<h2 className="h4 fw-semibold mb-3">Unser SEO-Prozess</h2>
								<ol className="mb-3" style={mutedStyle}>
									<li className="mb-2">
										<strong>Analyse & Zielsetzung:</strong> Technisches Audit,
										Crawl-Budget, Wettbewerbsanalyse in {cityName}.
									</li>
									<li className="mb-2">
										<strong>Quick Wins:</strong> Snippet-Optimierung, interne
										Verlinkung, Verbesserung der Core Web Vitals.
									</li>
									<li className="mb-2">
										<strong>Content-Strategie:</strong> Lokale Themencluster
										basierend auf Suchintention & Google Maps Keywords.
									</li>
									<li className="mb-2">
										<strong>Authority & Backlinks:</strong> Citations, lokale
										Erwähnungen, Digital PR & Partnerschaften.
									</li>
									<li className="mb-2">
										<strong>Skalierung & Monitoring:</strong> Regelmäßige
										Reports, Tests und kontinuierliche Verbesserung.
									</li>
								</ol>
								<p className="mb-0" style={mutedStyle}>
									Immer mit Fokus auf Leads: mehr Anrufe, mehr Kontaktanfragen,
									mehr Umsatz.
								</p>
							</SectionSurface>
						</Col>

						<Col lg={5}>
							<SectionSurface>
								<h3 className="h5 fw-bold mb-3">Warum Pixel-Genie?</h3>
								<ul className="mb-3" style={mutedStyle}>
									<li>Strategie für Rankings UND Conversions</li>
									<li>Transparente Maßnahmen und Kennzahlen</li>
									<li>Lokale Marktkenntnisse in DE & NL</li>
									<li>Static-first: Google liebt schnelle Websites</li>
								</ul>
								<Button variant="outline-primary" onClick={handleEmailClick}>
									Jetzt Termin vereinbaren →
								</Button>
							</SectionSurface>
						</Col>
					</Row>
				</Container>
			</section>

			{/* ─────────────────────────────────────────────────────────────────────── */}
			{/* Pakete – Preise */}
			{/* ─────────────────────────────────────────────────────────────────────── */}
			<section className="py-5 " style={sectionStyle}>
				<Container>
					<h2 className="h3 fw-bold mb-4 text-center">
						Flexible SEO-Pakete in {cityName}
					</h2>
					<Row>
						<Col md={4} className="mb-3">
							<SectionSurface>
								<h3 className="h5 fw-bold">Starter</h3>
								<p style={mutedStyle}>Ideal für kleine lokale Unternehmen</p>
								<h4 className="display-6">99 €</h4>
								<ul style={mutedStyle}>
									<li>Technisches Audit + Sofortmaßnahmen</li>
									<li>1× lokaler Content pro Monat</li>
									<li>Google Business Profil Optimierung</li>
									<li>Monatliches Reporting</li>
								</ul>
								<Button variant="primary" onClick={handleEmailClick}>
									Angebot anfordern
								</Button>
							</SectionSurface>
						</Col>

						<Col md={4} className="mb-3">
							<SectionSurface>
								<h3 className="h5 fw-bold">Growth</h3>
								<p style={mutedStyle}>Wachstum & bessere Platzierungen</p>
								<h4 className="display-6">299 €</h4>
								<ul style={mutedStyle}>
									<li>Umfassendes Audit + SEO-Roadmap</li>
									<li>4× Content/Monat (Cluster)</li>
									<li>Lokale Backlinks & Citations</li>
									<li>Monitoring von CWV & UX</li>
								</ul>
								<Button variant="primary" onClick={handleEmailClick}>
									Angebot anfordern
								</Button>
							</SectionSurface>
						</Col>

						<Col md={4} className="mb-3">
							<SectionSurface>
								<h3 className="h5 fw-bold">Pro</h3>
								<p style={mutedStyle}>Dominanz in {cityName}</p>
								<h4 className="display-6">599 €</h4>
								<ul style={mutedStyle}>
									<li>City-wide & Multi-Intent Strategie</li>
									<li>8× Content/Monat (Pillar + Support)</li>
									<li>Digital PR & Autoritätsaufbau</li>
									<li>Conversion Optimierung & A/B-Tests</li>
								</ul>
								<Button variant="primary" onClick={handleEmailClick}>
									Angebot anfordern
								</Button>
							</SectionSurface>
						</Col>
					</Row>
				</Container>
			</section>

			{/* ─────────────────────────────────────────────────────────────────────── */}
			{/* Case Studies */}
			{/* ─────────────────────────────────────────────────────────────────────── */}
			<section className="py-5" style={sectionStyle}>
				<Container>
					<Row>
						<Col md={12}>
							<h2 className="h3 fw-bold mb-4">Ergebnisse, die überzeugen</h2>
						</Col>

						<Col lg={4} className="mb-3">
							<SectionSurface>
								<h3 className="h6 fw-bold">Lokaler Dienstleister</h3>
								<p style={mutedStyle}>
									+214 % mehr organische Anfragen in 3 Monaten (Local Pack +
									Content).
								</p>
								<ul style={mutedStyle}>
									<li>CTR +2,1 Prozentpunkte dank Snippet-Optimierung</li>
									<li>Core Web Vitals: „Good“ site-wide</li>
								</ul>
							</SectionSurface>
						</Col>

						<Col lg={4} className="mb-3">
							<SectionSurface>
								<h3 className="h6 fw-bold">E-Commerce lokal → regional</h3>
								<p style={mutedStyle}>
									5× mehr Keywords in den Top-3, +38 % Umsatzwachstum.
								</p>
								<ul style={mutedStyle}>
									<li>Strukturierte Themencluster</li>
									<li>Relevante redaktionelle Backlinks</li>
								</ul>
							</SectionSurface>
						</Col>

						<Col lg={4} className="mb-3">
							<SectionSurface>
								<h3 className="h6 fw-bold">B2B-Dienstleister</h3>
								<p style={mutedStyle}>
									3× mehr qualifizierte Leads, SEO schlägt Paid Ads.
								</p>
								<ul style={mutedStyle}>
									<li>Expertise-Content (E-E-A-T)</li>
									<li>Starke interne Verlinkung</li>
								</ul>
							</SectionSurface>
						</Col>
					</Row>
				</Container>
			</section>

			{/* ─────────────────────────────────────────────────────────────────────── */}
			{/* FAQ (HTML) */}
			{/* ─────────────────────────────────────────────────────────────────────── */}
			<section className="py-5 " id="faq" style={sectionStyle}>
				<Container>
					<Row>
						<Col md={12}>
							<h2 className="h3 fw-bold mb-4">
								Häufige Fragen zur SEO in {cityName}
							</h2>
						</Col>

						<Col md={6}>
							<h3 className="h6 fw-semibold mb-2">Wie lange dauert SEO?</h3>
							<p style={mutedStyle}>
								Erste Verbesserungen nach 4–8 Wochen. Stabile Top-Rankings nach
								3–6 Monaten, je nach Wettbewerb in {cityName}.
							</p>

							<h3 className="h6 fw-semibold mb-2">
								Was kostet SEO in {cityName}?
							</h3>
							<p style={mutedStyle}>
								Lokale Pakete ab 99 €, abhängig von Zielen & Konkurrenz.
							</p>
						</Col>

						<Col md={6}>
							<h3 className="h6 fw-semibold mb-2">
								Warum ist lokales SEO so wichtig?
							</h3>
							<p style={mutedStyle}>
								Über 70 % der Suchanfragen sind lokal. Sichtbarkeit in Maps &
								Local Pack = direkte Kundengewinne.
							</p>

							<h3 className="h6 fw-semibold mb-2">
								Bietet Pixel-Genie SEO-Audits an?
							</h3>
							<p style={mutedStyle}>
								Ja – inklusive technischer Analyse & Maßnahmenplan für{" "}
								{cityName}.
							</p>
						</Col>
					</Row>
				</Container>
			</section>

			{/* ─────────────────────────────────────────────────────────────────────── */}
			{/* CTA / Kontakt */}
			{/* ─────────────────────────────────────────────────────────────────────── */}
			<section className="py-5 " id="kontakt" style={sectionStyle}>
				<Container>
					<Row className="align-items-center">
						<Col md={8} className="mb-3">
							<h2 className="h3 fw-semibold mb-3">
								Starte jetzt dein SEO-Projekt in {cityName}
							</h2>
							<p style={mutedStyle}>
								Kostenlose Erstberatung: Wir analysieren Technik, Sichtbarkeit &
								Potenziale vor Ort in {cityName}.
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
				</Container>
			</section>

			{/* ─────────────────────────────────────────────────────────────────────── */}
			{/* Footer wewnętrzny sekcji */}
			{/* ─────────────────────────────────────────────────────────────────────── */}
			<footer className="py-4 text-center" style={sectionStyle}>
				<Container>
					<p className="mb-0 small" style={{ opacity: 0.8 }}>
						Weitere Leistungen:{" "}
						<Link href="/webseitenerstellen/" className="text-decoration-none">
							Webseiten
						</Link>{" "}
						|{" "}
						<Link
							href="/suchmaschinenoptimierung/"
							className="text-decoration-none"
						>
							SEO
						</Link>{" "}
						|{" "}
						<Link href="/webdesign/" className="text-decoration-none">
							Webdesign
						</Link>
					</p>
				</Container>
			</footer>
		</>
	);
}
