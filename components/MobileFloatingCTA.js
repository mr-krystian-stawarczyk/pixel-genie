import React, { useEffect, useState } from "react";
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
			gaEvent("cta_click", {
				location: "mobile_floating",
				page: window.location.pathname,
			});
		}

		window.open(
			"mailto:pixelgenie.marketing@gmail.com?subject=Pixel%20Genie%20Webdesign%20Anfrage&body=Hallo%20Pixel%20Genie%2C%0A%0AIch%20interessiere%20mich%20f%C3%BCr%20eine%20neue%20Website%20oder%20SEO-Beratung.%0A%0AName%3A%0AFirma%3A%0ATelefon%3A%0A%0AVielen%20Dank!",
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
				🚀 Jetzt starten
			</button>
		</div>
	);
}
