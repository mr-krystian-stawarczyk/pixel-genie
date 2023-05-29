import Media1 from "@/components/Media1";

import React, { lazy, Suspense } from "react";

import Head from "next/head";

const Media2 = lazy(() => import("@/components/Media2"));
const Media3 = lazy(() => import("@/components/Media3"));
const Media4 = lazy(() => import("@/components/Media4"));
const Media5 = lazy(() => import("@/components/Media5"));
const Media6 = lazy(() => import("@/components/Media6"));
const Media7 = lazy(() => import("@/components/Media7"));
const Media8 = lazy(() => import("@/components/Media8"));

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
