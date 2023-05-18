import Social1 from "@/components/Social1";
import Social2 from "@/components/Social2";
import Social3 from "@/components/Social3";
import Social4 from "@/components/Social4";
import React from "react";
import Head from "next/head";
import Social5 from "@/components/Social5";
import Social7 from "@/components/Social7";
import ContactForm from "@/components/ContactForm";
import Social6 from "@/components/Social6";
import Social8 from "@/components/Social8";
function socialmedia() {
	return (
		<div className="mt-5 pt-5">
			<Head>
				<title>Social Media in 41334 Nettetal | Pixel Genie Webagentur</title>
				<meta
					name="description"
					content="Pixel-Genie bietet umfassende Social-Media-Marketing-Lösungen, um Ihre Präsenz auf Plattformen wie Facebook, Instagram und Twitter zu maximieren. Kontaktieren Sie uns, um loszulegen."
				/>
			</Head>

			<Social1 />
			<Social2 />
			<Social3 />
			<Social4 />
			<Social5 />
			<Social8 />
			<Social6 />
			<Social7 />
			<ContactForm />
		</div>
	);
}

export default socialmedia;
