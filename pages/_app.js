// /pages/_app.js
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { ThemeProvider } from "next-themes";
import { CookiesProvider, useCookies } from "react-cookie";
import Head from "next/head";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { initGA, gaPageview } from "@/lib/analytics";

function AppContent({ Component, pageProps }) {
	const router = useRouter();
	const [mounted, setMounted] = useState(false);

	// ⬅️ ważne: śledzimy obie zgody, ale GA odpalamy tylko przy marketingConsent
	const [cookies] = useCookies(["essentialConsent", "marketingConsent"]);

	useEffect(() => setMounted(true), []);

	// ✅ Inicjalizacja GA wyłącznie po zgodzie marketingowej i tylko w produkcji
	useEffect(() => {
		if (process.env.NODE_ENV !== "production") return;

		if (cookies.marketingConsent === "true") {
			initGA();
		}

		// Dodatkowa asekuracja: jeśli zgoda zostanie udzielona "w locie"
		const onAccept = () => initGA();
		window.addEventListener("cookieAccepted", onAccept);
		return () => window.removeEventListener("cookieAccepted", onAccept);
	}, [cookies.marketingConsent]);

	// ✅ Pageviews po zmianie trasy (gaPageview nic nie wyśle, jeśli GA nie jest zainicjalizowane)
	useEffect(() => {
		const handleRouteChange = (url) => gaPageview(url);
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

// ✅ CookiesProvider MUSI owijać całą aplikację (żeby useCookies działał wszędzie)
export default function MyApp(props) {
	return (
		<CookiesProvider>
			<AppContent {...props} />
		</CookiesProvider>
	);
}
