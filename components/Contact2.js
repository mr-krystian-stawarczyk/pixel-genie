import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SplitTextJS from "split-text-js";
import gsap from "gsap";
import { Link } from "react-scroll";
import Image from "next/image";
import {
	AiOutlineFacebook,
	AiOutlineLinkedin,
	AiOutlineInstagram,
} from "react-icons/ai";
function Contact2() {
	return (
		<Container className="mt-5 pt-5">
			<Row className="justify-content-center text-center align-items-center">
				<Col lg={5} className="mx-auto">
					<Card className="border-0 text-dark " style={{ width: "25rem" }}>
						<Card.Body>
							<h1>Sprawdz rowniez nasze social media</h1>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>{" "}
				<Col lg={5} className="mx-auto">
					<AiOutlineFacebook style={{ fontSize: "8rem" }} />
					<AiOutlineLinkedin style={{ fontSize: "8rem" }} />
					<AiOutlineInstagram style={{ fontSize: "8rem" }} />
				</Col>{" "}
			</Row>
		</Container>
	);
}

export default Contact2;
