/** @type {import('next-sitemap').IConfig} */
const config = {
	// 🔹 Dynamiczna obsługa środowisk (produkcyjna / lokalna)
	siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://pixel-genie.de",
	generateRobotsTxt: true,

	// 📁 OUTPUT do /public (zgodnie z konfiguracją Next.js build)
	outDir: "public",
	autoLastmod: true,

	changefreq: "weekly",
	priority: 0.8,

	// 🧠 Automatyczna generacja robots.txt
	robotsTxtOptions: {
		policies:
			process.env.NEXT_PUBLIC_SITE_URL &&
			process.env.NEXT_PUBLIC_SITE_URL.includes("localhost")
				? [
						{
							userAgent: "*",
							disallow: "/", // Blokuj lokalne indeksowanie
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
		host: process.env.NEXT_PUBLIC_SITE_URL || "https://pixel-genie.de",
		additionalSitemaps: [
			`${process.env.NEXT_PUBLIC_SITE_URL || "https://pixel-genie.de"}/sitemap.xml`,
			`${process.env.NEXT_PUBLIC_SITE_URL || "https://pixel-genie.de"}/sitemap-0.xml`,
		],
	},

	// 🔁 Dynamiczna priorytetyzacja tras
	transform: async (config, url) => {
		let priority = 0.8;
		let changefreq = "weekly";

		// 🏠 Strona główna
		if (url === `${config.siteUrl}` || url === `${config.siteUrl}/`) {
			priority = 1.0;
			changefreq = "daily";
		}

		// 💻 Webseitenerstellung (najważniejsze lokalne strony)
		else if (url.startsWith(`${config.siteUrl}/webseitenerstellung/`)) {
			priority = 1.0;
			changefreq = "daily";
		}

		// ⚙️ Webentwicklung (techniczne projekty)
		else if (url.startsWith(`${config.siteUrl}/webentwicklung/`)) {
			priority = 0.9;
			changefreq = "weekly";
		}

		// 🚀 SEO (wysoka waga)
		else if (url.startsWith(`${config.siteUrl}/seo/`)) {
			priority = 0.9;
			changefreq = "weekly";
		}

		// 🎨 Webdesign-Agentur (również ważne)
		else if (url.startsWith(`${config.siteUrl}/webdesign-agentur/`)) {
			priority = 0.9;
			changefreq = "weekly";
		}

		// 📈 Inne usługi o wysokiej wartości
		else if (
			url.includes("/webseitenerstellen") ||
			url.includes("/suchmaschinenoptimierung") ||
			url.includes("/webdesign") ||
			url.includes("/webdesignblog")
		) {
			priority = 0.9;
			changefreq = "weekly";
		}

		// 🧠 Branding i Social Media
		else if (
			url.includes("/branding") ||
			url.includes("/socialmediamarketing")
		) {
			priority = 0.8;
			changefreq = "weekly";
		}

		// 📞 Stałe, mało zmienne strony
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

	// ✅ Pomaga uniknąć duplikatów i błędów
	exclude: ["/404", "/500", "/_app", "/_document", "/_error"],
};

module.exports = config;
