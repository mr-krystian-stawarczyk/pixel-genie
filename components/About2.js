import React from "react";
import { Container, Row } from "react-bootstrap";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTranslation } from "react-i18next";

function About2() {
	const { t } = useTranslation();
	return (
		<Container className="overflow-hidden">
			<Row>
				<h1>{t("about11")} </h1>
			</Row>
			<VerticalTimeline lineColor={"black"} className="text-dark">
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentArrowStyle={{ borderRight: "7px solid  rgb(0, 54, 129)" }}
					date="2016"
					iconStyle={{ background: "rgb(0, 54, 129)", color: "#fff" }}
				>
					<h5>{t("about12")} </h5>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2016"
					iconStyle={{ background: "rgb(0, 54, 129)", color: "#fff" }}
					contentArrowStyle={{ borderRight: "7px solid  rgb(0, 54, 129)" }}
				>
					<h5> {t("about13")} </h5>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2018"
					iconStyle={{ background: "rgb(0, 54, 129)", color: "#fff" }}
					contentArrowStyle={{ borderRight: "7px solid  rgb(0, 54, 129)" }}
				>
					<h5>{t("about14")} </h5>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2020"
					iconStyle={{ background: "rgb(0, 54, 129)", color: "#fff" }}
					contentArrowStyle={{ borderRight: "7px solid  rgb(0, 54, 129)" }}
				>
					<h5>{t("about15")} </h5>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2021"
					iconStyle={{ background: "rgb(0, 54, 129)", color: "#fff" }}
					contentArrowStyle={{ borderRight: "7px solid  rgb(0, 54, 129)" }}
				>
					<h5> {t("about16")} </h5>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2022"
					iconStyle={{ background: "rgb(0, 54, 129)", color: "#fff" }}
					contentArrowStyle={{ borderRight: "7px solid  rgb(0, 54, 129)" }}
				>
					<h5>{t("about17")} </h5>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2024"
					iconStyle={{ background: "rgb(0, 54, 129)", color: "#fff" }}
					contentArrowStyle={{ borderRight: "7px solid  rgb(0, 54, 129)" }}
				>
					<h5> {t("about18")} </h5>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</Container>
	);
}

export default About2;
