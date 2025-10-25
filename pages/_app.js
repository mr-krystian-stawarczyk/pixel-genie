import "@/styles/globals.css";
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { initGA, gaPageview, GA_ID } from "@/lib/analytics";
import Layout from "@/components/Layout";
import { ThemeProvider } from "next-themes";
import CookieConsent from "@/components/CookieConsent";
import { getCookie } from "cookies-next";

export default function MyApp({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		const consent = getCookie("marketingConsent");
		if (consent === "true") {
			initGA();
			gaPageview(window.location.pathname);
		}
	}, []);

	useEffect(() => {
		const handleRouteChange = (url) => {
			const consent = getCookie("marketingConsent");
			if (consent === "true") gaPageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => router.events.off("routeChangeComplete", handleRouteChange);
	}, [router.events]);

	return (
		<>
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
				strategy="afterInteractive"
			/>

			<ThemeProvider>
				<Layout>
					<Component {...pageProps} />
					<CookieConsent />
				</Layout>
			</ThemeProvider>
		</>
	);
}
