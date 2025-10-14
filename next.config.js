/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	headers() {
		return [
			{
				source: "/manifest.json",
				headers: [
					{
						key: "Content-Type",
						value: "application/manifest+json",
					},
				],
			},
		];
	},
};

module.exports = nextConfig;
