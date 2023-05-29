import Image from "next/image";
import React from "react";
import { Container, Accordion, Row, Col } from "react-bootstrap";

import { useTranslation } from "react-i18next";
function Header6() {
	const { t } = useTranslation();
	return (
		<Container className=" mb-5 pb-5" id="web-design-faq">
			<Row className="justify-content-center align-items-center">
				<Col lg={4} md={6} xs={12} className="py-5 text-center">
					<Image
						src="/assets/webentwicklung-nettetal-fragen1.png"
						width={300}
						height={300}
						alt="webentwicklung-nettetal-fragen1"
						priority
					/>
					<h4>{t("web117")}</h4>
				</Col>
			</Row>
			<Row className="justify-content-center align-items-center">
				<Col lg={9} className="mx-auto">
					<Accordion className="shadow-lg">
						<Accordion.Item eventKey="0">
							<Accordion.Header>{t("hfaq1")}</Accordion.Header>
							<Accordion.Body>{t("hfaq2")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>{t("hfaq3")}</Accordion.Header>
							<Accordion.Body>{t("hfaq4")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>{t("hfaq5")}</Accordion.Header>
							<Accordion.Body>{t("hfaq6")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="3">
							<Accordion.Header>{t("hfaq7")}</Accordion.Header>
							<Accordion.Body>{t("hfaq8")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="4">
							<Accordion.Header>{t("hfaq9")}</Accordion.Header>
							<Accordion.Body>{t("hfaq10")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="5">
							<Accordion.Header>{t("hfaq11")}</Accordion.Header>
							<Accordion.Body>{t("hfaq12")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="6">
							<Accordion.Header>{t("hfaq13")}</Accordion.Header>
							<Accordion.Body>{t("hfaq14")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="7">
							<Accordion.Header>{t("hfaq15")}</Accordion.Header>
							<Accordion.Body>{t("hfaq16")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="8">
							<Accordion.Header>{t("hfaq17")}</Accordion.Header>
							<Accordion.Body>{t("hfaq118")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="9">
							<Accordion.Header>{t("hfaq19")}</Accordion.Header>
							<Accordion.Body>{t("hfaq20")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="10">
							<Accordion.Header>{t("hfaq21")}</Accordion.Header>
							<Accordion.Body>{t("hfaq22")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="11">
							<Accordion.Header>{t("hfaq23")}</Accordion.Header>
							<Accordion.Body>{t("hfaq24")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="12">
							<Accordion.Header>{t("hfaq25")}</Accordion.Header>
							<Accordion.Body>{t("hfaq26")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="13">
							<Accordion.Header>{t("hfaq27")}</Accordion.Header>
							<Accordion.Body>{t("hfaq28")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="14">
							<Accordion.Header>{t("hfaq29")}</Accordion.Header>
							<Accordion.Body>{t("hfaq30")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="15">
							<Accordion.Header>{t("hfaq31")}</Accordion.Header>
							<Accordion.Body>{t("hfaq32")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="16">
							<Accordion.Header>{t("hfaq33")}</Accordion.Header>
							<Accordion.Body>{t("hfaq34")}</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>
			</Row>
		</Container>
	);
}

export default Header6;
