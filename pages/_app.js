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

function App(props) {
	const { Component, pageProps, router } = props;

	return (
		<SSRProvider>
			<ThemeProvider>
				<Layout>
					<Head>
						<title>Pixel-Genie</title>
						<meta
							name="Helmond"
							content="AM Greenergy is uw partner voor duurzame energieoplossingen in Helmond. Ontdek ons aanbod aan zonnepanelen, airconditioning, pompen, batterijen, en warmtepompen en vraag een gratis offerte aan!"
						/>
					</Head>
					<PageTransition
						timeout={300}
						classNames="page-transition"
						loadingComponent={<div>Loading...</div>}
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
				</Layout>{" "}
			</ThemeProvider>
		</SSRProvider>
	);
}

export default App;
