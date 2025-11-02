"use client";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import AutoTranslate from "@/components/AutoTranslate";
import dynamic from "next/dynamic";
const MotionFadeIn = dynamic(() => import("@/components/MotionFadeIn"), {
	ssr: false,
});
export default function Web4() {
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
										SEO Optimierung für bessere Suchergebnisse
									</AutoTranslate>
								</h1>

								<p>
									<AutoTranslate>
										Bei Pixel Genie Nettetal wissen wir, wie wichtig es ist,
										dass Ihre Website in den Suchergebnissen gut sichtbar ist.
										Daher bieten wir SEO Optimierungsdienste an, die die
										Sichtbarkeit Ihrer Website in Suchmaschinen erhöhen.
										Vertrauen Sie auf unsere Erfahrung und erzielen Sie bessere
										Online Ergebnisse.
									</AutoTranslate>
								</p>

								<Link href="/suchmaschinenoptimierung" className="m-1">
									<Button className="btn-md py-2 btn-nav border-0 shadow-md">
										<AutoTranslate>SEO OPTIMIERUNG</AutoTranslate>
									</Button>
								</Link>
							</Card.Body>
						</Card>
					</Col>

					{/* Obrazek po prawej */}
					<Col lg={5} className="mx-auto">
						<Image
							src="/assets/webentwicklung-nettetal-seo3.png"
							width={400}
							height={400}
							className="responsive-image"
							alt="SEO Optimierung Webdesign Nettetal"
						/>
					</Col>
				</Row>
			</Container>
		</MotionFadeIn>
	);
}
