"use client";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import ContactButton from "@/components/ContactButton";

export default function Hero({ cityName, GoogleReviews }) {
	const surface = {
		backgroundColor: "transparent",
		borderColor: "rgba(255,255,255,0.14)",
	};

	return (
		<section className="py-5">
			<Container>
				<Row className="align-items-center mt-4">
					<Col lg={7}>
						<h1 className="display-5 fw-bold mb-3">
							SEO Agentur in {cityName} – Sichtbarkeit, die verkauft 🚀
						</h1>
						<p className="lead">
							Wir bringen deine Angebote in {cityName} an die Spitze von Google
							– mit Fokus auf <strong>Leads, Calls & Kunden</strong>.
						</p>

						<div className="d-flex flex-wrap gap-2 mt-2">
							<Badge bg="success">Core Web Vitals</Badge>
							<Badge bg="primary">Local SEO</Badge>
							<Badge bg="info">Content Strategy</Badge>
							<Badge bg="warning" text="dark">
								UX & Conversion
							</Badge>
						</div>

						{/* === CTA Button (styl jak sticky) === */}
						<div className="mt-4">
							<ContactButton topic={`SEO Analyse ${cityName}`}>
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
									Kostenlose SEO-Analyse →
								</div>
							</ContactButton>
						</div>
					</Col>

					<Col lg={5} className="mt-4">
						<Card className="shadow-sm" style={surface}>
							<Card.Body>
								<h3 className="h5 fw-semibold mb-3">
									Warum SEO in {cityName}?
								</h3>
								<p>
									<strong>70 %</strong> der lokalen Suchanfragen führen zu einer
									Aktion innerhalb eines Tages.
								</p>
								<ul>
									<li style={{ color: "var(--text-color)" }}>
										Mehr Kundenanfragen aus der Region
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Sichtbar im Local Pack (Maps)
									</li>
									<li style={{ color: "var(--text-color)" }}>
										Nachhaltige Leads statt teurer Ads
									</li>
								</ul>
							</Card.Body>
						</Card>
					</Col>
				</Row>

				<Row className="mt-4">
					<Col>{GoogleReviews ? <GoogleReviews /> : null}</Col>
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
				}
			`}</style>
		</section>
	);
}
