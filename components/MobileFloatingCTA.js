"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { hasCookie } from "cookies-next";
import { gaEvent } from "@/lib/analytics";
import AutoTranslate from "./AutoTranslate";

const ContactModal = dynamic(() => import("./ContactModal"), { ssr: false });

export default function MobileFloatingCTA() {
	const [visible, setVisible] = useState(false);
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		const showCta = () => {
			if (hasCookie("essentialConsent") || hasCookie("marketingConsent")) {
				setTimeout(() => setVisible(true), 1000);
			}
		};
		showCta();

		window.addEventListener("cookieAccepted", showCta);
		window.addEventListener("cookieEssential", showCta);
		return () => {
			window.removeEventListener("cookieAccepted", showCta);
			window.removeEventListener("cookieEssential", showCta);
		};
	}, []);

	if (!visible) return null;

	const handleClick = () => {
		if (hasCookie("marketingConsent")) {
			gaEvent("cta_click", {
				location: "mobile_floating",
				page: window.location.pathname,
			});
		}
		setShowModal(true);
	};

	return (
		<>
			<div className="mobile-floating-cta text-center rounded">
				<button
					onClick={handleClick}
					className="btn-premium-footer text-white fw-bold w-100"
					style={{ border: "none" }}
				>
					🚀 <AutoTranslate>Jetzt starten</AutoTranslate>
				</button>
			</div>

			<ContactModal
				show={showModal}
				onHide={() => setShowModal(false)}
				topic="Mobile CTA"
			/>
		</>
	);
}
