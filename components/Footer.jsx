import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { AiOutlineFacebook } from "react-icons/ai";
import { useTheme } from "next-themes";
import Image from "next/image";

function Footer() {
	const { t } = useTranslation();
	const sectionRef = useRef(null);
	const { theme } = useTheme();
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
		<footer
			ref={sectionRef}
			className={`overflow-hidden shadow-md py-5 ${theme}`}
			style={{
				backgroundColor: "var(--bg-color)",
				color: "var(--text-color)",
				minHeight: "250px",
			}}
		>
			<motion.div ref={ref} animate={controls}>
				<Container fluid>
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
									<Link
										href="/suchmaschinenoptimierung"
										className="footer-links"
									>
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
										<Card.Text className="hover py-2">
											{t("footer10")}
										</Card.Text>
									</Link>
									<Link href="/impressium" className="footer-links">
										<Card.Text className="hover py-2">Cookies</Card.Text>
									</Link>
									<Link href="/impressium" className="footer-links">
										<Card.Text className="hover py-2">Impressum</Card.Text>
									</Link>
									<Link href="/impressium" className="footer-links">
										<Card.Text className="hover py-2">
											Data Protection
										</Card.Text>
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
										aria-label="Pixel-Genie Facebook"
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
						<Col lg={3} sm={6} className="mx-auto" id="kontakt">
							<Card className="bg-transparent border-0 shadow-lg pt-3">
								<Card.Title
									className="my-3 text-uppercase"
									style={{ color: "var(--text-color)" }}
								>
									{t("footer14")}
								</Card.Title>
								<a
									href="mailto:mr.krystian.stawarczyk@gmail.com"
									className="py-5 hover text-bold contact-links d-block"
									style={{
										color: "var(--text-color)",
										textDecoration: "none",
										cursor: "pointer",
									}}
									aria-label="E-Mail senden an mr.krystian.stawarczyk@gmail.com"
								>
									mr.krystian.stawarczyk@gmail.com
								</a>
							</Card>
						</Col>
					</Row>

					<Row className="text-center my-2">
						<Col>
							<p
								className="text-bold"
								style={{ color: "var(--text-color)", fontSize: "1.1rem" }}
							>
								© 2025 Pixel Genie – Alle Rechte vorbehalten
							</p>
						</Col>
					</Row>
				</Container>
			</motion.div>
		</footer>
	);
}

export default Footer;
