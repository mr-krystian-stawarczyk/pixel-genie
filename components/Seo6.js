"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import AutoTranslate from "@/components/AutoTranslate";

export default function Seo6() {
	const handleEmail = (plan) => {
		const subject = encodeURIComponent(`Anfrage zu SEO-Plan: ${plan}`);
		const body = encodeURIComponent(
			`Hallo Pixel Genie Team,\n\nich interessiere mich für euren ${plan}.\nBitte sendet mir weitere Informationen über Leistungen, Vertragsbedingungen und mögliche Starttermine.\n\nMeine Website:\n[Hier einfügen]\n\nMit freundlichen Grüßen,\n[Ihr Name]`
		);
		window.location.href = `mailto:pixelgenie.marketing@gmail.com?subject=${subject}&body=${body}`;
	};

	return (
		<Container id="seoprices" className="py-5 transition-colors duration-500">
			{/* HEADER */}
			<Row className="justify-content-center text-center mb-5">
				<Col lg={8}>
					<Image
						src="/assets/webentwicklung-webagentur-nettetal-price.png"
						width={280}
						height={280}
						alt="SEO Preise Pixel Genie Nettetal"
						className="my-3"
						priority
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

			{/* SEO PLANS */}
			<Row className="justify-content-center text-center g-4">
				{/* KARTA 1 — BASIC PLAN */}
				<Col lg={4} md={6}>
					<div className="pricing-card basic-card h-100 shadow-lg rounded-4 border-0">
						<div className="card-inner p-4">
							<h3 className="card-title fw-bold mb-2 text-primary">
								BASIC PLAN
							</h3>
							<p className="card-desc mb-3">
								<AutoTranslate>
									Ihr Einstieg in die Welt der SEO-Optimierung – ideal für
									kleine Unternehmen, die lokal gefunden werden wollen.
								</AutoTranslate>
							</p>
							<h2 className="card-price fw-bold mb-3 text-primary">
								99 € / Monat
							</h2>

							<hr className="card-divider" />

							<ul className="card-features list-unstyled text-start">
								<li>✔ Technisches Website-Audit & Fehleranalyse</li>
								<li>✔ Keyword-Recherche für lokale Zielgruppen</li>
								<li>✔ OnPage-Optimierung (Meta, Titel, Struktur)</li>
								<li>✔ Content-Optimierung & SEO-Texte</li>
								<li>✔ Monatlicher Ranking-Report</li>
								<li>✔ Google Search Console Einrichtung</li>
							</ul>

							<div className="card-footer mt-4">
								<button
									className="btn btn-primary text-white fw-bold px-4 py-2"
									onClick={() => handleEmail("Basic Plan (99 € / Monat)")}
								>
									Jetzt starten
								</button>
							</div>
						</div>
					</div>
				</Col>

				{/* KARTA 2 — BUSINESS PLAN */}
				<Col lg={4} md={6}>
					<div className="pricing-card business-card h-100 shadow-lg rounded-4 border-0 position-relative">
						<span className="pricing-badge bg-warning text-dark fw-bold px-3 py-1">
							Bestseller
						</span>

						<div className="card-inner p-4">
							<h3 className="card-title fw-bold mb-2 text-success">
								BUSINESS PLAN
							</h3>
							<p className="card-desc mb-3">
								<AutoTranslate>
									Der Bestseller für wachsende Marken – inklusive technischer
									Optimierung, Content-Marketing und Performance-Boost.
								</AutoTranslate>
							</p>
							<h2 className="card-price fw-bold mb-3 text-success">
								149 € / Monat
							</h2>

							<hr className="card-divider" />

							<ul className="card-features list-unstyled text-start">
								<li>✔ Detailliertes SEO-Audit & Ladezeiten-Analyse</li>
								<li>✔ Umfassende Keyword-Strategie (lokal & regional)</li>
								<li>✔ Optimierung für Core Web Vitals</li>
								<li>✔ Technische SEO (Schema, strukturierte Daten)</li>
								<li>✔ Backlink-Aufbau & Linkmonitoring</li>
								<li>✔ Monatlicher Performance-Report</li>
								<li>✔ 1 Stunde SEO-Beratung im Monat inklusive</li>
							</ul>

							<div className="card-footer mt-4">
								<button
									className="btn btn-success text-white fw-bold px-4 py-2"
									onClick={() => handleEmail("Business Plan (149 € / Monat)")}
								>
									Bestseller sichern
								</button>
							</div>
						</div>
					</div>
				</Col>

				{/* KARTA 3 — PREMIUM PLAN */}
				<Col lg={4} md={6}>
					<div
						className="pricing-card premium-card h-100 shadow-lg rounded-4 border-0 text-light"
						style={{ background: "linear-gradient(135deg, #0b0b2e, #21216b)" }}
					>
						<div className="card-inner p-4">
							<h3 className="card-title fw-bold mb-2 text-warning">
								PREMIUM PLAN
							</h3>
							<p className="card-desc text-white mb-3">
								<AutoTranslate>
									Das Rundum-sorglos-Paket für Unternehmen, die das Maximum aus
									ihrer Online-Präsenz herausholen wollen – inkl. SEO, Content,
									UX & Ads.
								</AutoTranslate>
							</p>
							<h2 className="card-price fw-bold mb-3 text-warning">
								299 € / Monat
							</h2>

							<hr className="card-divider border-light" />

							<ul className="card-features list-unstyled text-start text-white">
								<li>✔ Individuelle SEO-Strategie & Wettbewerbsanalyse</li>
								<li>✔ Vollständige technische Optimierung (Next.js/React)</li>
								<li>✔ Hochwertige Backlinks & Outreach-Kampagnen</li>
								<li>✔ Conversion-Tracking & Heatmap-Analysen</li>
								<li>✔ Content-Erstellung inkl. Blog & Landingpages</li>
								<li>✔ Monatliche Strategie-Calls & Reporting</li>
								<li>✔ Priorisierter Support & persönliche Betreuung</li>
							</ul>

							<div className="card-footer mt-4">
								<button
									className="btn btn-warning text-dark fw-bold px-4 py-2"
									onClick={() => handleEmail("Premium Plan (299 € / Monat)")}
								>
									Premium buchen
								</button>
							</div>
						</div>
					</div>
				</Col>
			</Row>

			{/* FOOTER */}
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
