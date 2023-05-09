import Social1 from "@/components/Social1";
import Social2 from "@/components/Social2";
import Social3 from "@/components/Social3";
import Social4 from "@/components/Social4";
import React from "react";
import Head from "next/head";
function socialmedia() {
	return (
		<div className="mt-5 pt-5">
			<Head>
				<title>Pixel Genie Nettetal Social Media</title>
				<meta
					name="description"
					content="Pixel-Genie bietet umfassende Social-Media-Marketing-Lösungen, um Ihre Präsenz auf Plattformen wie Facebook, Instagram und Twitter zu maximieren. Kontaktieren Sie uns, um loszulegen."
				/>
			</Head>

			<Social1 />
			<Social2 />
			<Social3 />
			<Social4 />
		</div>
	);
}

export default socialmedia;
