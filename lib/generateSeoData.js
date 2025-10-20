// /lib/generateSeoData.js
export default function generateSeoData(cityData) {
	if (!cityData) return {};

	const {
		city,
		region,
		population,
		areaKm2,
		economicHighlights = {},
	} = cityData;

	const cityName = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
	const regionName = region ? region : "Deutschland";

	// 🔹 Zbuduj unikalne frazy long-tail na podstawie danych miasta
	const economicSectors = Object.keys(economicHighlights)
		.map((key) => key.toLowerCase())
		.slice(0, 3); // max 3 sektory dla naturalności

	const longTailKeywords = economicSectors.length
		? economicSectors
				.map(
					(sec) =>
						`SEO für ${sec} in ${cityName}, Online-Marketing für ${sec} ${regionName}`
				)
				.join(", ")
		: `lokales SEO ${cityName}, Google Ranking ${regionName}, digitale Sichtbarkeit ${cityName}`;

	// 🔹 Dynamiczne meta title + opis
	const title = `SEO Agentur ${cityName} – Pixel-Genie | Online-Sichtbarkeit & Wachstum in ${regionName}`;
	const description = `Professionelle Suchmaschinenoptimierung in ${cityName}: Pixel-Genie steigert Ihre Sichtbarkeit bei Google und hilft Unternehmen aus ${regionName}, mehr Kunden online zu gewinnen. Technische SEO, Content-Marketing, Backlinks & Local SEO.`;
	const keywords = `SEO ${cityName}, SEO Agentur ${cityName}, Suchmaschinenoptimierung ${cityName}, lokales SEO ${cityName}, ${longTailKeywords}`;

	// 🔹 Dłuższy opis dla SEO-contentu
	const longDescription = `
Pixel-Genie ist Ihre erfahrene SEO-Agentur für ${cityName} und ${regionName}.
Wir helfen Unternehmen, in Google besser gefunden zu werden – mit technischer SEO, Content-Strategien und Performance-Marketing.
Unsere Lösungen sind datengetrieben und auf lokale Zielgruppen zugeschnitten.

${
	economicSectors.length
		? `Besonders Unternehmen aus den Bereichen ${economicSectors.join(
				", "
			)} profitieren von unserer langjährigen Erfahrung im digitalen Marketing.`
		: ""
}

Wir analysieren Suchvolumen, Konkurrenz und Zielmärkte in ${cityName}, um genau die Keywords zu besetzen, die Ihnen Umsatz bringen.
Mit lokaler SEO-Optimierung, Google Business Profil und hochwertigen Backlinks steigern wir Ihre Online-Reichweite messbar.
`;

	// 🔹 Social Meta
	const ogTitle = `SEO Agentur ${cityName} – Pixel-Genie`;
	const ogDescription = `Lokale SEO-Strategien und Online-Marketing in ${cityName}. Jetzt kostenlose Erstberatung sichern!`;
	const canonical = `https://pixel-genie.de/seo/${city.toLowerCase()}`;

	return {
		title,
		description,
		keywords,
		canonical,
		longDescription,
		openGraph: {
			title: ogTitle,
			description: ogDescription,
			type: "website",
			url: canonical,
			siteName: "Pixel-Genie",
			locale: "de_DE",
		},
		twitter: {
			card: "summary_large_image",
			title: ogTitle,
			description: ogDescription,
		},
	};
}
