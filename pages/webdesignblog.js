// /pages/webdesignblog.js
import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";
import citiesData from "@/data/citiesData";
import blogPosts from "@/data/blogPosts";

const Blog1 = dynamic(() => import("@/components/Blog1"), { ssr: false });
const Blog2 = dynamic(() => import("@/components/Blog2"), { ssr: false });
const Faq1 = dynamic(() => import("@/components/Faq1"), { ssr: false });

const cityData = citiesData.find((c) => c.city === "nettetal");

export default function WebDesignBlog() {
	const pageUrl = "https://pixel-genie.de/webdesignblog";
	const ogImage = "https://pixel-genie.de/assets/conversion-fehler.jpg";
	const ogTitle = "Pixel-Genie Blog – Webdesign, SEO & Conversion Tipps";
	const ogDescription =
		"Pixel-Genie Blog: Webdesign, Webseiten-Erstellung, SEO, Social Media und Conversion-Optimierung. Aktuelle Tipps und Strategien für KMU.";

	const listLd = {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: "Pixel-Genie Blog",
		url: pageUrl,
		hasPart: blogPosts.map((p) => ({
			"@type": "BlogPosting",
			headline: p.title,
			url: `https://pixel-genie.de/tips/${p.slug}`,
			image: [`https://pixel-genie.de${p.imgSrc}`],
			datePublished: p.date,
			dateModified: p.date,
		})),
	};

	return (
		<div className="mt-5 pt-5">
			<Head>
				<title>{ogTitle}</title>
				<meta name="description" content={ogDescription} />
				<meta name="robots" content="index,follow" />
				<link rel="canonical" href={pageUrl} />

				<meta property="og:title" content={ogTitle} />
				<meta property="og:description" content={ogDescription} />
				<meta property="og:image" content={ogImage} />
				<meta property="og:url" content={pageUrl} />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Pixel-Genie" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={ogTitle} />
				<meta name="twitter:description" content={ogDescription} />
				<meta name="twitter:image" content={ogImage} />

				<meta name="author" content="Pixel-Genie Webdesign Nettetal" />
				<meta name="language" content="de" />

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(listLd) }}
				/>
			</Head>

			<LocalBusinessJsonLd cityData={cityData} />
			<Blog1 />
			<Blog2 pageUrl={pageUrl} />
			<Faq1 />
		</div>
	);
}
