import React from "react";
import Head from "next/head";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";
import citiesData from "@/data/citiesData";
import Seo1 from "@/components/Seo1";
// Dynamiczny import komponentów
import dynamic from "next/dynamic";

// Dynamiczny import dla komponentów SEO
const Seo2 = dynamic(() => import("@/components/Seo2"), { ssr: false });
const Seo3 = dynamic(() => import("@/components/Seo3"), { ssr: false });
const Seo4 = dynamic(() => import("@/components/Seo4"), { ssr: false });
const Seo5 = dynamic(() => import("@/components/Seo5"), { ssr: false });
const Seo6 = dynamic(() => import("@/components/Seo6"), { ssr: false });
const Seo7 = dynamic(() => import("@/components/Seo7"), { ssr: false });

function Suchmaschinenoptimierung() {
	const cityData = citiesData.find((c) => c.city === "nettetal");

	return (
		<div className="mt-5 pt-5">
			<Head>
				<title>Suchmaschinenoptimierung SEO Optimierung Pixel Genie</title>
				<meta
					name="description"
					content="Maximieren Sie Ihr SEO-Ergebnis mit unseren professionellen SEO-Services. Erzielen Sie eine höhere Position in den Suchergebnissen mit unseren effektiven Strategien und Tools. Kontaktieren Sie uns noch heute!"
				/>
				<meta name="robots" content="index, follow" />

				{/* Link Canonical */}
				<link
					rel="canonical"
					href="https://pixel-genie.de/suchmaschinenoptimierung"
				/>

				{/* Meta Open Graph */}
				<meta
					property="og:title"
					content="Suchmaschinenoptimierung SEO – Pixel-Genie"
				/>
				<meta
					property="og:description"
					content="Steigern Sie Ihre Suchmaschinenposition mit professionellen SEO-Strategien und Tools von Pixel-Genie."
				/>
				<meta property="og:image" content="/assets/og-default.jpg" />
				<meta property="og:type" content="website" />
			</Head>

			<LocalBusinessJsonLd cityData={cityData} />
			{/* Komponent dynamicznie importowany */}
			<Seo1 />
			<Seo2 />
			<Seo3 />
			<Seo4 />
			<Seo5 />
			<Seo6 />
			<Seo7 />
		</div>
	);
}

export default Suchmaschinenoptimierung;
