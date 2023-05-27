/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
};

module.exports = {
	...nextConfig,
	async headers() {
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
