// /components/SEOStats.js
import { Row, Col } from "react-bootstrap";

export default function SEOStats({ cityData }) {
	if (!cityData) return null;

	const {
		city,
		postalCode,
		geo,
		elevation,
		areaKm2,
		boroughs,
		economicHighlights,
		historySnippet,
		population,
	} = cityData;

	const cityName = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

	const muted = { opacity: 0.85 };
	const surfaceStyle = {
		backgroundColor: "transparent",
		color: "var(--text-color)",
	};

	return (
		<section
			aria-label={`Statistische Daten zu ${cityName}`}
			style={surfaceStyle}
		>
			<h2 className="h4 fw-semibold mb-3">
				📊 Lokale Fakten über {cityName} {""} - Einwohner: ({population})
			</h2>

			{historySnippet && (
				<p style={muted} className="mb-4">
					{historySnippet}
				</p>
			)}

			<Row>
				<Col sm={6} className="mb-3">
					<h3 className="h6 fw-bold mb-2">Geografische Daten</h3>
					<ul className="mb-0" style={muted}>
						<li>
							<strong>Postleitzahl:</strong> {postalCode}
						</li>
						<li>
							<strong>Fläche:</strong> {areaKm2} km²
						</li>
						<li>
							<strong>Höhe:</strong> {elevation} m ü. M.
						</li>
						<li>
							<strong>Koordinaten:</strong> {geo.latitude}, {geo.longitude}
						</li>
					</ul>
				</Col>

				<Col sm={6} className="mb-3">
					<h3 className="h6 fw-bold mb-2">Wirtschaft & Struktur</h3>
					<div>
						{Object.entries(economicHighlights || {}).map(([k, v]) => (
							<div
								key={k}
								className="mb-2 p-2 rounded border"
								style={{
									backgroundColor: "rgba(255,255,255,0.05)",
									borderColor: "rgba(255,255,255,0.15)",
								}}
							>
								<div
									className="fw-semibold"
									style={{ color: "var(--text-color)" }}
								>
									{k}
								</div>
								<div style={{ opacity: 0.85, whiteSpace: "pre-line" }}>{v}</div>
							</div>
						))}
					</div>
				</Col>
			</Row>
			{boroughs?.length > 0 && (
				<div className="mt-4">
					<h3 className="h6 fw-bold mb-2">🏙️ Wichtige Stadtteile</h3>
					<ul className="list-unstyled mb-0" style={{ opacity: 0.85 }}>
						{boroughs.map((b) => (
							<li
								key={b}
								className="py-1 border-bottom"
								style={{ borderColor: "rgba(255,255,255,0.1)" }}
							>
								{b}
							</li>
						))}
					</ul>
				</div>
			)}
		</section>
	);
}
