import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { Container, Accordion, Row, Col, Card } from "react-bootstrap";

import { useTranslation } from "react-i18next";
function Social7() {
	const { t } = useTranslation();
	return (
		<Container className=" mb-5 pb-5" id="social-media-nettetal-fragen">
			<Row className="justify-content-center align-items-center">
				<Col lg={4} md={6} xs={12} className="py-5 text-center">
					<Image
						src="/assets/webentwicklung-nettetal-fragen1.png"
						width={300}
						height={300}
						alt="webentwicklung-nettetal-fragen"
					/>
					<h4>{t("web117")} </h4>
				</Col>
			</Row>
			<Row className="justify-content-center align-items-center">
				<Col lg={9} className="mx-auto">
					<Accordion className="shadow-lg">
						<Accordion.Item eventKey="0">
							<Accordion.Header>{t("socialmedia-faq1")}</Accordion.Header>
							<Accordion.Body>{t("socialmedia-faq2")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>{t("socialmedia-faq3")}</Accordion.Header>
							<Accordion.Body>{t("socialmedia-faq4")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>{t("socialmedia-faq5")}</Accordion.Header>
							<Accordion.Body>{t("socialmedia-faq6")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="3">
							<Accordion.Header>{t("socialmedia-faq7")}</Accordion.Header>
							<Accordion.Body>{t("socialmedia-faq8")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="4">
							<Accordion.Header>{t("socialmedia-faq9")}</Accordion.Header>
							<Accordion.Body>{t("socialmedia-faq10")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="5">
							<Accordion.Header>{t("socialmedia-faq11")}</Accordion.Header>
							<Accordion.Body>{t("socialmedia-faq12")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="6">
							<Accordion.Header>{t("socialmedia-faq13")}</Accordion.Header>
							<Accordion.Body>{t("socialmedia-faq14")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="7">
							<Accordion.Header>{t("socialmedia-faq15")}</Accordion.Header>
							<Accordion.Body>{t("socialmedia-faq16")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="8">
							<Accordion.Header>{t("socialmedia-faq17")}</Accordion.Header>
							<Accordion.Body>{t("socialmedia-faq18")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="9">
							<Accordion.Header>{t("socialmedia-faq19")}</Accordion.Header>
							<Accordion.Body>{t("socialmedia-faq20")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="10">
							<Accordion.Header>{t("socialmedia-faq21")}</Accordion.Header>
							<Accordion.Body>{t("socialmedia-faq22")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="11">
							<Accordion.Header>{t("socialmedia-faq23")}</Accordion.Header>
							<Accordion.Body>{t("socialmedia-faq24")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="12">
							<Accordion.Header>{t("socialmedia-faq25")}</Accordion.Header>
							<Accordion.Body>{t("socialmedia-faq26")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="13">
							<Accordion.Header>{t("socialmedia-faq27")}</Accordion.Header>
							<Accordion.Body>{t("socialmedia-faq28")}</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>{" "}
			</Row>
		</Container>
	);
}

export default Social7;
