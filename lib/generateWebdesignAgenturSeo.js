// /lib/generateWebdesignAgenturSeo.js
export default function generateWebdesignAgenturSeo(cityData) {
	if (!cityData) return {};

	const { city, region } = cityData;
	const cityName = city.charAt(0).toUpperCase() + city.slice(1);

	const title = `Webdesign Agentur ${cityName} – Pixel-Genie | Professionelle Webseiten, die verkaufen`;
	const description = `Pixel-Genie ist deine Webdesign Agentur in ${cityName}. Wir gestalten und entwickeln moderne, schnelle Websites mit Fokus auf SEO, Performance und Conversion.`;
	const keywords = `Webdesign Agentur ${cityName}, Webdesign ${cityName}, Website erstellen ${cityName}, Pixel-Genie, SEO Webdesign ${cityName}, professionelle Webdesigner`;

	const canonical = `https://pixel-genie.de/webdesign-agentur/${city.toLowerCase()}`;

	return {
		title,
		description,
		keywords,
		canonical,
		openGraph: {
			title,
			description,
			type: "website",
			url: canonical,
			siteName: "Pixel-Genie",
			locale: "de_DE",
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
		},
	};
}
