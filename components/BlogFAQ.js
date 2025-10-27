"use client";
import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import Head from "next/head";
import Link from "next/link";
import AutoTranslate from "@/components/AutoTranslate";

const FAQ = [
	{
		q: "Warum ist Webdesign so wichtig für Unternehmen in Nettetal?",
		a: `
In Nettetal und der ganzen Region Viersen entscheiden sich Kunden <strong>online</strong>, 
bevor sie jemals anrufen. Eine moderne Website ist nicht mehr “nice to have”, sondern Ihre <strong>digitale Visitenkarte</strong>, 
die 24/7 neue Kunden überzeugt.<br/><br/>
Mit lokalem Bezug – wie <a href="/webdesign/nette­tal/" class="text-decoration-none">Webdesign Nettetal</a> – 
werden Sie in Google Maps und regionalen Suchanfragen gefunden. 
➡ Mehr lokale Sichtbarkeit = mehr reale Anfragen.
`,
	},
	{
		q: "Wie hilft ein Blog, lokale Kunden in NRW zu gewinnen?",
		a: `
Blogartikel sorgen dafür, dass Ihre Website <strong>stetig wächst</strong>: neue Keywords, neue Rankings, neue Besucher.
Wir schreiben über Themen wie „<a href="/tips/conversion-rate-steigern-3-unsichtbare-website-fehler/">
Website-Fehler, die Anfragen kosten</a>“ – genau das, wonach Unternehmer in NRW suchen.<br/><br/>
➡ jeder Beitrag ist ein <strong>digitaler Vertriebsmitarbeiter</strong> für Nettetal, Krefeld, Mönchengladbach & Düsseldorf.
`,
	},
	{
		q: "Können Social Media & Blog zusammen für mehr Kunden sorgen?",
		a: `
<strong>Ja – das ist der Growth-Booster!</strong><br/><br/>
Wir teilen Blogbeiträge über unsere Social-Kanäle für maximale Reichweite:<br/>
• LinkedIn: <a href="https://linkedin.com/company/pixel-genie-519216390" target="_blank">Pixel Genie</a><br/>
• Substack: <a href="https://pixelgeniede.substack.com" target="_blank">pixelgeniede</a><br/>
• Medium: <a href="https://medium.com/@pixelgenie.marketing" target="_blank">@pixelgenie.marketing</a><br/>
• Facebook: <a href="https://facebook.com/100090817536941" target="_blank">Pixel Genie FB</a><br/>
• X / Twitter: <a href="https://x.com/PixelGenieWeb" target="_blank">@PixelGenieWeb</a><br/>
• Reddit: <a href="https://reddit.com/u/PixelGenieNettetal" target="_blank">PixelGenieNettetal</a><br/><br/>
➡ Blog → Social → Backlinks → SEO → <strong>Mehr Leads</strong>
`,
	},
	{
		q: "Warum sollten Inhalte lokal optimiert sein?",
		a: `
Weil Menschen regional suchen:<br/>
<strong>“Webseite erstellen Nettetal”</strong><br/>
<strong>“SEO Viersen”</strong><br/>
<strong>“Webdesign Düsseldorf”</strong><br/><br/>
Mit lokalen Begriffen & interner Vernetzung – z. B. 
<a href="/webdesign/duesseldorf/" class="text-decoration-none">Webdesign Düsseldorf</a> – 
landen Sie in der Google-Auswahl <strong>genau dann</strong>, wenn der Kunde einen Anbieter sucht.
`,
	},
	{
		q: "Wie oft sollte ich neue Inhalte veröffentlichen?",
		a: `
🔁 Konsistenz = Ranking-Power.<br/><br/>
Wir empfehlen: <strong>mindestens 2 hochwertige Artikel pro Monat</strong> → 
das zeigt Google: Ihr Unternehmen ist aktiv, kompetent & relevant.<br/><br/>
➡ Pixel Genie übernimmt Planung, Texte, SEO & Social Publishing für Nettetal + NRW.
`,
	},
	{
		q: "Warum ist Pixel Genie die richtige Wahl für Unternehmen in Nettetal?",
		a: `
Wir leben & arbeiten in der Grenzregion 🇩🇪🇳🇱<br/>
Wir kennen Ihre Zielgruppe – <strong>lokal & real</strong>, nicht aus einer Excel-Tabelle.<br/><br/>
Schnelle Umsetzung, direkte Kommunikation, und Websites, die <strong>Gewinn bringen</strong>.<br/><br/>
Mehr über uns auf 
<a href="/webdesign/" class="text-decoration-none fw-semibold">Webseiten erstellen lassen NRW</a>.
`,
	},
];

export default function BlogFAQ() {
	const pageUrl = "https://pixel-genie.de/webdesignblog#faq";
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
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
				/>
			</Head>

			<Container id="blog-faq" className="py-5 my-5">
				<Row className="text-center mb-4">
					<Col>
						<h2 className="fw-bold">
							<AutoTranslate>
								Webdesign Blog FAQ – für Unternehmen in Nettetal & NRW
							</AutoTranslate>
						</h2>
						<p className="">
							<AutoTranslate>
								Klare Antworten für mehr Google-Sichtbarkeit und Social Media
								Reichweite in der Region.
							</AutoTranslate>
						</p>
					</Col>
				</Row>

				<Row className="justify-content-center">
					<Col lg={9}>
						<Accordion className="shadow-lg">
							{FAQ.map((f, i) => (
								<Accordion.Item eventKey={i.toString()} key={i}>
									<Accordion.Header>
										<AutoTranslate>{f.q}</AutoTranslate>
									</Accordion.Header>
									<Accordion.Body
										className="text-body"
										dangerouslySetInnerHTML={{ __html: f.a }}
									/>
								</Accordion.Item>
							))}
						</Accordion>
					</Col>
				</Row>

				<Row className="text-center mt-5">
					<Col lg={10}>
						<p className=" small">
							<AutoTranslate>
								Pixel-Genie bringt Webdesign Wissen aus Nettetal direkt in Ihre
								Social Feeds – für mehr Kunden und moderne Websites in NRW.
							</AutoTranslate>
						</p>
					</Col>
				</Row>
			</Container>
		</>
	);
}
