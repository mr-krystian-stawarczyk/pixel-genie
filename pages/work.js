import Work1 from "@/components/Work1";
import Work2 from "@/components/Work2";
import Work3 from "@/components/Work3";
import Work4 from "@/components/Work4";
import Work5 from "@/components/Work5";
import React from "react";
import Head from "next/head";
function work() {
	return (
		<div className="mt-5 pt-5">
			<Head>
				<title>Pixel Genie Nettetal Realisierung</title>
				<meta
					name="description"
					content="Wir sind Ihre Experten für professionelle Websites. Mit unserem breiten Spektrum an Dienstleistungen - von Webdesign über Webentwicklung bis hin zu SEO - unterstützen wir Sie bei der Gestaltung und Optimierung Ihrer Online-Präsenz. Wir bieten Ihnen maßgeschneiderte Lösungen, die auf Ihre individuellen Bedürfnisse zugeschnitten sind und Ihre Marke stärken."
				/>
			</Head>
			<Work1 />
			<Work2 />
			<Work3 />
			<Work4 />
			<Work5 />
		</div>
	);
}

export default work;
