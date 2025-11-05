"use client";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Portfolio({ title = "Case Studies", cases = [] }) {
	const surface = {
		backgroundColor: "transparent",
		borderColor: "rgba(255,255,255,0.14)",
	};
	return (
		<section className="py-5">
			<Container>
				<h2 className="h3 fw-bold mb-4">{title}</h2>
				<Row className="g-4">
					{cases.map((c, i) => (
						<Col lg={4} key={i}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h6 fw-bold">{c.heading}</h3>
								<p className="mb-2">{c.text}</p>
								<ul className="small mb-0">
									{c.bullets?.map((b, bi) => (
										<li key={bi} style={{ color: "var(--text-color)" }}>
											{b}
										</li>
									))}
								</ul>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
}
