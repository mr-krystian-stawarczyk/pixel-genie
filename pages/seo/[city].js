// ✅ /pages/seo/[city].js — ULTRA LEVEL 4
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import dynamic from "next/dynamic";
import citiesData from "@/data/citiesData";
import slugify from "@/lib/slugify";
import generateSeoData from "@/lib/generateSeoData";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { useState, useEffect } from "react";
const CityMap = dynamic(() => import("@/components/CityMap"), { ssr: false });
const GoogleReviews = dynamic(() => import("@/components/GoogleReviews"), {
	ssr: false,
});
import AutoTranslate from "@/components/AutoTranslate";
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
	return { paths, fallback: "blocking" };
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
	const [ref1, inView1] = useInView({ threshold: 0.4 });
	const [ref2, inView2] = useInView({ threshold: 0.4 });
	const [ref3, inView3] = useInView({ threshold: 0.4 });

	const animateIn = {
		opacity: 1,
		y: 0,
		transition: { duration: 0.7, ease: "easeOut" },
	};

	const controls1 = useAnimation();
	const controls2 = useAnimation();
	const controls3 = useAnimation();

	useEffect(() => {
		if (inView1) controls1.start(animateIn);
	}, [inView1]);
	useEffect(() => {
		if (inView2) controls2.start(animateIn);
	}, [inView2]);
	useEffect(() => {
		if (inView3) controls3.start(animateIn);
	}, [inView3]);

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
								<ol style={{ marginBottom: "0" }}>
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

			<Container id="seo-pricing" className="py-5">
				<Row className="justify-content-center text-center mb-5">
					<Col lg={8}>
						<Image
							src="/assets/webentwicklung-webagentur-nettetal-price.png"
							width={260}
							height={260}
							alt="SEO Preise Pixel Genie"
							className="my-3"
							priority
							fetchPriority="high"
						/>
						<h2 className="fw-bold display-6">
							<AutoTranslate>SEO-Pakete für {cityName}</AutoTranslate>
						</h2>
						<p className="lead ">
							<AutoTranslate>
								Mehr Sichtbarkeit, mehr Anfragen, mehr Umsatz – unsere
								SEO-Pakete sind individuell skalierbar und perfekt für Ihr
								Wachstum.
							</AutoTranslate>
						</p>
					</Col>
				</Row>

				<Row className="justify-content-center text-center g-4">
					{/* BASIC */}
					<Col lg={4} md={6}>
						<motion.div
							ref={ref1}
							initial={{ opacity: 0, y: 40 }}
							animate={controls1}
						>
							<Card className="h-100 shadow-lg rounded-4 border-primary bg-transparent">
								<Card.Body className="p-4">
									<h3 className="fw-bold text-primary">BASIC SEO</h3>
									<p className="">
										Ideal für lokale Unternehmen, die sicher gefunden werden
										wollen.
									</p>
									<h2 className="fw-bold mb-3 text-primary">149 € / Monat</h2>
									<hr />
									<ul className="text-start small">
										<li style={{ color: "var(--text-color)" }}>
											Technische SEO-Optimierung (OnPage)
										</li>
										<li style={{ color: "var(--text-color)" }}>
											Keyword-Recherche (lokal)
										</li>
										<li style={{ color: "var(--text-color)" }}>
											Content-Optimierung
										</li>
										<li style={{ color: "var(--text-color)" }}>
											Google Business Profil
										</li>
										<li style={{ color: "var(--text-color)" }}>
											Monatlicher Report
										</li>
									</ul>
									<Button
										variant="primary"
										className="mt-3"
										onClick={() => handleEmail("BASIC SEO")}
									>
										<AutoTranslate>Jetzt starten</AutoTranslate>
									</Button>
								</Card.Body>
							</Card>
						</motion.div>
					</Col>

					{/* BUSINESS */}
					<Col lg={4} md={6}>
						<motion.div
							ref={ref2}
							initial={{ opacity: 0, y: 40 }}
							animate={controls2}
						>
							<Card className="h-100 shadow-lg rounded-4 border-success bg-light">
								<Card.Body className="p-4">
									<h3 className="fw-bold text-success">BUSINESS SEO</h3>
									<p className="text-black">
										Für Marken, die bei Google dominieren und wachsen wollen.
									</p>
									<h2 className="fw-bold mb-3 text-success">299 € / Monat</h2>
									<hr />
									<ul className="text-start small">
										<li>SEO-Roadmap + Monitoring</li>
										<li>Core Web Vitals Optimierung</li>
										<li>Backlink-Aufbau & Citations</li>
										<li>4× Content / Monat</li>
										<li>1h Beratung / Monat</li>
									</ul>
									<Button
										variant="success"
										className="mt-3 text-white"
										onClick={() => handleEmail("BUSINESS SEO")}
									>
										<AutoTranslate>Bestseller sichern</AutoTranslate>
									</Button>
								</Card.Body>
							</Card>
						</motion.div>
					</Col>

					{/* PREMIUM */}
					<Col lg={4} md={6}>
						<motion.div
							ref={ref3}
							initial={{ opacity: 0, y: 40 }}
							animate={controls3}
						>
							<Card
								className="h-100 rounded-4 text-light shadow-lg"
								style={{
									background: "linear-gradient(135deg,#0b0b2e,#21216b)",
								}}
							>
								<Card.Body className="p-4">
									<h3 className="fw-bold text-warning">PREMIUM SEO</h3>
									<p className="text-light">
										Die High-End Lösung für Marktführer und
										Suchmaschinen-Dominanz.
									</p>
									<h2 className="fw-bold mb-3 text-warning">499 € / Monat</h2>
									<hr className="border-light" />
									<ul className="text-start small">
										<li>Individuelle SEO-Strategie</li>
										<li>8× Content / Monat</li>
										<li>Digital PR & Authority Building</li>
										<li>Conversion-Tracking & UX</li>
										<li>Priorisierter Support</li>
									</ul>
									<Button
										variant="warning"
										className="mt-3 fw-bold text-dark"
										onClick={() => handleEmail("PREMIUM SEO")}
									>
										<AutoTranslate>Premium buchen</AutoTranslate>
									</Button>
								</Card.Body>
							</Card>
						</motion.div>
					</Col>
				</Row>

				<Row className="justify-content-center text-center mt-4">
					<Col lg={8}>
						<p className=" small">
							Alle Preise zzgl. MwSt. – monatlich kündbar – echte Performance
							statt Versprechen.
						</p>
					</Col>
				</Row>
			</Container>

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
								<ul style={{ fontSize: "0.9rem" }}>
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
								<ul style={{ fontSize: "0.9rem" }}>
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
								<ul style={{ fontSize: "0.9rem" }}>
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
