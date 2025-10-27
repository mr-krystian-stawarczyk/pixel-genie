"use client";
import Image from "next/image";
import React from "react";
import { Container, Accordion, Row, Col } from "react-bootstrap";
import AutoTranslate from "@/components/AutoTranslate";
import Head from "next/head";

const FAQ = [
	{
		q: "Wie läuft die Erstellung einer Website bei Pixel Genie ab?",
		a: "Wir arbeiten transparent in 4 klaren Schritten: Analyse & Beratung → Design & Entwicklung → Inhalte & SEO → Testen & Launch. Der Prozess ist strukturiert, ohne Stress, mit regelmäßigen Abstimmungen.",
	},
	{
		q: "Wie lange dauert es, eine Website zu erstellen?",
		a: "Eine One-Page Website benötigt ca. 10–20 Tage, eine Business Website 3–6 Wochen. Bei größeren Projekten stimmen wir einen realistischen Zeitplan gemeinsam ab.",
	},
	{
		q: "Was kostet eine professionelle Website in NRW?",
		a: "Unsere Preise starten bei 499 € für eine moderne One-Page Website. Business Websites ab 899 €, Premium-Projekte ab 1499 €. Alle Preise sind fair kalkuliert und transparent.",
	},
	{
		q: "Ist die Website für mobile Geräte optimiert?",
		a: "Ja – jedes Projekt ist 100 % responsive. Mobilnutzer sind inzwischen über 65 % aller Besucher in NRW.",
	},
	{
		q: "Wird meine Website bei Google gefunden?",
		a: "Ja. Wir erstellen Websites mit gezielter OnPage-SEO: schnelle Ladezeiten, strukturierte Daten, Keyword-Optimierung und Verbindung zu Google Analytics & Search Console.",
	},
	{
		q: "Betreuen Sie Unternehmen in ganz NRW?",
		a: "Ja – besonders in Nettetal, Viersen, Krefeld, Düsseldorf, Mönchengladbach, Köln, Duisburg, Essen, Dortmund und ganz Nordrhein-Westfalen.",
	},
	{
		q: "Können Sie auch Texte erstellen?",
		a: "Ja – SEO-Texte, Leistungsbeschreibungen, Blogartikel und Conversion Texte auf Wunsch inkludiert.",
	},
	{
		q: "Kann ich später selbst Inhalte ändern?",
		a: "Natürlich! Wir bieten Websites mit CMS (z. B. Headless, Sanity). So bleiben Sie unabhängig und flexibel.",
	},
	{
		q: "Wie sieht es mit Hosting und Wartung aus?",
		a: "Wir bieten Hosting & technische Pflege optional als Komplettpaket an – damit Ihre Website sicher und immer verfügbar bleibt.",
	},
	{
		q: "Bieten Sie auch moderne Technologien an?",
		a: "Ja – wir arbeiten mit Next.js, React, Headless CMS, Lighthouse-Optimierung, DSGVO Tools, Performance-Boost und mehr.",
	},
	{
		q: "Kann die Website später erweitert werden?",
		a: "Ja, wir planen skalierbar: Online-Shop, Blog, Termin-System, Landingpages – jederzeit erweiterbar.",
	},
	{
		q: "Welche Branchen unterstützen Sie im Webdesign?",
		a: "Handwerk, Immobilien, Gastronomie, Industrie, Dienstleister, Gesundheit, E-Commerce – mit Erfahrung in lokalen Märkten in NRW.",
	},
	{
		q: "Erstellen Sie auch Online Shops?",
		a: "Ja – von kleinen Shops bis zu skalierbaren E-Commerce Lösungen, technisch stabil und SEO-stark.",
	},
	{
		q: "Wie übernehme ich die Website nach dem Launch?",
		a: "Nach dem Go-Live erhalten Sie Zugangsdaten, Struktur-Guide und auf Wunsch eine kurze Schulung.",
	},
	{
		q: "Sind DSGVO-Anforderungen bereits berücksichtigt?",
		a: "Ja – Cookie-Banner, Datenschutzerklärung, Impressum, Consent Tools, Hosting in der EU.",
	},
];

const WebFAQ = () => {
	const siteUrl = "https://pixel-genie.de/webdesign";

	// ✅ JSON-LD AUTOMATYCZNIE Z FAQs
	const faqSchema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: FAQ.map((f) => ({
			"@type": "Question",
			name: f.q,
			acceptedAnswer: { "@type": "Answer", text: f.a },
		})),
	};

	return (
		<>
			<Head>
				<title>
					Webdesign FAQ NRW | Webseiten erstellen lassen | Pixel Genie
				</title>
				<meta
					name="description"
					content="Webdesign und Webseiten Erstellung in NRW – klare Antworten: Kosten, Dauer, SEO, mobile Optimierung, Google Sichtbarkeit. Pixel Genie erstellt leistungsstarke Websites für Unternehmen in Nettetal, Düsseldorf, Viersen, Krefeld & ganz NRW."
				/>
				<link rel="canonical" href={siteUrl} />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
				/>
			</Head>

			<Container className="my-5 py-5" id="webdesign-nrw-faq">
				{/* ✅ HERO SEO */}
				<Row className="text-center mb-4">
					<Col lg={8} className="mx-auto">
						<Image
							src="/assets/webentwicklung-nettetal-fragen1.png"
							width={260}
							height={260}
							alt="Webdesign Agentur NRW Pixel Genie"
							priority
						/>
						<h1 className="fw-bold mt-3">
							Webseiten erstellen in NRW – Häufige Fragen (FAQ)
						</h1>
						<p>
							Klare, strukturierte Antworten für Unternehmen, die eine moderne
							Website planen – mit Fokus auf Sichtbarkeit, Performance und
							Nutzererlebnis.
						</p>
					</Col>
				</Row>

				{/* ✅ FAQ ACCORDION */}
				<Row className="justify-content-center mt-3">
					<Col lg={9}>
						<Accordion className="shadow-lg">
							{FAQ.map((item, idx) => (
								<Accordion.Item eventKey={idx.toString()} key={idx}>
									<Accordion.Header>{item.q}</Accordion.Header>
									<Accordion.Body>{item.a}</Accordion.Body>
								</Accordion.Item>
							))}
						</Accordion>
					</Col>
				</Row>

				{/* ✅ SEO Abschlussabsatz */}
				<Row className="justify-content-center text-center mt-5">
					<Col lg={10}>
						<p>
							Pixel Genie unterstützt Unternehmen in NRW bei der professionellen
							Website-Erstellung: moderne Technik, klare Struktur, starke
							Google-Sichtbarkeit und ein ruhiger, verlässlicher Ablauf. Wir
							sorgen dafür, dass Ihre Website langfristig für Sie arbeitet –
							nicht umgekehrt.
						</p>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default WebFAQ;
