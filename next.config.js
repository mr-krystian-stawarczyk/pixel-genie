/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
};

const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
	...nextConfig,
	webpack: (config, { dev, isServer }) => {
		// Tree Shaking Configuration
		if (process.env.NODE_ENV === "production") {
			// Enable aggressive code minification
			config.optimization.minimize = true;
			config.optimization.minimizer = [
				new TerserPlugin({
					terserOptions: {
						compress: {
							drop_console: true, // Remove console.log statements
						},
						output: {
							comments: false,
						},
					},
				}),
			];
			config.optimization.usedExports = true;

			// Fine-tune code splitting
			config.optimization.splitChunks = {
				chunks: "all",
				minSize: 20000, // Minimal file size to split
				maxSize: 0, // No maximum file size
			};
		}

		return config;
	},
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
