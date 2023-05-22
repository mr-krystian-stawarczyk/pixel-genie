import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";

function Seo5() {
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
			}, 500);
		} else {
			controls2.start(animateOut);
		}

		return () => clearTimeout(timeout);
	}, [inView2, controls2, animateIn, animateOut]);

	useEffect(() => {
		let timeout;
		if (inView3) {
			timeout = setTimeout(() => {
				controls3.start(animateIn);
			}, 700);
		} else {
			controls3.start(animateOut);
		}

		return () => clearTimeout(timeout);
	}, [inView3, controls3, animateIn, animateOut]);

	useEffect(() => {
		let timeout;
		if (inView4) {
			timeout = setTimeout(() => {
				controls4.start(animateIn);
			}, 1000);
		} else {
			controls4.start(animateOut);
		}

		return () => clearTimeout(timeout);
	}, [inView4, controls4, animateIn, animateOut]);
	return (
		<Container className="my-5 py-5" id="process">
			<Row className="justify-content-center text-center align-items-center">
				<Col lg={3} className="mx-auto my-2">
					<motion.div
						ref={ref1}
						animate={controls1}
						initial={{ opacity: 0 }}
						transition={{ delay: 1 }}
					>
						<Card
							className="border-0 bg-transparent  shadow-lg"
							style={{ height: "45rem" }}
						>
							<Card.Body>
								<h1>1</h1>
								<h2>{t("seo13")}</h2>
								<Card.Text>{t("seo14")}</Card.Text>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>
				<Col lg={3} className="mx-auto my-2">
					<motion.div
						ref={ref2}
						animate={controls2}
						initial={{ opacity: 0 }}
						transition={{ delay: 1 }}
					>
						<Card
							className="border-0 bg-transparent  shadow-lg"
							style={{ height: "45rem" }}
						>
							<Card.Body>
								<h1>2</h1>
								<h2>{t("seo15")}</h2>
								<Card.Text>{t("seo16")}</Card.Text>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>
				<Col lg={3} className="mx-auto my-2">
					<motion.div
						ref={ref3}
						animate={controls3}
						initial={{ opacity: 0 }}
						transition={{ delay: 1 }}
					>
						<Card
							className="border-0 bg-transparent  shadow-lg"
							style={{ height: "45rem" }}
						>
							<Card.Body>
								<h1>3</h1>
								<h2>{t("seo17")}</h2>
								<Card.Text>{t("seo18")}</Card.Text>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>
				<Col lg={3} className="mx-auto my-2">
					<motion.div
						ref={ref4}
						animate={controls4}
						initial={{ opacity: 0 }}
						transition={{ delay: 1 }}
					>
						<Card
							className="border-0 bg-transparent  shadow-lg"
							style={{ height: "45rem" }}
						>
							<Card.Body>
								<h1>4</h1>
								<h2>{t("seo19")}</h2>
								<Card.Text>{t("seo20")}</Card.Text>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>
			</Row>
		</Container>
	);
}

export default Seo5;
