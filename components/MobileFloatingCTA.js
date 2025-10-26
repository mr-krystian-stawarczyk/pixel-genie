"use client";
import React, { useEffect, useState } from "react";
import { hasCookie } from "cookies-next";
import { gaEvent } from "@/lib/analytics";
import AutoTranslate from "./AutoTranslate"; // ✅ DODANE

export default function MobileFloatingCTA() {
	const [visible, setVisible] = useState(false);

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

		window.open(
			`mailto:pixelgenie.marketing@gmail.com?subject=${encodeURIComponent(
				"Pixel Genie Webdesign Anfrage"
			)}&body=${encodeURIComponent(
				"Hallo Pixel Genie,\n\nIch interessiere mich für eine neue Website oder SEO-Beratung.\n\nName:\nFirma:\nTelefon:\n\nVielen Dank!"
			)}`,
			"_blank"
		);
	};

	return (
		<div className="mobile-floating-cta text-center rounded">
			<button
				onClick={handleClick}
				className="btn-premium-footer text-white fw-bold w-100"
				style={{ border: "none" }}
			>
				🚀 <AutoTranslate>Jetzt starten</AutoTranslate>
			</button>
		</div>
	);
}
