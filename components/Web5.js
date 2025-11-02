"use client";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AutoTranslate from "@/components/AutoTranslate";
import MotionFadeIn from "@/components/MotionFadeIn";

export default function Web5() {
	const steps = [
		{
			num: 1,
			title: "Analyse der Kundenanforderungen",
			text: `Der erste Schritt besteht darin, die Kundenanforderungen gründlich zu analysieren und zu verstehen. Treffen Sie sich mit dem Kunden, um Ziele, Vision, Branche, Zielgruppe, Funktionen und andere Details zur Website zu besprechen. Sammeln Sie Informationen wie Designpräferenzen, Funktionalitäten, Inhalte und Konkurrenzwebsites. Dadurch kann das Projekt besser an die Erwartungen des Kunden angepasst werden.`,
		},
		{
			num: 2,
			title: "Design und Entwicklung",
			text: `Basierend auf den gesammelten Informationen beginnen Sie mit dem Design und der Entwicklung der Website. Entwickeln Sie ein grafisches Konzept unter Berücksichtigung des Kundenbrandings, der Ästhetik, Benutzerfreundlichkeit und Responsiveness. Gehen Sie zur Erstellung von Seitenvorlagen, interaktiven Elementen und Navigation über.`,
		},
		{
			num: 3,
			title: "Inhalte erstellen und implementieren",
			text: `Konzentrieren Sie sich dann auf die Erstellung und Implementierung des Website-Inhalts. Bereiten Sie Texte, Bilder, Multimedia und alle anderen Materialien vor. Stellen Sie sicher, dass der Inhalt konsistent, lesbar und ansprechend ist. Beschäftigen Sie sich auch mit der SEO-Optimierung, indem Sie relevante Keywords und Metadaten hinzufügen.`,
		},
		{
			num: 4,
			title: "Testen, Optimieren und Bereitstellen",
			text: `Im letzten Schritt führen Sie Tests, Optimierungen und die Bereitstellung der Website durch. Überprüfen Sie die Funktionalität in allen Browsern und Geräten, korrigieren Sie Fehler und stellen Sie sicher, dass die Website schnell lädt. Danach wird sie veröffentlicht – bereit für den Launch!`,
		},
	];

	return (
		<Container className="my-5 py-5">
			<Row className="text-center my-5">
				<h1>
					<AutoTranslate>Website Erstellungsprozess</AutoTranslate>
				</h1>
			</Row>

			<Row className="justify-content-center text-center align-items-start">
				{steps.map((step, i) => (
					<Col lg={3} className="mx-auto" key={i}>
						<MotionFadeIn
							threshold={0.3}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								duration: 1,
								ease: "easeOut",
								delay: i * 0.3,
							}}
						>
							<Card
								className="border-0 shadow-lg bg-transparent h-100 p-4"
								style={{ minHeight: "40rem" }}
							>
								<h1>{step.num}</h1>
								<h2 className="h5 mb-3">
									<AutoTranslate>{step.title}</AutoTranslate>
								</h2>
								<p className="text-start">
									<AutoTranslate>{step.text}</AutoTranslate>
								</p>
							</Card>
						</MotionFadeIn>
					</Col>
				))}
			</Row>
		</Container>
	);
}
