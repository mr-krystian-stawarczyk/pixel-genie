import React from "react";
import Head from "next/head";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";
import citiesData from "@/data/citiesData";
import Social1 from "@/components/Social1";
// Importowanie komponentów dynamicznie
import dynamic from "next/dynamic";

// Dynamiczny import komponentów
const Social2 = dynamic(() => import("@/components/Social2"), { ssr: false });
const Social3 = dynamic(() => import("@/components/Social3"), { ssr: false });
const Social4 = dynamic(() => import("@/components/Social4"), { ssr: false });
const Social5 = dynamic(() => import("@/components/Social5"), { ssr: false });
const Social6 = dynamic(() => import("@/components/Social6"), { ssr: false });
const Social7 = dynamic(() => import("@/components/Social7"), { ssr: false });

function SocialMediaMarketing() {
	const cityData = citiesData.find((c) => c.city === "nettetal");

	return (
		<div className="mt-5 pt-5">
			<Head>
				<title>Social Media Marketing Social Media Agentur für Marketing</title>
				<meta
					name="description"
					content="Pixel-Genie bietet umfassende Social Media Marketing Lösungen, um Ihre Präsenz auf Plattformen wie Facebook, Instagram und Twitter zu maximieren. Kontaktieren Sie uns, um loszulegen."
				/>
				<meta name="robots" content="index, follow" />

				{/* Link Canonical */}
				<link
					rel="canonical"
					href="https://pixel-genie.de/social-media-marketing"
				/>

				{/* Meta Open Graph */}
				<meta
					property="og:title"
					content="Social Media Marketing – Pixel-Genie"
				/>
				<meta
					property="og:description"
					content="Maximieren Sie Ihre Social-Media-Präsenz mit professionellen Marketingstrategien von Pixel-Genie."
				/>
				<meta property="og:image" content="/assets/og-default.jpg" />
				<meta property="og:type" content="website" />
			</Head>
			<LocalBusinessJsonLd cityData={cityData} />
			{/* Komponent dynamicznie importowany */}
			<Social1 />
			<Social2 />
			<Social3 />
			<Social4 />
			<Social5 />
			<Social6 />
			<Social7 />
		</div>
	);
}

export default SocialMediaMarketing;
