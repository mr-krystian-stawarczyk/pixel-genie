import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";

// Dynamiczny import dla komponentów
const Web1 = dynamic(() => import("@/components/Web1"), { ssr: false });
const Web2 = dynamic(() => import("@/components/Web2"), { ssr: false });
const Web3 = dynamic(() => import("@/components/Web3"), { ssr: false });
const Web4 = dynamic(() => import("@/components/Web4"), { ssr: false });
const Web5 = dynamic(() => import("@/components/Web5"), { ssr: false });
const GoogleReviews = dynamic(() => import("@/components/GoogleReviews"), {
	ssr: false,
});
const WebPrices = dynamic(() => import("@/components/WebPrices"), {
	ssr: false,
});
const WebFAQ = dynamic(() => import("@/components/WebFAQ"), { ssr: false });
const HeaderCounted = dynamic(() => import("@/components/HeaderCounted"), {
	ssr: false,
});
const LocalBusinessJsonLd = dynamic(
	() => import("@/components/LocalBusinessJsonLd"),
	{ ssr: false }
);

import citiesData from "@/data/citiesData";

function WebSeitenErstellen() {
	const cityData = citiesData.find((c) => c.city === "nettetal");

	return (
		<div className="mt-5 pt-5">
			<Head>
				<title>Webseiten Erstellen Webdesign Webagentur Pixel Nettetal</title>
				<meta
					name="description"
					content="Professionelle Webseiten erstellen, Webentwicklung in Nettetal. Maßgeschneiderte Lösungen für Ihre Online-Präsenz. Von Webdesign über Webentwicklung bis hin zu SEO. Stärken Sie Ihre Marke mit unseren Experten. Kontaktieren Sie uns!"
				/>
				<meta name="robots" content="index, follow" />

				{/* Link Canonical */}
				<link
					rel="canonical"
					href="https://pixel-genie.de/webseiten-erstellen"
				/>

				{/* Meta Open Graph */}
				<meta property="og:title" content="Webseiten Erstellen – Pixel-Genie" />
				<meta
					property="og:description"
					content="Professionelles Webdesign und Webentwicklung in Nettetal."
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
