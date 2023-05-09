import About1 from "@/components/About1";
import About2 from "@/components/About2";
import React from "react";
import Head from "next/head";
function about() {
	return (
		<div className="mt-5 pt-5">
			<Head>
				<title>Pixel Genie Nettetal Über uns</title>
				<meta
					name="description"
					content="Pixel-Genie: Erfahren Sie mehr über unser Team und unsere Erfahrung in Webdesign und Online-Marketing in Nettetal. Erfahren Sie mehr über unsere Philosophie und unsere Arbeitsweise."
				/>
			</Head>
			<About1 />
			<About2 />
		</div>
	);
}

export default about;
