import Image from "next/image";
import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useTranslation } from "react-i18next";
function Contact1() {
	const { t } = useTranslation();
	return (
		<Container>
			<Row className="my-5 py-5 justify-content-center text-center align-items-center">
				<Col lg={4} className="m-3">
					{" "}
					<Card style={{ width: "18rem" }} className="bg-transparent">
						<Card.Body>
							<AiOutlinePhone style={{ fontSize: "4rem" }} />
							<Card.Title>{t("kontakt1")}</Card.Title>
							<Card.Text>173534346</Card.Text>
							<Button className="btn-nav">{t("kontakt2")}</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={4} className="m-3">
					{" "}
					<Card style={{ width: "18rem" }} className="bg-transparent">
						<Card.Body>
							<AiOutlineMail style={{ fontSize: "4rem" }} />
							<Card.Title>{t("kontakt3")}</Card.Title>
							<Card.Text>info@pixel-genie.de</Card.Text>
							<Button className="btn-nav">{t("kontakt4")}</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={4} className="m-3">
					<Card style={{ width: "18rem" }} className="bg-transparent">
						<Card.Body>
							{" "}
							<HiOutlineLocationMarker style={{ fontSize: "4rem" }} />
							<Card.Title>{t("kontakt5")}</Card.Title>
							<Card.Text>Fasanenstr 41134 Nettetal</Card.Text>
							<Button className="btn-nav">{t("kontakt6")}</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Contact1;
