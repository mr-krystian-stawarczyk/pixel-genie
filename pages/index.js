import { useTheme } from "next-themes";
import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";
import Header1 from "@/components/Header1";
import Header2 from "@/components/Header2";
import Header3 from "@/components/Header3";
import Header4 from "@/components/Header4";
import Header5 from "@/components/Header5";
import Header6 from "@/components/Header6";

const TechBar = dynamic(() => import("@/components/TechBar"));

export default function Home() {
	const { theme } = useTheme();
	return (
		<>
			<Head>
				<title>
					Webseiten Erstellen, Webdesign, SEO Optimierung, SOCIAL MEDIA
					Marketing Pixel-Genie Nettetal
				</title>
				<meta
					name="description"
					content="Pixel-Genie - Ihre zuverlässige Webagentur & Webdesign in Nettetal. Professionelle Dienstleistungen für Webseiten erstellen, Webentwicklung, SEO Optimierung, Social Media Marketing. Spezialisiert auf responsive Design, Online-Marketing und maßgeschneiderte E-Commerce-Lösungen. Steigern Sie Ihre Online-Präsenz mit unserer Expertise. Kontaktieren Sie uns!"
				/>
				<meta name="robots" content="index, follow" />
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
