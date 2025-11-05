"use client";
import { Container, Row, Col } from "react-bootstrap";
import ContactButton from "@/components/ContactButton";

export default function ContactCTA({ cityName }) {
	return (
		<section className="py-5" id="kontakt">
			<Container>
				<Row className="align-items-center">
					<Col md={8} className="mb-3">
						<h2 className="h3 fw-semibold mb-3">
							Starte jetzt dein SEO-Projekt in {cityName}
						</h2>
						<p>
							🚀 Kostenlose Erstberatung: Wir analysieren Technik, Sichtbarkeit
							& Potenziale bei dir vor Ort in {cityName}.
						</p>
					</Col>

					<Col md={4} className="text-md-end">
						<ContactButton topic={`SEO Beratung ${cityName}`}>
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
								✉️ Kostenlose Analyse →
							</div>
						</ContactButton>
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
						margin-top: 10px;
					}
				}
			`}</style>
		</section>
	);
}
