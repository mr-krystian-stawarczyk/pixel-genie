// /pages/webseitenerstellung/[city].js
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import citiesData from "@/data/citiesData";
import slugify from "@/lib/slugify";

const CityMap = dynamic(() => import("@/components/CityMap"), { ssr: false });

/* ──────────────────────────────────────────────────────────────
   Stałe i pomocniki
   ────────────────────────────────────────────────────────────── */
const ORIGIN = "https://pixel-genie.de";
const BRAND = "Pixel-Genie";
const BRAND_LONG = "Pixel-Genie Webagentur";
const CONTACT_PHONE = "+48 726 897 493";
const CONTACT_EMAIL = "pixelgenie.marketing@gmail.com";
const OFFICE_STREET = "Fasanenstr. 10";
const OPENING_HOURS = ["Mo-Fr 09:00-17:00"];

/** kapitalizacja City do H1/metadanych */
function toCityLabel(city) {
	if (!city) return "";
	return city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
}

/** generowanie SEO meta na podstawie miasta */
function buildSeo(cityObj, slug) {
	const cityName = toCityLabel(cityObj.city);
	const canonical = `${ORIGIN}/webseitenerstellung/${slug}`;

	const title = `Webseite erstellen lassen in ${cityName} – ${BRAND_LONG}`;
	const description = `Professionelle Webseitenerstellung in ${cityName}: schnelles, responsives Webdesign, SEO, Core Web Vitals, Conversion & Wartung. Jetzt ${BRAND} kontaktieren und online wachsen.`;
	const keywords = [
		`Webseite erstellen ${cityName}`,
		`Webseitenerstellung ${cityName}`,
		`Website erstellen lassen ${cityName}`,
		`Webdesign ${cityName}`,
		`WordPress ${cityName}`,
		`Next.js ${cityName}`,
		`${BRAND}`,
	].join(", ");

	const openGraph = {
		title,
		description,
		url: canonical,
		image: `${ORIGIN}/assets/og-default.jpg`,
		site_name: BRAND,
		type: "website",
		locale: "de_DE",
	};

	const twitter = {
		card: "summary_large_image",
		title,
		description,
		image: `${ORIGIN}/assets/og-default.jpg`,
	};

	return {
		title,
		description,
		keywords,
		canonical,
		openGraph,
		twitter,
		cityName,
	};
}

/** przycisk email */
const handleEmailClick = () => {
	if (typeof window !== "undefined") {
		window.location.href = `mailto:${CONTACT_EMAIL}`;
	}
};

/* ──────────────────────────────────────────────────────────────
   SSG: Ścieżki
   ────────────────────────────────────────────────────────────── */
export async function getStaticPaths() {
	const paths = citiesData.map((c) => ({
		params: { city: (c.slug ?? slugify(c.city)).toLowerCase() },
	}));
	return { paths, fallback: false };
}

/* ──────────────────────────────────────────────────────────────
   SSG: Props
   ────────────────────────────────────────────────────────────── */
