const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		formats: ["image/avif", "image/webp"],
		domains: ["cdn.sanity.io", "pixel-genie.de"],
	},
	compress: true,
	experimental: {
		optimizeCss: true,
		optimizePackageImports: ["react-icons", "lucide-react", "react-bootstrap"],
		scrollRestoration: true,
	},
	headers() {
		return [
			{
				source: "/(.*)",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
		];
	},
};

module.exports = withBundleAnalyzer(nextConfig);
