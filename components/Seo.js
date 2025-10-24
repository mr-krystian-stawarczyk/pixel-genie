// /components/Seo.js
import Head from "next/head";

export default function Seo({
	title,
	description,
	canonical,
	image,
	type = "website",
	publishedTime,
	modifiedTime,
	breadcrumbs,
}) {
	const jsonLd = [];

	if (type === "article") {
		jsonLd.push({
			"@context": "https://schema.org",
			"@type": "Article",
			headline: title,
			description,
			image: image ? [image] : undefined,
			datePublished: publishedTime,
			dateModified: modifiedTime || publishedTime,
			author: { "@type": "Organization", name: "Pixel-Genie" },
			publisher: {
				"@type": "Organization",
				name: "Pixel-Genie",
				logo: {
					"@type": "ImageObject",
					url: "https://pixel-genie.de/assets/pixel-genie-nettetal-webentwicklung-logo.png",
				},
			},
			mainEntityOfPage: canonical,
		});
	}

	if (breadcrumbs && breadcrumbs.length >= 2) {
		jsonLd.push({
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: breadcrumbs.map((b, idx) => ({
				"@type": "ListItem",
				position: idx + 1,
				name: b.name,
				item: b.url,
			})),
		});
	}

	return (
		<Head>
			{title && <title>{title}</title>}
			{description && <meta name="description" content={description} />}
			<meta name="robots" content="index,follow" />

			{/* OG */}
			<meta
				property="og:type"
				content={type === "article" ? "article" : "website"}
			/>
			{title && <meta property="og:title" content={title} />}
			{description && <meta property="og:description" content={description} />}
			{canonical && <meta property="og:url" content={canonical} />}
			{image && <meta property="og:image" content={image} />}

			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			{title && <meta name="twitter:title" content={title} />}
			{description && <meta name="twitter:description" content={description} />}
			{image && <meta name="twitter:image" content={image} />}

			{/* Canonical */}
			{canonical && <link rel="canonical" href={canonical} />}

			{/* JSON-LD */}
			{jsonLd.length > 0 && (
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			)}
		</Head>
	);
}
