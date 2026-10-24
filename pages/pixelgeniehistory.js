import React from "react";
import Head from "next/head";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";
import citiesData from "@/data/citiesData";
// Dynamiczny import komponentów
import dynamic from "next/dynamic";
import About1 from "@/components/About1";

// Dynamiczny import komponentów

const About2 = dynamic(() => import("@/components/About2"), { ssr: false });
const About3 = dynamic(() => import("@/components/About3"), { ssr: false });
const About4 = dynamic(() => import("@/components/About4"), { ssr: false });
const GoogleReviews = dynamic(() => import("@/components/GoogleReviews"), {
	ssr: false,
});
function PixelgenieHistory() {
	const cityData = citiesData.find((c) => c.city === "nettetal");

	return (
		<div className="mt-5 pt-5">
			<Head>
				<title>Über Pixel-Genie | Webdesign aus Nettetal</title>
				<meta
					name="description"
					content="Pixel-Genie: Lernen Sie Krystian Stawarczyk kennen – den Ansprechpartner hinter Pixel-Genie in Nettetal. Persönlicher Kontakt und transparente Webdesign-Projekte."
				/>
				<meta name="robots" content="index, follow" />

				{/* Link Canonical */}
				<link rel="canonical" href="https://pixel-genie.de/pixelgeniehistory" />

				{/* Meta Open Graph */}
				<meta property="og:title" content="Über Uns – Pixel-Genie" />
				<meta
					property="og:description"
					content="Erfahren Sie mehr über Pixel-Genie, unsere Philosophie und die Arbeit von Krystian Stawarczyk für Webdesign und Online-Marketing."
				/>
				<meta property="og:image" content="/assets/og-default.jpg" />
				<meta property="og:type" content="website" />
			</Head>

			<LocalBusinessJsonLd cityData={cityData} />
			{/* Komponent dynamicznie importowany */}
			<About1 />
			<About4 />
			<GoogleReviews />
			<About2 />
			<About3 />
		</div>
	);
}

export default PixelgenieHistory;
