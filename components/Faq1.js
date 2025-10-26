import Image from "next/image";
import React from "react";
import { Container, Accordion, Row, Col } from "react-bootstrap";
import AutoTranslate from "@/components/AutoTranslate";

function Faq1() {
	return (
		<Container className="mb-5 pb-5" id="web-design-faq">
			<Row className="justify-content-center align-items-center">
				<Col lg={4} md={6} xs={12} className="py-5 text-center">
					<Image
						src="/assets/webentwicklung-nettetal-fragen1.png"
						width={300}
						height={300}
						alt="webentwicklung-nettetal-webseiten-fragen1"
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
								<AutoTranslate>
									Wie viel berechnen Sie für den Aufbau einer Website?
								</AutoTranslate>
							</Accordion.Header>
							<Accordion.Body>
								<AutoTranslate>
									Auf diese Frage gibt es keine konkrete Antwort. Der Aufbau
									einer Website wird auf der Grundlage der individuellen
									Anforderungen jedes Projekts bewertet. Jede Website ist
									einzigartig und erfordert verschiedene Elemente. Wir entwerfen
									und erstellen maßgeschneiderte Websites speziell für Ihr
									Unternehmen. Wir werden viele Fragen stellen, Ihre Bedürfnisse
									bewerten und Ihnen basierend auf dieser Bewertung eine
									Kostenschätzung unterbreiten. Unser kleinstes Paket beginnt
									bei 299 EUR. Kontaktieren Sie uns unter info@pixel-genie.de,
									um den Bewertungsprozess zu starten!
								</AutoTranslate>
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="1">
							<Accordion.Header>
								<AutoTranslate>
									Wie lange dauert es, bis meine Website fertiggestellt ist?
								</AutoTranslate>
							</Accordion.Header>
							<Accordion.Body>
								<AutoTranslate>
									Unser Standard Zeitplan sieht vor, dass der Aufbau einer
									Website zwischen 2 und 4 Wochen dauert, aber das hängt vom
									Projekt ab, da die Größe und das Tempo jedes Projekts vom
									Kunden festgelegt werden...
								</AutoTranslate>
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="2">
							<Accordion.Header>
								<AutoTranslate>
									Muss ich mich in Nettetal befinden, um mit Ihnen
									zusammenzuarbeiten?
								</AutoTranslate>
							</Accordion.Header>
							<Accordion.Body>
								<AutoTranslate>
									Nein! Wir arbeiten mit Kunden aus der ganzen Welt zusammen...
								</AutoTranslate>
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="3">
							<Accordion.Header>
								<AutoTranslate>
									Kann ich meine Website nach Fertigstellung selbst
									aktualisieren?
								</AutoTranslate>
							</Accordion.Header>
							<Accordion.Body>
								<AutoTranslate>
									Ja! Wir freuen uns sehr, wenn unsere Kunden die Kontrolle über
									ihre Website übernehmen...
								</AutoTranslate>
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="4">
							<Accordion.Header>
								<AutoTranslate>Werden Sie unsere Website warten?</AutoTranslate>
							</Accordion.Header>
							<Accordion.Body>
								<AutoTranslate>
									Wir können bei der Wartung Ihrer Website helfen, aber Sie
									können dies auch selbstständig tun...
								</AutoTranslate>
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="5">
							<Accordion.Header>
								<AutoTranslate>
									Liefern Sie Hosting und Domain für die Website?
								</AutoTranslate>
							</Accordion.Header>
							<Accordion.Body>
								<AutoTranslate>
									Hosting und Domain werden während des ersten Gesprächs
									festgelegt...
								</AutoTranslate>
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="6">
							<Accordion.Header>
								<AutoTranslate>
									Wird meine Website für mobile Geräte optimiert sein?
								</AutoTranslate>
							</Accordion.Header>
							<Accordion.Body>
								<AutoTranslate>
									Natürlich! Es ist jetzt wichtiger denn je, eine responsive
									Website zu haben!
								</AutoTranslate>
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="7">
							<Accordion.Header>
								<AutoTranslate>
									Wie viel Einfluss habe ich auf den Webdesign-Prozess?
								</AutoTranslate>
							</Accordion.Header>
							<Accordion.Body>
								<AutoTranslate>
									Viel! Ihre Meinungen und Informationen sind entscheidend...
								</AutoTranslate>
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="8">
							<Accordion.Header>
								<AutoTranslate>
									Wer schreibt die Inhalte für die Website?
								</AutoTranslate>
							</Accordion.Header>
							<Accordion.Body>
								<AutoTranslate>
									Wir bitten Sie, sämtlichen Textinhalt bereitzustellen...
								</AutoTranslate>
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="9">
							<Accordion.Header>
								<AutoTranslate>
									Erstellen Sie Websites auf Basis von WordPress?
								</AutoTranslate>
							</Accordion.Header>
							<Accordion.Body>
								<AutoTranslate>
									Nein. Wir verwenden moderne Technologien wie React &
									Next.js...
								</AutoTranslate>
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="10">
							<Accordion.Header>
								<AutoTranslate>
									Was ist, wenn ich in Zukunft Unterstützung benötige?
								</AutoTranslate>
							</Accordion.Header>
							<Accordion.Body>
								<AutoTranslate>
									Wir sind nur eine E-Mail entfernt! Wir unterstützen Sie gerne
									langfristig...
								</AutoTranslate>
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="11">
							<Accordion.Header>
								<AutoTranslate>
									Sind SEO-Dienste beim Aufbau enthalten?
								</AutoTranslate>
							</Accordion.Header>
							<Accordion.Body>
								<AutoTranslate>
									Nein, monatliche SEO-Leistungen sind nicht enthalten...
								</AutoTranslate>
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="12">
							<Accordion.Header>
								<AutoTranslate>
									Arbeiten Sie mit kleinen Unternehmen?
								</AutoTranslate>
							</Accordion.Header>
							<Accordion.Body>
								<AutoTranslate>
									Ja! Wir arbeiten mit Startups, KMUs und Konzernen zusammen.
								</AutoTranslate>
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="13">
							<Accordion.Header>
								<AutoTranslate>
									Welche Zahlungsmethoden akzeptieren Sie?
								</AutoTranslate>
							</Accordion.Header>
							<Accordion.Body>
								<AutoTranslate>
									Banküberweisung und PayPal — je nach Vereinbarung.
								</AutoTranslate>
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="14">
							<Accordion.Header>
								<AutoTranslate>Wie fange ich an?</AutoTranslate>
							</Accordion.Header>
							<Accordion.Body>
								<AutoTranslate>
									Kontaktieren Sie uns per E-Mail an
									pixelgenie.marketing@gmail.com — wir helfen Ihnen loszulegen!
								</AutoTranslate>
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>
			</Row>
		</Container>
	);
}

export default Faq1;
