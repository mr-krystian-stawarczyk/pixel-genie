import Blog1 from "@/components/Blog1";
import Blog2 from "@/components/Blog2";
import React from "react";
import Head from "next/head";
import Faq1 from "@/components/Faq1";

function webdesignblog() {
	return (
		<div className="mt-5 pt-5">
			<Head>
				<title>Tipps fur deine Geschaft Webseiten und Webdesign Blog </title>
				<meta
					name="description"
					content="Pixel-Genie: Unser Blog für Webdesign, Webseite Erstellen, Webentwicklung, Social Media Marketing und mehr. Lesen Sie unsere neuesten Artikel und erfahren Sie mehr über die neuesten Trends und Entwicklungen in der Online-Welt."
				/>
				<meta name="robots" content="index, follow" />
			</Head>
			<Blog1 />
			<Blog2 />
			<Faq1 />
		</div>
	);
}

export default webdesignblog;