export async function getStaticProps({ params }) {
	const slugParam = params.city.toLowerCase();
	const cityData =
		citiesData.find(
			(c) => (c.slug ?? slugify(c.city)).toLowerCase() === slugParam
		) || null;

	if (!cityData) return { notFound: true };

	const dataWithSlug = { ...cityData, slug: slugParam };

	const seo = buildSeo(dataWithSlug, slugParam);

	// JSON-LD (LocalBusiness + Service + BreadcrumbList + FAQPage)
	const jsonLd = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "LocalBusiness",
				"@id": `${seo.canonical}#business`,
				name: `${BRAND} – Webseitenerstellung`,
				url: seo.canonical,
				image: `${ORIGIN}/assets/webseiten-seo-webdesign-logo.png`,
				logo: `${ORIGIN}/assets/webseiten-seo-webdesign-logo.png`,
				description: seo.description,
				priceRange: "€€",
				telephone: CONTACT_PHONE,
				email: CONTACT_EMAIL,
				address: {
					"@type": "PostalAddress",
					streetAddress: OFFICE_STREET,
					addressLocality: seo.cityName,
					postalCode: cityData.postalCode || "",
					addressCountry: "DE",
				},
				geo: {
					"@type": "GeoCoordinates",
					latitude: cityData?.geo?.latitude ?? 0,
					longitude: cityData?.geo?.longitude ?? 0,
				},
				areaServed: { "@type": "City", name: seo.cityName },
				sameAs: [
					"https://www.facebook.com/pixelgenie.de",
					"https://www.instagram.com/pixelgenie.de",
					"https://www.linkedin.com/company/pixel-genie",
				],
				openingHours: OPENING_HOURS,
			},
			{
				"@type": "Service",
				"@id": `${seo.canonical}#service`,
				name: `Webseitenerstellung in ${seo.cityName}`,
				serviceType: `Webseite erstellen lassen in ${seo.cityName}`,
				provider: { "@id": `${seo.canonical}#business` },
				areaServed: { "@type": "City", name: seo.cityName },
				offers: {
					"@type": "Offer",
					priceCurrency: "EUR",
					price: "499",
					availability: "https://schema.org/InStock",
					url: seo.canonical,
				},
			},
			{
				"@type": "BreadcrumbList",
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: "Webseitenerstellung",
						item: `${ORIGIN}/webseitenerstellung`,
					},
					{
						"@type": "ListItem",
						position: 2,
						name: `Webseite erstellen lassen in ${seo.cityName}`,
						item: seo.canonical,
					},
				],
			},
			{
				"@type": "FAQPage",
				"@id": `${seo.canonical}#faq`,
				mainEntity: [
					{
						"@type": "Question",
						name: `Wie viel kostet eine Webseite in ${seo.cityName}?`,
						acceptedAnswer: {
							"@type": "Answer",
							text: `Eine einfache Unternehmensseite in ${seo.cityName} beginnt ab 499 €. Der finale Preis hängt von Funktionsumfang, CMS, Design und SEO-Anforderungen ab.`,
						},
					},
					{
						"@type": "Question",
						name: "Wie lange dauert die Erstellung einer Webseite?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "Im Durchschnitt 2–4 Wochen. Größere Projekte mit Shop, Schnittstellen oder Mehrsprachigkeit dauern entsprechend länger.",
						},
					},
					{
						"@type": "Question",
						name: "Sind die Webseiten mobil optimiert?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "Ja. Jede Seite ist vollständig responsiv, Core Web Vitals-optimiert und schnell.",
						},
					},
					{
						"@type": "Question",
						name: `Bieten Sie auch SEO für ${seo.cityName} an?`,
						acceptedAnswer: {
							"@type": "Answer",
							text: `Ja. SEO ist Bestandteil der Entwicklung: Informationsarchitektur, Meta-Daten, strukturierte Daten, Pagespeed und lokales SEO für ${seo.cityName}.`,
						},
					},
				],
			},
		],
	};

	return {
		props: {
			cityData: dataWithSlug,
			seo,
			jsonLd,
		},
	};
}

/* ──────────────────────────────────────────────────────────────
   Komponent sekcji "surface"
   ────────────────────────────────────────────────────────────── */
function SectionSurface({ children, className, style }) {
	return (
		<Card
			className={`shadow-sm ${className ?? ""}`}
			style={{
				backgroundColor: "transparent",
				color: "var(--text-color)",
				borderColor: "rgba(255,255,255,0.12)",
				...style,
			}}
			border="1"
		>
			<Card.Body>{children}</Card.Body>
		</Card>
	);
}

/* ──────────────────────────────────────────────────────────────
   Strona
   ────────────────────────────────────────────────────────────── */
