import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import dynamic from "next/dynamic"; // ✅ tylko raz!
import { hasCookie } from "cookies-next";
import { gaEvent } from "@/lib/analytics";
import AutoTranslate from "./AutoTranslate";

const MotionDiv = dynamic(
	() => import("framer-motion").then((mod) => mod.motion.div),
	{ ssr: false, loading: () => <div /> }
);

const ParticlesComponent = dynamic(() => import("./ParticlesComponent"), {
	ssr: false,
	loading: () => null,
});

export default function Header1() {
	const [showParticles, setShowParticles] = useState(false);
	const { theme } = useTheme();
	const { i18n } = useTranslation();
	const sectionRef = useRef(null);

	// ✅ Particles start po pełnym 'load' + idle (bez wpływu na LCP)
	useEffect(() => {
		let done = false;
		const enableParticles = () => {
			if (done) return;
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

		if (document.readyState === "complete") {
			onLoad();
		} else {
			window.addEventListener("load", onLoad, { once: true });
		}

		return () => {
			window.removeEventListener("load", onLoad);
		};
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
			{showParticles && (
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
					aria-hidden="true"
				>
					<ParticlesComponent />
				</div>
			)}
			<Container
				className="d-flex flex-column justify-content-center align-items-center text-center position-relative header-content"
				style={{ minHeight: "100vh" }}
			>
				<MotionDiv
					className="motion-safe"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: "easeOut" }}
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
