import React, { useEffect } from "react";
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

function App({ Component, pageProps, router }) {
	const reactRouter = useRouter();

	// Google Analytics
	useEffect(() => {
		if (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID) {
			ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID);
			ReactGA.pageview(window.location.pathname + window.location.search);
		}
	}, []);

	useEffect(() => {
		const handleRouteChange = (url) => ReactGA.pageview(url);
		reactRouter.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			reactRouter.events.off("routeChangeComplete", handleRouteChange);
		};
	}, []);

	return (
		<CookiesProvider>
			<ThemeProvider attribute="class">
				<Layout>
					<Head>
						<title>Pixel-Genie WEBSEITEN SEO BRANDING MARKETING</title>
						<meta
							name="description"
							content="Pixel Genie Nettetal WEBSEITEN SEO BRANDING MARKETING MEDIA SOCIAL MEDIA die beste !"
						/>
						<link rel="manifest" href="/manifest.json" />
					</Head>

					{/* Google Analytics Script */}
					{process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID && (
						<>
							<Script
								src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID}`}
								strategy="afterInteractive"
							/>
							<Script id="google-analytics-script" strategy="afterInteractive">
								{`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID}');
`}
							</Script>
						</>
					)}

					<Component {...pageProps} key={router.route} />
				</Layout>
			</ThemeProvider>
		</CookiesProvider>
	);
}

export default appWithTranslation(App);
