import Head from "next/head";
import React from "react";

const areaServed = [
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
];

const LocalBusinessJsonLd = ({ cityData }) => {
	if (!cityData) return null;

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "ProfessionalService",
		name: "Pixel-Genie",
		image: "https://pixel-genie.de/assets/pixel-genie-nettetal-webentwicklung-logo.png",
		telephone: cityData.phone,
		email: cityData.email,
		description: "Webdesign und Website-Erstellung für Unternehmen aus Nettetal und Umgebung. Zusammenarbeit online, persönliche Kundentermine nach Vereinbarung.",
		areaServed,
		url: "https://pixel-genie.de",
		sameAs: ["https://www.facebook.com/profile.php?id=100090817536941", "https://www.linkedin.com/company/pixel-genie-de", "https://x.com/PixelGenieWeb"],
	};

	return (
		<Head>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
		</Head>
	);
};

export default LocalBusinessJsonLd;
