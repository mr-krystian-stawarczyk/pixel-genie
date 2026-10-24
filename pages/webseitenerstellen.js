import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";
import Web1 from "@/components/Web1";
// Dynamiczny import dla komponentów
const Web2 = dynamic(() => import("@/components/Web2"), { ssr: false });
const Web3 = dynamic(() => import("@/components/Web3"), { ssr: false });
const Web4 = dynamic(() => import("@/components/Web4"), { ssr: false });
const Web5 = dynamic(() => import("@/components/Web5"), { ssr: false });
const GoogleReviews = dynamic(() => import("@/components/GoogleReviews"), {
	ssr: false,
});
import WebPrices from "@/components/WebPrices";
const WebFAQ = dynamic(() => import("@/components/WebFAQ"), { ssr: false });
const HeaderCounted = dynamic(() => import("@/components/HeaderCounted"), {
	ssr: false,
});
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";

import citiesData from "@/data/citiesData";

function WebSeitenErstellen() {
	const cityData = citiesData.find((c) => c.city === "nettetal");

	return (
		<div className="mt-5 pt-5">
			<Head>
				<title>Website erstellen lassen ab 499 € | Pixel-Genie</title>
				<meta
					name="description"
					content="Professionelle Website erstellen lassen: Starter ab 499 €, Business ab 899 €. Für Selbstständige und kleine Unternehmen in Nettetal und Umgebung. Schriftlich anfragen."
				/>
				<meta name="robots" content="index, follow" />

				{/* Link Canonical */}
				<link
					rel="canonical"
					href="https://pixel-genie.de/webseitenerstellen"
				/>

				{/* Meta Open Graph */}
				<meta property="og:title" content="Website erstellen lassen ab 499 € | Pixel-Genie" />
				<meta
					property="og:description"
					content="Firmenwebsites ab 499 € mit klarem Leistungsumfang. Website-Angebot einfach schriftlich anfragen."
				/>
				<meta property="og:image" content="/assets/og-default.jpg" />
				<meta property="og:type" content="website" />
			</Head>
			<LocalBusinessJsonLd cityData={cityData} />
			<HeaderCounted />
			{/* Komponent dynamicznie importowany */}
			<GoogleReviews />
			<Web1 />
			<Web2 />
			<Web3 />
			<Web4 />
			<Web5 />
			<WebPrices />
			<WebFAQ />
		</div>
	);
}

export default WebSeitenErstellen;
