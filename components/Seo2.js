"use client";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import AutoTranslate from "@/components/AutoTranslate";
import dynamic from "next/dynamic";
const MotionFadeIn = dynamic(() => import("@/components/MotionFadeIn"), {
	ssr: false,
});
export default function Seo2() {
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
					{/* Obrazek */}
					<Col lg={5} className="mx-auto my-2">
						<Image
							src="/assets/SEO-webentwicklung-nettetal-2.png"
							width={400}
							height={400}
							className="responsive-image"
							alt="SEO-webentwicklung-nettetal-2"
						/>
					</Col>

					{/* Tekst */}
					<Col lg={5} className="mx-auto my-2">
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1 className="text-start">
									<AutoTranslate>
										SEO Audit zur besseren Optimierung der Website
									</AutoTranslate>
								</h1>

								<Card.Text className="text-start">
									<AutoTranslate>
										Pixel Genie Nettetal bietet SEO Audit Services an, die Ihnen
										dabei helfen, die Stärken und Schwächen Ihrer Website in
										Bezug auf die SEO Optimierung zu identifizieren. Unser Team
										von Experten führt eine umfassende Analyse durch und schlägt
										konkrete Verbesserungsstrategien vor, damit Sie das volle
										Potenzial Ihrer Website in Suchmaschinen ausschöpfen können.
									</AutoTranslate>
								</Card.Text>

								<Button className="btn-nav" href="#seofaq">
									<span className="text-white">
										<AutoTranslate>SEO NETTETAL FRAGEN</AutoTranslate>
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
