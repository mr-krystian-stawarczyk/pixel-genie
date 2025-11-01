// ✅ /pages/webentwicklung/[city].js — ULTRA LEVEL 4
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import citiesData from "@/data/citiesData";
import slugify from "@/lib/slugify";
import generateSeoData from "@/lib/generateSeoData";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import motion from "@/components/MotionLite";
const GoogleReviews = dynamic(() => import("@/components/GoogleReviews"), {
	ssr: false,
	loading: () => null,
});
const CityMap = dynamic(() => import("@/components/CityMap"), {
	ssr: false,
	loading: () => null,
});

import ReadingProgressBar from "@/components/ReadingProgressBar";
import SmartCTA from "@/components/SmartCTA";
import LocalNRWHook from "@/components/LocalNRWHook";
import PeopleAlsoRead from "@/components/PeopleAlsoRead";

// ─────────────────────────────────────────
// Static build
// ─────────────────────────────────────────
export async function getStaticPaths() {
	return {
		paths: citiesData.map((c) => ({
			params: { city: (c.slug ?? slugify(c.city)).toLowerCase() },
		})),
		fallback: "blocking",
	};
}

export async function getStaticProps({ params }) {
	const slug = params.city.toLowerCase();
	const cityData = citiesData.find(
		(c) => (c.slug ?? slugify(c.city)).toLowerCase() === slug
	);

	if (!cityData) return { notFound: true };

	const seo = generateSeoData({
		...cityData,
		titleOverride: `Webentwicklung in ${cityData.city} – schnelle & sichere Web-Apps`,
		descriptionOverride: `Webentwicklung in ${cityData.city}: Moderne Web-Apps, performanter Code, API-Integrationen & messbare Performance.`,
		ogTitleOverride: `Webentwicklung in ${cityData.city}`,
		serviceType: "Webentwicklung",
	});

	return { props: { cityData, seo } };
}

