// /components/seo-city/CaseStudies.js
import { Container, Row, Col, Card } from "react-bootstrap";

export default function CaseStudies() {
	const surface = {
		backgroundColor: "transparent",
		borderColor: "rgba(255,255,255,0.14)",
	};
	const cases = [
		{
			title: "Dienstleister (B2C lokal)",
			text: "+187 % mehr lokale Suchanfragen in 6 Monaten (Local Pack + Content Refresh).",
			bullets: ["CTR +2,3 Prozentpunkte", "Core Web Vitals: „Good“ site-wide"],
		},
		{
			title: "Einzelhandel mit Online-Showroom",
			text: "5× mehr Keywords in den Top-3, +31 % Umsatzwachstum.",
			bullets: ["Strukturierte Themencluster", "Relevante lokale Backlinks"],
		},
		{
			title: "B2B-Serviceanbieter",
			text: "3× mehr qualifizierte Leads, SEO, Paid Ads.",
			bullets: [
				"Wettbewerbsanalyse & Content-Depth",
				"UX-orientierte Konversionsoptimierung",
			],
		},
	];

	return (
		<section className="py-5">
			<Container>
				<h2 className="h3 fw-bold mb-4">
					Ergebnisse aus ähnlichen SEO-Projekten
				</h2>
				<Row className="g-4">
					{cases.map((c, i) => (
						<Col lg={4} key={i}>
							<Card className="shadow-sm p-4 h-100" style={surface}>
								<h3 className="h6 fw-bold">{c.title}</h3>
								<p>{c.text}</p>
								<ul style={{ fontSize: "0.9rem" }}>
									{c.bullets.map((b, idx) => (
										<li key={idx} style={{ color: "var(--text-color)" }}>
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
