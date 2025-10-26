import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";
import Image from "next/image";
import FooterLinksSEO from "./FooterLinksSEO";
import {
	AiOutlineFacebook,
	AiFillLinkedin,
	AiOutlineReddit,
} from "react-icons/ai";
import AutoTranslate from "@/components/AutoTranslate";
import { FaXTwitter } from "react-icons/fa6";
import { hasCookie } from "cookies-next"; // ✅ tracking only after consent
import { gaEvent } from "@/lib/analytics"; // ✅ GA4 tracking

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

	// ✅ Tracking CTA
	const handleFooterEmail = () => {
		if (hasCookie("marketingConsent")) {
			gaEvent("cta_click", {
				location: "footer",
				page: window.location.pathname,
			});
		}

		window.open(
			"mailto:pixelgenie.marketing@gmail.com?subject=Pixel%20Genie%20Webdesign%20Anfrage&body=Hallo%20Pixel%20Genie%2C%0A%0AIch%20interessiere%20mich%20f%C3%BCr%20eine%20neue%20Website%20oder%20SEO-Beratung.%0A%0AName%3A%0AFirma%3A%0ATelefon%3A%0A%0AVielen%20Dank!",
			"_blank"
		);
	};

	// ✅ Helper social tracking
	const handleSocialClick = (platform) => {
		if (hasCookie("marketingConsent")) {
			gaEvent("social_click", {
				platform,
				page: window.location.pathname,
			});
		}
	};

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
										<AutoTranslate>{t("footer1")}</AutoTranslate>
									</Card.Title>
									<Link href="/webseitenerstellen" className="footer-links">
										<Card.Text className="hover py-2">
											<AutoTranslate>{t("footer2")}</AutoTranslate>
										</Card.Text>
									</Link>
									<Link
										href="/suchmaschinenoptimierung"
										className="footer-links"
									>
										<Card.Text className="hover py-2">
											<AutoTranslate>{t("footer3")}</AutoTranslate>
										</Card.Text>
									</Link>
									<Link href="/branding" className="footer-links">
										<Card.Text className="hover py-2">
											<AutoTranslate>{t("footer4")}</AutoTranslate>
										</Card.Text>
									</Link>
									<Link href="/webdesign" className="footer-links">
										<Card.Text className="hover py-2">
											<AutoTranslate>{t("footer5")}</AutoTranslate>
										</Card.Text>
									</Link>
									<Link href="/socialmediamarketing" className="footer-links">
										<Card.Text className="hover py-2">
											<AutoTranslate>{t("footer6")}</AutoTranslate>
										</Card.Text>
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
										<AutoTranslate>{t("footer7")}</AutoTranslate>
									</Card.Title>
									<Link href="/pixelgeniehistory" className="footer-links">
										<Card.Text className="hover py-2">
											<AutoTranslate>{t("footer8")}</AutoTranslate>
										</Card.Text>
									</Link>
									<Link href="/webdesignblog" className="footer-links">
										<Card.Text className="hover py-2">
											<AutoTranslate>{t("footer10")}</AutoTranslate>
										</Card.Text>
									</Link>
									<Link href="/impressium" className="footer-links">
										<Card.Text className="hover py-2">
											<AutoTranslate>Cookies</AutoTranslate>
										</Card.Text>
									</Link>
									<Link href="/impressium" className="footer-links">
										<Card.Text className="hover py-2">
											<AutoTranslate>Impressum</AutoTranslate>
										</Card.Text>
									</Link>
									<Link href="/impressium" className="footer-links">
										<Card.Text className="hover py-2">
											<AutoTranslate>Data Protection</AutoTranslate>
										</Card.Text>
									</Link>
								</Card.Body>
							</Card>
						</Col>

						{/* Kolumna 4 */}
						<Col
							lg={3}
							sm={6}
							className="justify-content-center text-center align-items-center"
							id="kontakt"
						>
							<Card className="bg-transparent border-0 shadow-lg pt-3 text-center">
								<Card.Title
									className="my-3 text-uppercase"
									style={{ color: "var(--text-color)" }}
								>
									<AutoTranslate>{t("footer14")}</AutoTranslate>
								</Card.Title>

								<p
									style={{
										color: "var(--text-color)",
										fontSize: "1rem",
										marginBottom: "1rem",
										padding: "1rem",
									}}
								>
									<AutoTranslate>
										Haben Sie Fragen oder wünschen Sie ein unverbindliches
										Angebot?
									</AutoTranslate>
								</p>

								<button
									onClick={handleFooterEmail}
									className="btn-premium-footer hover mx-auto d-block"
								>
									<AutoTranslate>✨ Jetzt E-Mail senden</AutoTranslate>
								</button>

								<p
									className="mt-3"
									style={{
										fontSize: "0.9rem",
										color: "var(--text-color)",
										opacity: 0.8,
									}}
								>
									<AutoTranslate>
										Antwort garantiert innerhalb von 24 Stunden.
									</AutoTranslate>
								</p>
							</Card>
						</Col>

						{/* Kolumna 3 — Social */}
						<Col lg={3} sm={6} className="mx-auto">
							<Card className="bg-transparent border-0 shadow-lg text-center">
								<Card.Body className="d-flex flex-column align-items-center">
									<Card.Title
										className="my-3 text-uppercase"
										style={{ color: "var(--text-color)" }}
									>
										<AutoTranslate>Folge uns</AutoTranslate>
									</Card.Title>

									<div className="d-flex justify-content-center gap-4 flex-wrap">
										<Link
											href="https://www.facebook.com/profile.php?id=100090817536941"
											target="_blank"
											aria-label="Facebook"
											onClick={() => handleSocialClick("facebook")}
											className="social-icon-wrapper"
										>
											<AiOutlineFacebook className="social-icon-premium fb" />
										</Link>

										<Link
											href="https://www.linkedin.com/in/pixel-genie-nettetal/"
											target="_blank"
											aria-label="LinkedIn"
											onClick={() => handleSocialClick("linkedin")}
											className="social-icon-wrapper"
										>
											<AiFillLinkedin className="social-icon-premium li" />
										</Link>

										<Link
											href="https://x.com/PixelGenieWeb"
											target="_blank"
											aria-label="X / Twitter"
											onClick={() => handleSocialClick("twitter")}
											className="social-icon-wrapper"
										>
											<FaXTwitter className="social-icon-premium x" />
										</Link>

										<Link
											href="https://www.reddit.com/user/PixelGenieNettetal/"
											target="_blank"
											aria-label="Reddit"
											onClick={() => handleSocialClick("reddit")}
											className="social-icon-wrapper"
										>
											<AiOutlineReddit className="social-icon-premium reddit" />
										</Link>
									</div>

									<p
										className="mt-3"
										style={{
											fontSize: "0.9rem",
											color: "var(--text-color)",
											opacity: 0.8,
										}}
									>
										<AutoTranslate>
											Folge uns auf Social Media für{" "}
											<strong>Insights & Trends</strong>
										</AutoTranslate>
									</p>
								</Card.Body>
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
