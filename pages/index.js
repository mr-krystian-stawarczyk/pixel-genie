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
				<title>Webseiten Erstellen, Webdesign, SEO - Pixel-Genie</title>
				<meta
					name="description"
					content="Pixel-Genie - Ihre zuverlässige Webseiten & Webdesign in Nettetal. Professionelle Dienstleistungen für Webseiten erstellen, Webentwicklung, SEO Optimierung, Social Media Marketing. Spezialisiert auf responsive Design, Online-Marketing und maßgeschneiderte E-Commerce-Lösungen. Steigern Sie Ihre Online-Präsenz mit unserer Expertise. Kontaktieren Sie uns!"
				/>
				<meta name="robots" content="index, follow" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "LocalBusiness",
							name: "Pixel Genie",
							telephone: "+48 726 897 493",
							email: "mr.krystian.stawarczyk@gmail.com",
							address: {
								"@type": "PostalAddress",
								streetAddress: "Fasanenstr. 10",
								addressLocality: "Nettetal",
								postalCode: "41334",
								addressCountry: "DE",
							},
							geo: {
								"@type": "GeoCoordinates",
								latitude: 51.292, // Nettetal
								longitude: 6.34,
							},
							areaServed: [
								"Nettetal",
								"Viersen",
								"Venlo",
								"Mönchengladbach",
								"Krefeld",
								"Kempen",
								"Düsseldorf",
								"Ratingen",
								"Willich",
								"Grefrath",
								"Tönisvorst",
								"Lobberich",
								"Süchteln",
								"Viersen-Dülken",
								"Brüggen",
								"Bracht",
								"Sittard-Geleen",
								"Heinsberg",
								"Aachen",
								"Cologne",
								"Düren",
								"Neuss",
								"Wegberg",
								"Erkelenz",
								"Grevenbroich",
							],
							url: "https://pixel-genie.de",
							sameAs: ["https://www.facebook.com/pixel.genie.de"],
						}),
					}}
				/>
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
