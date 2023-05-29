import { useTheme } from "next-themes";
import Head from "next/head";
import React, { lazy, Suspense } from "react";

import { Partytown } from "@builder.io/partytown/react";

import Header1 from "@/components/Header1";
import TechBar from "@/components/TechBar";
const Header2 = lazy(() => import("@/components/Header2"));
const Header3 = lazy(() => import("@/components/Header3"));
const Header4 = lazy(() => import("@/components/Header4"));
const Header5 = lazy(() => import("@/components/Header5"));
const Header6 = lazy(() => import("@/components/Header6"));

export default function Home() {
	const { theme } = useTheme();
	return (
		<>
			<Head>
				<title>
					Webentwicklung, SEO, Branding, Logos in 41334 Nettetal | Pixel Genie
					Webagentur
				</title>
				<meta
					name="description"
					content="Pixel-Genie - Ihre zuverlässige Webagentur & Webdesign in Nettetal. Professionelle Dienstleistungen für Webseiten erstellen, Webentwicklung, SEO, Branding und Social Media. Spezialisiert auf responsive Design, Online-Marketing und maßgeschneiderte E-Commerce-Lösungen. Steigern Sie Ihre Online-Präsenz mit unserer Expertise. Kontaktieren Sie uns!"
				/>
				<meta name="robots" content="index, follow" />
				<Partytown debug={true} forward={["dataLayer.push"]} />
			</Head>
			<Header1 />
			<TechBar />
			<Header2 />
			<Header3 />
			<Header4 />
			<Header5 />
			<Header6 />
		</>
	);
}
