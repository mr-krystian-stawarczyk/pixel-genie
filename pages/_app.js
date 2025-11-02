import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import "../styles/globals.css";
if (typeof window !== "undefined") {
	import("bootstrap/dist/css/bootstrap.min.css");
}

import { initGA, gaPageview, GA_ID, gaEvent } from "@/lib/analytics";
import { getCookie } from "cookies-next";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import localFont from "next/font/local";

// ✅ preładowanie fontów
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

	// ✅ Montowanie po stronie klienta
	useEffect(() => setMounted(true), []);

	// ✅ Obsługa zgody cookies
	useEffect(() => {
		const checkConsent = () =>
			setHasConsent(getCookie("marketingConsent") === "true");
		checkConsent();
		const onAccept = () => setHasConsent(true);
		window.addEventListener("cookieAccepted", onAccept);
		return () => window.removeEventListener("cookieAccepted", onAccept);
	}, []);

	// ✅ Google Analytics (tylko po zgodzie) – lazy init (TBT fix)
	useEffect(() => {
		if (process.env.NODE_ENV !== "production") return;
		if (!hasConsent) return;

		const bootGA = () => {
			initGA();
			gaPageview(window.location.pathname);
			window.gtagInitialized = true;
		};

		if ("requestIdleCallback" in window) {
			requestIdleCallback(bootGA, { timeout: 2000 });
		} else {
			setTimeout(bootGA, 2000);
		}
	}, [hasConsent]);

	// ✅ Pageview przy zmianie trasy
	useEffect(() => {
		const handleRouteChange = (url) => {
			if (window.gtagInitialized) gaPageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => router.events.off("routeChangeComplete", handleRouteChange);
	}, [router.events]);

	// ✅ Scroll Depth – bez reflow i dopiero po 4s (TBT fix)
	useEffect(() => {
		if (!hasConsent || !window.gtagInitialized) return;

		let ticking = false;
		let lastSent = 0;
		const thresholds = [25, 50, 75, 100];
		let maxSends = 4;

		let doc = document.documentElement;
		let docHeight = Math.max(doc.scrollHeight, document.body.scrollHeight);

		const onResize = () => {
			docHeight = Math.max(doc.scrollHeight, document.body.scrollHeight);
		};

		const onScroll = () => {
			if (ticking) return;
			ticking = true;
			requestAnimationFrame(() => {
				const scrollY = window.scrollY + window.innerHeight;
				const percent = Math.round((scrollY / docHeight) * 100);
				for (const t of thresholds) {
					if (percent >= t && lastSent < t) {
						lastSent = t;
						if (maxSends > 0) {
							maxSends -= 1;
							gaEvent("scroll_depth", {
								page: window.location.pathname,
								percent: t,
							});
						}
					}
				}
				ticking = false;
			});
		};

		const boot = () => {
			if (document.visibilityState !== "visible") return;
			window.addEventListener("scroll", onScroll, { passive: true });
			window.addEventListener("resize", onResize, { passive: true });
		};

		const starter = setTimeout(boot, 4000);
		return () => {
			clearTimeout(starter);
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onResize);
		};
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
				<link rel="preconnect" href="https://www.google-analytics.com" />
				{/* ✅ preload fontów */}
				<link
					rel="preload"
					href="/fonts/poppins/Poppins-Regular.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/poppins/Poppins-Bold.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
			</Head>

			{/* ✅ Google Analytics */}
			{process.env.NODE_ENV === "production" && hasConsent && (
				<>
					<Script
						src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
						strategy="afterInteractive"
						onLoad={() => {
							setGAReady(); // ✅ dopiero teraz GA aktywne
						}}
					/>
					<Script id="gtag-init" strategy="afterInteractive">
						{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}', {
          anonymize_ip: true,
          page_path: window.location.pathname
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
