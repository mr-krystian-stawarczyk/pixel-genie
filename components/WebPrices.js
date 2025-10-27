"use client";
import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import AutoTranslate from "@/components/AutoTranslate";

export default function WebPrices() {
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

	// 📧 Mail CTA
	const handleEmail = (plan) => {
		const subject = encodeURIComponent(`Website Anfrage: ${plan}`);
		const body = encodeURIComponent(
			`Hallo Pixel Genie Team,%0A%0Aich interessiere mich für ${plan}.`
		);
		window.location.href = `mailto:pixelgenie.marketing@gmail.com?subject=${subject}&body=${body}`;
	};

	return (
		<Container id="web-design-pricing" className="my-5 py-5 text-dark">
			<Row className="justify-content-center text-center mb-5">
				<Col lg={8}>
					<Image
						src="/assets/webentwicklung-webagentur-nettetal-price.png"
						width={250}
						height={250}
						alt="Webdesign Preise Pixel Genie Nettetal"
						className="my-3"
						priority
					/>

					<h2 className="fw-bold display-6">
						<AutoTranslate>
							Webseiten-Pakete, die überzeugen – modern, schnell & fair
						</AutoTranslate>
					</h2>

					<p className="lead ">
						<AutoTranslate>
							Ob Start-up, Handwerksbetrieb oder Marke – wir erstellen Websites,
							die Besucher begeistern und bei Google performen.
						</AutoTranslate>
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
						<Card className="h-100 shadow-lg border-0 rounded-4 bg-transparent hover">
							<Card.Body className="p-4">
								<h3 className="fw-bold text-primary mb-2">BASIC WEBSITE</h3>

								<p>
									<AutoTranslate>
										Ideal für den schnellen Start – Ihre erste professionelle
										Website zum besten Preis.
									</AutoTranslate>
								</p>

								<h2 className="fw-bold mb-3 text-primary">ab 499 €</h2>
								<hr />

								<p>✔ One-Page oder Landingpage</p>
								<p>✔ Responsive Design (Mobile & Desktop)</p>
								<p>✔ Basis SEO & schnelle Ladezeiten</p>
								<p>✔ Kontaktformular & Google Maps</p>
								<p>✔ Impressum & Datenschutz inklusive</p>

								<Button
									variant="primary"
									className="mt-3 px-4"
									onClick={() => handleEmail("BASIC WEBSITE")}
								>
									<AutoTranslate>Jetzt anfragen</AutoTranslate>
								</Button>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>

				{/* BUSINESS */}
				<Col lg={4} md={6}>
					<motion.div
						ref={ref2}
						initial={{ opacity: 0, y: 40 }}
						animate={controls2}
					>
						<Card className="h-100 shadow-xl rounded-4 bg-light hover">
							<Card.Body className="p-4">
								<h3 className="fw-bold text-success mb-2">BUSINESS WEBSITE</h3>

								<p className="text-muted">
									<AutoTranslate>
										Unser Bestseller – ideal für Unternehmen, die Leistung und
										Design verbinden wollen.
									</AutoTranslate>
								</p>

								<h2 className="fw-bold mb-3 text-success">ab 899 €</h2>
								<hr />

								<p className="text-black">
									✔ Mehrseitige Website (bis 5 Seiten)
								</p>
								<p className="text-black">
									✔ Individuelles Design mit CMS (Sanity/Headless)
								</p>
								<p className="text-black">
									✔ SEO & Performance Optimierung (Lighthouse 90+)
								</p>
								<p className="text-black">
									✔ Analytics & Search Console Integration
								</p>
								<p className="text-black">✔ 1 Jahr Hosting & Wartung</p>

								<Button
									variant="success"
									className="mt-3 px-4 text-white"
									onClick={() => handleEmail("BUSINESS WEBSITE")}
								>
									<AutoTranslate>Bestseller anfragen</AutoTranslate>
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
							className="h-100 rounded-4 text-light shadow-lg hover"
							style={{ background: "linear-gradient(135deg,#0b0b2e,#21216b)" }}
						>
							<Card.Body className="p-4">
								<h3 className="fw-bold text-warning mb-2">PREMIUM WEBSITE</h3>

								<p className="text-white">
									<AutoTranslate>
										Für Marken, die Maßstäbe setzen wollen – High-End
										Performance, UX und Strategie.
									</AutoTranslate>
								</p>

								<h2 className="fw-bold mb-3 text-warning">ab 1499 €</h2>
								<hr className="border-light" />

								<p className="text-white">✔ Individuelles UX/UI Konzept</p>
								<p className="text-white">✔ Unbegrenzte Seiten & CMS</p>
								<p className="text-white">
									✔ Technische SEO + Core Web Vitals 95+
								</p>
								<p className="text-white">✔ Blog + Content-System inklusive</p>
								<p className="text-white">✔ Conversion-Tracking & A/B Tests</p>

								<Button
									variant="warning"
									className="mt-3 fw-bold px-4 text-dark"
									onClick={() => handleEmail("PREMIUM WEBSITE")}
								>
									<AutoTranslate>Premium buchen</AutoTranslate>
								</Button>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>
			</Row>

			{/* ADD-ONS */}
			<Row className="justify-content-center text-center mt-5">
				<Col lg={8}>
					<h3 className="fw-bold mb-3 mt-5">
						<AutoTranslate>✨ Erweiterungen & Add-ons</AutoTranslate>
					</h3>

					<p>
						<AutoTranslate>
							Individuell anpassbar für jedes Paket – steigern Sie die Wirkung
							Ihrer Website mit unseren Extras
						</AutoTranslate>
					</p>
				</Col>
			</Row>

			<Row className="justify-content-center text-center g-3 mt-3">
				{[
					["📰 Blog Integration", "+199 €"],
					["🛒 Online Shop", "+499 €"],
					["🚀 SEO Boost", "+149 €"],
					["🔧 Wartungspaket", "+29 €/Monat"],
				].map(([label, price], i) => (
					<Col md={3} sm={6} key={i}>
						<Card className="border-0 shadow-sm p-3">
							<h5 className="fw-bold text-black">{label}</h5>
							<p className="text-muted small">
								<b>{price}</b>
							</p>
						</Card>
					</Col>
				))}
			</Row>

			<Row className="justify-content-center text-center mt-5">
				<Col lg={8}>
					<p className="text-muted">
						<AutoTranslate>
							Alle Preise zzgl. MwSt. – transparent, fair & top Performance
						</AutoTranslate>
					</p>
				</Col>
			</Row>
		</Container>
	);
}
