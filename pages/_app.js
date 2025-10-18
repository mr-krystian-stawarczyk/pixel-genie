import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ThemeProvider } from "next-themes";
import { CookiesProvider } from "react-cookie";
import { appWithTranslation } from "next-i18next";
import Script from "next/script";
import Head from "next/head";
import { useRouter } from "next/router";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ OK zostawić na razie

// ✅ Lazy-load Layout (nie ładuje od razu całego layoutu)
const Layout = dynamic(() => import("@/components/Layout"), { ssr: true });

function App({ Component, pageProps }) {
	const router = useRouter();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	// ✅ GA – lazy load + event listener
	useEffect(() => {
		const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID;
		if (!GA_ID) return;

		import("react-ga").then((ReactGA) => {
			ReactGA.initialize(GA_ID);
			ReactGA.pageview(window.location.pathname + window.location.search);

			const handleRouteChange = (url) => ReactGA.pageview(url);
			router.events.on("routeChangeComplete", handleRouteChange);

			return () => {
				router.events.off("routeChangeComplete", handleRouteChange);
			};
		});
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
							<link rel="manifest" href="/manifest.json" />
							{/* ✅ Preload czcionki i hero image (LCP boost) */}
							<link rel="preload" as="image" href="/hero.webp" />
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

						{/* ✅ GA – deferred load */}
						{process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID && (
							<>
								<Script
									src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID}`}
									strategy="afterInteractive"
								/>
								<Script id="ga-init" strategy="afterInteractive">
									{`
										window.dataLayer = window.dataLayer || [];
										function gtag(){dataLayer.push(arguments);}
										gtag('js', new Date());
										gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID}', {
											page_path: window.location.pathname,
											send_page_view: false
										});
									`}
								</Script>
							</>
						)}
					</>
				)}
			</ThemeProvider>
		</CookiesProvider>
	);
}

export default appWithTranslation(App);
