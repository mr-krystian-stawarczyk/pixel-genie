// /pages/_app.js
import "@/styles/globals.css";
import Script from "next/script";
import { CookiesProvider, useCookies } from "react-cookie";
import { ThemeProvider } from "next-themes";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { initGA, gaPageview, GA_ID } from "@/lib/analytics";

function AppCore({ Component, pageProps }) {
	const [cookies] = useCookies(["marketingConsent"]);
	const router = useRouter();

	useEffect(() => {
		if (cookies.marketingConsent === "true") {
			initGA();
			gaPageview(window.location.pathname);
		}
	}, [cookies.marketingConsent]);

	useEffect(() => {
		const track = (url) => {
			if (cookies.marketingConsent === "true") gaPageview(url);
		};
		router.events.on("routeChangeComplete", track);
		return () => router.events.off("routeChangeComplete", track);
	}, [router.events, cookies.marketingConsent]);

	return (
		<>
			{/* zawsze ładujemy skrypt → ale nic nie mierzy bez inicjalizacji */}
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
				strategy="afterInteractive"
			/>

			<ThemeProvider attribute="class">
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</>
	);
}

export default function MyApp(props) {
	return (
		<CookiesProvider>
			<AppCore {...props} />
		</CookiesProvider>
	);
}
