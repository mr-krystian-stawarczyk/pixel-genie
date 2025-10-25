// CookieConsent.js — NOWA WERSJA
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";

export default function CookieConsent() {
	const [cookies, setCookie, removeCookie] = useCookies([
		"essentialConsent",
		"marketingConsent",
	]);
	const [showBanner, setShowBanner] = useState(false);

	useEffect(() => {
		if (!cookies.essentialConsent && !cookies.marketingConsent) {
			setShowBanner(true);
		}
	}, [cookies]);

	const acceptAll = () => {
		setCookie("essentialConsent", "true", {
			path: "/",
			maxAge: 360 * 24 * 60 * 60,
		});
		setCookie("marketingConsent", "true", {
			path: "/",
			maxAge: 360 * 24 * 60 * 60,
		});
		setShowBanner(false);
	};

	const essentialOnly = () => {
		setCookie("essentialConsent", "true", {
			path: "/",
			maxAge: 360 * 24 * 60 * 60,
		});
		removeCookie("marketingConsent", { path: "/" });
		setShowBanner(false);
	};

	if (!showBanner) return null;

	return (
		<div
			style={{
				position: "fixed",
				bottom: 0,
				left: 0,
				width: "100%",
				background: "rgba(0,0,0,0.9)",
				color: "white",
				padding: "1.2rem 0.8rem",
				zIndex: 999,
			}}
		>
			<div className="d-flex justify-content-between align-items-center container">
				<p style={{ maxWidth: "700px", margin: 0 }}>
					Wir verwenden Cookies, um unsere Website zu verbessern. Weitere
					Details findest du im Impressum.
				</p>
				<div className="d-flex gap-2">
					<button className="btn btn-outline-light" onClick={essentialOnly}>
						Nur essenziell
					</button>
					<button className="btn btn-warning" onClick={acceptAll}>
						🚀 Alle Akzeptieren
					</button>
				</div>
			</div>
		</div>
	);
}
