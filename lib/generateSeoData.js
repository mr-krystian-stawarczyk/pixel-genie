// /lib/generateSeoData.js
export default function generateSeoData(cityData) {
	if (!cityData) return {};

	const { city, slug, region, economicHighlights = {} } = cityData;

	const cityName = city.charAt(0).toUpperCase() + city.slice(1);
	const regionName = region || "Deutschland";

	const sectors = Object.keys(economicHighlights)
		.map((k) => k.toLowerCase())
		.slice(0, 2);

	const title = `SEO Agentur ${cityName} – Pixel-Genie | Online-Sichtbarkeit in ${regionName}`;
	const description = `Mit lokaler Suchmaschinenoptimierung helfen wir Unternehmen in ${cityName} sichtbarer zu werden und neue Kunden zu gewinnen.`;

	const canonical = `https://pixel-genie.de/seo/${slug}`;

	return {
		title,
		description,
		canonical,
		openGraph: {
			title,
			description,
			url: canonical,
			type: "website",
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
