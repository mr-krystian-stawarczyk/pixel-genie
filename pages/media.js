import Media1 from "@/components/Media1";
import Media2 from "@/components/Media2";
import Media3 from "@/components/Media3";
import Media4 from "@/components/Media4";
import React from "react";
import Head from "next/head";
import Media5 from "@/components/Media5";
function media() {
	return (
		<div className="mt-5 pt-5">
			<Head>
				<title>Pixel Genie Nettetal Media</title>
				<meta
					name="description"
					content="Pixel-Genie bietet erstklassiges Media-Creating, einschließlich Grafikdesign, Videoproduktion und Fotobearbeitung. Kontaktieren Sie uns, um Ihre Ideen zum Leben zu erwecken."
				/>
			</Head>
			<Media1 />
			<Media2 />
			<Media3 />
			<Media4 />
			<Media5 />
		</div>
	);
}

export default media;
