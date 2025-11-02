"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import AutoTranslateArticle from "@/components/AutoTranslateArticle";

export default function Media7() {
	const handleEmail = (plan) => {
		const subject = encodeURIComponent(`Anfrage zu Webdesign-Paket: ${plan}`);
		const body = encodeURIComponent(
			`Hallo Pixel Genie Team,\n\nich interessiere mich für das Webdesign-Paket "${plan}".\nBitte senden Sie mir weitere Informationen.\n\nMit freundlichen Grüßen,\n[Ihr Name]`
		);
		window.location.href = `mailto:pixelgenie.marketing@gmail.com?subject=${subject}&body=${body}`;
	};

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
			{/* HEADER */}
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
					<p className="lead" style={{ color: "var(--text-color)" }}>
						Individuelles Design, blitzschnelle Performance und
						Google-Optimierung – Websites, die nicht nur schön, sondern auch
						erfolgreich sind.
					</p>
				</Col>
			</Row>

			{/* PAKETE */}
			<Row className="justify-content-center text-center g-4">
				{/* KARTA 1 — STARTER WEBSITE */}
				<Col lg={4} md={6}>
					<div className="pricing-card basic-card h-100 shadow-lg rounded-4 border-0">
						<div className="card-inner p-4">
							<h3 className="card-title fw-bold mb-2 text-primary">
								Starter Website
							</h3>

							<div className="card-desc text-start small mb-3">
								<AutoTranslateArticle html={starterDesc} slug="starter-desc" />
							</div>

							<h2 className="card-price fw-bold mb-3 text-primary">ab 499 €</h2>

							<hr className="card-divider" />

							<ul className="card-features list-unstyled text-start">
								<li>✔ One-Page oder Mini-Website (bis 3 Seiten)</li>
								<li>✔ Modernes, responsives Design</li>
								<li>✔ Basis-SEO & Ladezeit-Optimierung</li>
								<li>✔ Kontaktformular & Google Maps</li>
								<li>✔ Impressum & Datenschutz inklusive</li>
							</ul>

							<div className="card-footer mt-4">
								<button
									className="btn btn-primary text-white fw-bold px-4 py-2"
									onClick={() => handleEmail("Starter Website (ab 499 €)")}
								>
									Jetzt anfragen
								</button>
							</div>
						</div>
					</div>
				</Col>

				{/* KARTA 2 — BUSINESS WEBSITE */}
				<Col lg={4} md={6}>
					<div className="pricing-card business-card h-100 shadow-lg rounded-4 border-0 position-relative">
						<span className="pricing-badge bg-warning text-dark fw-bold px-3 py-1">
							Bestseller
						</span>

						<div className="card-inner p-4">
							<h3 className="card-title fw-bold mb-2 text-success">
								Business Website
							</h3>

							<div className="card-desc text-start small mb-3">
								<AutoTranslateArticle
									html={businessDesc}
									slug="business-desc"
								/>
							</div>

							<h2 className="card-price fw-bold mb-3 text-success">ab 899 €</h2>

							<hr className="card-divider" />

							<ul className="card-features list-unstyled text-start">
								<li>✔ Bis zu 10 Seiten + CMS</li>
								<li>✔ SEO-Strategie & Keyword-Analyse</li>
								<li>✔ Blog- oder News-System</li>
								<li>✔ Core Web Vitals Optimierung</li>
								<li>✔ Analytics & Search Console</li>
								<li>✔ 3 Monate Support inklusive</li>
							</ul>

							<div className="card-footer mt-4">
								<button
									className="btn btn-success text-white fw-bold px-4 py-2"
									onClick={() => handleEmail("Business Website (ab 899 €)")}
								>
									Bestseller anfragen
								</button>
							</div>
						</div>
					</div>
				</Col>

				{/* KARTA 3 — PREMIUM WEBSITE */}
				<Col lg={4} md={6}>
					<div
						className="pricing-card premium-card h-100 shadow-lg rounded-4 border-0 text-light"
						style={{ background: "linear-gradient(135deg, #0b0b2e, #21216b)" }}
					>
						<div className="card-inner p-4">
							<h3 className="card-title fw-bold mb-2 text-warning">
								Premium Website
							</h3>

							<div className="card-desc text-start small mb-3">
								<AutoTranslateArticle html={premiumDesc} slug="premium-desc" />
							</div>

							<h2 className="card-price fw-bold mb-3 text-warning">
								ab 1499 €
							</h2>

							<hr className="card-divider border-light" />

							<ul className="card-features list-unstyled text-start text-white">
								<li>✔ Unbegrenzte Seiten & Funktionen</li>
								<li>✔ E-Commerce oder Buchungssystem</li>
								<li>✔ Mehrsprachigkeit & internationale SEO</li>
								<li>✔ UI/UX nach Markenrichtlinien</li>
								<li>✔ Priorisierter Support & Betreuung</li>
							</ul>

							<div className="card-footer mt-4">
								<button
									className="btn btn-warning text-dark fw-bold px-4 py-2"
									onClick={() => handleEmail("Premium Website (ab 1499 €)")}
								>
									Premium buchen
								</button>
							</div>
						</div>
					</div>
				</Col>
			</Row>

			{/* ZUSATZLEISTUNGEN */}
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
				<Col md={3} sm={6}>
					<div className="addon-card shadow-sm rounded-4 p-3 h-100">
						<h5 className="fw-bold text-dark">📰 Blog Integration</h5>
						<p className="small mb-0">
							SEO-Struktur & einfache Verwaltung
							<br />
							<b>+199 €</b>
						</p>
					</div>
				</Col>

				<Col md={3} sm={6}>
					<div className="addon-card shadow-sm rounded-4 p-3 h-100">
						<h5 className="fw-bold text-dark">🎨 Grafikdesign</h5>
						<p className="small mb-0">
							Icons, Illustrationen & Branding
							<br />
							<b>ab 79 €</b>
						</p>
					</div>
				</Col>

				<Col md={3} sm={6}>
					<div className="addon-card shadow-sm rounded-4 p-3 h-100">
						<h5 className="fw-bold text-dark">✍️ Texterstellung</h5>
						<p className="small mb-0">
							SEO-Texte für jede Seite
							<br />
							<b>+29 € / Seite</b>
						</p>
					</div>
				</Col>

				<Col md={3} sm={6}>
					<div className="addon-card shadow-sm rounded-4 p-3 h-100">
						<h5 className="fw-bold text-dark">📢 Banner & Social Media</h5>
						<p className="small mb-0">
							Promo-Grafiken & Ads
							<br />
							<b>ab 29 €</b>
						</p>
					</div>
				</Col>
			</Row>

			{/* FOOTER */}
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
