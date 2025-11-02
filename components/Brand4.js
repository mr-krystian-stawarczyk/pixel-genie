"use client";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import AutoTranslate from "@/components/AutoTranslate";
import dynamic from "next/dynamic";
const MotionFadeIn = dynamic(() => import("@/components/MotionFadeIn"), {
	ssr: false,
});
function Brand4() {
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
							src="/assets/webagentur-nettetal-branding-seo4.png"
							width={400}
							height={400}
							className="responsive-image"
							alt="branding-kommunikationsstrategie-nettetal"
							priority
						/>
					</Col>

					{/* TEXT */}
					<Col lg={5} className="mx-auto my-2">
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1 className="text-start">
									<AutoTranslate>
										Markenkommunikation, die Vertrauen schafft
									</AutoTranslate>
								</h1>

								<Card.Text className="text-start">
									<AutoTranslate>
										Erfolgreiches Branding bedeutet, Ihre Botschaft genau dort
										zu senden, wo sich Ihre Zielgruppe bewegt – und zwar so,
										dass sie hängen bleibt. Wir entwickeln eine klare,
										authentische Kommunikationsstrategie, die exakt zu Ihrer
										Markenidentität passt und Ihre Vision perfekt vermittelt.
										Das Ergebnis: Steigende Interaktionen, ein wachsendes
										Vertrauen und eine sichtbar stärkere Marktposition – online
										und offline.
									</AutoTranslate>
								</Card.Text>

								<Button className="btn-nav" href="#contact">
									<span className="text-white">
										<AutoTranslate>Jetzt Kontakt aufnehmen</AutoTranslate>
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

export default Brand4;
