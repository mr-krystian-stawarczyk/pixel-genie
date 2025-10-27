import React from "react";
import { Container, Row } from "react-bootstrap";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import AutoTranslate from "@/components/AutoTranslate";

function About2() {
	const milestones = [
		{
			year: "2016",
			text: "Erste Schritte in der Webentwicklung & der Beginn unserer digitalen Leidenschaft.",
		},
		{
			year: "2016",
			text: "Intensives Lernen – HTML, CSS, JavaScript, UX und Design Thinking.",
		},
		{
			year: "2018",
			text: "Social Media Management & erste Kundenprojekte – der Start der Agentur-DNA.",
		},
		{
			year: "2020",
			text: "Fokus auf Branding & Logos – Marken entwickelt, die im Kopf bleiben.",
		},
		{
			year: "2021",
			text: "SEO Spezialisierung – Performance, Rankings & echte Sichtbarkeit.",
		},
		{
			year: "2022",
			text: "Google UX Design Zertifizierung – nutzerzentrierte Webseiten, die konvertieren.",
		},
		{
			year: "2024",
			text: "Pixel Genie Launch in Nettetal – Webdesign & SEO mit persönlicher Betreuung.",
		},
	];

	return (
		<Container className="overflow-hidden my-5">
			<Row className="text-center mb-4">
				<h2 className="fw-bold display-6">
					<AutoTranslate>
						Unsere Reise – und wie sie Ihnen heute hilft
					</AutoTranslate>
				</h2>
				<p className="text-muted px-4">
					<AutoTranslate>
						Jede Etappe hat uns besser gemacht – und diese Erfahrung bringen wir
						in jedes Webprojekt ein. Konstantes Lernen, klare Werte und echte
						Ergebnisse.
					</AutoTranslate>
				</p>
			</Row>

			<VerticalTimeline lineColor="#003681">
				{milestones.map((item, index) => (
					<VerticalTimelineElement
						key={index}
						date={item.year}
						iconStyle={{ background: "rgb(0, 54, 129)", color: "#fff" }}
						contentArrowStyle={{ borderRight: "7px solid rgb(0, 54, 129)" }}
					>
						<h5 className="text-dark">
							<AutoTranslate>{item.text}</AutoTranslate>
						</h5>
					</VerticalTimelineElement>
				))}
			</VerticalTimeline>
		</Container>
	);
}

export default About2;
