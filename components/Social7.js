"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container, Accordion, Row, Col, Button } from "react-bootstrap";
import AutoTranslate from "@/components/AutoTranslate";
import Head from "next/head";

const ORTE = [
	"Düsseldorf",
	"Krefeld",
	"Viersen",
	"Nettetal",
	"Mönchengladbach",
	"Köln",
	"Duisburg",
	"Essen",
	"Dortmund",
	"Bochum",
	"Wuppertal",
	"Aachen",
];

const FAQ = [
	{
		q: "Warum ist Social Media Marketing in NRW wichtig?",
		a: "Mehrere Millionen Menschen nutzen Social Media täglich in NRW. Wer dort präsent ist, steigert Vertrauen und Kundenzahl – besonders in Regionen wie Düsseldorf, Krefeld, Viersen, Nettetal und Mönchengladbach.",
	},
	{
		q: "Welche Vorteile habe ich mit professioneller Social Media Betreuung?",
		a: "Planung, klare Strukturen, konstante Präsenz, messbare Ergebnisse und weniger Stress im Alltag – wir übernehmen Marketing, Sie die neuen Aufträge.",
	},
	{
		q: "Welche Plattformen eignen sich für mein Unternehmen?",
		a: "Wir wählen Instagram, Facebook, LinkedIn oder TikTok abhängig von Zielgruppe und Branche. Entscheidungen beruhen auf Daten, nicht auf Trends.",
	},
	{
		q: "Wie schnell sind Ergebnisse sichtbar?",
		a: "Nach 4–8 Wochen steigen Reichweite und Interaktionen spürbar. Nach 3–6 Monaten zeigt sich stabiler Anfragezuwachs.",
	},
	{
		q: "Gibt es feste Pakete und klare Preise?",
		a: "Ja – transparenter monatlicher Aufwand, flexible Erweiterungen. Preise bleiben nachvollziehbar.",
	},
	{
		q: "Brauchen kleine Unternehmen Social Media?",
		a: "Gerade lokale Betriebe können gezielt Kundschaft in der Region erreichen – kosteneffizienter als klassische Werbung.",
	},
	{
		q: "Was macht guten Social Media Content aus?",
		a: "Authentizität, klare Botschaften, Unterstützung der Marke, moderne Medienformate und regelmäßige Veröffentlichungen.",
	},
	{
		q: "Kann Social Media Neukunden bringen?",
		a: "Ja. Durch Community-Aufbau, intelligente Call-to-Actions und Tracking lässt sich Kundengewinnung gezielt steuern.",
	},
	{
		q: "Wie bleiben Inhalte markenkonform?",
		a: "Wir definieren Markenstimme, Farben, Bildstil und Kernbotschaften – für ein einheitliches Markenerlebnis.",
	},
	{
		q: "Betreuen Sie auch Social Ads?",
		a: "Ja – inklusive Zielgruppenaufbau, Retargeting und Optimierung basierend auf echten Verkaufszahlen.",
	},
	{
		q: "Wie läuft die Zusammenarbeit ab?",
		a: "Kickoff → Content-Plan → Erstellung & Posting → Monitoring → Report. Klar strukturierte Monatszyklen.",
	},
	{
		q: "Welche Branchen profitieren besonders?",
		a: "Handwerk, Gesundheit, Immobilien, Gastronomie, E-Commerce, Fitness, Dienstleistungen und Bildung – überall dort, wo Vertrauen zählt.",
	},
	{
		q: "Wie wird Erfolg gemessen?",
		a: "Über KPIs wie Reichweite, Profilzugriffe, Klicks & konkrete Kundenanfragen – replizierbare Kennzahlen.",
	},
	{
		q: "Was, wenn ich wenig Zeit dafür habe?",
		a: "Dafür sind wir da – wir übernehmen Planung, Gestaltung, Texte, Uploads & Community Support.",
	},
	{
		q: "Erstellen Sie auch Videos und Reels?",
		a: "Ja. Kurzvideos sorgen für überdurchschnittliche Reichweite – daher fester Bestandteil unserer Betreuung.",
	},
	{
		q: "Kann Social Media Website-Traffic erhöhen?",
		a: "Ja – qualifizierter Traffic mit hoher Interaktionsrate verbessert SEO und steigert Conversions.",
	},
	{
		q: "Bieten Sie Workshops & Beratung an?",
		a: "Natürlich – interne Schulungen sorgen für noch bessere Zusammenarbeit und Verständnis.",
	},
	{
		q: "Sind Sie wirklich für ganz NRW erreichbar?",
		a: "Ja – sowohl digital als auch vor Ort in Regionen wie Düsseldorf, Krefeld, Viersen, Nettetal und Mönchengladbach.",
	},
];

