import { setCookie, hasCookie } from "cookies-next";
import { useEffect, useState } from "react";

export default function CookieConsent() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (!hasCookie("marketingConsent")) setShow(true);
	}, []);

	const acceptAll = () => {
		setCookie("marketingConsent", "true", {
			path: "/",
			maxAge: 365 * 24 * 60 * 60,
			sameSite: "Lax",
			secure: true,
		});
		setShow(false);
		window.location.reload(); // ✅ wymusza initGA po kliknięciu!
	};

	const essentialOnly = () => {
		setCookie("marketingConsent", "false", {
			path: "/",
			maxAge: 365 * 24 * 60 * 60,
			sameSite: "Lax",
			secure: true,
		});
		setShow(false);
	};

	if (!show) return null;

	return (
		<div
			style={{
				position: "fixed",
				bottom: 0,
				width: "100%",
				background: "#000",
				padding: "1rem",
				zIndex: 9999,
			}}
		>
			<div className="container d-flex justify-content-between align-items-center">
				<span className="text-white">
					Wir verwenden Cookies um Ihr Nutzungserlebnis zu verbessern.
				</span>
				<div>
					<button
						className="btn btn-outline-light me-2"
						onClick={essentialOnly}
					>
						Nur essenziell
					</button>
					<button className="btn btn-warning" onClick={acceptAll}>
						Alle Akzeptieren 🚀
					</button>
				</div>
			</div>
		</div>
	);
}
