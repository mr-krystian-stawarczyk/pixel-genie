/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
};

module.exports = {
	...nextConfig,
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
