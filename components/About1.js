import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

function About1() {
	const { t } = useTranslation();
	const [ref, inView] = useInView({
		threshold: 0.5,
		triggerOnce: false,
	});

	const animateIn = {
		opacity: 1,

		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	};

	const controls = useAnimation();
	useEffect(() => {
		if (inView) {
			controls.start(animateIn);
		}
	}, [inView, controls, animateIn]);

	return (
		<>
			<motion.div ref={ref} animate={controls}>
				<Container className="py-5">
					<Row className="justify-content-center align-items-center">
						<Col lg={5} className="mx-auto my-2 blur">
							<Card className="border-0 bg-transparent ">
								<Card.Body>
									<h1>{t("about1")} </h1>
									<Card.Text>{t("about2")}</Card.Text>
								</Card.Body>
							</Card>
						</Col>{" "}
						<Col lg={5} className="mx-auto my-2 text-center blur">
							<Image
								src="/assets/webentwicklung-nettetal-seo1.png"
								width={380}
								height={400}
								className="responsive-image shadow-lg rounded"
								alt="webagentur-nettetal-webentwicklung-about1"
								priority
							/>
						</Col>
					</Row>
				</Container>
			</motion.div>{" "}
		</>
	);
}

export default About1;
