// /lib/generateCitySEO.js

export function generateCitySEO(cityName, cityData) {
	const { historySnippet, economicHighlights, boroughs, areaKm2 } = cityData;

	// 🏙️ Lokalne dane pomocnicze
	const boroughList =
		boroughs && boroughs.length > 0 ? boroughs.slice(0, 3).join(", ") : null;
	const industries =
		economicHighlights && Object.keys(economicHighlights).length > 0
			? Object.keys(economicHighlights).join(", ")
			: "Webdesign, SEO, Online Marketing";

	// ✅ Meta title
	const seoTitle = `Webentwicklung ${cityName} | Webdesign & SEO Agentur Pixel-Genie`;

	// ✅ Meta description
	const seoDescription = `${cityName} ist digital im Aufschwung – Pixel-Genie bietet professionelle Webentwicklung, SEO und Webdesign für lokale Unternehmen in ${cityName}. Moderne Webseiten, mehr Sichtbarkeit und nachhaltiger Erfolg.`;

	// ✅ Automatyczne nagłówki SEO
	const heading1 = `Webentwicklung & Webdesign in ${cityName} – Ihre Agentur für digitale Projekte`;
	const heading2 = `SEO & Online-Marketing in ${cityName} – Sichtbarkeit, die Kunden bringt`;

	// ✅ Dłuższy unikalny opis SEO
	const cityDescription = `
${cityName} entwickelt sich zunehmend zu einem modernen Wirtschaftsstandort mit Fokus auf Digitalisierung und lokale Dienstleistungen. Pixel-Genie begleitet Unternehmen in ${cityName} bei der professionellen Webentwicklung, modernem Webdesign und gezielter Suchmaschinenoptimierung.

In Stadtteilen wie ${boroughList ?? "der Innenstadt"} erkennen immer mehr Unternehmen, dass eine starke Online-Präsenz der Schlüssel zu neuen Kunden ist. Eine individuelle Website stärkt nicht nur das Vertrauen, sondern sorgt auch für messbare Erfolge in den Suchergebnissen von Google.

Mit einer Fläche von ${areaKm2 ?? "rund 50"} km² und einer dynamischen Wirtschaftsstruktur in den Bereichen ${industries} bietet ${cityName} hervorragende Voraussetzungen für digitales Wachstum. Ob Handwerksbetrieb, Dienstleister oder Start-up – wir schaffen Webseiten, die wirklich konvertieren.

Pixel-Genie kombiniert modernes Design mit technischer Exzellenz. Vertrauen Sie unserer Erfahrung in ${cityName}, um Ihr digitales Projekt erfolgreich umzusetzen – schnell, suchmaschinenoptimiert und zukunftssicher.
`.trim();

	// ✅ Automatyczny generator słów kluczowych (long-tail SEO)
	const keywordsArray = [
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
	];
	const keywords = keywordsArray.join(", ");

	return {
		seoTitle,
		seoDescription,
		cityDescription,
		keywords,
		heading1,
		heading2,
	};
}
