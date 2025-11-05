"use client";
import { Container, Row, Col, Badge } from "react-bootstrap";
import AutoTranslate from "@/components/AutoTranslate";
import ContactButton from "@/components/ContactButton";

export default function Hero({ title, lead, badges = [] }) {
	return (
		<section className="py-5">
			<Container>
				<Row className="align-items-center mt-4">
					{/* 🔹 Teksty po lewej */}
					<Col lg={7}>
						<h1 className="display-5 fw-bold mb-3">
							<AutoTranslate>{title}</AutoTranslate>
						</h1>

						<p className="lead">
							<AutoTranslate>{lead}</AutoTranslate>
						</p>

						<div className="d-flex flex-wrap gap-2 mt-2">
							{badges.map((b, i) => (
								<Badge key={i} bg={b.variant || "primary"}>
									<AutoTranslate>{b.label}</AutoTranslate>
								</Badge>
							))}
						</div>

						<div className="mt-4">
							<ContactButton topic={title}>
								<div
									className="btn-premium-footer"
									style={{
										display: "inline-block",
										padding: "14px 28px",
										fontSize: "1.05rem",
										fontWeight: 600,
										color: "#fff",
										background: "linear-gradient(135deg,#111827,#1f2937)",
										border: "none",
										borderRadius: "8px",
										boxShadow: "0 4px 18px rgba(0,0,0,0.25)",
										textDecoration: "none",
										cursor: "pointer",
										transition: "all 0.25s ease",
									}}
									onMouseEnter={(e) =>
										(e.currentTarget.style.background =
											"linear-gradient(135deg,#1e293b,#0f172a)")
									}
									onMouseLeave={(e) =>
										(e.currentTarget.style.background =
											"linear-gradient(135deg,#111827,#1f2937)")
									}
								>
									<AutoTranslate>
										Jetzt kostenlose Beratung anfragen
									</AutoTranslate>
								</div>
							</ContactButton>
						</div>
					</Col>

					{/* 🔹 KARTA z zaletami / keywordami po prawej */}
					<Col lg={5} className="mt-4">
						<div
							className="rounded-4 p-4 text-light shadow-lg"
							style={{
								background: "linear-gradient(135deg,#0b0b2e,#1f1f5e)",
								minHeight: "100%",
							}}
						>
							<h4 className="fw-bold text-warning mb-3">Warum Pixel-Genie?</h4>
							<ul className="mb-3 small" style={{ lineHeight: "1.6" }}>
								<li>🚀 Schnell ladende Websites (Lighthouse 90+)</li>
								<li>🎯 SEO-optimiertes Design mit Fokus auf Leads</li>
								<li>🧠 UX & Conversion Strategie aus einer Hand</li>
								<li>⚙️ Entwicklung mit Next.js & React</li>
								<li>📈 Sichtbar in Google & lokal in NRW</li>
							</ul>

							<p className="text-light small mb-0 opacity-75">
								Webdesign, das überzeugt – technisch, visuell und strategisch.
								Wir kombinieren Performance mit Markenauftritt für messbare
								Ergebnisse.
							</p>
						</div>
					</Col>
				</Row>
			</Container>

			<style jsx>{`
				@media (max-width: 768px) {
					.btn-premium-footer {
						width: 100%;
						text-align: center;
						padding: 12px 20px !important;
						font-size: 1rem !important;
					}
					.rounded-4 {
						margin-top: 2rem;
					}
				}
			`}</style>
		</section>
	);
}
