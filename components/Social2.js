"use client";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import AutoTranslate from "@/components/AutoTranslate";
import dynamic from "next/dynamic";
const MotionFadeIn = dynamic(() => import("@/components/MotionFadeIn"), {
	ssr: false,
});
export default function Social2() {
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
					{/* TEXT SIDE */}
					<Col lg={5} className="mx-auto my-2">
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1 className="text-start">
									<AutoTranslate>
										Social Media Betreuung & Content Creation – wir kümmern uns
										um alles ✅
									</AutoTranslate>
								</h1>

								<Card.Text className="text-start">
									<AutoTranslate>
										Regelmäßig posten, Kommentare beantworten, Trends verfolgen
										– Social Media braucht Zeit und Erfahrung. Wir entwickeln
										einen maßgeschneiderten Content-Plan, erstellen hochwertige
										Posts (Bild, Video & Text) und übernehmen das
										Community-Management. So wird aus Followern eine echte
										Fanbase – und aus Fans Kunden.
									</AutoTranslate>
								</Card.Text>

								<Button
									className="btn-nav"
									href="#social-media-nettetal-fragen"
								>
									<span className="text-white">
										<AutoTranslate>Jetzt Beratung sichern</AutoTranslate>
									</span>
								</Button>
							</Card.Body>
						</Card>
					</Col>

					{/* IMAGE */}
					<Col lg={5} className="mx-auto my-2">
						<Image
							src="/assets/webentwicklung-nettetal-socialmedia-webagentur2.png"
							width={400}
							height={400}
							className="responsive-image"
							alt="Social Media Agentur Nettetal Content Creation"
						/>
					</Col>
				</Row>
			</Container>
		</MotionFadeIn>
	);
}
