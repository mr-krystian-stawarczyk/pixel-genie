"use client";
import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import dynamic from "next/dynamic";
import { hasCookie } from "cookies-next";
import { gaEvent } from "@/lib/analytics";
import AutoTranslate from "./AutoTranslate";

// ✅ dynamic importy z SSR wyłączonym
let MotionDiv = (props) => <div {...props} />;
if (typeof window !== "undefined") {
	import("framer-motion").then((mod) => {
		MotionDiv = mod.motion.div;
	});
}

const ParticlesComponent = dynamic(() => import("./ParticlesComponent"), {
	ssr: false,
	loading: () => null,
});

export default function Header1() {
	const [showParticles, setShowParticles] = useState(false);
	const { theme } = useTheme();
	const { i18n } = useTranslation();
	const sectionRef = useRef(null);

	// ✅ odroczone ładowanie tła i particle
	useEffect(() => {
		const timer = setTimeout(() => setShowParticles(true), 800);
		return () => clearTimeout(timer);
	}, []);

	const handleCta = useCallback((type) => {
		if (hasCookie("marketingConsent")) {
			gaEvent("cta_click", {
				location: `header_${type}`,
				page: window.location.pathname,
			});
		}
		const subject =
			type === "audit"
				? "Kostenloses%20Website%20Audit%20Anfrage"
				: "Allgemeine%20Anfrage%20an%20Pixel%20Genie";
		window.open(
			`mailto:pixelgenie.marketing@gmail.com?subject=${subject}`,
			"_blank"
		);
	}, []);

	return (
		<header
			className="header-container position-relative overflow-hidden"
			ref={sectionRef}
			style={{ minHeight: "100vh" }}
		>
			<div
				className="particles-container position-absolute w-100 h-100"
				style={{
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
				className="d-flex flex-column justify-content-center align-items-center text-center position-relative header-content"
				style={{ minHeight: "100vh" }}
			>
				<MotionDiv
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.9 }}
				>
					<Card className="bg-transparent border-0 blur p-md-4 rounded-4">
						<Card.Body>
							<h1 className="fw-bold mb-3 lh-base display-5 mt-5">
								<AutoTranslate>
									Webseiten erstellen mit Pixel-Genie – Ihre Agentur für
									modernes Webdesign, SEO & Marketing in Nettetal
								</AutoTranslate>
							</h1>

							<p className="lead mb-4">
								<AutoTranslate>
									Steigern Sie Ihre Online Präsenz mit professionellen Websites,
									die Design, Performance und Sichtbarkeit vereinen.
								</AutoTranslate>
							</p>

							<div className="d-flex flex-column flex-md-row justify-content-center gap-3">
								<Button
									as={Link}
									href="/webseitenerstellen"
									className="btn-lg btn-nav"
								>
									<AutoTranslate>Webseiten erstellen</AutoTranslate>
								</Button>

								<Button
									as={Link}
									href="/suchmaschinenoptimierung"
									className="btn-lg btn-nav"
								>
									<AutoTranslate>SEO Optimierung</AutoTranslate>
								</Button>

								<Button
									as={Link}
									href="/socialmediamarketing"
									className="btn-lg btn-nav"
								>
									<AutoTranslate>Social Media Marketing</AutoTranslate>
								</Button>
							</div>
						</Card.Body>

						<Card.Body className="mt-4">
							<div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
								<Button
									as="button"
									onClick={() => handleCta("audit")}
									className="btn-premium-footer text-white fw-bold"
								>
									🚀{" "}
									<AutoTranslate>
										Jetzt kostenloses Audit anfordern
									</AutoTranslate>
								</Button>

								<Button
									as="button"
									onClick={() => handleCta("contact")}
									className="btn-premium-footer text-white fw-bold"
								>
									<AutoTranslate>E-Mail Kontakt</AutoTranslate>
								</Button>
							</div>
						</Card.Body>
					</Card>
				</MotionDiv>
			</Container>
		</header>
	);
}
