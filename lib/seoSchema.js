// /lib/seoSchema.js
const SITE_ORIGIN = "https://pixel-genie.de";

export const breadcrumbJsonLd = ({ trail }) => ({
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: trail.map((t, i) => ({
		"@type": "ListItem",
		position: i + 1,
		name: t.name,
		item: t.item,
	})),
});

// Strong Article + E-E-A-T + ImageObject
export const articleJsonLd = ({ article, pageUrl }) => ({
	"@context": "https://schema.org",
	"@type": "Article",
	mainEntityOfPage: pageUrl,
	headline: article.title,
	description:
		article.description ||
		(Array.isArray(article.details) ? article.details[0] : ""),
	datePublished: article.date,
	dateModified: article.date,
	image: [`${SITE_ORIGIN}${article.imgSrc}`],
	author: {
		"@type": "Organization",
		name: "Pixel-Genie Webagentur Nettetal",
		url: SITE_ORIGIN,
	},
	publisher: {
		"@type": "Organization",
		name: "Pixel-Genie",
		logo: {
			"@type": "ImageObject",
			url: `${SITE_ORIGIN}/assets/pixel-genie-webseiten-seo-nettetal-logo.png`,
			width: 512,
			height: 512,
		},
	},
});

export const faqJsonLd = (faq) =>
	Array.isArray(faq) && faq.length
		? {
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faq.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: { "@type": "Answer", text: f.a },
				})),
		  }
		: null;

export const blogListJsonLd = ({ posts, pageUrl }) => ({
	"@context": "https://schema.org",
	"@type": "Blog",
	name: "Pixel-Genie Blog",
	url: pageUrl,
	blogPost: posts.map((a) => ({
		"@type": "BlogPosting",
		headline: a.title,
		datePublished: a.date,
		dateModified: a.date,
		image: [`${SITE_ORIGIN}${a.imgSrc}`],
		url: `${SITE_ORIGIN}/tips/${a.slug}`,
	})),
});
