// pages/_app.js
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { ThemeProvider } from "next-themes";
import { CookiesProvider } from "react-cookie";
import { appWithTranslation } from "next-i18next";
import Script from "next/script";
import Head from "next/head";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

function App({ Component, pageProps }) {
	const router = useRouter();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	// ✅ Lazy-load Analytics po 3 sekundach – tylko na produkcji
	useEffect(() => {
		if (process.env.NODE_ENV !== "production") return;
		const timer = setTimeout(() => {
			const script = document.createElement("script");
			script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID}`;
			script.async = true;
			document.body.appendChild(script);

			window.dataLayer = window.dataLayer || [];
			function gtag() {
				dataLayer.push(arguments);
			}
			gtag("js", new Date());
			gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID, {
				page_path: window.location.pathname,
			});
		}, 3000);
		return () => clearTimeout(timer);
	}, [router.asPath]);

	return (
		<CookiesProvider>
			<ThemeProvider
				attribute="class"
				defaultTheme="dark"
				enableSystem
				disableTransitionOnChange
			>
				{mounted && (
					<>
						<Head>
							<title>Pixel-Genie – Webseiten, SEO & Branding</title>
							<meta
								name="description"
								content="Pixel-Genie entwickelt moderne Webseiten, SEO-optimierte Lösungen und digitale Markenstrategien für Unternehmen in Deutschland."
							/>
							<meta
								name="viewport"
								content="width=device-width, initial-scale=1"
							/>
							<meta name="robots" content="index, follow" />
							<meta property="og:title" content="Pixel Genie Webagentur" />
							<meta
								property="og:description"
								content="Pixel Genie – Webdesign, SEO und Branding in Nettetal. Wir entwickeln maßgeschneiderte digitale Lösungen für Unternehmen."
							/>
							<meta
								property="og:image"
								content="/assets/pixel-genie-logo.png"
							/>
							<meta property="og:url" content="https://pixel-genie.de" />
							<meta property="og:type" content="website" />
							<link rel="manifest" href="/manifest.json" />
						</Head>

						{/* ✅ Layout renderuje stronę */}
						<Layout pageProps={pageProps}>
							<Component {...pageProps} key={router.asPath} />
						</Layout>
					</>
				)}
			</ThemeProvider>
		</CookiesProvider>
	);
}

export default appWithTranslation(App);
