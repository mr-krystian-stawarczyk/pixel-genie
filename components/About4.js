import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
function About4() {
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

	const [ref4, inView4] = useInView({
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

	const controls1 = useAnimation();
	const controls2 = useAnimation();
	const controls3 = useAnimation();
	const controls4 = useAnimation();

	useEffect(() => {
		if (inView1) {
			controls1.start(animateIn);
		} else {
			controls1.start(animateOut);
		}
	}, [inView1, controls1, animateIn, animateOut]);

	useEffect(() => {
		let timeout;
		if (inView2) {
			timeout = setTimeout(() => {
				controls2.start(animateIn);
			}, 700); // Delay of 1 second (1000 milliseconds)
		} else {
			controls2.start(animateOut);
		}

		return () => clearTimeout(timeout); // Clear the timeout when the component unmounts or when the effect runs again
	}, [inView2, controls2, animateIn, animateOut]);

	useEffect(() => {
		let timeout;
		if (inView3) {
			timeout = setTimeout(() => {
				controls3.start(animateIn);
			}, 1300); // Delay of 2 seconds (2000 milliseconds)
		} else {
			controls3.start(animateOut);
		}

		return () => clearTimeout(timeout); // Clear the timeout when the component unmounts or when the effect runs again
	}, [inView3, controls3, animateIn, animateOut]);

	useEffect(() => {
		let timeout;
		if (inView4) {
			timeout = setTimeout(() => {
				controls4.start(animateIn);
			}, 1900); // Delay of 3 seconds (3000 milliseconds)
		} else {
			controls4.start(animateOut);
		}

		return () => clearTimeout(timeout); // Clear the timeout when the component unmounts or when the effect runs again
	}, [inView4, controls4, animateIn, animateOut]);
	return (
		<Container className="my-5 py-5">
			<Row className="text-center my-5">
				<h1>{t("about3")}</h1>
				<h3>{t("about4")}</h3>
			</Row>
			<Row className="justify-content-center text-center align-items-center">
				<Col lg={3} className="mx-auto">
					<motion.div
						ref={ref1}
						animate={controls1}
						initial={{ opacity: 0 }}
						transition={{ delay: 1 }}
					>
						<Card className="border-0 bg-transparent ">
							<Card.Body>
								<h1>1</h1>
								<Card.Text>{t("about5")}</Card.Text>
								<Card.Text>{t("about6")}</Card.Text>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>
				<Col lg={3} className="mx-auto">
					<motion.div
						ref={ref2}
						animate={controls2}
						initial={{ opacity: 0 }}
						transition={{ delay: 1 }}
					>
						{" "}
						<Card className="border-0 bg-transparent ">
							<Card.Body>
								<h1>2</h1>
								<Card.Text>{t("about7")}</Card.Text>
								<Card.Text>{t("about8")}</Card.Text>
							</Card.Body>
						</Card>{" "}
					</motion.div>
				</Col>{" "}
				<Col lg={3} className="mx-auto">
					<motion.div
						ref={ref3}
						animate={controls3}
						initial={{ opacity: 0 }}
						transition={{ delay: 1 }}
					>
						{" "}
						<Card className="border-0 bg-transparent ">
							<Card.Body>
								<h1>3</h1>
								<Card.Text>{t("about9")}</Card.Text>
								<Card.Text>{t("about10")}</Card.Text>
							</Card.Body>
						</Card>{" "}
					</motion.div>
				</Col>
			</Row>
		</Container>
	);
}

export default About4;
