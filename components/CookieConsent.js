// /components/CookieConsent.js
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";

export default function CookieConsent() {
	const [cookies, setCookie] = useCookies(["marketingConsent"]);
	const [showBanner, setShowBanner] = useState(false);

	useEffect(() => {
		if (!cookies.marketingConsent) {
			setShowBanner(true);
		}
	}, [cookies.marketingConsent]);

	const acceptAll = () => {
		setCookie("marketingConsent", "true", {
			path: "/",
			sameSite: "Lax",
			secure: true,
			maxAge: 365 * 24 * 60 * 60,
		});
		setShowBanner(false);
	};

	const essentialOnly = () => {
		setCookie("marketingConsent", "false", {
			path: "/",
			sameSite: "Lax",
			secure: true,
			maxAge: 365 * 24 * 60 * 60,
		});
		setShowBanner(false);
	};

	if (!showBanner) return null;

	return (
		<div
			style={{
				position: "fixed",
				bottom: 0,
				width: "100%",
				background: "rgba(0,0,0,.85)",
				zIndex: 999,
			}}
		>
			<div className="container py-3 d-flex justify-content-between align-items-center">
				<span className="text-white">Wir verwenden Cookies.</span>
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
