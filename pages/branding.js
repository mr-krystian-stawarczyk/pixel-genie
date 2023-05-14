import Brand1 from "@/components/Brand1";
import Brand2 from "@/components/Brand2";
import Brand3 from "@/components/Brand3";
import Brand4 from "@/components/Brand4";
import React from "react";
import Head from "next/head";
import Brand5 from "@/components/Brand5";
import Brand6 from "@/components/Brand6";
import Brand7 from "@/components/Brand7";
import ContactForm from "@/components/ContactForm";
import Brand8 from "@/components/Brand8";
function branding() {
	return (
		<div className="mt-5 pt-5">
			<Head>
				<title>Pixel Genie Nettetal Branding</title>
				<meta
					name="description"
					content="Mit unserem Corporate Design und Content-Marketing helfen wir Ihnen, Ihre Marke zu stärken und Ihre Zielgruppe zu erreichen. Wir bieten Ihnen maßgeschneiderte Lösungen für ein einzigartiges und professionelles Branding, das sich von der Konkurrenz abhebt. Entdecken Sie jetzt unsere Expertise im Bereich Branding und Marketing."
				/>
			</Head>
			<Brand1 />
			<Brand2 />
			<Brand3 />
			<Brand4 />
			<Brand8 />
			<Brand5 />
			<Brand6 />
			<Brand7 />
			<ContactForm />
		</div>
	);
}

export default branding;
