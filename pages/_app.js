import React, { useEffect } from "react";

import { PageTransition } from "next-page-transitions";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "@/components/Layout";
import { SSRProvider } from "react-bootstrap";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import { Partytown } from "@builder.io/partytown/react";
function App(props) {
	const { Component, pageProps, router } = props;

	return (
		<SSRProvider>
			<ThemeProvider defaultTheme="dark">
				<Layout>
					<Head>
						<title>Pixel-Genie</title>
						<meta name="Pixel Genie Nettetal" content="Pixel Genie Nettetal" />
						<Partytown debug={true} forward={["dataLayer.push"]} />
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
