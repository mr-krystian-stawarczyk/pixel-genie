"use client";
import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import AutoTranslate from "@/components/AutoTranslate";

export default function Social6() {
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
		const subject = encodeURIComponent(`Social Media Anfrage: ${plan}`);
		const body = encodeURIComponent(
			`Hallo Pixel Genie Team,%0A%0Aich interessiere mich für ${plan}.`
		);
		window.location.href = `mailto:pixelgenie.marketing@gmail.com?subject=${subject}&body=${body}`;
	};

	return (
		<Container id="social-media-preis" className="my-5 py-5 text-dark">
			<Row className="justify-content-center text-center mb-5">
				<Col lg={8}>
					<Image
						src="/assets/webentwicklung-webagentur-nettetal-price.png"
						width={250}
						height={250}
						alt="Social Media Preise Pixel Genie Nettetal"
						className="my-3"
						priority
					/>
					<h2 className="fw-bold display-6">
						<AutoTranslate>
							Social Media Betreuung – täglich sichtbar & überzeugend
						</AutoTranslate>
					</h2>
					<p className="lead text-muted">
						<AutoTranslate>
							Mehr Reichweite, Leads & echte Kunden – wir kümmern uns um Ihren
							Auftritt.
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
								<h3 className="fw-bold text-primary mb-2">Starter Social</h3>
								<p>
									<AutoTranslate>
										Ideal für einen professionellen Start in Social Media.
									</AutoTranslate>
								</p>
								<h2 className="fw-bold mb-3 text-primary">99 € / Monat</h2>
								<hr />
								<p>✔ Management von 1 Profil</p>
								<p>✔ 2 Beiträge pro Woche</p>
								<p>✔ Basis Community Management</p>
								<p>✔ SEO Captions & Hashtags</p>
								<p>✔ 30 Tage Performance Report</p>
								<p>✔ Content Ideenliste (monatlich)</p>

								<Button
									variant="primary"
									className="mt-3 px-4"
									onClick={() => handleEmail("Starter Social")}
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
								className="bg-warning text-dark px-3 py-1 position-absolute fw-bold"
								style={{ top: 10, right: 10, borderRadius: "8px" }}
							>
								<AutoTranslate>Bestseller</AutoTranslate>
							</div>

							<Card.Body className="p-4">
								<h3 className="fw-bold text-success mb-2">
									Professional Social
								</h3>
								<p className="text-muted">
									<AutoTranslate>
										Mehr Wachstum & Interaktionen – messbare Ergebnisse.
									</AutoTranslate>
								</p>
								<h2 className="fw-bold mb-3 text-success">199 € / Monat</h2>
								<hr />
								<p className="text-black">✔ Management von 2 Profilen</p>
								<p className="text-black">✔ 4 Beiträge pro Woche</p>
								<p className="text-black">✔ Proaktives Community Management</p>
								<p className="text-black">✔ Reels / Shorts: 2 pro Monat</p>
								<p className="text-black">
									✔ Monatliches Reporting + Insights
								</p>
								<p className="text-black">✔ Story-Content inklusive</p>
								<p className="text-black">
									✔ Content Strategie + Zielgruppenanalyse
								</p>

								<Button
									variant="success"
									className="mt-3 px-4 text-white"
									onClick={() => handleEmail("Professional Social")}
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
								<h3 className="fw-bold text-warning mb-2">Premium Social</h3>
								<p className="text-white">
									<AutoTranslate>
										Dominanz im Social Media – Content, Wachstum & Ads.
									</AutoTranslate>
								</p>
								<h2 className="fw-bold mb-3 text-warning">399 € / Monat</h2>
								<hr className="border-light" />
								<p className="text-white">✔ Management von 3 Profilen</p>
								<p className="text-white">✔ Tägliche Posts + Reels / Shorts</p>
								<p className="text-white">✔ Community & Message Support</p>
								<p className="text-white">
									✔ Kampagnenmanagement + Optimierung
								</p>
								<p className="text-white">
									✔ Wettbewerbsanalyse + Growth-Strategie
								</p>
								<p className="text-white">✔ Wöchentliche Reports & Insights</p>
								<p className="text-white">
									✔ Premium Grafikdesign + A/B Tests
								</p>

								<Button
									variant="warning"
									className="mt-3 fw-bold px-4 text-dark"
									onClick={() => handleEmail("Premium Social")}
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
						<AutoTranslate>✨ Add-ons für mehr Reichweite</AutoTranslate>
					</h3>

					<p className="">
						<AutoTranslate>
							Flexibel erweiterbar – passend zu jedem Social Paket
						</AutoTranslate>
					</p>
				</Col>
			</Row>

			<Row className="justify-content-center text-center g-3 mt-3">
				{[
					["🎯 Ads Budget Betreuung", "+79 €"],
					["🎬 5 Social Video Reels / Monat", "+199 €"],
					["📝 Story Copywriting (8 Stück)", "+79 €"],
					["💬 Community Full Support", "+99 €"],
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
							Alle Preise zzgl. MwSt. – Wachstum, das sich rechnet ✅
						</AutoTranslate>
					</p>
				</Col>
			</Row>
		</Container>
	);
}
