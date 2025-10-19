const path = require("path");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	// ✅ Wymusza dobre praktyki Reacta
	reactStrictMode: true,

	// ✅ Kompresja gzip/brotli na poziomie Next
	compress: true,

	// ✅ Optymalizacja obrazów (AVIF + WebP)
	images: {
		formats: ["image/avif", "image/webp"],
		domains: ["cdn.sanity.io", "pixel-genie.de"],
	},

	// ✅ Ścieżka root, żeby naprawić problem z „workspace root inferred”
	outputFileTracingRoot: path.join(__dirname),
	//Next.js domyślnie transpile’uje kod do starszego JS (ES5), mimo że 99% użytkowników ma już ES2020+.
	swcMinify: true,
	experimental: {
		legacyBrowsers: false,
		browsersListForSwc: true,
	},

	experimental: {
		// ✅ Optymalizacja CSS (działa tylko w produkcji)
		optimizeCss: true,

		// ✅ Tree-shaking i szybsze buildy dla dużych paczek
		optimizePackageImports: [
			"react-icons",
			"lucide-react",
			"react-bootstrap",
			"react-countup",
			"framer-motion",
		],

		// ✅ Zachowanie pozycji scrolla między stronami
		scrollRestoration: true,
	},

	// ✅ Nagłówki cache’ujące tylko w produkcji
	async headers() {
		if (process.env.NODE_ENV === "development") {
			// W trybie dev — brak cache (unikamy problemów z Hot Reload)
			return [];
		}

		return [
			// Długie cache tylko dla zasobów statycznych
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
				source: "/_next/image/:path*",
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
			// HTML i dynamiczne strony — bez cache
			{
				source: "/:path*",
				headers: [
					{ key: "Cache-Control", value: "max-age=0, must-revalidate" },
				],
			},
		];
	},

	// ✅ Wymusza, by Next nie mylił lokalizacji projektu
	eslint: {
		ignoreDuringBuilds: true, // (opcjonalnie – jeśli masz ESLint błędy)
	},
};

module.exports = withBundleAnalyzer(nextConfig);
