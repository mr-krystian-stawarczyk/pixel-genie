import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { CookiesProvider, useCookies } from "react-cookie";
import { appWithTranslation } from "next-i18next";
import ReactGA from "react-ga";
import Script from "next/script";
import Layout from "@/components/Layout";
import { SSRProvider } from "react-bootstrap";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { PageTransition } from "next-page-transitions";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App(props) {
	const { Component, pageProps, router } = props;
	const [cookies] = useCookies(["localConsent"]);
	const reactRouter = useRouter();

	useEffect(() => {
		if (cookies.localConsent === "true") {
			ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID);
			ReactGA.pageview(window.location.pathname + window.location.search);
		}
	}, [cookies]);

	useEffect(() => {
		const handleRouteChange = (url) => {
			if (cookies.localConsent === "true") {
				ReactGA.pageview(url);
			}
		};

		reactRouter.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			reactRouter.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [cookies, reactRouter.events]);

	return (
		<SSRProvider>
			<ThemeProvider defaultTheme="dark">
				<Layout>
					<Head>
						<title>Pixel-Genie WEBSEITEN SEO BRANDING MARKETING </title>
						<meta
							name="Pixel Genie Nettetal WEBSEITEN SEO BRANDING MARKETING MEDIA SOCIAL MEDIA"
							content="Pixel Genie Nettetal WEBSEITEN SEO BRANDING MARKETING MEDIA SOCIAL MEDIA die beste !"
						/>
						<link rel="manifest" href="/manifest.json" />
					</Head>
					<PageTransition
						timeout={300}
						classNames="page-transition"
						loadingDelay={500}
						loadingClassNames="loading"
						loadingTimeout={{
							enter: 400,
							exit: 0,
						}}
						skipInitialTransition={false}
					>
						<Component {...pageProps} key={router.route} />
					</PageTransition>
				</Layout>
			</ThemeProvider>
		</SSRProvider>
	);
}

export default appWithTranslation(App);
