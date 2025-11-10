// components/SeoHeadUniversal.js
import Head from "next/head";

export default function SeoHeadUniversal({
	title = "Pixel-Genie – Webdesign, SEO & Marketing",
	description = "Pixel-Genie: Professionelles Webdesign, Suchmaschinenoptimierung und Online-Marketing für lokale Unternehmen in Deutschland.",
	url = "",
	city = "",
	image = "/assets/webseiten-seo-webdesign-logo.png",
}) {
	const finalTitle = city ? `${title} – ${city}` : title;
	const finalUrl =
		url || (typeof window !== "undefined" ? window.location.href : "");

	const schemaData = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		name: "Pixel-Genie",
		image,
		description,
		url: finalUrl,
		address: {
			"@type": "PostalAddress",
			addressLocality: city || "Deutschland",
			addressCountry: "DE",
		},
		sameAs: [
			"https://www.facebook.com/profile.php?id=100090817536941",
			"https://www.instagram.com/pixel.genie",
			"https://www.linkedin.com/company/pixel-genie-de/?viewAsMember=true",
		],
	};

	return (
		<Head>
			<title>{finalTitle}</title>
			<meta name="description" content={description} />
			<link rel="canonical" href={finalUrl} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={finalTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />
			<meta property="og:url" content={finalUrl} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={finalTitle} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
			/>
		</Head>
	);
}

// --- Integracja automatyczna ---
// W każdej stronie, np. /seo/[city].js, /webdesign-agentur/[city].js, /webentwicklung/[city].js, itd.:
// import SeoHeadUniversal from '@/components/SeoHeadUniversal';
// Umieść na górze komponentu strony:
// <SeoHeadUniversal title="SEO Agentur Pixel-Genie" description="Lokale SEO-Optimierung für Unternehmen in ${city}." city={city} />
// lub dynamicznie przez props / router.query
