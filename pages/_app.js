import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { GA_ID, initGA, gaPageview, gaEvent } from "@/lib/analytics";
import { getCookie } from "cookies-next";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import localFont from "next/font/local";
import { captureAttribution } from "@/lib/attribution";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";

const poppins = localFont({
	src: [
		{
			path: "../public/fonts/poppins/Poppins-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/fonts/poppins/Poppins-Bold.woff2",
			weight: "700",
			style: "normal",
		},
	],
	display: "swap",
	preload: true,
	variable: "--font-poppins",
});

function AppContent({ Component, pageProps }) {
	const router = useRouter();
	const [hasConsent, setHasConsent] = useState(false);


	useEffect(() => {
		const checkConsent = () =>
			setHasConsent(getCookie("marketingConsent") === "true");
		checkConsent();
		captureAttribution();
		const onAccept = () => { setHasConsent(true); captureAttribution(); };
		window.addEventListener("cookieAccepted", onAccept);
		return () => window.removeEventListener("cookieAccepted", onAccept);
	}, []);

	// ✅ GA init po akceptacji cookies
	useEffect(() => {
		if (!hasConsent || !GA_ID) return;

		const bootGA = () => {
			initGA();
			gaPageview(window.location.pathname);
		};

		if ("requestIdleCallback" in window) {
			requestIdleCallback(bootGA, { timeout: 1500 });
		} else {
			setTimeout(bootGA, 1500);
		}
	}, [hasConsent]);

	// ✅ Pageview na zmianę trasy
	useEffect(() => {
		const handleRouteChange = (url) => {
			gaPageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => router.events.off("routeChangeComplete", handleRouteChange);
	}, [router.events]);

	// ✅ Scroll depth – optymalny
	useEffect(() => {
		if (!hasConsent || !window.gtagInitialized) return;
		let lastSent = 0;
		const thresholds = [25, 50, 75, 100];
		const handler = () => {
			const percent = Math.round(
				((window.scrollY + window.innerHeight) / document.body.scrollHeight) *
					100
			);
			for (const t of thresholds) {
				if (percent >= t && lastSent < t) {
					lastSent = t;
					gaEvent("scroll_depth", { percent: t });
				}
			}
		};
		window.addEventListener("scroll", handler, { passive: true });
		return () => window.removeEventListener("scroll", handler);
	}, [hasConsent]);


	return (
		<>
			<Head>
				<title>Pixel-Genie – Webseiten, SEO & Branding</title>
				<meta
					name="description"
					content="Pixel-Genie entwickelt moderne Webseiten, SEO-optimierte Lösungen und digitale Markenstrategien."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link
					rel="preconnect"
					href="https://www.googletagmanager.com"
					crossOrigin="anonymous"
				/>
				<link
					rel="preconnect"
					href="https://www.google-analytics.com"
					crossOrigin="anonymous"
				/>
			</Head>

			{/* ✅ Ładowanie GA4 po akceptacji cookies */}
			{hasConsent && GA_ID && (
				<Script
					src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
					strategy="afterInteractive"
					onLoad={() => {
						console.log("📡 GA script loaded:", GA_ID);
						initGA();
					}}
				/>
			)}

			<ThemeProvider
				attribute="class"
				defaultTheme="dark"
				enableSystem={false}
				disableTransitionOnChange
			>
				<I18nextProvider i18n={i18n}>
					<main className={poppins.className}>
						<LocalBusinessJsonLd />
						<Layout pageProps={pageProps}>
							<Component {...pageProps} key={router.asPath} />
						</Layout>
					</main>
				</I18nextProvider>
			</ThemeProvider>
		</>
	);
}

export default function MyApp(props) {
	return <AppContent {...props} />;
}
