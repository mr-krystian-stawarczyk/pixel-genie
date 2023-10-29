import React from "react";
import Head from "next/head";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
function impressium() {
	const { t } = useTranslation();
	return (
		<Container className=" my-5 py-5">
			<Head>
				<title>Policy in 41334 Nettetal | Pixel Genie Webagentur</title>
				<meta
					name="description"
					content="Erfahren Sie mehr über unsere Datenschutzrichtlinien und Geschäftsbedingungen bei Pixel-Genie. Wir legen Wert auf Transparenz und Kundenfreundlichkeit."
				/>
			</Head>
			<Row className="text-center">
				<h2>Impressium</h2>
			</Row>
			<Row className="justify-content-center align-items-center">
				<Col lg={6} className="mx-auto my-2">
					<Card style={{ width: "18rem" }} className="bg-transparent mx-auto">
						<Card.Body>
							<Card.Title>Angaben gemäß §5 TMG</Card.Title>
							<Card.Text>Pixel Genie Inh.: Krystian Stawarczyk</Card.Text>
							<Card.Text>Fasanenstr. 10 41334 Nettetal</Card.Text>
							<Card.Text>Telefon: +49 (0) 175 621 6441</Card.Text>
							<Card.Text>E-Mail: info@pixel-genie.de</Card.Text>
						</Card.Body>
					</Card>
				</Col>

				<Col lg={6} className="mx-auto my-2">
					<Card style={{ width: "18rem" }} className="bg-transparent mx-auto">
						<Card.Body>
							<Card.Title>Verantwortlich für den Inhalt</Card.Title>
							<Card.Text>gemäß §55 Abs. 2 RStV Krystian Stawarczyk</Card.Text>
							<Card.Text>Fasanenstr. 10 41334 Nettetal</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row className="text-center my-2">
				<h2>{t("policy1")}</h2>
			</Row>
			<Row>
				<h4 className="my-2">{t("policy2")}</h4>
				<h5>{t("policy3")}</h5>
			</Row>

			<Row>
				<h4 className="my-2">{t("policy4")}</h4>
				<h5>{t("policy5")}</h5>
			</Row>
			<Row>
				<h4 className="my-2">{t("policy6")}</h4>
				<h5>{t("policy7")}</h5>
			</Row>
			<Row>
				<h4 className="my-2">{t("policy8")} </h4>
				<h5>{t("policy9")}</h5>
			</Row>
			<Row>
				<h4 className="my-2">{t("policy10")}</h4>
				<h5>{t("policy11")}</h5>
			</Row>
			<Row>
				<h4 className="my-2">{t("policy12")} </h4>
				<h5>{t("policy13")}</h5>
			</Row>
			<Row>
				<h4 className="my-2"> {t("policy14")}</h4>
				<h5>{t("policy15")}</h5>
			</Row>
			<Row className="text-center my-2">
				<h2>Cookies</h2>
			</Row>
			<Row>
				<h4 className="my-2"> {t("policy16")}</h4>
				<h5>{t("policy17")}</h5>
			</Row>
			<Row>
				<h4 className="my-2">{t("policy18")} </h4>
				<h5>{t("policy19")}</h5>
			</Row>
			<Row>
				<h4 className="my-2">{t("policy20")} </h4>
				<h5>{t("policy21")}</h5>
			</Row>
			<Row>
				<h4 className="my-2">{t("policy22")} </h4>
				<h5>{t("policy23")}</h5>
			</Row>
			<Row>
				<h4 className="my-2">{t("policy24")} </h4>
				<h5>{t("policy25")}</h5>
			</Row>
			<Row>
				<h4 className="my-2">{t("policy26")} </h4>
				<h5>{t("policy27")}</h5>
			</Row>
			<Row className="text-center my-2">
				<h2>{t("policy32")}</h2>
			</Row>
			<Row>
				<h4 className="my-2">{t("policy33")}</h4>
				<h5>{t("policy34")}</h5>
			</Row>
			<Row>
				<h4 className="my-2">{t("policy34-1")}</h4>
				<h5>{t("policy35")}</h5>
				<h5>{t("policy36")}</h5>
			</Row>
			<Row>
				<h4 className="my-2">{t("policy37")}</h4>
				<h5>{t("policy38")}</h5>
			</Row>
			<Row>
				<h4 className="my-2">{t("policy39")}</h4>
				<h5>{t("policy40")}</h5>
				<h5>{t("policy40-1")}</h5>
			</Row>
			<Row>
				<h4 className="my-2">{t("policy41")}</h4>
				<h5>{t("policy42")}</h5>
			</Row>
			<Row>
				<h4 className="my-2">{t("policy43")}</h4>
				<h5>{t("policy44")}</h5>
			</Row>
		</Container>
	);
}

export default impressium;
