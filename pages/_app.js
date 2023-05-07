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

import Script from "next/script";
function App(props) {
	const { Component, pageProps, router } = props;

	return (
		<SSRProvider>
			<ThemeProvider>
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
