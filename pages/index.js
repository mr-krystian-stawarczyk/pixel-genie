import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Header1 from "@/components/Header1";
import Header2 from "@/components/Header2";
import Header3 from "@/components/Header3";
import Header4 from "@/components/Header4";
import Header5 from "@/components/Header5";
import SanityRealizacje from "@/components/SanityRealizacje";
import TechBar from "@/components/TechBar";
import ContactForm from "@/components/ContactForm";
import Faq1 from "@/components/Faq1";
import Header6 from "@/components/Header6";

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
					content="Pixel-Genie - Ihre zuverlässige Webagentur in Nettetal. Professionelle Dienstleistungen für Webentwicklung, SEO, Branding und Social Media. Spezialisiert auf responsive Design, Online-Marketing und maßgeschneiderte E-Commerce-Lösungen. Steigern Sie Ihre Online-Präsenz mit unserer Expertise. Kontaktieren Sie uns!"
				/>
			</Head>
			<Header1 />
			<TechBar />
			<Header2 />
			<Header3 />
			<Header4 />
			<Header5 />

			<Header6 />
			<ContactForm />
		</>
	);
}
