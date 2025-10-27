import Image from "next/image";
import React from "react";
import { Container, Accordion, Row, Col } from "react-bootstrap";
import AutoTranslate from "@/components/AutoTranslate";

function Brand7() {
	return (
		<Container className="mb-5 pb-5" id="branding-nettetal-faq">
			<Row className="justify-content-center align-items-center text-center">
				<Col lg={5} className="py-4">
					<Image
						src="/assets/webentwicklung-nettetal-fragen1.png"
						width={300}
						height={300}
						alt="Branding Agentur Nettetal FAQ"
						priority
					/>
					<h2 className="mt-3">
						<AutoTranslate>
							Häufige Fragen rund um Branding in Nettetal – verständlich erklärt
							✅
						</AutoTranslate>
					</h2>
				</Col>
			</Row>

			<Row className="justify-content-center">
				<Col lg={9}>
					<Accordion className="shadow-lg">
						{/* 1 */}
						<Accordion.Item eventKey="0">
							<Accordion.Header>
								<AutoTranslate>
									Was bedeutet Branding eigentlich genau?
								</AutoTranslate>
							</Accordion.Header>
							<Accordion.Body>
								<AutoTranslate>
									Branding ist das Gefühl, das Menschen mit Ihrer Marke
									verbinden. Es ist nicht nur ein Logo oder Farben – sondern der
									komplette Eindruck, den Ihr Unternehmen hinterlässt. Gutes
									Branding sorgt dafür, dass sich Kunden erinnern: „Aha, diese
									Firma kann ich vertrauen.“
								</AutoTranslate>
							</Accordion.Body>
						</Accordion.Item>

						{/* 2 */}
						<Accordion.Item eventKey="1">
							<Accordion.Header>
								<AutoTranslate>
									Warum spielt Logodesign dabei eine so große Rolle?
								</AutoTranslate>
							</Accordion.Header>
							<Accordion.Body>
								<AutoTranslate>
									Weil das Logo das Gesicht Ihrer Marke ist! Es entscheidet in
									Sekunden darüber, ob jemand Sie professionell wahrnimmt oder
									weiter scrollt. Ein starkes Logo repräsentiert Ihre Identität
									– klar, einprägsam und visuell attraktiv.
								</AutoTranslate>
							</Accordion.Body>
						</Accordion.Item>

						{/* 3 */}
						<Accordion.Item eventKey="2">
							<Accordion.Header>
								<AutoTranslate>
									Wie unterstützt SEO mein Branding?
								</AutoTranslate>
							</Accordion.Header>
							<Accordion.Body>
								<AutoTranslate>
									Wenn Ihre Marke online nicht gefunden wird, gibt es sie
									(gefühlt) gar nicht. SEO sorgt dafür, dass Ihre Website auf
									relevanten Suchbegriffen sichtbar ist – und so Vertrauen und
									Bekanntheit automatisch aufbaut. Branding + SEO =
									Power-Kombination 💥
								</AutoTranslate>
							</Accordion.Body>
						</Accordion.Item>

						{/* 4 */}
						<Accordion.Item eventKey="3">
							<Accordion.Header>
								<AutoTranslate>
									Wie mache ich meine Marke bekannt?
								</AutoTranslate>
							</Accordion.Header>
							<Accordion.Body>
								<AutoTranslate>
									Mit einem konsistenten Auftritt auf Website, Social Media und
									in Werbeanzeigen. Erzählen Sie Ihre Story – was macht Sie
									einzigartig? Menschen kaufen nicht nur Produkte… sie kaufen
									Marken, denen sie sich verbunden fühlen.
								</AutoTranslate>
							</Accordion.Body>
						</Accordion.Item>

						{/* 5 */}
						<Accordion.Item eventKey="4">
							<Accordion.Header>
								<AutoTranslate>Was ist Corporate Identity?</AutoTranslate>
							</Accordion.Header>
							<Accordion.Body>
								<AutoTranslate>
									Corporate Identity bedeutet: Überall gleich aussehen & gleich
									klingen. Dadurch entsteht Wiedererkennung. Und damit
									Sicherheit für Kunden. Wenn alles chaotisch ist – verlieren
									Menschen das Vertrauen.
								</AutoTranslate>
							</Accordion.Body>
						</Accordion.Item>

						{/* 6 */}
						<Accordion.Item eventKey="5">
							<Accordion.Header>
								<AutoTranslate>
									Wie lange dauert es, eine Marke aufzubauen?
								</AutoTranslate>
							</Accordion.Header>
							<Accordion.Body>
								<AutoTranslate>
									Die Basis entsteht in wenigen Wochen. Ein starker Brand wächst
									mit der Zeit – durch Marketing, Sichtbarkeit und
									Kundenerlebnisse. Wer langfristig investiert, gewinnt
									langfristig Marktanteile.
								</AutoTranslate>
							</Accordion.Body>
						</Accordion.Item>

						{/* 7 */}
						<Accordion.Item eventKey="6">
							<Accordion.Header>
								<AutoTranslate>
									Wie hebe ich mich wirklich von Mitbewerbern ab?
								</AutoTranslate>
							</Accordion.Header>
							<Accordion.Body>
								<AutoTranslate>
									Mit einer klaren Positionierung. Was machen Sie besser? Was
									macht Sie menschlich? Was bekommt man nur bei Ihnen? Je
									deutlicher Sie es kommunizieren – desto stärker der Wunsch,
									bei Ihnen zu kaufen.
								</AutoTranslate>
							</Accordion.Body>
						</Accordion.Item>

						{/* 8 */}
						<Accordion.Item eventKey="7">
							<Accordion.Header>
								<AutoTranslate>
									Spielen Bewertungen eine Rolle für Branding?
								</AutoTranslate>
							</Accordion.Header>
							<Accordion.Body>
								<AutoTranslate>
									Absolut! Google Reviews & Social Proof überzeugen oft mehr als
									jede Werbeanzeige. Positive Erfahrungen Ihrer Kunden machen
									Ihre Marke glaubwürdig und führen zu mehr Anfragen.
								</AutoTranslate>
							</Accordion.Body>
						</Accordion.Item>

						{/* 9 */}
						<Accordion.Item eventKey="8">
							<Accordion.Header>
								<AutoTranslate>
									Ist eine mobile optimierte Marke wichtig?
								</AutoTranslate>
							</Accordion.Header>
							<Accordion.Body>
								<AutoTranslate>
									Über 70% aller Nutzer sind mobil unterwegs! Wenn Ihre Marke
									dort nicht glänzt, wirkt sie unprofessionell. Wir sorgen
									dafür, dass Sie auf jedem Gerät hervorragend aussehen.
								</AutoTranslate>
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>
			</Row>
		</Container>
	);
}

export default Brand7;
