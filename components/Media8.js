import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { Container, Accordion, Row, Col, Card } from "react-bootstrap";

import { useTranslation } from "react-i18next";
function Media8() {
	const { t } = useTranslation();
	return (
		<Container className=" mb-5 pb-5" id="design-nettetal-fragen">
			<Row className="justify-content-center align-items-center">
				<Col lg={4} md={6} xs={12} className="py-5 text-center">
					<Image
						src="/assets/webentwicklung-nettetal-fragen1.png"
						width={300}
						height={300}
						alt="webentwicklung-nettetal-webagentur-fragen1"
					/>
					<h4>{t("web117")}</h4>
				</Col>
			</Row>
			<Row className="justify-content-center align-items-center">
				<Col lg={9} className="mx-auto">
					<Accordion className="shadow-lg">
						<Accordion.Item eventKey="0">
							<Accordion.Header>{t("design53")}</Accordion.Header>
							<Accordion.Body>{t("design54")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>{t("design55")}</Accordion.Header>
							<Accordion.Body>{t("design56")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>{t("design57")}</Accordion.Header>
							<Accordion.Body>{t("design58")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="3">
							<Accordion.Header>{t("design59")}</Accordion.Header>
							<Accordion.Body>{t("design60")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="4">
							<Accordion.Header>{t("design61")}</Accordion.Header>
							<Accordion.Body>{t("design62")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="5">
							<Accordion.Header>{t("design63")}</Accordion.Header>
							<Accordion.Body>{t("design64")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="6">
							<Accordion.Header>{t("design65")}</Accordion.Header>
							<Accordion.Body>{t("design66")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="7">
							<Accordion.Header>{t("design67")}</Accordion.Header>
							<Accordion.Body>{t("design68")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="8">
							<Accordion.Header>{t("design69")}</Accordion.Header>
							<Accordion.Body>{t("design70")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="9">
							<Accordion.Header>{t("design71")}</Accordion.Header>
							<Accordion.Body>{t("design72")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="10">
							<Accordion.Header>{t("design73")}</Accordion.Header>
							<Accordion.Body>{t("design74")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="11">
							<Accordion.Header>{t("design75")}</Accordion.Header>
							<Accordion.Body>{t("design76")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="12">
							<Accordion.Header>{t("design77")}</Accordion.Header>
							<Accordion.Body>{t("design78")}</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="13">
							<Accordion.Header>{t("design79")}</Accordion.Header>
							<Accordion.Body>{t("design80")}</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>{" "}
			</Row>
		</Container>
	);
}

export default Media8;
