"use client";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import AutoTranslate from "@/components/AutoTranslate";
import dynamic from "next/dynamic";
const MotionFadeIn = dynamic(() => import("@/components/MotionFadeIn"), {
	ssr: false,
});
export default function Web2() {
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
					{/* Tekst po lewej */}
					<Col lg={5} className="mx-auto text-start">
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1>
									<AutoTranslate>
										Erstellung responsiver Websites für bessere Online
										Sichtbarkeit
									</AutoTranslate>
								</h1>

								<p>
									<AutoTranslate>
										Ihre Website soll auf dem Handy genauso gut funktionieren wie am Computer. Ich achte auf lesbare Inhalte, kurze Wege zum Kontakt und eine saubere technische SEO-Basis.
									</AutoTranslate>
								</p>

								<Button className="btn-nav" href="#web-design-pricing">
									<span className="text-white">
										<AutoTranslate>WEBSEITEN PREISE</AutoTranslate>
									</span>
								</Button>
							</Card.Body>
						</Card>
					</Col>

					{/* Obrazek po prawej */}
					<Col lg={5} className="mx-auto">
						<Image
							src="/assets/webentwicklung-nettetal-webseiten2.png"
							width={400}
							height={400}
							className="responsive-image"
							alt="Webdesign SEO Nettetal responsive Websites"
						/>
					</Col>
				</Row>
			</Container>
		</MotionFadeIn>
	);
}
