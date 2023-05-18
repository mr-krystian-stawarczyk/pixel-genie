import React from "react";
import { useRouter } from "next/router";
import { PageTransition } from "next-page-transitions";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "@/components/Layout";
import { SSRProvider } from "react-bootstrap";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import Script from "next/script";
import i18n from "i18next";
import { AnimatePresence, motion } from "framer-motion";
function App(props) {
	const { Component, pageProps, router } = props;

	return (
		<SSRProvider>
			<ThemeProvider defaultTheme="dark">
				<Layout>
					<Head>
						<title>Pixel-Genie</title>
						<meta name="Pixel Genie Nettetal" content="Pixel Genie Nettetal" />
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
