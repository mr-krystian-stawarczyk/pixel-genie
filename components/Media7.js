"use client";
import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import Image from "next/image";
import AutoTranslateArticle from "@/components/AutoTranslateArticle";

export default function Media7() {
	const [ref1, inView1] = useInView({ threshold: 0.4 });
	const [ref2, inView2] = useInView({ threshold: 0.4 });
	const [ref3, inView3] = useInView({ threshold: 0.4 });

	const animateIn = {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: "easeOut" },
	};

	const whiteText = {
		color: "var(--text-color)",
	};

	const controls1 = useAnimation();
	const controls2 = useAnimation();
	const controls3 = useAnimation();
	useEffect(() => {
		if (inView1) controls1.start(animateIn);
	}, [inView1]);
	useEffect(() => {
		if (inView2) controls2.start(animateIn);
	}, [inView2]);
	useEffect(() => {
		if (inView3) controls3.start(animateIn);
	}, [inView3]);

	const handleEmail = (plan) => {
		const subject = encodeURIComponent(`Anfrage zu Webdesign-Paket: ${plan}`);
		const body = encodeURIComponent(
			`Hallo Pixel Genie Team,\n\nich interessiere mich für das Webdesign-Paket "${plan}".\nBitte senden Sie mir weitere Informationen.\n\nMit freundlichen Grüßen,\n[Ihr Name]`
		);
		window.location.href = `mailto:pixelgenie.marketing@gmail.com?subject=${subject}&body=${body}`;
	};

	// ✅ pełne opisy do tłumaczenia
	const starterDesc = `
<div>
<p>Für kleine Unternehmen und Start-ups, die schnell professionell online gehen möchten – mit Fokus auf Design und Sichtbarkeit.</p>
<p>Ideal für erste Kundenkontakte und eine starke Online-Präsenz.</p>
</div>
`;

	const businessDesc = `
<div>
<p>Unser Bestseller – perfekt für wachsende Marken mit Fokus auf SEO, Online-Reichweite und Leistung.</p>
<p>Mehr Funktionen, mehr Automatisierung, mehr Anfragen.</p>
</div>
`;

	const premiumDesc = `
<div>
<p>Für Unternehmen mit höchsten Ansprüchen an Design, UX, Technik und SEO.</p>
<p>Skalierbare Systeme, Headless CMS, High-End Features & Prior-Support.</p>
</div>
`;

	return (
		<Container className="my-5 py-5" id="webdesign-nettetal-preise">
			{/* 🔹 Header */}
			<Row className="justify-content-center text-center mb-5">
				<Col lg={8}>
					<Image
						src="/assets/webentwicklung-webagentur-nettetal-price.png"
						width={280}
						height={280}
						alt="Webdesign Nettetal Preise"
						className="my-3"
					/>
					<h2 className="fw-bold display-6">
						Webdesign & SEO-optimierte Websites aus Nettetal
					</h2>
					<p className="lead " style={{ color: "var(--text-color)" }}>
						Individuelles Design, blitzschnelle Performance und
						Google-Optimierung – Websites, die nicht nur schön, sondern auch
						erfolgreich sind.
					</p>
				</Col>
			</Row>

			{/* 🔹 Pakete */}
			<Row className="justify-content-center text-center g-4">
				{/* Starter */}
				<Col lg={4} md={6}>
					<motion.div
						ref={ref1}
						initial={{ opacity: 0, y: 40 }}
						animate={controls1}
					>
						<Card className="h-100 shadow-lg border-0 rounded-4 bg-transparent hover:scale-105 transition-all duration-300 hover">
							<Card.Body className="p-4">
								<h3 className="fw-bold text-primary">Starter Website</h3>

								<div className="text-body text-start small">
									<AutoTranslateArticle
										html={starterDesc}
										slug="starter-desc"
									/>
								</div>

								<h2 className="fw-bold text-primary my-3">ab 499 €</h2>
								<hr />

								<ul
									className="text-body text-start small"
									style={{ color: "var(--text-color)" }}
								>
									<li style={{ color: "var(--text-color)" }}>
										One-Page oder Mini-Website (bis 3 Seiten)
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Modernes, responsives Design
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Basis-SEO & Ladezeit-Optimierung
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Kontaktformular & Google Maps
									</li>
									<li style={{ color: "var(--text-color)" }}>
										{" "}
										Impressum & Datenschutz inklusive
									</li>
								</ul>

								<Button
									className="mt-3"
									onClick={() => handleEmail("Starter Website (ab 499 €)")}
								>
									Jetzt anfragen
								</Button>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>

				{/* Business */}
				<Col lg={4} md={6}>
					<motion.div
						ref={ref2}
						initial={{ opacity: 0, y: 40 }}
						animate={controls2}
					>
						<Card className="h-100 shadow-xl  bg-secondary rounded-4 hover:scale-105 border-success transition-all duration-300 hover">
							<Card.Body className="p-4">
								<h3 className="fw-bold text-success bg-dark rounded">
									Business Website
								</h3>

								<div className=" text-start small text-black">
									<span className="text-black">
										<AutoTranslateArticle
											html={businessDesc}
											slug="business-desc"
										/>
									</span>
								</div>

								<h2 className="fw-bold text-success bg-dark rounded my-3">
									ab 899 €
								</h2>
								<hr />

								<ul className="text-body text-start small">
									<li style={{ color: "var(--text-color)" }}>
										Bis zu 10 Seiten + CMS
									</li>
									<li style={{ color: "var(--text-color)" }}>
										SEO-Strategie & Keyword-Analyse
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Blog- oder News-System
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Core Web Vitals Optimierung
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Analytics & Search Console
									</li>
									<li style={{ color: "var(--text-color)" }}>
										3 Monate Support inklusive
									</li>
								</ul>

								<Button
									className="mt-3 text-white"
									variant="success"
									onClick={() => handleEmail("Business Website (ab 899 €)")}
								>
									Bestseller anfragen
								</Button>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>

				{/* Premium */}
				<Col lg={4} md={6}>
					<motion.div
						ref={ref3}
						initial={{ opacity: 0, y: 40 }}
						animate={controls3}
					>
						<Card
							className="h-100 border-0 text-light rounded-4 shadow-lg hover:scale-105 transition-all duration-300 hover"
							style={{
								background: "linear-gradient(135deg,#0b0b2e 0%,#21216b 100%)",
							}}
						>
							<Card.Body className="p-4">
								<h3 className="fw-bold text-warning">Premium Website</h3>

								<div className="premium-desc-wrapper">
									<AutoTranslateArticle
										html={premiumDesc}
										slug="premium-desc"
										style={whiteText}
									/>
								</div>

								<h2 className="fw-bold text-warning my-3">ab 1499 €</h2>
								<hr className="border-light" />

								<ul className="text-light text-start small">
									<li>Unbegrenzte Seiten & Funktionen</li>
									<li>E-Commerce oder Buchungssystem</li>
									<li>Mehrsprachigkeit & internationale SEO</li>
									<li>UI/UX nach Markenrichtlinien</li>
									<li>Priorisierter Support & Betreuung</li>
								</ul>

								<Button
									className="mt-3 fw-bold text-dark"
									variant="warning"
									onClick={() => handleEmail("Premium Website (ab 1499 €)")}
								>
									Premium buchen
								</Button>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>
			</Row>

			{/* 🔹 Zusatzleistungen */}
			<Row className="justify-content-center text-center mt-5">
				<Col lg={8}>
					<h3 className="fw-bold mb-3">✨ Erweiterungen & Zusatzleistungen</h3>
					<p style={{ color: "var(--text-color)" }}>
						Jedes Paket kann flexibel erweitert werden – holen Sie das Maximum
						aus Ihrer Website heraus:
					</p>
				</Col>
			</Row>

			<Row className="justify-content-center text-center g-3 mt-3">
				{[
					{
						t: "📰 Blog Integration",
						d: "SEO-Struktur & einfache Verwaltung",
						p: "+199 €",
					},
					{
						t: "🎨 Grafikdesign",
						d: "Icons, Illustrationen & Branding",
						p: "ab 79 €",
					},
					{
						t: "✍️ Texterstellung",
						d: "SEO-Texte für jede Seite",
						p: "+29 € / Seite",
					},
					{
						t: "📢 Banner & Social Media",
						d: "Promo-Grafiken & Ads",
						p: "ab 29 €",
					},
				].map((item, i) => (
					<Col md={3} sm={6} key={i}>
						<Card className="border-0 shadow-sm hover:scale-105 transition-all duration-300 p-3">
							<h5 className="fw-bold text-dark">{item.t}</h5>
							<p className="small text-body">
								{item.d}
								<br />
								<b>{item.p}</b>
							</p>
						</Card>
					</Col>
				))}
			</Row>

			{/* 🔹 Fußzeile */}
			<Row className="justify-content-center text-center mt-4">
				<Col lg={8}>
					<p className="text-body">
						Alle Preise zzgl. MwSt. – transparent, flexibel und ohne versteckte
						Kosten.
						<br />
						<b>Pixel Genie – Webdesign, das begeistert und verkauft.</b>
					</p>
				</Col>
			</Row>
		</Container>
	);
}
