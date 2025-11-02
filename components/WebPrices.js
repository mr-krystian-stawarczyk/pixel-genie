"use client";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import AutoTranslate from "@/components/AutoTranslate";
import dynamic from "next/dynamic";
const MotionFadeIn = dynamic(() => import("@/components/MotionFadeIn"), {
	ssr: false,
});
export default function WebPrices() {
	const handleEmail = (plan) => {
		const subject = encodeURIComponent(`Website Anfrage: ${plan}`);
		const body = encodeURIComponent(
			`Hallo Pixel Genie Team,\n\nich interessiere mich für ${plan}.`
		);
		window.location.href = `mailto:pixelgenie.marketing@gmail.com?subject=${subject}&body=${body}`;
	};

	const plans = [
		{
			title: "BASIC WEBSITE",
			price: "ab 499 €",
			color: "primary",
			desc: "Ideal für den schnellen Start – Ihre erste professionelle Website zum besten Preis.",
			features: [
				"One-Page oder Landingpage",
				"Responsive Design (Mobile & Desktop)",
				"Basis SEO & schnelle Ladezeiten",
				"Kontaktformular & Google Maps",
				"Impressum & Datenschutz inklusive",
			],
			button: "Jetzt anfragen",
		},
		{
			title: "BUSINESS WEBSITE",
			price: "ab 899 €",
			color: "success",
			desc: "Unser Bestseller – ideal für Unternehmen, die Leistung und Design verbinden wollen.",
			features: [
				"Mehrseitige Website (bis 5 Seiten)",
				"Individuelles Design mit CMS (Sanity/Headless)",
				"SEO & Performance Optimierung (Lighthouse 90+)",
				"Analytics & Search Console Integration",
				"1 Jahr Hosting & Wartung",
			],
			button: "Bestseller anfragen",
			badge: "Bestseller",
		},
		{
			title: "PREMIUM WEBSITE",
			price: "ab 1499 €",
			color: "warning",
			desc: "Für Marken, die Maßstäbe setzen wollen – High-End Performance, UX und Strategie.",
			features: [
				"Individuelles UX/UI Konzept",
				"Unbegrenzte Seiten & CMS",
				"Technische SEO + Core Web Vitals 95+",
				"Blog + Content-System inklusive",
				"Conversion-Tracking & A/B Tests",
			],
			button: "Premium buchen",
		},
	];

	const addons = [
		["📰 Blog Integration", "+199 €"],
		["🛒 Online Shop", "+499 €"],
		["🚀 SEO Boost", "+149 €"],
		["🔧 Wartungspaket", "+29 €/Monat"],
	];

	return (
		<Container id="web-design-pricing" className="my-5 py-5 text-dark">
			{/* Header */}
			<Row className="justify-content-center text-center mb-5">
				<Col lg={8}>
					<Image
						src="/assets/webentwicklung-webagentur-nettetal-price.png"
						width={250}
						height={250}
						alt="Webdesign Preise Pixel Genie Nettetal"
						className="my-3"
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

			{/* Plans */}
			<Row className="justify-content-center text-center g-4">
				{/* KARTA 1 — BASIC WEBSITE */}
				<Col lg={4} md={6}>
					<div className="pricing-card basic-card h-100 shadow-lg rounded-4 border-0">
						<div className="card-inner p-4">
							<h3 className="card-title fw-bold mb-2 text-primary">
								BASIC WEBSITE
							</h3>
							<p className="card-desc  mb-3">
								Ideal für den schnellen Start – Ihre erste professionelle
								Website zum besten Preis.
							</p>
							<h2 className="card-price fw-bold mb-3 text-primary">ab 499 €</h2>

							<hr className="card-divider" />

							<ul className="card-features list-unstyled text-start">
								<li style={{ color: "var(--text-color)" }}>
									✔ One-Page oder Landingpage
								</li>
								<li style={{ color: "var(--text-color)" }}>
									✔ Responsive Design (Mobile & Desktop)
								</li>
								<li style={{ color: "var(--text-color)" }}>
									✔ Basis SEO & schnelle Ladezeiten
								</li>
								<li style={{ color: "var(--text-color)" }}>
									✔ Kontaktformular & Google Maps
								</li>
								<li style={{ color: "var(--text-color)" }}>
									✔ Impressum & Datenschutz inklusive
								</li>
							</ul>

							<div className="card-footer mt-4">
								<button className="btn btn-primary text-white fw-bold px-4 py-2">
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
								BUSINESS WEBSITE
							</h3>
							<p className="card-desc mb-3">
								Unser Bestseller – ideal für Unternehmen, die Leistung und
								Design verbinden wollen.
							</p>
							<h2 className="card-price fw-bold mb-3 text-success">ab 899 €</h2>

							<hr className="card-divider" />

							<ul className="card-features list-unstyled text-start">
								<li style={{ color: "var(--text-color)" }}>
									✔ Mehrseitige Website (bis 5 Seiten)
								</li>
								<li style={{ color: "var(--text-color)" }}>
									✔ Individuelles Design mit CMS (Sanity/Headless)
								</li>
								<li style={{ color: "var(--text-color)" }}>
									✔ SEO & Performance Optimierung (Lighthouse 90+)
								</li>
								<li style={{ color: "var(--text-color)" }}>
									✔ Analytics & Search Console Integration
								</li>
								<li style={{ color: "var(--text-color)" }}>
									✔ 1 Jahr Hosting & Wartung
								</li>
							</ul>

							<div className="card-footer mt-4">
								<button className="btn btn-success text-white fw-bold px-4 py-2">
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
								PREMIUM WEBSITE
							</h3>
							<p className="card-desc text-white mb-3">
								Für Marken, die Maßstäbe setzen wollen – High-End Performance,
								UX und Strategie.
							</p>
							<h2 className="card-price fw-bold mb-3 text-warning">
								ab 1499 €
							</h2>

							<hr className="card-divider border-light" />

							<ul className="card-features list-unstyled text-start text-white">
								<li>✔ Individuelles UX/UI Konzept</li>
								<li>✔ Unbegrenzte Seiten & CMS</li>
								<li>✔ Technische SEO + Core Web Vitals 95+</li>
								<li>✔ Blog + Content-System inklusive</li>
								<li>✔ Conversion-Tracking & A/B Tests</li>
							</ul>

							<div className="card-footer mt-4">
								<button className="btn btn-warning text-dark fw-bold px-4 py-2">
									Premium buchen
								</button>
							</div>
						</div>
					</div>
				</Col>
			</Row>

			{/* Add-ons */}
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
				{addons.map(([label, price], i) => (
					<Col md={3} sm={6} key={i}>
						<Card className="border-0 shadow-sm p-3">
							<h5 className="fw-bold text-black">{label}</h5>
							<p className=" small">
								<b className="text-black">{price}</b>
							</p>
						</Card>
					</Col>
				))}
			</Row>

			{/* Footer */}
			<Row className="justify-content-center text-center mt-5">
				<Col lg={8}>
					<p className="">
						<AutoTranslate>
							Alle Preise zzgl. MwSt. – transparent, fair & top Performance
						</AutoTranslate>
					</p>
				</Col>
			</Row>
		</Container>
	);
}
