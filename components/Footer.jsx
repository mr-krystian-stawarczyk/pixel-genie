import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";

import {
	AiOutlineFacebook,
	AiFillGithub,
	AiOutlineLinkedin,
} from "react-icons/ai";

function Footer() {
	const { t } = useTranslation();
	const sectionRef = useRef(null);

	const handleEmailClick = () => {
		window.location.href = "mailto:info@pixel-genie.de";
	};

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

	const controls = useAnimation();
	useEffect(() => {
		if (inView) {
			controls.start(animateIn);
		}
	}, [inView, controls, animateIn]);
	return (
		<Container
			fluid
			className="overflow-hidden shadow-md bg-black text-white"
			ref={sectionRef}
			id="contact"
		>
			<motion.div ref={ref} animate={controls}>
				<Row className=" justify-content-center align-items-top text-center  mt-2  border-bottom">
					<Col lg={3} sm={6} className="mx-auto">
						<Card
							style={{ width: "20rem" }}
							className="bg-transparent border-0 shadow-lg "
						>
							<Card.Body className="">
								<Card.Title className="my-3">{t("footer1")}</Card.Title>
								<Link href="web" className="footer-links">
									<Card.Text className="py-2">{t("footer2")}</Card.Text>
								</Link>
								<Link href="seo" className="footer-links">
									<Card.Text className="py-2">{t("footer3")}</Card.Text>
								</Link>
								<Link href="branding" className="footer-links">
									<Card.Text className="py-2">{t("footer4")}</Card.Text>
								</Link>
								<Link href="media" className="footer-links">
									<Card.Text className="py-2">{t("footer5")}</Card.Text>
								</Link>
								<Link href="socialmedia" className="footer-links">
									<Card.Text className="py-2">{t("footer6")}</Card.Text>
								</Link>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={3} sm={6} className=" mx-auto">
						<Card
							style={{ width: "20rem" }}
							className="bg-transparent border-0 shadow-lg "
						>
							<Card.Body className="">
								<Card.Title className="my-3">{t("footer7")}</Card.Title>
								<Link href="about" className="footer-links">
									<Card.Text className="py-2"> {t("footer8")}</Card.Text>
								</Link>
								<Link href="contact" className="footer-links">
									<Card.Text className="py-2">{t("footer9")}</Card.Text>
								</Link>
								<Link href="blog" className="footer-links">
									<Card.Text className="py-2">{t("footer10")}</Card.Text>
								</Link>
								<Link href="#contact" className="footer-links">
									<Card.Text className="py-2">{t("footer12")}</Card.Text>
								</Link>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={3} sm={6} className=" mx-auto">
						<Card
							style={{ width: "20rem" }}
							className="bg-transparent border-0 shadow-lg "
						>
							<Card.Body className="">
								<Card.Title className="my-3">{t("footer13")}</Card.Title>
								<Link
									href="https://www.facebook.com/pixelgeniewebagentur"
									target="_blank"
								>
									<Card.Text className="footer-links">
										<AiOutlineFacebook
											style={{ fontSize: "3rem" }}
											className="my-2"
										/>
									</Card.Text>
								</Link>
								<Link
									href="https://www.linkedin.com/in/krystian-stawarczyk-240476212/"
									target="_blank"
								>
									<Card.Text className="footer-links">
										<AiOutlineLinkedin
											style={{ fontSize: "3rem" }}
											className="my-2"
										/>
									</Card.Text>
								</Link>
								<Link
									href="https://github.com/mr-krystian-stawarczyk"
									target="_blank"
								>
									<Card.Text className="footer-links">
										<AiFillGithub
											style={{ fontSize: "3rem" }}
											className="my-2"
										/>
									</Card.Text>
								</Link>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={3} sm={6} className=" mx-auto">
						<Card
							className="bg-transparent border-0 shadow-lg pt-3 "
							style={{ width: "20rem" }}
						>
							<Card.Title className="my-3">{t("footer14")}</Card.Title>
							<h4 className="py-5" onClick={handleEmailClick}>
								info@pixel-genie.de
							</h4>
						</Card>
					</Col>
				</Row>
				<Row className="text-center my-2">
					<Col>
						<h6>2023 Pixel Genie All Rights Reserved</h6>
					</Col>
					<Col>
						<Link href="/policy" className="footer-links">
							<h6>Cookies & Imprint</h6>
						</Link>
					</Col>
				</Row>
			</motion.div>
		</Container>
	);
}

export default Footer;
