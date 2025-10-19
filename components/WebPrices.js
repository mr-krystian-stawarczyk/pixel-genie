import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";

import { motion } from "framer-motion";
function WebPrices() {
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
			}, 500);
		}

		return () => clearTimeout(timeout);
	}, [inView2, controls2, animateIn]);

	useEffect(() => {
		let timeout;
		if (inView3) {
			timeout = setTimeout(() => {
				controls3.start(animateIn);
			}, 1000);
		}

		return () => clearTimeout(timeout);
	}, [inView3, controls3, animateIn]);

	return (
		<Container className="my-5 py-5 text-dark" id="web-design-pricing">
			<Row className="justify-content-center align-items-center">
				<Col lg={4} md={6} xs={12} className="py-5 text-center ">
					<Image
						src="/assets/webentwicklung-webagentur-nettetal-price.png"
						width={300}
						height={300}
						alt="webentwicklung-nettetal-webseiten5-preis"
						priority
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
						<Card
							style={{ minWidth: "18rem" }}
							className="shadow-lg hover border-0 "
						>
							<Card.Body>
								<h1 className="text-dark">{t("web24")}</h1>
								<Card.Text className="text-dark">{t("web25")}</Card.Text>
							</Card.Body>
							<Card.Body>
								<Card.Title className="text-dark">{t("web26")}</Card.Title>
								<Card.Text className="text-dark"> {t("web27")}</Card.Text>
								<Card.Text className="text-dark">{t("web28")}</Card.Text>
								<Card.Text className="text-dark">{t("web29")}</Card.Text>
								<Card.Text className="text-dark">{t("web30")}</Card.Text>
								<Card.Text className="text-dark">{t("web31")}</Card.Text>
								<Card.Text className="text-dark">{t("web32")}</Card.Text>
								<Card.Text className="text-dark">{t("web33")}</Card.Text>
								<Card.Text className="text-dark">{t("web34")}</Card.Text>
								<Card.Text className="text-dark">{t("web35")}</Card.Text>
								<Card.Text className="text-dark">{t("web36")}</Card.Text>
							</Card.Body>
							<Card.Body>
								<h4 className="text-dark">{t("web37")}</h4>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>
				<Col lg={4} className="mx-auto my-2">
					<motion.div
						ref={ref2}
						animate={controls2}
						initial={{ opacity: 0 }}
						transition={{ delay: 1 }}
					>
						<Card
							style={{ minWidth: "18rem" }}
							className="shadow-lg hover border-0"
						>
							<Card.Body>
								<h1 className="text-dark">
									<Image
										src="/assets/webagentur-webentwiclkung-nettetal-seo-bestseller.png"
										width={100}
										height={100}
										alt="webagentur-webentwiclkung-nettetal-seo-bestseller"
										priority
									/>
									{t("web41")}
								</h1>
								<Card.Text className="text-dark">{t("web42")}</Card.Text>
							</Card.Body>
							<Card.Body>
								<Card.Title className="text-dark">{t("web43")}</Card.Title>
								<Card.Text className="text-dark">{t("web44")}</Card.Text>
								<Card.Text className="text-dark">{t("web45")}</Card.Text>
								<Card.Text className="text-dark">{t("web46")}</Card.Text>
								<Card.Text className="text-dark">{t("web47")}</Card.Text>
								<Card.Text className="text-dark">{t("web48")}</Card.Text>
								<Card.Text className="text-dark">{t("web49")}</Card.Text>
								<Card.Text className="text-dark">{t("web50")}</Card.Text>
								<Card.Text className="text-dark">{t("web51")}</Card.Text>
								<Card.Text className="text-dark">{t("web52")}</Card.Text>
								<Card.Text className="text-dark">{t("web53")}</Card.Text>
								<Card.Text className="text-dark">{t("web54")}</Card.Text>
								<Card.Text className="text-dark">{t("web55")}</Card.Text>
								<Card.Text className="text-dark">{t("web56")}</Card.Text>
								<Card.Text className="text-dark">{t("web57")}</Card.Text>
							</Card.Body>
							<Card.Body>
								<h3 className="text-dark"> {t("web58")}</h3>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>
				<Col lg={4} className="mx-auto my-2">
					<motion.div
						ref={ref3}
						animate={controls3}
						initial={{ opacity: 0 }}
						transition={{ delay: 1 }}
					>
						<Card
							style={{ minWidth: "18rem" }}
							className="shadow-lg hover border-0"
						>
							<Card.Body>
								<h1 className="text-dark">{t("web62")}</h1>
								<Card.Text className="text-dark">{t("web63")}</Card.Text>
							</Card.Body>
							<Card.Body>
								<Card.Title className="text-dark">{t("web64")}</Card.Title>
								<Card.Text className="text-dark">{t("web65")}</Card.Text>
								<Card.Text className="text-dark">{t("web66")}</Card.Text>
								<Card.Text className="text-dark">{t("web67")}</Card.Text>
								<Card.Text className="text-dark">{t("web68")}</Card.Text>
								<Card.Text className="text-dark">{t("web69")}</Card.Text>
								<Card.Text className="text-dark">{t("web70")}</Card.Text>
								<Card.Text className="text-dark">{t("web71")}</Card.Text>
								<Card.Text className="text-dark">{t("web72")}</Card.Text>
								<Card.Text className="text-dark">{t("web73")}</Card.Text>
								<Card.Text className="text-dark">{t("web74")}</Card.Text>
								<Card.Text className="text-dark">{t("web75")}</Card.Text>
								<Card.Text className="text-dark">{t("web76")}</Card.Text>
								<Card.Text className="text-dark">{t("web77")}</Card.Text>
								<Card.Text className="text-dark">{t("web78")}</Card.Text>
								<Card.Text className="text-dark">{t("web79")}</Card.Text>
								<Card.Text className="text-dark">{t("web80")}</Card.Text>
							</Card.Body>
							<Card.Body>
								<h3 className="text-dark">{t("web81")}</h3>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>
			</Row>
		</Container>
	);
}

export default WebPrices;
