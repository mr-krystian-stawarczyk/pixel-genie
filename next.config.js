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

module.exports = nextConfig;
