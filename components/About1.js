"use client";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import AutoTranslate from "@/components/AutoTranslate";
import dynamic from "next/dynamic";
const MotionFadeIn = dynamic(() => import("@/components/MotionFadeIn"), {
	ssr: false,
});

function About1() {
	return (
		<MotionFadeIn
			initial={{ opacity: 0, y: 60 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 1, easing: "ease-in-out" }}
			threshold={0.3}
		>
			<Container className="py-5">
				<Row className="justify-content-center align-items-center">
					{/* TEXT */}
					<Col
						xs={{ span: 12, order: 2 }}
						lg={{ span: 5, order: 1 }}
						className="mx-auto my-2"
					>
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1 className="text-bold">
									<AutoTranslate>
										Webdesign mit einem festen Ansprechpartner
									</AutoTranslate>
								</h1>

								<Card.Text>
									<AutoTranslate>
										Ich bin Krystian Stawarczyk und entwickle Websites für Unternehmen aus Nettetal und Umgebung. Sie sprechen direkt mit mir – vom ersten Angebot bis zur Veröffentlichung.
									</AutoTranslate>
								</Card.Text>

								<Card.Text>
									<AutoTranslate>
										Je nach Projekt setze ich auf moderne Webtechnologien und achte auf klare Inhalte, mobile Bedienbarkeit und einen einfachen Kontaktweg.
									</AutoTranslate>
								</Card.Text>

								<Card.Text>
									<AutoTranslate>
										Ob eine einfache Unternehmenswebsite oder ein individueller Ausbau: Sie erhalten vorab einen verständlichen Leistungsumfang und einen schriftlichen Preis.
									</AutoTranslate>
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>

					{/* IMAGES */}
					<Col
						xs={{ span: 12, order: 1 }}
						lg={{ span: 5, order: 2 }}
						className="mx-auto my-5 text-center"
					>
						<div className="image-container">
							<Image
								src="/assets/webentwicklung-nettetal-seo1.png"
								width={380}
								height={400}
								className="foreground-image responsive-image rounded"
								alt="Pixel-Genie Webdesign aus Nettetal"
								priority
							/>
							<Image
								src="/assets/mypictureframe.gif"
								width={400}
								height={515}
								className="background-image responsive-image shadow-lg rounded"
								alt="Pixel Genie – Über uns"
								priority
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</MotionFadeIn>
	);
}

export default About1;
