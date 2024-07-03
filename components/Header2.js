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
		threshold: 0.5, // Obserwuj 50% pojawienia się elementu
		triggerOnce: false, // Animuj ponownie przy każdym pojawieniu
	});

	const controls = useAnimation();

	useEffect(() => {
		if (inView) {
			controls.start({
				opacity: 1,
				transition: { duration: 1, ease: "easeInOut" },
			});
		} else {
			controls.start({
				opacity: 0,
				transition: { duration: 1, ease: "easeInOut" },
			});
		}
	}, [inView, controls]);

	return (
		<motion.div ref={ref} animate={controls} id="header2">
			<Container className="mt-5 pt-5">
				<Row className="justify-content-center align-items-center">
					<Col lg={5} className="mx-auto my-2">
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1 className="text-bold">{t("header1")}</h1>
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
					</Col>{" "}
					<Col lg={5} className="mx-auto my-2 position-relative">
						<div className="image-container">
							<Image
								src="/assets/webentwicklung-nettetal-seo2.png"
								width={400}
								height={400}
								className="responsive-image"
								alt="webentwicklung-nettetal-seo2"
								loading="lazy"
							/>
							<div className="arrow-animation2">
								<Image
									src="/assets/anim0.gif" // Path to your animated arrow GIF
									width={100} // Adjust size as needed
									height={100} // Adjust size as needed
									alt="Animated Arrow"
								/>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</motion.div>
	);
}

export default Header2;
