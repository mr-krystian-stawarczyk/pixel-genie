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

/**
 * ✅ Framer Motion – wczytywany tylko w przeglądarce
 *    i z krótszą animacją (LCP szybciej „domknięty”)
 */
let MotionDiv = (props) => <div {...props} />;
if (typeof window !== "undefined") {
	import("framer-motion").then((mod) => {
		MotionDiv = mod.motion.div;
	});
}

/**
 * ✅ Particles ładujemy dopiero, gdy przeglądarka ma „luźny czas”
 *    lub tuż po zarejestrowaniu LCP — lepszy wynik Lighthouse.
 */
const ParticlesComponent = dynamic(() => import("./ParticlesComponent"), {
	ssr: false,
	loading: () => null,
});

/** Ustawienie strategii ładowania particles (zachowuje Twój styl) */
const PARTICLES_DELAY_AFTER_LCP_MS = 400; // łagodny bufor, nie widać różnicy wizualnie

export default function Header1() {
	const [showParticles, setShowParticles] = useState(false);
	const { theme } = useTheme();
	const { i18n } = useTranslation();
	const sectionRef = useRef(null);

	/**
	 * ✅ Ładowanie Particles „po LCP” / idle:
	 *  - najpierw spróbuj po zarejestrowaniu LCP (PerformanceObserver),
	 *  - jeśli nie dostępny, użyj requestIdleCallback,
	 *  - na końcu fallback na setTimeout.
	 */
	useEffect(() => {
		let done = false;

		const enableParticles = () => {
			if (done) return;
			done = true;
			setShowParticles(true);
		};

		// 1) Po LCP (najlepsze pod Lighthouse)
		if (typeof window !== "undefined" && "PerformanceObserver" in window) {
			try {
				const po = new PerformanceObserver((list) => {
					const entries = list.getEntries();
					const lcpSeen = entries.some(
						(e) => e.entryType === "largest-contentful-paint"
					);
					if (lcpSeen) {
						setTimeout(enableParticles, PARTICLES_DELAY_AFTER_LCP_MS);
						po.disconnect();
					}
				});
				po.observe({ type: "largest-contentful-paint", buffered: true });

				// Bezpieczeństwo: gdyby LCP nie przyszło (np. WebView), fallback po 2s
				const fallback = setTimeout(() => {
					if (!done) enableParticles();
				}, 2000);
				return () => {
					po.disconnect();
					clearTimeout(fallback);
				};
			} catch {
				// przechodzimy do idle
			}
		}

		// 2) requestIdleCallback (świetny kompromis UX + LCP)
		if (typeof window !== "undefined" && "requestIdleCallback" in window) {
			const id = window.requestIdleCallback(() => enableParticles(), {
				timeout: 2000,
			});
			return () => window.cancelIdleCallback && window.cancelIdleCallback(id);
		}

		// 3) Fallback – delikatne opóźnienie
		const t = setTimeout(() => enableParticles(), 1000);
		return () => clearTimeout(t);
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
			{/* 🔒 warstwa tła nie łapie kliknięć, nie zasłania UI */}
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
				{showParticles && <ParticlesComponent />}
			</div>

			<Container
				className="d-flex flex-column justify-content-center align-items-center text-center position-relative header-content"
				style={{ minHeight: "100vh" }}
			>
				<MotionDiv
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut" }} // ⏩ krócej = szybszy LCP
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
