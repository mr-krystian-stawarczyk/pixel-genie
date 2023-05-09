import Contact1 from "@/components/Contact1";
import Contact2 from "@/components/Contact2";
import ContactForm from "@/components/ContactForm";
import React from "react";
import Head from "next/head";
function contact() {
	return (
		<div className="mt-5 pt-5">
			<Head>
				<title>Pixel Genie Nettetal Kontakt</title>
				<meta
					name="description"
					content="Pixel-Genie: Kontaktieren Sie uns für professionelles Webdesign und Online-Marketing-Dienstleistungen in Nettetal. Füllen Sie unser Kontaktformular aus oder rufen Sie uns an, um mehr zu erfahren."
				/>
			</Head>
			<Contact1 />
			<ContactForm />
			<Contact2 />
		</div>
	);
}

export default contact;
