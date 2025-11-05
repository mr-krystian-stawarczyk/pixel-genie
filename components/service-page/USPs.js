"use client";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function USPs({ title = "Warum wir?", items = [] }) {
	const surface = {
		backgroundColor: "transparent",
		borderColor: "rgba(255,255,255,0.14)",
	};

	return (
		<section className="py-5">
			<Container>
				<h2 className="h3 fw-bold mb-4">{title}</h2>
				<Row className="g-4">
					{items.map((u, i) => (
						<Col md={4} key={i}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h6 fw-bold mb-2">{u.heading}</h3>
								<p className="mb-0">{u.text}</p>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
}
