// pages/_app.js
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { ThemeProvider } from "next-themes";
import { CookiesProvider } from "react-cookie";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { gaPageview } from "@/lib/analytics";

function App({ Component, pageProps }) {
	const router = useRouter();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	// ✅ Lazy-load Google Analytics po 3s (nie blokuje LCP)
	useEffect(() => {
		if (process.env.NODE_ENV !== "production") return;

		const timer = setTimeout(() => {
			if (window.gtagLoaded) return; // ✅ unikanie duplikacji

			const script = document.createElement("script");
			script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID}`;
			script.async = true;
			document.body.appendChild(script);

			window.dataLayer = window.dataLayer || [];
			function gtag() {
				dataLayer.push(arguments);
			}
			window.gtag = gtag;
			window.gtagLoaded = true;

			gtag("js", new Date());
			gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID, {
				page_path: window.location.pathname,
			});
		}, 3000);

		return () => clearTimeout(timer);
	}, [router.asPath]);

	// ✅ Śledzenie zmian trasy (page_view)
	useEffect(() => {
		const handleRouteChange = (url) => gaPageview(url);
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => router.events.off("routeChangeComplete", handleRouteChange);
	}, [router.events]);

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

							{/* ✅ Preload fontów dla LCP boost */}
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
							<link rel="manifest" href="/manifest.json" />
						</Head>

						{/* ✅ Layout opakowuje całą aplikację */}
						<Layout pageProps={pageProps}>
							<Component {...pageProps} key={router.asPath} />
						</Layout>
					</>
				)}
			</ThemeProvider>
		</CookiesProvider>
	);
}

export default appWithTranslation(App);
