import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { Container, Accordion, Row, Col, Card } from "react-bootstrap";

import { useTranslation } from "react-i18next";
function Seo7() {
	const { t } = useTranslation();
	return (
		<Container className=" mb-5 pb-5" id="web-design-faq">
			<Row className="justify-content-center align-items-center">
				<Col lg={4} md={6} xs={12} className="py-5 text-center">
					<Image
						src="/assets/webentwicklung-nettetal-fragen1.png"
						width={300}
						height={300}
						alt="SEO-webentwicklung-nettetal-fragen1"
					/>
					<h4>{t("web117")}</h4>
				</Col>
			</Row>
			<Row className="justify-content-center align-items-center">
				<Col lg={9} className="mx-auto">
					<Accordion className="shadow-lg">
						<Accordion.Item eventKey="0">
							<Accordion.Header>{t("seo63")}</Accordion.Header>
							<Accordion.Body>{t("seo64")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>{t("seo65")}</Accordion.Header>
							<Accordion.Body>{t("seo66")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>{t("seo67")}</Accordion.Header>
							<Accordion.Body>{t("seo68")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="3">
							<Accordion.Header>{t("seo69")}</Accordion.Header>
							<Accordion.Body>{t("seo70")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="4">
							<Accordion.Header>{t("seo71")}</Accordion.Header>
							<Accordion.Body>{t("seo72")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="5">
							<Accordion.Header>{t("seo73")}</Accordion.Header>
							<Accordion.Body>{t("seo74")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="6">
							<Accordion.Header>{t("seo75")}</Accordion.Header>
							<Accordion.Body>{t("seo76")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="7">
							<Accordion.Header>{t("seo77")}</Accordion.Header>
							<Accordion.Body>{t("seo78")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="8">
							<Accordion.Header>{t("seo79")}</Accordion.Header>
							<Accordion.Body>{t("seo80")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="9">
							<Accordion.Header>{t("seo81")}</Accordion.Header>
							<Accordion.Body>{t("seo82")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="10">
							<Accordion.Header>{t("seo83")}</Accordion.Header>
							<Accordion.Body>{t("seo84")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="11">
							<Accordion.Header>{t("seo85")}</Accordion.Header>
							<Accordion.Body>{t("seo86")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="12">
							<Accordion.Header>{t("seo87")}</Accordion.Header>
							<Accordion.Body>{t("seo88")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="13">
							<Accordion.Header>{t("seo89")}</Accordion.Header>
							<Accordion.Body>{t("seo90")}</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>{" "}
			</Row>
		</Container>
	);
}

export default Seo7;
