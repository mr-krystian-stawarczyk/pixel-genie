import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { initGA, gaPageview, GA_ID, gaEvent } from "@/lib/analytics";
import { getCookie } from "cookies-next";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import localFont from "next/font/local";

const poppins = localFont({
	src: [
		{ path: "../public/fonts/poppins/Poppins-Regular.ttf", weight: "400" },
		{ path: "../public/fonts/poppins/Poppins-Bold.ttf", weight: "700" },
	],
	display: "swap",
	variable: "--font-poppins",
});

function AppContent({ Component, pageProps }) {
	const router = useRouter();
	const [mounted, setMounted] = useState(false);
	const [hasConsent, setHasConsent] = useState(false);

	useEffect(() => setMounted(true), []);

	useEffect(() => {
		const check = () => setHasConsent(getCookie("marketingConsent") === "true");
		check();
		const onAccept = () => setHasConsent(true);
		window.addEventListener("cookieAccepted", onAccept);
		return () => window.removeEventListener("cookieAccepted", onAccept);
	}, []);

	useEffect(() => {
		if (process.env.NODE_ENV !== "production") return;
		if (!hasConsent) return;
		initGA();
		gaPageview(window.location.pathname);
		window.gtagInitialized = true;
	}, [hasConsent]);

	useEffect(() => {
		const handleRouteChange = (url) => {
			if (window.gtagInitialized) gaPageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => router.events.off("routeChangeComplete", handleRouteChange);
	}, [router.events]);

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
		return () =>
			window.removeEventListener("scroll", onScroll, { passive: true });
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
