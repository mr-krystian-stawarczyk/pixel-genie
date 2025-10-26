// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */

// ⚠️ WAŻNE:
// 1) USUWAMY self-referencyjne `additionalSitemaps` → to powodowało pętlę (`/sitemap.xml` wskazywał na siebie).
// 2) DODAJEMY `additionalPaths`, aby jawnie dodać statyczne artykuły bloga z /tips/[slug].
// 3) DOPASOWUJEMY priorytety i częstotliwości dla /tips/* i /webdesignblog.
// 4) KORZYSTAMY z dat artykułów jako `lastmod`.

const path = require("path");

// Import danych bloga (CommonJS require + .default, bo plik eksportuje default)
const blogPosts = require("./data/blogPosts").default;

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pixel-genie.de";

const config = {
	siteUrl: SITE_URL,
	generateRobotsTxt: true,
	outDir: "public",
	autoLastmod: true,
	changefreq: "weekly",
	priority: 0.8,

	// ❌ Uwaga: NIE dodawaj tutaj własnego /sitemap.xml – tworzy pętlę!
	robotsTxtOptions: {
		policies:
			process.env.NEXT_PUBLIC_SITE_URL &&
			process.env.NEXT_PUBLIC_SITE_URL.includes("localhost")
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
		// additionalSitemaps: [] // ← puste lub wskaż tu INNE sitemapy (np. serwerowe), ale nigdy /sitemap.xml
	},

	// ✅ Ręcznie dokładamy /tips/* z datą lastmod na podstawie danych postów
	additionalPaths: async (config) => {
		// upewnij się, że wszystkie slugi są poprawne i unikalne (walidacja już w /data/blogPosts.js)
		const tipEntries = blogPosts.map((p) => ({
			loc: `${SITE_URL}/tips/${p.slug}`,
			changefreq: "weekly",
			priority: 0.9,
			lastmod: new Date(p.date).toISOString(),
		}));

		// możesz też dodać inne ręczne ścieżki tutaj (np. kategorie bloga)
		return tipEntries;
	},

	// ✅ Sterowanie priorytetami dla rozpoznanych URLi
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
			// pojedyncze artykuły
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

		// Domyślny lastmod – jeżeli next-sitemap nie podstawi konkretnego,
		// ustawiamy bieżący czas ISO (dla stron bez danych).
		return {
			loc: url,
			changefreq,
			priority,
			lastmod: new Date().toISOString(),
		};
	},

	// standardowe wykluczenia
	exclude: ["/404", "/500", "/_app", "/_document", "/_error", "/pl/*", "/nl/*"],
};

module.exports = config;
