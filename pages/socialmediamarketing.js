import Social1 from "@/components/Social1";
import Social2 from "@/components/Social2";
import Social3 from "@/components/Social3";
import Social4 from "@/components/Social4";
import React from "react";
import Head from "next/head";
import Social5 from "@/components/Social5";
import Social7 from "@/components/Social7";

import Social6 from "@/components/Social6";

function socialmediamarketing() {
	return (
		<div className="mt-5 pt-5">
			<Head>
				<title>Social Media Marketing Social Media Agentur fur Marketing</title>
				<meta
					name="description"
					content="Pixel-Genie bietet umfassende Social Media Marketing Lösungen, um Ihre Präsenz auf Plattformen wie Facebook, Instagram und Twitter zu maximieren. Kontaktieren Sie uns, um loszulegen."
				/>
				<meta name="robots" content="index, follow" />
			</Head>

			<Social1 />
			<Social2 />
			<Social3 />
			<Social4 />
			<Social5 />

			<Social6 />
			<Social7 />
		</div>
	);
}

export default socialmediamarketing;
