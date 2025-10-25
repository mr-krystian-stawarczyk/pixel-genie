// /lib/generateSeoData.js
export default function generateSeoData(cityData) {
	if (!cityData) return {};

	const { city, slug, region, economicHighlights = {} } = cityData;

	const cityName = city.charAt(0).toUpperCase() + city.slice(1);
	const regionName = region || "Deutschland";

	const sectors = Object.keys(economicHighlights)
		.map((k) => k.toLowerCase())
		.slice(0, 3);

	const longTailKeywords = sectors.length
		? sectors
				.map(
					(sec) =>
						`SEO für ${sec} in ${cityName}, Online-Marketing für ${sec} ${regionName}`
				)
				.join(", ")
		: `lokales SEO ${cityName}, Google Ranking ${regionName}, digitale Sichtbarkeit ${cityName}`;

	const title = `SEO Agentur ${cityName} – Pixel-Genie | Online-Sichtbarkeit & Wachstum in ${regionName}`;
	const description = `Professionelle Suchmaschinenoptimierung in ${cityName}: Pixel-Genie steigert Ihre Sichtbarkeit bei Google.`;
	const keywords = `SEO ${cityName}, SEO Agentur ${cityName}, ${longTailKeywords}`;

	const canonical = `https://pixel-genie.de/seo/${slug}`;

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
