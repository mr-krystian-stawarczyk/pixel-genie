"use client";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import AutoTranslateArticle from "@/components/AutoTranslateArticle";
import dynamic from "next/dynamic";
const MotionFadeIn = dynamic(() => import("@/components/MotionFadeIn"), {
	ssr: false,
});

export default function Blog1() {
	// ✅ dynamicznie tłumaczone paragrafy HTML
	const paragraph = `
<div>
<p>Unser Blog zeigt Ihnen, wie Sie Webdesign, SEO und Social Media gezielt für Ihr Unternehmen einsetzen.</p>
<p>Wir erklären verständlich, wie Websites besser gefunden werden, wie Sie mehr Anfragen erhalten und wie moderne Technik (React, Next.js) Ihre Website schneller und erfolgreicher macht.</p>
<p>Jede Woche erscheinen neue Artikel – optimiert für Unternehmen in NRW: Nettetal, Viersen, Krefeld, Düsseldorf und Mönchengladbach.</p>
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
				<Row className="justify-content-center align-items-center text-body">
					{/* ✅ Tekst (SEO: H1 pozostaje PL/DE) */}
					<Col lg={5} className="mx-auto my-2">
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1 className="fw-bold text-start">
									Tipps für Webdesign, Social Media und Websites
								</h1>

								<div className="text-start text-body small">
									<AutoTranslateArticle html={paragraph} slug="blog1-text" />
								</div>

								<div className="text-center mt-3">
									<Button className="btn-nav text-white" href="#tips">
										<span className="text-white">Tipps ansehen</span>
									</Button>
								</div>
							</Card.Body>
						</Card>
					</Col>

					{/* ✅ Obrazek */}
					<Col lg={5} className="mx-auto my-2 text-center">
						<Image
							src="/assets/webentwicklung-webagentur-nettetal-price.png"
							width={500}
							height={500}
							className="responsive-image"
							alt="webentwicklung-webagentur-nettetal-price"
							priority
						/>
					</Col>
				</Row>
			</Container>
		</MotionFadeIn>
	);
}
