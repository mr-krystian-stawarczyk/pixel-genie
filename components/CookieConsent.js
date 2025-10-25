import { useState, useEffect } from "react";
import { hasCookie, setCookie, deleteCookie } from "cookies-next";

export default function CookieConsent() {
	const [showBanner, setShowBanner] = useState(false);

	useEffect(() => {
		if (!hasCookie("essentialConsent") && !hasCookie("marketingConsent")) {
			setShowBanner(true);
		}
	}, []);

	// 🔹 Pełna zgoda (Analytics + CTA)
	const acceptAll = () => {
		setCookie("essentialConsent", "true", {
			maxAge: 60 * 60 * 24 * 365,
			path: "/",
			sameSite: "Lax",
		});
		setCookie("marketingConsent", "true", {
			maxAge: 60 * 60 * 24 * 365,
			path: "/",
			sameSite: "Lax",
		});
		setShowBanner(false);
		window.dispatchEvent(new Event("cookieAccepted")); // CTA + GA (jak w ZIP)
	};

	// 🔹 Tylko niezbędne (bez Analytics, ale CTA widoczne)
	const essentialOnly = () => {
		setCookie("essentialConsent", "true", {
			maxAge: 60 * 60 * 24 * 365,
			path: "/",
			sameSite: "Lax",
		});
		deleteCookie("marketingConsent", { path: "/" });
		setShowBanner(false);
		window.dispatchEvent(new Event("cookieEssential")); // CTA bez GA (jak w ZIP)
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
				backdropFilter: "blur(8px)",
				boxShadow: "0 -4px 15px rgba(0,0,0,0.4)",
			}}
		>
			<div className="container text-center text-md-start d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
				<p
					className="mb-2 mb-md-0 text-white"
					style={{ maxWidth: "750px", fontSize: "0.95rem" }}
				>
					Wir verwenden Cookies, um unsere Website zu verbessern. Einige sind
					essenziell, andere helfen uns, Ihr Erlebnis zu optimieren.
					<br />
					Weitere Details findest du in unserer{" "}
					<a
						href="/impressium"
						className="text-warning fw-bold ms-1"
						target="_blank"
						rel="noopener noreferrer"
					>
						Datenschutzerklärung &amp; Impressum
					</a>
					.
				</p>

				<div className="d-flex flex-column flex-md-row gap-2">
					<button
						onClick={essentialOnly}
						className="btn btn-outline-light btn-sm px-4 py-2 fw-semibold rounded-3"
					>
						Nur essenziell
					</button>

					{/* 🔥 Przyciągający wzrok przycisk */}
					<button
						onClick={acceptAll}
						className="btn-premium-footer text-white fw-bold px-4 py-2 rounded-3 shadow-sm"
						style={{
							background:
								"linear-gradient(90deg, #ff7b00 0%, #ffb800 50%, #ff9100 100%)",
							border: "none",
							fontSize: "1rem",
							transition: "transform 0.2s ease",
						}}
						onMouseEnter={(e) =>
							(e.currentTarget.style.transform = "scale(1.05)")
						}
						onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
					>
						🚀 Alle Akzeptieren
					</button>
				</div>
			</div>
		</div>
	);
}
