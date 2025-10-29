// ✅ /pages/webdesign-agentur/[city].js — ULTRA LEVEL 4
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import citiesData from "@/data/citiesData";
import slugify from "@/lib/slugify";
import generateSeoData from "@/lib/generateSeoData"; // ✅ używamy tego samego jako SEO baseline
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import AutoTranslateArticle from "@/components/AutoTranslateArticle";

const GoogleReviews = dynamic(() => import("@/components/GoogleReviews"), {
	ssr: false,
});
const CityMap = dynamic(() => import("@/components/CityMap"), { ssr: false });

import ReadingProgressBar from "@/components/ReadingProgressBar";
import SmartCTA from "@/components/SmartCTA";
import LocalNRWHook from "@/components/LocalNRWHook";
import PeopleAlsoRead from "@/components/PeopleAlsoRead";

// ──────────────────────────
// Static paths
// ──────────────────────────
export async function getStaticPaths() {
	const paths = citiesData.map((c) => ({
		params: { city: (c.slug ?? slugify(c.city)).toLowerCase() },
	}));
	return { paths, fallback: false };
}

// ──────────────────────────
// Static props
// ──────────────────────────
export async function getStaticProps({ params }) {
	const slug = params.city.toLowerCase();
	const cityData =
		citiesData.find(
			(c) => (c.slug ?? slugify(c.city)).toLowerCase() === slug
		) ?? null;

	if (!cityData) return { notFound: true };

	const seo = generateSeoData({
		...cityData,
		titleOverride: `Webdesign Agentur in ${cityData.city} – Websites, die Kunden überzeugen`,
		descriptionOverride: `Modernes Webdesign in ${cityData.city} für mehr Leads, Vertrauen und Sichtbarkeit. Mit UX, SEO & Core Web Vitals.`,
		ogTitleOverride: `Webdesign in ${cityData.city} – Pixel-Genie`,
		serviceType: "Webdesign",
	});

	return { props: { cityData, seo } };
}

