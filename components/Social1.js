"use client";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import AutoTranslate from "@/components/AutoTranslate";
import dynamic from "next/dynamic";
const MotionFadeIn = dynamic(() => import("@/components/MotionFadeIn"), {
	ssr: false,
});
export default function Social1() {
	return (
		<MotionFadeIn
			threshold={0.3}
			initial={{ opacity: 0, y: 60 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 1, ease: "easeInOut" }}
			className="mt-5 pt-5"
		>
			<Container>
				<Row className="justify-content-center text-center align-items-center">
					{/* IMAGE */}
					<Col lg={5} className="mx-auto my-2">
						<Image
							src="/assets/webentwicklung-nettetal-socialmedia-webagentur1.png"
							width={400}
							height={400}
							className="responsive-image"
							alt="Social Media Marketing Agentur Nettetal"
							priority
						/>
					</Col>

					{/* TEXT CONTENT */}
					<Col lg={5} className="mx-auto my-2">
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1 className="text-start">
									<AutoTranslate>
										Social Media Marketing für Unternehmen in Nettetal –
										sichtbar werden, Kunden gewinnen
									</AutoTranslate>
								</h1>

								<Card.Text className="text-start">
									<AutoTranslate>
										Ihre Kunden sind täglich auf Instagram, Facebook, TikTok &
										LinkedIn unterwegs – also sollte Ihre Marke es auch sein.
										Durch kreative Inhalte, gezielte Strategien und einer
										Kommunikation, die Menschen erreicht, machen wir Ihre Marke
										in den sozialen Medien bekannt. Mehr Reichweite. Mehr Leads.
										Mehr Umsatz. Ganz ohne Rätselraten.
									</AutoTranslate>
								</Card.Text>

								<Button className="btn-nav" href="#social-media-preis">
									<span className="text-white">
										<AutoTranslate>
											Jetzt Leistungen & Preise ansehen
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
