/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	// Dodajemy właściwość `experimental` z włączonym SWC loaderem
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
