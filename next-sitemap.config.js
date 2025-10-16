/** @type {import('next-sitemap').IConfig} */

const config = {
	siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://pixel-genie.de",
	generateRobotsTxt: true,
	targetDirectory: "public",
	transform: async (config, url) => {
		let priority = "1.0";
		let changefreq = "daily";

		if (url === `${config.siteUrl}` || url === `${config.siteUrl}/`) {
			priority = 1.0;
		} else if (url.includes("/webseitenerstellen")) {
			priority = 0.9;
		} else if (url.includes("/suchmaschinenoptimierung")) {
			priority = 0.9;
		} else if (url.includes("/webdesign")) {
			priority = 0.9;
		} else if (url.includes("/webdesignblog")) {
			priority = 0.9;
		} else if (url.includes("/branding")) {
			priority = 0.8;
		} else if (url.includes("/socialmediamarketing")) {
			priority = 0.8;
		} else if (
			url.includes("/impressium") ||
			url.includes("/kontakt") ||
			url.includes("/pixelgeniehistory")
		) {
			priority = 0.5;
		} else if (url.startsWith(`${config.siteUrl}/webentwicklung/`)) {
			priority = 1.0;
			changefreq = "weekly";
		}

		return {
			loc: url,
			changefreq,
			priority,
			lastmod: new Date().toISOString(),
		};
	},
};

module.exports = config;
