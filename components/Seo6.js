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
								Ihr Einstieg in die Welt der SEO-Optimierung – ideal für kleine
								Unternehmen, Selbstständige und lokale Dienstleister, die in
								ihrer Region sichtbar werden wollen.
							</p>
							<h2 className="card-price fw-bold mb-3 text-primary">
								99 € / Monat <br></br>
								<span className="fs-6 text-muted">(Endpreis §19 UStG)</span>
							</h2>

							<hr className="card-divider" />

							<ul className="card-features list-unstyled text-start">
								<li>✔ Technisches Website-Audit & Fehleranalyse</li>
								<li>✔ Keyword-Recherche für lokale Zielgruppen</li>
								<li>✔ OnPage-Optimierung (Meta, Titel, Struktur)</li>
								<li>✔ Content-Optimierung & SEO-Texte</li>
								<li>✔ Google Search Console & Index-Überwachung</li>
								<li>✔ Monatlicher Ranking- & Traffic-Report</li>
								<li>✔ Basis-Performance-Tuning (Core Web Vitals 85+)</li>
								<li>✔ Einrichtung Google My Business (lokales SEO)</li>
								<li>✔ Konkurrenzvergleich & Handlungsempfehlungen</li>
								<li>
									🎉 <strong>–10 % Rabatt</strong> für Kunden aus{" "}
									<strong>NRW</strong>
								</li>
							</ul>
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
								Der Bestseller für wachsende Marken – nachhaltiges SEO mit Fokus
								auf Technik, Content-Marketing und messbare
								Performance-Steigerung.
							</p>
							<h2 className="card-price fw-bold mb-3 text-success">
								149 € / Monat <br></br>
								<span className="fs-6 text-muted">(Endpreis §19 UStG)</span>
							</h2>

							<hr className="card-divider" />

							<ul className="card-features list-unstyled text-start">
								<li>✔ Umfassendes SEO-Audit & Ladezeitenanalyse</li>
								<li>✔ Detaillierte Keyword-Strategie (lokal + regional)</li>
								<li>✔ Optimierung für Core Web Vitals 90+</li>
								<li>✔ Technische SEO (Schema, strukturierte Daten)</li>
								<li>✔ Content-Strategie inkl. Blog & Landingpages</li>
								<li>✔ Backlink-Aufbau & Link-Monitoring</li>
								<li>✔ Monatlicher Performance- & Sichtbarkeitsreport</li>
								<li>✔ Konkurrenzanalyse & Marktbeobachtung</li>
								<li>✔ Conversion-Optimierung (UX / Layout / Copy)</li>
								<li>✔ 1 Stunde SEO-Beratung monatlich inklusive</li>
								<li>
									🎉 <strong>–10 % Rabatt</strong> für Firmen aus{" "}
									<strong>NRW</strong>
								</li>
							</ul>
						</div>
					</div>
				</Col>

				{/* KARTA 3 — PREMIUM PLAN */}
				<Col lg={4} md={6}>
					<div
						className="pricing-card premium-card h-100 shadow-lg rounded-4 border-0 text-light"
						style={{ background: "linear-gradient(135deg,#0b0b2e,#21216b)" }}
					>
						<div className="card-inner p-4">
							<h3 className="card-title fw-bold mb-2 text-warning">
								PREMIUM PLAN
							</h3>
							<p className="card-desc text-white mb-3">
								Das Rundum-sorglos-Paket für ambitionierte Unternehmen –
								High-End SEO, Content-Marketing, UX-Optimierung & Performance
								auf Enterprise-Niveau.
							</p>
							<h2 className="card-price fw-bold mb-3 text-warning">
								299 € / Monat <br></br>
								<span className="fs-6 text-muted">(Endpreis §19 UStG)</span>
							</h2>

							<hr className="card-divider border-light" />

							<ul className="card-features list-unstyled text-start text-white">
								<li>✔ Individuelle SEO-Strategie + Wettbewerbsanalyse</li>
								<li>✔ Vollständige technische Optimierung (Next.js / React)</li>
								<li>✔ Hochwertige Backlinks + Outreach-Kampagnen</li>
								<li>✔ Conversion-Tracking + Heatmap-Analysen</li>
								<li>✔ Content-Erstellung (Blog, Landingpages, Snippets)</li>
								<li>✔ Local + International SEO (DE, EN, NL)</li>
								<li>✔ Integration von Google Ads / Meta Ads Tracking</li>
								<li>✔ Monatliche Strategie-Calls + KPI-Reporting</li>
								<li>✔ UX-Optimierung für bessere Conversion-Rates</li>
								<li>✔ Priorisierter Support & persönliche Betreuung</li>
								<li>
									🎉 <strong>–10 % Rabatt</strong> für Unternehmen aus{" "}
									<strong>NRW</strong>
								</li>
							</ul>
						</div>
					</div>
				</Col>
			</Row>

			{/* Rechtlicher Hinweis */}

			{/* FOOTER */}
			<Row className="justify-content-center text-center mt-5">
				<Col lg={8}>
					<p className="">
						<p className="text-center  mt-3" style={{ fontSize: "0.9rem" }}>
							Alle Preise sind Endpreise gemäß §19 UStG
							(Kleinunternehmerregelung, keine MwSt-Ausweisung).
						</p>

						{/* Technischer Hinweis */}
						<p className="text-center " style={{ fontSize: "0.85rem" }}>
							Alle SEO-Maßnahmen werden technisch mit React &amp; Next.js
							abgestimmt – schnelle Ladezeiten, stabile Rankings &amp; messbare
							Ergebnisse für Ihr Unternehmen in NRW.
						</p>
					</p>
				</Col>
			</Row>
		</Container>
	);
}
