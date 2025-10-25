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
	const [cookies] = useCookies(["marketingConsent"]);

	useEffect(() => setMounted(true), []);

	// ✅ Jeśli zgoda zostanie udzielona — odpal GA
	useEffect(() => {
		if (cookies.marketingConsent === "true") {
			console.log("✅ Marketing consent detected — initializing GA");
			initGA();
			gaPageview(window.location.pathname);
		} else {
			console.log("❌ No marketing consent — GA disabled");
		}
	}, [cookies.marketingConsent]);

	useEffect(() => {
		const handleRouteChange = (url) => {
			if (cookies.marketingConsent === "true") {
				gaPageview(url);
			}
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
			</Head>

			{/* ✅ <Script> ładuje się ZAWSZE — ale GA nie zbiera danych bez init */}
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
				strategy="afterInteractive"
			/>

			<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
				<Layout pageProps={pageProps}>
					<Component {...pageProps} />
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
