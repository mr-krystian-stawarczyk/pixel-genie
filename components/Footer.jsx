import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { useTranslation } from "react-i18next";

import {
	AiOutlineFacebook,
	AiOutlineLinkedin,
	AiOutlineInstagram,
} from "react-icons/ai";

function Footer() {
	const { t } = useTranslation();
	const sectionRef = useRef(null);
	const [animate, setAnimate] = useState(false);
	const [animateImg, setAnimateImg] = useState(false);

	const handleIntersection = (entries) => {
		if (entries[0].isIntersecting) {
			setAnimate(true);
			setAnimateImg(true);
			// start counting
			let count = 300;
			const interval = setInterval(() => {
				if (count === 0) {
					clearInterval(interval);
				}
			}, 10);
		}
	};

	useEffect(() => {
		const observer = new IntersectionObserver(handleIntersection);
		observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);

	const animationProps = useSpring({
		from: { opacity: 0, transform: "translateX(-50%)" },
		to: {
			opacity: animate ? 1 : 0,
			transform: animate ? "translateX(0)" : "translateX(-50%)",
		},
		config: { duration: 1000 },
		delay: 1000,
	});

	const imgAnimationProps = useSpring({
		from: { opacity: 0, transform: "translateX(50%)" },
		to: {
			opacity: animate ? 1 : 0,
			transform: animate ? "translateX(0)" : "translateX(50%)",
		},
		config: { duration: 1000 },
		delay: 1000,
	});
	return (
		<Container
			fluid
			className="overflow-hidden shadow-md bg-black text-white"
			ref={sectionRef}
			id="contact"
		>
			<animated.div style={animationProps}>
				{" "}
				<Row className=" justify-content-center align-items-center  mt-2  border-bottom">
					<Col lg={3} className="mx-auto">
						{" "}
						<Card
							style={{ width: "18rem" }}
							className="bg-transparent border-0 shadow-lg "
						>
							<Card.Body className="">
								<Card.Title className="my-3">{t("footer1")}</Card.Title>
								<Card.Text>{t("footer2")}</Card.Text>{" "}
								<Card.Text>{t("footer3")}</Card.Text>{" "}
								<Card.Text>{t("footer4")}</Card.Text>{" "}
								<Card.Text>{t("footer5")}</Card.Text>{" "}
								<Card.Text>{t("footer6")}</Card.Text>{" "}
							</Card.Body>
						</Card>
					</Col>
					<Col lg={3} className=" mx-auto">
						<Card
							style={{ width: "18rem" }}
							className="bg-transparent border-0 shadow-lg "
						>
							<Card.Body className="">
								<Card.Title className="my-3">{t("footer7")}</Card.Title>
								<Card.Text> {t("footer8")}</Card.Text>{" "}
								<Card.Text>{t("footer9")}</Card.Text>{" "}
								<Card.Text>{t("footer10")}</Card.Text>{" "}
								<Card.Text>{t("footer11")}</Card.Text>{" "}
								<Card.Text>{t("footer12")}</Card.Text>{" "}
							</Card.Body>
						</Card>
					</Col>{" "}
					<Col lg={3} className=" mx-auto">
						<Card
							style={{ width: "18rem" }}
							className="bg-transparent border-0 shadow-lg "
						>
							<Card.Body className="">
								<Card.Title className="my-3">{t("footer13")}</Card.Title>
								<Card.Text>
									<AiOutlineFacebook style={{ fontSize: "3rem" }} />
								</Card.Text>
								<Card.Text>
									<AiOutlineLinkedin style={{ fontSize: "3rem" }} />
								</Card.Text>
								<Card.Text>
									<AiOutlineInstagram style={{ fontSize: "3rem" }} />
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={3} className=" mx-auto">
						<Card className="bg-transparent border-0 shadow-lg ">
							<Card.Body className="">
								<Card.Title className="my-3">{t("footer14")}</Card.Title>
								<Card.Text>info@pixel-genie.de</Card.Text>
							</Card.Body>
						</Card>
					</Col>{" "}
				</Row>{" "}
				<Row className="text-center my-2">
					<Col>
						<h6>2023 PixelGenie All Rights Reserved</h6>
					</Col>{" "}
					<Col>
						<Link href="/policy">
							{" "}
							<h6>Cookies & Imprint</h6>
						</Link>
					</Col>
				</Row>
			</animated.div>
		</Container>
	);
}

export default Footer;