const Social7 = () => {
	const siteUrl = "https://pixel-genie.de/social-media";

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
					Social Media FAQ NRW | Pixel Genie – Antworten für Unternehmen
				</title>
				<meta
					name="description"
					content="Häufige Fragen rund um Social Media Marketing in NRW. Klar beantwortet: Kanäle, Ergebnisse, Vorteile, Regionen. Pixel Genie unterstützt Unternehmen in Düsseldorf, Krefeld, Viersen, Nettetal, Mönchengladbach sowie in ganz Nordrhein-Westfalen."
				/>
				<link rel="canonical" href={siteUrl} />
				{/* ✅ JSON-LD FAQ */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
				/>
			</Head>

			<Container className="mb-5 pb-5" id="social-media-nrw-faq">
				{/* ✅ HERO */}
				<Row className="justify-content-center text-center">
					<Col lg={8}>
						<Image
							src="/assets/webentwicklung-nettetal-fragen1.png"
							width={260}
							height={260}
							alt="Social Media Betreuung für Unternehmen in NRW"
							priority
						/>
						<h1 className="fw-bold mt-3">
							Social Media FAQ in NRW – ruhig erklärt, klar umgesetzt
						</h1>
						<p className="text-muted">
							Fragen und Antworten für Unternehmen, die ihre Sichtbarkeit in
							Nordrhein-Westfalen planbar steigern wollen.
						</p>
					</Col>
				</Row>

				{/* ✅ 3-Schritt Arbeitsweise */}
				<Row className="justify-content-center text-center mt-5">
					<Col lg={9}>
						<h2 className="fw-bold">
							Wie wir arbeiten – in 3 ruhigen Schritten
						</h2>
						<ul className="text-start d-inline-block mt-3">
							<li>
								Analyse & Strategie – Ziele, Zielgruppe, Plattformen, Tonalität
							</li>
							<li>
								Content & Community – Planung, Gestaltung, Veröffentlichung
							</li>
							<li>Ergebnisse & Optimierung – klare Reports & Empfehlungen</li>
						</ul>
					</Col>
				</Row>

				{/* ✅ KPI VORTEILE */}
				<Row className="justify-content-center text-center mt-5">
					<Col lg={9}>
						<h2 className="fw-bold">Welche Ergebnisse sind realistisch?</h2>
						<p className="text-muted">
							Social Media Marketing wirkt kontinuierlich und nachhaltig:
						</p>
						<ul className="text-start d-inline-block">
							<li>+40–120 % Reichweitensteigerung nach 3 Monaten</li>
							<li>Deutlich mehr Profilbesuche & Website-Traffic</li>
							<li>Besserer Markenaufbau & Kundenvertrauen</li>
							<li>Mehr Anfragen zu Dienstleistungen & Produkten</li>
						</ul>
					</Col>
				</Row>

				{/* ✅ FAQ LIST */}
				<Row className="justify-content-center mt-5">
					<Col lg={9}>
						<h2 className="fw-bold text-center mb-3">Häufige Fragen (FAQ)</h2>
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

				{/* ✅ Final SEO Absatz */}
				<Row className="justify-content-center text-center mt-5">
					<Col lg={9}>
						<p className="text-muted">
							Ob Düsseldorf, Krefeld, Viersen, Nettetal, Mönchengladbach, Köln,
							Duisburg oder das gesamte NRW – Social Media ist ein wirksamer
							Weg, neue Kunden zu erreichen und bestehende Beziehungen zu
							stärken. Wir begleiten Sie ruhig und strukturiert auf diesem Weg.
						</p>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Social7;
