"use client";
import { Container, Row, Col } from "react-bootstrap";

export default function FAQ({ title = "Häufige Fragen", items = [] }) {
	return (
		<section className="py-5" id="faq">
			<Container>
				<h2 className="h3 fw-bold mb-5">{title}</h2>
				<Row>
					{items.map((f, i) => (
						<Col md={6} className="mb-4" key={i}>
							<h3 className="h6 fw-semibold mb-2">{f.q}</h3>
							<p className="mb-0">{f.a}</p>
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
}
