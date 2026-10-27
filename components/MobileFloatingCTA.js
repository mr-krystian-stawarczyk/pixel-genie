"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { hasCookie } from "cookies-next";
import { gaEvent } from "@/lib/analytics";
import AutoTranslate from "./AutoTranslate";


export default function MobileFloatingCTA() {
	const [visible, setVisible] = useState(false);
	const router = useRouter();

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

	if (!visible || router.pathname === "/projekt-starten") return null;

	const handleClick = () => {
		if (hasCookie("marketingConsent")) {
			gaEvent("cta_click", {
				location: "mobile_floating",
				page: window.location.pathname,
			});
		}
		router.push("/projekt-starten");
	};

	return (
		<>
			<div className="mobile-floating-cta text-center rounded">
				<button
					onClick={handleClick}
					className="btn-premium-footer text-white fw-bold w-100"
					style={{ border: "none" }}
				>
					🚀 <AutoTranslate>Website in 2 Minuten planen</AutoTranslate>
				</button>
			</div>


		</>
	);
}