// ─────────────────────────────────────────
// Component
// ─────────────────────────────────────────
export default function WebentwicklungCity({ cityData, seo }) {
	const cityName =
		cityData.city.charAt(0).toUpperCase() + cityData.city.slice(1);
	const canonicalUrl = seo.canonical;

	const surface = {
		backgroundColor: "transparent",
		border: "1px solid rgba(255,255,255,0.12)",
	};

	return (
		<>
			<Head>
				<title>{seo.title}</title>
				<meta name="description" content={seo.description} />
				<link rel="canonical" href={canonicalUrl} />
				<meta
					property="og:image"
					content={`/og?title=Webentwicklung%20${cityName}&bg=black`}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(seo.schemaGraph),
					}}
				/>
			</Head>

			{/* Avoid mobile CTA overlap */}
			<style>{`@media (max-width: 991px) { .smart-cta {display:none!important;} }`}</style>

			<ReadingProgressBar />
			<SmartCTA triggerPercent={35} />

			{/* === HERO === */}
			<section className="py-5 ">
				<Container>
					<Row className="align-items-center g-4 mt-4">
						<Col lg={7}>
							<h1 className="display-5 fw-bold mb-3">
								Webentwicklung in {cityName} – schnell, sicher & skalierbar ⚡
							</h1>
							<p className="lead">
								Wir entwickeln digitale Produkte, die Geschwindigkeit,
								Benutzerfreundlichkeit und Business-Ziele vereinen. Von
								funktionalen Websites bis zu komplexen Web-Apps 🚀
							</p>
							<div className="d-flex flex-wrap gap-2 mt-3">
								<Badge bg="success">Performance</Badge>
								<Badge bg="info">UX First</Badge>
								<Badge bg="dark">API & Integrationen</Badge>
								<Badge bg="primary">Web-Security</Badge>
							</div>

							<Button
								variant="primary"
								size="lg"
								className="mt-4 text-white"
								onClick={() =>
									(window.location.href =
										"mailto:pixelgenie.marketing@gmail.com")
								}
							>
								Projekt-Anfrage starten →
							</Button>
						</Col>

						<Col lg={5}>
							<Card className="shadow-sm p-4" style={surface}>
								<h2 className="h5 fw-bold mb-3">
									Warum moderne Webentwicklung?
								</h2>
								<ul className="mb-0">
									<li style={{ color: "var(--text-color)" }}>
										Blitzschnelle Web-Erlebnisse
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Stabile & wartbare Architektur
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Für Wachstum & Skalierung gebaut
									</li>
								</ul>
							</Card>
						</Col>
					</Row>

					<div className="mt-4">
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
						>
							<GoogleReviews />
						</motion.div>
					</div>
				</Container>
			</section>
			{/* === LEISTUNGEN — WEBENTWICKLUNG === */}
			<section className="py-5" id="webentwicklung-preise">
				<Container>
					<h2 className="fw-bold text-center display-6 mb-4">
						Webentwicklung Preise in {cityName}
					</h2>
					<p className="text-center lead  mb-5">
						Schnelle Ladezeiten, skalierbare Architektur und Features, die
						wirklich etwas bringen. Wir entwickeln digitale Produkte, die
						**Umsatz & Effizienz** steigern.
					</p>

					<Row className="justify-content-center text-center g-4">
						{/* STARTER DEV */}
						<Col lg={4} md={6}>
							<motion.div
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.3 }}
								transition={{ duration: 0.7, ease: "easeOut" }}
							>
								<Card className="h-100 shadow-lg border-0 rounded-4 bg-transparent hover-scale">
									<Card.Body className="p-4">
										<h3 className="fw-bold text-primary">Starter Web-App</h3>
										<p
											className="small text-start"
											style={{ color: "var(--text-color)" }}
										>
											Für smarte digitale Ideen – MVP oder erste
											Automatisierungen.
											<br />
											<span className="fw-bold text-success">
												🎉 Promo: API-Analyse GRATIS!
											</span>
										</p>

										<h2 className="fw-bold my-3 text-primary">ab 890 €</h2>
										<hr />
										<ul className="small text-start">
											<li style={{ color: "var(--text-color)" }}>
												Bis 3 Views / Module
											</li>
											<li style={{ color: "var(--text-color)" }}>
												Responsive & Performance-Optimiert
											</li>
											<li style={{ color: "var(--text-color)" }}>
												Formulare & kleine Automationen
											</li>
											<li style={{ color: "var(--text-color)" }}>
												Sicherheit: SSL + Basic Protection
											</li>
										</ul>

										<Button
											className="mt-3"
											variant="primary"
											onClick={() => email("Starter Web-App (890 €)")}
										>
											Jetzt starten →
										</Button>
									</Card.Body>
								</Card>
							</motion.div>
						</Col>

						{/* BUSINESS DEV */}
						<Col lg={4} md={6}>
							<motion.div
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.3 }}
								transition={{ duration: 0.7, ease: "easeOut" }}
							>
								{" "}
								<Card className="h-100 shadow-xl rounded-4 bg-light border-success hover-scale">
									<Card.Body className="p-4">
										<h3 className="fw-bold text-success">Business Web-App</h3>
										<p
											className="small text-start important-text"
											style={{ color: "#000" }}
										>
											Die richtige Lösung für Firmen, die Prozesse
											digitalisieren wollen.
											<br />
											<span className="fw-bold text-success">
												🔥 Promo: 2 Monate Wartung inkl.
											</span>
										</p>

										<h2 className="fw-bold my-3 text-success">ab 1490 €</h2>
										<hr />
										<ul className="small text-start" style={{ color: "#000" }}>
											<li>Backend-Logiken & API-Integrationen</li>
											<li>Benutzerkonten & Rollen</li>
											<li>Dashboard & Datenverwaltung</li>
											<li>Analytics & Security Monitoring</li>
										</ul>

										<Button
											className="mt-3 text-white"
											variant="success"
											onClick={() => email("Business Web-App (1490 €)")}
										>
											Bestseller →
										</Button>
									</Card.Body>
								</Card>
							</motion.div>
						</Col>

						{/* PREMIUM DEV */}
						<Col lg={4} md={6}>
							<motion.div
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.3 }}
								transition={{ duration: 0.7, ease: "easeOut" }}
							>
								{" "}
								<Card
									className="h-100 text-light rounded-4 shadow-lg hover-scale"
									style={{
										background: "linear-gradient(135deg,#0b0b2e,#21216b)",
									}}
								>
									<Card.Body className="p-4">
										<h3 className="fw-bold text-warning">Premium Web-App</h3>
										<p className="small text-start text-light">
											Für Unternehmen, die Skalierung, Automatisierung &
											High-Security benötigen.
											<br />
											<span className="fw-bold text-warning">
												🚀 Promo: Performance-Audit GRATIS!
											</span>
										</p>

										<h2 className="fw-bold my-3 text-warning">ab 2490 €</h2>
										<hr className="border-light" />
										<ul className="small text-start text-light">
											<li>Komplexe Module & Echtzeit-Sync</li>
											<li>Headless CMS oder Admin-Backend</li>
											<li>Mehrsprachigkeit, 3rd-Party Systems</li>
											<li>Core Web Vitals 95+ Garantie ✔️</li>
										</ul>

										<Button
											className="mt-3 fw-bold text-dark"
											variant="warning"
											onClick={() => email("Premium Web-App (2490 €)")}
										>
											Premium buchen →
										</Button>
									</Card.Body>
								</Card>
							</motion.div>
						</Col>
					</Row>

					<p className="text-center text-muted small mt-4">
						Alle Preise zzgl. MwSt. – **messbare Ergebnisse**, keine versteckten
						Kosten.
					</p>
				</Container>
			</section>
			{/* === LEISTUNGEN — WEBENTWICKLUNG === */}
			<section className="py-5">
				<Container>
					<h2 className="h3 fw-bold text-center mb-5">
						Unsere Webentwicklungs-Leistungen in {cityName}
					</h2>

					<Row className="g-4">
						{/* PERFORMANCE */}
						<Col md={6} lg={4}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h6 fw-bold">Performance & Core Web Vitals</h3>
								<p className="mb-1">Schnelle Websites für Top UX & Rankings.</p>
								<ul className="mb-0">
									<li style={{ color: "var(--text-color)" }}>
										Optimierte Lighthouse Scores
									</li>
									<li style={{ color: "var(--text-color)" }}>
										PageSpeed Insights verbessert
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Stabiles Layout ohne CLS
									</li>
								</ul>
							</Card>
						</Col>

						{/* APPLICATION DEVELOPMENT */}
						<Col md={6} lg={4}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h6 fw-bold">Web-Apps & Funktionen</h3>
								<p className="mb-1">
									Interaktive Oberflächen, Login, Dashboards.
								</p>
								<ul className="mb-0">
									<li style={{ color: "var(--text-color)" }}>
										Benutzerkonten & Rollen
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Individuelle Module & Logiken
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Formulare & Automatisierungen
									</li>
								</ul>
							</Card>
						</Col>

						{/* API INTEGRATIONS */}
						<Col md={6} lg={4}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h6 fw-bold">APIs & Integrationen</h3>
								<p className="mb-1">
									Technik, die verbindet – ERP, Shopsysteme, Payment.
								</p>
								<ul className="mb-0">
									<li style={{ color: "var(--text-color)" }}>REST / GraphQL</li>
									<li style={{ color: "var(--text-color)" }}>
										Stripe, PayPal, etc.
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Daten-Sync in Echtzeit
									</li>
								</ul>
							</Card>
						</Col>

						{/* SECURITY */}
						<Col md={6} lg={4}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h6 fw-bold">Sicherheit & Wartung</h3>
								<p className="mb-1">
									Schutz vor Ausfällen & Angriffen — rund um die Uhr.
								</p>
								<ul className="mb-0">
									<li style={{ color: "var(--text-color)" }}>
										Security & Monitoring
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Automatische Backups
									</li>
									<li style={{ color: "var(--text-color)" }}>Uptime Check</li>
								</ul>
							</Card>
						</Col>

						{/* HEADLESS + CMS */}
						<Col md={6} lg={4}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h6 fw-bold">Headless & CMS</h3>
								<p className="mb-1">
									Inhalte selbst verwalten – flexibel & schnell.
								</p>
								<ul className="mb-0">
									<li style={{ color: "var(--text-color)" }}>
										Sanity / Strapi / WordPress
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Blog, Struktur & Tagging
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Kein technischer Aufwand für dich
									</li>
								</ul>
							</Card>
						</Col>

						{/* DEPLOYMENT & INFRA */}
						<Col md={6} lg={4}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h6 fw-bold">Deploy & Hosting-Beratung</h3>
								<p className="mb-1">Sichere Infrastruktur für Wachstum.</p>
								<ul className="mb-0">
									<li style={{ color: "var(--text-color)" }}>
										Static-first Deployments
									</li>
									<li style={{ color: "var(--text-color)" }}>CDN weltweit</li>
									<li style={{ color: "var(--text-color)" }}>
										Effiziente Skalierung
									</li>
								</ul>
							</Card>
						</Col>
					</Row>

					<div className="text-center mt-5">
						<Button
							href="/webentwicklung"
							variant="primary"
							className="text-white"
						>
							Mehr erfahren →
						</Button>
					</div>
				</Container>
			</section>
			{/* === CITY FACTS — DIGITAL CHANCEN IN DER REGION === */}
			<section className="py-5">
				<Container>
					<h2 className="h4 fw-bold mb-4">
						{cityName}: Digitale Chancen der lokalen Wirtschaft
					</h2>

					<Row className="g-4">
						{/* LEFT — City USP */}
						<Col lg={7}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<p className="mb-3">
									Unternehmen in {cityName} setzen immer mehr auf digitale
									Prozesse und automatisierte Lösungen. Dadurch entstehen für
									lokale Firmen enorme Chancen, Web-Apps einzusetzen, die Arbeit
									erleichtern und Kunden glücklich machen.
								</p>

								<ul className="mb-0">
									{cityData.population && (
										<li style={{ color: "var(--text-color)" }}>
											<strong>Einwohner:</strong>{" "}
											{cityData.population.toLocaleString("de-DE")}
										</li>
									)}
									{cityData.areaKm2 && (
										<li style={{ color: "var(--text-color)" }}>
											<strong>Fläche:</strong> {cityData.areaKm2} km²
										</li>
									)}
									{cityData.elevation && (
										<li style={{ color: "var(--text-color)" }}>
											<strong>Höhe:</strong> {cityData.elevation} m
										</li>
									)}
								</ul>
							</Card>
						</Col>

						{/* RIGHT — Local Map */}
						<Col lg={5}>
							<Card className="shadow-sm h-100" style={surface}>
								<Card.Body className="p-0">
									<CityMap cityData={cityData} height={260} />
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>
			{/* === CASE STUDIES — WEBAPPS, DIE FUNKTIONIEREN === */}
			<section className="py-5 bg-dark bg-opacity-10">
				<Container>
					<h2 className="h3 fw-bold text-center mb-5">
						Was moderne Webentwicklung in {cityName} bewirken kann
					</h2>

					<Row className="g-4">
						{/* Case 1 */}
						<Col lg={4}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h6 fw-bold mb-2">
									Speed Upgrade für Dienstleister
								</h3>
								<p className="mb-3">
									+71% schnellere Ladezeit → deutlich mehr Interaktionen auf
									Mobilgeräten.
								</p>
								<ul className="mb-0">
									<li style={{ color: "var(--text-color)" }}>
										Core Web Vitals verbessert
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Optimierte Rendering-Kette
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Mehr Klicks auf Kontakt-Buttons
									</li>
								</ul>
							</Card>
						</Col>

						{/* Case 2 */}
						<Col lg={4}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h6 fw-bold mb-2">Prozesse automatisiert</h3>
								<p className="mb-3">
									Täglich Zeit gewonnen durch automatisierte Datenverarbeitung.
								</p>
								<ul className="mb-0">
									<li style={{ color: "var(--text-color)" }}>
										CRM-Integration
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Automatische Formularzuordnung
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Weniger manuelle Fehler
									</li>
								</ul>
							</Card>
						</Col>

						{/* Case 3 */}
						<Col lg={4}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h6 fw-bold mb-2">Individuelle Web-App</h3>
								<p className="mb-3">
									Geschäftsprozesse digitalisiert — jederzeit skalierbar.
								</p>
								<ul className="mb-0">
									<li style={{ color: "var(--text-color)" }}>
										Benutzerkonten & Rollen
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Datengesteuerte Funktionen
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Sichere Cloud-Architektur
									</li>
								</ul>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>

			{/* === FAQ — WEBENTWICKLUNG IN {cityName} === */}
			<section className="py-5">
				<Container>
					<h2 className="h3 fw-bold mb-5">
						Häufige Fragen zur Webentwicklung in {cityName}
					</h2>

					<Row>
						<Col md={6}>
							<h3 className="h6 fw-bold">Was kostet Webentwicklung?</h3>
							<p>
								Projekte starten ab 890 € — abhängig vom Funktionsumfang &
								Integrationen.
							</p>

							<h3 className="h6 fw-bold">Wie lange dauert die Entwicklung?</h3>
							<p>
								Von 4 Wochen bis mehreren Monaten — je nachdem, wie komplex die
								Anwendung ist.
							</p>
						</Col>

						<Col md={6}>
							<h3 className="h6 fw-bold">Welche Technologien nutzt ihr?</h3>
							<p>
								Next.js, React, Node, Headless CMS, REST & GraphQL APIs. Modern,
								stabil & zukunftssicher.
							</p>

							<h3 className="h6 fw-bold">Ist die Web-App skalierbar?</h3>
							<p>
								Ja — Architektur für Wachstum inklusive. Step-by-step
								erweiterbar ✅
							</p>
						</Col>
					</Row>
				</Container>
			</section>
			{/* === CTA — FINISH WITH POWER === */}
			<section className="py-5 border-top" id="kontakt">
				<Container>
					<Row className="align-items-center g-3">
						<Col md={8}>
							<h2 className="h3 fw-semibold mb-3">
								Digitales Projekt in {cityName} starten ✨
							</h2>
							<ul className="mb-3">
								<li style={{ color: "var(--text-color)" }}>
									⚡ Schnelle Web-Apps & Performance
								</li>
								<li style={{ color: "var(--text-color)" }}>
									🔗 Automatisierte Workflows & Integrationen
								</li>
								<li style={{ color: "var(--text-color)" }}>
									✅ Kostenlose Einschätzung deines Projekts
								</li>
							</ul>
						</Col>

						<Col md={4} className="text-md-end">
							{/* Desktop CTA */}
							<Button
								variant="primary"
								size="lg"
								className="text-white d-none d-md-inline-block"
								onClick={() =>
									(window.location.href =
										"mailto:pixelgenie.marketing@gmail.com")
								}
							>
								🚀 Projekt starten →
							</Button>

							{/* Mobile CTA — scroll */}
							<Button
								variant="primary"
								size="lg"
								className="text-white d-md-none"
								onClick={() =>
									document
										.querySelector("#kontakt")
										?.scrollIntoView({ behavior: "smooth" })
								}
							>
								Kontakt aufnehmen →
							</Button>
						</Col>
					</Row>
				</Container>
			</section>

			{/* === INTERNAL LOCAL SEO — NRW AUTHORITY === */}
			<LocalNRWHook />

			{/* === RELATED CONTENT (TOPICAL FUNNEL) === */}
			<PeopleAlsoRead tagHint="Webentwicklung" />
		</>
	);
}
