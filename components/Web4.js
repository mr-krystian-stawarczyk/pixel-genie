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
function Web4() {
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
			<Container className="mt-5 pt-5">
				<Row className="justify-content-center text-center align-items-center">
					<Col lg={5} className="mx-auto">
						<Card className="border-0  bg-transparent ">
							<Card.Body>
								<h1 className="text-start">{t("web10")}</h1>
								<Card.Text className="text-start">{t("web11")}</Card.Text>
								<Link href="suchmaschinenoptimierung" className="m-1">
									<Button className="btn-md py-2 btn-nav border-0 shadow-md">
										{t("web12")}
									</Button>
								</Link>
							</Card.Body>
						</Card>
					</Col>{" "}
					<Col lg={5} className="mx-auto">
						<Image
							src="/assets/webentwicklung-nettetal-seo3.png"
							width={400}
							height={400}
							className="responsive-image"
							alt="webentwicklung-nettetal-webseiten4"
							priority
						/>
					</Col>
				</Row>
			</Container>
		</motion.div>
	);
}

export default Web4;
