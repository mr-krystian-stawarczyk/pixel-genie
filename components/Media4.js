"use client";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import AutoTranslateArticle from "@/components/AutoTranslateArticle";
import MotionFadeIn from "@/components/MotionFadeIn";

function Media4() {
	const text = `
<div>
<p>Ob Webdesign, SEO, Social-Media oder Online-Shops – Pixel Genie bietet alles aus einer Hand.</p>
<p>Wir begleiten Sie von der Idee bis zum Launch und sorgen dafür, dass Ihre Website langfristig Ergebnisse liefert.</p>
<p>Lokal, persönlich und effektiv – für Unternehmen, die wachsen wollen.</p>
</div>
`;

	return (
		<MotionFadeIn
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1, easing: "ease-in-out" }}
			threshold={0.5}
		>
			<Container className="mt-5 pt-5">
				<Row className="justify-content-center align-items-center">
					{/* LEWA STRONA - TEKST */}
					<Col lg={5} className="mx-auto my-2">
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1 className="text-start fw-bold">
									Full-Service Webagentur Nettetal
								</h1>

								<div className="text-start">
									<AutoTranslateArticle html={text} slug="media4-text" />
								</div>

								<Button className="btn-nav mt-3" href="#contact">
									<span className="text-white">Jetzt Kontakt aufnehmen</span>
								</Button>
							</Card.Body>
						</Card>
					</Col>

					{/* PRAWA STRONA - OBRAZEK */}
					<Col lg={5} className="mx-auto my-2 text-center">
						<Image
							src="/assets/webentwicklung-nettetal-design-seo4.png"
							width={400}
							height={400}
							className="responsive-image"
							alt="Full Service Webagentur Nettetal"
							loading="lazy"
						/>
					</Col>
				</Row>
			</Container>
		</MotionFadeIn>
	);
}

export default Media4;
