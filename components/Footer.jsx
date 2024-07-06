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
			id="kontakt"
		>
			<motion.div ref={ref} animate={controls}>
				<Row className=" justify-content-center align-items-top text-center  mt-2  border-bottom">
					<Col lg={3} sm={6} className="mx-auto">
						<Card
							style={{ maxWidth: "25rem" }}
							className="bg-transparent border-0 shadow-lg "
						>
							<Card.Body className="">
								<Card.Title className="my-3 text-uppercase">
									{t("footer1")}
								</Card.Title>
								<Link href="/webseitenerstellen" className="footer-links">
									<Card.Text className="hover py-2">{t("footer2")}</Card.Text>
								</Link>
								<Link href="/suchmaschinenoptimierung" className="footer-links">
									<Card.Text className="hover py-2">{t("footer3")}</Card.Text>
								</Link>
								<Link href="/branding" className="footer-links">
									<Card.Text className="hover py-2">{t("footer4")}</Card.Text>
								</Link>
								<Link href="/webdesign" className="footer-links">
									<Card.Text className="hover py-2">{t("footer5")}</Card.Text>
								</Link>
								<Link href="/socialmediamarketing" className="footer-links">
									<Card.Text className="hover py-2">{t("footer6")}</Card.Text>
								</Link>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={3} sm={6} className=" mx-auto">
						<Card
							style={{ maxWidth: "25rem" }}
							className="bg-transparent border-0 shadow-lg "
						>
							<Card.Body className="">
								<Card.Title className="my-3 text-uppercase">
									{t("footer7")}
								</Card.Title>
								<Link href="/pixelgeniehistory" className="footer-links">
									<Card.Text className="hover py-2"> {t("footer8")}</Card.Text>
								</Link>

								<Link href="/webdesignblog" className="footer-links">
									<Card.Text className="hover py-2">{t("footer10")}</Card.Text>
								</Link>
								<Link href="/impressium" className="footer-links ">
									<Card.Text className="hover py-2">Cookies</Card.Text>
								</Link>
								<Link href="/impressium" className="footer-links ">
									<Card.Text className="hover py-2">Impressum</Card.Text>
								</Link>
								<Link href="/impressium" className="footer-links ">
									<Card.Text className="hover py-2">Data Protection</Card.Text>
								</Link>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={3} sm={6} className=" mx-auto">
						<Card
							style={{ maxWidth: "25rem" }}
							className="bg-transparent border-0 shadow-lg "
						>
							<Card.Body className="">
								<Card.Title className="my-3 text-uppercase">
									Facebook
								</Card.Title>
								<Link
									href="https://www.facebook.com/profile.php?id=100090817536941"
									target="_blank"
								>
									<Card.Text className="footer-links hover">
										<AiOutlineFacebook
											style={{ fontSize: "6rem" }}
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
							style={{ maxWidth: "25rem" }}
						>
							<Card.Title className="my-3 text-uppercase">
								{t("footer14")}
							</Card.Title>
							<h4
								className="py-5 hover"
								onClick={handleEmailClick}
								style={{ cursor: "pointer" }}
							>
								info@pixel-genie.de
							</h4>
						</Card>
					</Col>
				</Row>
				<Row className="text-center my-2">
					<Col>
						<h4>2024 Pixel Genie Alle Rechte vorbehalten</h4>
					</Col>
				</Row>
			</motion.div>
		</Container>
	);
}

export default Footer;
