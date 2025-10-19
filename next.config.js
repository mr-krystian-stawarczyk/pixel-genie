const path = require("path");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});
const fs = require("fs");

/**
 * Funkcja pomocnicza – tworzy preload dla lokalnych fontów.
 * Next automatycznie zaciągnie <link rel="preload"> dla fontów z /public/fonts.
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
	reactStrictMode: true,
	compress: true,

	// ✅ Static export
	output: "export",
	trailingSlash: true,

	// ✅ Netlify Image CDN loader
	images: {
		formats: ["image/avif", "image/webp"],
		domains: ["cdn.sanity.io", "pixel-genie.de"],
		loader: "custom",
		loaderFile: "./netlify-image-loader.js",
	},

	outputFileTracingRoot: path.join(__dirname),
	swcMinify: true,

	experimental: {
		legacyBrowsers: false,
		browsersListForSwc: true,
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

	// ✅ Preload lokalnych fontów
	async head() {
		return { link: addFontPreload() };
	},

	// ✅ Nagłówki cache’ujące
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
				source: "/images/:path*",
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
					{ key: "Access-Control-Allow-Origin", value: "*" },
				],
			},
			{
				source: "/:path*",
				headers: [
					{ key: "Cache-Control", value: "max-age=0, must-revalidate" },
				],
			},
		];
	},

	eslint: { ignoreDuringBuilds: true },
});

module.exports = nextConfig;
