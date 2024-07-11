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
				<script type="application/ld+json">
					{`
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Pixel Genie",
  "url": "https://pixel-genie.de",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://pixel-genie.de"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Webseiten",
        "item": "https://pixel-genie.de/webseitenerstellen"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "SEO",
        "item": "https://pixel-genie.de/suchmaschinenoptimierung"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Tipps",
        "item": "https://pixel-genie.de/webdesignblog"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Social Media",
        "item": "https://pixel-genie.de/socialmediamarketing"
      }
    ]
  }
}
`}
				</script>
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
