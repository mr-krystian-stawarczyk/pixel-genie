import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";
import {
	AiOutlineFacebook,
	AiFillGithub,
	AiOutlineLinkedin,
} from "react-icons/ai";
import { useTranslation } from "react-i18next";

function Contact2() {
	const { t } = useTranslation();
	return (
		<Container className="my-5 py-5">
			<Row className="justify-content-center text-center align-items-center">
				<Col lg={5} className="mx-auto">
					<Card className="border-0 bg-transparent">
						<Card.Body>
							<h2>{t("kontakt7")}</h2>
							<Card.Text>{t("kontakt8")}</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={5} className="mx-auto">
					<Link
						href="https://www.facebook.com/pixelgeniewebagentur"
						className="contact-links"
						target="_blank"
					>
						<AiOutlineFacebook
							style={{ fontSize: "8rem" }}
							className="contact-icons"
						/>
					</Link>
					<Link
						href="https://www.linkedin.com/in/krystian-stawarczyk-240476212/"
						className="contact-links"
						target="_blank"
					>
						<AiOutlineLinkedin
							style={{ fontSize: "8rem" }}
							className="contact-icons"
						/>
					</Link>
					<Link
						href="https://github.com/mr-krystian-stawarczyk"
						className="contact-links"
						target="_blank"
					>
						<AiFillGithub
							style={{ fontSize: "8rem" }}
							className="contact-icons"
						/>
					</Link>
				</Col>
			</Row>
		</Container>
	);
}

export default Contact2;
