import React, { useEffect } from "react";
import { PageTransition } from "next-page-transitions";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "@/components/Layout";
import { SSRProvider } from "react-bootstrap";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import Script from "next/script";
import { useRouter } from "next/router";
import ReactGA from "react-ga";
function App(props) {
	const { Component, pageProps, router } = props;
	const reactRouter = useRouter();

	useEffect(() => {
		ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID);
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	useEffect(() => {
		const handleRouteChange = (url) => {
			ReactGA.pageview(url);
		};

		reactRouter.events.on("routeChangeComplete", handleRouteChange);
	});

	return (
		<SSRProvider>
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID}`}
				strategy="afterInteractive"
			/>
			<Script id="google-analytics-script" strategy="afterInteractive">
				{`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID}');`}
			</Script>
			<Head>
				<title>Pixel-Genie WEBSEITEN SEO BRANDING MARKETING </title>
				<meta
					name="Pixel Genie Nettetal WEBSEITEN SEO BRANDING MARKETING MEDIA SOCIAL MEDIA"
					content="Pixel Genie Nettetal WEBSEITEN SEO BRANDING MARKETING MEDIA SOCIAL MEDIA die beste !"
				/>
				<link rel="manifest" href="/manifest.json" />
			</Head>{" "}
			<ThemeProvider>
				<Layout>
					<Component {...pageProps} key={router.route} />
				</Layout>{" "}
			</ThemeProvider>
		</SSRProvider>
	);
}

export default appWithTranslation(App);
