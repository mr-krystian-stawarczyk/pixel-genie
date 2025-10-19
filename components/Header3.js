import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import Link from "next/link";

import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Image from "next/image";

function Header3() {
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
		<motion.div ref={ref} animate={controls}>
			<Container className=" my-5 py-5 ">
				<Row className="justify-content-center  align-items-center">
					<Col lg={5} className="mx-auto my-2 text-center ">
						<div className="image-container">
							<Image
								src="/assets/webentwicklung-nettetal-seo3.png"
								width={400}
								height={400}
								className="responsive-image"
								alt="webentwicklung-nettetal-seo2"
								loading="lazy"
							/>
							<div className="arrow-animation3">
								<img
									src="/assets/anim8.webp"
									alt="Animated Arrow"
									width="50"
									height="50"
									loading="lazy"
									decoding="async"
									style={{ display: "block", margin: "auto" }}
								/>
							</div>
						</div>
					</Col>
					<Col lg={5} className="mx-auto my-2 ">
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1 className="text-bold">{t("header6")}</h1>
								<Card.Text>{t("header7")}</Card.Text>
								<Card.Text>{t("header8")}</Card.Text>
								<Card.Text>{t("header9")}</Card.Text>

								<div className="text-center">
									<Link href="suchmaschinenoptimierung" className="m-1">
										<Button className="btn-nav px-4">{t("header10")}</Button>
									</Link>
								</div>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</motion.div>
	);
}

export default Header3;
