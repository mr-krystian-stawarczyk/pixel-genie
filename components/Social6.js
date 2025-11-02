"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import AutoTranslate from "@/components/AutoTranslate";

export default function Social6() {
	const handleEmail = (plan) => {
		const subject = encodeURIComponent(`Social Media Anfrage: ${plan}`);
		const body = encodeURIComponent(
			`Hallo Pixel Genie Team,\n\nich interessiere mich für ${plan}.`
		);
		window.location.href = `mailto:pixelgenie.marketing@gmail.com?subject=${subject}&body=${body}`;
	};

	return (
		<Container id="social-media-preis" className="my-5 py-5">
			{/* HEADER */}
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
					<p className="lead" style={{ color: "var(--text-color)" }}>
						<AutoTranslate>
							Mehr Reichweite, Leads & echte Kunden – wir kümmern uns um Ihren
							Auftritt.
						</AutoTranslate>
					</p>
				</Col>
			</Row>

			{/* SOCIAL MEDIA PAKETE */}
			<Row className="justify-content-center text-center g-4">
				{/* STARTER SOCIAL */}
				<Col lg={4} md={6}>
					<div className="pricing-card basic-card h-100 shadow-lg rounded-4 border-0 ">
						<div className="card-inner p-4">
							<h3 className="card-title fw-bold mb-2 text-primary">
								<AutoTranslate>Starter Social</AutoTranslate>
							</h3>
							<p className="card-desc mb-3 ">
								<AutoTranslate>
									Ideal für einen professionellen Start in Social Media.
								</AutoTranslate>
							</p>
							<h2 className="card-price fw-bold mb-3 text-primary">
								99 € / Monat
							</h2>
							<hr className="card-divider" />
							<ul
								className="card-features list-unstyled text-start"
								style={{ color: "var(--text-color)" }}
							>
								<li>✔ Management von 1 Profil</li>
								<li>✔ 2 Beiträge pro Woche</li>
								<li>✔ Basis Community Management</li>
								<li>✔ SEO Captions & Hashtags</li>
								<li>✔ 30 Tage Performance Report</li>
								<li>✔ Content Ideenliste (monatlich)</li>
							</ul>
							<div className="card-footer mt-4">
								<button
									className="btn btn-primary text-white fw-bold px-4 py-2"
									onClick={() => handleEmail("Starter Social")}
								>
									Jetzt anfragen
								</button>
							</div>
						</div>
					</div>
				</Col>

				{/* PROFESSIONAL SOCIAL */}
				<Col lg={4} md={6}>
					<div className="pricing-card business-card h-100 shadow-lg rounded-4 border-0  position-relative">
						<span className="pricing-badge bg-warning text-dark fw-bold px-3 py-1">
							Bestseller
						</span>
						<div className="card-inner p-4">
							<h3 className="card-title fw-bold mb-2 text-success">
								<AutoTranslate>Professional Social</AutoTranslate>
							</h3>
							<p className="card-desc mb-3 ">
								<AutoTranslate>
									Mehr Wachstum & Interaktionen – messbare Ergebnisse.
								</AutoTranslate>
							</p>
							<h2 className="card-price fw-bold mb-3 text-success">
								199 € / Monat
							</h2>
							<hr className="card-divider" />
							<ul
								className="card-features list-unstyled text-start"
								style={{ color: "var(--text-color)" }}
							>
								<li>✔ Management von 2 Profilen</li>
								<li>✔ 4 Beiträge pro Woche</li>
								<li>✔ Proaktives Community Management</li>
								<li>✔ Reels / Shorts: 2 pro Monat</li>
								<li>✔ Monatliches Reporting + Insights</li>
								<li>✔ Story-Content inklusive</li>
								<li>✔ Content Strategie + Zielgruppenanalyse</li>
							</ul>
							<div className="card-footer mt-4">
								<button
									className="btn btn-success text-white fw-bold px-4 py-2"
									onClick={() => handleEmail("Professional Social")}
								>
									Bestseller anfragen
								</button>
							</div>
						</div>
					</div>
				</Col>

				{/* PREMIUM SOCIAL */}
				<Col lg={4} md={6}>
					<div
						className="pricing-card premium-card h-100 shadow-lg rounded-4 border-0 text-light"
						style={{ background: "linear-gradient(135deg, #0b0b2e, #21216b)" }}
					>
						<div className="card-inner p-4">
							<h3 className="card-title fw-bold mb-2 text-warning">
								<AutoTranslate>Premium Social</AutoTranslate>
							</h3>
							<p className="card-desc text-white mb-3">
								<AutoTranslate>
									Dominanz im Social Media – Content, Wachstum & Ads.
								</AutoTranslate>
							</p>
							<h2 className="card-price fw-bold mb-3 text-warning">
								399 € / Monat
							</h2>
							<hr className="card-divider border-light" />
							<ul className="card-features list-unstyled text-start text-white">
								<li>✔ Management von 3 Profilen</li>
								<li>✔ Tägliche Posts + Reels / Shorts</li>
								<li>✔ Community & Message Support</li>
								<li>✔ Kampagnenmanagement + Optimierung</li>
								<li>✔ Wettbewerbsanalyse + Growth-Strategie</li>
								<li>✔ Wöchentliche Reports & Insights</li>
								<li>✔ Premium Grafikdesign + A/B Tests</li>
							</ul>
							<div className="card-footer mt-4">
								<button
									className="btn btn-warning text-dark fw-bold px-4 py-2"
									onClick={() => handleEmail("Premium Social")}
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
						<AutoTranslate>✨ Add-ons für mehr Reichweite</AutoTranslate>
					</h3>
					<p style={{ color: "var(--text-color)" }}>
						<AutoTranslate>
							Flexibel erweiterbar – passend zu jedem Social Paket
						</AutoTranslate>
					</p>
				</Col>
			</Row>

			<Row className="justify-content-center text-center g-3 mt-3">
				<Col md={3} sm={6}>
					<div className="addon-card shadow-sm rounded-4 p-3 h-100 bg-white">
						<h5 className="fw-bold text-dark">🎯 Ads Budget Betreuung</h5>
						<p className="small mb-0">
							<b className="text-black">+79 €</b>
						</p>
					</div>
				</Col>

				<Col md={3} sm={6}>
					<div className="addon-card shadow-sm rounded-4 p-3 h-100 bg-white">
						<h5 className="fw-bold text-dark">
							🎬 5 Social Video Reels / Monat
						</h5>
						<p className="small mb-0">
							<b className="text-black">+199 €</b>
						</p>
					</div>
				</Col>

				<Col md={3} sm={6}>
					<div className="addon-card shadow-sm rounded-4 p-3 h-100 bg-white">
						<h5 className="fw-bold text-dark">
							📝 Story Copywriting <br></br>(8 Stück)
						</h5>
						<p className="small mb-0">
							<b className="text-black">+79 €</b>
						</p>
					</div>
				</Col>

				<Col md={3} sm={6}>
					<div className="addon-card shadow-sm rounded-4 p-3 h-100 bg-white">
						<h5 className="fw-bold text-dark">💬 Community Full Support</h5>
						<p className="small mb-0">
							<b className="text-black">+99 €</b>
						</p>
					</div>
				</Col>
			</Row>

			{/* FOOTER */}
			<Row className="justify-content-center text-center mt-5">
				<Col lg={8}>
					<p className="text-body">
						<AutoTranslate>
							Alle Preise zzgl. MwSt. – Wachstum, das sich rechnet ✅
						</AutoTranslate>
					</p>
				</Col>
			</Row>
		</Container>
	);
}
