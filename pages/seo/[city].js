// /pages/seo/[city].js
// ✅ /pages/seo/[city].js — POPRAWIONY POD GOOGLE
import Head from "next/head";
import citiesData from "@/data/citiesData";
import generateSeoData from "@/lib/generateSeoData";
import Link from "next/link";
import SEOStats from "@/components/SEOStats";
import CityMap from "@/components/CityMap";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export async function getStaticPaths() {
	const paths = citiesData.map((city) => ({
		params: { city: city.city.toLowerCase() },
	}));
	return { paths, fallback: false };
}

const handleEmailClick = () => {
	if (typeof window !== "undefined") {
		window.location.href = "mailto:pixelgenie.marketing@gmail.com";
	}
};

export async function getStaticProps({ params }) {
	const cityData = citiesData.find(
		(c) => c.city.toLowerCase() === params.city.toLowerCase()
	);

	if (!cityData) return { notFound: true };

	const seo = generateSeoData(cityData);
	return { props: { cityData, seo } };
}

export default function SeoCityPage({ cityData, seo }) {
	const { city } = cityData;
	const cityName = city.charAt(0).toUpperCase() + city.slice(1);
	const canonicalUrl =
		seo?.canonical || `https://pixel-genie.de/seo/${city.toLowerCase()}`;

	const surfaceStyle = {
		backgroundColor: "transparent",
		color: "var(--text-color)",
		borderColor: "rgba(255,255,255,0.12)",
	};
	const sectionStyle = {
		backgroundColor: "transparent",
		color: "var(--text-color)",
	};
	const mutedStyle = { opacity: 0.8 };

	// ✅ JSON-LD — tylko JEDEN FAQPage
	const jsonLd = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "LocalBusiness",
				"@id": `${canonicalUrl}#business`,
				name: "Pixel-Genie SEO Agentur",
				image: "https://pixel-genie.de/assets/og-default.jpg",
				url: canonicalUrl,
				telephone: cityData.phone,
				email: cityData.email,
				priceRange: "€€",
				address: {
					"@type": "PostalAddress",
					streetAddress: cityData.address || "",
					addressLocality: cityName,
					postalCode: cityData.postalCode || "",
					addressCountry: "DE",
				},
				geo: {
					"@type": "GeoCoordinates",
					latitude: cityData.geo?.latitude || 0,
					longitude: cityData.geo?.longitude || 0,
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
				"@id": `${canonicalUrl}#seo-service`,
				serviceType: `SEO Agentur in ${cityName}`,
				provider: { "@id": `${canonicalUrl}#business` },
				areaServed: { "@type": "City", name: cityName },
				offers: {
					"@type": "Offer",
					price: "100",
					priceCurrency: "EUR",
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
						item: "https://pixel-genie.de/seo",
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
							text: `Erste Verbesserungen nach 4–8 Wochen, stabile Rankings nach 3–6 Monaten – je nach Wettbewerb in ${cityName}.`,
						},
					},
					{
						"@type": "Question",
						name: `Was kostet SEO in ${cityName}?`,
						acceptedAnswer: {
							"@type": "Answer",
							text: `Lokale SEO-Pakete starten ab 100 € monatlich – inkl. Technik, Content & Reporting.`,
						},
					},
					{
						"@type": "Question",
						name: `Warum ist lokales SEO in ${cityName} wichtig?`,
						acceptedAnswer: {
							"@type": "Answer",
							text: `70 % regionaler Suchanfragen führen zu Kontakt – ohne Sichtbarkeit verliert man Kunden.`,
						},
					},
					{
						"@type": "Question",
						name: `Bietet Pixel-Genie SEO-Audits in ${cityName} an?`,
						acceptedAnswer: {
							"@type": "Answer",
							text: `Ja — technische Analyse, Content, Backlinks & Google Business Profil.`,
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

	return (
		<>
			<Head>
				<title>{seo.title}</title>
				<meta name="description" content={seo.description} />
				<meta name="keywords" content={seo.keywords} />
				<meta
					name="robots"
					content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
				/>
				<link rel="canonical" href={canonicalUrl} />

				{/* OG */}
				<meta property="og:title" content={seo.openGraph.title} />
				<meta property="og:description" content={seo.openGraph.description} />
				<meta property="og:type" content="website" />
				<meta property="og:url" content={seo.openGraph.url} />
				<meta property="og:site_name" content="Pixel-Genie" />
				<meta
					property="og:image"
					content="https://pixel-genie.de/assets/og-default.jpg"
				/>
				<meta property="og:locale" content="de_DE" />

				{/* Twitter */}
				<meta name="twitter:card" content={seo.twitter.card} />
				<meta name="twitter:title" content={seo.twitter.title} />
				<meta name="twitter:description" content={seo.twitter.description} />
				<meta
					name="twitter:image"
					content="https://pixel-genie.de/assets/og-default.jpg"
				/>

				{/* ✅ Jeden skrypt structured data */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</Head>

			{/* HERO */}
			<section className="py-5 my-5 border-bottom" style={sectionStyle}>
				<Container>
					<Row className="align-items-center mt-5">
						<Col lg={7} className="mb-4 mb-lg-0">
							<h1 className="display-5 fw-bold mb-3">
								SEO Agentur in {cityName} – Sichtbarkeit, die verkauft
							</h1>
							<p className="lead">
								<strong>Pixel-Genie</strong> ist deine professionelle
								SEO-Agentur in {cityName}. Wir steigern deine Sichtbarkeit bei
								Google durch datenbasierte Suchmaschinenoptimierung, technische
								Exzellenz und Content-Strategien, die wirklich konvertieren.
							</p>
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
							<Card className="h-100 shadow-sm" style={surfaceStyle} border="1">
								<Card.Body>
									<h2 className="h4 fw-semibold mb-3">
										🌍 Warum SEO in {cityName} entscheidend ist?
									</h2>
									<p>
										In {cityName} entscheidet Google über den Erfolg. Wenn dein
										Unternehmen nicht sichtbar ist, gehen täglich Anfragen
										verloren. Mit lokaler SEO holen wir kaufbereite Nutzer
										direkt auf deine Website – nachhaltig und messbar.
									</p>
									<p>
										Unsere Strategie verbindet Technik (Core Web Vitals),
										Content mit lokalem Bezug und UX-Optimierung. So dominierst
										du die Suchergebnisse in {cityName}.
									</p>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>

			{/* Statystyki + Mapa */}
			<section className="py-5" style={sectionStyle}>
				<Container>
					<Row>
						<Col lg={8}>
							<Card className="shadow-sm" style={surfaceStyle} border="1">
								<Card.Body>
									<SEOStats cityData={cityData} />
								</Card.Body>
							</Card>
						</Col>

						<Col md={4}>
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

			{/* Usługi */}
			<section className="py-5 border-top border-bottom" style={sectionStyle}>
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
									Technische SEO & Performance-Optimierung (CWV, Crawling,
									Indexierung)
								</li>
								<li>Keyword-Analyse & Content-Strategien mit lokalem Bezug</li>
								<li>Lokales SEO & Google Business Profil Optimierung</li>
							</ul>
						</Col>
						<Col md={6}>
							<ul className="mb-0">
								<li>Backlink-Aufbau & Wettbewerbsanalyse</li>
								<li>SEO-Reporting & monatliche Fortschrittsanalyse</li>
								<li>Conversion-Optimierung & UX-Verbesserungen</li>
							</ul>
						</Col>
					</Row>
				</Container>
			</section>

			{/* CTA + trust box */}
			<section className="py-5" style={sectionStyle}>
				<Container>
					<Row className="align-items-center">
						<Col md={8}>
							<h2 className="h3 fw-semibold mb-3">
								Warum Pixel-Genie die richtige Agentur für {cityName} ist
							</h2>
							<p>
								Wir verbinden datengetriebene Strategien mit kreativer
								Umsetzung. Vom Tech-Audit bis hin zu Content & OffPage – alles
								aus einer Hand, mit klarem Fokus auf Ranking UND Conversion.
							</p>
							<p className="mb-4">
								Unser Team kennt den regionalen Wettbewerb in {cityName} und
								entwickelt Kampagnen, die dort wirken, wo deine Kunden suchen.
							</p>
							<Button
								href="#kontakt"
								variant="outline-primary"
								onClick={handleEmailClick}
							>
								Jetzt Termin vereinbaren →
							</Button>
						</Col>

						<Col md={4}>
							<Card className="shadow-sm" style={surfaceStyle} border="1">
								<Card.Body>
									<h3 className="h5 fw-bold mb-2">
										🚀 Starte dein SEO-Projekt
									</h3>
									<p>
										Erhalte eine kostenlose SEO-Erstanalyse für dein Unternehmen
										in {cityName}.
									</p>
									<Button
										href="#kontakt"
										variant="primary"
										size="sm"
										onClick={handleEmailClick}
									>
										<span className="text-white">Analyse anfordern</span>
									</Button>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>

			{/* FAQ (widoczne na stronie) */}
			<section className="py-5  border-top border-bottom">
				<Container>
					<Row>
						<Col md={12}>
							<h2 className="h3 fw-bold mb-4">
								Häufige Fragen zur SEO in {cityName}
							</h2>
						</Col>

						<Col md={6}>
							<h3 className="h6 fw-semibold mb-2">
								Wie lange dauert SEO, bis man Ergebnisse sieht?
							</h3>
							<p className="">
								Erste Verbesserungen sind oft nach 4–8 Wochen sichtbar, je nach
								Konkurrenz und Website-Struktur. Für stabile Top-Rankings planen
								wir eine nachhaltige Optimierung über 3–6 Monate.
							</p>

							<h3 className="h6 fw-semibold mb-2">
								Was kostet SEO in {cityName}?
							</h3>
							<p className="">
								Die Kosten hängen vom Umfang und den Zielen ab. Bei Pixel-Genie
								starten lokale SEO-Pakete ab 100 € monatlich, inklusive
								technischer Optimierung, Content-Strategie und Reporting.
							</p>
						</Col>

						<Col md={6}>
							<h3 className="h6 fw-semibold mb-2">
								Warum ist lokales SEO in {cityName} so wichtig?
							</h3>
							<p className="">
								Über 70 % der Nutzer suchen regional – wer bei Google Maps oder
								in lokalen Suchergebnissen nicht sichtbar ist, verliert Kunden
								an Wettbewerber. Mit gezieltem SEO stärken wir Ihre Präsenz vor
								Ort.
							</p>

							<h3 className="h6 fw-semibold mb-2">Bieten Sie SEO-Audits an?</h3>
							<p className="">
								Ja, wir führen umfassende technische und inhaltliche SEO-Audits
								durch – inklusive Handlungsempfehlungen und Wettbewerbsanalyse
								für Ihren Standort {cityName}.
							</p>
						</Col>
					</Row>
				</Container>
			</section>

			{/* JSON-LD FAQ (drugi skrypt – ok, bo inny @type) */}
			<script
				type="application/ld+json"
				// eslint-disable-next-line react/no-danger
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "FAQPage",
						mainEntity: [
							{
								"@type": "Question",
								name: "Wie lange dauert SEO, bis man Ergebnisse sieht?",
								acceptedAnswer: {
									"@type": "Answer",
									text: "Erste Verbesserungen sind oft nach 4–8 Wochen sichtbar, abhängig von Konkurrenz und Website-Struktur. Für stabile Top-Rankings empfehlen wir eine kontinuierliche Optimierung über 3–6 Monate.",
								},
							},
							{
								"@type": "Question",
								name: "Was kostet SEO in " + cityName + "?",
								acceptedAnswer: {
									"@type": "Answer",
									text: "Die Kosten hängen vom Projektumfang ab. Lokale SEO-Pakete bei Pixel-Genie starten ab 100 € monatlich, inklusive technischer und inhaltlicher Optimierung.",
								},
							},
							{
								"@type": "Question",
								name: "Warum ist lokales SEO in " + cityName + " so wichtig?",
								acceptedAnswer: {
									"@type": "Answer",
									text: "Mehr als 70 % der Nutzer suchen lokal – wer bei Google Maps und regionalen Suchergebnissen nicht präsent ist, verliert wertvolle Kunden. Pixel-Genie stärkt Ihre lokale Sichtbarkeit.",
								},
							},
							{
								"@type": "Question",
								name: "Bieten Sie SEO-Audits an?",
								acceptedAnswer: {
									"@type": "Answer",
									text:
										"Ja, Pixel-Genie führt detaillierte SEO-Audits für Unternehmen in " +
										cityName +
										" durch, inklusive technischer Analyse und Content-Bewertung.",
								},
							},
						],
					}),
				}}
			/>

			{/* Internal Link Building: SEO-Cluster (tematyczna spójność) */}
			<section className="py-5 border-top" style={sectionStyle}>
				<Container>
					<Row className="my-4">
						<Col>
							<h3 className="text-center fw-semibold mb-4">
								Weitere SEO-Standorte in der Nähe von {cityName}
							</h3>

							<Row className="justify-content-center">
								{citiesData
									.filter((c) => c.city.toLowerCase() !== city.toLowerCase())
									.slice(0, 24)
									.map((c, i) => (
										<Col
											key={i}
											xs={12}
											sm={6}
											md={4}
											lg={3}
											className="mb-3 d-flex justify-content-center"
										>
											<Link
												href={`/seo/${c.city.toLowerCase()}`}
												className="d-flex align-items-center justify-content-center text-decoration-none fw-medium text-center rounded-3 hover"
												style={{
													color: "var(--text-color)",
													backgroundColor: "rgba(255,255,255,0.05)",
													border: "1px solid rgba(255,255,255,0.1)",
													minHeight: "56px",
													maxWidth: "220px",
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
													SEO Agentur <br />
													{c.city.charAt(0).toUpperCase() + c.city.slice(1)}
												</span>
											</Link>
										</Col>
									))}
							</Row>
						</Col>
					</Row>
				</Container>
			</section>

			{/* Footer sekcji */}
			<footer className="py-4 text-center" style={sectionStyle}>
				<Container>
					<p className="mb-0 small" style={mutedStyle}>
						Weitere Leistungen:{" "}
						<Link href="/webseitenerstellen" className="text-decoration-none">
							Webseiten
						</Link>{" "}
						|{" "}
						<Link
							href="/suchmaschinenoptimierung"
							className="text-decoration-none"
						>
							Seo
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
