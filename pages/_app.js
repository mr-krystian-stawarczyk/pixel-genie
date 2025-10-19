// pages/_app.js
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ThemeProvider } from "next-themes";
import { CookiesProvider } from "react-cookie";
import { appWithTranslation } from "next-i18next";
import Script from "next/script";
import Head from "next/head";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ zostaw, bez JS Bootstrapa
import "../styles/globals.css";

// ✅ Lazy-load Layout (z SSR)
const Layout = dynamic(() => import("@/components/Layout"), { ssr: true });

function App({ Component, pageProps }) {
	const router = useRouter();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<CookiesProvider>
			<ThemeProvider
				attribute="class"
				defaultTheme="dark"
				enableSystem={true}
				disableTransitionOnChange
			>
				{mounted && (
					<>
						<Head>
							<title>Pixel-Genie – Webseiten, SEO & Branding</title>
							<meta
								name="description"
								content="Pixel-Genie entwickelt moderne Webseiten, SEO-optimierte Lösungen und digitale Markenstrategien für Unternehmen in Deutschland."
							/>
							<meta
								name="viewport"
								content="width=device-width, initial-scale=1"
							/>
							<meta name="robots" content="index, follow" />
							<meta property="og:title" content="Pixel Genie Webagentur" />
							<meta
								property="og:description"
								content="Pixel Genie – Webdesign, SEO und Branding in Nettetal. Wir entwickeln maßgeschneiderte digitale Lösungen für Unternehmen."
							/>
							<meta
								property="og:image"
								content="/assets/pixel-genie-logo.png"
							/>
							<meta property="og:url" content="https://pixel-genie.de" />
							<meta property="og:type" content="website" />
							<link rel="manifest" href="/manifest.json" />
							{/* ✅ Preload czcionek (LCP boost) */}
							<link
								rel="preload"
								href="/fonts/poppins/Poppins-Regular.ttf"
								as="font"
								type="font/ttf"
								crossOrigin="anonymous"
							/>
							<link
								rel="preload"
								href="/fonts/poppins/Poppins-Bold.ttf"
								as="font"
								type="font/ttf"
								crossOrigin="anonymous"
							/>
						</Head>

						<Layout pageProps={pageProps}>
							<Component {...pageProps} key={router.asPath} />
						</Layout>

						{/* ✅ Google Analytics – lazy load po załadowaniu strony */}
						<Script
							src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID}`}
							strategy="lazyOnload"
						/>
						<Script id="google-analytics" strategy="lazyOnload">
							{`
								window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());
								gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID}', {
									page_path: window.location.pathname,
								});
							`}
						</Script>
					</>
				)}
			</ThemeProvider>
		</CookiesProvider>
	);
}

export default appWithTranslation(App);
