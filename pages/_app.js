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

function App(props) {
	const { Component, pageProps, router } = props;
	const reactRouter = useRouter();

	useEffect(() => {
		const handleRouteChange = (url) => {
			window.gtag(
				"config",
				process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID,
				{
					page_path: url,
				}
			);
		};

		reactRouter.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			reactRouter.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [reactRouter.events]);

	return (
		<SSRProvider>
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID}`}
				strategy="afterInteractive"
			/>
			<Script id="google-analytics-script" strategy="afterInteractive">
				{`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID}', {
  page_path: window.location.pathname,
});
`}
			</Script>

			<Head>
				<title>Pixel-Genie WEBSEITEN SEO BRANDING MARKETING </title>
				<meta
					name="Pixel Genie Nettetal WEBSEITEN SEO BRANDING MARKETING MEDIA SOCIAL MEDIA"
					content="Pixel Genie Nettetal WEBSEITEN SEO BRANDING MARKETING MEDIA SOCIAL MEDIA die beste !"
				/>
				<link rel="manifest" href="/manifest.json" />
			</Head>
			<Layout>
				<Component {...pageProps} key={router.route} />
			</Layout>
		</SSRProvider>
	);
}

export default appWithTranslation(App);
