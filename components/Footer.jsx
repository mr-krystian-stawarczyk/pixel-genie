import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { AiOutlineFacebook } from "react-icons/ai";
import { useTheme } from "next-themes";
import Image from "next/image";
import FooterLinksSEO from "./FooterLinksSEO";

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
				<Container fluid id="contact">
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

						{/* Kolumna 3 – Facebook */}
						<Col lg={3} sm={6} className="mx-auto">
							<Card className="bg-transparent border-0 shadow-lg text-center">
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
										className="fb-icon-wrapper"
									>
										<AiOutlineFacebook className="fb-icon-premium" />
									</Link>

									<p
										className="mt-3"
										style={{
											fontSize: "0.9rem",
											color: "var(--text-color)",
											opacity: 0.8,
										}}
									>
										Folge uns für Tipps zu <strong>Webdesign & SEO</strong>
									</p>
								</Card.Body>
							</Card>
						</Col>

						{/* Kolumna 4 – Kontakt */}
						<Col lg={3} sm={6} className="mx-auto" id="kontakt">
							<Card className="bg-transparent border-0 shadow-lg pt-3 text-center">
								<Card.Title
									className="my-3 text-uppercase"
									style={{ color: "var(--text-color)" }}
								>
									{t("footer14")}
								</Card.Title>

								<p
									style={{
										color: "var(--text-color)",
										fontSize: "1rem",
										marginBottom: "1rem",
									}}
								>
									Haben Sie Fragen oder wünschen Sie ein unverbindliches
									Angebot?
								</p>

								<button
									onClick={() =>
										window.open(
											"mailto:pixelgenie.marketing@gmail.com?subject=Pixel%20Genie%20Webdesign%20Anfrage&body=Hallo%20Pixel%20Genie%2C%0A%0AIch%20interessiere%20mich%20f%C3%BCr%20eine%20neue%20Website%20oder%20SEO-Beratung.%0A%0AName%3A%0AFirma%3A%0ATelefon%3A%0A%0AVielen%20Dank!",
											"_blank"
										)
									}
									className="btn-premium-footer hover"
								>
									✨ Jetzt E-Mail senden
								</button>

								<p
									className="mt-3"
									style={{
										fontSize: "0.9rem",
										color: "var(--text-color)",
										opacity: 0.8,
									}}
								>
									Antwort garantiert innerhalb von 24 Stunden.
								</p>
							</Card>
						</Col>
					</Row>

					<Row>
						<Col>
							<FooterLinksSEO />
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
