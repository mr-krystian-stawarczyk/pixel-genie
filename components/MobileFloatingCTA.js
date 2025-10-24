import React, { useEffect, useState } from "react";
import Link from "next/link";
import { hasCookie } from "cookies-next";
import { gaEvent } from "@/lib/analytics";

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
			gaEvent("cta_click", { location: "mobile_floating" });
		}
	};

	return (
		<div className="mobile-floating-cta text-center">
			<Link
				href="#kontakt"
				onClick={handleClick}
				className="btn-premium-footer text-white fw-bold w-100"
			>
				🚀 Jetzt starten
			</Link>
		</div>
	);
}
