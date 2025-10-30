"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { Container, Accordion, Row, Col, Button } from "react-bootstrap";
import AutoTranslate from "@/components/AutoTranslate";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import Head from "next/head";

const SITE_ORIGIN = "https://pixel-genie.de";

function About3() {
	const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
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
			a: `
Wir vereinen <strong>Webdesign, Entwicklung, SEO & Social Media</strong> unter einem Dach. 
Damit liefern wir <strong>sichtbare Ergebnisse</strong> statt Versprechen – schnell, persönlich und datenbasiert.
Besonders stark für Unternehmen aus <strong>Nettetal, Krefeld, Viersen & Umgebung</strong>.
      `,
		},
		{
			q: "Wofür steht Pixel Genie in Nettetal?",
			a: `
Wir helfen regionalen Betrieben, <strong>online mehr Kunden zu gewinnen</strong>.
Keine Spielerei – <strong>mehr Anfragen, mehr Umsatz, mehr Bekanntheit</strong> in NRW & Grenzregion NL.
      `,
		},
		{
			q: "Wie läuft ein Projekt bei Pixel Genie ab?",
			a: `
1️⃣ Analyse: Ziele, Zielgruppe, Keywords<br/>
2️⃣ Design & Entwicklung: mobil-schnell & SEO-stark<br/>
3️⃣ Inhalte & Conversion-Optimierung<br/>
4️⃣ Launch & Tracking – messbare Ergebnisse ab Tag 1
      `,
		},
		{
			q: "Welche Technologien verwendet ihr?",
			a: `
Wir setzen auf <strong>Next.js, React, Headless CMS, DSGVO-Technik</strong> und Performance-Optimierung 
(Core Web Vitals > 90). 
➡ Keine Baukästen, keine veralteten Systeme.
      `,
		},
		{
			q: "Warum helfen wir besonders regionalen Unternehmen?",
			a: `
Weil <strong>Local SEO</strong> heute entscheidet, wer angerufen wird.
Wir setzen auf regionale Sichtbarkeit:<br/>
• Webdesign Nettetal<br/>
• SEO für Viersen & Krefeld<br/>
• Performance in ganz NRW
      `,
		},
		{
			q: "Wie wird Erfolg gemessen?",
			a: `
Mit klaren Business-KPIs:<br/>
<strong>Anfragen, Leads & Verkäufe</strong> – nicht Likes.<br/>
➡ Websites müssen <strong>profitabel</strong> sein.
      `,
		},
		{
			q: "Kann ich Inhalte später selbst pflegen?",
			a: `
Ja! Sie erhalten eine intuitive CMS-Lösung.<br/>
Auf Wunsch übernehmen wir Updates, Content & SEO – <strong>nur wenn SIE es wollen</strong>.
      `,
		},
		{
			q: "Wird Social Media auch unterstützt?",
			a: `
Ja – inkl. Content-Plan, Posting & Community Management.<br/>
➡ Verstärkt Website-Leads & Google-Traffic.
      `,
		},
	];

	const faqSchema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faq.map((f) => ({
			"@type": "Question",
			name: f.q,
			acceptedAnswer: { "@type": "Answer", text: f.a },
		})),
	};

	const orgSchema = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		name: "Pixel-Genie Webagentur Nettetal",
		url: SITE_ORIGIN,
		address: {
			"@type": "PostalAddress",
			addressLocality: "Nettetal",
			addressRegion: "NRW",
			addressCountry: "DE",
		},
		image: `${SITE_ORIGIN}/assets/pixel-genie-webseiten-seo-nettetal-logo.png`,
		sameAs: [
			"https://linkedin.com/company/pixel-genie-519216390",
			"https://facebook.com/100090817536941",
			"https://x.com/PixelGenieWeb",
			"https://reddit.com/u/PixelGenieNettetal",
			"https://medium.com/@pixelgenie.marketing",
		],
	};

	return (
		<>
			<Head>
				<title>
					Über Pixel Genie – Webdesign & SEO Agentur in Nettetal NRW
				</title>
				<meta
					name="description"
					content="Pixel Genie ist die moderne Webdesign & SEO Agentur in Nettetal, spezialisiert auf Performance, Local SEO & Kundengewinnung für KMU in NRW & Grenzregion NL."
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
				/>
			</Head>

			<motion.div ref={ref} animate={controls} initial={{ opacity: 0, y: 60 }}>
				<Container className="py-5">
					{/* HERO */}
					<Row className="justify-content-center text-center mb-5">
						<Col lg={7}>
							<Image
								src="/assets/pixel-genie-webseiten-seo-nettetal-logo.png"
								width={200}
								height={200}
								alt="Pixel Genie Webagentur Nettetal Logo"
							/>
							<h1 className="fw-bold mt-4 display-5">
								<AutoTranslate>
									Pixel Genie – Ihre Webagentur für Nettetal & NRW
								</AutoTranslate>
							</h1>
							<p className="lead  mt-2">
								<AutoTranslate>
									Wir entwickeln Websites, die verkaufen – lokal stark &
									technisch perfekt.
								</AutoTranslate>
							</p>
						</Col>
					</Row>

					{/* FAQ */}
					<Row className="justify-content-center">
						<Col lg={9}>
							<Accordion className="shadow-lg rounded-4">
								{faq.map((item, i) => (
									<Accordion.Item eventKey={String(i)} key={i}>
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

					{/* CTA Abschluss */}
					<Row className="justify-content-center text-center mt-5">
						<Col lg={8}>
							<h3 className="fw-bold">
								<AutoTranslate>
									Bereit für mehr Kunden & Anfragen?
								</AutoTranslate>
							</h3>
							<p className="">
								<AutoTranslate>
									Pixel Genie – Webdesign, SEO & Social Media Marketing in NRW.
								</AutoTranslate>
							</p>
							<Button href="#contact" className="btn-nav btn-lg mt-3">
								<AutoTranslate>Kostenloses Erstgespräch sichern</AutoTranslate>
							</Button>
						</Col>
					</Row>
				</Container>
			</motion.div>
		</>
	);
}

export default About3;
