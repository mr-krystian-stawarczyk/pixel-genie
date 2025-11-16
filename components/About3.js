"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Container, Accordion, Row, Col, Button } from "react-bootstrap";
import AutoTranslate from "@/components/AutoTranslate";
import Head from "next/head";
import dynamic from "next/dynamic";

const MotionFadeIn = dynamic(() => import("@/components/MotionFadeIn"), {
	ssr: false,
});

const SITE_ORIGIN = "https://pixel-genie.de";

function About3() {
	const faq = [
		{
			q: "Was macht Pixel Genie als Agentur besonders?",
			a: `
Pixel Genie verbindet <strong><a href="/webseitenerstellung" class="text-primary">Webdesign</a>, 
<a href="/webentwicklung" class="text-primary">Webentwicklung</a>, 
<a href="/seo" class="text-primary">SEO</a> & Social Media</strong> unter einem Dach. 
Statt bunter Versprechen liefern wir <strong>messbare Ergebnisse</strong>: mehr Sichtbarkeit, mehr Anfragen, mehr Kunden.
Wir arbeiten schnell, präzise und persönlich – ohne Agentur-Blabla.
      `,
		},
		{
			q: "Für wen ist Pixel Genie der richtige Partner?",
			a: `
Wir arbeiten vor allem mit <strong>KMU, Dienstleistern & lokalen Marken</strong> aus 
<a href="/seo/nettetal" class="text-primary">Nettetal</a>, 
<a href="/seo/viersen" class="text-primary">Viersen</a>, 
<a href="/seo/krefeld" class="text-primary">Krefeld</a>, 
<a href="/seo/moenchengladbach" class="text-primary">Mönchengladbach</a> 
& Umgebung – sowie der Grenzregion NL.<br/><br/>
Ideal für Unternehmen, die <strong>professionell auftreten</strong> und über 
<a href="/seo" class="text-primary">SEO</a> und 
<a href="/webseitenerstellung" class="text-primary">moderne Websites</a> mehr Kunden gewinnen wollen.
      `,
		},
		{
			q: "Wie läuft ein Projekt bei Pixel Genie ab?",
			a: `
<strong>1️⃣ Analyse & Strategie:</strong> Ziele, Zielgruppen, Keywords.<br/>
<strong>2️⃣ Struktur, Design & Inhalte:</strong> UX, Content & Conversion.<br/>
<strong>3️⃣ Entwicklung:</strong> Umsetzung mit 
<a href="/webentwicklung" class="text-primary">Next.js & React</a>, Performance, Tracking.<br/>
<strong>4️⃣ Launch & Optimierung:</strong> Monitoring, Feintuning, SEO-Push.
      `,
		},
		{
			q: "Welche Leistungen bietet Pixel Genie konkret an?",
			a: `
• <strong><a href="/webseitenerstellung" class="text-primary">Webseitenerstellung & Relaunch</a></strong><br/>
• <strong><a href="/webentwicklung" class="text-primary">Webentwicklung & Integrationen</a></strong><br/>
• <strong><a href="/seo" class="text-primary">SEO & Local SEO</a></strong><br/>
• Branding, Content, Social Media – alles in einem sauberen Workflow.
      `,
		},
		{
			q: "Wie lange dauert die Erstellung einer Website?",
			a: `
• <strong>Landingpage:</strong> 2–4 Wochen<br/>
• <strong>Unternehmenswebsite:</strong> 4–6 Wochen<br/>
• <strong>größere Projekte:</strong> mehrere Wochen<br/><br/>
Mit klaren To-Dos & direkter Kommunikation liefern wir <strong>ohne Verzögerungen</strong>.
      `,
		},
		{
			q: "Was kostet eine Website oder SEO?",
			a: `
Wir arbeiten mit <strong>transparenten Preisen</strong> & klaren Paketen – keine versteckten Kosten.<br/>
SEO beinhaltet immer: Technik-Setup, Struktur, Performance & Tracking.<br/><br/>
Ein konkretes Angebot erhalten Sie nach einem kostenlosen Erstgespräch.
      `,
		},
		{
			q: "Arbeitet ihr nur in Nettetal?",
			a: `
Unsere Basis ist <a href="/seo/nettetal" class="text-primary">Nettetal</a>, 
aber wir betreuen Kundinnen und Kunden in ganz NRW & der Grenzregion NL.<br/>
Remote oder vor Ort – flexibel & unkompliziert.
      `,
		},
		{
			q: "Welche Technologien nutzt Pixel Genie?",
			a: `
Wir setzen auf <strong>Next.js, React, APIs, Tracking, Performance-Optimierung, Core Web Vitals</strong> 
und moderne Tools für schnelle Websites, die verkaufen.<br/><br/>
Ideal für Skalierung & langlebige Projekte.
      `,
		},
		{
			q: "Übernehmt ihr auch Relaunch, Wartung & Support?",
			a: `
Ja – wir analysieren bestehende Websites, identifizieren <strong>Design-, UX- & SEO-Schwachstellen</strong> 
und führen Komplett-Relaunches durch.<br/><br/>
Nach dem Launch bieten wir optional <strong>Wartung, Backups, Sicherheit, Updates & SEO-Betreuung</strong>.
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
		"@id": `${SITE_ORIGIN}#company`,
		name: "Pixel-Genie Webagentur Nettetal",
		url: SITE_ORIGIN,
		address: {
			"@type": "PostalAddress",
			streetAddress: "Fasanenstr. 10",
			postalCode: "41334",
			addressLocality: "Nettetal",
			addressRegion: "NRW",
			addressCountry: "DE",
		},
		image: `${SITE_ORIGIN}/assets/pixel-genie-webseiten-seo-nettetal-logo.png`,
		sameAs: [
			"https://www.linkedin.com/company/pixel-genie-de/?viewAsMember=true",
			"https://facebook.com/100090817536941",
			"https://x.com/PixelGenieWeb",
			"https://reddit.com",
			"https://medium.com/@pixelgenie.marketing",
		],
	};

	return (
		<>
			<Head>
				<title>
					Über Pixel Genie – Webdesign, Webentwicklung & SEO Agentur in Nettetal
					NRW
				</title>
				<meta
					name="description"
					content="Pixel Genie – Webagentur für Webdesign, Webentwicklung & SEO in Nettetal & NRW. Moderne Websites, Local SEO & messbare Ergebnisse für KMU."
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

			<MotionFadeIn
				initial={{ opacity: 0, y: 60 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, easing: "ease-out" }}
				threshold={0.2}
			>
				<Container className="py-5">
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
									Pixel Genie – Ihre Webagentur für Nettetal, NRW & NL
								</AutoTranslate>
							</h1>
							<p className="lead mt-2">
								<AutoTranslate>
									Wir entwickeln Websites & SEO-Strategien, die sichtbar machen
									und Kunden bringen.
								</AutoTranslate>
							</p>
						</Col>
					</Row>

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

					<Row className="justify-content-center text-center mt-5">
						<Col lg={8}>
							<h3 className="fw-bold">
								<AutoTranslate>
									Bereit für mehr Sichtbarkeit & Kunden?
								</AutoTranslate>
							</h3>
							<p>
								<AutoTranslate>
									Pixel Genie – Webdesign, Webentwicklung & SEO für NRW,
									Unternehmen und Solo-Selbstständige.
								</AutoTranslate>
							</p>
						</Col>
					</Row>
				</Container>
			</MotionFadeIn>
		</>
	);
}

export default About3;
