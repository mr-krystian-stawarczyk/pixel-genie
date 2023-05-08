import React from "react";
import { Container, Row } from "react-bootstrap";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
function About2() {
	return (
		<Container className="my-5 py-5">
			<Row>
				<h1>Sprawdz nasza podroz</h1>
			</Row>
			<VerticalTimeline lineColor={"black"} className="text-dark">
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentArrowStyle={{ borderRight: "7px solid  rgb(0, 54, 129)" }}
					date="2011"
					iconStyle={{ background: "rgb(0, 54, 129)", color: "#fff" }}
				>
					<h5>sss</h5>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2013"
					iconStyle={{ background: "rgb(0, 54, 129)", color: "#fff" }}
				>
					<h5> dddd</h5>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2014"
					iconStyle={{ background: "rgb(0, 54, 129)", color: "#fff" }}
				>
					<h5> fff</h5>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2017"
					iconStyle={{ background: "rgb(0, 54, 129)", color: "#fff" }}
				>
					<h5>ggg</h5>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2018"
					iconStyle={{ background: "rgb(0, 54, 129)", color: "#fff" }}
				>
					<h5> dsff</h5>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2019"
					iconStyle={{ background: "rgb(0, 54, 129)", color: "#fff" }}
				>
					<h5>sdgdgsg</h5>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2020"
					iconStyle={{ background: "rgb(0, 54, 129)", color: "#fff" }}
				>
					<h5> dsggsg</h5>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</Container>
	);
}

export default About2;
