import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "@/components/Layout";
import { PageTransition } from "next-page-transitions";
import { useRouter } from "next/router";
import { CSSTransition } from "react-transition-group";
import { SSRProvider } from "react-bootstrap";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import ReactGA from "react-ga";
import Script from "next/script";
function App(props) {
	const { Component, pageProps, router } = props;
	ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID);

	useEffect(() => {
		const handleRouteChange = (url) => {
			ga.pageview(url);
		};

		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);
	return (
		<SSRProvider>
			<ThemeProvider>
				{" "}
				<Script
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID}`}
					strategy="afterInteractive"
				/>
				<Script id="google-analytics-script" strategy="afterInteractive">
					{`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID}');`}{" "}
				</Script>
				<Layout>
					<Head>
						<title>Pixel-Genie</title>
						<meta name="Pixel Genie Nettetal" content="Pixel Genie Nettetal" />
					</Head>

					<Component {...pageProps} key={router.route} />
				</Layout>{" "}
			</ThemeProvider>
		</SSRProvider>
	);
}

export default App;
