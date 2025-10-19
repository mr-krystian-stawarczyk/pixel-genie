const path = require("path");
const fs = require("fs");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

/**
 * ✅ Funkcja pomocnicza – preload dla lokalnych fontów.
 * Tworzy <link rel="preload"> dla fontów z public/fonts/poppins.
 */
function addFontPreload() {
	const fontDir = path.join(__dirname, "public/fonts/poppins");
	if (!fs.existsSync(fontDir)) return [];
	const fonts = fs.readdirSync(fontDir).filter((f) => f.endsWith(".ttf"));
	return fonts.map((file) => ({
		rel: "preload",
		as: "font",
		href: `/fonts/poppins/${file}`,
		type: "font/ttf",
		crossOrigin: "anonymous",
	}));
}

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
	// ✅ Stabilne podstawy
	reactStrictMode: true,
	compress: true,
	swcMinify: true,

	// ✅ Static export dla Netlify
	output: "export",
	trailingSlash: true,

	// ✅ Wyłączony Next Image optimizer (Netlify go nie obsługuje)
	images: {
		unoptimized: true,
		formats: ["image/avif", "image/webp"],
		domains: ["cdn.sanity.io", "pixel-genie.de"],
	},

	// ✅ Ścieżki & optymalizacja builda
	outputFileTracingRoot: path.join(__dirname),

	experimental: {
		optimizeCss: true,
		optimizePackageImports: [
			"react-icons",
			"lucide-react",
			"react-bootstrap",
			"react-countup",
			"framer-motion",
		],
		scrollRestoration: true,
	},

	// ✅ Preload lokalnych fontów (automatycznie)
	async head() {
		return { link: addFontPreload() };
	},

	// ✅ Nagłówki cache'ujące dla zasobów statycznych
	async headers() {
		if (process.env.NODE_ENV === "development") return [];
		return [
			{
				source: "/_next/static/:path*",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
			{
				source: "/assets/:path*",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
			{
				source: "/fonts/:path*",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
					{
						key: "Access-Control-Allow-Origin",
						value: "*",
					},
				],
			},
			{
				source: "/:path*",
				headers: [
					{
						key: "Cache-Control",
						value: "max-age=0, must-revalidate",
					},
				],
			},
		];
	},

	// ✅ ESLint nie blokuje builda
	eslint: {
		ignoreDuringBuilds: true,
	},
});

module.exports = nextConfig;
