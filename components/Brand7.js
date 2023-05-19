import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { Container, Accordion, Row, Col, Card } from "react-bootstrap";

import { useTranslation } from "react-i18next";
function Brand7() {
	const { t } = useTranslation();
	return (
		<Container className=" mb-5 pb-5" id="branding-nettetal-faq">
			<Row className="justify-content-center align-items-center">
				<Col lg={4} md={6} xs={12} className="py-5 text-center">
					<Image
						src="/assets/webentwicklung-nettetal-fragen1.png"
						width={300}
						height={300}
						alt="webentwicklung-nettetal-fragen1"
					/>
					<h4>{t("web117")}</h4>
				</Col>
			</Row>
			<Row className="justify-content-center align-items-center">
				<Col lg={9} className="mx-auto">
					<Accordion className="shadow-lg">
						<Accordion.Item eventKey="0">
							<Accordion.Header>{t("branding1")}</Accordion.Header>
							<Accordion.Body>{t("branding2")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>{t("branding3")}</Accordion.Header>
							<Accordion.Body>{t("branding4")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>{t("branding5")}</Accordion.Header>
							<Accordion.Body>{t("branding6")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="3">
							<Accordion.Header>{t("branding7")}</Accordion.Header>
							<Accordion.Body>{t("branding8")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="4">
							<Accordion.Header>{t("branding9")}</Accordion.Header>
							<Accordion.Body>{t("branding10")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="5">
							<Accordion.Header>{t("branding11")}</Accordion.Header>
							<Accordion.Body>{t("branding12")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="6">
							<Accordion.Header>{t("branding13")}</Accordion.Header>
							<Accordion.Body>{t("branding14")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="7">
							<Accordion.Header>{t("branding15")}</Accordion.Header>
							<Accordion.Body>{t("branding16")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="8">
							<Accordion.Header>{t("branding17")}</Accordion.Header>
							<Accordion.Body>{t("branding18")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="9">
							<Accordion.Header>{t("branding19")}</Accordion.Header>
							<Accordion.Body>{t("branding20")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="10">
							<Accordion.Header>{t("branding21")}</Accordion.Header>
							<Accordion.Body>{t("branding22")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="11">
							<Accordion.Header>{t("branding23")}</Accordion.Header>
							<Accordion.Body>{t("branding24")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="12">
							<Accordion.Header>{t("branding25")}</Accordion.Header>
							<Accordion.Body>{t("branding26")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="13">
							<Accordion.Header>{t("branding27")}</Accordion.Header>
							<Accordion.Body>{t("branding28")}</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>{" "}
			</Row>
		</Container>
	);
}

export default Brand7;
