"use client";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AutoTranslate from "@/components/AutoTranslate";
import dynamic from "next/dynamic";
const MotionFadeIn = dynamic(() => import("@/components/MotionFadeIn"), {
	ssr: false,
});
export default function Seo5() {
	return (
		<Container className="my-5 py-5" id="process">
			<Row className="justify-content-center text-center align-items-center">
				{/* 1 */}
				<Col lg={3} className="mx-auto my-2">
					<MotionFadeIn
						threshold={0.4}
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.8, ease: "easeInOut" }}
					>
						<Card
							className="border-0 bg-transparent shadow-lg"
							style={{ height: "28rem" }}
						>
							<Card.Body>
								<h1>1</h1>
								<h2>
									<AutoTranslate>
										SEO Audit und Wettbewerbsanalyse
									</AutoTranslate>
								</h2>
								<Card.Text>
									<AutoTranslate>
										Unser SEO Strategieprozess beginnt mit einem umfangreichen
										SEO Audit und einer Wettbewerbsanalyse für Ihre Pixel Genie
										Nettetal SEO Website. Wir analysieren technische Aspekte
										Ihrer Website wie Struktur, Metadaten und Ladezeiten, um
										Verbesserungsbereiche zu identifizieren.
									</AutoTranslate>
								</Card.Text>
							</Card.Body>
						</Card>
					</MotionFadeIn>
				</Col>

				{/* 2 */}
				<Col lg={3} className="mx-auto my-2">
					<MotionFadeIn
						threshold={0.4}
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
					>
						<Card
							className="border-0 bg-transparent shadow-lg"
							style={{ height: "28rem" }}
						>
							<Card.Body>
								<h1>2</h1>
								<h2>
									<AutoTranslate>Strategieplanung und Keywords</AutoTranslate>
								</h2>
								<Card.Text>
									<AutoTranslate>
										Nach dem SEO Audit werden wir eine maßgeschneiderte SEO
										Strategie entwickeln. Wir erstellen eine Liste relevanter
										Keywords und optimieren Inhalte, damit sie
										benutzerfreundlich und SEO-optimiert sind.
									</AutoTranslate>
								</Card.Text>
							</Card.Body>
						</Card>
					</MotionFadeIn>
				</Col>

				{/* 3 */}
				<Col lg={3} className="mx-auto my-2">
					<MotionFadeIn
						threshold={0.4}
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
					>
						<Card
							className="border-0 bg-transparent shadow-lg"
							style={{ height: "28rem" }}
						>
							<Card.Body>
								<h1>3</h1>
								<h2>
									<AutoTranslate>
										Technische Optimierung und Content Erstellung
									</AutoTranslate>
								</h2>
								<Card.Text>
									<AutoTranslate>
										Wir verbessern Navigation, Struktur, Meta-Tags und Inhalte,
										um sicherzustellen, dass Ihre Website technisch einwandfrei
										und für Suchmaschinen attraktiv ist.
									</AutoTranslate>
								</Card.Text>
							</Card.Body>
						</Card>
					</MotionFadeIn>
				</Col>

				{/* 4 */}
				<Col lg={3} className="mx-auto my-2">
					<MotionFadeIn
						threshold={0.4}
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.8, ease: "easeInOut", delay: 0.9 }}
					>
						<Card
							className="border-0 bg-transparent shadow-lg"
							style={{ height: "28rem" }}
						>
							<Card.Body>
								<h1>4</h1>
								<h2>
									<AutoTranslate>
										Überwachung, Analyse und Optimierung
									</AutoTranslate>
								</h2>
								<Card.Text>
									<AutoTranslate>
										Wir überwachen laufend Ihr Ranking, analysieren
										Performance-Daten und optimieren Ihre SEO-Strategie
										kontinuierlich für maximale Ergebnisse.
									</AutoTranslate>
								</Card.Text>
							</Card.Body>
						</Card>
					</MotionFadeIn>
				</Col>
			</Row>
		</Container>
	);
}
