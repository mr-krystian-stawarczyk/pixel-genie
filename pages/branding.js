import Head from "next/head";
import React from "react";

import Brand1 from "@/components/Brand1";
import Brand2 from "@/components/Brand2";
import Brand3 from "@/components/Brand3";
import Brand4 from "@/components/Brand4";
import Brand5 from "@/components/Brand5";
import Brand6 from "@/components/Brand6";
import Brand7 from "@/components/Brand7";
import Brand8 from "@/components/Brand8";

function branding() {
	return (
		<div className="mt-5 pt-5">
			<Head>
				<title>Branding in 41334 Nettetal | Pixel Genie Webagentur</title>
				<meta
					name="description"
					content="Unser Corporate Design und Content-Marketing stärken Ihre Marke und erreichen Ihre Zielgruppe. Maßgeschneiderte Lösungen für ein einzigartiges Branding. Entdecken Sie unsere Expertise im Branding und Marketing."
				/>
				<meta name="robots" content="index, follow" />
			</Head>
			<Brand1 />
			<Brand2 />
			<Brand3 />
			<Brand4 />
			<Brand8 />
			<Brand5 />
			<Brand6 />
			<Brand7 />
		</div>
	);
}

export default branding;
