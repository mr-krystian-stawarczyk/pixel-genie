import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import "../styles/globals.css";

// ✅ Importy CSS globalne (tylko raz, bez warunku window)
import "bootstrap/dist/css/bootstrap.min.css";

import { initGA, gaPageview, GA_ID, gaEvent } from "@/lib/analytics";
import { getCookie } from "cookies-next";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import localFont from "next/font/local";

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
	const [mounted, setMounted] = useState(false);
	const [hasConsent, setHasConsent] = useState(false);

	useEffect(() => setMounted(true), []);

	useEffect(() => {
		const checkConsent = () =>
			setHasConsent(getCookie("marketingConsent") === "true");
		checkConsent();
		const onAccept = () => setHasConsent(true);
		window.addEventListener("cookieAccepted", onAccept);
		return () => window.removeEventListener("cookieAccepted", onAccept);
	}, []);

	// ✅ GA po zgodzie
	useEffect(() => {
		if (process.env.NODE_ENV !== "production") return;
		if (!hasConsent) return;
		initGA();
		gaPageview(window.location.pathname);
		window.gtagInitialized = true;
	}, [hasConsent]);

	// ✅ Śledzenie zmiany trasy
	useEffect(() => {
		const handleRouteChange = (url) => {
			if (window.gtagInitialized) gaPageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => router.events.off("routeChangeComplete", handleRouteChange);
	}, [router.events]);

	// ✅ Scroll depth analytics
	useEffect(() => {
		if (!hasConsent || !window.gtagInitialized) return;
		let lastSent = 0;
		const thresholds = [25, 50, 75, 100];
		const onScroll = () => {
			const scrollY = window.scrollY + window.innerHeight;
			const height = document.body.offsetHeight || 1;
			const percent = (scrollY / height) * 100;
			for (const t of thresholds) {
				if (percent >= t && lastSent < t) {
					lastSent = t;
					gaEvent("scroll_depth", {
						page: window.location.pathname,
						percent: t,
					});
				}
			}
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [hasConsent]);

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
				<link rel="preconnect" href="https://www.googletagmanager.com" />
			</Head>

			{process.env.NODE_ENV === "production" && hasConsent && (
				<>
					<Script
						src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
						strategy="afterInteractive"
					/>
					<Script id="gtag-init" strategy="afterInteractive">
						{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true, page_path: window.location.pathname });
              window.gtagInitialized = true;
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
				<I18nextProvider i18n={i18n}>
					<main className={poppins.className}>
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
