import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SplitTextJS from "split-text-js";
import gsap from "gsap";
import { Link } from "react-scroll";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
function Web3() {
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
			<Container className="mt-5 pt-5">
				<Row className="justify-content-center text-center align-items-center">
					<Col lg={5} className="mx-auto">
						<Card className="border-0 bg-transparent ">
							<Card.Body>
								<h1>{t("web7")}</h1>
								<Card.Text>{t("web8")}</Card.Text>
								<Button className="btn-nav" href="#web-design-faq">
									{t("web9")}
								</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={5} className="mx-auto">
						{" "}
						<Image
							src="/assets/web3.png"
							width={400}
							height={400}
							className="responsive-image"
							alt="header2-image"
						/>
					</Col>
				</Row>
			</Container>
		</motion.div>
	);
}

export default Web3;
