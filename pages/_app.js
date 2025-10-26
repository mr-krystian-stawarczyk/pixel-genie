import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { initGA, gaPageview, GA_ID, gaEvent } from "@/lib/analytics";
import { getCookie } from "cookies-next";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";

function AppContent({ Component, pageProps }) {
	const router = useRouter();
	const [mounted, setMounted] = useState(false);
	const [hasConsent, setHasConsent] = useState(false);

	useEffect(() => setMounted(true), []);

	// ✅ Consent detect + event listener
	useEffect(() => {
		const check = () => setHasConsent(getCookie("marketingConsent") === "true");
		check();
		const onAccept = () => setHasConsent(true);
		window.addEventListener("cookieAccepted", onAccept);
		return () => window.removeEventListener("cookieAccepted", onAccept);
	}, []);

	// ✅ GA init when allowed
	useEffect(() => {
		if (process.env.NODE_ENV !== "production") return;
		if (!hasConsent) return;

		initGA();
		gaPageview(window.location.pathname);
	}, [hasConsent]);

	// ✅ Track pageviews on navigation
	useEffect(() => {
		const handleRouteChange = (url) => {
			if (window.gtagInitialized) gaPageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => router.events.off("routeChangeComplete", handleRouteChange);
	}, [router.events]);

	// ✅ Scroll depth tracking (NOW CORRECTLY INSIDE)
	useEffect(() => {
		if (!window.gtagInitialized) return;

		let lastSent = 0;
		const thresholds = [25, 50, 75, 100];

		const onScroll = () => {
			const scrollY = window.scrollY + window.innerHeight;
			const height = document.body.offsetHeight;
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

		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, [hasConsent]); // ✅ zależy od zgody, nie odpali wcześniej

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

			{/* ✅ Load GA script only when allowed */}
			{process.env.NODE_ENV === "production" && hasConsent && (
				<>
					<Script
						src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
						strategy="afterInteractive"
					/>
					<Script id="gtag-stub" strategy="afterInteractive">
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
				<I18nextProvider i18n={i18n}>
					<Layout pageProps={pageProps}>
						<Component {...pageProps} key={router.asPath} />
					</Layout>{" "}
				</I18nextProvider>
			</ThemeProvider>
		</>
	);
}

export default function MyApp(props) {
	return <AppContent {...props} />;
}
