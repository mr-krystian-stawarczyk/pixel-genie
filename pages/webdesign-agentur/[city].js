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
	const { city } = cityData;
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

	const muted = { opacity: 0.85 };

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
			<section className="py-5 my-5 border-bottom" style={sectionStyle}>
				<Container>
					<Row className="align-items-center">
						<Col lg={7} className="mb-4 mb-lg-0">
							<h1 className="display-5 fw-bold mb-3">
								Webdesign Agentur in {cityName} – digitales Design mit Wirkung
							</h1>
							<p className="lead">
								<strong>Pixel-Genie</strong> steht für kreative Webgestaltung,
								moderne Markenkommunikation und messbare Ergebnisse. Wir
								verbinden Ästhetik mit Performance – für Websites, die Emotionen
								wecken, Vertrauen schaffen und verkaufen.
							</p>

							<Button
								variant="primary"
								F
								size="lg"
								className="mt-3 text-white"
								onClick={handleEmailClick}
							>
								Kostenloses Erstgespräch anfordern →
							</Button>
						</Col>

						<Col lg={5}>
							<Card className="shadow-sm" style={surfaceStyle} border="1">
								<Card.Body>
									<h2 className="h4 fw-semibold mb-3">
										🚀 Warum professionelles Webdesign in {cityName}?
									</h2>
									<ol>
										<li>Markenanalyse – Werte, Vision, Identität verstehen</li>
										<li>
											User Experience – Wireframes, Journey Mapping &
											Conversion-Flows
										</li>
										<li>
											UI-Design – Farben, Typografie & Animation mit Emotion
										</li>
										<li>Entwicklung – responsiv, schnell, barrierefrei</li>
										<li>Launch & Growth – Betreuung, Tracking, Optimierung</li>
									</ol>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>

			{/* Features + Map */}
			<section className="py-5" style={sectionStyle}>
				<Container>
					<Row>
						<Col lg={8} className="mb-4 mb-lg-0">
							<Card className="shadow-sm" style={surfaceStyle} border="1">
								<Card.Body>
									<h2 className="h4 fw-semibold mb-3">
										Unser Webdesign-Prozess in {cityName}
									</h2>
									<ol>
										<li>
											Analyse & Konzept – Zielgruppen, Markenwerte,
											Contentstruktur
										</li>
										<li>
											UX-Design & Wireframes – Nutzerfluss, Call-to-Action,
											Layout
										</li>
										<li>Entwicklung – Performance, SEO, Responsive Design</li>
										<li>Launch & Betreuung – Hosting, Updates, Monitoring</li>
									</ol>
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

			{/* Leistungen */}
			<section className="py-5 border-top border-bottom" style={sectionStyle}>
				<Container>
					<Row className="justify-content-center align-items-center">
						<Col md={6} className="text-center">
							<h3 className="h6 fw-semibold mb-2">Design & Markenführung</h3>
							<ul className="mb-4 list-unstyled">
								<li>Branding & visuelle Identität</li>
								<li>UI/UX-Konzeption & Wireframes</li>
								<li>Responsives Webdesign (Desktop/Mobile)</li>
							</ul>
						</Col>
						<Col md={6} className="text-center">
							<h3 className="h6 fw-semibold mb-2">Technik & Performance</h3>
							<ul className="list-unstyled">
								<li>Next.js & Headless CMS Integration</li>
								<li>Core Web Vitals & SEO-Setup</li>
								<li>DSGVO, Tracking & Hosting-Betreuung</li>
							</ul>
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
								Deine Marke verdient mehr als nur eine Website
							</h2>
							<p>
								Wir gestalten digitale Erlebnisse, die beeindrucken,
								funktionieren und deine Marke einzigartig positionieren.
							</p>
							<Button variant="outline-primary" onClick={handleEmailClick}>
								Projektideen besprechen →
							</Button>
						</Col>

						<Col md={4}>
							<Card className="shadow-sm" style={surfaceStyle} border="1">
								<Card.Body>
									<h3 className="h5 fw-bold mb-2">💬 Projekt anfragen</h3>
									<p>
										Erzähl uns von deiner Idee, deinem Stil oder deiner Marke.
										Wir zeigen dir, wie aus Vision Design wird – in {cityName}{" "}
										und darüber hinaus.
									</p>
									<Button
										variant="primary"
										size="sm"
										onClick={handleEmailClick}
									>
										Projekt starten
									</Button>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>

			{/* Internal Link Building */}
			<section className="py-5 border-top" style={sectionStyle}>
				<Container>
					<Row className="my-4">
						<Col>
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
													whiteSpace: "normal", // <-- ważne!
													wordBreak: "break-word", // <-- dzieli długie słowa
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
						</Col>
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
						<Link href="/webdesign" className="text-decoration-none">
							Webdesign
						</Link>
					</p>
				</Container>
			</footer>
		</>
	);
}
