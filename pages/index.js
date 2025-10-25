import { useTheme } from "next-themes";
import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";
import Header1 from "@/components/Header1";

// Dynamiczny import dla Header1 do Header6

const Header2 = dynamic(() => import("@/components/Header2"));
const Header3 = dynamic(() => import("@/components/Header3"));
const Header4 = dynamic(() => import("@/components/Header4"));
const Header5 = dynamic(() => import("@/components/Header5"));
const Header6 = dynamic(() => import("@/components/Header6"));
const GoogleReviews = dynamic(() => import("@/components/GoogleReviews"));
// TechBar jest już dynamicznie zaimportowany
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
							name: "Pixel-Genie Webagentur Nettetal",
							image:
								"https://pixel-genie.de/assets/webentwicklung-nettetal-seo2.png",
							description:
								"Pixel-Genie ist Ihre Agentur für Webdesign, Webseiten erstellen, SEO Optimierung und Social Media Marketing in Nettetal. Wir kombinieren Design, Performance und Sichtbarkeit, um Ihr Online-Geschäft zu stärken.",
							url: "https://pixel-genie.de",
							telephone: "+48 726 897 493",
							email: "pixelgenie.marketing@gmail.com",
							address: {
								"@type": "PostalAddress",
								streetAddress: "Fasanenstr. 10",
								addressLocality: "Nettetal",
								postalCode: "41334",
								addressCountry: "DE",
							},
							sameAs: [
								"https://www.facebook.com/pixel.genie.de",
								"https://www.linkedin.com/company/pixelgenie",
								"https://www.instagram.com/pixel.genie.de",
							],
							geo: {
								"@type": "GeoCoordinates",
								latitude: 51.292,
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
							],
							offers: {
								"@type": "OfferCatalog",
								name: "Unsere Dienstleistungen",
								itemListElement: [
									{
										"@type": "Offer",
										itemOffered: {
											"@type": "Service",
											name: "Webseitenerstellung",
											url: "https://pixel-genie.de/webseitenerstellen",
										},
									},
									{
										"@type": "Offer",
										itemOffered: {
											"@type": "Service",
											name: "SEO Optimierung",
											url: "https://pixel-genie.de/seo",
										},
									},
									{
										"@type": "Offer",
										itemOffered: {
											"@type": "Service",
											name: "Social Media Marketing",
											url: "https://pixel-genie.de/socialmediamarketing",
										},
									},
								],
							},
						}),
					}}
				/>
			</Head>

			{/* Dynamicznie załadowane komponenty */}
			<Header1 />
			<GoogleReviews />
			<Header2 />
			<Header3 />
			<Header4 />
			<Header5 />
			<TechBar />
			<Header6 />
		</>
	);
}
