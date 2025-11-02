"use client";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import AutoTranslateArticle from "@/components/AutoTranslateArticle";
import dynamic from "next/dynamic";
const MotionFadeIn = dynamic(() => import("@/components/MotionFadeIn"), {
	ssr: false,
});
function Media2() {
	const text = `
<div>
<p>Wir gestalten Websites, die Emotionen wecken und Vertrauen schaffen.</p>
<p>Mit starkem Fokus auf Benutzerfreundlichkeit, Schnelligkeit und Performance sorgt unser Design dafür, dass Besucher zu Kunden werden.</p>
<p>Ideal für lokale Unternehmen, Dienstleister und E-Commerce-Shops.</p>
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
									Einzigartiges Design, das verkauft
								</h1>

								<div className="text-start">
									<AutoTranslateArticle html={text} slug="media2-text" />
								</div>

								<Button className="btn-nav mt-3" href="#design-nettetal-preis">
									<span className="text-white">Preise & Pakete ansehen</span>
								</Button>
							</Card.Body>
						</Card>
					</Col>

					{/* PRAWA STRONA - OBRAZEK */}
					<Col lg={5} className="mx-auto my-2 text-center">
						<Image
							src="/assets/webentwicklung-nettetal-design-seo2.png"
							width={400}
							height={400}
							className="responsive-image"
							alt="Webdesign Nettetal SEO Optimierung"
							loading="lazy"
						/>
					</Col>
				</Row>
			</Container>
		</MotionFadeIn>
	);
}

export default Media2;
