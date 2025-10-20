// /lib/generateWebgestaltungSeo.js
export default function generateWebgestaltungSeo(cityData) {
	if (!cityData) return {};

	const { city, region, economicHighlights = {} } = cityData;

	const cityName = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
	const regionName = region || "Deutschland";

	// Long-tail z branż (unikalność)
	const sectors = Object.keys(economicHighlights).slice(0, 3);
	const longTail = sectors.length
		? sectors.map((s) => `Webdesign für ${s} in ${cityName}`).join(", ")
		: `Responsive Webdesign ${cityName}, Corporate Website ${regionName}, UX Design ${cityName}`;

	const title = `Webgestaltung & Webdesign ${cityName} – Pixel-Genie | Modern, schnell, konvertierend`;
	const description = `Professionelles Webdesign in ${cityName}: Markenstarkes UI, UX-Strategie, schnelle Ladezeiten und SEO-Basis. Websites, die gefunden werden und verkaufen – für Unternehmen in ${regionName}.`;
	const keywords = `Webdesign ${cityName}, Webgestaltung ${cityName}, Website erstellen ${cityName}, UI UX ${cityName}, ${longTail}`;

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
