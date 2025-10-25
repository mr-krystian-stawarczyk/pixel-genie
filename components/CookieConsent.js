import { setCookie, hasCookie } from "cookies-next";
import { useState, useEffect } from "react";

export default function CookieConsent() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (!hasCookie("marketingConsent")) {
			setShow(true);
		}
	}, []);

	const acceptAll = () => {
		setCookie("marketingConsent", "true", {
			path: "/",
			maxAge: 365 * 24 * 3600,
			sameSite: "Lax",
		});
		setShow(false);
		// 👇 Nie reloadujemy — GA i tak wykryje cookie automatycznie
	};

	const essentialOnly = () => {
		setCookie("marketingConsent", "false", {
			path: "/",
			maxAge: 365 * 24 * 3600,
			sameSite: "Lax",
		});
		setShow(false);
	};

	if (!show) return null;

	return (
		<div className="cookie-banner">
			<div className="container d-flex justify-content-between align-items-center">
				<p className="mb-0 text-white">
					Wir verwenden Cookies zur Verbesserung unserer Website.
				</p>
				<div className="d-flex gap-2">
					<button
						className="btn btn-outline-light btn-sm"
						onClick={essentialOnly}
					>
						Nur essenziell
					</button>
					<button className="btn btn-warning btn-sm" onClick={acceptAll}>
						✅ Alle Akzeptieren
					</button>
				</div>
			</div>
		</div>
	);
}
