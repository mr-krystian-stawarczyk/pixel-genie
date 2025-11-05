// /components/seo-city/FAQ.js
import { Container, Row, Col } from "react-bootstrap";

export default function FAQ({ cityName }) {
	return (
		<section className="py-5" id="faq">
			<Container>
				<Row>
					<Col md={12}>
						<h2 className="h3 fw-bold mb-5">
							Häufige Fragen zur SEO in {cityName}
						</h2>
					</Col>

					<Col md={6} className="mb-4">
						<h3 className="h6 fw-semibold mb-2">Wie lange dauert SEO?</h3>
						<p>
							Erste Verbesserungen in 6–10 Wochen. Stabile Top-Rankings nach 3–6
							Monaten – abhängig vom Wettbewerb in {cityName}.
						</p>

						<h3 className="h6 fw-semibold mb-2">
							Was kostet SEO in {cityName}?
						</h3>
						<p>
							Lokale Pakete ab 99 € monatlich – flexibel je nach Ziel & Region.
						</p>
					</Col>

					<Col md={6}>
						<h3 className="h6 fw-semibold mb-2">
							Warum ist lokales SEO so wichtig?
						</h3>
						<p>
							70 % der lokalen Suchanfragen führen zu Kontakt oder Besuch. Wer
							in {cityName} nicht sichtbar ist, verliert Kunden.
						</p>

						<h3 className="h6 fw-semibold mb-2">
							Macht ihr auch SEO-Analysen?
						</h3>
						<p>
							Ja – inkl. Technik-Check, Sichtbarkeitsanalyse &
							Strategie-Empfehlungen für {cityName}.
						</p>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
