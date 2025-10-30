"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container, Accordion, Row, Col } from "react-bootstrap";
import Head from "next/head";
import AutoTranslate from "@/components/AutoTranslate";

const FAQ = [
	{
		q: "Warum ist Social Media Marketing für Unternehmen in Nettetal & NRW entscheidend?",
		a: `
Über 80 % aller Menschen in NRW informieren sich <strong>vor einer Anfrage</strong> über Social Media. 
Wer sichtbar ist, wird zuerst kontaktiert – besonders local-first in 
<strong>Nettetal, Viersen, Krefeld, Mönchengladbach und Düsseldorf</strong>.
<br/><br/>
Social Media schafft Vertrauen, bevor Ihr Kunde überhaupt spricht. 
➡ Das ist digitale Mundpropaganda – kontinuierlich und planbar.
    `,
	},
	{
		q: "Wie unterstützt Pixel Genie mein Social Media Marketing konkret?",
		a: `
Wir planen & produzieren <strong>Content, der verkauft – nicht nur gefällt</strong>:
<ul>
<li>Storytelling: Was macht Ihr Unternehmen einzigartig?</li>
<li>Reels & Kurzvideos: Reichweiten-Booster</li>
<li>Strategische Postingzeiten für max. Sichtbarkeit</li>
<li>Community Management & gezielte Interaktion</li>
</ul>
✔ Ruhig, professionell, und ohne Stress für Sie.
    `,
	},
	{
		q: "Welche Plattformen eignen sich für lokale Unternehmen?",
		a: `
Wir empfehlen nur, was wirklich funktioniert:
<br/><br/>
• <strong>Instagram</strong> & Facebook – lokale Reichweite<br/>
• <strong>LinkedIn</strong> – B2B & Dienstleistungen<br/>
• <strong>Google Unternehmensprofil</strong> – Local SEO Booster<br/>
• <strong>TikTok</strong> – wenn junge Zielgruppe im Fokus<br/><br/>
➡ Entscheidungen basieren auf Daten, nicht Hype.
    `,
	},
	{
		q: "Wie schnell kann Social Media neue Kunden bringen?",
		a: `
Kurzfristig: <strong>+50 % Sichtbarkeit</strong> und mehr Profilbesuche nach 4–8 Wochen.<br/>
Mittelfristig: <strong>planbare Kundenanfragen</strong> nach 3–6 Monaten.<br/><br/>
Wir nutzen Website-Verknüpfung und <a href="/seo/" class="text-decoration-none">lokale SEO</a>, 
damit Traffic zu echten Aufträgen wird.
    `,
	},
	{
		q: "Was macht richtig guten Social Media Content aus?",
		a: `
Content muss Probleme lösen – nicht nur hübsch aussehen:
<ul>
<li>Klarer Nutzen & regionale Ansprache</li>
<li>Konkrete Vorteile & echte Menschen</li>
<li>Markenidentität, Farben, Tonalität stabil</li>
<li>Regelmäßigkeit: mindestens 3–5 Posts pro Woche</li>
</ul>
➡ <strong>Vertrauen + Sichtbarkeit = neue Kunden</strong>
    `,
	},
	{
		q: "Kann Social Media wirklich Verkäufe erzeugen?",
		a: `
100 %. Aber nicht über Likes – sondern über <strong>gezielte Kundenführung</strong>:
<ul>
<li>Starke CTA: Anfrage, Beratung, Termin</li>
<li>Retargeting – Interessenten erneut erreichen</li>
<li>Lokale Kampagnen für NRW</li>
</ul>
➡ Social Media wird Ihr <strong>Vertriebskanal</strong>, nicht nur Unterhaltung.
    `,
	},
	{
		q: "Übernimmt Pixel Genie wirklich ALLES?",
		a: `
Ja! Sie geben frei, wir produzieren & posten:
<ul>
<li>Strategie & Redaktionsplan</li>
<li>Professionelle Texte + Grafiken</li>
<li>Reels, Storys, Carousel Designs</li>
<li>Community Betreuung & Antworten</li>
</ul>
➡ Sie haben Zeit fürs Geschäft – wir für Ihre Sichtbarkeit.
    `,
	},
	{
		q: "Kann Social Media mein Local SEO in NRW unterstützen?",
		a: `
Ja – Social Signals + Website Traffic = <strong>bessere Rankings</strong>.
<br/><br/>
Wir verbinden alle Inhalte mit Ihrer Landingpage 
<a href="/webdesign/" class="text-decoration-none">Webseiten erstellen Nordrhein-Westfalen</a> 
und Ihrem Google-Unternehmensprofil.<br/><br/>
➡ Das sorgt für Platzierungen <strong>in Ihrer Region</strong>.
    `,
	},
	{
		q: "Sind Sie in meiner Nähe erreichbar?",
		a: `
Natürlich – persönlich vor Ort in <strong>Nettetal</strong> und Grenzregion NL. 
Digitale Betreuung in ganz NRW: Düsseldorf, Viersen, Krefeld, MG, Duisburg etc.<br/><br/>
➡ Wir sprechen Ihre Region, Ihre Kunden und Ihr Business.
    `,
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
				<title>Social Media Marketing FAQ NRW | Pixel-Genie Nettetal</title>
				<meta
					name="description"
					content="Social Media FAQ NRW: Wie gewinnt man neue Kunden über Instagram, Facebook, LinkedIn & Google Profile? Pixel-Genie unterstützt Nettetal, Viersen, Krefeld, Düsseldorf & ganz NRW mit messbarer Sichtbarkeit."
				/>
				<link rel="canonical" href={siteUrl} />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
				/>
			</Head>

			<Container className="py-5" id="social-media-nrw-faq">
				<Row className="justify-content-center text-center mb-5">
					<Col lg={8}>
						<Image
							src="/assets/pixel-genie-webseiten-seo-nettetal-logo.png"
							width={240}
							height={240}
							alt="Pixel-Genie SEO Agentur Nettetal & NRW – Sichtbarkeit steigern"
						/>

						<h1 className="fw-bold mt-3">
							<AutoTranslate>
								Social Media FAQ NRW – ruhig erklärt, klar umgesetzt
							</AutoTranslate>
						</h1>
						<p className="">
							<AutoTranslate>
								Antworten für Unternehmen aus Nettetal & NRW, die online präsent
								sein wollen, wo ihre Kunden täglich sind.
							</AutoTranslate>
						</p>
					</Col>
				</Row>

				<Row className="justify-content-center">
					<Col lg={9}>
						<Accordion className="shadow-lg">
							{FAQ.map((item, idx) => (
								<Accordion.Item eventKey={idx.toString()} key={idx}>
									<Accordion.Header>
										<AutoTranslate>{item.q}</AutoTranslate>
									</Accordion.Header>
									<Accordion.Body
										className="text-body"
										dangerouslySetInnerHTML={{ __html: item.a }}
									/>
								</Accordion.Item>
							))}
						</Accordion>
					</Col>
				</Row>

				<Row className="justify-content-center text-center mt-5">
					<Col lg={9}>
						<p className="text-muted small">
							<AutoTranslate>
								Pixel-Genie bietet Social Media Marketing aus Nettetal für ganz
								NRW – strukturiert, kreativ & ohne Stress für Sie.
							</AutoTranslate>
						</p>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Social7;
