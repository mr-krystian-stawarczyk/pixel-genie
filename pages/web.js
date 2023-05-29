import Head from "next/head";
import React, { lazy, Suspense } from "react";

import { Partytown } from "@builder.io/partytown/react";
import Web1 from "@/components/Web1";

const Web2 = lazy(() => import("@/components/Web2"));
const Web3 = lazy(() => import("@/components/Web3"));
const Web4 = lazy(() => import("@/components/Web4"));
const Web5 = lazy(() => import("@/components/Web5"));
const Web6 = lazy(() => import("@/components/Web6"));
const WebPrices = lazy(() => import("@/components/WebPrices"));
const Faq1 = lazy(() => import("@/components/Faq1"));

function web() {
	return (
		<div className="mt-5 pt-5">
			<Head>
				<title>
					Webseiten Erstellen, Webentwicklung in Nettetal | Pixel Genie
					Webagentur
				</title>
				<meta
					name="description"
					content="Professionelle Webseiten erstellen, Webentwicklung in Nettetal. Maßgeschneiderte Lösungen für Ihre Online-Präsenz. Von Webdesign über Webentwicklung bis hin zu SEO. Stärken Sie Ihre Marke mit unseren Experten. Kontaktieren Sie uns!"
				/>
				<meta name="robots" content="index, follow" />
				<Partytown debug={true} forward={["dataLayer.push"]} />
			</Head>
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

export default web;
