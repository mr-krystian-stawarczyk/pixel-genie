import Contact1 from "@/components/Contact1";

import React, { lazy, Suspense } from "react";
import Head from "next/head";

const Contact2 = lazy(() => import("@/components/Contact2"));
function contact() {
	return (
		<div className="mt-5 pt-5">
			<Head>
				<title>Kontakt in 41334 Nettetal | Pixel Genie Webagentur</title>
				<meta
					name="description"
					content="Pixel-Genie: Kontaktieren Sie uns für professionelles Webdesign und Online-Marketing-Dienstleistungen in Nettetal. Füllen Sie unser Kontaktformular aus oder rufen Sie uns an, um mehr zu erfahren."
				/>
				<meta name="robots" content="index, follow" />
			</Head>
			<Contact1 />

			<Contact2 />
		</div>
	);
}

export default contact;
