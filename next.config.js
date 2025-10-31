/**
 * ✅ NEXT CONFIG – zoptymalizowana pełna wersja
 * Dla Next 14+ / Netlify, z preloadem fontów i nowoczesnym buildem.
 */

const path = require("path");
const fs = require("fs");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

/**
 * ✅ Automatyczny preload lokalnych fontów (np. /public/fonts/poppins/*.woff2)
 */
function addFontPreload() {
	const fontDir = path.join(__dirname, "public/fonts/poppins");
	if (!fs.existsSync(fontDir)) return [];
	const fonts = fs.readdirSync(fontDir).filter((f) => f.endsWith(".woff2"));
	return fonts.map((file) => ({
		rel: "preload",
		as: "font",
		href: `/fonts/poppins/${file}`,
		type: "font/woff2",
		crossOrigin: "anonymous",
	}));
}

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
	reactStrictMode: true,
	compress: true,
	swcMinify: true,
	trailingSlash: true,
	output: "export",

	images: {
		unoptimized: true,
		formats: ["image/avif", "image/webp"],
		domains: ["pixel-genie.de"],
	},

	outputFileTracingRoot: path.join(__dirname),

	/** ✅ Eksperymentalne / optymalizacyjne opcje **/
	experimental: {
		legacyBrowsers: false, // usuwa niepotrzebne polyfille
		esmExternals: true,
		optimizeCss: true,
		scrollRestoration: true,
		modularizeImports: {
			"react-bootstrap": { transform: "react-bootstrap/{{member}}" },
			"react-icons": { transform: "react-icons/{{member}}" },
			"framer-motion": { transform: "framer-motion/{{member}}" },
			lodash: { transform: "lodash/{{member}}" },
		},
	},

	/** ✅ Kompilacja SWC – czyszczenie i redukcja runtime JS **/
	compiler: {
		removeConsole: process.env.NODE_ENV === "production",
		reactRemoveProperties: true,
		transformMixedEsModules: true,
	},

	/** ✅ Automatyczny preload fontów **/
	async head() {
		return { link: addFontPreload() };
	},

	/** ✅ Cache i nagłówki bezpieczeństwa **/
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

	eslint: {
		ignoreDuringBuilds: true,
	},
});

module.exports = nextConfig;
