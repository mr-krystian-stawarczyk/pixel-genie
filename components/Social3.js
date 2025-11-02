"use client";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import AutoTranslate from "@/components/AutoTranslate";
import MotionFadeIn from "@/components/MotionFadeIn";

export default function Social3() {
	return (
		<MotionFadeIn
			threshold={0.3}
			initial={{ opacity: 0, y: 60 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 1, ease: "easeOut" }}
			className="mt-5 pt-5"
		>
			<Container>
				<Row className="justify-content-center text-center align-items-center">
					{/* LEFT IMAGE */}
					<Col lg={5} className="mx-auto my-2">
						<Image
							src="/assets/webentwicklung-nettetal-socialmedia-webagentur3.png"
							width={400}
							height={400}
							className="responsive-image"
							alt="Social Media Ads Kampagnen Nettetal"
						/>
					</Col>

					{/* RIGHT CONTENT */}
					<Col lg={5} className="mx-auto my-2">
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1 className="text-start">
									<AutoTranslate>
										Zielgerichtete Social Ads für mehr Leads & Umsatz
									</AutoTranslate>
								</h1>

								<Card.Text className="text-start">
									<AutoTranslate>
										Wir schalten Werbeanzeigen, die verkaufen — nicht
										verbrennen. Mit datenbasiertem Targeting auf Facebook,
										Instagram, LinkedIn oder TikTok erreichen Sie genau die
										Menschen, die sich für Ihre Produkte interessieren. Wir
										testen, analysieren und optimieren stetig — für planbare
										Ergebnisse und echtes Wachstum.
									</AutoTranslate>
								</Card.Text>

								<Button
									className="btn-nav"
									href="#social-media-nettetal-process"
								>
									<span className="text-white">
										<AutoTranslate>Unsere Strategie entdecken</AutoTranslate>
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
