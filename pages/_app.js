import React, { useEffect } from "react";

import { PageTransition } from "next-page-transitions";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "@/components/Layout";
import { SSRProvider } from "react-bootstrap";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";

function App(props) {
	const { Component, pageProps, router } = props;
	useEffect(() => {
		if ("serviceWorker" in navigator) {
			navigator.serviceWorker
				.register("/public/sw.js")
				.then((registration) => console.log("scope is: ", registration.scope));
		}
	}, []);
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
