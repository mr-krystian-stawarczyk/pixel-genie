/** @type {import('next-sitemap').IConfig} */
import fs from "fs";
import path from "path";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pixel-genie.de";

export default {
	siteUrl: SITE_URL,
	outDir: "out",
	generateRobotsTxt: true,
	autoLastmod: true,
	changefreq: "weekly",
	priority: 0.8,

	robotsTxtOptions: {
		policies: SITE_URL.includes("localhost")
			? [{ userAgent: "*", disallow: "/" }]
			: [
					{
						userAgent: "*",
						allow: "/",
						disallow: [
							"/_next/",
							"/api/",
							"/favicon.ico",
							"/manifest.json",
							"/404",
							"/500",
							"/tips", // 🚫 noindex tips index
							"/tips/tag",
							"/tips/tag/*",
						],
					},
			  ],
		host: SITE_URL,
	},

	transform: async (config, url) => {
		let priority = 0.8;
		let changefreq = "weekly";

		if (url === config.siteUrl || url === `${config.siteUrl}/`) {
			priority = 1.0;
			changefreq = "daily";
		}

		if (
			url.startsWith(`${config.siteUrl}/webdesignblog`) ||
			url.startsWith(`${config.siteUrl}/tips/`)
		) {
			priority = 1.0;
			changefreq = "daily";
		}

		if (
			url.includes("/webseitenerstellung") ||
			url.includes("/webentwicklung") ||
			url.includes("/seo/") ||
			url.includes("/webdesign-agentur/")
		) {
			priority = 0.9;
			changefreq = "weekly";
		}

		if (url.includes("/kontakt") || url.includes("/impressum")) {
			priority = 0.5;
			changefreq = "monthly";
		}

		return {
			loc: url,
			changefreq,
			priority,
			lastmod: new Date().toISOString(),
		};
	},

	additionalPaths: async (config) => {
		try {
			// --- citiesData parser ---
			const citiesPath = path.join(process.cwd(), "data", "citiesData.js");
			const fileContent = fs.readFileSync(citiesPath, "utf-8");
			const match = fileContent.match(/\[([^\]]+)\]/);
			const cities = match
				? match[1].split(",").map((s) => s.replace(/['"\s]/g, ""))
				: [];

			const makePath = (loc, changefreq = "weekly", priority = 0.9) => ({
				loc,
				changefreq,
				priority,
				lastmod: new Date().toISOString(),
			});

			const paths = [];
			const basePages = [
				"/seo",
				"/webdesign-agentur",
				"/webseitenerstellung",
				"/webentwicklung",
				"/webdesignblog",
			];

			// --- Landing pages ---
			for (const base of basePages) {
				paths.push(makePath(base, "daily", 1.0));
			}

			// --- City-based pages ---
			for (const c of cities) {
				const slug = (c || "").toLowerCase().trim();
				if (!slug) continue;
				paths.push(makePath(`/seo/${slug}`));
				paths.push(makePath(`/webentwicklung/${slug}`));
				paths.push(makePath(`/webseitenerstellung/${slug}`));
				paths.push(makePath(`/webdesign-agentur/${slug}`));
			}

			// --- Blog posts ---
			const blogData = await import("./data/blogPosts.js");
			const blogPosts = blogData.default || [];
			for (const post of blogPosts) {
				if (!post.slug) continue;
				paths.push(makePath(`/tips/${post.slug}`, "daily", 1.0));
			}

			return paths;
		} catch (err) {
			console.error("❌ Błąd additionalPaths:", err);
			return [];
		}
	},

	exclude: [
		"/404",
		"/500",
		"/_app",
		"/_document",
		"/_error",
		"/pl/*",
		"/nl/*",
		"/tips", // 🚫 exclude tips index
		"/tips/tag", // 🚫 exclude tag
		"/tips/tag/*", // 🚫 exclude tag
	],
};
