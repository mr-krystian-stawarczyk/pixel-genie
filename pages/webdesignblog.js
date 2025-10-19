import React from "react";
import Head from "next/head";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";
import citiesData from "@/data/citiesData";
import dynamic from "next/dynamic";

// Dynamiczny import komponentów
const Blog1 = dynamic(() => import("@/components/Blog1"), { ssr: false });
const Blog2 = dynamic(() => import("@/components/Blog2"), { ssr: false });
const Faq1 = dynamic(() => import("@/components/Faq1"), { ssr: false });

const cityData = citiesData.find((c) => c.city === "nettetal");

function WebDesignBlog() {
	return (
		<div className="mt-5 pt-5">
			<Head>
				<title>
					Tipps fur deine Geschaft Webseiten und Webdesign Blog Nettetal
				</title>
				<meta
					name="description"
					content="Pixel-Genie: Unser Blog für Webdesign, Webseite Erstellen, Webentwicklung, Social Media Marketing und mehr. Lesen Sie unsere neuesten Artikel und erfahren Sie mehr über die neuesten Trends und Entwicklungen in der Online-Welt."
				/>
				<meta name="robots" content="index, follow" />
				<link rel="canonical" href="https://pixel-genie.de/webdesign" />
				<meta property="og:title" content="Webdesign – Pixel-Genie" />
				<meta
					property="og:description"
					content="Professionelles Webdesign in Nettetal und Umgebung."
				/>
				<meta property="og:image" content="/assets/og-default.jpg" />
				<meta property="og:type" content="website" />
			</Head>
			<LocalBusinessJsonLd cityData={cityData} />
			{/* Komponent dynamicznie importowany */}
			<Blog1 />
			<Blog2 />
			<Faq1 />
		</div>
	);
}

export default WebDesignBlog;
