/** @type {import('next-sitemap').IConfig} */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pixel-genie.de";

module.exports = {
	siteUrl: SITE_URL,
	generateRobotsTxt: true,
	outDir: "./out",
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
			const cities = require("./data/citiesData.js");
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

			for (const base of basePages) {
				paths.push(makePath(base, "daily", 1.0));
			}

			for (const c of cities) {
				const slug = (c.slug || c.city || "").toLowerCase().trim();
				if (!slug) continue;
				paths.push(makePath(`/seo/${slug}`));
				paths.push(makePath(`/webentwicklung/${slug}`));
				paths.push(makePath(`/webseitenerstellung/${slug}`));
				paths.push(makePath(`/webdesign-agentur/${slug}`));
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
		"/tips/tag",
		"/tips/tag/*",
	],
};
