// ✅ /pages/webseitenerstellung/[city].js — ULTRA LEVEL 4
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import citiesData from "@/data/citiesData";
import slugify from "@/lib/slugify";
import generateSeoData from "@/lib/generateSeoData";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

const GoogleReviews = dynamic(() => import("@/components/GoogleReviews"), {
	ssr: false,
});
const CityMap = dynamic(() => import("@/components/CityMap"), { ssr: false });

import ReadingProgressBar from "@/components/ReadingProgressBar";
import SmartCTA from "@/components/SmartCTA";
import LocalNRWHook from "@/components/LocalNRWHook";
import PeopleAlsoRead from "@/components/PeopleAlsoRead";

export async function getStaticPaths() {
	return {
		paths: citiesData.map((c) => ({
			params: { city: (c.slug ?? slugify(c.city)).toLowerCase() },
		})),
		fallback: false,
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
		titleOverride: `Website erstellen lassen in ${cityData.city} – professionell & schnell`,
		descriptionOverride: `Webseiten, die Vertrauen schaffen & messbar anfragen generieren – Website erstellen in ${cityData.city} mit Pixel-Genie.`,
		ogTitleOverride: `Webseitenerstellung in ${cityData.city}`,
		serviceType: "Webseitenerstellung",
	});

	return { props: { cityData, seo } };
}

