import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
function Blog1() {
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
	const { t } = useTranslation();
	return (
		<motion.div ref={ref} animate={controls}>
			<Container className="mt-5 pt-5">
				<Row className="justify-content-center  align-items-center">
					<Col lg={5} className="mx-auto my-2">
						<Card className="border-0 bg-transparent ">
							<Card.Body>
								<h1> {t("blog1")}</h1>
								<Card.Text>{t("blog2")}</Card.Text>
								<div className="text-center">
									<Button className="btn-nav " href="#tips">
										{t("blog4")}
									</Button>
								</div>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={5} className="mx-auto my-2  text-center">
						<Image
							src="/assets/webentwicklung-webagentur-nettetal-price.png"
							width={500}
							height={500}
							className="responsive-image"
							alt="webentwicklung-webagentur-nettetal-price"
							priority
						/>
					</Col>
				</Row>
			</Container>
		</motion.div>
	);
}

export default Blog1;
