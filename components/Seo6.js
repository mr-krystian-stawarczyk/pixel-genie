"use client";
import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import AutoTranslate from "@/components/AutoTranslate";

export default function Seo6() {
	const [ref1, inView1] = useInView({ threshold: 0.4, triggerOnce: false });
	const [ref2, inView2] = useInView({ threshold: 0.4, triggerOnce: false });
	const [ref3, inView3] = useInView({ threshold: 0.4, triggerOnce: false });

	const animateIn = {
		opacity: 1,
		transform: "translateY(0)",
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

	const handleEmail = (plan) => {
		const subject = encodeURIComponent(`Anfrage zu SEO-Plan: ${plan}`);
		const body = encodeURIComponent(
			`Hallo Pixel Genie Team,\n\nich interessiere mich für euren ${plan}.\nBitte sendet mir weitere Informationen über Leistungen, Vertragsbedingungen und mögliche Starttermine.\n\nMeine Website:\n[Hier einfügen]\n\nMit freundlichen Grüßen,\n[Ihr Name]`
		);
		window.location.href = `mailto:pixelgenie.marketing@gmail.com?subject=${subject}&body=${body}`;
	};

	return (
		<Container id="seoprices" className="py-5 transition-colors duration-500">
			<Row className="justify-content-center text-center mb-5">
				<Col lg={8}>
					<Image
						src="/assets/webentwicklung-webagentur-nettetal-price.png"
						width={280}
						height={280}
						alt="SEO Preise Pixel Genie Nettetal"
						className="my-3"
						
					/>
					<h2 className="fw-bold display-6 mb-3">
						<AutoTranslate>
							SEO-Pakete für jedes Unternehmen – transparent, fair & effektiv
						</AutoTranslate>
					</h2>
					<p className="lead">
						<AutoTranslate>
							Unsere monatlichen SEO-Pakete sind speziell darauf ausgelegt, Ihre
							Website sichtbarer zu machen, mehr Kunden zu gewinnen und Ihre
							Google-Rankings nachhaltig zu verbessern – egal, ob Sie ein
							Start-up, lokales Unternehmen oder eine größere Marke sind.
						</AutoTranslate>
					</p>
				</Col>
			</Row>

			<Row className="justify-content-center text-center">
				{/* BASIC */}
				<Col lg={4} md={6} className="mb-4">
					<motion.div
						ref={ref1}
						initial={{ opacity: 0, transform: "translateY(40px)" }}
						animate={controls1}
					>
						<Card className="h-100 border-primary shadow-lg bg-transparent rounded-4">
							<Card.Body className="p-4">
								<h3 className="fw-bold text-primary">
									<AutoTranslate>BASIC PLAN</AutoTranslate>
								</h3>

								<p>
									<AutoTranslate>
										Ihr Einstieg in die Welt der SEO-Optimierung – ideal für
										kleine Unternehmen, die lokal gefunden werden wollen.
									</AutoTranslate>
								</p>

								<h2 className="fw-bold mb-3">99 € / Monat</h2>

								<hr />

								<ul className="list-unstyled text-start">
									<p>
										<AutoTranslate>
											✔ Technisches Website-Audit & Fehleranalyse
										</AutoTranslate>
									</p>
									<p>
										<AutoTranslate>
											✔ Keyword-Recherche für lokale Zielgruppen
										</AutoTranslate>
									</p>
									<p>
										<AutoTranslate>
											✔ OnPage-Optimierung (Meta, Titel, Struktur)
										</AutoTranslate>
									</p>
									<p>
										<AutoTranslate>
											✔ Content-Optimierung & SEO-Texte
										</AutoTranslate>
									</p>
									<p>
										<AutoTranslate>✔ Monatlicher Ranking-Report</AutoTranslate>
									</p>
									<p>
										<AutoTranslate>
											✔ Google Search Console Einrichtung
										</AutoTranslate>
									</p>
								</ul>

								<Button
									variant="primary"
									className="mt-3"
									onClick={() => handleEmail("BASIC PLAN (99 €/Monat)")}
								>
									<AutoTranslate>Jetzt starten</AutoTranslate>
								</Button>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>

				{/* BUSINESS */}
				<Col lg={4} md={6} className="mb-4">
					<motion.div
						ref={ref2}
						initial={{ opacity: 0, transform: "translateY(40px)" }}
						animate={controls2}
					>
						<Card className="h-100 border-success shadow-lg rounded-4 bg-transparent position-relative">
							<Card.Body className="p-4">
								<h3 className="fw-bold text-success">
									<AutoTranslate>BUSINESS PLAN</AutoTranslate>
								</h3>

								<p>
									<AutoTranslate>
										Der Bestseller für wachsende Marken – inklusive technischer
										Optimierung, Content-Marketing und Performance-Boost.
									</AutoTranslate>
								</p>

								<h2 className="fw-bold mb-3">149 € / Monat</h2>

								<hr />

								<ul className="list-unstyled text-start">
									<p>
										<AutoTranslate>
											✔ Detailliertes SEO-Audit & Ladezeiten-Analyse
										</AutoTranslate>
									</p>
									<p>
										<AutoTranslate>
											✔ Umfassende Keyword-Strategie (lokal & regional)
										</AutoTranslate>
									</p>
									<p>
										<AutoTranslate>
											✔ Optimierung für Core Web Vitals
										</AutoTranslate>
									</p>
									<p>
										<AutoTranslate>
											✔ Technische SEO (Schema, strukturierte Daten)
										</AutoTranslate>
									</p>
									<p>
										<AutoTranslate>
											✔ Backlink-Aufbau & Linkmonitoring
										</AutoTranslate>
									</p>
									<p>
										<AutoTranslate>
											✔ Monatlicher Performance-Report
										</AutoTranslate>
									</p>
									<p>
										<AutoTranslate>
											✔ 1 Stunde SEO-Beratung im Monat inklusive
										</AutoTranslate>
									</p>
								</ul>

								<Button
									variant="success"
									className="mt-3 text-white"
									onClick={() => handleEmail("BUSINESS PLAN (149 €/Monat)")}
								>
									<AutoTranslate>Bestseller sichern</AutoTranslate>
								</Button>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>

				{/* PREMIUM */}
				<Col lg={4} md={6} className="mb-4">
					<motion.div
						ref={ref3}
						initial={{ opacity: 0, transform: "translateY(40px)" }}
						animate={controls3}
					>
						<Card
							className="h-100 border-warning shadow-lg rounded-4 bg-gradient text-light"
							style={{
								background: "linear-gradient(135deg,#0b0b2e 0%,#21216b 100%)",
							}}
						>
							<Card.Body className="p-4">
								<h3 className="fw-bold text-warning">
									<AutoTranslate>PREMIUM PLAN</AutoTranslate>
								</h3>

								<p style={{ color: "var(--text-color)" }}>
									<AutoTranslate>
										Das Rundum-sorglos-Paket für Unternehmen, die das Maximum
										aus ihrer Online-Präsenz herausholen wollen – inkl. SEO,
										Content, UX & Ads.
									</AutoTranslate>
								</p>

								<h2 className="fw-bold mb-3 text-warning">299 € / Monat</h2>

								<hr className="border-light" />

								<ul className="list-unstyled text-start">
									<p>
										<AutoTranslate>
											✔ Individuelle SEO-Strategie & Wettbewerbsanalyse
										</AutoTranslate>
									</p>
									<p>
										<AutoTranslate>
											✔ Vollständige technische Optimierung (Next.js/React)
										</AutoTranslate>
									</p>
									<p>
										<AutoTranslate>
											✔ Hochwertige Backlinks & Outreach-Kampagnen
										</AutoTranslate>
									</p>
									<p>
										<AutoTranslate>
											✔ Conversion-Tracking & Heatmap-Analysen
										</AutoTranslate>
									</p>
									<p>
										<AutoTranslate>
											✔ Content-Erstellung inkl. Blog & Landingpages
										</AutoTranslate>
									</p>
									<p>
										<AutoTranslate>
											✔ Monatliche Strategie-Calls & Reporting
										</AutoTranslate>
									</p>
									<p>
										<AutoTranslate>
											✔ Priorisierter Support & persönliche Betreuung
										</AutoTranslate>
									</p>
								</ul>

								<Button
									variant="warning"
									className="mt-3 fw-bold"
									onClick={() => handleEmail("PREMIUM PLAN (299 €/Monat)")}
								>
									<AutoTranslate>Premium buchen</AutoTranslate>
								</Button>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>
			</Row>

			<Row className="justify-content-center text-center mt-5">
				<Col lg={8}>
					<p className="text-muted">
						<AutoTranslate>
							Alle Preise verstehen sich zzgl. MwSt. – keine versteckten
							Gebühren. Jedes Paket kann monatlich gekündigt oder individuell
							erweitert werden. Pixel Genie steht für transparente
							SEO-Leistungen, messbare Ergebnisse und persönliche Betreuung. Ihr
							Erfolg ist unser Ziel.
						</AutoTranslate>
					</p>
				</Col>
			</Row>
		</Container>
	);
}
