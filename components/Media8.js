"use client";
import React, { useEffect } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

// ✅ SEO-optimized FAQ data
const WEB_FAQ = [
	{
		q: "Was kostet professionelles Webdesign in Nettetal?",
		a: `
Professionelles Webdesign hängt vom Umfang ab, aber bei Pixel Genie ist alles klar strukturiert:<br/><br/>
💶 Preise:<br/>
• Simple Business Website: <strong>ab 399 €</strong><br/>
• Webauftritte mit SEO & CMS: <strong>799–1500 €</strong><br/>
• Shops & Premiumprojekte: individuell<br/><br/>
✅ Immer inklusive: Beratung, Performance, SEO-Basis, Sicherheit & UX-Design.
`,
	},
	{
		q: "Wie lange dauert die Erstellung einer Website?",
		a: `
⏱️ Effizienz trifft Qualität:<br/>
• Kleine Websites in <strong>7–10 Tagen</strong><br/>
• Shops oder komplexe Systeme <strong>3–5 Wochen</strong><br/><br/>
Wir nutzen moderne Technologien wie <strong>Next.js</strong> & <strong>React</strong> für extreme Geschwindigkeit ⚡
`,
	},
	{
		q: "Was ist der Unterschied zwischen Webdesign und Webentwicklung?",
		a: `
🎨 Webdesign = Look & Benutzererlebnis<br/>
🧩 Webentwicklung = Technik & Funktion<br/><br/>
Pixel Genie vereint beides → Design, das <strong>nicht nur schön aussieht</strong>, sondern <strong>verkauft</strong>.
`,
	},
	{
		q: "Bieten Sie auch Suchmaschinenoptimierung (SEO) an?",
		a: `
🔥 Ja — SEO ist bei uns Standard.<br/><br/>
Wir steigern Ihre Google-Sichtbarkeit über:<br/>
• OnPage SEO (Core Web Vitals, Struktur)<br/>
• Keyword & Content Strategie<br/>
• Lokale SEO für NRW<br/><br/>
SEO sorgt dafür, dass Kunden <strong>SIE finden</strong>.
`,
	},
	{
		q: "Erstellen Sie auch Websites für andere Städte oder Branchen?",
		a: `
Ja! Digital kennt keine Grenzen.<br/><br/>
📍 Fokus: NRW & Grenzregion NL<br/>
➡ Nettetal, Krefeld, Düsseldorf, Mönchengladbach, Venlo<br/><br/>
🎯 Für Unternehmen aus Handwerk, Dienstleistung, Gastronomie & E-Commerce.
`,
	},
	{
		q: "Wie läuft die Zusammenarbeit genau ab?",
		a: `
Unser 4-Phasen-Prozess:<br/>
1️⃣ Analyse & Ziele<br/>
2️⃣ Design & Inhalte<br/>
3️⃣ Technik & SEO<br/>
4️⃣ Launch & Betreuung<br/><br/>
✅ Persönlich, transparent & ohne Agentur-Chaos.
`,
	},
	{
		q: "Welche Vorteile bietet Pixel Genie gegenüber anderen Agenturen?",
		a: `
🚀 Was Sie bei uns bekommen:<br/>
• Full-Service: Design + Technik + SEO<br/>
• Ultra-schnelle Ladezeiten (Performance > 90)<br/>
• Lokale Marktkenntnis (NRW + NL)<br/>
• Direkte Kommunikation — keine Hotlines<br/><br/>
Kurz gesagt: <strong>Agenturleistung ohne Agenturfrust</strong>.
`,
	},
	{
		q: "Was macht eine Website erfolgreich?",
		a: `
💡 Erfolgreiche Websites verbinden:<br/>
• klare Struktur<br/>
• überzeugenden Inhalt<br/>
• SEO-Power<br/>
• Performance & Tracking<br/><br/>
➡ Ziel: <strong>mehr Leads, weniger Absprünge</strong>.
`,
	},
];

export default function MediaFAQ() {
	const siteUrl = "https://pixel-genie.de/webdesign";

	const faqSchema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: WEB_FAQ.map((f) => ({
			"@type": "Question",
			name: f.q,
			acceptedAnswer: { "@type": "Answer", text: f.a },
		})),
	};

	const [ref, inView] = useInView({ threshold: 0.2 });
	const controls = useAnimation();

	useEffect(() => {
		controls.start({
			opacity: inView ? 1 : 0,
			transition: { duration: 0.8, ease: "easeInOut" },
		});
	}, [inView, controls]);

	return (
		<>
			<Head>
				<title>Webdesign NRW FAQ | Pixel Genie – häufige Fragen</title>
				<meta
					name="description"
					content="Professionelles Webdesign FAQ für NRW: Kosten, Dauer, SEO, Design, Technik & Zusammenarbeit – klare Antworten von Pixel Genie aus Nettetal."
				/>
				<link rel="canonical" href={siteUrl} />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
				/>
			</Head>

			<motion.div
				ref={ref}
				animate={controls}
				initial={{ opacity: 0 }}
				id="design-nettetal-fragen"
				className="my-5 py-5 text-body"
			>
				<Container>
					{/* ✅ TITLE & HERO */}
					<Row className="text-center mb-5 justify-content-center">
						<Col lg={7}>
							<Image
								src="/assets/pixel-genie-webseiten-seo-nettetal-logo.png"
								width={240}
								height={240}
								alt="Pixel-Genie Webdesign Agentur Nettetal NRW – moderne Websites, die Kunden bringen"
								priority
							/>
							<h2 className="fw-bold mt-3">Webdesign NRW – Häufige Fragen</h2>
							<p className="">
								Antworten aus echten Kundenprojekten in Nettetal, Viersen &
								Umgebung – klar, verständlich & nützlich.
							</p>
						</Col>
					</Row>

					{/* ✅ FAQ ACCORDION */}
					<Row className="justify-content-center">
						<Col lg={10}>
							<Accordion className="shadow-lg">
								{WEB_FAQ.map((item, idx) => (
									<Accordion.Item eventKey={idx.toString()} key={idx}>
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
			</motion.div>
		</>
	);
}
