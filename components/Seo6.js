import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";
function Seo6() {
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
			}, 1000); // Delay of 1 second (1000 milliseconds)
		}

		return () => clearTimeout(timeout); // Clear the timeout when the component unmounts or when the effect runs again
	}, [inView2, controls2, animateIn]);

	useEffect(() => {
		let timeout;
		if (inView3) {
			timeout = setTimeout(() => {
				controls3.start(animateIn);
			}, 2000); // Delay of 2 seconds (2000 milliseconds)
		}

		return () => clearTimeout(timeout); // Clear the timeout when the component unmounts or when the effect runs again
	}, [inView3, controls3, animateIn]);

	return (
		<Container className="my-5 py-5 " id="web-design-pricing">
			{" "}
			<Row className="justify-content-center align-items-center">
				<Col lg={4} md={6} xs={12} className="py-5 text-center">
					{" "}
					<Image
						src="/assets/price.png"
						width={300}
						height={300}
						className="responsive-image"
						alt="SEO-webentwicklung-nettetal-preis1"
					/>
					<h4>{t("web23")}</h4>
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
								<h1>{t("seo21")}</h1>
								<Card.Text>{t("seo22")}</Card.Text>
							</Card.Body>
							<Card.Body>
								<Card.Title>{t("seo23")}</Card.Title>
								<Card.Text>{t("seo24")}</Card.Text>
								<Card.Text>{t("seo25")}</Card.Text>
								<Card.Text>{t("seo26")}</Card.Text>
								<Card.Text>{t("seo27")}</Card.Text>
								<Card.Text>{t("seo28")}</Card.Text>
								<Card.Text>{t("seo29")}</Card.Text>
								<Card.Text>{t("seo30")}</Card.Text>
							</Card.Body>{" "}
							<Card.Body>
								<h4>{t("seo31")}</h4>
								<Card.Text>{t("seo32")}</Card.Text>
								<Card.Text>{t("seo33")}</Card.Text>
								<Card.Text> {t("seo34")}</Card.Text>
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
								<h1>{t("seo35")}</h1>
								<Card.Text>{t("seo36")}</Card.Text>
							</Card.Body>
							<Card.Body>
								<Card.Title>{t("seo37")}</Card.Title>
								<Card.Text>{t("seo38")}</Card.Text>
								<Card.Text>{t("seo39")}</Card.Text>
								<Card.Text>{t("seo40")}</Card.Text>
								<Card.Text>{t("seo41")}</Card.Text>
								<Card.Text>{t("seo42")}</Card.Text>
								<Card.Text>{t("seo43")}</Card.Text>
								<Card.Text>{t("seo44")}</Card.Text>
							</Card.Body>{" "}
							<Card.Body>
								<Image
									src="/assets/bestseller.png"
									width={100}
									height={100}
									className="responsive-image"
									alt="header2-image"
								/>
								<h3>{t("seo45")}</h3>
								<Card.Text>{t("seo46")}</Card.Text>
								<Card.Text>{t("seo47")}</Card.Text>
								<Card.Text>{t("seo48")}</Card.Text>
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
								<h1>{t("seo49")}</h1>
								<Card.Text>{t("seo50")}</Card.Text>
							</Card.Body>
							<Card.Body>
								<Card.Title>{t("seo51")}</Card.Title>
								<Card.Text>{t("seo52")}</Card.Text>
								<Card.Text>{t("seo53")}</Card.Text>
								<Card.Text>{t("seo54")}</Card.Text>
								<Card.Text>{t("seo55")}</Card.Text>
								<Card.Text>{t("seo56")}</Card.Text>
								<Card.Text>{t("seo57")}</Card.Text>
								<Card.Text>{t("seo58")}</Card.Text>
							</Card.Body>{" "}
							<Card.Body>
								<h3>{t("seo59")}</h3>
								<Card.Text>{t("seo60")}</Card.Text>
								<Card.Text>{t("seo61")}</Card.Text>
								<Card.Text>{t("seo62")}</Card.Text>
							</Card.Body>
						</Card>{" "}
					</motion.div>
				</Col>
			</Row>
		</Container>
	);
}

export default Seo6;