export default function WebseiteErstellungCityPage({ cityData, seo, jsonLd }) {
	const {
		city,
		postalCode,
		population,
		geo,
		address,
		historySnippet,
		elevation,
		areaKm2,
		economicHighlights,
		boroughs = [],
	} = cityData;

	const cityName = seo.cityName;

	const sectionStyle = {
		backgroundColor: "transparent",
		color: "var(--text-color)",
	};
	const mutedStyle = { opacity: 0.85 };

	/* Blok listy “USP” do użycia w kilku miejscach */
	const uspList = [
		"SEO-optimierte Informationsarchitektur (IA)",
		"Sauberer Code (Next.js/React), schnelle Ladezeiten",
		"Core Web Vitals (LCP/CLS/INP) im grünen Bereich",
		"100% responsiv & barrierearm (WCAG-Basics)",
		"Skalierbar: CMS, Shop, Sprachen, Integrationen",
		"Transparente Roadmap, klare KPIs & Reporting",
	];

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
				<link rel="canonical" href={seo.canonical} />

				{/* OG / Twitter */}
				<meta property="og:title" content={seo.openGraph.title} />
				<meta property="og:description" content={seo.openGraph.description} />
				<meta property="og:type" content={seo.openGraph.type} />
				<meta property="og:url" content={seo.openGraph.url} />
				<meta property="og:image" content={seo.openGraph.image} />
				<meta property="og:site_name" content={seo.openGraph.site_name} />
				<meta property="og:locale" content={seo.openGraph.locale} />

				<meta name="twitter:card" content={seo.twitter.card} />
				<meta name="twitter:title" content={seo.twitter.title} />
				<meta name="twitter:description" content={seo.twitter.description} />
				<meta name="twitter:image" content={seo.twitter.image} />

				{/* JSON-LD */}
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
						<Col lg={7} className="mb-4">
							<h1 className="display-5 fw-bold mb-3">
								Webseite erstellen lassen in {cityName} – sichtbar, schnell &
								überzeugend
							</h1>
							<p className="lead" style={mutedStyle}>
								<strong>{BRAND}</strong> entwickelt performante Websites in{" "}
								{cityName}, die <em>gefunden</em> werden und <em>verkaufen</em>.
								Von Konzept & UX über Entwicklung (Next.js/WordPress) bis SEO,
								Analytics und Wartung.
							</p>
							<div className="d-flex gap-2 flex-wrap">
								<Button
									variant="primary"
									size="lg"
									className="text-white"
									onClick={handleEmailClick}
								>
									✉️ Kostenlose Erstberatung anfordern
								</Button>
							</div>
						</Col>
						<Col lg={5} className="mb-4">
							<SectionSurface>
								<h2 className="h4 fw-semibold mb-3">
									Warum jetzt eine bessere Website?
								</h2>
								<ul className="mb-3" style={mutedStyle}>
									<li>Mehr Sichtbarkeit in lokalen SERP & Maps ({cityName})</li>
									<li>Mehr Anfragen dank klaren CTAs & UX-Flow</li>
									<li>Weniger Absprünge durch Pagespeed + Mobile UX</li>
								</ul>
								<p className="mb-0" style={mutedStyle}>
									Ergebnis: <strong>Planbare Leads</strong> und{" "}
									<strong>Wachstum</strong> – ohne Werbebudget zu verbrennen.
								</p>
							</SectionSurface>
						</Col>
					</Row>
				</Container>
			</section>

			{/* ─────────────────────────────────────────────────────────────────────── */}
			{/* Leistungen + Vorteile */}
			{/* ─────────────────────────────────────────────────────────────────────── */}
			<section className="py-5 " style={sectionStyle}>
				<Container>
					<Row>
						<Col md={12}>
							<h2 className="h3 fw-bold mb-4 text-center">
								Webseitenerstellung in {cityName} – Leistungen & Vorteile
							</h2>
						</Col>
					</Row>

					<Row className="g-3">
						<Col md={6}>
							<SectionSurface>
								<h3 className="h5 fw-bold mb-3">Unsere Leistungen</h3>
								<ul className="mb-0" style={mutedStyle}>
									<li>UX/UI-Konzept, Wireframes, Designsystem</li>
									<li>Responsives Frontend (Next.js/React) & WordPress</li>
									<li>SEO-Setup: IA, Meta, strukturierte Daten, Sitemap</li>
									<li>Performance-Optimierung (Core Web Vitals)</li>
									<li>Tracking & Analytics (Consent, Events, Funnels)</li>
									<li>Wartung, Security, Backups, Updates</li>
								</ul>
							</SectionSurface>
						</Col>

						<Col md={6}>
							<SectionSurface>
								<h3 className="h5 fw-bold mb-3">Ihre Vorteile mit {BRAND}</h3>
								<ul className="mb-0" style={mutedStyle}>
									{uspList.map((u, i) => (
										<li key={i}>{u}</li>
									))}
								</ul>
							</SectionSurface>
						</Col>
					</Row>
				</Container>
			</section>

			{/* ─────────────────────────────────────────────────────────────────────── */}
			{/* Lokale Infos + Karte */}
			{/* ─────────────────────────────────────────────────────────────────────── */}
			<section className="py-5" style={sectionStyle}>
				<Container>
					<Row>
						<Col lg={8} className="mb-3">
							<SectionSurface>
								<h2 className="h4 fw-semibold mb-3">Über {cityName}</h2>
								{historySnippet && <p style={mutedStyle}>{historySnippet}</p>}
								<div className="row">
									<div className="col-sm-6">
										<ul className="list-unstyled mb-0" style={mutedStyle}>
											<li>
												<strong>Postleitzahl:</strong> {postalCode || "—"}
											</li>
											<li>
												<strong>Fläche:</strong>{" "}
												{areaKm2 ? `${areaKm2} km²` : "—"}
											</li>
											<li>
												<strong>Einwohner:</strong>{" "}
												{population ? population.toLocaleString("de-DE") : "—"}
											</li>
											<li>
												<strong>Höhe:</strong>{" "}
												{elevation ? `${elevation} m ü. NHN` : "—"}
											</li>
										</ul>
									</div>
									<div className="col-sm-6">
										<h3 className="h6 fw-bold mb-2">Wirtschaft & Struktur</h3>
										<ul className="mb-0" style={mutedStyle}>
											{economicHighlights &&
												Object.entries(economicHighlights).map(([k, v]) => (
													<li key={k}>
														<strong>{k}:</strong> {v}
													</li>
												))}
										</ul>
									</div>
								</div>

								{boroughs?.length > 0 && (
									<div className="mt-3">
										<h3 className="h6 fw-bold mb-2">Wichtige Stadtteile</h3>
										<ul className="list-unstyled mb-0" style={mutedStyle}>
											{boroughs.map((b) => (
												<li
													className="py-1 border-bottom"
													style={{ borderColor: "rgba(255,255,255,0.1)" }}
													key={b}
												>
													{b}
												</li>
											))}
										</ul>
									</div>
								)}
							</SectionSurface>
						</Col>

						<Col lg={4} className="mb-3">
							<SectionSurface className="h-100 p-0">
								<div className="p-0">
									<CityMap
										key={cityData.city}
										cityData={cityData}
										height={320}
									/>
								</div>
							</SectionSurface>
						</Col>
					</Row>
				</Container>
			</section>

			{/* ─────────────────────────────────────────────────────────────────────── */}
			{/* Prozess */}
			{/* ─────────────────────────────────────────────────────────────────────── */}
			<section className="py-5 " style={sectionStyle}>
				<Container>
					<Row>
						<Col md={12}>
							<h2 className="h3 fw-bold mb-4 text-center">
								Unser Prozess der Webseitenerstellung in {cityName}
							</h2>
						</Col>
					</Row>

					<Row className="g-3">
						<Col lg={6}>
							<SectionSurface>
								<h3 className="h5 fw-bold mb-3">Ablauf & Meilensteine</h3>
								<ol style={mutedStyle} className="mb-3">
									<li className="mb-1">
										<strong>Briefing & Ziele:</strong> Zielgruppen, Angebote,
										Conversion-Ziele.
									</li>
									<li className="mb-1">
										<strong>IA & UX:</strong> Seitenstruktur, Wireframes,
										Content-Plan.
									</li>
									<li className="mb-1">
										<strong>Design & Prototyping:</strong> CI-konform,
										barrierearm, mobil zuerst.
									</li>
									<li className="mb-1">
										<strong>Entwicklung:</strong> Next.js/React oder WordPress,
										saubere Komponenten.
									</li>
									<li className="mb-1">
										<strong>SEO & Performance:</strong> Meta, JSON-LD, Sitemaps,
										CWV-Tuning.
									</li>
									<li className="mb-1">
										<strong>Testing & Launch:</strong> QA, Tracking, Redirects,
										Livegang.
									</li>
									<li className="mb-1">
										<strong>Wartung:</strong> Updates, Backups, Security,
										Iteration.
									</li>
								</ol>
								<p style={mutedStyle} className="mb-0">
									Ergebnis: <strong>klare Rankings</strong>,{" "}
									<strong>stabile Leistung</strong> und
									<strong> messbare Conversions</strong>.
								</p>
							</SectionSurface>
						</Col>

						<Col lg={6}>
							<SectionSurface>
								<h3 className="h5 fw-bold mb-3">Technologie & Qualität</h3>
								<ul style={mutedStyle} className="mb-3">
									<li>Next.js (SSG/ISR), React 18, Bootstrap/SCSS</li>
									<li>WordPress + schlanke Page-Builder, saubere Templates</li>
									<li>Bildoptimierung, Font-Loading, Lazy-Loading</li>
									<li>
										JSON-LD (LocalBusiness, Service, FAQ), saubere Canonicals
									</li>
									<li>Consent-konformes Analytics & Event-Tracking</li>
									<li>Security-Header, HTTPS, HSTS, regelmäßige Updates</li>
								</ul>
								<Button variant="outline-primary" onClick={handleEmailClick}>
									Kostenlose Beratung →
								</Button>
							</SectionSurface>
						</Col>
					</Row>
				</Container>
			</section>

			{/* ─────────────────────────────────────────────────────────────────────── */}
			{/* Pakete (Beispiele) */}
			{/* ─────────────────────────────────────────────────────────────────────── */}
			<section className="py-5" style={sectionStyle}>
				<Container>
					<h2 className="h3 fw-bold mb-4 text-center">
						Flexible Pakete für {cityName}
					</h2>
					<Row className="g-3">
						<Col md={4}>
							<SectionSurface>
								<h3 className="h5 fw-bold">Starter</h3>
								<p style={mutedStyle}>Für kleine lokale Unternehmen</p>
								<h4 className="display-6">ab 499 €</h4>
								<ul style={mutedStyle}>
									<li>1–3 Seiten, responsives Design</li>
									<li>Basis-SEO & Tracking</li>
									<li>Launch + kurze Einweisung</li>
								</ul>
								<Button variant="primary" onClick={handleEmailClick}>
									Angebot anfordern
								</Button>
							</SectionSurface>
						</Col>
						<Col md={4}>
							<SectionSurface>
								<h3 className="h5 fw-bold">Growth</h3>
								<p style={mutedStyle}>Sichtbarkeit + Conversion</p>
								<h4 className="display-6">ab 1.299 €</h4>
								<ul style={mutedStyle}>
									<li>Bis 10 Seiten, Blog/News</li>
									<li>Erweitertes SEO + JSON-LD</li>
									<li>Performance-Tuning (CWV)</li>
								</ul>
								<Button variant="primary" onClick={handleEmailClick}>
									Angebot anfordern
								</Button>
							</SectionSurface>
						</Col>
						<Col md={4}>
							<SectionSurface>
								<h3 className="h5 fw-bold">Pro</h3>
								<p style={mutedStyle}>Skalierbar & datengetrieben</p>
								<h4 className="display-6">ab 2.500 €</h4>
								<ul style={mutedStyle}>
									<li>Mehrsprachig / Shop / Integrationen</li>
									<li>Advanced SEO + Content-Plan</li>
									<li>A/B-Tests, Funnels, Dashboards</li>
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
			{/* Migration / Relaunch / Wartung */}
			{/* ─────────────────────────────────────────────────────────────────────── */}
			<section className="py-5 " style={sectionStyle}>
				<Container>
					<Row className="g-3">
						<Col lg={4}>
							<SectionSurface>
								<h3 className="h5 fw-bold mb-2">
									Relaunch ohne Ranking-Verlust
								</h3>
								<p style={mutedStyle}>
									Wir mappen alte URLs, setzen korrekte 301-Redirects, migrieren
									Meta-Daten und halten die Informationsarchitektur konsistent –
									so bleiben Rankings stabil.
								</p>
							</SectionSurface>
						</Col>
						<Col lg={4}>
							<SectionSurface>
								<h3 className="h5 fw-bold mb-2">Sicherheit & DSGVO</h3>
								<p style={mutedStyle}>
									HTTPS, Security-Header, Updates, Cookie-Consent,
									Datensparsamkeit – alles sauber und prüfbar. Optional: AVV,
									TOMs, Backup-Strategie.
								</p>
							</SectionSurface>
						</Col>
						<Col lg={4}>
							<SectionSurface>
								<h3 className="h5 fw-bold mb-2">Wartung & Support</h3>
								<p style={mutedStyle}>
									Monatliche Updates, Monitoring, Bugfixes, kleine
									Content-Anpassungen. Reaktionszeit SLA – wir halten Ihre Seite
									verlässlich am Laufen.
								</p>
							</SectionSurface>
						</Col>
					</Row>
				</Container>
			</section>

			{/* ─────────────────────────────────────────────────────────────────────── */}
			{/* Mini Case-Studies */}
			{/* ─────────────────────────────────────────────────────────────────────── */}
			<section className="py-5" style={sectionStyle}>
				<Container>
					<Row>
						<Col md={12}>
							<h2 className="h3 fw-bold mb-4">Ergebnisse, die zählen</h2>
						</Col>
					</Row>
					<Row className="g-3">
						<Col lg={4}>
							<SectionSurface>
								<h3 className="h6 fw-bold">Lokaler Dienstleister</h3>
								<p style={mutedStyle}>
									+186% organische Anfragen in 8 Wochen (Local SEO + schnellere
									Ladezeiten).
								</p>
								<ul style={mutedStyle}>
									<li>CTR +1,8 pp durch Snippets</li>
									<li>Core Web Vitals: „gut“</li>
								</ul>
							</SectionSurface>
						</Col>
						<Col lg={4}>
							<SectionSurface>
								<h3 className="h6 fw-bold">B2B Mittelstand</h3>
								<p style={mutedStyle}>
									+3,2x Demo-Requests (UX-Flow + Content-Hubs + interne
									Verlinkung).
								</p>
								<ul style={mutedStyle}>
									<li>IA-Refactor, klare CTAs</li>
									<li>Technischer SEO-Fix</li>
								</ul>
							</SectionSurface>
						</Col>
						<Col lg={4}>
							<SectionSurface>
								<h3 className="h6 fw-bold">E-Commerce</h3>
								<p style={mutedStyle}>
									+41% Umsatz (SEO + CRO + Pagespeed-Optimierungen,
									Bildkomprimierung).
								</p>
								<ul style={mutedStyle}>
									<li>Produkt-Schema, Reviews</li>
									<li>Checkout-Friction reduziert</li>
								</ul>
							</SectionSurface>
						</Col>
					</Row>
				</Container>
			</section>

			{/* ─────────────────────────────────────────────────────────────────────── */}
			{/* FAQ (HTML) – spójne z JSON-LD */}
			{/* ─────────────────────────────────────────────────────────────────────── */}
			<section
				className="py-5 border-top border-bottom"
				id="faq"
				style={sectionStyle}
			>
				<Container>
					<Row>
						<Col md={12}>
							<h2 className="h3 fw-bold mb-4">Häufig gestellte Fragen (FAQ)</h2>
						</Col>
					</Row>
					<Row className="g-3">
						<Col md={6}>
							<SectionSurface>
								<h3 className="h6 fw-semibold mb-2">
									Wie viel kostet eine Webseite in {cityName}?
								</h3>
								<p style={mutedStyle}>
									Eine einfache Website startet ab <strong>499 €</strong>.
									Komplexere Projekte mit CMS, Shop, Integrationen oder
									Mehrsprachigkeit kosten entsprechend mehr.
								</p>

								<h3 className="h6 fw-semibold mb-2">
									Wie lange dauert die Erstellung?
								</h3>
								<p style={mutedStyle}>
									Im Schnitt <strong>2–4 Wochen</strong>, abhängig von Umfang
									und Feedbackzyklen.
								</p>
							</SectionSurface>
						</Col>

						<Col md={6}>
							<SectionSurface>
								<h3 className="h6 fw-semibold mb-2">
									Ist die Seite mobil optimiert?
								</h3>
								<p style={mutedStyle}>
									Ja. Wir entwickeln „mobile-first“ und optimieren konsequent
									für CWV.
								</p>

								<h3 className="h6 fw-semibold mb-2">
									Bieten Sie SEO und Wartung in {cityName} an?
								</h3>
								<p style={mutedStyle}>
									Ja. Technisches SEO ist inklusive, plus optionale monatliche
									Betreuung.
								</p>
							</SectionSurface>
						</Col>
					</Row>
				</Container>
			</section>

			{/* ─────────────────────────────────────────────────────────────────────── */}
			{/* Linkowanie wewnętrzne: więcej lokalizacji */}
			{/* ─────────────────────────────────────────────────────────────────────── */}
			<section className="py-5" style={sectionStyle}>
				<Container>
					<Row className="my-4">
						<Col>
							<h3 className="text-center fw-semibold mb-4">
								Weitere Städte für Webseitenerstellung in der Nähe von{" "}
								{cityName}
							</h3>
							<Row className="justify-content-center">
								{citiesData
									.filter(
										(c) =>
											(c.slug ?? slugify(c.city)).toLowerCase() !==
											(cityData.slug ?? slugify(city)).toLowerCase()
									)
									.slice(0, 24)
									.map((c, i) => {
										const label = toCityLabel(c.city);
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
													href={`/webseitenerstellung/${citySlug}`}
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
														Webseite erstellen lassen <br />
														{label}
													</span>
												</Link>
											</Col>
										);
									})}
							</Row>
							<div className="text-center mt-4">
								<Link href="/webseitenerstellung/" className="fw-bold">
									← Alle Standorte anzeigen
								</Link>
							</div>
						</Col>
					</Row>
				</Container>
			</section>

			{/* ─────────────────────────────────────────────────────────────────────── */}
			{/* CTA / Kontakt final */}
			{/* ─────────────────────────────────────────────────────────────────────── */}
			<section className="py-5 border-top" id="kontakt" style={sectionStyle}>
				<Container>
					<Row className="align-items-center">
						<Col md={8} className="mb-3">
							<h2 className="h3 fw-semibold mb-3">
								Starte dein Webprojekt in {cityName}
							</h2>
							<p style={mutedStyle}>
								Erhalte eine kostenlose Ersteinschätzung: Wir prüfen Technik,
								Design, Inhalte und SEO-Potenzial – inklusive einer konkreten
								Prioritätenliste für die nächsten Schritte.
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
			{/* Footer-links usługowe (wewnętrzne) */}
			{/* ─────────────────────────────────────────────────────────────────────── */}
			<footer className="py-4 text-center" style={sectionStyle}>
				<Container>
					<p className="mb-0 small" style={mutedStyle}>
						Weitere Leistungen:{" "}
						<Link href="/webseitenerstellen/" className="text-decoration-none">
							Webseiten
						</Link>{" "}
						|{" "}
						<Link href="/seo/" className="text-decoration-none">
							SEO-Agentur
						</Link>{" "}
						|{" "}
						<Link href="/webdesign-agentur/" className="text-decoration-none">
							Webdesign Agentur
						</Link>
					</p>
				</Container>
			</footer>
		</>
	);
}
