"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { Container, Accordion, Row, Col, Button } from "react-bootstrap";
import AutoTranslate from "@/components/AutoTranslate";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import Head from "next/head";

function About3() {
	const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: true });
	const controls = useAnimation();

	useEffect(() => {
		if (inView) {
			controls.start({
				opacity: 1,
				y: 0,
				transition: { duration: 1, ease: "easeOut" },
			});
		}
	}, [inView, controls]);

	const faq = [
		{
			q: "Was macht Pixel Genie als Agentur besonders?",
			a: "Wir bringen Webdesign, Entwicklung und SEO unter ein Dach – ohne Outsourcing. Dadurch sind wir schneller, persönlicher und garantieren Top-Qualität für jedes Projekt.",
		},
		{
			q: "Wie läuft ein Webdesign-Projekt bei euch ab?",
			a: "Wir starten mit Analyse & Beratung, dann Design, Entwicklung und SEO-Optimierung. Das Wichtigste: Sie sind in jedem Schritt involviert, transparent & ohne Überraschungen.",
		},
		{
			q: "Welche Technologien verwendet ihr?",
			a: "Wir arbeiten mit React, Next.js, Tailwind, Bootstrap – modernste Tools für Core Web Vitals, Performance & Sicherheit. Keine veralteten Themes oder Baukastensysteme.",
		},
		{
			q: "Wie viel Erfahrung habt ihr?",
			a: "Über 10 Jahre Web- & Marketing-Erfahrung. Gründung 2024 in Nettetal, aber Know-how aus dutzenden Kundenprojekten in DE & NL.",
		},
		{
			q: "Arbeitet ihr nur lokal in Nettetal?",
			a: "Nein, aber wir lieben es lokal. Wir betreuen Kundinnen & Kunden aus Nettetal, NRW und europaweit – genau so flexibel wie Ihre Anforderungen.",
		},
		{
			q: "Wie messt ihr den Erfolg einer Website?",
			a: "Mit klaren KPIs: SEO Rankings, Core Web Vitals, Conversions, Anfragen, Verkäufe. Keine „Likes“, sondern echtes Geschäftswachstum.",
		},
		{
			q: "Kann ich meine Website selbst pflegen?",
			a: "Natürlich! Wir geben Ihnen ein einfach zu bedienendes CMS. Wenn Sie möchten, übernehmen wir Updates & Inhalte – aber nur wenn SIE es wollen.",
		},
		{
			q: "Bietet ihr auch langfristige Betreuung an?",
			a: "Ja! Wartung, SEO, Content, Monitoring – wir lassen Sie nicht nach dem Launch allein. Eine Website ist ein Projekt mit Zukunft, nicht nur ein Produkt.",
		},
		{
			q: "Wie hoch ist euer Qualitätsanspruch?",
			a: "Sehr hoch. Jede Website wird mehrfach getestet (Performance, UX, Mobile, Sicherheit). Wir veröffentlichen nichts, was wir nicht selbst lieben würden.",
		},
		{
			q: "Warum heißt ihr Pixel Genie?",
			a: "Weil wir glauben, dass jedes Pixel zählt. Und weil gute Technologie sich manchmal wie Magie anfühlt ✨ – solange man weiß, wie sie funktioniert.",
		},
	];

	return (
		<>
			{/* ✅ SEO: FAQ Rich Snippets */}
			<Head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "FAQPage",
							mainEntity: faq.map((f) => ({
								"@type": "Question",
								name: f.q,
								acceptedAnswer: { "@type": "Answer", text: f.a },
							})),
						}),
					}}
				/>
			</Head>

			<motion.div ref={ref} animate={controls} initial={{ opacity: 0, y: 80 }}>
				<Container fluid className="py-5">
					<Row className="justify-content-center text-center mb-5">
						<Col lg={8}>
							<Image
								src="/assets/webentwicklung-nettetal-fragen1.png"
								width={240}
								height={240}
								alt="Pixel Genie Agentur FAQ"
								className="my-3"
							/>
							<h2 className="fw-bold display-5 mb-3">
								<AutoTranslate>
									Fragen zu Pixel Genie? Wir beantworten alles.
								</AutoTranslate>
							</h2>
							<p className="lead text-muted">
								<AutoTranslate>
									Vertrauen beginnt mit Transparenz. Hier erfahren Sie ganz
									genau, wie wir arbeiten – und warum wir für viele die erste
									Wahl in Nettetal sind.
								</AutoTranslate>
							</p>
						</Col>
					</Row>

					<Row className="justify-content-center">
						<Col lg={9}>
							<Accordion className="shadow-lg border-0 rounded-4">
								{faq.map((item, i) => (
									<Accordion.Item eventKey={String(i)} key={i}>
										<Accordion.Header>
											<AutoTranslate>{item.q}</AutoTranslate>
										</Accordion.Header>
										<Accordion.Body>
											<AutoTranslate>{item.a}</AutoTranslate>
										</Accordion.Body>
									</Accordion.Item>
								))}
							</Accordion>
						</Col>
					</Row>

					{/* ✅ CTA domykający lejek */}
					<Row className="justify-content-center text-center mt-5">
						<Col lg={8}>
							<h3 className="fw-bold">
								<AutoTranslate>
									Klingt gut? Dann lassen Sie uns über Ihr Projekt sprechen!
								</AutoTranslate>
							</h3>
							<p>
								<AutoTranslate>
									Wir freuen uns darauf, Ihre Marke online sichtbar &
									erfolgreich zu machen.
								</AutoTranslate>
							</p>
							<Button href="#contact" className="btn-nav mt-3">
								<span className="text-white">
									<AutoTranslate>
										Kostenloses Erstgespräch sichern
									</AutoTranslate>
								</span>
							</Button>
						</Col>
					</Row>
				</Container>
			</motion.div>
		</>
	);
}

export default About3;
