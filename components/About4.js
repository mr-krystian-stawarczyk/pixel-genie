import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
function About4() {
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
			<Container className="my-5 py-5">
				<Row className="text-center my-5">
					<h1>{t("about3")}</h1>
					<h3>{t("about4")}</h3>
				</Row>
				<Row className="justify-content-center text-center align-items-center">
					<Col lg={3} className="mx-auto">
						<Card className="border-0 bg-transparent ">
							<Card.Body>
								<h1>1</h1>
								<Card.Text>{t("about5")}</Card.Text>
								<Card.Text>{t("about6")}</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={3} className="mx-auto">
						<Card className="border-0 bg-transparent ">
							<Card.Body>
								<h1>2</h1>
								<Card.Text>{t("about7")}</Card.Text>
								<Card.Text>{t("about8")}</Card.Text>
							</Card.Body>
						</Card>
					</Col>{" "}
					<Col lg={3} className="mx-auto">
						<Card className="border-0 bg-transparent ">
							<Card.Body>
								<h1>3</h1>
								<Card.Text>{t("about9")}</Card.Text>
								<Card.Text>{t("about10")}</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</motion.div>
	);
}

export default About4;
