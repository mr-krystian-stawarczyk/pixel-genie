// /pages/_app.js
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { ThemeProvider } from "next-themes";
import { CookiesProvider, useCookies } from "react-cookie";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { initGA, gaPageview, GA_ID } from "@/lib/analytics";

function AppContent({ Component, pageProps }) {
	const router = useRouter();
	const [mounted, setMounted] = useState(false);
	const [cookies] = useCookies(["essentialConsent", "marketingConsent"]);

	useEffect(() => setMounted(true), []);

	// ✅ Inicjalizacja GA tylko po zgodzie marketingowej + tylko prod
	useEffect(() => {
		if (
			process.env.NODE_ENV === "production" &&
			cookies.marketingConsent === "true"
		) {
			initGA();
			gaPageview(window.location.pathname);
		}
	}, [cookies.marketingConsent]);

	// ✅ Track pageviews przy zmianie route
	useEffect(() => {
		const handleRouteChange = (url) => {
			if (cookies.marketingConsent === "true") gaPageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => router.events.off("routeChangeComplete", handleRouteChange);
	}, [router.events, cookies.marketingConsent]);

	if (!mounted) return null;

	return (
		<>
			<Head>
				<title>Pixel-Genie – Webseiten, SEO & Branding</title>
				<meta
					name="description"
					content="Pixel-Genie entwickelt moderne Webseiten, SEO-optimierte Lösungen und digitale Markenstrategien."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="manifest" href="/manifest.json" />
			</Head>

			{/* ✅ Ładowanie GA SCRIPT tylko przy zgodzie i tylko na produkcji */}
			{process.env.NODE_ENV === "production" &&
				cookies.marketingConsent === "true" && (
					<>
						<Script
							src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
							strategy="afterInteractive"
						/>
						<Script id="ga-init" strategy="afterInteractive">
							{`
								window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());
								gtag('config', '${GA_ID}', {
									page_path: window.location.pathname,
								});
							`}
						</Script>
					</>
				)}

			<ThemeProvider
				attribute="class"
				defaultTheme="dark"
				enableSystem
				disableTransitionOnChange
			>
				<Layout pageProps={pageProps}>
					<Component {...pageProps} key={router.asPath} />
				</Layout>
			</ThemeProvider>
		</>
	);
}

export default function MyApp(props) {
	return (
		<CookiesProvider>
			<AppContent {...props} />
		</CookiesProvider>
	);
}
