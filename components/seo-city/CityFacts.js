// /components/seo-city/CityFacts.js
import { Container, Row, Col, Card } from "react-bootstrap";

export default function CityFacts({ cityData, CityMap }) {
	const {
		city,
		geo = { latitude: 0, longitude: 0 },
		postalCode,
		population,
		elevation,
		areaKm2,
		historySnippet,
		economicHighlights = {},
	} = cityData || {};
	const cityName = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";
	const surface = {
		backgroundColor: "transparent",
		borderColor: "rgba(255,255,255,0.14)",
	};

	return (
		<section className="py-5">
			<Container>
				<Row>
					<Col lg={8} className="mb-4">
						<Card className="shadow-sm p-4 h-100" style={surface}>
							<h2 className="h4 fw-semibold mb-3">
								📊 {cityName} – Zahlen & Fakten
							</h2>
							{historySnippet ? <p className="mb-3">{historySnippet}</p> : null}

							<Row>
								<Col md={6} className="mb-3">
									<h3 className="h6 fw-bold mb-2">Geografische Daten</h3>
									<ul className="mb-0">
										{postalCode && (
											<li style={{ color: "var(--text-color)" }}>
												<strong>Postleitzahl:</strong> {postalCode}
											</li>
										)}
										{areaKm2 && (
											<li style={{ color: "var(--text-color)" }}>
												<strong>Fläche:</strong> {areaKm2} km²
											</li>
										)}
										{elevation && (
											<li style={{ color: "var(--text-color)" }}>
												<strong>Höhe:</strong> {elevation} m
											</li>
										)}
										{geo?.latitude && geo?.longitude && (
											<li style={{ color: "var(--text-color)" }}>
												<strong>Koordinaten:</strong> {geo.latitude},{" "}
												{geo.longitude}
											</li>
										)}
										{population && (
											<li style={{ color: "var(--text-color)" }}>
												<strong>Einwohner:</strong>{" "}
												{Number(population).toLocaleString("de-DE")}
											</li>
										)}
									</ul>
								</Col>

								<Col md={6} className="mb-3">
									<h3 className="h6 fw-bold mb-2">Wirtschaft & Branchen</h3>
									{Object.keys(economicHighlights).length ? (
										<ul className="mb-0">
											{Object.entries(economicHighlights).map(([k, v], idx) => (
												<li key={idx} style={{ color: "var(--text-color)" }}>
													<strong>{k}:</strong>{" "}
													{typeof v === "string" ? v : JSON.stringify(v)}
												</li>
											))}
										</ul>
									) : (
										<p>Mittelstandsgeprägte Wirtschaft & Industrie.</p>
									)}
								</Col>
							</Row>
						</Card>
					</Col>

					<Col lg={4} className="mb-4">
						<Card className="shadow-sm h-100" style={surface}>
							<Card.Body className="p-0">
								{CityMap ? (
									<CityMap key={city} cityData={cityData} height={350} />
								) : null}
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