// ──────────────────────────
// Component
// ──────────────────────────
export default function WebdesignAgenturCity({ cityData, seo }) {
	const { city, population, areaKm2, elevation, historySnippet } = cityData;
	const cityName =
		cityData.city.charAt(0).toUpperCase() + cityData.city.slice(1);
	const canonicalUrl = seo.canonical;

	const surface = {
		backgroundColor: "transparent",
		borderColor: "rgba(255,255,255,0.12)",
		border: "1px solid rgba(255,255,255,0.12)",
	};

	const [ref1, inView1] = useInView({ threshold: 0.4 });
	const [ref2, inView2] = useInView({ threshold: 0.4 });
	const [ref3, inView3] = useInView({ threshold: 0.4 });

	const animate = {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: "easeOut" },
	};
	const c1 = useAnimation(),
		c2 = useAnimation(),
		c3 = useAnimation();

	useEffect(() => {
		if (inView1) c1.start(animate);
	}, [inView1]);
	useEffect(() => {
		if (inView2) c2.start(animate);
	}, [inView2]);
	useEffect(() => {
		if (inView3) c3.start(animate);
	}, [inView3]);

	const starterHTML = `
		<p>Ideal für den schnellen Start in ${city}. Modernes Design + Sichtbarkeit für lokale Kunden.</p>
		<p class="text-success fw-bold">🎉 Promo: Google Business Setup GRATIS!</p>
	`;

	const businessHTML = `
		<p>Unser Bestseller – Webseiten, die verkaufen. Mehr SEO, mehr Performance, mehr Umsatz.</p>
		<p class="text-success fw-bold">🔥 Promo: 3 Monate Wartung & Updates inkl.</p>
	`;

	const premiumHTML = `
		<p>High-End Websites für Unternehmen, die den Markt in ${city} dominieren wollen.</p>
		<p class="text-warning fw-bold">🚀 Promo: Conversion-Tracking + Prior-Support!</p>
	`;
	const email = (plan) => {
		window.location.href = `mailto:pixelgenie.marketing@gmail.com?subject=${encodeURIComponent(
			`Webdesign Anfrage (${plan}) – in ${city}`
		)}&body=${encodeURIComponent(
			`Hallo Pixel Genie Team,\n\nich interessiere mich für ${plan} in ${city}.\nWebsite:\nBranche:\nStarttermin:\n\nDanke!`
		)}`;
	};

	return (
		<>
			<Head>
				<title>{seo.title}</title>
				<meta name="description" content={seo.description} />
				<link rel="canonical" href={canonicalUrl} />
				<meta
					property="og:image"
					content={`/og?title=Webdesign%20${cityName}&bg=blue`}
				/>

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(seo.schemaGraph),
					}}
				/>
			</Head>

			{/* Hide CTA on mobile to avoid conflicts */}
			<style>{`@media (max-width: 991px) { .smart-cta {display:none !important;} }`}</style>

			<ReadingProgressBar />
			<SmartCTA triggerPercent={35} />

			{/* === HERO === */}
			<section className="py-5">
				<Container>
					<Row className="align-items-center mt-4">
						<Col lg={7}>
							<h1 className="display-5 fw-bold mb-3">
								Webdesign Agentur in {cityName} – Websites, die verkaufen 🎯
							</h1>
							<p className="lead">
								Wir gestalten Webseiten, die Vertrauen schaffen, Marken sichtbar
								machen und Besucher zu Kunden konvertieren.
							</p>

							<div className="d-flex flex-wrap gap-2 mt-2">
								<Badge bg="primary">UX & Conversion</Badge>
								<Badge bg="success">SEO Ready</Badge>
								<Badge bg="info">Core Web Vitals</Badge>
								<Badge bg="warning" text="dark">
									Branding
								</Badge>
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
								Kostenlose Beratung →
							</Button>
						</Col>

						<Col lg={5} className="mt-4">
							<Card className="shadow-sm p-4" style={surface}>
								<h2 className="h5 fw-semibold mb-3">
									Warum professionelles Webdesign?
								</h2>
								<p>
									In {cityName} entscheidet der digitale Auftritt über
									Sichtbarkeit, Vertrauen und Umsatz.
								</p>
							</Card>
						</Col>
					</Row>

					<Row className="mt-4">
						<Col>
							<GoogleReviews />
						</Col>
					</Row>
				</Container>
			</section>

			<Row className="justify-content-center text-center g-4">
				{/* Starter */}
				<Col lg={4} md={6}>
					<motion.div ref={ref1} initial={{ opacity: 0, y: 40 }} animate={c1}>
						<Card className="h-100 shadow-lg border-0 rounded-4 bg-transparent">
							<Card.Body className="p-4">
								<h3 className="fw-bold text-primary">Starter Website</h3>

								<div
									className="small text-start"
									style={{ color: "var(--text-color)" }}
								>
									<AutoTranslateArticle html={starterHTML} slug="ws1" />
								</div>

								<h2 className="fw-bold my-3 text-primary">ab 499 €</h2>
								<hr />

								<ul className="small text-start">
									<li style={{ color: "var(--text-color)" }}>
										One-Pager oder 3 Seiten
									</li>
									<li style={{ color: "var(--text-color)" }}>
										SEO-Basis + schnelle Ladezeiten
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Kontaktformular + Maps
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Rechtstexte inklusive
									</li>
								</ul>

								<Button
									className="mt-3"
									variant="primary"
									onClick={() => email("Starter (499 €)")}
								>
									Jetzt starten →
								</Button>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>

				{/* Business */}
				<Col lg={4} md={6}>
					<motion.div ref={ref2} initial={{ opacity: 0, y: 40 }} animate={c2}>
						<Card className="h-100 shadow-xl rounded-4 bg-light border-success">
							<Card.Body className="p-4">
								<h3 className="fw-bold text-success">Business Website</h3>

								<div className="small text-start important-text">
									<AutoTranslateArticle html={businessHTML} slug="ws2" />
								</div>

								<h2 className="fw-bold my-3 text-success">ab 899 €</h2>
								<hr />

								<ul className="small text-start" style={{ color: "#000" }}>
									<li>Bis 10 Seiten + CMS</li>
									<li>SEO + Content-Strategie</li>
									<li>Blog + Conversion-Tools</li>
									<li>Analytics & Tracking</li>
								</ul>

								<Button
									className="mt-3 text-white"
									variant="success"
									onClick={() => email("Business (899 €)")}
								>
									Bestseller →
								</Button>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>

				{/* Premium */}
				<Col lg={4} md={6}>
					<motion.div ref={ref3} initial={{ opacity: 0, y: 40 }} animate={c3}>
						<Card
							className="h-100 text-light rounded-4 shadow-lg"
							style={{ background: "linear-gradient(135deg,#0b0b2e,#21216b)" }}
						>
							<Card.Body className="p-4">
								<h3 className="fw-bold text-warning">Premium Website</h3>

								<div className="small text-start text-light">
									<AutoTranslateArticle html={premiumHTML} slug="ws3" />
								</div>

								<h2 className="fw-bold my-3 text-warning">ab 1499 €</h2>
								<hr className="border-light" />

								<ul className="small text-start text-light">
									<li>Unbegrenzte Seiten</li>
									<li>UX/UI nach Branding</li>
									<li>Mehrsprachigkeit & E-Commerce</li>
									<li>Core Web Vitals 95+ Garantie</li>
								</ul>

								<Button
									className="mt-3 fw-bold text-dark"
									variant="warning"
									onClick={() => email("Premium (1499 €)")}
								>
									Premium buchen →
								</Button>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>
			</Row>

			{/* === LEISTUNGEN — WEB­DESIGN === */}
			<section className="py-5">
				<Container>
					<h2 className="h3 fw-bold text-center mb-5">
						Webdesign-Leistungen in {cityName}
					</h2>

					<Row className="g-4">
						{/* UX / UI */}
						<Col md={6} lg={4}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h6 fw-bold mb-2">UX / UI Design</h3>
								<p className="mb-3">
									Klare Nutzerführung, Vertrauen, Conversion-Fokus.
								</p>
								<ul style={{ fontSize: "0.95rem" }} className="mb-0">
									<li style={{ color: "var(--text-color)" }}>
										Wireframes & Prototypen
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Barrierefreiheit (A11y Basics)
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Conversion-orientierte Layouts
									</li>
								</ul>
							</Card>
						</Col>

						{/* Responsive + Brand */}
						<Col md={6} lg={4}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h6 fw-bold mb-2">Responsive & Branding</h3>
								<p className="mb-3">
									Pixelgenau auf allen Geräten – im Look deiner Marke.
								</p>
								<ul style={{ fontSize: "0.95rem" }} className="mb-0">
									<li style={{ color: "var(--text-color)" }}>
										Mobile-first Layouts
									</li>
									<li style={{ color: "var(--text-color)" }}>
										CI-Guidelines Umsetzung
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Illustration / Icon Set (optional)
									</li>
								</ul>
							</Card>
						</Col>

						{/* SEO-Ready */}
						<Col md={6} lg={4}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h6 fw-bold mb-2">SEO-Ready Entwicklung</h3>
								<p className="mb-3">
									Sauberes HTML, strukturierte Daten, sinnvolle IA.
								</p>
								<ul style={{ fontSize: "0.95rem" }} className="mb-0">
									<li style={{ color: "var(--text-color)" }}>
										Meta, OG, Sitemaps
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Schema.org & Breadcrumbs
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Interne Verlinkung / IA
									</li>
								</ul>
							</Card>
						</Col>

						{/* Performance */}
						<Col md={6} lg={4}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h6 fw-bold mb-2">Performance / CWV</h3>
								<p className="mb-3">Schnelle Ladezeiten & stabile Layouts.</p>
								<ul style={{ fontSize: "0.95rem" }} className="mb-0">
									<li style={{ color: "var(--text-color)" }}>
										Core Web Vitals Optimierung
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Bild-Optimierung & Preload
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Static-first Deployment
									</li>
								</ul>
							</Card>
						</Col>

						{/* CMS */}
						<Col md={6} lg={4}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h6 fw-bold mb-2">CMS & Inhalte</h3>
								<p className="mb-3">
									Einfache Pflege – Headless oder klassisch.
								</p>
								<ul style={{ fontSize: "0.95rem" }} className="mb-0">
									<li style={{ color: "var(--text-color)" }}>
										Sanity / Strapi / WordPress
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Blog, Landingpages, Tags
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Redaktions-Workflow & Schulung
									</li>
								</ul>
							</Card>
						</Col>

						{/* Betreuung */}
						<Col md={6} lg={4}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h6 fw-bold mb-2">Betreuung & Sicherheit</h3>
								<p className="mb-3">
									Updates, Monitoring, Schutz & schnelle Hilfe.
								</p>
								<ul style={{ fontSize: "0.95rem" }} className="mb-0">
									<li style={{ color: "var(--text-color)" }}>
										Security & Backups
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Uptime Monitoring
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Performance-Reports
									</li>
								</ul>
							</Card>
						</Col>
					</Row>

					<div className="text-center mt-5">
						<Button href="/webdesign" variant="primary" className="text-white">
							Mehr zum Webdesign →
						</Button>
					</div>
				</Container>
			</section>
			{/* === PROZESS + USPs === */}
			<section className="py-5">
				<Container>
					<Row className="align-items-start g-4">
						{/* PROCESS */}
						<Col lg={7}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h2 className="h4 fw-semibold mb-3">
									Unser Webdesign-Prozess in {cityName}
								</h2>
								<ol style={{ marginBottom: 0 }}>
									<li className="mb-2" style={{ color: "var(--text-color)" }}>
										<strong>Strategie & Zielgruppen-Analyse:</strong> Was
										überzeugt deine Kunden in {cityName} wirklich?
									</li>
									<li className="mb-2" style={{ color: "var(--text-color)" }}>
										<strong>UX-Konzept & Wireframing:</strong> Nutzerfluss
										planen → Barrieren raus, Conversion rein ✅
									</li>
									<li className="mb-2" style={{ color: "var(--text-color)" }}>
										<strong>Branding & UI-Design:</strong> Wiedererkennbar,
										modern, professionell — Pixel-perfekt ✨
									</li>
									<li className="mb-2" style={{ color: "var(--text-color)" }}>
										<strong>Entwicklung in Next.js:</strong> SEO-ready, super
										schnell und zukunftssicher ⚡
									</li>
									<li className="mb-2" style={{ color: "var(--text-color)" }}>
										<strong>Launch + Monitoring:</strong> Zuwachs bei Besuchern,
										Leads & Google-Ranking messbar 📈
									</li>
								</ol>
							</Card>
						</Col>

						{/* WHY US */}
						<Col lg={5}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h5 fw-bold mb-3">Warum Pixel-Genie 💡</h3>
								<ul style={{ fontSize: "0.96rem" }}>
									<li style={{ color: "var(--text-color)" }}>
										Webdesign mit echter Business-Absicht
									</li>
									<li style={{ color: "var(--text-color)" }}>
										UX + SEO + Technik → inhouse integriert
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Modernste Technologie (Next.js, Headless)
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Kein Template, alles individuell
									</li>
								</ul>
								<Button
									variant="outline-primary"
									className="mt-3"
									onClick={() =>
										(window.location.href =
											"mailto:pixelgenie.marketing@gmail.com")
									}
								>
									Jetzt unverbindlich starten →
								</Button>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>
			{/* === CITY FACTS — LOCAL SEO POWER === */}
			<section className="py-5 bg-dark bg-opacity-10">
				<Container>
					<Row className="align-items-start g-4">
						{/* LEFT: City Intro */}
						<Col lg={8}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h2 className="h4 fw-semibold mb-3">
									Was macht {cityName} aus?
								</h2>

								{historySnippet && <p className="mb-4">{historySnippet}</p>}

								<Row>
									<Col md={6}>
										<h3 className="h6 fw-bold mb-2">Stadtprofil</h3>
										<ul className="mb-0">
											{population && (
												<li style={{ color: "var(--text-color)" }}>
													<strong>Einwohner:</strong>{" "}
													{population.toLocaleString("de-DE")}
												</li>
											)}
											{areaKm2 && (
												<li style={{ color: "var(--text-color)" }}>
													<strong>Fläche:</strong> {areaKm2} km²
												</li>
											)}
											{elevation && (
												<li style={{ color: "var(--text-color)" }}>
													<strong>Höhe:</strong> {elevation} m
												</li>
											)}
										</ul>
									</Col>

									<Col md={6}>
										<h3 className="h6 fw-bold mb-2">Lokale Chancen</h3>
										<ul className="mb-0">
											<li style={{ color: "var(--text-color)" }}>
												Wachsende digitale Nachfrage
											</li>
											<li style={{ color: "var(--text-color)" }}>
												Viele KMU mit Online-Potenzial
											</li>
											<li style={{ color: "var(--text-color)" }}>
												Starker Wettbewerb → Differenzierung nötig
											</li>
										</ul>
									</Col>
								</Row>

								<div className="mt-4">
									Eine moderne Website bietet Unternehmen in {cityName}:
									<ul className="mt-2">
										<li style={{ color: "var(--text-color)" }}>
											Mehr Sichtbarkeit & Vertrauen
										</li>
										<li style={{ color: "var(--text-color)" }}>
											Bessere Kundenkommunikation
										</li>
										<li style={{ color: "var(--text-color)" }}>
											Höhere Conversion Rates
										</li>
									</ul>
								</div>
							</Card>
						</Col>

						{/* RIGHT: Map */}
						<Col lg={4}>
							<Card className="shadow-sm h-100" style={surface}>
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
			{/* === CASE STUDIES — WEB­DESIGN === */}
			<section className="py-5">
				<Container>
					<h2 className="h3 fw-bold mb-4">
						Was unsere Webdesign-Projekte bewirken
					</h2>

					<Row className="g-4">
						{/* Case Study #1 */}
						<Col lg={4}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h6 fw-bold">Relaunch für lokalen Anbieter</h3>
								<p>
									+92% Conversion Rate dank klarer Nutzerführung &
									Trust-Elementen.
								</p>
								<ul style={{ fontSize: "0.9rem" }}>
									<li style={{ color: "var(--text-color)" }}>
										Pagespeed A (Mobile & Desktop)
									</li>
									<li style={{ color: "var(--text-color)" }}>Neues Branding</li>
									<li style={{ color: "var(--text-color)" }}>
										Kontaktabschlüsse +137%
									</li>
								</ul>
							</Card>
						</Col>

						{/* Case Study #2 */}
						<Col lg={4}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h6 fw-bold">UX Upgrade für B2B-Webseite</h3>
								<p>37% längere Verweildauer + sichtbare Ranking-Gewinne.</p>
								<ul style={{ fontSize: "0.9rem" }}>
									<li style={{ color: "var(--text-color)" }}>
										Informationsarchitektur neu gedacht
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Messbare Lead-Qualität
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Markenvertrauen gestärkt
									</li>
								</ul>
							</Card>
						</Col>

						{/* Case Study #3 */}
						<Col lg={4}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h6 fw-bold">E-Commerce Design Optimierung</h3>
								<p>+29% abgeschlossene Warenkörbe nach Redesign.</p>
								<ul style={{ fontSize: "0.9rem" }}>
									<li style={{ color: "var(--text-color)" }}>
										Produktdarstellung optimiert
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Kurzere Wege zum Checkout
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Bessere mobile Performance
									</li>
								</ul>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>

			{/* === FAQ: WEB­DESIGN IN {cityName} === */}
			<section className="py-5" id="faq">
				<Container>
					<h2 className="h3 fw-bold mb-4">
						Häufige Fragen zum Webdesign in {cityName}
					</h2>

					<Row className="g-4">
						<Col md={6}>
							<h3 className="h6 fw-semibold">Was kostet Webdesign?</h3>
							<p>
								Webdesign-Projekte starten ab 200 € — abhängig von Funktionen,
								Inhalt, CMS & Branding.
							</p>

							<h3 className="h6 fw-semibold">Wie dauert die Umsetzung?</h3>
							<p>Typischerweise 3–6 Wochen — je nach Freigaben und Material.</p>
						</Col>

						<Col md={6}>
							<h3 className="h6 fw-semibold">Ist die Website SEO-optimiert?</h3>
							<p>
								Ja — wir denken Technik, UX und Google zusammen. Von Anfang an
								SEO-ready ✅
							</p>

							<h3 className="h6 fw-semibold">
								Übernehmt ihr Support & Hosting?
							</h3>
							<p>
								Ja — wir bieten langfristige Betreuung & technische Sicherheit.
							</p>
						</Col>
					</Row>
				</Container>
			</section>
			{/* === CTA – FINISH STRONG === */}
			<section className="py-5 border-top" id="kontakt">
				<Container>
					<Row className="align-items-center g-3">
						<Col md={8}>
							<h2 className="h3 fw-semibold mb-3">
								Starte dein Webprojekt in {cityName} ✨
							</h2>
							<p>
								Wir zeigen dir, wie deine Website mehr Sichtbarkeit und
								Vertrauen erzeugt — und Anfragen messbar steigen 📈
							</p>
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
								✉️ Kostenlose Beratung →
							</Button>

							{/* Mobile CTA – scroll (kein mail-client Chaos) */}
							<Button
								variant="primary"
								size="lg"
								className="text-white d-md-none"
								onClick={() => {
									const el = document.querySelector("#kontakt");
									el?.scrollIntoView({ behavior: "smooth" });
								}}
							>
								Kontakt aufnehmen →
							</Button>
						</Col>
					</Row>
				</Container>
			</section>

			{/* === TOPICAL INTERNAL LINKING (LOCAL SEO) === */}
			<LocalNRWHook />

			{/* === BLOG STRUCTURED INTERNAL LINKS === */}
			<PeopleAlsoRead tagHint="Webdesign" />
		</>
	);
}
