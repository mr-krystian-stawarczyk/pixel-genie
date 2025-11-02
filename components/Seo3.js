"use client";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import AutoTranslate from "@/components/AutoTranslate";
import MotionFadeIn from "@/components/MotionFadeIn";

export default function Seo3() {
	return (
		<MotionFadeIn
			threshold={0.5}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1, ease: "easeInOut" }}
			className="mt-5 pt-5"
		>
			<Container>
				<Row className="justify-content-center text-center align-items-center">
					{/* Tekst */}
					<Col lg={5} className="mx-auto my-2">
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1 className="text-start">
									<AutoTranslate>
										Keywords und Content Strategien für effektiveres SEO
									</AutoTranslate>
								</h1>

								<Card.Text className="text-start">
									<AutoTranslate>
										Unser Team von SEO Experten von Pixel Genie Nettetal
										unterstützt Sie bei der Auswahl der richtigen Keywords und
										der Entwicklung von Content Strategien, die zur Verbesserung
										der Sichtbarkeit Ihrer Website in den Suchergebnissen
										beitragen. Nutzen Sie das Potenzial organischen Traffics und
										erreichen Sie Ihre Zielgruppe.
									</AutoTranslate>
								</Card.Text>

								<Button className="btn-nav" href="#seoprices">
									<span className="text-white">
										<AutoTranslate>SEO OPTIMIERUNG PREISE</AutoTranslate>
									</span>
								</Button>
							</Card.Body>
						</Card>
					</Col>

					{/* Obrazek */}
					<Col lg={5} className="mx-auto my-2">
						<Image
							src="/assets/SEO-webentwicklung-nettetal-3.png"
							width={400}
							height={400}
							className="responsive-image"
							alt="SEO-webentwicklung-nettetal-3"
						/>
					</Col>
				</Row>
			</Container>
		</MotionFadeIn>
	);
}
