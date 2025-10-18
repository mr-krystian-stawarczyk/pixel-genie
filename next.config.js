// next.config.js

const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		formats: ["image/avif", "image/webp"],
		domains: ["cdn.sanity.io", "pixel-genie.de"],
	},
	headers() {
		return [
			{
				source: "/manifest.json",
				headers: [{ key: "Content-Type", value: "application/manifest+json" }],
			},
		];
	},
};

module.exports = withBundleAnalyzer(nextConfig);
