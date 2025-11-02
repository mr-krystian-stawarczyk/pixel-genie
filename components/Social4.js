"use client";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import AutoTranslate from "@/components/AutoTranslate";
import MotionFadeIn from "@/components/MotionFadeIn";

export default function Social4() {
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
					{/* TEXT */}
					<Col lg={5} className="mx-auto my-2">
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1 className="text-start">
									<AutoTranslate>
										Reporting, Analyse & Wachstum – wir zeigen, was wirklich
										funktioniert
									</AutoTranslate>
								</h1>

								<Card.Text className="text-start">
									<AutoTranslate>
										Social Media darf kein Bauchgefühl sein. Mit monatlichen
										Reports, detaillierten KPIs und echten Insights wissen Sie
										genau, was Ihre Zielgruppe liebt — und was nicht. Wir
										optimieren laufend Ihre Strategie, damit jeder investierte
										Euro für Sie arbeitet: mehr Reichweite, mehr Engagement,
										mehr Neukunden. Transparent, messbar, planbar.
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

					{/* IMAGE */}
					<Col lg={5} className="mx-auto my-2">
						<Image
							src="/assets/webentwicklung-nettetal-socialmedia-webagentur4.png"
							width={400}
							height={400}
							className="responsive-image"
							alt="Social Media Reporting und Analyse Nettetal"
						/>
					</Col>
				</Row>
			</Container>
		</MotionFadeIn>
	);
}
