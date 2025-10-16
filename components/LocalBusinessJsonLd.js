import React from "react";
import Head from "next/head";

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

	return (
		<Head>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "LocalBusiness",
						name: "Pixel Genie",
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
						url: "https://pixel-genie.de",
						sameAs: ["https://www.facebook.com/pixel.genie.de"],
					}),
				}}
			/>
		</Head>
	);
};

export default LocalBusinessJsonLd;
