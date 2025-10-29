"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import AutoTranslate from "./AutoTranslate";
import { hasCookie } from "cookies-next";
import { gaEvent } from "@/lib/analytics";

const ParticlesComponent = dynamic(() => import("./ParticlesComponent"), {
	ssr: false,
	loading: () => <div style={{ position: "absolute", inset: 0 }} />,
});

export default function Header1() {
	const [showParticles, setShowParticles] = useState(false);
	const { theme } = useTheme();
	const { i18n } = useTranslation();
	const sectionRef = useRef(null);

	useEffect(() => {
		const prefersReducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)"
		).matches;
		if (!prefersReducedMotion && window.innerWidth > 768) {
			setTimeout(() => setShowParticles(true), 1000);
		}
	}, []);

	const handleAuditClick = () => {
		if (hasCookie("marketingConsent")) {
			gaEvent("cta_click", {
				location: "header_audit",
				page: window.location.pathname,
			});
		}
		window.open(
			"mailto:pixelgenie.marketing@gmail.com?subject=Kostenloses%20Website%20Audit%20Anfrage",
			"_blank"
		);
	};

	const handleEmailClick = () => {
		if (hasCookie("marketingConsent")) {
			gaEvent("cta_click", {
				location: "header_contact",
				page: window.location.pathname,
			});
		}
		window.open(
			"mailto:pixelgenie.marketing@gmail.com?subject=Allgemeine%20Anfrage%20an%20Pixel%20Genie",
			"_blank"
		);
	};

	return (
		<header className="header-container position-relative" ref={sectionRef}>
			<div
				className="particles-container"
				style={{
					position: "absolute",
					inset: 0,
					background:
						theme === "light"
							? "#ffffff"
							: "linear-gradient(180deg, #040b1a 0%, #000000 100%)",
					transition: "background 0.4s ease-in-out",
				}}
			>
				{showParticles && <ParticlesComponent />}
			</div>

			<Container
				className="header-content-container d-flex justify-content-center align-items-center text-center"
				style={{ minHeight: "100vh", position: "relative", zIndex: 1 }}
			>
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.2 }}
				>
					<Card className="bg-transparent border-0 blur p-md-3 p-md-5 rounded-4">
						<Card.Body>
							<h1 className="fw-bold mb-3 lh-base display-5 mt-5">
								<AutoTranslate>
									{
										"Webseiten erstellen mit Pixel-Genie – Ihre Agentur für modernes Webdesign, SEO & Marketing in Nettetal"
									}
								</AutoTranslate>
							</h1>

							<p className="lead mb-4">
								<AutoTranslate>
									{
										"Steigern Sie Ihre Online Präsenz mit professionellen Websites, die Design, Performance und Sichtbarkeit vereinen."
									}
								</AutoTranslate>
							</p>

							<div className="d-flex flex-column flex-md-row justify-content-center gap-3">
								<Button
									as={Link}
									href="/webseitenerstellen"
									className="btn-lg btn-nav"
								>
									<AutoTranslate>{"Webseiten erstellen"}</AutoTranslate>
								</Button>

								<Button
									as={Link}
									href="/suchmaschinenoptimierung"
									className="btn-lg btn-nav"
								>
									<AutoTranslate>{"SEO Optimierung"}</AutoTranslate>
								</Button>

								<Button
									as={Link}
									href="/socialmediamarketing"
									className="btn-lg btn-nav"
								>
									<AutoTranslate>{"Social Media Marketing"}</AutoTranslate>
								</Button>
							</div>
						</Card.Body>

						<Card.Body className="mt-4">
							<div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
								<Button
									as="button"
									onClick={handleAuditClick}
									className="btn-premium-footer text-white fw-bold"
								>
									🚀{" "}
									<AutoTranslate>
										{"Jetzt kostenloses Audit anfordern"}
									</AutoTranslate>
								</Button>

								<Button
									as="button"
									onClick={handleEmailClick}
									className="btn-premium-footer text-white fw-bold"
								>
									<AutoTranslate>{"E-Mail Kontakt"}</AutoTranslate>
								</Button>
							</div>
						</Card.Body>
					</Card>
				</motion.div>
			</Container>
		</header>
	);
}
