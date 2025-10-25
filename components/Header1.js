"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const ParticlesComponent = dynamic(() => import("./ParticlesComponent"), {
	ssr: false,
	loading: () => <div style={{ position: "absolute", inset: 0 }} />,
});

export default function Header1() {
	const [showParticles, setShowParticles] = useState(false);
	const { theme } = useTheme();
	const sectionRef = useRef(null);

	useEffect(() => {
		const prefersReducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)"
		).matches;
		const isDesktop = window.innerWidth > 768;
		if (!isDesktop || prefersReducedMotion) return;
		const timer = setTimeout(() => setShowParticles(true), 1000);
		return () => clearTimeout(timer);
	}, []);

	// ✉️ Mail do "kostenloses Audit"
	const handleAuditClick = () => {
		window.open(
			"mailto:pixelgenie.marketing@gmail.com?subject=Kostenloses%20Website%20Audit%20Anfrage&body=Hallo%20Pixel%20Genie%2C%0A%0AIch%20möchte%20ein%20kostenloses%20Website-Audit%20anfordern.%0A%0ABitte%20überprüfen%20Sie%20meine%20Website%20und%20geben%20Sie%20mir%20ein%20Feedback%20zu%20Design%2C%20SEO%20und%20Performance.%0A%0AHier%20sind%20meine%20Details%3A%0A%0AName%3A%0AFirma%3A%0AWebsite%3A%0ATelefon%3A%0A%0AVielen%20Dank!",
			"_blank"
		);
	};

	// ✉️ Ogólny kontakt – klient może zapytać o SEO, Webdesign itd.
	const handleEmailClick = () => {
		window.open(
			"mailto:pixelgenie.marketing@gmail.com?subject=Allgemeine%20Anfrage%20an%20Pixel%20Genie&body=Hallo%20Pixel%20Genie%2C%0A%0AIch%20habe%20eine%20Frage%20zu%20Ihren%20Dienstleistungen.%0A%0AIch%20interessiere%20mich%20für%3A%0A%5B%20%5D%20Webdesign%0A%5B%20%5D%20SEO%0A%5B%20%5D%20Social%20Media%20Marketing%0A%5B%20%5D%20Branding%0A%0ABitte%20kontaktieren%20Sie%20mich%20unter%3A%0AName%3A%0AFirma%3A%0ATelefon%3A%0AWebsite%3A%0A%0AVielen%20Dank!",
			"_blank"
		);
	};

	return (
		<header className="header-container position-relative" ref={sectionRef}>
			{/* 🌌 Background + Particles */}
			<div
				className="particles-container"
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100vh",
					overflow: "hidden",
					background:
						theme === "light"
							? "#ffffff"
							: "linear-gradient(180deg, #040b1a 0%, #000000 100%)",
					transition: "background 0.4s ease-in-out",
				}}
			>
				{showParticles && <ParticlesComponent />}
			</div>

			{/* 🧠 Hero Content */}
			<Container
				className="header-content-container d-flex justify-content-center align-items-center text-center"
				style={{
					minHeight: "100vh",
					position: "relative",
					zIndex: 1,
				}}
			>
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.2, ease: "easeOut" }}
				>
					<Card className="bg-transparent border-0 blur p-md-3 p-md-5 rounded-4">
						<Card.Body>
							<h1 className="fw-bold mb-3 lh-base display-5 mt-5">
								Webseiten erstellen mit <br /> Pixel-Genie – Ihre Agentur für
								modernes Webdesign, SEO & Marketing in Nettetal
							</h1>
							<p className="lead mb-4">
								Steigern Sie Ihre Online-Präsenz mit professionellen Websites,
								die Design, Performance und Sichtbarkeit vereinen.
							</p>

							<div className="d-flex flex-column flex-md-row justify-content-center gap-3">
								<Button
									as={Link}
									href="/webseitenerstellen"
									className="btn-lg btn-nav"
								>
									<span className="text-white">Webseiten erstellen</span>
								</Button>
								<Button
									as={Link}
									href="/suchmaschinenoptimierung"
									className="btn-lg btn-nav"
								>
									<span className="text-white">SEO Optimierung</span>
								</Button>
								<Button
									as={Link}
									href="/socialmediamarketing"
									className="btn-lg btn-nav"
								>
									<span className="text-white">Social Media Marketing</span>
								</Button>
							</div>
						</Card.Body>

						<Card.Body className="mt-4">
							<div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
								{/* 🚀 Kostenloses Audit – otwiera gotowego maila */}
								<Button
									as="button"
									onClick={handleAuditClick}
									className="btn-premium-footer text-white fw-bold"
									style={{
										cursor: "pointer",
										boxShadow: "0 0 10px rgba(255,255,255,0.2)",
									}}
								>
									🚀 Jetzt kostenloses Audit anfordern
								</Button>

								{/* ✉️ Ogólny kontakt */}
								<Button
									as="button"
									onClick={handleEmailClick}
									className="btn-premium-footer text-white fw-bold"
									style={{
										cursor: "pointer",
										boxShadow: "0 0 10px rgba(255,255,255,0.2)",
									}}
								>
									E-Mail Kontakt
								</Button>
							</div>
						</Card.Body>
					</Card>
				</motion.div>
			</Container>
		</header>
	);
}
