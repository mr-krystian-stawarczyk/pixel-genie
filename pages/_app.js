import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { initGA, gaPageview, GA_ID } from "@/lib/analytics";
import { getCookie } from "cookies-next";

function AppContent({ Component, pageProps }) {
	const router = useRouter();
	const [mounted, setMounted] = useState(false);
	const [hasConsent, setHasConsent] = useState(false);

	useEffect(() => setMounted(true), []);

	// ✅ Ustal consent na starcie + nasłuchuj Twojego eventu z bannera (jak w ZIP)
	useEffect(() => {
		const check = () => setHasConsent(getCookie("marketingConsent") === "true");
		check();
		const onAccept = () => {
			setHasConsent(true);
			// initGA + pageview poniżej w kolejnym effect
		};
		window.addEventListener("cookieAccepted", onAccept);
		return () => window.removeEventListener("cookieAccepted", onAccept);
	}, []);

	// ✅ Inicjalizacja GA po zgodzie (tylko prod)
	useEffect(() => {
		if (process.env.NODE_ENV !== "production") return;
		if (!hasConsent) return;
		initGA();
		gaPageview(window.location.pathname);
	}, [hasConsent]);

	// ✅ Track pageviews po zmianie trasy — tylko gdy GA już działa
	useEffect(() => {
		const handleRouteChange = (url) => {
			if (window.gtagInitialized) gaPageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => router.events.off("routeChangeComplete", handleRouteChange);
	}, [router.events]);

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

			{/* 🔒 RODO: ładujemy skrypt GA dopiero po zgodzie + tylko w produkcji */}
			{process.env.NODE_ENV === "production" && hasConsent && (
				<>
					<Script
						src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
						strategy="afterInteractive"
					/>
					<Script id="ga-stub" strategy="afterInteractive">
						{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
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
					{/* Ten key zostawiam jak w ZIP, żeby zachować Twój behavior */}
					<Component {...pageProps} key={router.asPath} />
				</Layout>
			</ThemeProvider>
		</>
	);
}

// ⛑️ BEZ react-cookie — nie potrzebujemy już CookiesProvider
export default function MyApp(props) {
	return <AppContent {...props} />;
}
