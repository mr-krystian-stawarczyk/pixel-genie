import About1 from "@/components/About1";
import About2 from "@/components/About2";
import React from "react";
import Head from "next/head";
import About3 from "@/components/About3";
import About4 from "@/components/About4";

function about() {
	return (
		<div className="mt-5 pt-5">
			<Head>
				<title>Über uns in 41334 Nettetal | Pixel Genie Webagentur</title>
				<meta
					name="description"
					content="Pixel-Genie: Erfahren Sie mehr über unser Team und unsere Erfahrung in Webdesign und Online-Marketing in Nettetal. Erfahren Sie mehr über unsere Philosophie und unsere Arbeitsweise."
				/>
				<meta name="robots" content="index, follow" />
			</Head>
			<About1 />
			<About4 />
			<About2 />
			<About3 />
		</div>
	);
}

export default about;
