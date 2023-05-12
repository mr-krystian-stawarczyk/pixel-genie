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

export default function Home() {
	const { theme } = useTheme();
	return (
		<>
			<Head>
				<title>Pixel Genie Webagentur Nettetal</title>
				<meta
					name="description"
					content="Pixel-Genie ist Ihre zuverlässige Agentur für Webdesign und SEO in Nettetal. Wir bieten professionelle Webentwicklung und umfassende Dienstleistungen für eine erfolgreiche Online-Präsenz. Unsere Leistungen umfassen Responsive Design, Mobile Optimierung und Online-Marketing-Strategien. Wir entwickeln maßgeschneiderte E-Commerce-Lösungen und Apps, stärken Ihre Marke mit unserem Corporate Design und Content-Marketing und sind Ihr Partner für Social-Media-Marketing und Grafikdesign. Vertrauen Sie uns für erfolgreiche Online-Strategien und Webprojekte, sowie umfassende Lösungen für Webentwicklung und Programmierung. Kontaktieren Sie uns noch heute für ein unverbindliches Beratungsgespräch!"
				/>
			</Head>
			<Header1 />
			<TechBar />
			<Header2 />
			<Header3 />
			<Header4 />
			<Header5 />
			<ContactForm />
		</>
	);
}
