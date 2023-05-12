import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { Container, Accordion, Row, Col, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
function About3() {
	const [ref, inView] = useInView({
		threshold: 0.5, // określa część komponentu, która musi być widoczna, aby został uznany za widoczny
		triggerOnce: false, // określa, czy zdarzenie wchodzenia w widok ma być wywołane tylko raz
	});

	const animateIn = {
		opacity: 1,

		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	};

	const animateOut = {
		opacity: 0,

		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	};

	const controls = useAnimation();
	useEffect(() => {
		if (inView) {
			// komponent jest widoczny, więc można uruchomić animację
			controls.start(animateIn);
		} else {
			// komponent jest niewidoczny, więc można uruchomić animację wyjścia
			controls.start(animateOut);
		}
	}, [inView, controls, animateIn, animateOut]);
	const { t } = useTranslation();
	return (
		<motion.div ref={ref} animate={controls}>
			<Container className="my-5 py-5" id="web-design-faq">
				{" "}
				<Row className="text-center my-3">
					<h1 className="my-5">{t("about19")} </h1>
					<h3>{t("about20")}</h3>
				</Row>
				<Row className="justify-content-center align-items-center">
					<Col lg={9} className="mx-auto">
						<Accordion>
							<Accordion.Item eventKey="0">
								<Accordion.Header>{t("about21")}</Accordion.Header>
								<Accordion.Body>{t("about22")}</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="1">
								<Accordion.Header>{t("about23")}</Accordion.Header>
								<Accordion.Body>{t("about24")}</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="2">
								<Accordion.Header> {t("about25")} </Accordion.Header>
								<Accordion.Body>{t("about26")}</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="3">
								<Accordion.Header>{t("about27")}</Accordion.Header>
								<Accordion.Body>{t("about28")}</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="4">
								<Accordion.Header>{t("about29")}</Accordion.Header>
								<Accordion.Body>{t("about30")}</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="5">
								<Accordion.Header> {t("about31")} </Accordion.Header>
								<Accordion.Body>{t("about32")}</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="6">
								<Accordion.Header> {t("about33")} </Accordion.Header>
								<Accordion.Body>{t("about34")}</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Col>{" "}
				</Row>
			</Container>
		</motion.div>
	);
}

export default About3;
