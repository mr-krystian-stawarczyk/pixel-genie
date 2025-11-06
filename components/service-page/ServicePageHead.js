import Head from "next/head";

/**
 * Wspólny komponent SEO Head dla stron usług:
 * - Webseitenerstellung
 * - Webentwicklung
 * - Webdesign Agentur
 */
export default function ServicePageHead({
	title,
	description,
	canonical,
	offerSchema,
	image = "/assets/pixel-genie-webseiten-seo-nettetal-logo.png",
}) {
	return (
		<Head>
			{/* ✅ Podstawowe meta */}
			<title>{title}</title>
			<meta name="description" content={description} />
			<link rel="canonical" href={canonical} />

			{/* ✅ Open Graph */}
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={canonical} />
			<meta
				property="og:image"
				content={`https://www.pixel-genie.de${image}`}
			/>

			{/* ✅ Twitter Cards */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta
				name="twitter:image"
				content={`https://www.pixel-genie.de${image}`}
			/>

			{/* ✅ Favicon */}
			<link rel="icon" type="image/png" href={image} />

			{/* ✅ Structured Data */}
			{offerSchema && (
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(offerSchema),
					}}
				/>
			)}
		</Head>
	);
}
