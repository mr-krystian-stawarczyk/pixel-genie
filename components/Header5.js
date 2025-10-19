import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function Header5() {
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
					<Col lg={5} className="mx-auto my-2 text-center">
						<div className="image-container">
							<Image
								src="/assets/webentwicklung-nettetal-seo5.png"
								width={400}
								height={400}
								className="responsive-image"
								alt="webentwicklung-nettetal-seo2"
								loading="lazy"
							/>
							<div className="arrow-animation5">
								<Image
									src="/assets/anim4.gif" // Path to your animated arrow GIF
									width={50} // Adjust size as needed
									height={50} // Adjust size as needed
									alt="Animated Arrow"
									unoptimized
								/>
							</div>
						</div>
					</Col>
					<Col lg={5} className="mx-auto my-2">
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1 className="text-bold">{t("header16")}</h1>
								<Card.Text>{t("header17")}</Card.Text>
								<Card.Text>{t("header18")}</Card.Text>
								<Card.Text>{t("header19")}</Card.Text>
								<div className="text-center">
									<Link href="webdesignblog" className="m-1">
										<Button className="btn-nav px-4 ">{t("header20")}</Button>
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

export default Header5;
