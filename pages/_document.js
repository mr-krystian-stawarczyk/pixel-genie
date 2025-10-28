// /pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="de">
			<Head>
				{/* ✅ OG default */}
				<meta property="og:title" content="Pixel Genie Webagentur" />
				<meta property="og:type" content="website" />
				<meta
					property="og:description"
					content="Webdesign, SEO, Online-Marketing, Conversion-Optimierung & Performance."
				/>
				<meta name="theme-color" content="#000000" />
				<link
					rel="icon"
					href="/assets/pixel-genie-nettetal-webentwicklung-logo.png"
				/>

				{/* ✅ Language hreflangs */}
				<link rel="alternate" href="https://pixel-genie.de/" hreflang="de" />
				<link
					rel="alternate"
					href="https://pixel-genie.de/"
					hreflang="x-default"
				/>
				<link rel="alternate" href="https://pixel-genie.de/en" hreflang="en" />
				<link rel="alternate" href="https://pixel-genie.de/pl" hreflang="pl" />
				<link rel="alternate" href="https://pixel-genie.de/nl" hreflang="nl" />

				{/* ✅ Crawling discovery */}
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
