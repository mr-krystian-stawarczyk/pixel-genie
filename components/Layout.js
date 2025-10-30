// components/Layout.js
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileFloatingCTA from "./MobileFloatingCTA";
import CookieConsent from "./CookieConsent";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

const Layout = ({ children, pageProps }) => {
	const { theme, setTheme } = useTheme();
	const router = useRouter();

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	// ✅ Ukryj CTA na blogowych slugach
	const hideCTA = router.pathname.startsWith("/tips/");

	return (
		<div
			suppressHydrationWarning
			className={theme === "dark" ? "dark" : "light"}
		>
			<header>
				<Navbar {...pageProps} toggleTheme={toggleTheme} />
				<CookieConsent />
			</header>

			<main className="main-container">{children}</main>

			{/* ✅ Pokaż CTA tylko poza stronami artykułów */}
			{!hideCTA && <MobileFloatingCTA />}

			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Layout;
