import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
function Media1() {
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
			controls.start(animateIn);
		} else {
			controls.start(animateOut);
		}
	}, [inView, controls, animateIn, animateOut]);

	return (
		<>
			<motion.div ref={ref} animate={controls}>
				<Container className="pt-5">
					<Row className="justify-content-center text-center align-items-center">
						<Col className="mx-auto my-2">
							<Image
								src="/assets/webdesign-header-welcome.gif" // Path to your animated arrow GIF
								width={500} // Adjust size as needed
								height={200} // Adjust size as needed
								alt="Animated Arrow"
								unoptimized
								className="responsive-image rounded"
							/>
						</Col>
					</Row>
					<Row className="justify-content-center text-center align-items-center">
						<Col className="mx-auto my-2">
							<Card className="border-0 bg-transparent ">
								<Card.Body>
									<h1 className="text-center text-bold">{t("design1")}</h1>
									<Card.Text className="text-start">{t("design2")}</Card.Text>
									<Button className="btn-nav" href="#media-design-portfolio">
										<span className="text-white"> {t("design3")} </span>
									</Button>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</motion.div>
		</>
	);
}

export default Media1;
