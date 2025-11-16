// /pages/webdesignblog.js
import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";
import citiesData from "@/data/citiesData";
import blogPosts from "@/data/blogPosts";
import Blog1 from "@/components/Blog1";
// 🔹 Komponenty dynamiczne (bez SSR dla szybkości)
const Blog2 = dynamic(() => import("@/components/Blog2"), { ssr: false });
const BlogFAQ = dynamic(() => import("@/components/BlogFAQ"), { ssr: false });

// 🔹 Dane lokalnego biznesu (schema.org)
const cityData = citiesData.find((c) => c.city === "nettetal");

// ✅ Statyczny export — bez ISR
export async function getStaticProps() {
	return {
		props: { posts: blogPosts },
	};
}

export default function WebDesignBlog({ posts }) {
	const pageUrl = "https://pixel-genie.de/webdesignblog";
	const ogImage = "https://pixel-genie.de/assets/conversion-fehler.jpg";
	const ogTitle = "Pixel-Genie Blog – Webdesign, SEO & Conversion Tipps";
	const ogDescription =
		"Pixel-Genie Blog: Webdesign, Webseiten-Erstellung, SEO, Social Media und Conversion-Optimierung. Aktuelle Tipps und Strategien für KMU.";

	// ✅ Schema.org CollectionPage + BlogPosting
	const listLd = {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: "Pixel-Genie Blog",
		url: pageUrl,
		description: ogDescription,
		hasPart: posts.map((p) => ({
			"@type": "BlogPosting",
			headline: p.title,
			description: p.description,
			image: [`https://pixel-genie.de${p.imgSrc}`],
			url: `https://pixel-genie.de/tips/${p.slug}/`,
			datePublished: p.date,
			dateModified: p.date,
			author: {
				"@type": "Organization",
				name: "Pixel-Genie Webdesign Nettetal",
				url: "https://pixel-genie.de",
			},
			publisher: {
				"@type": "Organization",
				name: "Pixel-Genie",
				logo: {
					"@type": "ImageObject",
					url: "https://pixel-genie.de/assets/pixel-genie-logo.png",
				},
			},
		})),
	};

	return (
		<div className="mt-5 pt-5">
			<Head>
				{/* 🧭 Meta podstawowe */}
				<title>{ogTitle}</title>
				<meta name="description" content={ogDescription} />
				<meta name="robots" content="index,follow" />
				<meta name="author" content="Pixel-Genie Webdesign Nettetal" />
				<meta name="language" content="de" />
				<link rel="canonical" href={pageUrl} />

				{/* 🌐 Open Graph */}
				<meta property="og:locale" content="de_DE" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content={ogTitle} />
				<meta property="og:description" content={ogDescription} />
				<meta property="og:url" content={pageUrl} />
				<meta property="og:image" content={ogImage} />
				<meta property="og:site_name" content="Pixel-Genie" />

				{/* 🐦 Twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={ogTitle} />
				<meta name="twitter:description" content={ogDescription} />
				<meta name="twitter:image" content={ogImage} />

				{/* 📚 Structured Data */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(listLd) }}
				/>
			</Head>

			{/* 🧩 Zawartość strony */}
			<LocalBusinessJsonLd cityData={cityData} />
			<Blog1 />
			<Blog2 posts={posts} pageUrl={pageUrl} />
			<BlogFAQ />
		</div>
	);
}
