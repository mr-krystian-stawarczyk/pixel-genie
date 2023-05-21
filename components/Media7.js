import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";
function Media7() {
	const { t } = useTranslation();
	const [ref1, inView1] = useInView({
		threshold: 0.5,
		triggerOnce: false,
	});

	const [ref2, inView2] = useInView({
		threshold: 0.5,
		triggerOnce: false,
	});
	const [ref3, inView3] = useInView({
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

	const controls1 = useAnimation();
	const controls2 = useAnimation();
	const controls3 = useAnimation();

	useEffect(() => {
		if (inView1) {
			controls1.start(animateIn);
		}
	}, [inView1, controls1, animateIn]);

	useEffect(() => {
		let timeout;
		if (inView2) {
			timeout = setTimeout(() => {
				controls2.start(animateIn);
			}, 500); // Delay of 1 second (1000 milliseconds)
		}

		return () => clearTimeout(timeout); // Clear the timeout when the component unmounts or when the effect runs again
	}, [inView2, controls2, animateIn]);

	useEffect(() => {
		let timeout;
		if (inView3) {
			timeout = setTimeout(() => {
				controls3.start(animateIn);
			}, 1000); // Delay of 2 seconds (2000 milliseconds)
		}

		return () => clearTimeout(timeout); // Clear the timeout when the component unmounts or when the effect runs again
	}, [inView3, controls3, animateIn]);

	return (
		<Container className="my-5 py-5 " id="design-nettetal-preis">
			{" "}
			<Row className="justify-content-center align-items-center">
				<Col lg={4} md={6} xs={12} className="py-5 text-center">
					<Image
						src="/assets/webentwicklung-webagentur-nettetal-price.png"
						width={300}
						height={300}
						alt="webentwicklung-webagentur-nettetal-price"
					/>
					<h4>{t("web23")} </h4>
				</Col>
			</Row>
			<Row
				className="text-dark justify-content-center align-items-center"
				style={{
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Col lg={4} className="mx-auto my-2">
					<motion.div
						ref={ref1}
						animate={controls1}
						initial={{ opacity: 0 }}
						transition={{ delay: 1 }}
					>
						{" "}
						<Card style={{ minWidth: "18rem" }} className="shadow-lg border-0">
							{" "}
							<Card.Body>
								<h1>{t("design21")}</h1>
								<Card.Text>{t("design22")}</Card.Text>
							</Card.Body>
							<Card.Body>
								<Card.Title>{t("design23")}</Card.Title>
								<Card.Text>{t("design24")}</Card.Text>
								<Card.Text>{t("design25")}</Card.Text>
								<Card.Text>{t("design26")}</Card.Text>
								<Card.Text>{t("design27")}</Card.Text>
								<Card.Text>{t("design28")}</Card.Text>
								<Card.Text>{t("design29")}</Card.Text>
							</Card.Body>{" "}
							<Card.Body>
								<h4>{t("design30")}</h4>
							</Card.Body>
						</Card>{" "}
					</motion.div>
				</Col>
				<Col lg={4} className="mx-auto my-2">
					<motion.div
						ref={ref2}
						animate={controls2}
						initial={{ opacity: 0 }}
						transition={{ delay: 1 }}
					>
						{" "}
						<Card style={{ minWidth: "18rem" }} className="shadow-lg border-0">
							<Card.Body>
								<h1>{t("design31")}</h1>
								<Card.Text>{t("design32")}</Card.Text>
							</Card.Body>
							<Card.Body>
								<Card.Title>{t("design33")}</Card.Title>
								<Card.Text>{t("design34")}</Card.Text>
								<Card.Text>{t("design35")}</Card.Text>
								<Card.Text>{t("design36")}</Card.Text>
								<Card.Text>{t("design37")}</Card.Text>
								<Card.Text>{t("design38")}</Card.Text>
								<Card.Text>{t("design39")}</Card.Text>
								<Card.Text>{t("design40")}</Card.Text>
							</Card.Body>{" "}
							<Card.Body>
								<Image
									src="/assets/webagentur-webentwiclkung-nettetal-seo-bestseller.png"
									width={100}
									height={100}
									alt="webagentur-webentwiclkung-nettetal-seo-bestseller"
								/>
								<h3>{t("design41")}</h3>
							</Card.Body>
						</Card>{" "}
					</motion.div>
				</Col>
				<Col lg={4} className="mx-auto my-2">
					<motion.div
						ref={ref3}
						animate={controls3}
						initial={{ opacity: 0 }}
						transition={{ delay: 1 }}
					>
						{" "}
						<Card style={{ minWidth: "18rem" }} className="shadow-lg border-0">
							<Card.Body>
								<h1>{t("design42")}</h1>
								<Card.Text>{t("design43")}</Card.Text>
							</Card.Body>
							<Card.Body>
								<Card.Title>{t("design44")}</Card.Title>
								<Card.Text>{t("design45")}</Card.Text>
								<Card.Text>{t("design46")}</Card.Text>
								<Card.Text>{t("design47")}</Card.Text>
								<Card.Text>{t("design48")}</Card.Text>
								<Card.Text>{t("design49")}</Card.Text>
								<Card.Text>{t("design50")}</Card.Text>
								<Card.Text>{t("design51")}</Card.Text>
							</Card.Body>{" "}
							<Card.Body>
								<h3>{t("design52")}</h3>
							</Card.Body>
						</Card>{" "}
					</motion.div>
				</Col>
			</Row>
		</Container>
	);
}

export default Media7;