export default function WebseitenerstellungCity({ cityData, seo }) {
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
					content={`/og?title=Webseite%20${cityName}&bg=teal`}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(seo.schemaGraph),
					}}
				/>
			</Head>

			<style>{`@media (max-width: 991px) { .smart-cta { display:none!important; } }`}</style>

			<ReadingProgressBar />
			<SmartCTA triggerPercent={30} />

			{/* ===== HERO ===== */}
			<section className="py-5">
				<Container>
					<Row className="align-items-center g-4 mt-4">
						<Col lg={7}>
							<h1 className="display-5 fw-bold mb-3">
								Website erstellen lassen in {cityName} – modern. schnell.
								überzeugend.
							</h1>
							<p className="lead">
								Wir entwickeln deine Website so, dass sie **sichtbar wird**,
								**überzeugt** und **Anfragen generiert**. Mit klarem Design,
								SEO-Grundlage & messbaren Ergebnissen.
							</p>
							<div className="d-flex flex-wrap gap-2 mt-3">
								<Badge bg="primary">SEO-optimiert</Badge>
								<Badge bg="success">Core Web Vitals</Badge>
								<Badge bg="info">Conversion-Fokus</Badge>
								<Badge bg="warning" text="dark">
									Responsive
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
								Jetzt kostenlos beraten lassen →
							</Button>
						</Col>

						<Col lg={5}>
							<Card className="shadow-sm p-4" style={surface}>
								<h2 className="h5 fw-bold mb-3">Warum eine neue Website?</h2>
								<ul className="mb-0">
									<li style={{ color: "var(--text-color)" }}>
										Moderner Webauftritt
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Mehr Vertrauen & lokale Auffindbarkeit
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Messbare Leads statt „Visitenkarte online“
									</li>
								</ul>
							</Card>
						</Col>
					</Row>

					<div className="mt-4">
						<GoogleReviews />
					</div>
				</Container>
			</section>
			{/* === LEISTUNGEN — WEBSITE ERSTELLEN LASSEN === */}
			<section className="py-5">
				<Container id="pricing" className="py-5">
					<Row className="text-center mb-4">
						<Col>
							<h2 className="fw-bold">
								Pakete &amp; Preise – fair &amp; transparent
							</h2>
							<p className="text-muted">
								Sinnvolle Stufen für Start, Wachstum und Marke.
							</p>
						</Col>
					</Row>

					<Row className="g-4">
						{/* BASIC */}
						<Col lg={4} md={6}>
							<Card className="h-100 shadow-lg border-0 rounded-4 bg-transparent">
								<Card.Body className="p-4">
									<h3 className="fw-bold text-primary mb-2">BASIC WEBSITE</h3>
									<p>
										Ideal für den schnellen Start – Ihre erste professionelle
										Website zum besten Preis.
									</p>
									<h2 className="fw-bold mb-3 text-primary">ab 499 €</h2>
									<hr />
									<ul className="text-start">
										<li>One-Pager / Landingpage</li>
										<li>Responsive (Mobile &amp; Desktop)</li>
										<li>Basis-SEO &amp; schnelle Ladezeiten</li>
										<li>Kontaktformular &amp; Google Maps</li>
										<li>Impressum &amp; Datenschutz inklusive</li>
									</ul>
									<Button
										variant="primary"
										className="mt-2 px-4"
										onClick={() => handleEmail("BASIC WEBSITE in " + city)}
									>
										Jetzt anfragen
									</Button>
								</Card.Body>
							</Card>
						</Col>

						{/* BUSINESS */}
						<Col lg={4} md={6}>
							<Card className="h-100 shadow-xl rounded-4 bg-light">
								<Card.Body className="p-4">
									<h3 className="fw-bold text-success mb-2">
										BUSINESS WEBSITE
									</h3>
									<p className="text-muted">
										Unser Bestseller – Leistung + Design für ambitionierte
										Unternehmen.
									</p>
									<h2 className="fw-bold mb-3 text-success">ab 899 €</h2>
									<hr />
									<ul className="text-start text-black">
										<li>Mehrseitige Website (bis 5 Seiten)</li>
										<li>Individuelles Design mit CMS (Headless)</li>
										<li>SEO &amp; Performance-Optimierung (Lighthouse 90+)</li>
										<li>Analytics &amp; Search Console</li>
										<li>1 Jahr Hosting &amp; Wartung</li>
									</ul>
									<Button
										variant="success"
										className="mt-2 px-4 text-white"
										onClick={() => handleEmail("BUSINESS WEBSITE in " + city)}
									>
										Bestseller anfragen
									</Button>
								</Card.Body>
							</Card>
						</Col>

						{/* PREMIUM */}
						<Col lg={4} md={6}>
							<Card
								className="h-100 rounded-4 text-light shadow-lg"
								style={{
									background: "linear-gradient(135deg,#0b0b2e,#21216b)",
								}}
							>
								<Card.Body className="p-4">
									<h3 className="fw-bold text-warning mb-2">PREMIUM WEBSITE</h3>
									<p className="text-white">
										Für Marken, die Maßstäbe setzen – High-End Performance, UX
										und Strategie.
									</p>
									<h2 className="fw-bold mb-3 text-warning">ab 1499 €</h2>
									<hr className="border-light" />
									<ul className="text-start text-white">
										<li>Individuelles UX/UI-Konzept</li>
										<li>Unbegrenzte Seiten &amp; CMS</li>
										<li>Technische SEO + Core Web Vitals 95+</li>
										<li>Blog + Content-System</li>
										<li>Conversion-Tracking &amp; A/B-Tests</li>
									</ul>
									<Button
										variant="warning"
										className="mt-2 fw-bold px-4 text-dark"
										onClick={() => handleEmail("PREMIUM WEBSITE in " + city)}
									>
										Premium buchen
									</Button>
								</Card.Body>
							</Card>
						</Col>
					</Row>

					{/* ADD-ONS */}
					<Row className="justify-content-center text-center mt-5">
						<Col lg={8}>
							<h3 className="fw-bold mb-3">✨ Erweiterungen &amp; Add-ons</h3>
							<p>Individuell kombinierbar – mehr Wirkung für Ihre Website.</p>
						</Col>
					</Row>
					<Row className="justify-content-center text-center g-3 mt-3">
						{[
							["📰 Blog Integration", "+199 €"],
							["🛒 Online Shop", "+499 €"],
							["🚀 SEO Boost", "+149 €"],
							["🔧 Wartungspaket", "+29 €/Monat"],
						].map(([label, price], i) => (
							<Col md={3} sm={6} key={i}>
								<Card className="border-0 shadow-sm p-3">
									<h5 className="fw-bold text-black">{label}</h5>
									<p className="text-muted small">
										<b>{price}</b>
									</p>
								</Card>
							</Col>
						))}
					</Row>
					<Row className="justify-content-center text-center mt-4">
						<Col lg={8}>
							<p className="text-muted">
								Alle Preise zzgl. MwSt. – transparent, fair &amp; top
								Performance.
							</p>
						</Col>
					</Row>
				</Container>
			</section>
			{/* === LEISTUNGEN — WEBSITE ERSTELLEN LASSEN === */}
			<section className="py-5">
				<Container>
					<h2 className="h3 fw-bold text-center mb-5">
						Unsere Leistungen im Webseitenerstellen in {cityName}
					</h2>

					<Row className="g-4">
						{/* INDIVIDUELLE WEBDESIGNS */}
						<Col md={6} lg={4}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h6 fw-bold">Individuelles Webdesign</h3>
								<p className="mb-1">
									Keine Templates, 100% auf deine Marke abgestimmt.
								</p>
								<ul className="mb-0">
									<li style={{ color: "var(--text-color)" }}>
										Modernes Layout
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Wiedererkennbares Branding
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Fokus auf Vertrauen & Klarheit
									</li>
								</ul>
							</Card>
						</Col>

						{/* SPEED + MOBILE FIRST */}
						<Col md={6} lg={4}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h6 fw-bold">Mobile & Speed Optimierung</h3>
								<p className="mb-1">
									Core Web Vitals für Top-Platzierungen & schnelle UX.
								</p>
								<ul className="mb-0">
									<li style={{ color: "var(--text-color)" }}>
										Schnelle Ladezeiten
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Mobil zuerst gedacht
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Stabile Layouts ohne CLS
									</li>
								</ul>
							</Card>
						</Col>

						{/* CONTENT + REDAKTIONSFÄHIG */}
						<Col md={6} lg={4}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h6 fw-bold">Inhalte & Redaktion</h3>
								<p className="mb-1">
									Klar strukturierte Inhalte für Google & Nutzer.
								</p>
								<ul className="mb-0">
									<li style={{ color: "var(--text-color)" }}>
										Keyword-geführte Texte
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Visuelle Klarheit
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Conversion Calls an den richtigen Stellen
									</li>
								</ul>
							</Card>
						</Col>

						{/* CMS */}
						<Col md={6} lg={4}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h6 fw-bold">CMS nach Wahl</h3>
								<p className="mb-1">
									Du steuerst deine Website einfach selbst.
								</p>
								<ul className="mb-0">
									<li style={{ color: "var(--text-color)" }}>
										Sanity / Strapi / WordPress
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Eigene Blog-Struktur möglich
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Ohne technische Hürden
									</li>
								</ul>
							</Card>
						</Col>

						{/* LEAD-MASCHINE */}
						<Col md={6} lg={4}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h6 fw-bold">Lead-Generierung</h3>
								<p className="mb-1">
									Webseiten, die Anfragen erzeugen — nicht nur hübsch aussehen.
								</p>
								<ul className="mb-0">
									<li style={{ color: "var(--text-color)" }}>
										Kontaktformulare & Chat
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Tracking ohne Cookies möglich
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Conversion-Optimierung inklusive
									</li>
								</ul>
							</Card>
						</Col>

						{/* BETREUUNG */}
						<Col md={6} lg={4}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h6 fw-bold">Wartung & Sicherheit</h3>
								<p className="mb-1">
									Updates, Security & Check-ups — entspannt für dich.
								</p>
								<ul className="mb-0">
									<li style={{ color: "var(--text-color)" }}>
										Schnelle Unterstützung
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Regelmäßige technische Checks
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Backup-Strategien optional
									</li>
								</ul>
							</Card>
						</Col>
					</Row>

					<div className="text-center mt-5">
						<Button
							href="/webseitenerstellung"
							variant="primary"
							className="text-white"
						>
							Mehr zur Webseitenerstellung →
						</Button>
					</div>
				</Container>
			</section>
			{/* === CITY-FAKTS — LOKALE SICHTBARKEIT === */}
			<section className="py-5">
				<Container>
					<h2 className="h4 fw-bold mb-4">{cityName} auf einen Blick 🌍</h2>

					<Row className="g-4">
						{/* Kennzahlen */}
						<Col lg={7}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<p className="mb-3">
									Unternehmen in {cityName} profitieren von einer starken
									digitalen Präsenz — denn Kunden suchen heute zuerst online.
									Eine professionelle Website ist daher entscheidend für
									Wettbewerbsfähigkeit.
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

						{/* Map */}
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
			{/* === CASE STUDIES – WEBSITE RELAUNCH & NEUBAUPROJEKTE === */}
			<section className="py-5 bg-dark bg-opacity-10">
				<Container>
					<h2 className="h3 fw-bold mb-5 text-center">
						Erfolgreiche Webprojekte — vor & nach dem Launch
					</h2>

					<Row className="g-4">
						{/* Case 1 */}
						<Col lg={4}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h6 fw-bold mb-2">
									Website für lokalen Dienstleister
								</h3>
								<p className="mb-3">
									+138% Kontaktanfragen in den ersten 8 Wochen nach Launch.
								</p>
								<ul className="mb-0">
									<li style={{ color: "var(--text-color)" }}>
										Schnelle mobile Ladezeit
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Klare Service-Darstellung
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Lead-Optimiertes Formular
									</li>
								</ul>
							</Card>
						</Col>

						{/* Case 2 */}
						<Col lg={4}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h6 fw-bold mb-2">
									Relaunch für Unternehmensseite
								</h3>
								<p className="mb-3">
									42% längere Besuchszeit & deutlicher Traffic-Anstieg.
								</p>
								<ul className="mb-0">
									<li style={{ color: "var(--text-color)" }}>
										UX-Verbesserungen & Strukturierung
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Conversion gesteigerte Buttons
									</li>
									<li style={{ color: "var(--text-color)" }}>
										SEO-Basis neu aufgebaut
									</li>
								</ul>
							</Card>
						</Col>

						{/* Case 3 */}
						<Col lg={4}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h6 fw-bold mb-2">E-Commerce Mini-Shop</h3>
								<p className="mb-3">
									+22% abgeschlossene Warenkörbe in 3 Monaten.
								</p>
								<ul className="mb-0">
									<li style={{ color: "var(--text-color)" }}>
										Produktfilter optimiert
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Checkout kürzer gemacht
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Schnellere Bilder & Caching
									</li>
								</ul>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>

			{/* === FAQ – Website erstellen in {cityName} === */}
			<section className="py-5">
				<Container>
					<h2 className="h3 fw-bold mb-5">
						Häufige Fragen zum Website erstellen lassen in {cityName}
					</h2>

					<Row>
						<Col md={6}>
							<h3 className="h6 fw-bold">Was kostet eine Website?</h3>
							<p>
								Websites starten ab 499 € — je nach Seitenanzahl, Funktionen &
								Designaufwand.
							</p>

							<h3 className="h6 fw-bold">Wie lange dauert die Umsetzung?</h3>
							<p>Zwischen 3–6 Wochen — je nach Freigaben & Material.</p>
						</Col>

						<Col md={6}>
							<h3 className="h6 fw-bold">Ist die Website SEO-bereit?</h3>
							<p>
								Ja — Suchmaschinenfreundliche Technik & Struktur sind von Anfang
								an integriert ✅
							</p>

							<h3 className="h6 fw-bold">
								Wird die Seite responsive entwickelt?
							</h3>
							<p>
								100% mobile first: jedes Gerät bekommt ein perfektes Erlebnis
								📱✨
							</p>
						</Col>
					</Row>
				</Container>
			</section>
			{/* === CTA – LET’S BUILD YOUR WEBSITE === */}
			<section className="py-5 border-top" id="kontakt">
				<Container>
					<Row className="align-items-center g-3">
						<Col md={8}>
							<h2 className="h3 fw-bold mb-3">
								Starte dein Website-Projekt in {cityName} ✨
							</h2>
							<ul className="mb-3">
								<li style={{ color: "var(--text-color)" }}>
									🚀 Mehr Sichtbarkeit & Vertrauen
								</li>
								<li style={{ color: "var(--text-color)" }}>
									🎯 Messbare Anfragen durch UX & SEO
								</li>
								<li style={{ color: "var(--text-color)" }}>
									✅ Klare Handlungsempfehlungen – kostenlos
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
								✉️ Beratung anfordern →
							</Button>

							{/* Mobile CTA */}
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

			{/* === INTERNAL LOCAL SEO — MULTI-CITY BOOST === */}
			<LocalNRWHook />

			{/* === TOPICAL INTERNAL LINKS === */}
			<PeopleAlsoRead tagHint="Webdesign" />
		</>
	);
}
