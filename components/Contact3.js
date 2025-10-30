import Image from "next/image";
import React from "react";
import { Container, Accordion, Row, Col } from "react-bootstrap";

import { useTranslation } from "react-i18next";
function Contact3() {
	const { t } = useTranslation();
	return (
		<Container className=" mb-5 pb-5" id="web-design-faq">
			<Row className="justify-content-center align-items-center">
				<Col lg={4} md={6} xs={12} className="py-5 text-center">
					<Image
						src="/assets/webentwicklung-nettetal-fragen1.webp"
						width={320}
						height={320}
						alt="webentwicklung-nettetal-webseiten-fragen1"
						loading="lazy"
						decoding="async"
						sizes="(max-width: 480px) 60vw, (max-width: 768px) 40vw, 320px"
					/>
					<h2>{t("web117")}</h2>
				</Col>
			</Row>
			<Row className="justify-content-center align-items-center">
				<Col lg={9} className="mx-auto">
					<Accordion className="shadow-lg">
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
						<Accordion.Item eventKey="16">
							<Accordion.Header>{t("web118")}</Accordion.Header>
							<Accordion.Body>{t("web119")}</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>
			</Row>
		</Container>
	);
}

export default Contact3;
