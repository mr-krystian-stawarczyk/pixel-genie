import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import AutoTranslate from "@/components/AutoTranslate";

function Social5() {
	const controls = [
		useAnimation(),
		useAnimation(),
		useAnimation(),
		useAnimation(),
	];
	const refs = [];
	const inViews = [];

	for (let i = 0; i < 4; i++) {
		const [ref, inView] = useInView({
			threshold: 0.3,
			triggerOnce: true,
		});
		refs.push(ref);
		inViews.push(inView);
	}

	useEffect(() => {
		inViews.forEach((view, i) => {
			if (view) {
				setTimeout(() => {
					controls[i].start({
						opacity: 1,
						y: 0,
						transition: { duration: 1, ease: "easeOut" },
					});
				}, i * 250);
			}
		});
	}, [...inViews, controls]);

	const steps = [
		{
			num: 1,
			title: "Analyse & Strategieentwicklung",
			text: `
				Wir prüfen Ihre aktuelle Sichtbarkeit, analysieren Zielgruppe, 
				Mitbewerber & Content-Potenziale. Danach entwickeln wir eine 
				smarte Social Media Strategie, die perfekt auf Ihre Marke und 
				Kunden in Nettetal zugeschnitten ist.`,
		},
		{
			num: 2,
			title: "Content Design & Redaktionsplan",
			text: `
				Wir erstellen kreative Posts, Videos und Stories, die Ihre Marke 
				visuell stark präsentieren. Alles in einem strukturierten Postingplan,
				damit Ihre Community regelmäßig mit Ihnen interagiert.`,
		},
		{
			num: 3,
			title: "Werbeanzeigen & Lead Generierung",
			text: `
				Mit gezielten Social Ads erreichen wir neue Zielgruppen, steigern 
				Reichweite & Conversions. Jede Kampagne wird datenbasiert optimiert — 
				damit kein Budget verschwendet wird.`,
		},
		{
			num: 4,
			title: "Reporting, Analyse & Optimierung",
			text: `
				Wir liefern klare, verständliche KPIs, Insights und 
				konkrete Handlungsempfehlungen. So entwickeln wir Ihre Social Media 
				Präsenz Monat für Monat weiter – nachhaltig und profitabel.`,
		},
	];

	return (
		<Container className="my-5 py-5" id="social-media-nettetal-process">
			<Row className="justify-content-center text-center align-items-start">
				{steps.map((item, i) => (
					<Col lg={3} className="mx-auto my-3" key={i}>
						<motion.div
							ref={refs[i]}
							animate={controls[i]}
							initial={{ opacity: 0, y: 50 }}
						>
							<Card className="border-0 bg-transparent shadow-lg p-4 h-100">
								<h1 className="mb-3">{item.num}</h1>
								<h2 className="h5 text-start">
									<AutoTranslate>{item.title}</AutoTranslate>
								</h2>
								<Card.Text className="text-start">
									<AutoTranslate>{item.text}</AutoTranslate>
								</Card.Text>
							</Card>
						</motion.div>
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default Social5;
