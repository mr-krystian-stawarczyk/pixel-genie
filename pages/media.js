import Media1 from "@/components/Media1";
import Media2 from "@/components/Media2";
import Media3 from "@/components/Media3";
import Media4 from "@/components/Media4";
import React from "react";
import Head from "next/head";
import Media5 from "@/components/Media5";
import Media6 from "@/components/Media6";
import Media7 from "@/components/Media7";
import Media8 from "@/components/Media8";

function media() {
	return (
		<div className="mt-5 pt-5">
			<Head>
				<title>Design in 41334 Nettetal | Pixel Genie Webagentur</title>
				<meta
					name="description"
					content="Pixel-Genie bietet erstklassiges Media-Creating, einschließlich Grafikdesign, Videoproduktion und Fotobearbeitung. Kontaktieren Sie uns, um Ihre Ideen zum Leben zu erwecken."
				/>
				<meta name="robots" content="index, follow" />
			</Head>
			<Media1 />
			<Media2 />
			<Media3 />
			<Media4 />
			<Media5 />
			<Media6 />
			<Media7 />
			<Media8 />
		</div>
	);
}

export default media;
