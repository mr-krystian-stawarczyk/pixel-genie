import Head from "next/head";
import React from "react";

import Web1 from "@/components/Web1";

import Web2 from "@/components/Web2";
import Web3 from "@/components/Web3";
import Web4 from "@/components/Web4";
import Web5 from "@/components/Web5";
import Web6 from "@/components/Web6";
import WebPrices from "@/components/WebPrices";
import Faq1 from "@/components/Faq1";
import HeaderCounted from "@/components/HeaderCounted";

function webseitenerstellen() {
	return (
		<div className="mt-5 pt-5">
			<Head>
				<title>Webseiten Erstellen Webdesign Webagentur Pixel Nettetal</title>
				<meta
					name="description"
					content="Professionelle Webseiten erstellen, Webentwicklung in Nettetal. Maßgeschneiderte Lösungen für Ihre Online-Präsenz. Von Webdesign über Webentwicklung bis hin zu SEO. Stärken Sie Ihre Marke mit unseren Experten. Kontaktieren Sie uns!"
				/>
				<meta name="robots" content="index, follow" />
				<script type="application/ld+json">
					{`
					{
					  "@context": "https://schema.org",
					  "@type": "WebSite",
					  "name": "Pixel Genie Nettetal",
					  "url": "https://pixel-genie.de/webseitenerstellen",
					  "aggregateRating": {
					    "@type": "AggregateRating",
					    "ratingValue": "4.8",
					    "reviewCount": "112"
					  }
					}
					`}
				</script>
			</Head>
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
