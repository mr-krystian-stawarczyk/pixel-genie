"use client";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import AutoTranslate from "@/components/AutoTranslate";
import dynamic from "next/dynamic";
const MotionFadeIn = dynamic(() => import("@/components/MotionFadeIn"), {
	ssr: false,
});
function Brand3() {
	return (
		<MotionFadeIn
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1, easing: "ease-in-out" }}
			threshold={0.3}
		>
			<Container className="mt-5 pt-5">
				<Row className="justify-content-center text-center align-items-center">
					{/* TEXT */}
					<Col lg={5} className="mx-auto my-2">
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1 className="text-start">
									<AutoTranslate>
										Starke Markenbekanntheit durch Online Konsistenz
									</AutoTranslate>
								</h1>

								<Card.Text className="text-start">
									<AutoTranslate>
										Der nachhaltigste Erfolg entsteht, wenn Ihre Marke überall
										gleich erkennbar ist – auf der Website, in Social Media, auf
										Druckmaterialien und in der Kundenkommunikation. Wir sorgen
										dafür, dass Ihr Markenauftritt visuell und sprachlich
										einheitlich bleibt, damit Ihre Zielgruppe Vertrauen fasst
										und Sie dauerhaft wiedererkennt. Eine strategische
										Markenführung steigert nicht nur die digitale Sichtbarkeit,
										sondern auch die Conversion Rate und macht Ihr Unternehmen
										im Markt unverwechselbar.
									</AutoTranslate>
								</Card.Text>

								<Button className="btn-nav" href="#branding-nettetal-faq">
									<span className="text-white">
										<AutoTranslate>FAQ zum Branding ansehen</AutoTranslate>
									</span>
								</Button>
							</Card.Body>
						</Card>
					</Col>

					{/* IMAGE */}
					<Col lg={5} className="mx-auto my-2">
						<Image
							src="/assets/webagentur-nettetal-branding-seo3.png"
							width={500}
							height={500}
							className="responsive-image"
							alt="branding-konsistenz-agentur-nettetal"
							priority
						/>
					</Col>
				</Row>
			</Container>
		</MotionFadeIn>
	);
}

export default Brand3;
