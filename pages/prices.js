import Prices1 from "@/components/Prices1";
import Prices2 from "@/components/Prices2";
import Prices3 from "@/components/Prices3";
import React from "react";
import Head from "next/head";
function prices() {
	return (
		<div className="mt-5 pt-5">
			<Head>
				<title>Pixel Genie Nettetal Preis</title>
				<meta
					name="description"
					content="Pixel-Genie: Preisgünstige Webdesign-Lösungen in Nettetal. Erfahren Sie mehr über unsere erschwinglichen Preise für professionelles Webdesign und Online-Marketing-Dienstleistungen."
				/>
			</Head>
			<Prices1 />
			<Prices2 />
			<Prices3 />
		</div>
	);
}

export default prices;
