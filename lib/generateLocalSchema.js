export function generateLocalSchema({
	cityData,
	cityName,
	canonicalUrl,
	serviceName = "Webentwicklung",
	offerPrice = "499",
}) {
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "LocalBusiness",
				"@id": `${canonicalUrl}#business`,
				name: `Pixel-Genie ${serviceName} ${cityName}`,
				url: canonicalUrl,
				image: "https://pixel-genie.de/og-default.jpg",
				description: `${serviceName} in ${cityName} – modern, schnell & SEO-optimiert.`,
				priceRange: "€€",
				telephone: cityData.phone || "",
				email: cityData.email || "",
				address: {
					"@type": "PostalAddress",
					streetAddress: cityData.address || "",
					postalCode: cityData.postalCode || "",
					addressLocality: cityName,
					addressCountry: "DE",
				},
				geo: {
					"@type": "GeoCoordinates",
					latitude: cityData.geo?.latitude || 0,
					longitude: cityData.geo?.longitude || 0,
				},
				areaServed: {
					"@type": "City",
					name: cityName,
				},
				sameAs: [
					"https://www.facebook.com/pixelgenie.de",
					"https://www.instagram.com/pixelgenie.de",
					"https://www.linkedin.com/company/pixel-genie",
				],
				openingHours: ["Mo-Fr 09:00-17:00"],
			},

			{
				"@type": "Service",
				"@id": `${canonicalUrl}#service`,
				serviceType: `${serviceName} in ${cityName}`,
				provider: {
					"@id": `${canonicalUrl}#business`,
				},
				areaServed: {
					"@type": "City",
					name: cityName,
				},
				offers: {
					"@type": "Offer",
					price: offerPrice,
					priceCurrency: "EUR",
					availability: "https://schema.org/InStock",
					url: canonicalUrl,
				},
			},

			{
				"@type": "BreadcrumbList",
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: serviceName,
						item: canonicalUrl.split(`/${cityData.city}`)[0], // główna kategoria
					},
					{
						"@type": "ListItem",
						position: 2,
						name: `${serviceName} ${cityName}`,
						item: canonicalUrl,
					},
				],
			},
		],
	};
}
