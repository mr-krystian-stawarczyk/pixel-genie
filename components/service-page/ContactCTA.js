"use client";
import { Container, Row, Col } from "react-bootstrap";
import ContactButton from "@/components/ContactButton";

export default function ContactCTA({ title, desc, topic }) {
	return (
		<section className="py-5" id="kontakt">
			<Container>
				<Row className="align-items-center">
					<Col md={8} className="mb-3">
						<h2 className="h3 fw-semibold mb-3">{title}</h2>
						<p>{desc}</p>
					</Col>
					<Col md={4} className="text-md-end">
						<ContactButton topic={topic}>
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
								✉️ Kostenlose Beratung →
							</div>
						</ContactButton>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
