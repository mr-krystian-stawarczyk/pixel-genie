// /pages/webdesign-agentur/[city].js
import Head from "next/head";
import citiesData from "@/data/citiesData";
import generateWebdesignAgenturSeo from "@/lib/generateWebdesignAgenturSeo";
import Link from "next/link";
import CityMap from "@/components/CityMap";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export async function getStaticPaths() {
	const paths = citiesData.map((c) => ({
		params: { city: c.city.toLowerCase() },
	}));
	return { paths, fallback: false };
}

const handleEmailClick = () => {
	if (typeof window !== "undefined") {
		window.location.href = "mailto:mr.krystian.stawarczyk@gmail.com";
	}
};

export async function getStaticProps({ params }) {
	const cityData = citiesData.find(
		(c) => c.city.toLowerCase() === params.city.toLowerCase()
	);
	const seo = generateWebdesignAgenturSeo(cityData);
	return { props: { cityData, seo } };
}

export default function WebdesignAgenturCityPage({ cityData, seo }) {
	const {
		city,
		population,
		postalCode,
		address,
		phone,
		email,
		historySnippet,
		elevation,
		areaKm2,
		economicHighlights,
	} = cityData;
	const cityName = city.charAt(0).toUpperCase() + city.slice(1);

	const surfaceStyle = {
		backgroundColor: "transparent",
		color: "var(--text-color)",
		borderColor: "rgba(255,255,255,0.12)",
	};

	const sectionStyle = {
		backgroundColor: "transparent",
		color: "var(--text-color)",
	};

	const muted = { opacity: 0.8 };

	return (
		<>
			<Head>
				<title>{seo.title}</title>
				<meta name="description" content={seo.description} />
				<meta name="keywords" content={seo.keywords} />
				<link rel="canonical" href={seo.canonical} />
				<meta property="og:title" content={seo.openGraph.title} />
				<meta property="og:description" content={seo.openGraph.description} />
				<meta property="og:type" content="website" />
				<meta property="og:url" content={seo.openGraph.url} />
				<meta property="og:site_name" content="Pixel-Genie" />
			</Head>

			{/* HERO */}
			<section className="py-5 mt-5 border-bottom" style={sectionStyle}>
				<Container>
					<Row className="align-items-center">
						<Col lg={7}>
							<h1 className="display-5 fw-bold mb-3">
								Webdesign Agentur in {cityName} – digitale Erlebnisse, die
								wirken
							</h1>
							<p className="lead">
								<strong>Pixel-Genie</strong> ist deine kreative
								Webdesign-Agentur in {cityName}. Wir gestalten Websites, die
								Marken sichtbar machen, Vertrauen schaffen und Conversions
								steigern – von der Analyse bis zum Launch.
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
							<Card className="shadow-sm" style={surfaceStyle} border="1">
								<Card.Body>
									<h2 className="h4 fw-semibold mb-3">
										💡 Warum professionelles Webdesign in {cityName}?
									</h2>
									<p>
										In einer Stadt mit rund {population.toLocaleString("de-DE")}{" "}
										Einwohnern und lebendiger Wirtschaft ist Online-Präsenz
										entscheidend. Deine Website ist der erste Eindruck – und oft
										der wichtigste.
									</p>
									<p>
										Mit maßgeschneidertem Design, optimierter User Experience
										und technischer Exzellenz positionieren wir dein Unternehmen
										digital perfekt.
									</p>
								</Card.Body>
							</Card>{" "}
						</Col>
					</Row>
				</Container>
			</section>

			{/* Leistungen */}
			<section className="py-5 border-top border-bottom" style={sectionStyle}>
				<Container>
					<h2 className="h3 fw-bold mb-4 text-center">
						Webdesign-Leistungen in {cityName}
					</h2>
					<Row>
						<Col md={6}>
							<ul>
								<li>Corporate Webdesign & Markenentwicklung</li>
								<li>UX/UI-Design & Prototyping</li>
								<li>Responsives Design & Mobile-First Entwicklung</li>
								<li>Headless CMS (Next.js, Strapi, Sanity)</li>
							</ul>
						</Col>
						<Col md={6}>
							<ul>
								<li>SEO-optimierte Webentwicklung</li>
								<li>Performance-Optimierung (Core Web Vitals)</li>
								<li>Conversion-Optimierung & Analytics</li>
								<li>Support, Wartung & Hosting-Beratung</li>
							</ul>
						</Col>
					</Row>
					<Row className="text-center align-items-center justify-content-center">
						{" "}
						<Button
							variant="primary"
							size="sm"
							className="mt-3 text-white w-50 text-center"
							href="/webdesign"
						>
							Portfolio
						</Button>
					</Row>
				</Container>
			</section>

			{/* Stadt-Info + Karte */}
			<section className="py-5" style={sectionStyle}>
				<Container>
					<Row>
						<Col lg={8}>
							<Card className="shadow-sm" style={surfaceStyle} border="1">
								<Card.Body>
									<h2 className="h4 fw-semibold mb-3">Über {cityName}</h2>
									<p>{historySnippet}</p>
									<ul className="list-unstyled">
										<li>
											<strong>Postleitzahl:</strong> {postalCode}
										</li>
										<li>
											<strong>Fläche:</strong> {areaKm2} km²
										</li>
										<li>
											<strong>Einwohner:</strong>{" "}
											{population.toLocaleString("de-DE")}
										</li>
										<li>
											<strong>Höhe:</strong> {elevation} m ü. NHN
										</li>
									</ul>
									<p>
										Die lokale Wirtschaft zeichnet sich durch{" "}
										<strong>{economicHighlights.Mittelstand}</strong> aus,
										während der Einzelhandel mit{" "}
										<strong>{economicHighlights.Einzelhandel}</strong>{" "}
										überzeugt.
									</p>
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

			{/* CTA */}
			<section className="py-5" style={sectionStyle}>
				<Container>
					<Row className="align-items-center">
						<Col md={8}>
							<h2 className="h3 fw-semibold mb-3">
								Starte dein Webprojekt mit Pixel-Genie
							</h2>
							<p>
								Egal ob Neugründung, Redesign oder Shop – wir begleiten dich von
								der Idee bis zur Live-Schaltung deiner neuen Website in{" "}
								{cityName}.
							</p>
							<Button variant="outline-primary" onClick={handleEmailClick}>
								Jetzt Kontakt aufnehmen →
							</Button>
						</Col>
						<Col md={4}>
							<Card className="shadow-sm" style={surfaceStyle} border="1">
								<Card.Body>
									<h3 className="h5 fw-bold mb-2">📞 Kontakt</h3>
									<p className="mb-1">
										<strong>Adresse:</strong> {address}
									</p>
									<p className="mb-1">
										<strong>Telefon:</strong> {phone}
									</p>
									<p className="mb-3">
										<strong>E-Mail:</strong> {email}
									</p>
									<Button
										variant="primary"
										size="sm"
										onClick={handleEmailClick}
									>
										Jetzt Anfrage senden
									</Button>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>

			{/* FAQ + JSON-LD */}
			<section className="py-5 border-top border-bottom" style={sectionStyle}>
				<Container>
					<h2 className="h3 fw-bold mb-4">
						Häufige Fragen zum Webdesign in {cityName}
					</h2>
					<Row>
						<Col md={6}>
							<h3 className="h6 fw-semibold mb-2">
								Was kostet professionelles Webdesign?
							</h3>
							<p>
								Die Preise beginnen ab 200 € für einfache Unternehmensseiten.
								Individuelle Projekte mit CMS, Shop oder Animationen werden
								maßgeschneidert kalkuliert.
							</p>

							<h3 className="h6 fw-semibold mb-2">
								Wie lange dauert ein Webprojekt?
							</h3>
							<p>
								In der Regel 3–6 Wochen – abhängig von Umfang, Inhalt und
								Feedbackzyklen. Durch unsere effizienten Prozesse können wir
								Projekte zügig umsetzen.
							</p>
						</Col>

						<Col md={6}>
							<h3 className="h6 fw-semibold mb-2">
								Wird meine Website bei Google gefunden?
							</h3>
							<p>
								Ja. Wir entwickeln ausschließlich SEO-optimierte Websites auf
								technisch modernstem Stand (Next.js, Lighthouse, CWV).
							</p>

							<h3 className="h6 fw-semibold mb-2">
								Bietet ihr Hosting oder Betreuung an?
							</h3>
							<p>
								Ja, wir übernehmen auf Wunsch Hosting, Wartung, Contentpflege
								und technische Betreuung – inklusive Sicherheitsupdates.
							</p>
						</Col>
					</Row>
				</Container>
			</section>

			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "FAQPage",
						mainEntity: [
							{
								"@type": "Question",
								name: "Was kostet professionelles Webdesign?",
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
									text: "Die Umsetzungszeit beträgt meist 3–6 Wochen, abhängig von Komplexität und Feedbackzyklen.",
								},
							},
							{
								"@type": "Question",
								name: "Wird meine Website bei Google gefunden?",
								acceptedAnswer: {
									"@type": "Answer",
									text: "Ja, durch moderne SEO-Technik (Next.js, Core Web Vitals) ist jede Website suchmaschinenfreundlich aufgebaut.",
								},
							},
							{
								"@type": "Question",
								name: "Bietet ihr Hosting oder Betreuung an?",
								acceptedAnswer: {
									"@type": "Answer",
									text: "Wir übernehmen auf Wunsch Hosting, Wartung und Contentpflege – inklusive Sicherheitsupdates und Optimierung.",
								},
							},
						],
					}),
				}}
			/>

			{/* Internal Links */}
			<section className="py-5 border-top" style={sectionStyle}>
				<Container>
					<h3 className="text-center fw-semibold mb-4">
						Weitere Webdesign-Standorte in der Nähe von {cityName}
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
										href={`/webdesign-agentur/${c.city.toLowerCase()}`}
										className="d-flex align-items-center justify-content-center text-decoration-none fw-medium text-center rounded-3"
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
											Webdesign Agentur <br />
											{c.city.charAt(0).toUpperCase() + c.city.slice(1)}
										</span>
									</Link>
								</Col>
							))}
					</Row>
				</Container>
			</section>

			<footer className="py-4 text-center" style={sectionStyle}>
				<Container>
					<p className="mb-0 small" style={muted}>
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
						<Link href="/seo" className="text-decoration-none">
							SEO-Agentur
						</Link>
					</p>
				</Container>
			</footer>
		</>
	);
}
