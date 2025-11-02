"use client";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import AutoTranslate from "@/components/AutoTranslate";
import MotionFadeIn from "@/components/MotionFadeIn";

export default function Web1() {
	return (
		<MotionFadeIn
			threshold={0.5}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1, ease: "easeInOut" }}
			className="mt-5 py-5"
		>
			<Container>
				<Row className="justify-content-center text-center align-items-center">
					<Col lg={5} className="mx-auto">
						<Image
							src="/assets/webentwicklung-nettetal-webseiten1.png"
							width={400}
							height={400}
							className="responsive-image"
							alt="Pixel Genie Webdesign Nettetal"
							priority
						/>
					</Col>

					<Col lg={5} className="mx-auto">
						<Card className="border-0 bg-transparent">
							<Card.Body className="text-start">
								<h1>
									<AutoTranslate>
										Websites maßgeschneidert nach Ihren Bedürfnissen
									</AutoTranslate>
								</h1>

								<p>
									<AutoTranslate>
										Das Pixel Genie Team aus Nettetal bietet professionelle
										Webdesign Services, die individuell auf Ihre Bedürfnisse
										zugeschnitten sind. Vertrauen Sie uns, um eine einzigartige
										Website zu erstellen, die die Aufmerksamkeit Ihres Publikums
										auf sich zieht und Sie am Markt hervorhebt.
									</AutoTranslate>
								</p>

								<Button className="btn-nav" href="#contact">
									<span className="text-white">
										<AutoTranslate>Kontakt</AutoTranslate>
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
