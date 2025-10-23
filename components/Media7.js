import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import Image from "next/image";

function Media7() {
	const [ref1, inView1] = useInView({ threshold: 0.5, triggerOnce: false });
	const [ref2, inView2] = useInView({ threshold: 0.5, triggerOnce: false });
	const [ref3, inView3] = useInView({ threshold: 0.5, triggerOnce: false });

	const animateIn = {
		opacity: 1,
		transition: { duration: 1, ease: "easeInOut" },
	};

	const controls1 = useAnimation();
	const controls2 = useAnimation();
	const controls3 = useAnimation();

	useEffect(() => {
		if (inView1) controls1.start(animateIn);
	}, [inView1, controls1]);

	useEffect(() => {
		let timeout;
		if (inView2) timeout = setTimeout(() => controls2.start(animateIn), 500);
		return () => clearTimeout(timeout);
	}, [inView2, controls2]);

	useEffect(() => {
		let timeout;
		if (inView3) timeout = setTimeout(() => controls3.start(animateIn), 1000);
		return () => clearTimeout(timeout);
	}, [inView3, controls3]);

	return (
		<Container className="my-5 py-5" id="webdesign-nettetal-preise">
			<Row className="justify-content-center align-items-center text-center mb-5">
				<Col lg={6}>
					<Image
						src="/assets/webentwicklung-webagentur-nettetal-price.png"
						width={300}
						height={300}
						alt="webdesign-nettetal-preise"
						priority
					/>
					<h2 className="mt-3 fw-bold">
						Webdesign & SEO Optimierte Websites in Nettetal
					</h2>
					<p>
						Individuelle, schnelle und moderne Webseiten – optimiert für Google,
						Performance und Erfolg. Pixel Genie Nettetal – Ihre Webagentur am
						Niederrhein.
					</p>
				</Col>
			</Row>

			<Row className="text-dark justify-content-center align-items-stretch">
				{/* Starter Paket */}
				<Col lg={4} className="mx-auto my-3 hover">
					<motion.div ref={ref1} animate={controls1} initial={{ opacity: 0 }}>
						<Card className="shadow-lg border-0 text-dark h-100">
							<Card.Body>
								<h1 className="fw-bold text-primary">Starter</h1>
								<Card.Text>
									Perfekt für kleine Unternehmen oder Start-ups, die eine modern
									gestaltete Website benötigen. Klare Struktur, starke
									Sichtbarkeit und professionelle Wirkung – ideal für den ersten
									Eindruck online.
								</Card.Text>
								<hr />
								<Card.Title>Leistungen:</Card.Title>
								<ul className="text-start">
									<li>Bis zu 5 Unterseiten</li>
									<li>Responsives Webdesign (Mobile, Tablet, Desktop)</li>
									<li>Kontaktformular & Google Maps</li>
									<li>Basis SEO Optimierung (Meta-Tags, Geschwindigkeit)</li>
									<li>Hosting-Einrichtung & Domainberatung</li>
								</ul>
							</Card.Body>
							<Card.Footer className="bg-white border-0">
								<h4 className="fw-bold">ab 399 €</h4>
								<p className="text-muted mb-0">Einmalige Zahlung</p>
							</Card.Footer>
						</Card>
					</motion.div>
				</Col>

				{/* Business Paket */}
				<Col lg={4} className="mx-auto my-3 hover">
					<motion.div ref={ref2} animate={controls2} initial={{ opacity: 0 }}>
						<Card className="shadow-lg border-0 text-dark h-100">
							<Card.Body>
								<h1 className="fw-bold text-success">Business</h1>
								<Card.Text>
									Für wachsende Unternehmen, die sich professionell präsentieren
									und gefunden werden wollen. Mit modernen Funktionen,
									erweiterter SEO und Conversion-Optimierung.
								</Card.Text>
								<hr />{" "}
								<Image
									src="/assets/webagentur-webentwiclkung-nettetal-seo-bestseller.png"
									width={80}
									height={80}
									alt="bestseller webdesign nettetal"
									className="mt-2"
								/>
								<Card.Title>Leistungen:</Card.Title>
								<ul className="text-start">
									<li>Bis zu 10 Unterseiten</li>
									<li>Erweiterte SEO Optimierung & Keyword-Analyse</li>
									<li>Blog- oder News-Sektion (CMS integriert)</li>
									<li>Kontaktformulare mit Logik / Lead-Tracking</li>
									<li>Google Analytics & Search Console Setup</li>
									<li>3 Monate technischer Support inklusive</li>
								</ul>
							</Card.Body>

							<Card.Footer className="bg-white border-0">
								<h4 className="fw-bold">ab 799 €</h4>
								<p className="text-muted mb-0">
									Perfekt für KMU & Dienstleister
								</p>
							</Card.Footer>
						</Card>
					</motion.div>
				</Col>

				{/* Premium Paket */}
				<Col lg={4} className="mx-auto my-3 hover">
					<motion.div ref={ref3} animate={controls3} initial={{ opacity: 0 }}>
						<Card className="shadow-lg border-0 text-dark h-100">
							<Card.Body>
								<h1 className="fw-bold text-danger">Premium</h1>
								<Card.Text>
									Für Unternehmen mit höchsten Ansprüchen an Design, Leistung
									und Funktionalität. Ideal für Online-Shops, große Marken und
									individuelle Lösungen – komplett maßgeschneidert.
								</Card.Text>
								<hr />
								<Card.Title>Leistungen:</Card.Title>
								<ul className="text-start">
									<li>Unbegrenzte Seiten & individuelle Funktionen</li>
									<li>E-Commerce (Shop, Zahlungen, Lagerverwaltung)</li>
									<li>UX/UI Design auf Markenbasis</li>
									<li>Mehrsprachigkeit & internationale SEO</li>
									<li>Performance-Optimierung (Next.js, Core Web Vitals)</li>
									<li>6 Monate Betreuung & Support</li>
								</ul>
							</Card.Body>
							<Card.Footer className="bg-white border-0">
								<h4 className="fw-bold">ab 1000 €</h4>
								<p className="text-muted mb-0">Nach Projektumfang & Bedarf</p>
							</Card.Footer>
						</Card>
					</motion.div>
				</Col>
			</Row>
		</Container>
	);
}

export default Media7;
