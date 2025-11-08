import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="de">
			<Head>
				{/* ✅ Favicon */}
				<link
					rel="icon"
					href="/assets/pixel-genie-nettetal-webentwicklung-logo.png"
					type="image/png"
				/>

				{/* ✅ Preload logo (LCP element) */}
				<link
					rel="preload"
					as="image"
					href="/assets/pixel-genie-nettetal-webentwicklung-logo.png"
				/>

				{/* ✅ Fonty (tylko używane warianty) */}
				<link
					rel="preload"
					as="font"
					href="/fonts/poppins/Poppins-Regular.woff2"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					as="font"
					href="/fonts/poppins/Poppins-Bold.woff2"
					type="font/woff2"
					crossOrigin="anonymous"
				/>

				{/* ✅ SEO + OG */}
				<meta property="og:title" content="Pixel Genie Webagentur" />
				<meta property="og:type" content="website" />
				<meta
					property="og:description"
					content="Webdesign, SEO, Online-Marketing, Conversion-Optimierung & Performance."
				/>
				<meta name="theme-color" content="#003681" />

				{/* ✅ hreflang */}
				<link rel="alternate" hrefLang="de" href="https://pixel-genie.de/" />
				<link
					rel="alternate"
					hrefLang="x-default"
					href="https://pixel-genie.de/"
				/>
				{/* ✅ Discovery */}
				<link
					rel="alternate"
					type="application/rss+xml"
					title="Pixel-Genie Blog RSS"
					href="/rss.xml"
				/>
				<link
					rel="sitemap"
					type="application/xml"
					title="Sitemap"
					href="/sitemap.xml"
				/>
				<link
					rel="sitemap"
					type="application/xml"
					title="Blog Sitemap"
					href="/sitemap-blog.xml"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
