"use client";
import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function WebPrices() {
	const { t } = useTranslation();
	const [ref1, inView1] = useInView({ threshold: 0.4, triggerOnce: false });
	const [ref2, inView2] = useInView({ threshold: 0.4, triggerOnce: false });
	const [ref3, inView3] = useInView({ threshold: 0.4, triggerOnce: false });

	const animateIn = {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: "easeOut" },
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

	// 📧 E-Mail handler
	const handleEmail = (plan) => {
		const subject = encodeURIComponent(`Anfrage zu Website-Paket: ${plan}`);
		const body = encodeURIComponent(
			`Hallo Pixel Genie Team,\n\nich interessiere mich für euer ${plan}.\nBitte sendet mir weitere Informationen zu Leistungen, Preisen und Ablauf der Webseitenerstellung.\n\nMeine Geschäftsdaten:\nWebsite (falls vorhanden):\n[Hier einfügen]\n\nMit freundlichen Grüßen,\n[Ihr Name]`
		);
		window.location.href = `mailto:pixelgenie.marketing@gmail.com?subject=${subject}&body=${body}`;
	};

	return (
		<Container id="web-design-pricing" className="my-5 py-5 text-dark">
			<Row className="justify-content-center text-center mb-5">
				<Col lg={8}>
					<Image
						src="/assets/webentwicklung-webagentur-nettetal-price.png"
						width={280}
						height={280}
						alt="Webdesign Preise Pixel Genie Nettetal"
						className="my-3"
						priority
					/>
					<h2 className="fw-bold display-6">
						Webseiten-Pakete, die überzeugen – modern, schnell & fair
					</h2>
					<p className="lead text-muted">
						Ob Start-up, Handwerksbetrieb oder Marke – wir erstellen Websites,
						die Besucher begeistern und bei Google performen. Wählen Sie das
						Paket, das zu Ihrem Ziel passt.
					</p>
				</Col>
			</Row>

			<Row className="justify-content-center text-center g-4">
				{/* BASIC */}
				<Col lg={4} md={6}>
					<motion.div
						ref={ref1}
						initial={{ opacity: 0, y: 40 }}
						animate={controls1}
					>
						<Card className="h-100 shadow-lg border-0 rounded-4 bg-transparent hover:scale-105 transition-all duration-300">
							<Card.Body className="p-4">
								<h3 className="fw-bold text-primary mb-2">BASIC WEBSITE</h3>
								<p>
									Ideal für den schnellen Start – Ihre erste professionelle
									Website zum besten Preis.
								</p>
								<h2 className="fw-bold mb-3 text-primary">ab 499 €</h2>
								<hr />
								<p>✔ One-Page oder Landingpage</p>
								<p>
									✔ Responsive Design <br></br>(Mobile & Desktop)
								</p>
								<p>✔ Basis SEO & schnelle Ladezeiten</p>
								<p>✔ Kontaktformular & Google Maps</p>
								<p>✔ Impressum & Datenschutz inklusive</p>
								<Button
									variant="primary"
									className="mt-3 px-4"
									onClick={() => handleEmail("BASIC WEBSITE (ab 499 €)")}
								>
									Jetzt anfragen
								</Button>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>

				{/* BUSINESS - Bestseller */}
				<Col lg={4} md={6}>
					<motion.div
						ref={ref2}
						initial={{ opacity: 0, y: 40 }}
						animate={controls2}
					>
						<Card className="h-100 shadow-xl border-success rounded-4 bg-light position-relative hover:shadow-2xl hover:scale-105 transition-all duration-300">
							<Card.Body className="p-4">
								<h3 className="fw-bold text-success mb-2">BUSINESS WEBSITE</h3>
								<p className="text-muted">
									Unser Bestseller – ideal für Unternehmen, die Leistung und
									Design verbinden wollen.
								</p>
								<h2 className="fw-bold mb-3 text-success">ab 899 €</h2>
								<hr />
								<p className="text-muted">
									✔ Mehrseitige Website (bis 5 Seiten)
								</p>
								<p className="text-muted">
									✔ Individuelles Design mit CMS (Sanity/Headless)
								</p>
								<p className="text-muted">
									✔ SEO & Performance Optimierung (Lighthouse 90+)
								</p>
								<p className="text-muted">
									✔ Integration von Analytics & Search Console
								</p>
								<p className="text-muted">
									{" "}
									✔ 1 Jahr Hosting & Wartung inklusive
								</p>
								<p className="text-muted">✔ DSGVO- & Impressumskonform</p>
								<Button
									variant="success"
									className="mt-3 text-white px-4"
									onClick={() => handleEmail("BUSINESS WEBSITE (ab 899 €)")}
								>
									Bestseller anfragen
								</Button>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>

				{/* PREMIUM */}
				<Col lg={4} md={6}>
					<motion.div
						ref={ref3}
						initial={{ opacity: 0, y: 40 }}
						animate={controls3}
					>
						<Card
							className="h-100 border-0 rounded-4 text-light shadow-lg hover:scale-105 transition-all duration-300"
							style={{
								background: "linear-gradient(135deg,#0b0b2e 0%,#21216b 100%)",
							}}
						>
							<Card.Body className="p-4">
								<h3 className="fw-bold text-warning mb-2">PREMIUM WEBSITE</h3>
								<p className="text-white">
									Für Marken, die Maßstäbe setzen wollen – High-End Performance,
									UX und Strategie.
								</p>
								<h2 className="fw-bold mb-3 text-warning">ab 1499 €</h2>
								<hr className="border-light" />
								<p className="text-white">
									✔ Individuelles Webdesign & UI/UX Konzept
								</p>
								<p className="text-white">✔ Unbegrenzte Seiten & CMS</p>
								<p className="text-white">
									✔ Technische SEO + Core Web Vitals 95+
								</p>
								<p className="text-white">✔ Blog + Content-System inklusive</p>
								<p className="text-white">✔ Conversion-Tracking & A/B Tests</p>
								<p className="text-white">
									✔ Priorisierter Support & Betreuung
								</p>
								<Button
									variant="warning"
									className="mt-3 fw-bold text-dark px-4"
									onClick={() => handleEmail("PREMIUM WEBSITE (ab 1499 €)")}
								>
									Premium buchen
								</Button>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>
			</Row>

			{/* 💡 Add-ons Section */}
			<Row className="justify-content-center text-center mt-5">
				<Col lg={8}>
					<h3 className="fw-bold mb-3 mt-5">✨ Erweiterungen & Add-ons</h3>
					<p className="text-muted">
						Individuell anpassbar für jedes Paket – steigern Sie die Wirkung
						Ihrer Website mit unseren Extras:
					</p>
				</Col>
			</Row>

			<Row className="justify-content-center text-center g-3 mt-3">
				{/* 1. Blog */}
				<Col md={3} sm={6}>
					<Card className="border-0 shadow-sm hover:scale-105 transition-all duration-300 p-3">
						<h5 className="fw-bold">📰 Blog Integration</h5>
						<p className="text-muted small">
							Einfache Blogverwaltung & SEO-Struktur. <br /> <b>+199 €</b>
						</p>
					</Card>
				</Col>

				{/* 2. Shop */}
				<Col md={3} sm={6}>
					<Card className="border-0 shadow-sm hover:scale-105 transition-all duration-300 p-3">
						<h5 className="fw-bold">🛒 Online Shop</h5>
						<p className="text-muted small">
							Shop-System (bis 20 Produkte). <br /> <b>+499 €</b>
						</p>
					</Card>
				</Col>

				{/* 3. SEO Boost */}
				<Col md={3} sm={6}>
					<Card className="border-0 shadow-sm hover:scale-105 transition-all duration-300 p-3">
						<h5 className="fw-bold">🚀 SEO Boost</h5>
						<p className="text-muted small">
							OnPage + Local SEO Optimierung. <br /> <b>+149 €</b>
						</p>
					</Card>
				</Col>

				{/* 4. Wartung */}
				<Col md={3} sm={6}>
					<Card className="border-0 shadow-sm hover:scale-105 transition-all duration-300 p-3">
						<h5 className="fw-bold">🔧 Wartungspaket</h5>
						<p className="text-muted small">
							Updates, Backups, Monitoring (monatlich). <br />{" "}
							<b>+29 €/Monat</b>
						</p>
					</Card>
				</Col>
			</Row>

			{/* 🖋️ Content & Grafik Upsells */}
			<Row className="justify-content-center text-center g-3 mt-4">
				<Col md={3} sm={6}>
					<Card className="border-0 shadow-sm hover:scale-105 transition-all duration-300 p-3">
						<h5 className="fw-bold">✍️ Texterstellung</h5>
						<p className="text-muted small">
							Professionelle Texte für Ihre Website (SEO-optimiert). <br />{" "}
							<b>+39 € / Seite</b>
						</p>
					</Card>
				</Col>

				<Col md={3} sm={6}>
					<Card className="border-0 shadow-sm hover:scale-105 transition-all duration-300 p-3">
						<h5 className="fw-bold">🎨 Grafikdesign</h5>
						<p className="text-muted small">
							Individuelle Website-Grafiken & Icons. <br /> <b>ab 79 €</b>
						</p>
					</Card>
				</Col>

				<Col md={3} sm={6}>
					<Card className="border-0 shadow-sm hover:scale-105 transition-all duration-300 p-3">
						<h5 className="fw-bold">📢 Banner & Promo-Design</h5>
						<p className="text-muted small">
							Werbebanner & Social Media Grafiken. <br /> <b>ab 29 € / Stück</b>
						</p>
					</Card>
				</Col>
			</Row>

			<Row className="justify-content-center text-center mt-5">
				<Col lg={8}>
					<p className="text-muted">
						Alle Preise zzgl. MwSt. – transparent, fair und ohne versteckte
						Kosten. Pixel Genie entwickelt Websites, Texte und Designs, die
						verkaufen. <br />
						<b>Ihre Marke verdient digitale Exzellenz.</b>
					</p>
				</Col>
			</Row>
		</Container>
	);
}
