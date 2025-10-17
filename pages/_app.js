import React, { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import { CookiesProvider } from "react-cookie";
import Layout from "@/components/Layout";
import { appWithTranslation } from "next-i18next";
import Script from "next/script";
import Head from "next/head";
import { useRouter } from "next/router";
import ReactGA from "react-ga";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

function App({ Component, pageProps }) {
	const router = useRouter();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	useEffect(() => {
		const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID;
		if (GA_ID) {
			ReactGA.initialize(GA_ID);
			ReactGA.pageview(window.location.pathname + window.location.search);
			const handleRouteChange = (url) => ReactGA.pageview(url);
			router.events.on("routeChangeComplete", handleRouteChange);
			return () => router.events.off("routeChangeComplete", handleRouteChange);
		}
	}, [router.events]);

	if (!mounted) {
		return (
			<div className="flex items-center justify-center h-screen bg-gray-100 text-gray-500">
				Lädt...
			</div>
		);
	}

	return (
		<CookiesProvider>
			<ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
				<Layout>
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
					</Head>

					<Component {...pageProps} key={router.asPath} />
				</Layout>

				{/* ✅ Google Analytics */}
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
								gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID}');
							`}
						</Script>
					</>
				)}
			</ThemeProvider>
		</CookiesProvider>
	);
}

export default appWithTranslation(App);
