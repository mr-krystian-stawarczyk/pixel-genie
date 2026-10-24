import { useTheme } from "next-themes";
import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";
import IdleMount from "@/components/IdleMount";
import Header1 from "@/components/Header1.client";

// 🔹 Dynamiczne importy sekcji pod foldem
const Header2 = dynamic(() => import("@/components/Header2"), { ssr: false });
const Header3 = dynamic(() => import("@/components/Header3"), { ssr: false });
const Header4 = dynamic(() => import("@/components/Header4"), { ssr: false });
const Header5 = dynamic(() => import("@/components/Header5"), { ssr: false });
const Header6 = dynamic(() => import("@/components/Header6"), { ssr: false });
const GoogleReviews = dynamic(() => import("@/components/GoogleReviews"), {
	ssr: false,
});
const TechBar = dynamic(() => import("@/components/TechBar"), { ssr: false });

export default function Home() {
	const { theme } = useTheme();

	return (
		<>
			<Head>
				<title>Webseiten Erstellen, Webdesign, SEO - Pixel-Genie</title>
				<meta
					name="description"
					content="Professionelle Websites für Unternehmen aus Nettetal und NRW – ab 499 €. Mobilfreundliches Webdesign, klare Preise und unkomplizierte Anfrage per E-Mail."
				/>
				<meta name="robots" content="index, follow" />
				<link rel="canonical" href="https://pixel-genie.de/" />

				{/* ✅ Schema.org JSON-LD */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "ProfessionalService",
							name: "Pixel-Genie",
							image:
								"https://pixel-genie.de/assets/webentwicklung-nettetal-seo2.webp",
							description:
								"Pixel-Genie erstellt professionelle Websites und Webdesign für Unternehmen aus Nettetal und Umgebung. Schriftliche Zusammenarbeit online, Kundentermine vor Ort nach Absprache.",
							url: "https://pixel-genie.de",
							telephone: "+48 726 897 493",
							email: "pixelgenie.marketing@gmail.com",
							sameAs: [
								"https://www.facebook.com/profile.php?id=100090817536941",
								"https://www.linkedin.com/company/pixel-genie-de",
								"https://x.com/PixelGenieWeb",
							],
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

			{/* ✅ Header1 jako główny hero (LCP element) */}
			<Header1 />

			{/* 🔹 Sekcje poniżej widoku ładują się dopiero, gdy przeglądarka ma czas */}
			<IdleMount delay={400}>
				<GoogleReviews />
				<Header2 />
				<Header3 />
				<Header4 />
				<Header5 />
				<TechBar />
				<Header6 />
			</IdleMount>
		</>
	);
}
