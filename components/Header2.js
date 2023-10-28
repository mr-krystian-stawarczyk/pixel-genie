import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import Link from "next/link";

import Image from "next/image";

function Header2() {
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
		<motion.div ref={ref} animate={controls} id="header2">
			<Container className="mt-5 pt-5">
				<Row className="justify-content-center  align-items-center">
					<Col lg={5} className="mx-auto my-2 ">
						<Card className="border-0 bg-transparent ">
							<Card.Body>
								<h1> {t("header1")}</h1>
								<Card.Text>{t("header2")}</Card.Text>
								<Card.Text>{t("header3")}</Card.Text>
								<Card.Text>{t("header4")}</Card.Text>
								<div className="text-center">
									<Link href="webseitenerstellen" className="m-1">
										<Button className="btn-nav">{t("header5")}</Button>
									</Link>
								</div>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={5} className="mx-auto my-2 text-center ">
						<Image
							src="/assets/webentwicklung-nettetal-seo2.png"
							width={400}
							height={400}
							className="responsive-image"
							alt="webentwicklung-nettetal-seo2"
							loading="lazy"
						/>
					</Col>
				</Row>
			</Container>
		</motion.div>
	);
}

export default Header2;
