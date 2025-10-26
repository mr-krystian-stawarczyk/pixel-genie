/** @type {import('next-sitemap').IConfig} */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pixel-genie.de";

module.exports = {
	siteUrl: SITE_URL,
	generateRobotsTxt: true,
	outDir: "public",
	autoLastmod: true,
	changefreq: "weekly",
	priority: 0.8,

	robotsTxtOptions: {
		policies: SITE_URL.includes("localhost")
			? [
					{
						userAgent: "*",
						disallow: "/",
					},
				]
			: [
					{
						userAgent: "*",
						allow: "/",
						disallow: [
							"/_next/",
							"/api/",
							"/404",
							"/500",
							"/favicon.ico",
							"/manifest.json",
						],
					},
				],
		host: SITE_URL,
	},

	// ✅ Dynamiczne priorytety i częstotliwości dla kluczowych sekcji
	transform: async (config, url) => {
		let priority = 0.8;
		let changefreq = "weekly";

		if (url === `${config.siteUrl}` || url === `${config.siteUrl}/`) {
			priority = 1.0;
			changefreq = "daily";
		} else if (url.startsWith(`${config.siteUrl}/webseitenerstellung/`)) {
			priority = 1.0;
			changefreq = "daily";
		} else if (url.startsWith(`${config.siteUrl}/webentwicklung/`)) {
			priority = 0.9;
			changefreq = "weekly";
		} else if (url.startsWith(`${config.siteUrl}/seo/`)) {
			priority = 0.9;
			changefreq = "weekly";
		} else if (url.startsWith(`${config.siteUrl}/webdesign-agentur/`)) {
			priority = 0.9;
			changefreq = "weekly";
		} else if (
			url.includes("/webseitenerstellen") ||
			url.includes("/suchmaschinenoptimierung") ||
			url.includes("/webdesign") ||
			url.startsWith(`${config.siteUrl}/standorte`) ||
			url.includes("/webdesignblog")
		) {
			priority = 0.9;
			changefreq = "weekly";
		} else if (url.startsWith(`${config.siteUrl}/tips/`)) {
			priority = 0.9;
			changefreq = "weekly";
		} else if (
			url.includes("/branding") ||
			url.includes("/socialmediamarketing")
		) {
			priority = 0.8;
			changefreq = "weekly";
		} else if (
			url.includes("/impressum") ||
			url.includes("/kontakt") ||
			url.includes("/pixelgeniehistory")
		) {
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

	exclude: ["/404", "/500", "/_app", "/_document", "/_error", "/pl/*", "/nl/*"],
};
