"use client";
import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import Head from "next/head";
import AutoTranslate from "@/components/AutoTranslate";

const FAQ = [
	{
		q: "Was macht einen erfolgreichen Webdesign-Blog aus?",
		a: "Regelmäßige Veröffentlichungen, SEO-optimierte Inhalte, praxisnahe Tipps sowie klare Strukturen zur Verbesserung von Website-Performance und Benutzererfahrung.",
	},
	{
		q: "Welche Themen behandelt der Pixel-Genie Webdesign Blog?",
		a: "Webdesign, Webseiten-Erstellung, SEO-Strategie, Content Marketing, Social Media, Conversion Optimierung und UX für kleine und mittlere Unternehmen in NRW.",
	},
	{
		q: "Warum sollte ich regelmäßig neue Inhalte veröffentlichen?",
		a: "Regelmäßiger Content stärkt Fehlermuster bei Google: Aktualität, Expertise und Relevanz. Das führt zu besserer Sichtbarkeit und mehr qualifiziertem Traffic.",
	},
	{
		q: "Wie können Blogbeiträge die Sichtbarkeit meines Unternehmens steigern?",
		a: "Durch gezielte Keywords wie Webdesign Düsseldorf, Webseiten erstellen Nettetal, SEO Viersen erreicht Ihr Unternehmen Nutzer in Ihrer Region.",
	},
	{
		q: "Was ist bei der Suchmaschinenoptimierung wichtig?",
		a: "Schnelle Ladezeiten, interne Verlinkung, strukturierte Daten, klare Überschriften und Nutzenfokus. Genau das werden wir im Blog umsetzen.",
	},
	{
		q: "Wie unterstützt Content beim Gewinnen neuer Kunden?",
		a: "Nutzergerecht geschriebene Artikel schaffen Vertrauen, zeigen Expertise und führen zu organischen Anfragen ohne teure Werbung.",
	},
	{
		q: "Warum ist Local SEO für NRW so wichtig?",
		a: "Kunden suchen lokal: Webdesign in Düsseldorf, SEO für Krefeld usw. Mit Lokalbezug im Blog entsteht mehr Sichtbarkeit für regionale Begriffe.",
	},
	{
		q: "Kann ich Themen für den Blog vorschlagen?",
		a: "Ja – wir erstellen Content abgestimmt auf Ihre Branche, Zielgruppe und häufige Kundenfragen.",
	},
];

export default function BlogFAQ() {
	const pageUrl = "https://pixel-genie.de/webdesignblog#faq";

	const faqSchema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: FAQ.map((item) => ({
			"@type": "Question",
			name: item.q,
			acceptedAnswer: { "@type": "Answer", text: item.a },
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
							Blog FAQ – Webdesign & SEO leicht erklärt
						</h2>
						<p className="text-muted">
							Antworten auf die wichtigsten Fragen rund um Content Marketing und
							Webdesign für Unternehmen in NRW.
						</p>
					</Col>
				</Row>

				<Row className="justify-content-center">
					<Col lg={9}>
						<Accordion>
							{FAQ.map((f, i) => (
								<Accordion.Item eventKey={i.toString()} key={i}>
									<Accordion.Header>{f.q}</Accordion.Header>
									<Accordion.Body>
										<AutoTranslate>{f.a}</AutoTranslate>
									</Accordion.Body>
								</Accordion.Item>
							))}
						</Accordion>
					</Col>
				</Row>

				{/* SEO Absatz */}
				<Row className="text-center mt-4">
					<Col lg={10}>
						<p className="text-muted">
							Der Pixel-Genie Blog wächst wöchentlich – mehr Tipps und
							Praxiswissen für bessere Website-Ergebnisse in ganz
							Nordrhein-Westfalen: Düsseldorf, Krefeld, Viersen, Nettetal,
							Mönchengladbach, Duisburg und darüber hinaus.
						</p>
					</Col>
				</Row>
			</Container>
		</>
	);
}
