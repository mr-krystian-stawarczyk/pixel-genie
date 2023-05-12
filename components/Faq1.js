import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { Container, Accordion, Row, Col, Card } from "react-bootstrap";

import { useTranslation } from "react-i18next";
function Faq1() {
	const { t } = useTranslation();
	return (
		<Container className="my-5 py-5" id="web-design-faq">
			{" "}
			<Row className="text-center my-3">
				<h1 className="my-5">{t("web117")}</h1>
			</Row>
			<Row className="justify-content-center align-items-center">
				<Col lg={9} className="mx-auto">
					<Accordion>
						<Accordion.Item eventKey="0">
							<Accordion.Header>{t("web85")}</Accordion.Header>
							<Accordion.Body>{t("web86")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>{t("web87")}</Accordion.Header>
							<Accordion.Body>{t("web88")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>{t("web89")}</Accordion.Header>
							<Accordion.Body>{t("web90")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="3">
							<Accordion.Header>{t("web91")}</Accordion.Header>
							<Accordion.Body>{t("web92")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="4">
							<Accordion.Header>{t("web93")}</Accordion.Header>
							<Accordion.Body>{t("web94")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="5">
							<Accordion.Header>{t("web95")}</Accordion.Header>
							<Accordion.Body>{t("web96")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="6">
							<Accordion.Header>{t("web97")}</Accordion.Header>
							<Accordion.Body>{t("web98")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="7">
							<Accordion.Header>{t("web99")}</Accordion.Header>
							<Accordion.Body>{t("web100")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="8">
							<Accordion.Header>{t("web101")}</Accordion.Header>
							<Accordion.Body>{t("web102")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="9">
							<Accordion.Header>{t("web103")}</Accordion.Header>
							<Accordion.Body>{t("web104")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="10">
							<Accordion.Header>{t("web105")}</Accordion.Header>
							<Accordion.Body>{t("web106")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="11">
							<Accordion.Header>{t("web107")}</Accordion.Header>
							<Accordion.Body>{t("web108")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="12">
							<Accordion.Header>{t("web109")}</Accordion.Header>
							<Accordion.Body>{t("web110")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="13">
							<Accordion.Header>{t("web111")}</Accordion.Header>
							<Accordion.Body>{t("web112")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="14">
							<Accordion.Header>{t("web113")}</Accordion.Header>
							<Accordion.Body>{t("web114")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="15">
							<Accordion.Header>{t("web115")}</Accordion.Header>
							<Accordion.Body>{t("web116")}</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>{" "}
				<Col lg={2}>
					{" "}
					<Image
						src="/assets/faq3.png"
						width={300}
						height={400}
						alt="faq-section1-image"
					/>
				</Col>{" "}
			</Row>
		</Container>
	);
}

export default Faq1;
