import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import CookieConsent from "./CookieConsent";

import Footer from "./Footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
	weight: ["400", "700"],
	subsets: ["latin"],
	display: "swap",
});

const Layout = ({ children, pageProps }) => {
	const [currentTheme, setCurrentTheme] = useState("light");

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			setCurrentTheme(savedTheme);
			document.body.classList.add(savedTheme);
		} else {
			setCurrentTheme("light");
			document.body.classList.add("light");
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = currentTheme === "light" ? "dark" : "light";
		setCurrentTheme(newTheme);
		localStorage.setItem("theme", newTheme);
		document.body.classList.add(newTheme);
		document.body.classList.remove(currentTheme);
	};

	return (
		<div className={poppins.className}>
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
