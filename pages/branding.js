import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";

// Dynamiczny import komponentów
const Brand1 = dynamic(() => import("@/components/Brand1"));
const Brand2 = dynamic(() => import("@/components/Brand2"));
const Brand3 = dynamic(() => import("@/components/Brand3"));
const Brand4 = dynamic(() => import("@/components/Brand4"));
const Brand5 = dynamic(() => import("@/components/Brand5"));
const Brand6 = dynamic(() => import("@/components/Brand6"));
const Brand7 = dynamic(() => import("@/components/Brand7"));
const Brand8 = dynamic(() => import("@/components/Brand8"));
const LocalBusinessJsonLd = dynamic(
	() => import("@/components/LocalBusinessJsonLd")
);
import citiesData from "@/data/citiesData";

function branding() {
	const cityData = citiesData.find((c) => c.city === "nettetal");

	return (
		<div className="mt-5 pt-5">
			<Head>
				<title>
					Branding und Werbenagentur in 41334 Nettetal – Pixel Genie Webagentur
				</title>
				<meta
					name="description"
					content="Unser Corporate Design und Content Marketing stärken Ihre Marke und erreichen Ihre Zielgruppe. Maßgeschneiderte Lösungen für ein einzigartiges Branding. Entdecken Sie unsere Expertise im Branding und Marketing."
				/>
				<meta name="robots" content="index, follow" />

				{/* Link Canonical */}
				<link rel="canonical" href="https://pixel-genie.de/branding" />

				{/* Meta Open Graph */}
				<meta property="og:title" content="Branding – Pixel-Genie" />
				<meta
					property="og:description"
					content="Professionelles Branding und maßgeschneiderte Marketinglösungen für Ihr Unternehmen in Nettetal. Kontaktieren Sie uns, um mehr zu erfahren."
				/>
				<meta property="og:image" content="/assets/og-default.jpg" />
				<meta property="og:type" content="website" />
			</Head>

			<LocalBusinessJsonLd cityData={cityData} />
			<Brand1 />
			<Brand2 />
			<Brand3 />
			<Brand4 />
			<Brand8 />
			<Brand5 />
			<Brand6 />
			<Brand7 />
		</div>
	);
}

export default branding;
