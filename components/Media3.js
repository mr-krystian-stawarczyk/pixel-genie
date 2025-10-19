import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
const { motion } = dynamic(() => import("framer-motion"), { ssr: false });
function Media3() {
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
					<Col lg={5} className="mx-auto my-2">
						<Image
							src="/assets/webentwicklung-nettetal-design-seo3.png"
							width={400}
							height={400}
							className="responsive-image"
							alt="webentwicklung-nettetal-design-seo3"
							priority
						/>
					</Col>
					<Col lg={5} className="mx-auto my-2">
						<Card className="border-0 bg-transparent ">
							<Card.Body>
								<h1 className="text-start"> {t("design7")}</h1>
								<Card.Text className="text-start">{t("design8")}</Card.Text>
								<Button className="btn-nav" href="#design-nettetal-fragen">
									<span className="text-white"> {t("design9")} </span>
								</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</motion.div>
	);
}

export default Media3;
