"use client";
import Image from "next/image";
import React from "react";
import { Container, Accordion, Row, Col } from "react-bootstrap";
import Head from "next/head";
import AutoTranslate from "@/components/AutoTranslate";

// ✅ SEO FAQ DATA — HTML-safe
const SEO_FAQ = [
	{
		q: "Wofür steht SEO?",
		a: `
📌 SEO = Suchmaschinenoptimierung<br/>
Ziel: mehr Sichtbarkeit & organischer Traffic über Google.<br/><br/>
SEO sorgt dafür, dass Kunden Sie finden — nicht andersherum. 🔍`,
	},
	{
		q: "Wie viel kostet SEO?",
		a: `
💶 Unsere SEO-Betreuung startet ab 199 € pro Monat.<br/>
Größere Kampagnen: nach Projektumfang.<br/><br/>
👉 Monatlich kündbar. Volle Transparenz. Keine Risiken.`,
	},
	{
		q: "Wie lange dauert SEO?",
		a: `
⏱️ Erste Erfolge: 4–12 Wochen<br/>
Stabile Rankings: 3–6 Monate<br/><br/>
SEO ist ein Marathon — aber mit messbarem ROI.`,
	},
	{
		q: "Was ist der ROI bei SEO?",
		a: `
📈 Sehr hoch, weil organischer Traffic kostenlos ist.<br/><br/>
SEO steigert langfristig:<br/>
• Leads & Anfragen<br/>
• Umsatz<br/>
• Markenbekanntheit`,
	},
	{
		q: "Kannst du mich auf Platz 1 bringen?",
		a: `
Wir versprechen keine Platz-1-Garantie (niemand kann das).<br/><br/>
✅ ABER: Wir bringen Sie bei relevanten Keywords für NRW nach vorne.`,
	},
	{
		q: "Was passiert, wenn ich SEO stoppe?",
		a: `
🏋️ SEO ist wie Training:<br/>
• Fortschritte bleiben etwas erhalten<br/>
• ohne Pflege verliert man Rankings schrittweise`,
	},
	{
		q: "Warum hat SEO bei mir früher nicht funktioniert?",
		a: `
Häufige Gründe:<br/>
❌ Falsche Keywords<br/>
❌ Keine Technik-Optimierung<br/>
❌ Schwache Inhalte<br/>
❌ Zu kurze Laufzeit<br/><br/>
✅ Mit richtiger Strategie funktioniert SEO IMMER.`,
	},
	{
		q: "Muss ich einen Vertrag unterschreiben?",
		a: `
✅ Nein – monatlich kündbare SEO-Betreuung<br/>
👉 Sie bleiben flexibel & unabhänging`,
	},
	{
		q: "Wie starten wir?",
		a: `
📞 Kostenlose Analyse Ihrer Website<br/>
🎯 Keyword-Recherche & SEO-Potenziale<br/>
🚀 Sofortiger Start ohne Wartezeiten`,
	},
	{
		q: "Bietet Ihr PPC an?",
		a: `
Unsere Stärke ist organisches Wachstum (SEO).<br/><br/>
👉 PPC (Google Ads) nur als Ergänzung, wenn sinnvoll.`,
	},
	{
		q: "Betreut Ihr auch Social Media?",
		a: `
✅ Ja – ergänzende Leistungen:<br/>
• Content Creation<br/>
• Performance-Marketing<br/><br/>
➡ Fokus bleibt SEO als Wachstumsmotor.`,
	},
	{
		q: "Welche Reports erhalte ich?",
		a: `
📊 Monatliche Reports mit:<br/>
• Ranking-Entwicklung<br/>
• Traffic & Conversions<br/>
• Wettbewerbsanalyse`,
	},
	{
		q: "Ist SEO tot?",
		a: `
🚫 NEIN – SEO ist lebendiger denn je.<br/>
🔄 Nur alte Methoden funktionieren nicht mehr!`,
	},
];

export default function Seo7() {
	const siteUrl = "https://pixel-genie.de/seo-nrw";

	// ✅ SEO FAQ Schema for Google Rich Results
	const faqSchema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: SEO_FAQ.map((f) => ({
			"@type": "Question",
			name: f.q,
			acceptedAnswer: { "@type": "Answer", text: f.a },
		})),
	};

	return (
		<>
			<Head>
				<title>SEO FAQ NRW | Pixel Genie – Search Engine Optimization</title>
				<meta
					name="description"
					content="SEO FAQ für Unternehmen in NRW. Antworten zu Kosten, Rankingdauer, Google Platzierung, ROI & SEO-Strategie. Pixel Genie – Sichtbarkeit. Leadwachstum. Mehr Kunden."
				/>
				<link rel="canonical" href={siteUrl} />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
				/>
			</Head>
			<Container className="mb-5 pb-5 mt-5" id="seofaq">
				<Row className="justify-content-center text-center">
					<Col lg={5} className="py-4">
						<Image
							src="/assets/pixel-genie-webseiten-seo-nettetal-logo.png"
							width={240}
							height={240}
							alt="Pixel-Genie SEO Agentur Nettetal & NRW – Sichtbarkeit steigern"
							priority
						/>
						<h2 className="fw-bold mt-3">SEO – Häufig gestellte Fragen</h2>
						<p className="">
							Klarheit für Ihre Google-Sichtbarkeit & planbare Anfragen in NRW.
						</p>
					</Col>
				</Row>

				{/* ✅ SEO FAQ Accordion */}
				<Row className="justify-content-center">
					<Col lg={9}>
						<Accordion className="shadow-lg">
							{SEO_FAQ.map((item, i) => (
								<Accordion.Item key={i} eventKey={i.toString()}>
									<Accordion.Header>{item.q}</Accordion.Header>
									<Accordion.Body
										dangerouslySetInnerHTML={{ __html: item.a }}
										style={{ whiteSpace: "normal" }}
									/>
								</Accordion.Item>
							))}
						</Accordion>
					</Col>
				</Row>
			</Container>
		</>
	);
}
