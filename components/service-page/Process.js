"use client";
import { Container, Row, Col, Card } from "react-bootstrap";
import ContactButton from "@/components/ContactButton";

export default function Process({ steps = [], ctaTopic = "Beratung buchen" }) {
	const surface = {
		backgroundColor: "transparent",
		borderColor: "rgba(255,255,255,0.14)",
	};

	return (
		<section className="py-5">
			<Container>
				<Row>
					<Col lg={7} className="mb-4">
						<Card className="shadow-sm p-4" style={surface}>
							<h2 className="h4 fw-semibold mb-3">Unser Prozess</h2>
							<ol style={{ marginBottom: 0 }}>
								{steps.map((s, i) => (
									<li
										key={i}
										className="mb-2"
										style={{ color: "var(--text-color)" }}
									>
										<strong>{s.bold}:</strong> {s.text}
									</li>
								))}
							</ol>
						</Card>
					</Col>

					<Col lg={5}>
						<Card
							className="shadow-sm p-4 h-100 d-flex flex-column justify-content-between"
							style={surface}
						>
							<div>
								<h3 className="h5 fw-bold mb-3">Warum Pixel-Genie?</h3>
								<ul className="mb-4">
									<li style={{ color: "var(--text-color)" }}>
										Strategie: Performance + Conversion
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Erfahrung mit Next.js & SEO
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Transparenz & kurze Laufzeiten
									</li>
								</ul>
							</div>

							<div className="text-center mt-3">
								<ContactButton topic={ctaTopic}>
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
										📅 Termin vereinbaren →
									</div>
								</ContactButton>
							</div>
						</Card>
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
						margin-top: 12px;
					}
				}
			`}</style>
		</section>
	);
}
