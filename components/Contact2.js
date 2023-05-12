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
import { useTranslation } from "react-i18next";
function Contact2() {
	const { t } = useTranslation();
	return (
		<Container className="my-5 py-5">
			<Row className="justify-content-center text-center align-items-center">
				<Col lg={5} className="mx-auto">
					<Card className="border-0 bg-transparent" style={{ width: "25rem" }}>
						<Card.Body>
							<h2>{t("kontakt7")}</h2>
							<Card.Text>{t("kontakt8")}</Card.Text>
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
