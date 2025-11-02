"use client";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import AutoTranslate from "@/components/AutoTranslate";
import MotionFadeIn from "@/components/MotionFadeIn";

function Brand5() {
	return (
		<MotionFadeIn
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1, easing: "ease-in-out" }}
			threshold={0.3}
		>
			<Container className="mt-5 pt-5">
				<Row className="justify-content-center text-center align-items-center">
					{/* TEKST LEWY */}
					<Col lg={5} className="mx-auto my-2">
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1 className="text-start">
									<AutoTranslate>
										Corporate Identity – das Gesicht Ihrer Marke
									</AutoTranslate>
								</h1>

								<Card.Text className="text-start">
									<AutoTranslate>
										Ihre Corporate Identity ist mehr als nur ein Logo – sie ist
										das Herzstück Ihrer Marke. Farben, Formen, Schriftarten und
										Tonalität müssen harmonisch zusammenwirken, um Vertrauen zu
										schaffen und Ihre Werte klar zu transportieren. Wir
										entwickeln für Sie ein einheitliches, unverwechselbares
										Erscheinungsbild, das sowohl online als auch offline
										funktioniert.
									</AutoTranslate>
								</Card.Text>

								<Card.Text className="text-start">
									<AutoTranslate>
										Ob Website, Social Media oder Print – Ihr Markenauftritt
										wird wiedererkennbar, konsistent und professionell. So
										schaffen Sie Vertrauen bei Kund:innen und sichern sich
										langfristige Wettbewerbsvorteile.
									</AutoTranslate>
								</Card.Text>

								<Button
									className="btn-nav mt-2"
									href="#branding-nettetal-preis"
								>
									<span className="text-white">
										<AutoTranslate>Pakete ansehen</AutoTranslate>
									</span>
								</Button>
							</Card.Body>
						</Card>
					</Col>

					{/* OBRAZEK PRAWY */}
					<Col lg={5} className="mx-auto my-2 text-center">
						<Image
							src="/assets/webagentur-nettetal-branding-seo5.png"
							width={420}
							height={420}
							className="responsive-image"
							alt="corporate-identity-branding-agentur-nettetal"
							priority
						/>
					</Col>
				</Row>
			</Container>
		</MotionFadeIn>
	);
}

export default Brand5;
