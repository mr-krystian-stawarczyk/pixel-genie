// /lib/generateWebseiteSEO.js

export function generateWebseiteSEO(cityName, cityData) {
	const { historySnippet, economicHighlights, boroughs, areaKm2, population } =
		cityData;
	const canonical = `https://pixel-genie.de/webseitenerstellung/${cityName.toLowerCase()}`;

	const boroughList =
		boroughs && boroughs.length > 0 ? boroughs.slice(0, 2).join(", ") : null;
	const industries =
		economicHighlights && Object.keys(economicHighlights).length > 0
			? Object.keys(economicHighlights).join(", ")
			: "Dienstleistungen, Handwerk, Einzelhandel";

	// 🧠 Meta title i description
	const seoTitle = `Webseite erstellen lassen in ${cityName} | Webdesign Agentur Pixel-Genie`;
	const seoDescription = `Webseite erstellen in ${cityName} mit Pixel-Genie – professionelle Webdesign-Agentur für moderne, schnelle und SEO-optimierte Websites. Jetzt kostenlos beraten lassen!`;

	// 🧾 Nagłówki SEO
	const heading1 = `Webseite erstellen in ${cityName} – modern, schnell & verkaufsstark`;
	const heading2 = `Professionelles Webdesign & SEO in ${cityName} für Ihr Unternehmen`;

	// 📄 Dłuższy opis treści SEO
	const cityDescription = `
In ${cityName} ist der erste Eindruck online entscheidend – eine moderne Webseite kann über den Erfolg oder Misserfolg eines Unternehmens entscheiden. Pixel-Genie erstellt Webseiten, die nicht nur optisch überzeugen, sondern messbare Ergebnisse liefern.

Ob Dienstleister, Handwerksbetrieb oder lokales Geschäft – unsere Webseitenerstellung in ${cityName} kombiniert Design, Technik und Marketing zu einer digitalen Präsenz, die Kunden gewinnt.

In Stadtteilen wie ${boroughList ?? "der Innenstadt"} unterstützen wir Unternehmen bei der Umsetzung ihrer Online-Strategie – von SEO bis Conversion-Optimierung. Mit unserer Erfahrung im Bereich ${industries} gestalten wir Websites, die Vertrauen schaffen und langfristig Umsatz generieren.

Lassen Sie Ihre Webseite professionell erstellen und profitieren Sie von einem Komplettpaket aus Design, Performance und lokaler SEO-Power – exklusiv für ${cityName}.
`.trim();

	// 🎯 Słowa kluczowe (lead-driven)
	const keywordsArray = [
		`webseite erstellen ${cityName}`,
		`homepage erstellen ${cityName}`,
		`webdesign agentur ${cityName}`,
		`website erstellen lassen ${cityName}`,
		`seo webdesign ${cityName}`,
		`webagentur ${cityName}`,
		`professionelle webseite ${cityName}`,
		`onlinemarketing ${cityName}`,
	];
	const keywords = keywordsArray.join(", ");

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
