// ✅ /pages/seo/[city].js — ULTRA LEVEL 4
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import dynamic from "next/dynamic";
import citiesData from "@/data/citiesData";
import slugify from "@/lib/slugify";
import generateSeoData from "@/lib/generateSeoData";
const CityMap = dynamic(() => import("@/components/CityMap"), { ssr: false });
const GoogleReviews = dynamic(() => import("@/components/GoogleReviews"), {
	ssr: false,
});

import ReadingProgressBar from "@/components/ReadingProgressBar";
import SmartCTA from "@/components/SmartCTA";
import LocalNRWHook from "@/components/LocalNRWHook";
import PeopleAlsoRead from "@/components/PeopleAlsoRead";

// ─────────────────────────────────────────
// Static generation
// ─────────────────────────────────────────
export async function getStaticPaths() {
	const paths = citiesData.map((c) => ({
		params: { city: (c.slug ?? slugify(c.city)).toLowerCase() },
	}));
	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const citySlug = params.city.toLowerCase();
	const cityData =
		citiesData.find(
			(c) => (c.slug ?? slugify(c.city)).toLowerCase() === citySlug
		) ?? null;

	if (!cityData) return { notFound: true };

	const seo = generateSeoData(cityData);
	return { props: { cityData, seo } };
}

// ─────────────────────────────────────────
// Page
// ─────────────────────────────────────────
export default function SeoCityPage({ cityData, seo }) {
	const {
		city,
		geo = { latitude: 0, longitude: 0 },
		postalCode,
		address,
		phone,
		email,
		population,
		elevation,
		areaKm2,
		boroughs = [],
		historySnippet,
		economicHighlights = {},
	} = cityData;

	const cityName = city.charAt(0).toUpperCase() + city.slice(1);
	const canonicalUrl = seo.canonical;

	const surface = {
		backgroundColor: "transparent",
		borderColor: "rgba(255,255,255,0.14)",
	};
	const muted = { opacity: 0.8 };

	return (
		<>
			<Head>
				<title>{seo.title}</title>
				<meta name="description" content={seo.description} />
				<link rel="canonical" href={canonicalUrl} />
				<meta property="og:url" content={canonicalUrl} />
				<meta property="og:image" content="/og?title=SEO%20NRW&bg=green" />
				<meta property="og:locale" content="de_DE" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(seo.schemaGraph),
					}}
				/>
				<link
					rel="icon"
					href="/assets/pixel-genie-nettetal-webentwicklung-logo.png"
				/>
			</Head>

			{/* ✅ Desktop only SmartCTA */}
			<style>{`
                @media (max-width: 991px) { 
                    .smart-cta { display:none !important; } 
                }
            `}</style>

			<ReadingProgressBar />
			<SmartCTA triggerPercent={30} />

			{/* === HERO === */}
			<section className="py-5">
				<Container>
					<Row className="align-items-center mt-4">
						<Col lg={7}>
							<h1 className="display-5 fw-bold mb-3">
								SEO Agentur in {cityName} – Sichtbarkeit, die verkauft 🚀
							</h1>
							<p className="lead">
								Wir bringen deine Angebote in {cityName} an die Spitze von
								Google – mit Fokus auf **Leads, Calls & Kunden**.
							</p>

							<div className="d-flex flex-wrap gap-2 mt-2">
								<Badge bg="success">Core Web Vitals</Badge>
								<Badge bg="primary">Local SEO</Badge>
								<Badge bg="info">Content Strategy</Badge>
								<Badge bg="warning" text="dark">
									UX & Conversion
								</Badge>
							</div>

							<Button
								onClick={() =>
									(window.location.href =
										"mailto:pixelgenie.marketing@gmail.com")
								}
								variant="primary"
								size="lg"
								className="mt-4 text-white"
							>
								Kostenlose SEO-Analyse →
							</Button>
						</Col>

						<Col lg={5} className="mt-4">
							<Card className="shadow-sm" style={surface}>
								<Card.Body>
									<h3 className="h5 fw-semibold mb-3">
										Warum SEO in {cityName}?
									</h3>
									<p>
										<strong>70 %</strong> der lokalen Suchanfragen führen zu
										einer Aktion innerhalb eines Tages.
									</p>
									<ul>
										<li style={{ color: "var(--text-color)" }}>
											Mehr Kundenanfragen aus der Region
										</li>
										<li style={{ color: "var(--text-color)" }}>
											Sichtbar im Local Pack (Maps)
										</li>
										<li style={{ color: "var(--text-color)" }}>
											Nachhaltige Leads statt teurer Ads
										</li>
									</ul>
								</Card.Body>
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
			{/* === CITY FACTS + MAP === */}
			<section className="py-5">
				<Container>
					<Row>
						{/* LEFT : Zahlen & Fakten */}
						<Col lg={8} className="mb-4">
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h2 className="h4 fw-semibold mb-3">
									📊 {cityName} – Zahlen & Fakten
								</h2>

								{historySnippet && <p className="mb-3">{historySnippet}</p>}

								<Row>
									<Col md={6} className="mb-3">
										<h3 className="h6 fw-bold mb-2">Geografische Daten</h3>
										<ul className="mb-0">
											{postalCode && (
												<li style={{ color: "var(--text-color)" }}>
													<strong>Postleitzahl:</strong> {postalCode}
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
											{geo?.latitude && geo?.longitude && (
												<li style={{ color: "var(--text-color)" }}>
													<strong>Koordinaten:</strong> {geo.latitude},{" "}
													{geo.longitude}
												</li>
											)}
											{population && (
												<li style={{ color: "var(--text-color)" }}>
													<strong>Einwohner:</strong>{" "}
													{population.toLocaleString("de-DE")}
												</li>
											)}
										</ul>
									</Col>

									<Col md={6} className="mb-3">
										<h3 className="h6 fw-bold mb-2">Wirtschaft & Branchen</h3>

										{Object.keys(economicHighlights).length > 0 ? (
											<ul className="mb-0">
												{Object.entries(economicHighlights).map(
													([k, v], idx) => (
														<li
															key={idx}
															style={{ color: "var(--text-color)" }}
														>
															<strong>{k}:</strong>{" "}
															{typeof v === "string" ? v : JSON.stringify(v)}
														</li>
													)
												)}
											</ul>
										) : (
											<p>Mittelstandsgeprägte Wirtschaft & Industrie.</p>
										)}
									</Col>
								</Row>

								{/* Optional: SEO KPIs — jeśli komponent istnieje */}
								{/* <SEOStats cityData={cityData} /> */}
							</Card>
						</Col>

						{/* RIGHT : Map */}
						<Col lg={4} className="mb-4">
							<Card className="shadow-sm h-100" style={surface}>
								<Card.Body className="p-0">
									<CityMap
										key={cityData.city}
										cityData={cityData}
										height={350}
									/>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>
			{/* === LEISTUNGEN === */}
			<section className="py-5">
				<Container>
					<Row>
						<Col lg={12}>
							<h2 className="h3 fw-bold mb-4">
								Unsere SEO-Leistungen in {cityName}
							</h2>
						</Col>

						<Col md={6} className="mb-4">
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h6 fw-bold mb-3">OnPage SEO</h3>
								<ul className="mb-0">
									<li style={{ color: "var(--text-color)" }}>
										Technische Analyse & Crawlbarkeit
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Strukturierte Daten (Schema.org)
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Core Web Vitals Optimierung
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Snippets & interne Verlinkung
									</li>
								</ul>
							</Card>
						</Col>

						<Col md={6} className="mb-4">
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h6 fw-bold mb-3">Local SEO</h3>
								<ul className="mb-0">
									<li style={{ color: "var(--text-color)" }}>
										Google Business Profil Optimierung
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Maps Rankings & Local Pack
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Bewertungen & Local Citations
									</li>
								</ul>
							</Card>
						</Col>

						<Col md={6} className="mb-4">
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h6 fw-bold mb-3">Content SEO</h3>
								<ul className="mb-0">
									<li style={{ color: "var(--text-color)" }}>
										Lokale Themencluster mit Recherche
									</li>
									<li style={{ color: "var(--text-color)" }}>
										SEO-optimierte Landingpages
									</li>
									<li style={{ color: "var(--text-color)" }}>
										E-E-A-T Inhalte & UX-Optimierung
									</li>
								</ul>
							</Card>
						</Col>

						<Col md={6} className="mb-4">
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h6 fw-bold mb-3">Authority & Backlinks</h3>
								<ul className="mb-0">
									<li style={{ color: "var(--text-color)" }}>
										Wettbewerbsanalyse
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Digital PR & Outreach
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Relevante lokale Backlinks
									</li>
								</ul>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>

			{/* === PROZESS + USPs === */}
			<section className="py-5">
				<Container>
					<Row>
						<Col lg={7} className="mb-4">
							<Card className="shadow-sm p-4" style={surface}>
								<h2 className="h4 fw-semibold mb-3">Unser SEO-Prozess</h2>
								<ol style={{ ...muted, marginBottom: "0" }}>
									<li className="mb-2" style={{ color: "var(--text-color)" }}>
										<strong>Analyse & Zielsetzung:</strong> Technisches Audit in{" "}
										{cityName}.
									</li>
									<li className="mb-2" style={{ color: "var(--text-color)" }}>
										<strong>Quick Wins:</strong> Snippets, interne Verlinkung,
										CWV.
									</li>
									<li className="mb-2" style={{ color: "var(--text-color)" }}>
										<strong>Content-Strategie:</strong> regionale Themen +
										Suchintention.
									</li>
									<li className="mb-2" style={{ color: "var(--text-color)" }}>
										<strong>Authority Aufbau:</strong> lokales Linkbuilding &
										Erwähnungen.
									</li>
									<li className="mb-2" style={{ color: "var(--text-color)" }}>
										<strong>Monitoring:</strong> Reporting nach KPIs,
										Conversion-Fokus.
									</li>
								</ol>
							</Card>
						</Col>

						<Col lg={5}>
							<Card className="shadow-sm p-4" style={surface}>
								<h3 className="h5 fw-bold mb-3">Warum Pixel-Genie?</h3>
								<ul className="mb-3">
									<li style={{ color: "var(--text-color)" }}>
										Strategie: Rankings + Conversion Rates
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Lokal verankert in NRW
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Keine Bindung, maximale Transparenz
									</li>
								</ul>
								<Button
									variant="outline-primary"
									onClick={() =>
										(window.location.href =
											"mailto:pixelgenie.marketing@gmail.com")
									}
								>
									Termin vereinbaren →
								</Button>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>
			{/* === PAKETE / PREISE === */}
			<section className="py-5">
				<Container>
					<h2 className="h3 fw-bold text-center mb-5">
						SEO-Pakete für {cityName}
					</h2>

					<Row className="g-4">
						{/* BASIC */}
						<Col md={4}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h5 fw-bold">Starter</h3>
								<p>Ideal für lokale Businesses</p>
								<h4 className="display-6 mb-3">99 €</h4>
								<ul style={{ ...muted, fontSize: "0.95rem" }}>
									<li style={{ color: "var(--text-color)" }}>
										Technisches SEO
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Google Business Profil Optimierung
									</li>
									<li style={{ color: "var(--text-color)" }}>
										1× Local Content / Monat
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Monatliches Reporting
									</li>
								</ul>
								<Button
									variant="primary"
									className="mt-3 text-white"
									onClick={() =>
										(window.location.href =
											"mailto:pixelgenie.marketing@gmail.com")
									}
								>
									Angebot anfordern →
								</Button>
							</Card>
						</Col>

						{/* GROWTH */}
						<Col md={4}>
							<Card
								className="shadow-sm p-4 h-100 border-primary"
								style={surface}
							>
								<Badge bg="primary" className="mb-2 align-self-start">
									Bestseller
								</Badge>
								<h3 className="h5 fw-bold">Growth</h3>
								<p>Wachstum & Ranking-Dominanz</p>
								<h4 className="display-6 mb-3">299 €</h4>
								<ul style={{ ...muted, fontSize: "0.95rem" }}>
									<li style={{ color: "var(--text-color)" }}>
										SEO-Roadmap + Monitoring
									</li>
									<li style={{ color: "var(--text-color)" }}>
										4× Content Cluster / Monat
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Lokale Backlinks & Citations
									</li>
									<li style={{ color: "var(--text-color)" }}>
										UX & CWV Optimierung
									</li>
								</ul>
								<Button
									variant="primary"
									className="mt-3 text-white"
									onClick={() =>
										(window.location.href =
											"mailto:pixelgenie.marketing@gmail.com")
									}
								>
									Angebot anfordern →
								</Button>
							</Card>
						</Col>

						{/* PRO */}
						<Col md={4}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h5 fw-bold">Pro</h3>
								<p>City-wide SEO Dominanz</p>
								<h4 className="display-6 mb-3">599 €</h4>
								<ul style={{ ...muted, fontSize: "0.95rem" }}>
									<li style={{ color: "var(--text-color)" }}>
										Multi-Intent Content Strategie
									</li>
									<li style={{ color: "var(--text-color)" }}>
										8× Content / Monat (Pillar + Support)
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Digital PR & starke Erwähnungen
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Conversion Optimierung
									</li>
								</ul>
								<Button
									variant="primary"
									className="mt-3 text-white"
									onClick={() =>
										(window.location.href =
											"mailto:pixelgenie.marketing@gmail.com")
									}
								>
									Angebot anfordern →
								</Button>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>
			{/* === CASE STUDIES === */}
			<section className="py-5">
				<Container>
					<h2 className="h3 fw-bold mb-4">
						Ergebnisse aus ähnlichen SEO-Projekten
					</h2>

					<Row className="g-4">
						{/* Case 1 */}
						<Col lg={4}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h6 fw-bold">Dienstleister (B2C lokal)</h3>
								<p>
									+187 % mehr lokale Suchanfragen in 6 Monaten (Local Pack +
									Content Refresh).
								</p>
								<ul style={{ ...muted, fontSize: "0.9rem" }}>
									<li style={{ color: "var(--text-color)" }}>
										CTR +2,3 Prozentpunkte
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Core Web Vitals: „Good“ site-wide
									</li>
								</ul>
							</Card>
						</Col>

						{/* Case 2 */}
						<Col lg={4}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h6 fw-bold">Einzelhandel mit Online-Showroom</h3>
								<p>5× mehr Keywords in den Top-3, +31 % Umsatzwachstum.</p>
								<ul style={{ ...muted, fontSize: "0.9rem" }}>
									<li style={{ color: "var(--text-color)" }}>
										Strukturierte Themencluster
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Relevante lokale Backlinks
									</li>
								</ul>
							</Card>
						</Col>

						{/* Case 3 */}
						<Col lg={4}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h6 fw-bold">B2B-Serviceanbieter</h3>
								<p>3× mehr qualifizierte Leads, SEO, Paid Ads.</p>
								<ul style={{ ...muted, fontSize: "0.9rem" }}>
									<li style={{ color: "var(--text-color)" }}>
										Wettbewerbsanalyse & Content-Depth
									</li>
									<li style={{ color: "var(--text-color)" }}>
										UX-orientierte Konversionsoptimierung
									</li>
								</ul>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>
			{/* === FAQ === */}
			<section className="py-5" id="faq">
				<Container>
					<Row>
						<Col md={12}>
							<h2 className="h3 fw-bold mb-5">
								Häufige Fragen zur SEO in {cityName}
							</h2>
						</Col>

						<Col md={6} className="mb-4">
							<h3 className="h6 fw-semibold mb-2">Wie lange dauert SEO?</h3>
							<p>
								Erste Verbesserungen in 6–10 Wochen. Stabile Top-Rankings nach
								3–6 Monaten – abhängig vom Wettbewerb in {cityName}.
							</p>

							<h3 className="h6 fw-semibold mb-2">
								Was kostet SEO in {cityName}?
							</h3>
							<p>
								Lokale Pakete ab 99 € monatlich – flexibel je nach Ziel &
								Region.
							</p>
						</Col>

						<Col md={6}>
							<h3 className="h6 fw-semibold mb-2">
								Warum ist lokales SEO so wichtig?
							</h3>
							<p>
								70 % der lokalen Suchanfragen führen zu Kontakt oder Besuch. Wer
								in {cityName} nicht sichtbar ist, verliert Kunden.
							</p>

							<h3 className="h6 fw-semibold mb-2">
								Macht ihr auch SEO-Analysen?
							</h3>
							<p>
								Ja – inklusive Technik-Check, Sichtbarkeitsanalyse &
								Strategie-Empfehlungen für {cityName}.
							</p>
						</Col>
					</Row>
				</Container>
			</section>
			{/* === KONTAKT CTA === */}
			<section className="py-5" id="kontakt">
				<Container>
					<Row className="align-items-center">
						<Col md={8} className="mb-3">
							<h2 className="h3 fw-semibold mb-3">
								Starte jetzt dein SEO-Projekt in {cityName}
							</h2>
							<p>
								🚀 Kostenlose Erstberatung: Wir analysieren Technik,
								Sichtbarkeit & Potenziale bei dir vor Ort in {cityName}.
							</p>
						</Col>

						<Col md={4} className="text-md-end">
							<Button
								variant="primary"
								size="lg"
								className="text-white d-none d-md-inline-block"
								onClick={() =>
									(window.location.href =
										"mailto:pixelgenie.marketing@gmail.com")
								}
							>
								✉️ Kostenlose Analyse →
							</Button>

							<Button
								variant="primary"
								size="lg"
								className="text-white d-md-none"
								onClick={() => {
									const el = document.querySelector("#kontakt");
									if (el) el.scrollIntoView({ behavior: "smooth" });
								}}
							>
								Jetzt Kontakt aufnehmen →
							</Button>
						</Col>
					</Row>
				</Container>
			</section>

			{/* === INTERNAL LOCAL SEO — POWER LINKING === */}
			<LocalNRWHook />

			{/* === RELATED CONTENT — BLOG POWER-UP === */}
			<PeopleAlsoRead tagHint="SEO" />
		</>
	);
}
