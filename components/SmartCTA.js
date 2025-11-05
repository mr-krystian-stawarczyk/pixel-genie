"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { hasCookie } from "cookies-next";
import { gaEvent } from "@/lib/analytics";
import AutoTranslate from "@/components/AutoTranslate";

// te same komponenty co w Header1
const ContactButton = dynamic(() => import("@/components/ContactButton"), {
	ssr: false,
});
const ContactModal = dynamic(() => import("@/components/ContactModal"), {
	ssr: false,
});

export default function SmartCTA({ triggerPercent = 35 }) {
	const [show, setShow] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const hideZoneRef = useRef(null);

	useEffect(() => {
		const onScroll = () => {
			const st = window.scrollY || document.documentElement.scrollTop;
			const h = document.documentElement.scrollHeight - window.innerHeight;
			if (h <= 0) return;
			const pct = Math.round((st / h) * 100);
			const nearBottom = pct > 88;
			setShow(pct >= triggerPercent && !nearBottom);
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, [triggerPercent]);

	const handleClick = useCallback(() => {
		if (hasCookie("marketingConsent")) {
			gaEvent("cta_click", {
				location: "smart_cta_footer",
				page: typeof window !== "undefined" ? window.location.pathname : "/",
			});
		}
		setShowModal(true);
	}, []);

	return (
		<>
			{/* ✅ Sticky CTA bar */}
			<div
				className={`smart-cta ${show ? "visible" : ""}`}
				aria-hidden={!show}
				role="dialog"
			>
				<div className="smart-cta-inner">
					<div className="smart-cta-text">
						<strong>
							<AutoTranslate>Kostenlose Website-Analyse</AutoTranslate>
						</strong>
						<span>
							<AutoTranslate>
								Erhalten Sie 3 konkrete Verbesserungen – in 48h.
							</AutoTranslate>
						</span>
					</div>

					<ContactButton
						topic="Kostenlose Website Analyse"
						className="btn-premium-footer text-white fw-bold"
						onClick={handleClick}
					>
						🚀 <AutoTranslate>Jetzt anfragen</AutoTranslate>
					</ContactButton>
				</div>

				<style jsx>{`
					.smart-cta {
						position: fixed;
						left: 0;
						right: 0;
						bottom: 0;
						transform: translateY(100%);
						transition: transform 0.4s ease, opacity 0.4s ease;
						opacity: 0;
						z-index: 1200;
						background: rgba(15, 15, 15, 0.92);
						backdrop-filter: blur(10px);
						padding: 14px 18px;
					}
					.smart-cta.visible {
						transform: translateY(0);
						opacity: 1;
					}
					.smart-cta-inner {
						max-width: 1100px;
						margin: 0 auto;
						display: flex;
						gap: 16px;
						align-items: center;
						justify-content: space-between;
						color: #fff;
					}
					.smart-cta-text {
						display: flex;
						flex-direction: column;
						gap: 4px;
					}
					.smart-cta a {
						text-decoration: none;
					}
					@media (max-width: 768px) {
						.smart-cta-inner {
							flex-direction: column;
							align-items: stretch;
						}
					}
				`}</style>
			</div>

			{/* ✅ Prawdziwy modal kontaktowy (z Header1) */}
			{showModal && (
				<ContactModal
					show={showModal}
					onHide={() => setShowModal(false)}
					topic="Kostenlose Website Analyse"
				/>
			)}
		</>
	);
}
