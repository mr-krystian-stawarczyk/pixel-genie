import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

// Dynamiczny import komponentów
const Contact1 = dynamic(() => import("@/components/Contact1"), { ssr: false });
const Contact2 = dynamic(() => import("@/components/Contact2"), { ssr: false });
const Contact3 = dynamic(() => import("@/components/Contact3"), { ssr: false });

function Contact() {
	return (
		<div className="mt-5 pt-5">
			<Head>
				<title>Kontakt – Nettetal Webdesign und Webentwicklung</title>
				<meta
					name="description"
					content="Pixel-Genie: Kontaktieren Sie uns für professionelles Webdesign und Online-Marketing-Dienstleistungen in Nettetal. Füllen Sie unser Kontaktformular aus oder rufen Sie uns an, um mehr zu erfahren."
				/>
				<meta name="robots" content="index, follow" />

				{/* Link Canonical */}
				<link rel="canonical" href="https://pixel-genie.de/kontakt" />

				{/* Meta Open Graph */}
				<meta property="og:title" content="Kontakt – Pixel-Genie" />
				<meta
					property="og:description"
					content="Kontaktieren Sie Pixel-Genie für professionelles Webdesign und Online-Marketing in Nettetal. Wir helfen Ihnen gerne weiter."
				/>
				<meta property="og:image" content="/assets/og-default.jpg" />
				<meta property="og:type" content="website" />
			</Head>
			{/* Komponent dynamicznie importowany */}
			<Contact1 />
			<Contact3 />
			<Contact2 />
		</div>
	);
}

export default Contact;
