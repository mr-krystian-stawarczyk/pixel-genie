// components/Layout.js
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CookieConsent from "./CookieConsent";
import localFont from "next/font/local";
import { useTheme } from "next-themes";

// 🔹 Lokalny font Poppins z display: swap (szybsze renderowanie tekstu)
const poppins = localFont({
	src: [
		{
			path: "../public/fonts/poppins/Poppins-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/fonts/poppins/Poppins-Bold.ttf",
			weight: "700",
			style: "normal",
		},
	],
	display: "swap",
});

const Layout = ({ children, pageProps }) => {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<div
			suppressHydrationWarning
			className={`${poppins.className} ${theme === "dark" ? "dark" : "light"}`}
		>
			<header>
				<Navbar {...pageProps} toggleTheme={toggleTheme} />
				<CookieConsent />
			</header>

			<main className="main-container">{children}</main>

			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Layout;
