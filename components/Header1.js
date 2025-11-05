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
import motion from "./MotionLite";

const ContactButton = dynamic(() => import("./ContactButton"), { ssr: false });
const MotionDiv = motion.div;
const ParticlesComponent = dynamic(() => import("./ParticlesComponent"), {
	ssr: false,
	loading: () => null,
});

export default function Header1() {
	const [showParticles, setShowParticles] = useState(false);
	const { theme } = useTheme();
	const { i18n } = useTranslation();
	const sectionRef = useRef(null);

	useEffect(() => {
		let done = false;
		const isMobile =
			typeof window !== "undefined" ? window.innerWidth < 1024 : false;

		const enableParticles = () => {
			if (done || isMobile) {
				console.log(
					"💡 Particles disabled on mobile — using gradient background"
				);
				return;
			}
			done = true;
			setShowParticles(true);
		};

		const onLoad = () => {
			if ("requestIdleCallback" in window) {
				const id = window.requestIdleCallback(() => enableParticles(), {
					timeout: 2500,
				});
				const t = setTimeout(() => enableParticles(), 2500);
				window.addEventListener(
					"beforeunload",
					() => {
						window.cancelIdleCallback && window.cancelIdleCallback(id);
						clearTimeout(t);
					},
					{ once: true }
				);
			} else {
				setTimeout(() => enableParticles(), 1600);
			}
		};

		if (document.readyState === "complete") onLoad();
		else window.addEventListener("load", onLoad, { once: true });

		return () => window.removeEventListener("load", onLoad);
	}, []);

	const handleCta = useCallback((type) => {
		if (hasCookie("marketingConsent")) {
			gaEvent("cta_click", {
				location: `header_${type}`,
				page: typeof window !== "undefined" ? window.location.pathname : "/",
			});
		}

		const subject =
			type === "audit"
				? "Kostenloses%20Website%20Audit%20Anfrage"
				: "Allgemeine%20Anfrage%20an%20Pixel%20Genie";
		if (typeof window !== "undefined") {
			window.open(
				`mailto:pixelgenie.marketing@gmail.com?subject=${subject}`,
				"_blank"
			);
		}
	}, []);

	return (
		<header
			className="header-container position-relative overflow-hidden"
			ref={sectionRef}
			style={{ minHeight: "100vh" }}
			aria-label="Hero Header"
		>
			{/* ✅ Warstwa tła */}
			<div
				className="position-absolute w-100 h-100"
				style={{
					inset: 0,
					zIndex: 0,
					transition: "background 0.4s ease-in-out",
					background:
						showParticles && theme === "dark"
							? "linear-gradient(180deg, #040b1a 0%, #000000 100%)"
							: showParticles && theme === "light"
							? "#ffffff"
							: theme === "dark"
							? "radial-gradient(circle at 50% 40%, rgba(0, 64, 128, 0.35) 0%, rgba(0, 0, 32, 0.9) 80%)"
							: "linear-gradient(135deg, rgba(190,220,255,0.9) 0%, rgba(100,150,255,0.85) 60%, rgba(50,80,200,0.8) 100%)",
					boxShadow: "inset 0 0 80px rgba(0, 90, 200, 0.25)",
					backdropFilter: "blur(6px) saturate(130%)",
				}}
			>
				{/* Renderuj cząstki tylko na desktop */}
				{showParticles && <ParticlesComponent />}
			</div>

			{/* ✅ Główna zawartość */}
			<Container
				className="d-flex flex-column justify-content-center align-items-center text-center position-relative header-content"
				style={{ minHeight: "100vh", zIndex: 2 }}
			>
				<MotionDiv
					className="motion-safe"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: "easeOut" }}
					viewport={{ once: true, amount: 0.2 }}
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

							<nav aria-label="Hauptaktionen">
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
							</nav>
						</Card.Body>

						<Card.Body className="mt-4">
							<div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
								<ContactButton
									topic="Kostenlose Website Analyse"
									className="btn-premium-footer text-white fw-bold"
								>
									🚀{" "}
									<AutoTranslate>
										Jetzt kostenloses Audit anfordern
									</AutoTranslate>
								</ContactButton>
							</div>
						</Card.Body>
					</Card>
				</MotionDiv>
			</Container>
		</header>
	);
}
