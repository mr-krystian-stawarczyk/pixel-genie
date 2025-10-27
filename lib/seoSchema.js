// /lib/seoSchema.js
export function breadcrumbJsonLd({ siteOrigin, articleTitle, pageUrl }) {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Blog",
				item: `${siteOrigin}/webdesignblog`,
			},
			{
				"@type": "ListItem",
				position: 2,
				name: articleTitle,
				item: pageUrl,
			},
		],
	};
}

export function articleJsonLd({ headline, datePublished, image, pageUrl }) {
	return {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: headline,
		datePublished: datePublished,
		image: image,
		author: {
			"@type": "Organization",
			name: "Pixel-Genie Webagentur Nettetal",
		},
		publisher: {
			"@type": "Organization",
			name: "Pixel-Genie",
			logo: {
				"@type": "ImageObject",
				url: `${new URL("/assets/pixel-genie-webseiten-seo-nettetal-logo.png", pageUrl).toString()}`,
			},
		},
		mainEntityOfPage: pageUrl,
	};
}

export function faqJsonLd(faqArray = []) {
	if (!Array.isArray(faqArray) || faqArray.length === 0) return null;
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqArray.map((f) => ({
			"@type": "Question",
			name: f.q,
			acceptedAnswer: {
				"@type": "Answer",
				text: f.a,
			},
		})),
	};
}
