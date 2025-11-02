"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import AutoTranslate from "@/components/AutoTranslate";

export default function Brand6() {
	const handleEmail = (plan) => {
		const subject = encodeURIComponent(`Branding Anfrage: ${plan}`);
		const body = encodeURIComponent(
			`Hallo Pixel Genie Team,%0A%0Aich interessiere mich für ${plan}.`
		);
		window.location.href = `mailto:pixelgenie.marketing@gmail.com?subject=${subject}&body=${body}`;
	};

	return (
		<Container id="branding-nettetal-preis" className="my-5 py-5">
			{/* HEADER */}
			<Row className="justify-content-center text-center mb-5">
				<Col lg={8}>
					<Image
						src="/assets/webentwicklung-webagentur-nettetal-price.png"
						width={250}
						height={250}
						alt="Branding Preise Pixel Genie Nettetal"
						className="my-3"
					/>
					<h2 className="fw-bold display-6">
						<AutoTranslate>
							Branding-Pakete – starke Marken entstehen durch Strategie & Design
						</AutoTranslate>
					</h2>
					<p className="lead" style={{ color: "var(--text-color)" }}>
						<AutoTranslate>
							Sichtbar werden. Vertrauen gewinnen. Konkurrenz überholen.
						</AutoTranslate>
					</p>
				</Col>
			</Row>

			{/* BRANDING PAKETE */}
			<Row className="justify-content-center text-center g-4">
				{/* KARTA 1 — STARTER BRANDING */}
				<Col lg={4} md={6}>
					<div className="pricing-card basic-card h-100 shadow-lg rounded-4 border-0">
						<div className="card-inner p-4">
							<h3 className="card-title fw-bold mb-2 text-primary">
								Starter Branding
							</h3>
							<p className="card-desc mb-3">
								<AutoTranslate>
									Perfekt für Start-ups & lokale Unternehmen – schnell, modern &
									professionell.
								</AutoTranslate>
							</p>
							<h2 className="card-price fw-bold mb-3 text-primary">249 €</h2>
							<hr className="card-divider" />
							<ul
								className="card-features list-unstyled text-start"
								style={{ color: "var(--text-color)" }}
							>
								<li>✔ Logo Design – 3 Designvorschläge</li>
								<li>✔ Farb- & Typografie-Konzept</li>
								<li>✔ Mini Brand Guidelines (1 Seite PDF)</li>
								<li>✔ Social Profile Kit (Facebook/Instagram)</li>
								<li>✔ Favicons + Dateiübergabe inkl. Nutzungsrechte</li>
							</ul>
							<div className="card-footer mt-4">
								<button
									className="btn btn-primary text-white fw-bold px-4 py-2"
									onClick={() => handleEmail("Starter Branding")}
								>
									Jetzt anfragen
								</button>
							</div>
						</div>
					</div>
				</Col>

				{/* KARTA 2 — PROFESSIONAL BRANDING */}
				<Col lg={4} md={6}>
					<div className="pricing-card business-card h-100 shadow-lg rounded-4 border-0  position-relative">
						<span className="pricing-badge bg-warning text-dark fw-bold px-3 py-1">
							Bestseller
						</span>
						<div className="card-inner p-4">
							<h3 className="card-title fw-bold mb-2 text-success">
								Professional Branding
							</h3>
							<p className="card-desc mb-3 ">
								<AutoTranslate>
									Sichtbarkeit + Performance – die perfekte Mischung.
								</AutoTranslate>
							</p>
							<h2 className="card-price fw-bold mb-3 text-success">599 €</h2>
							<hr className="card-divider" />
							<ul
								className="card-features list-unstyled text-start"
								style={{ color: "var(--text-color)" }}
							>
								<li>✔ Alles aus Starter</li>
								<li>✔ Brand Guide (mehrseitig)</li>
								<li>✔ Social Media Templates (6 Stück)</li>
								<li>✔ SEO Keyword Setup + Analyse</li>
								<li>✔ Landingpage UX + Designvorlage</li>
								<li>✔ 3 Headline Copywriting Vorschläge</li>
							</ul>
							<div className="card-footer mt-4">
								<button
									className="btn btn-success text-white fw-bold px-4 py-2"
									onClick={() => handleEmail("Professional Branding")}
								>
									Bestseller anfragen
								</button>
							</div>
						</div>
					</div>
				</Col>

				{/* KARTA 3 — PREMIUM DOMINANZ */}
				<Col lg={4} md={6}>
					<div
						className="pricing-card premium-card h-100 shadow-lg rounded-4 border-0 text-light"
						style={{ background: "linear-gradient(135deg, #0b0b2e, #21216b)" }}
					>
						<div className="card-inner p-4">
							<h3 className="card-title fw-bold mb-2 text-warning">
								Premium – Dominanz
							</h3>
							<p className="card-desc text-white mb-3">
								<AutoTranslate>
									Die komplette Markenstrategie – Design, Content & Wachstum.
								</AutoTranslate>
							</p>
							<h2 className="card-price fw-bold mb-3 text-warning">1299 €</h2>
							<hr className="card-divider border-light" />
							<ul className="card-features list-unstyled text-start text-white">
								<li>✔ Alles aus Professional</li>
								<li>✔ Corporate Website Design (bis 5 Seiten)</li>
								<li>✔ Brand Strategy Session (2 Stunden)</li>
								<li>✔ Social Media Kampagne + Betreuung Start</li>
								<li>✔ Google Business Profil Setup</li>
								<li>✔ Bewertungsmanagement & Reputation Start</li>
								<li>✔ SEO Monitoring 90 Tage</li>
							</ul>
							<div className="card-footer mt-4">
								<button
									className="btn btn-warning text-dark fw-bold px-4 py-2"
									onClick={() => handleEmail("Premium – Dominanz")}
								>
									Premium buchen
								</button>
							</div>
						</div>
					</div>
				</Col>
			</Row>

			{/* ADD-ONS */}
			<Row className="justify-content-center text-center mt-5">
				<Col lg={8}>
					<h3 className="fw-bold mb-3 mt-5">
						<AutoTranslate>✨ Erweiterungen & Add-ons</AutoTranslate>
					</h3>
					<p style={{ color: "var(--text-color)" }}>
						<AutoTranslate>
							Flexibel kombinierbar – mehr Branding-Power für Ihre Marke
						</AutoTranslate>
					</p>
				</Col>
			</Row>

			<Row className="justify-content-center text-center g-3 mt-3">
				<Col md={3} sm={6}>
					<div className="addon-card shadow-sm rounded-4 p-3 h-100 bg-white">
						<h5 className="fw-bold text-dark">
							✍️ Copywriting PRO <br></br>(1000 Wörter)
						</h5>
						<p className="small mb-0">
							<b className="text-black">+149 €</b>
						</p>
					</div>
				</Col>

				<Col md={3} sm={6}>
					<div className="addon-card shadow-sm rounded-4 p-3 h-100 bg-white">
						<h5 className="fw-bold text-dark">
							📦 Visitenkarten + Briefpapier
						</h5>
						<p className="small mb-0">
							<b className="text-black">+199 €</b>
						</p>
					</div>
				</Col>

				<Col md={3} sm={6}>
					<div className="addon-card shadow-sm rounded-4 p-3 h-100 bg-white">
						<h5 className="fw-bold text-dark">
							📸 Fotoshooting / <br></br> Bildbearbeitung
						</h5>
						<p className="small mb-0">
							<b className="text-black">ab 249 €</b>
						</p>
					</div>
				</Col>

				<Col md={3} sm={6}>
					<div className="addon-card shadow-sm rounded-4 p-3 h-100 bg-white">
						<h5 className="fw-bold text-dark">
							🎬 Intro-Reel /<br></br> Logo Animation
						</h5>
						<p className="small mb-0">
							<b className="text-black">+149 €</b>
						</p>
					</div>
				</Col>

				<Col md={3} sm={6}>
					<div className="addon-card shadow-sm rounded-4 p-3 h-100 bg-white">
						<h5 className="fw-bold text-dark">
							🌐 Domain +<br></br> Hosting (1 Jahr)
						</h5>
						<p className="small mb-0">
							<b className="text-black">+79 €</b>
						</p>
					</div>
				</Col>

				<Col md={3} sm={6}>
					<div className="addon-card shadow-sm rounded-4 p-3 h-100 bg-white">
						<h5 className="fw-bold text-dark">
							📊 SEO <br></br>Monitoring
						</h5>
						<p className="small mb-0">
							<b className="text-black">+39 €/Monat</b>
						</p>
					</div>
				</Col>
			</Row>

			{/* FOOTER */}
			<Row className="justify-content-center text-center mt-5">
				<Col lg={8}>
					<p className="text-body">
						<AutoTranslate>
							Alle Preise zzgl. MwSt. – fair, transparent & mit starker Wirkung.
						</AutoTranslate>
					</p>
				</Col>
			</Row>
		</Container>
	);
}
