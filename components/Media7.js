"use client";
import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import Image from "next/image";

export default function Media7() {
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

	// 📧 Email handler
	const handleEmail = (plan) => {
		const subject = encodeURIComponent(`Anfrage zu Webdesign-Paket: ${plan}`);
		const body = encodeURIComponent(
			`Hallo Pixel Genie Team,\n\nich interessiere mich für das Webdesign-Paket "${plan}".\nBitte senden Sie mir weitere Informationen zu Leistungen, Ablauf und möglichen Erweiterungen.\n\nMeine Geschäftsdaten:\nName / Firma:\nWebsite (falls vorhanden):\n[Hier einfügen]\n\nMit freundlichen Grüßen,\n[Ihr Name]`
		);
		window.location.href = `mailto:pixelgenie.marketing@gmail.com?subject=${subject}&body=${body}`;
	};

	return (
		<Container className="my-5 py-5" id="webdesign-nettetal-preise">
			<Row className="justify-content-center text-center mb-5">
				<Col lg={8}>
					<Image
						src="/assets/webentwicklung-webagentur-nettetal-price.png"
						width={280}
						height={280}
						alt="Webdesign Nettetal Preise"
						className="my-3"
						priority
					/>
					<h2 className="fw-bold display-6">
						Webdesign & SEO-optimierte Websites aus Nettetal
					</h2>
					<p className="lead ">
						Individuelles Design, blitzschnelle Performance und
						Google-Optimierung in einem Paket. Pixel Genie entwickelt Websites,
						die nicht nur schön, sondern auch erfolgreich sind.
					</p>
				</Col>
			</Row>

			{/* --- Pakete --- */}
			<Row className="justify-content-center text-center g-4">
				{/* Starter */}
				<Col lg={4} md={6}>
					<motion.div
						ref={ref1}
						initial={{ opacity: 0, y: 40 }}
						animate={controls1}
					>
						<Card className="h-100 shadow-lg border-0 rounded-4 hover:scale-105 transition-all duration-300 bg-transparent">
							<Card.Body className="p-4">
								<h3 className="fw-bold text-primary">Starter Website</h3>
								<p className="">
									Für kleine Unternehmen und Start-ups, die schnell
									professionell online gehen möchten – mit Fokus auf Design und
									Sichtbarkeit.
								</p>
								<h2 className="fw-bold text-primary mb-3">ab 499 €</h2>
								<hr />
								<p>✔ One-Page oder Mini-Website (bis 3 Seiten)</p>
								<p>✔ Modernes, responsives Design</p>
								<p>✔ Basis-SEO & technische Optimierung</p>
								<p>✔ Kontaktformular & Google Maps</p>
								<p>✔ Impressum & Datenschutz inklusive</p>
								<Button
									variant="primary"
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
						<Card className="h-100 shadow-xl border-success rounded-4 bg-light hover:scale-105 transition-all duration-300 position-relative">
							<Card.Body className="p-4">
								<h3 className="fw-bold text-success">Business Website</h3>
								<p className="text-black">
									Unser Bestseller – ideal für KMU und Dienstleister, die mehr
									Online-Reichweite, bessere Conversion und Performance wollen.
								</p>
								<h2 className="fw-bold text-success mb-3">ab 899 €</h2>
								<hr />
								<p className="text-black">
									✔ Bis zu 10 Seiten mit CMS-Verwaltung
								</p>
								<p className="text-black">
									✔ Erweiterte SEO-Strategie & Keyword-Recherche
								</p>
								<p className="text-black">
									✔ Blog-Integration oder News-Bereich
								</p>
								<p className="text-black">
									✔ Core Web Vitals Optimierung (Lighthouse 90+)
								</p>
								<p className="text-black">
									✔ Analytics & Search Console Setup
								</p>
								<p className="text-black">
									✔ 3 Monate technischer Support inklusive
								</p>
								<Button
									variant="success"
									className="mt-3 text-white"
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
							className="h-100 border-0 rounded-4 text-light shadow-lg hover:scale-105 transition-all duration-300"
							style={{
								background: "linear-gradient(135deg,#0b0b2e 0%,#21216b 100%)",
							}}
						>
							<Card.Body className="p-4">
								<h3 className="fw-bold text-warning">Premium Website</h3>
								<p className="text-white">
									Für Unternehmen mit höchsten Ansprüchen an Design, UX, Technik
									und SEO. Maßgeschneidert für Marken mit Wachstum.
								</p>
								<h2 className="fw-bold text-warning mb-3">ab 1499 €</h2>
								<hr className="border-light" />
								<p className="text-white">
									✔ Unbegrenzte Seiten & dynamische Funktionen
								</p>
								<p className="text-white">✔ E-Commerce oder Buchungssystem</p>
								<p className="text-white">
									✔ Mehrsprachigkeit & internationale SEO
								</p>
								<p className="text-white">
									✔ UI/UX Design nach Markenrichtlinien
								</p>
								<p className="text-white">
									✔ Laufende Betreuung & Prior-Support
								</p>
								<Button
									variant="warning"
									className="mt-3 fw-bold text-dark"
									onClick={() => handleEmail("Premium Website (ab 1499 €)")}
								>
									Premium buchen
								</Button>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>
			</Row>

			{/* Upsells */}
			<Row className="justify-content-center text-center mt-5">
				<Col lg={8}>
					<h3 className="fw-bold mb-3">✨ Erweiterungen & Zusatzleistungen</h3>
					<p className="">
						Alle Pakete lassen sich flexibel erweitern – holen Sie das Maximum
						aus Ihrer Website heraus mit unseren Add-ons:
					</p>
				</Col>
			</Row>

			<Row className="justify-content-center text-center g-3 mt-3">
				<Col md={3} sm={6}>
					<Card className="border-0 shadow-sm hover:scale-105 transition-all duration-300 p-3">
						<h5 className="fw-bold text-dark">📰 Blog Integration</h5>
						<p className=" small text-dark">
							Einfache Blogverwaltung & SEO-Struktur. <br /> <b>+199 €</b>
						</p>
					</Card>
				</Col>

				<Col md={3} sm={6}>
					<Card className="border-0 shadow-sm hover:scale-105 transition-all duration-300 p-3">
						<h5 className="fw-bold text-dark">🎨 Grafikdesign</h5>
						<p className=" small text-dark">
							Individuelle Website-Grafiken & Icons. <br /> <b>ab 79 €</b>
						</p>
					</Card>
				</Col>

				<Col md={3} sm={6}>
					<Card className="border-0 shadow-sm hover:scale-105 transition-all duration-300 p-3">
						<h5 className="fw-bold text-dark">✍️ Texterstellung</h5>
						<p className=" small text-dark">
							Professionelle SEO-Texte für Ihre Website. <br />{" "}
							<b>+29 € / Seite</b>
						</p>
					</Card>
				</Col>

				<Col md={3} sm={6}>
					<Card className="border-0 shadow-sm hover:scale-105 transition-all duration-300 p-3">
						<h5 className="fw-bold text-dark">📢 Banner & Social Media</h5>
						<p className="text-dark small">
							Promo-Grafiken für Ihre Werbekampagnen. <br /> <b>ab 29 €</b>
						</p>
					</Card>
				</Col>
			</Row>

			<Row className="justify-content-center text-center mt-4">
				<Col lg={8}>
					<p className="">
						Alle Preise zzgl. MwSt. – transparent, flexibel und ohne versteckte
						Kosten. <br />
						<b>Pixel Genie – Webdesign, das begeistert und verkauft.</b>
					</p>
				</Col>
			</Row>
		</Container>
	);
}
