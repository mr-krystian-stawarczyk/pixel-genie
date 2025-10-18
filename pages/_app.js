import React, { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import { CookiesProvider } from "react-cookie";
import Layout from "@/components/Layout";
import { appWithTranslation } from "next-i18next";
import Script from "next/script";
import Head from "next/head";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

function App({ Component, pageProps }) {
	const router = useRouter();
	const [mounted, setMounted] = useState(false);

	// Ustawia mounted = true po stronie klienta
	useEffect(() => {
		setMounted(true);
	}, []);

	// Google Analytics
	useEffect(() => {
		const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID;
		if (!GA_ID) return;

		let isSubscribed = true;

		async function initGA() {
			const ReactGA = await import("react-ga");
			if (!isSubscribed) return;
			ReactGA.initialize(GA_ID);
			ReactGA.pageview(window.location.pathname + window.location.search);

			const handleRouteChange = (url) => ReactGA.pageview(url);
			router.events.on("routeChangeComplete", handleRouteChange);

			return () => {
				router.events.off("routeChangeComplete", handleRouteChange);
			};
		}

		const cleanupPromise = initGA();

		return () => {
			isSubscribed = false;
			cleanupPromise.then((cleanup) => {
				if (typeof cleanup === "function") cleanup();
			});
		};
	}, [router.events]);

	return (
		<CookiesProvider>
			<ThemeProvider
				attribute="class"
				defaultTheme="dark"
				enableSystem={true}
				// disableTransitionOnChange can help with layout shift
				disableTransitionOnChange
			>
				{/* Zapewnia brak błędów związanych z theme przed mounted */}
				{mounted && (
					<>
						<Layout>
							<Head>
								<title>Pixel‑Genie – Webseiten, SEO & Branding</title>
								<meta
									name="description"
									content="Pixel‑Genie entwickelt moderne Webseiten, SEO‑optimierte Lösungen und digitale Markenstrategien für Unternehmen in Deutschland."
								/>
								<meta
									name="viewport"
									content="width=device-width, initial-scale=1"
								/>
								<link rel="manifest" href="/manifest.json" />
							</Head>

							<Component {...pageProps} key={router.asPath} />

							{process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID && (
								<>
									<Script
										src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID}`}
										strategy="afterInteractive"
									/>
									<Script id="ga-init" strategy="afterInteractive">
										{`
										window.dataLayer = window.dataLayer || [];
										function gtag(){dataLayer.push(arguments);}
										gtag('js', new Date());
										gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID}');
										`}
									</Script>
								</>
							)}
						</Layout>
					</>
				)}
			</ThemeProvider>
		</CookiesProvider>
	);
}

export default appWithTranslation(App);
