"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container, Accordion, Row, Col } from "react-bootstrap";
import Head from "next/head";

// ✅ HUMAN, SALES-FOCUSED, SEO COPY
const FAQ = [
	{
		q: "Wie läuft die Erstellung einer Website bei Pixel Genie ab?",
		a: `
Wir starten immer persönlich – <strong>kein Formular, kein anonymer Vertrieb</strong>.<br/><br/>
So läuft's Schritt für Schritt:<br/>
1️⃣ Wir hören zu: Ziele, Branche, Wettbewerb<br/>
2️⃣ Individuelles Design – abgestimmt auf Ihre Marke<br/>
3️⃣ Inhalte, die verkaufen (SEO & Psychologie 💡)<br/>
4️⃣ Launch + Google Setup + Tracking<br/><br/>
👉 Transparente Kommunikation in jeder Phase – <strong>Zero Stress</strong>.
`,
	},
	{
		q: "Was kostet eine Website für mein Unternehmen?",
		a: `
Wir bieten Webdesign für <strong>echte Unternehmen in NRW</strong> – keine Baukasten-Spielzeugseiten.<br/><br/>
Preisrahmen:<br/>
• <strong>Ab 499 €</strong> – für klare One-Pager<br/>
• <strong>799–1500 €</strong> – für Business Websites mit SEO<br/><br/>
➡ Jede Website ist ein <strong>Verkaufswerkzeug</strong>, kein Online-Flyer.<br/>
Mehr dazu auf unserer <a href="/webdesign/" class="text-decoration-none">Webdesign-Seite</a>.
`,
	},
	{
		q: "Wird meine Website bei Google sichtbar sein?",
		a: `
🔥 Oh ja. Wir bauen Websites so, wie Google sie liebt:<br/>
• <strong>PageSpeed 90+</strong><br/>
• saubere Struktur & Schema.org<br/>
• SEO-Texte statt Lorem Ipsum<br/>
• Lokale Sichtbarkeit in NRW (Maps + Keywords)<br/><br/>
✨ Ergebnis: Mehr Anfragen. Weniger Zufall.<br/>
Mehr Infos auf <a href="/seo/" class="text-decoration-none">SEO NRW</a>.
`,
	},
	{
		q: "Erstellen Sie Websites auch für Handwerk, Dienstleister & lokale Unternehmen?",
		a: `
✅ Genau für diese Zielgruppen sind wir da:<br/>
• Handwerk & Bau<br/>
• Immobilien, Beratung & Services<br/>
• Gastronomie & Gesundheit<br/><br/>
Wir kennen den NRW-Markt – vom <a href="/webdesign/viersen/">Kreis Viersen</a> bis <a href="/webdesign/duesseldorf/">Düsseldorf</a>.
`,
	},
	{
		q: "Wie lange dauert es, bis die neue Website online ist?",
		a: `
Schneller als Sie denken:<br/>
• Basic Business Website: <strong>7–12 Tage</strong><br/>
• Größere Projekte: <strong>3–5 Wochen</strong><br/><br/>
✅ Wir arbeiten modern & agil → keine Agentur-Lahmheit.
`,
	},
	{
		q: "Kann ich später selbst Inhalte ändern?",
		a: `
Ja – Sie bleiben unabhängig.<br/><br/>
Wir setzen auf <strong>CMS & Headless Technik</strong>:<br/>
Text ändern? <strong>2 Klicks</strong>.<br/>
Neues Projekt einfügen? <strong>10 Sekunden</strong>.<br/><br/>
Sie haben die Kontrolle – kein Abozwang.
`,
	},
	{
		q: "Was macht Pixel Genie anders als andere Agenturen?",
		a: `
🚀 Wir bauen keine „schöne Websites“. Wir bauen <strong>Websites, die verkaufen</strong>.<br/><br/>
• Performance statt Spielereien<br/>
• Messbare Ergebnisse statt Versprechen<br/>
• Direkte Kommunikation statt Ticketsystem<br/><br/>
Unsere Kunden sagen:<br/>
„Endlich eine Agentur, die abliefert.“ ✅<br/>
<small>(Referenzen auf Anfrage)</small>
`,
	},
	{
		q: "Was macht eine Website erfolgreich?",
		a: `
💡 Erfolgreiche Websites sind wie gute Verkäufer:<br/>
• Klarer Nutzen → “Warum Sie?”<br/>
• Beweise → Vertrauen & Social Proof<br/>
• SEO-Text mit Conversion Fokus<br/>
• Geschwindigkeit & Nutzerführung<br/><br/>
➡ Das ist unsere DNA bei <a href="/webdesign/" class="text-decoration-none">Pixel Genie Webdesign</a>.
`,
	},
];

export default function WebFAQ() {
	const siteUrl = "https://pixel-genie.de/webdesign";

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
				<title>Webseiten erstellen in NRW – FAQ | Pixel Genie</title>
				<meta
					name="description"
					content="Webdesign FAQ: Erstellung, Kosten, SEO, Dauer & Ergebnisse. Ehrliche Antworten & echte Ergebnisse. Pixel Genie – Websites, die verkaufen. NRW."
				/>
				<link rel="canonical" href={siteUrl} />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
				/>
			</Head>

			<Container id="webseite-erstellen-faq" className="my-5 py-5">
				<Row className="text-center mb-5">
					<Col lg={8} className="mx-auto">
						<Image
							src="/assets/pixel-genie-webseiten-seo-nettetal-logo.png"
							width={230}
							height={230}
							alt="Pixel-Genie Webagentur Nettetal Logo – Webseiten erstellen NRW"
						/>
						<h2 className="fw-bold mt-3">
							Webseiten erstellen lassen – FAQ für NRW
						</h2>
						<p className="">Klar. Direkt. Ohne Agentur-Blabla.</p>
					</Col>
				</Row>

				<Row className="justify-content-center">
					<Col lg={9}>
						<Accordion className="shadow-lg">
							{FAQ.map((item, idx) => (
								<Accordion.Item key={idx} eventKey={idx.toString()}>
									<Accordion.Header>{item.q}</Accordion.Header>
									<Accordion.Body
										dangerouslySetInnerHTML={{ __html: item.a }}
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
