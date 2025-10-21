export function generateCitySEO(cityName, cityData) {
	const {
		historySnippet = "",
		economicHighlights = {},
		boroughs = [],
		areaKm2 = "50",
		population = "unbekannt",
	} = cityData;

	const canonical = `https://pixel-genie.de/webentwicklung/${cityName
		.toLowerCase()
		.replace(/\s+/g, "-")}`;

	const boroughList =
		boroughs && boroughs.length > 0
			? boroughs.slice(0, 3).join(", ")
			: "der Innenstadt";

	const industries =
		economicHighlights && Object.keys(economicHighlights).length > 0
			? Object.keys(economicHighlights).join(", ")
			: "Webdesign, SEO, Online Marketing";

	const seoTitle = `Webentwicklung ${cityName} | Webdesign & SEO Agentur Pixel-Genie`;

	const seoDescription = `${cityName} ist digital im Aufschwung – Pixel-Genie bietet professionelle Webentwicklung, SEO und Webdesign für lokale Unternehmen in ${cityName}. Moderne Webseiten, mehr Sichtbarkeit und nachhaltiger Erfolg.`;

	const heading1 = `Webentwicklung & Webdesign in ${cityName} – Ihre Agentur für digitale Projekte`;
	const heading2 = `SEO & Online-Marketing in ${cityName} – Sichtbarkeit, die Kunden bringt`;

	const cityDescription = `
${cityName} entwickelt sich zunehmend zu einem modernen Wirtschaftsstandort mit Fokus auf Digitalisierung und lokale Dienstleistungen. Pixel-Genie begleitet Unternehmen in ${cityName} bei professioneller Webentwicklung, modernem Webdesign und gezielter Suchmaschinenoptimierung.

In Stadtteilen wie ${boroughList} erkennen immer mehr Unternehmen, dass eine starke Online-Präsenz der Schlüssel zu neuen Kunden ist. Eine individuelle Website stärkt Vertrauen und sorgt für messbare Erfolge in Google.

Mit einer Fläche von ${areaKm2} km² und einer dynamischen Wirtschaftsstruktur in den Bereichen ${industries} bietet ${cityName} hervorragende Voraussetzungen für digitales Wachstum. Ob Handwerksbetrieb, Dienstleister oder Start-up – wir schaffen Webseiten, die konvertieren.

Pixel-Genie kombiniert modernes Design mit technischer Exzellenz. Vertrauen Sie unserer Erfahrung in ${cityName}, um Ihr digitales Projekt erfolgreich umzusetzen – schnell, suchmaschinenoptimiert und zukunftssicher.
`.trim();

	const keywords = [
		`webentwicklung ${cityName}`,
		`webdesign ${cityName}`,
		`seo agentur ${cityName}`,
		`homepage erstellen ${cityName}`,
		`webseite erstellen ${cityName}`,
		`seo ${cityName}`,
		`webagentur ${cityName}`,
		`website entwicklung ${cityName}`,
		`onlinemarketing ${cityName}`,
		`digitale lösungen ${cityName}`,
	].join(", ");

	return {
		seoTitle,
		seoDescription,
		cityDescription,
		keywords,
		heading1,
		heading2,
		canonical,
		population,
	};
}
