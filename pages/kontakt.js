import Contact1 from "@/components/Contact1";

import React from "react";
import Head from "next/head";
import Contact2 from "@/components/Contact2";
import Contact3 from "@/components/Contact3";

function contact() {
	return (
		<div className="mt-5 pt-5">
			<Head>
				<title>Kontakt - Nettetal Webdesign und Webentwicklung</title>
				<meta
					name="description"
					content="Pixel-Genie: Kontaktieren Sie uns für professionelles Webdesign und Online-Marketing-Dienstleistungen in Nettetal. Füllen Sie unser Kontaktformular aus oder rufen Sie uns an, um mehr zu erfahren."
				/>
				<meta name="robots" content="index, follow" />
			</Head>
			<Contact1 />
			<Contact3 />
			<Contact2 />
		</div>
	);
}

export default contact;
