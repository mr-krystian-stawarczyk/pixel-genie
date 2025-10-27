"use client";
import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import AutoTranslate from "@/components/AutoTranslate";

export default function Brand6() {
	const animateIn = {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: "easeOut" },
	};

	const controls = [useAnimation(), useAnimation(), useAnimation()];
	const refs = [];
	const inViews = [];

	for (let i = 0; i < 3; i++) {
		const [ref, inView] = useInView({ threshold: 0.4 });
		refs.push(ref);
		inViews.push(inView);
	}

	useEffect(() => {
		inViews.forEach((view, i) => {
			if (view) controls[i].start(animateIn);
		});
	}, [...inViews]);

	const handleEmail = (plan) => {
		const subject = encodeURIComponent(`Branding Anfrage: ${plan}`);
		const body = encodeURIComponent(
			`Hallo Pixel Genie Team,%0A%0Aich interessiere mich für ${plan}.`
		);
		window.location.href = `mailto:pixelgenie.marketing@gmail.com?subject=${subject}&body=${body}`;
	};

	return (
		<Container id="branding-nettetal-preis" className="my-5 py-5 text-dark">
			<Row className="justify-content-center text-center mb-5">
				<Col lg={8}>
					<Image
						src="/assets/webentwicklung-webagentur-nettetal-price.png"
						width={250}
						height={250}
						alt="Branding Preise Pixel Genie Nettetal"
						className="my-3"
						priority
					/>

					<h2 className="fw-bold display-6">
						<AutoTranslate>
							Branding-Pakete – starke Marken entstehen durch Strategie & Design
						</AutoTranslate>
					</h2>

					<p className="lead ">
						<AutoTranslate>
							Sichtbar werden. Vertrauen gewinnen. Konkurrenz überholen.
						</AutoTranslate>
					</p>
				</Col>
			</Row>

			<Row className="justify-content-center text-center g-4">
				{/* STARTER */}
				<Col lg={4} md={6}>
					<motion.div
						ref={refs[0]}
						initial={{ opacity: 0, y: 40 }}
						animate={controls[0]}
					>
						<Card className="h-100 shadow-lg border-0 rounded-4 bg-transparent">
							<Card.Body className="p-4">
								<h3 className="fw-bold text-primary mb-2">Starter Branding</h3>
								<p>
									<AutoTranslate>
										Perfekt für Start-ups & lokale Unternehmen – schnell, modern
										& professionell.
									</AutoTranslate>
								</p>
								<h2 className="fw-bold mb-3 text-primary">249 €</h2>
								<hr />
								<p>✔ Logo Design – 3 Designvorschläge</p>
								<p>✔ Farb- & Typografie-Konzept</p>
								<p>✔ Mini Brand Guidelines (1 Seite PDF)</p>
								<p>✔ Social Profile Kit (Facebook/Instagram)</p>
								<p>✔ Favicons + Dateiübergabe inkl. Nutzungsrechte</p>

								<Button
									variant="primary"
									className="mt-3 px-4"
									onClick={() => handleEmail("Starter Branding")}
								>
									<AutoTranslate>Jetzt anfragen</AutoTranslate>
								</Button>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>

				{/* PROFESSIONAL */}
				<Col lg={4} md={6}>
					<motion.div
						ref={refs[1]}
						initial={{ opacity: 0, y: 40 }}
						animate={controls[1]}
					>
						<Card className="h-100 shadow-xl rounded-4 bg-light position-relative">
							<div
								className="bg-warning text-dark px-3 py-1 position-absolute"
								style={{
									top: 10,
									right: 10,
									borderRadius: "8px",
									fontWeight: "700",
								}}
							>
								<AutoTranslate>Bestseller</AutoTranslate>
							</div>

							<Card.Body className="p-4">
								<h3 className="fw-bold text-success mb-2">
									Professional Branding
								</h3>
								<p className="text-black">
									<AutoTranslate>
										Sichtbarkeit + Performance – die perfekte Mischung
									</AutoTranslate>
								</p>
								<h2 className="fw-bold mb-3 text-success">599 €</h2>
								<hr />
								<p className="text-black">✔ Alles aus Starter</p>
								<p className="text-black">✔ Brand Guide (mehrseitig)</p>
								<p className="text-black">
									✔ Social Media Templates (6 Stück)
								</p>
								<p className="text-black">✔ SEO Keyword Setup + Analyse</p>
								<p className="text-black">✔ Landingpage UX + Designvorlage</p>
								<p className="text-black">
									✔ 3 Headline Copywriting Vorschläge
								</p>

								<Button
									variant="success"
									className="mt-3 px-4 text-white"
									onClick={() => handleEmail("Professional Branding")}
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
						ref={refs[2]}
						initial={{ opacity: 0, y: 40 }}
						animate={controls[2]}
					>
						<Card
							className="h-100 rounded-4 text-light shadow-lg"
							style={{ background: "linear-gradient(135deg,#0b0b2e,#21216b)" }}
						>
							<Card.Body className="p-4">
								<h3 className="fw-bold text-warning mb-2">
									Premium – Dominanz
								</h3>
								<p className="text-white">
									<AutoTranslate>
										Die komplette Markenstrategie – Design, Content & Wachstum.
									</AutoTranslate>
								</p>
								<h2 className="fw-bold mb-3 text-warning">1299 €</h2>
								<hr className="border-light" />
								<p>✔ Alles aus Professional</p>
								<p>✔ Corporate Website Design (bis 5 Seiten)</p>
								<p>✔ Brand Strategy Session (2 Stunden)</p>
								<p>✔ Social Media Kampagne + Betreuung Start</p>
								<p>✔ Google Business Profil Setup</p>
								<p>✔ Bewertungsmanagement & Reputation Start</p>
								<p>✔ SEO Monitoring 90 Tage</p>

								<Button
									variant="warning"
									className="mt-3 fw-bold px-4 text-dark"
									onClick={() => handleEmail("Premium Branding")}
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

					<p className="">
						<AutoTranslate>
							Flexibel kombinierbar – mehr Branding-Power für Ihre Marke
						</AutoTranslate>
					</p>
				</Col>
			</Row>

			<Row className="justify-content-center text-center g-3 mt-3">
				{[
					["✍️ Copywriting PRO (1000 Wörter)", "+149 €"],
					["📦 Visitenkarten + Briefpapier", "+199 €"],
					["📸 Fotoshooting / Bildbearbeitung", "ab 249 €"],
					["🎬 Intro-Reel / Logo Animation", "+149 €"],
					["🌐 Domain + Hosting (1 Jahr)", "+79 €"],
					["📊 SEO Monitoring", "+39 €/Monat"],
				].map(([label, price], i) => (
					<Col md={3} sm={6} key={i}>
						<Card className="border-0 shadow-sm p-3">
							<h5 className="fw-bold text-black">{label}</h5>
							<p className="text-black small">
								<b>{price}</b>
							</p>
						</Card>
					</Col>
				))}
			</Row>

			<Row className="justify-content-center text-center mt-5">
				<Col lg={8}>
					<p className="">
						<AutoTranslate>
							Alle Preise zzgl. MwSt. – fair, transparent & mit starker Wirkung
						</AutoTranslate>
					</p>
				</Col>
			</Row>
		</Container>
	);
}
