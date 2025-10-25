// /lib/generateSeoData.js
export default function generateSeoData(cityData) {
	const { city, slug, region } = cityData;

	const cityName = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
	const regionName = region || "Deutschland";

	const title = `SEO Agentur ${cityName} – Pixel-Genie | Online-Sichtbarkeit in ${regionName}`;
	const description = `Wir helfen Unternehmen in ${cityName}, mit lokaler Suchmaschinenoptimierung mehr Kunden über Google zu gewinnen.`;

	const canonical = `https://pixel-genie.de/seo/${slug.toLowerCase()}/`; // ✅ trailing slash

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
