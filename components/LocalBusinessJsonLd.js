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
		"@type": "LocalBusiness",
		name: "Pixel Genie",
		image: "https://pixel-genie.de/logo.png",
		telephone: cityData.phone,
		email: cityData.email,
		address: {
			"@type": "PostalAddress",
			streetAddress: cityData.address,
			addressLocality: cityData.city,
			postalCode: cityData.postalCode,
			addressCountry: "DE",
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: cityData.geo.latitude,
			longitude: cityData.geo.longitude,
		},
		areaServed,
		url: `https://pixel-genie.de/webentwicklung/${cityData.city.toLowerCase()}`,
		sameAs: ["https://www.facebook.com/pixel.genie.de"],
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
