"use client";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import AutoTranslate from "@/components/AutoTranslate";
import MotionFadeIn from "@/components/MotionFadeIn";

function Brand2() {
	return (
		<MotionFadeIn
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1, easing: "ease-in-out" }}
			threshold={0.3}
		>
			<Container className="mt-5 pt-5">
				<Row className="justify-content-center text-center align-items-center">
					{/* IMAGE */}
					<Col lg={5} className="mx-auto my-2">
						<Image
							src="/assets/webagentur-nettetal-branding-seo2.png"
							width={400}
							height={400}
							className="responsive-image"
							alt="branding-logo-design-nettetal"
							priority
						/>
					</Col>

					{/* TEXT */}
					<Col lg={5} className="mx-auto my-2">
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1 className="text-start">
									<AutoTranslate>
										Erstellung eines einzigartigen Logos mit SEO Power
									</AutoTranslate>
								</h1>

								<Card.Text className="text-start">
									<AutoTranslate>
										Ein aussagekräftiges Logo ist das Herzstück jeder starken
										Marke. Wir entwickeln ein exklusives Logo für Ihr
										Unternehmen – individuell, markant und perfekt abgestimmt
										auf Ihre Zielgruppe. Zusätzlich optimieren wir Ihre
										Datei-Assets für Suchmaschinen, damit Ihre Marke nicht nur
										großartig aussieht – sondern auch besser gefunden wird.
									</AutoTranslate>
								</Card.Text>

								<Button className="btn-nav" href="#branding-nettetal-preis">
									<span className="text-white">
										<AutoTranslate>
											Branding Nettetal Preise ansehen
										</AutoTranslate>
									</span>
								</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</MotionFadeIn>
	);
}

export default Brand2;
