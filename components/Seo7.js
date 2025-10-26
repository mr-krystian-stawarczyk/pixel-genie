import Image from "next/image";
import React from "react";
import { Container, Accordion, Row, Col } from "react-bootstrap";
import AutoTranslate from "@/components/AutoTranslate";

function Seo7() {
	return (
		<Container className="mb-5 pb-5" id="seofaq">
			<Row className="justify-content-center align-items-center">
				<Col lg={4} md={6} xs={12} className="py-5 text-center">
					<Image
						src="/assets/webentwicklung-nettetal-fragen1.png"
						width={300}
						height={300}
						alt="SEO-webentwicklung-nettetal-fragen1"
						priority
					/>
					<h2>
						<AutoTranslate>Häufig gestellte Fragen</AutoTranslate>
					</h2>
				</Col>
			</Row>

			<Row className="justify-content-center align-items-center">
				<Col lg={9} className="mx-auto">
					<Accordion className="shadow-lg">
						<Accordion.Item eventKey="0">
							<Accordion.Header>
								<AutoTranslate>Wofür steht SEO?</AutoTranslate>
							</Accordion.Header>
							<Accordion.Body>
								<AutoTranslate>
									Wie du vielleicht weißt, steht SEO für
									Suchmaschinenoptimierung...
								</AutoTranslate>
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="1">
							<Accordion.Header>
								<AutoTranslate>Wie viel kostet SEO?</AutoTranslate>
							</Accordion.Header>
							<Accordion.Body>
								<AutoTranslate>
									Um diese Frage zu beantworten, müsste unser SEO Team mehr
									Informationen...
								</AutoTranslate>
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="2">
							<Accordion.Header>
								<AutoTranslate>Wie lange dauert SEO?</AutoTranslate>
							</Accordion.Header>
							<Accordion.Body>
								<AutoTranslate>
									Die Antwort hängt stark vom Wettbewerb, der Website und den
									bisherigen Maßnahmen ab...
								</AutoTranslate>
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="3">
							<Accordion.Header>
								<AutoTranslate>Was ist der ROI bei SEO?</AutoTranslate>
							</Accordion.Header>
							<Accordion.Body>
								<AutoTranslate>
									SEO kann einen extrem hohen ROI bieten — oft langfristig und
									nachhaltig...
								</AutoTranslate>
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="4">
							<Accordion.Header>
								<AutoTranslate>
									Kannst du mich auf Platz 1 bringen?
								</AutoTranslate>
							</Accordion.Header>
							<Accordion.Body>
								<AutoTranslate>
									Wir fokussieren uns darauf, dich bei relevanten Keywords
									sichtbar zu machen...
								</AutoTranslate>
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="5">
							<Accordion.Header>
								<AutoTranslate>
									Was passiert, wenn ich SEO stoppe?
								</AutoTranslate>
							</Accordion.Header>
							<Accordion.Body>
								<AutoTranslate>
									SEO ist wie Training — Fortschritte bleiben, aber lassen
									langfristig nach...
								</AutoTranslate>
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="6">
							<Accordion.Header>
								<AutoTranslate>
									Ich habe SEO gemacht, es hat nicht funktioniert!
								</AutoTranslate>
							</Accordion.Header>
							<Accordion.Body>
								<AutoTranslate>
									Häufigste Gründe: schlechte Dienstleister, zu wenig Budget
									oder falsche Strategie...
								</AutoTranslate>
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="7">
							<Accordion.Header>
								<AutoTranslate>
									Muss ich einen Vertrag unterschreiben?
								</AutoTranslate>
							</Accordion.Header>
							<Accordion.Body>
								<AutoTranslate>
									Nein — unsere SEO-Dienstleistungen sind monatlich kündbar...
								</AutoTranslate>
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="8">
							<Accordion.Header>
								<AutoTranslate>Wie fangen wir an?</AutoTranslate>
							</Accordion.Header>
							<Accordion.Body>
								<AutoTranslate>
									Kostenlose Erstberatung — gemeinsam definieren wir Ziele und
									starten sofort...
								</AutoTranslate>
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="9">
							<Accordion.Header>
								<AutoTranslate>Bietet Ihr PPC an?</AutoTranslate>
							</Accordion.Header>
							<Accordion.Body>
								<AutoTranslate>
									Nein — wir sind Experten für organisches Wachstum durch SEO...
								</AutoTranslate>
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="10">
							<Accordion.Header>
								<AutoTranslate>Betreut Ihr Social Media?</AutoTranslate>
							</Accordion.Header>
							<Accordion.Body>
								<AutoTranslate>
									Ja, aber das ist ein zusätzliches Leistungsangebot...
								</AutoTranslate>
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="11">
							<Accordion.Header>
								<AutoTranslate>Welche Reports erhalte ich?</AutoTranslate>
							</Accordion.Header>
							<Accordion.Body>
								<AutoTranslate>
									Monatliche Ranking-Auswertungen und Performance-Analysen...
								</AutoTranslate>
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="12">
							<Accordion.Header>
								<AutoTranslate>Gibt es SEO-Garantien?</AutoTranslate>
							</Accordion.Header>
							<Accordion.Body>
								<AutoTranslate>
									Niemand kann Platz 1 garantieren — aber wir holen das Maximum
									für dich heraus!
								</AutoTranslate>
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="13">
							<Accordion.Header>
								<AutoTranslate>Ist SEO tot?</AutoTranslate>
							</Accordion.Header>
							<Accordion.Body>
								<AutoTranslate>
									Nein — SEO entwickelt sich ständig weiter, alte Methoden
									funktionieren jedoch nicht mehr!
								</AutoTranslate>
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>
			</Row>
		</Container>
	);
}

export default Seo7;
