import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
function Header4() {
	const { t } = useTranslation();
	const [ref, inView] = useInView({
		threshold: 0.5, // określa część komponentu, która musi być widoczna, aby został uznany za widoczny
		triggerOnce: false, // określa, czy zdarzenie wchodzenia w widok ma być wywołane tylko raz
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
			// komponent jest widoczny, więc można uruchomić animację
			controls.start(animateIn);
		} else {
			// komponent jest niewidoczny, więc można uruchomić animację wyjścia
			controls.start(animateOut);
		}
	}, [inView, controls, animateIn, animateOut]);
	return (
		<motion.div ref={ref} animate={controls}>
			<Container className=" my-5 py-5 ">
				<Row className="justify-content-center  align-items-center">
					<Col lg={5} className="mx-auto">
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1>{t("header11")}</h1>
								<Card.Text>{t("header12")}</Card.Text>
								<Card.Text>{t("header13")}</Card.Text>
								<Card.Text>{t("header14")}</Card.Text>

								<div className="text-center">
									<Link href="socialmedia" className="m-1">
										<Button className="btn-nav px-4">{t("header15")}</Button>
									</Link>
								</div>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={5} className="mx-auto my-5">
						{" "}
						<Image
							src="/assets/socialmedia1.png"
							width={500}
							height={500}
							className="responsive-image"
							alt="socialmedia-image"
						/>
					</Col>
				</Row>
			</Container>
		</motion.div>
	);
}

export default Header4;
