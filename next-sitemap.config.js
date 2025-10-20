/** @type {import('next-sitemap').IConfig} */

const config = {
	siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://pixel-genie.de",
	generateRobotsTxt: true,
	targetDirectory: "public",

	transform: async (config, url) => {
		let priority = 0.8;
		let changefreq = "weekly";

		// 🏠 Strona główna
		if (url === `${config.siteUrl}` || url === `${config.siteUrl}/`) {
			priority = 1.0;
			changefreq = "daily";
		}
		// 🚀 Nowy klaster — najwyższy priorytet
		else if (url.startsWith(`${config.siteUrl}/webseitenerstellung/`)) {
			priority = 1.0;
			changefreq = "daily";
		}
		// 🌐 Webentwicklung (niższy, bo bardziej techniczny)
		else if (url.startsWith(`${config.siteUrl}/webentwicklung/`)) {
			priority = 0.8;
			changefreq = "weekly";
		}
		// 📈 SEO, Webdesign, Blog
		else if (
			url.includes("/webseitenerstellen") ||
			url.includes("/suchmaschinenoptimierung") ||
			url.includes("/webdesign") ||
			url.includes("/webdesignblog")
		) {
			priority = 0.9;
			changefreq = "weekly";
		}
		// 📱 Branding i Social Media
		else if (
			url.includes("/branding") ||
			url.includes("/socialmediamarketing")
		) {
			priority = 0.8;
			changefreq = "weekly";
		}
		// 🧾 Strony informacyjne
		else if (
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
};

module.exports = config;
