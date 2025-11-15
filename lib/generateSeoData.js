// /lib/generateSeoData.js
import slugify from "@/lib/slugify";

export default function generateSeoData(cityData) {
	if (!cityData) {
		const fallbackCanonical = "https://pixel-genie.de/seo";

		return {
			title: "SEO NRW – Pixel-Genie",
			description:
				"SEO & Webentwicklung für lokale Unternehmen in NRW – Sichtbarkeit, die Anfragen bringt.",
			canonical: fallbackCanonical,
			openGraph: {
				title: "SEO NRW – Pixel-Genie",
				description:
					"SEO & Webentwicklung für lokale Unternehmen in NRW – Sichtbarkeit, die Anfragen bringt.",
				url: fallbackCanonical,
				type: "website",
				siteName: "Pixel-Genie",
				locale: "de_DE",
			},
			twitter: {
				card: "summary_large_image",
				title: "SEO NRW – Pixel-Genie",
				description:
					"SEO & Webentwicklung für lokale Unternehmen in NRW – Sichtbarkeit, die Anfragen bringt.",
			},
		};
	}

	const {
		city,
		slug,
		region,
		postalCode,
		address,
		phone,
		email,
		population,
		areaKm2,
		boroughs = [],
		historySnippet,
		economicHighlights = {},
		geo,
	} = cityData;

	const rawCity = city || "";
	const cityName =
		rawCity.charAt(0).toUpperCase() + rawCity.slice(1).toLowerCase();
	const regionName = region || "NRW";

	// Bezpieczny slug – 1: slug z citiesData, 2: slugify(city)
	const safeSlug = (slug || slugify(rawCity)).toLowerCase();

	// Na ten moment generateSeoData jest używany tylko dla /seo/[city]
	const canonical = `https://pixel-genie.de/seo/${safeSlug}`;

	// === Meta fragments – robimy je możliwie unikalne per miasto ===
	const highlightEntries = Object.entries(economicHighlights);
	const mainHighlight = highlightEntries.length
		? `${highlightEntries[0][0]}: ${highlightEntries[0][1]}`
		: null;

	const metaFragments = [];

	if (postalCode) {
		metaFragments.push(`PLZ ${postalCode}`);
	}

	if (population) {
		try {
			const formatted = Number(population).toLocaleString("de-DE");
			metaFragments.push(`${formatted} Einwohner`);
		} catch {
			metaFragments.push(`${population} Einwohner`);
		}
	}

	if (areaKm2) {
		metaFragments.push(`${areaKm2} km² Stadtgebiet`);
	}

	if (boroughs.length) {
		metaFragments.push(
			`Stadtteile: ${boroughs.slice(0, 4).join(", ")}${
				boroughs.length > 4 ? " ..." : ""
			}`
		);
	}

	if (mainHighlight) {
		metaFragments.push(mainHighlight);
	}

	const title = `SEO Agentur ${cityName} – Sichtbarkeit für lokale Unternehmen in ${regionName}`;

	const descriptionBase = `Wir unterstützen Unternehmen in ${cityName} mit moderner Suchmaschinenoptimierung dabei, dauerhaft qualifizierte Anfragen über Google zu gewinnen.`;
	const descriptionTail = metaFragments.length
		? ` Fokus auf lokale Besonderheiten: ${metaFragments.join(" · ")}.`
		: "";
	const description = `${descriptionBase}${descriptionTail}`;

	// === JSON-LD (schemaGraph) – LocalBusiness + BreadcrumbList ===
	const schemaCompany = {
		"@type": "ProfessionalService",
		"@id": `${canonical}#company`,
		name: `Pixel-Genie – SEO Agentur ${cityName}`,
		url: canonical,
		telephone: phone || undefined,
		email: email || undefined,
		areaServed: regionName,
		description:
			historySnippet ||
			`SEO & Webentwicklung für lokale Unternehmen in ${cityName}.`,
		address:
			address || postalCode
				? {
						"@type": "PostalAddress",
						streetAddress: address || undefined,
						addressLocality: cityName,
						postalCode: postalCode || undefined,
						addressCountry: "DE",
				  }
				: undefined,
		geo:
			geo && geo.latitude && geo.longitude
				? {
						"@type": "GeoCoordinates",
						latitude: geo.latitude,
						longitude: geo.longitude,
				  }
				: undefined,
	};

	const schemaBreadcrumbs = {
		"@type": "BreadcrumbList",
		"@id": `${canonical}#breadcrumbs`,
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Startseite",
				item: "https://pixel-genie.de/",
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "SEO",
				item: "https://pixel-genie.de/seo/",
			},
			{
				"@type": "ListItem",
				position: 3,
				name: `SEO Agentur ${cityName}`,
				item: canonical,
			},
		],
	};

	const schemaGraph = {
		"@context": "https://schema.org",
		"@graph": [schemaCompany, schemaBreadcrumbs],
	};

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
		schemaGraph,
	};
}
