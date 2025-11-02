"use client";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import AutoTranslate from "@/components/AutoTranslate";
import dynamic from "next/dynamic";
const MotionFadeIn = dynamic(() => import("@/components/MotionFadeIn"), {
	ssr: false,
});

function Brand1() {
	return (
		<MotionFadeIn
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1, easing: "ease-in-out" }}
			threshold={0.3}
		>
			<Container className="mt-5 pt-5">
				<Row className="justify-content-center text-center align-items-center">
					<Col lg={5} className="mx-auto my-2">
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1 className="text-start">
									<AutoTranslate>
										Erstellung einer starken Online Marke für Ihr Unternehmen
									</AutoTranslate>
								</h1>

								<Card.Text className="text-start">
									<AutoTranslate>
										Entdecken Sie unsere Branding Dienstleistungen, die Ihnen
										helfen, eine starke Online Marke für Ihr Unternehmen
										aufzubauen. Wir entwerfen ein einzigartiges Logo, passen Ihr
										Markenbild an und entwickeln eine Kommunikationsstrategie,
										die Ihre Sichtbarkeit in Suchmaschinen steigert und neue
										Kunden anzieht.
									</AutoTranslate>
								</Card.Text>

								<Button className="btn-nav" href="#contact">
									<span className="text-white">
										<AutoTranslate>Kontakt</AutoTranslate>
									</span>
								</Button>
							</Card.Body>
						</Card>
					</Col>

					<Col lg={5} className="mx-auto my-2">
						<Image
							src="/assets/webagentur-nettetal-branding-seo1.png"
							width={400}
							height={400}
							className="responsive-image"
							alt="webagentur-nettetal-branding-seo1"
							priority
						/>
					</Col>
				</Row>
			</Container>
		</MotionFadeIn>
	);
}

export default Brand1;
