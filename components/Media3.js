"use client";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import AutoTranslateArticle from "@/components/AutoTranslateArticle";
import MotionFadeIn from "@/components/MotionFadeIn";

function Media3() {
	const text = `
<div>
<p>Unsere Websites werden mit modernen Frameworks wie Next.js und React entwickelt – schnell, sicher und SEO-optimiert.</p>
<p>Damit Ihre Seite perfekt performt, bei Google ganz vorne steht und auf jedem Gerät beeindruckt.</p>
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
					{/* LEWA STRONA - OBRAZEK */}
					<Col lg={5} className="mx-auto my-2 text-center">
						<Image
							src="/assets/webentwicklung-nettetal-design-seo3.png"
							width={400}
							height={400}
							className="responsive-image"
							alt="Professionelle Webentwicklung Nettetal"
						/>
					</Col>

					{/* PRAWA STRONA - TEKST */}
					<Col lg={5} className="mx-auto my-2">
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1 className="text-start fw-bold">
									Modernste Technik & SEO Performance
								</h1>

								<div className="text-start">
									<AutoTranslateArticle html={text} slug="media3-text" />
								</div>

								<Button className="btn-nav mt-3" href="#design-nettetal-fragen">
									<span className="text-white">Häufige Fragen</span>
								</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</MotionFadeIn>
	);
}

export default Media3;
