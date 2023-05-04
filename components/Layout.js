import React from "react";
import Head from "next/head";
import Navigation from "./Navigation";
import NavbarComp from "./Navbar";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

import { Poppins } from "next/font/google";

const poppins = Poppins({
	weight: ["400", "700"],
	subsets: ["latin"],
});

const Layout = ({ children, pageProps }) => {
	return (
		<div className="layout">
			<div className={poppins.className}>
				<Head>
					<title>Pixel-Genie</title>
				</Head>
				<header>
					<NavbarComp {...pageProps} />
				</header>
				<main className="main-container">{children}</main>
				<footer>
					<Footer />
				</footer>
			</div>
		</div>
	);
};
export default Layout;
