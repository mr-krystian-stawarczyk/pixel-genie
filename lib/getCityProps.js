import citiesData from "@/data/citiesData";
import slugify from "@/lib/slugify";

export function normalizeSlug(str) {
	return String(str)
		.normalize("NFKD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/-+/g, "-")
		.replace(/^-|-$/g, "");
}

export default function getCityProps(params, pageType) {
	const slugParam = normalizeSlug(params.city);

	const cityData =
		citiesData.find(
			(c) => normalizeSlug(c.slug ?? slugify(c.city)) === slugParam
		) || null;

	if (!cityData) return { notFound: true };

	const cityName =
		cityData.city.charAt(0).toUpperCase() + cityData.city.slice(1);

	const seoBase = {
		cityName,
		canonical: `https://pixel-genie.de/${pageType}/${slugParam}`,
	};

	const seo = {
		webentwicklung: {
			title: `Webentwicklung in ${cityName} – Websites, die verkaufen | Pixel-Genie`,
			description: `Webentwicklung in ${cityName}: Schnelle, SEO-optimierte Websites für mehr Kunden.`,
		},
		"webdesign-agentur": {
			title: `Webdesign Agentur ${cityName} – Pixel-Genie`,
			description: `Modernes Webdesign in ${cityName} – schön, schnell und SEO-optimiert.`,
		},
		seo: {
			title: `SEO Agentur ${cityName} – Sichtbarkeit, die verkauft 🚀`,
			description: `SEO in ${cityName}: Lokale Rankings, die echte Anfragen bringen.`,
		},
		webseitenerstellung: {
			title: `Webseite erstellen lassen in ${cityName} – Professionell & SEO-ready`,
			description: `Webseitenerstellung in ${cityName}: Wir liefern Webseiten, die Kunden bringen.`,
		},
	}[pageType];

	return {
		props: {
			cityData: { ...cityData, slug: slugParam },
			seo: { ...seoBase, ...seo },
		},
		revalidate: 86400,
	};
}
