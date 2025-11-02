"use client";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import MailButtonPremium from "./MailButtonPremium";
import AutoTranslateArticle from "@/components/AutoTranslateArticle";
import MotionFadeIn from "@/components/MotionFadeIn";

function Media1() {
	const paragraph1 = `
		<strong>Pixel Genie</strong> in Nettetal entwickelt Websites,
		die nicht nur optisch begeistern, sondern echte Ergebnisse liefern.
		Wir kombinieren kreatives <a href="/webdesign/" 
		class="text-bold text-text-black bg-white rounded">Webdesign</a>,
		technische <a href="/webentwicklung/" 
		class="text-bold text-text-black bg-white rounded">Webentwicklung</a>
		und <a href="/suchmaschinenoptimierung/" 
		class="text-bold text-text-black bg-white rounded">SEO</a>,
		damit Ihre Online-Präsenz langfristig sichtbar bleibt.
		<br/><br/>
		Ob lokale Unternehmen in <a href="/seo/viersen/" 
		class="text-bold text-text-black bg-white rounded">Viersen</a> oder
		<a href="/webdesign-agentur/duesseldorf/" 
		class="text-bold text-text-black bg-white rounded">Düsseldorf</a> – unser Ansatz
		ist individuell, transparent und auf Wachstum ausgerichtet.
		Keine Baukastenseiten, keine leeren Versprechen – nur ehrliches,
		performantes Webdesign mit klarem Fokus auf Conversion und Nutzererlebnis.
		<br/><br/>
		Mit modernen Technologien wie <strong>React</strong> & <strong>Next.js</strong>
		schaffen wir digitale Erlebnisse, die Vertrauen aufbauen und messbar
		mehr Anfragen generieren. Mehr Besucher, bessere Rankings, echte Resultate.
	`;

	const bottomNote = `
		Kein Risiko – wir beraten ehrlich, transparent und zielorientiert.
	`;

	return (
		<MotionFadeIn
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1, easing: "ease-in-out" }}
			threshold={0.5}
		>
			<Container>
				<Row className="justify-content-center text-center align-items-center">
					<Col>
						<Image
							src="/assets/webdesign-header-welcome.gif"
							width={500}
							height={200}
							alt="Webdesign Agentur Nettetal – Pixel Genie Animation"
							unoptimized
							className="responsive-image rounded"
						/>
					</Col>
				</Row>

				<Row className="justify-content-center text-center align-items-center mt-4">
					<Col lg={10}>
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1 className="fw-bold mb-3">
									Modernes Webdesign & SEO, das Kunden überzeugt
								</h1>

								<Card.Text className="text-start">
									<AutoTranslateArticle html={paragraph1} slug="media1" />
								</Card.Text>

								<MailButtonPremium />

								<p className="mt-3 small text-center">
									<AutoTranslateArticle html={bottomNote} slug="media1-note" />
								</p>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</MotionFadeIn>
	);
}

export default Media1;
