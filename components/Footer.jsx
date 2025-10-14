import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { AiOutlineFacebook } from "react-icons/ai";
import { useTheme } from "next-themes";

function Footer() {
	const { t } = useTranslation();
	const sectionRef = useRef(null);
	const { theme } = useTheme();

	const handleEmailClick = () => {
		window.location.href = "mailto:mr.krystian.stawarczyk@gmail.com";
	};

	const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: false });
	const controls = useAnimation();
	const animateIn = {
		opacity: 1,
		transition: { duration: 1, ease: "easeInOut" },
	};

	useEffect(() => {
		if (inView) controls.start(animateIn);
	}, [inView, controls]);

	return (
		<Container
			fluid
			ref={sectionRef}
			id="kontakt"
			className={`overflow-hidden shadow-md py-5 ${theme}`}
			style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
		>
			<motion.div ref={ref} animate={controls}>
				<Row className="justify-content-center align-items-top text-center border-bottom">
					{/* Kolumna 1 */}
					<Col lg={3} sm={6} className="mx-auto">
						<Card className="bg-transparent border-0 shadow-lg">
							<Card.Body>
								<Card.Title
									className="my-3 text-uppercase"
									style={{ color: "var(--text-color)" }}
								>
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

					{/* Kolumna 2 */}
					<Col lg={3} sm={6} className="mx-auto">
						<Card className="bg-transparent border-0 shadow-lg">
							<Card.Body>
								<Card.Title
									className="my-3 text-uppercase"
									style={{ color: "var(--text-color)" }}
								>
									{t("footer7")}
								</Card.Title>
								<Link href="/pixelgeniehistory" className="footer-links">
									<Card.Text className="hover py-2">{t("footer8")}</Card.Text>
								</Link>
								<Link href="/webdesignblog" className="footer-links">
									<Card.Text className="hover py-2">{t("footer10")}</Card.Text>
								</Link>
								<Link href="/impressium" className="footer-links">
									<Card.Text className="hover py-2">Cookies</Card.Text>
								</Link>
								<Link href="/impressium" className="footer-links">
									<Card.Text className="hover py-2">Impressum</Card.Text>
								</Link>
								<Link href="/impressium" className="footer-links">
									<Card.Text className="hover py-2">Data Protection</Card.Text>
								</Link>
							</Card.Body>
						</Card>
					</Col>

					{/* Kolumna 3 */}
					<Col lg={3} sm={6} className="mx-auto">
						<Card className="bg-transparent border-0 shadow-lg">
							<Card.Body className="d-flex flex-column align-items-center">
								<Card.Title
									className="my-3 text-uppercase"
									style={{ color: "var(--text-color)" }}
								>
									Facebook
								</Card.Title>
								<Link
									href="https://www.facebook.com/profile.php?id=100090817536941"
									target="_blank"
								>
									<AiOutlineFacebook
										style={{ fontSize: "6rem", color: "var(--text-color)" }}
										className="my-2 hover"
									/>
								</Link>
							</Card.Body>
						</Card>
					</Col>

					{/* Kolumna 4 */}
					<Col lg={3} sm={6} className="mx-auto">
						<Card className="bg-transparent border-0 shadow-lg pt-3">
							<Card.Title
								className="my-3 text-uppercase"
								style={{ color: "var(--text-color)" }}
							>
								{t("footer14")}
							</Card.Title>
							<h6
								className="py-5 hover text-bold"
								onClick={handleEmailClick}
								style={{ cursor: "pointer", color: "var(--text-color)" }}
							>
								mr.krystian.stawarczyk@gmail.com
							</h6>
						</Card>
					</Col>
				</Row>

				<Row className="text-center my-2">
					<Col>
						<h4 style={{ color: "var(--text-color)" }}>
							2025 Pixel Genie Alle Rechte vorbehalten
						</h4>
					</Col>
				</Row>
			</motion.div>
		</Container>
	);
}

export default Footer;
