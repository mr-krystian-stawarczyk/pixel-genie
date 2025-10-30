const path = require("path");
const fs = require("fs");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

/**
 * ✅ Preload lokalnych fontów (Poppins WOFF2)
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
	output: "export",
	trailingSlash: true,

	images: {
		unoptimized: true,
		formats: ["image/avif", "image/webp"],
		domains: ["pixel-genie.de"],
	},

	outputFileTracingRoot: path.join(__dirname),

	experimental: {
		legacyBrowsers: false, // usuwa stare polyfille
		optimizeCss: true,
		scrollRestoration: true,
	},

	compiler: {
		removeConsole: process.env.NODE_ENV === "production",
		reactRemoveProperties: true,
		modularizeImports: {
			"react-icons": {
				transform: "react-icons/{{member}}",
			},
			"framer-motion": {
				transform: "framer-motion/{{member}}",
			},
		},
	},

	async head() {
		return {
			link: [
				...addFontPreload(),
				{
					rel: "preload",
					as: "image",
					href: "/assets/webentwicklung-nettetal-seo2-310.webp",
					fetchpriority: "high",
				},
			],
		};
	},

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
