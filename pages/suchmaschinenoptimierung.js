import Seo1 from "@/components/Seo1";

import React from "react";
import Head from "next/head";
import Seo2 from "@/components/Seo2";
import Seo3 from "@/components/Seo3";
import Seo4 from "@/components/Seo4";
import Seo5 from "@/components/Seo5";
import Seo6 from "@/components/Seo6";
import Seo7 from "@/components/Seo7";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";
import citiesData from "@/data/citiesData";

function suchmaschinenoptimierung() {
	const cityData = citiesData.find((c) => c.city === "nettetal");
	return (
		<div className="mt-5 pt-5">
			<Head>
				<title>Suchmaschinenoptimierung SEO Optimierung Pixel Genie </title>
				<meta
					name="description"
					content="Maximieren Sie Ihr SEO-Ergebnis mit unseren professionellen SEO-Services. Erzielen Sie eine höhere Position in den Suchergebnissen mit unseren effektiven Strategien und Tools. Kontaktieren Sie uns noch heute!"
				/>
				<meta name="robots" content="index, follow" />
			</Head>

			<LocalBusinessJsonLd cityData={cityData} />
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

export default suchmaschinenoptimierung;
