import React from "react";
import Head from "next/head";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";
import citiesData from "@/data/citiesData";
import Media1 from "@/components/Media1";
// Dynamiczny import komponentów
import dynamic from "next/dynamic";

// Dynamiczny import dla komponentów Media
const Media2 = dynamic(() => import("@/components/Media2"), { ssr: false });
const Media3 = dynamic(() => import("@/components/Media3"), { ssr: false });
const Media4 = dynamic(() => import("@/components/Media4"), { ssr: false });
const Media5 = dynamic(() => import("@/components/Media5"), { ssr: false });

const Media7 = dynamic(() => import("@/components/Media7"), { ssr: false });
const Media8 = dynamic(() => import("@/components/Media8"), { ssr: false });

function WebDesign() {
	const cityData = citiesData.find((c) => c.city === "nettetal");

	return (
		<div className="mt-5 pt-5">
			<Head>
				<title>Webdesign Werbenagentur Grafik Design im Nettetal</title>
				<meta
					name="description"
					content="Pixel-Genie bietet erstklassiges Media Creating, einschließlich Grafikdesign, Videoproduktion und Fotobearbeitung. Kontaktieren Sie uns, um Ihre Ideen zum Leben zu erwecken."
				/>
				<meta name="robots" content="index, follow" />

				{/* Link Canonical */}
				<link rel="canonical" href="https://pixel-genie.de/webdesign" />

				{/* Meta Open Graph */}
				<meta property="og:title" content="Webdesign – Pixel-Genie" />
				<meta
					property="og:description"
					content="Erstklassiges Grafikdesign, Videoproduktion und Fotobearbeitung in Nettetal."
				/>
				<meta property="og:image" content="/assets/og-default.jpg" />
				<meta property="og:type" content="website" />
			</Head>
			<LocalBusinessJsonLd cityData={cityData} />
			{/* Komponent dynamicznie importowany */}
			<Media1 />
			<Media2 />
			<Media3 />
			<Media4 />
			<Media5 />
			<Media7 />
			<Media8 />
		</div>
	);
}

export default WebDesign;
