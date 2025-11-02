"use client";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import AutoTranslate from "@/components/AutoTranslate";
import dynamic from "next/dynamic";
const MotionFadeIn = dynamic(() => import("@/components/MotionFadeIn"), {
	ssr: false,
});
export default function Web3() {
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
					<Col lg={5} className="mx-auto">
						<Image
							src="/assets/webentwicklung-nettetal-webseiten3.png"
							width={400}
							height={400}
							className="responsive-image"
							alt="Webdesign Trends Pixel Genie Nettetal"
						/>
					</Col>

					<Col lg={5} className="mx-auto text-start">
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1>
									<AutoTranslate>
										Webdesign nach den neuesten Trends
									</AutoTranslate>
								</h1>

								<p>
									<AutoTranslate>
										Sie möchten eine moderne Website, die den neuesten Trends
										entspricht? Das Pixel Genie Team aus Nettetal hat die Lösung
										für Sie! Wir gestalten einzigartige Websites, die nicht nur
										durch ihr Aussehen beeindrucken, sondern auch funktional und
										auf Ihre Geschäftsziele zugeschnitten sind.
									</AutoTranslate>
								</p>

								<Button className="btn-nav" href="#web-design-faq">
									<span className="text-white">
										<AutoTranslate>PIXEL GENIE WEBSEITEN FRAGEN</AutoTranslate>
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
