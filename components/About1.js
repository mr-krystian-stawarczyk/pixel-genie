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
						<Col
							xs={{ span: 12, order: 2 }}
							lg={{ span: 5, order: 1 }}
							className="mx-auto my-2 blur"
						>
							<Card className="border-0 bg-transparent ">
								<Card.Body>
									<h1 className="text-bold">{t("about1")} </h1>
									<Card.Text>{t("about2")}</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col
							xs={{ span: 12, order: 1 }}
							lg={{ span: 5, order: 2 }}
							className="mx-auto my-5 text-center "
						>
							<div className="image-container">
								<Image
									src="/assets/webentwicklung-nettetal-seo1.png"
									width={380}
									height={400}
									className="foreground-image responsive-image  rounded"
									alt="webagentur-nettetal-webentwicklung-about1"
									priority
								/>
								<Image
									src="/assets/mypictureframe.gif"
									width={400}
									height={515}
									className="background-image responsive-image shadow-lg rounded"
									alt="webagentur-nettetal-webentwicklung-about1"
									priority
								/>
							</div>
						</Col>
					</Row>
				</Container>
			</motion.div>
		</>
	);
}

export default About1;
