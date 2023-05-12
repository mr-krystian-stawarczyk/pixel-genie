import Web1 from "@/components/Web1";
import Web2 from "@/components/Web2";
import Web3 from "@/components/Web3";
import Web4 from "@/components/Web4";
import React from "react";
import Head from "next/head";
import Web5 from "@/components/Web5";
import SanityRealizacje from "@/components/SanityRealizacje";
import Prices2 from "@/components/Prices2";

import Faq1 from "@/components/Faq1";
import Faq2 from "@/components/Faq2";
function web() {
	return (
		<div className="mt-5 pt-5">
			<Head>
				<title>Pixel Genie Nettetal Webentwicklung</title>
				<meta
					name="description"
					content="Wir sind Ihre Experten für professionelle Websites. Mit unserem breiten Spektrum an Dienstleistungen - von Webdesign über Webentwicklung bis hin zu SEO - unterstützen wir Sie bei der Gestaltung und Optimierung Ihrer Online-Präsenz. Wir bieten Ihnen maßgeschneiderte Lösungen, die auf Ihre individuellen Bedürfnisse zugeschnitten sind und Ihre Marke stärken."
				/>
			</Head>
			<Web1 />
			<Web2 />
			<Web3 />
			<Web4 />
			<Web5 />
			<SanityRealizacje />
			<Prices2 />
			<Faq1 />
			<Faq2 />
		</div>
	);
}

export default web;
