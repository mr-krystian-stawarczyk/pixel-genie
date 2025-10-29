// ✅ /pages/_document.js — Perf + SEO safe upgrade
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="de">
			<Head>
				{/* ✅ Favicon */}
				<link
					rel="icon"
					href="/assets/pixel-genie-nettetal-webentwicklung-logo.png"
				/>

				{/* ✅ Preconnect + Fonts performance */}
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin=""
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
				/>

				{/* ✅ Default OG */}
				<meta property="og:title" content="Pixel Genie Webagentur" />
				<meta property="og:type" content="website" />
				<meta
					property="og:description"
					content="Webdesign, SEO, Online-Marketing, Conversion-Optimierung & Performance."
				/>
				<meta name="theme-color" content="#003681" />

				{/* ✅ Hreflang FIX (hrefLang) */}
				<link rel="alternate" hrefLang="de" href="https://pixel-genie.de/" />
				<link
					rel="alternate"
					hrefLang="x-default"
					href="https://pixel-genie.de/"
				/>
				<link rel="alternate" hrefLang="pl" href="https://pixel-genie.de/pl/" />
				<link rel="alternate" hrefLang="nl" href="https://pixel-genie.de/nl/" />

				{/* ❌ Tymczasowo wyłącz EN bo 404 / “domain for sale” */}
				{/* <link rel="alternate" hrefLang="en" href="https://pixel-genie.de/en/" /> */}

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
