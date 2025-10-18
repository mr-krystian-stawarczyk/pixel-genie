import Head from "next/head";
import React from "react";

import dynamic from "next/dynamic";

const Web1 = dynamic(() => import("@/components/Web1"));
const Web2 = dynamic(() => import("@/components/Web2"));
const Web3 = dynamic(() => import("@/components/Web3"));
const Web4 = dynamic(() => import("@/components/Web4"));
const Web5 = dynamic(() => import("@/components/Web5"));
const Web6 = dynamic(() => import("@/components/Web6"));
const WebPrices = dynamic(() => import("@/components/WebPrices"));
const Faq1 = dynamic(() => import("@/components/Faq1"));
const HeaderCounted = dynamic(() => import("@/components/HeaderCounted"));
const LocalBusinessJsonLd = dynamic(
	() => import("@/components/LocalBusinessJsonLd")
);
import citiesData from "@/data/citiesData";

function webseitenerstellen() {
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
			</Head>
			<LocalBusinessJsonLd cityData={cityData} />
			<HeaderCounted />
			<Web1 />
			<Web2 />
			<Web3 />
			<Web4 />
			<Web5 />
			<Web6 />
			<WebPrices />
			<Faq1 />
		</div>
	);
}

export default webseitenerstellen;
