import Seo1 from "@/components/Seo1";

import React, { lazy, Suspense } from "react";
import Head from "next/head";

import { Partytown } from "@builder.io/partytown/react";

const Seo2 = lazy(() => import("@/components/Seo2"));
const Seo3 = lazy(() => import("@/components/Seo3"));
const Seo4 = lazy(() => import("@/components/Seo4"));
const Seo5 = lazy(() => import("@/components/Seo5"));
const Seo6 = lazy(() => import("@/components/Seo6"));
const Seo7 = lazy(() => import("@/components/Seo7"));

function seo() {
	return (
		<div className="mt-5 pt-5">
			<Head>
				<title>SEO in 41334 Nettetal | Pixel Genie Webagentur</title>
				<meta
					name="description"
					content="Maximieren Sie Ihr SEO-Ergebnis mit unseren professionellen SEO-Services. Erzielen Sie eine höhere Position in den Suchergebnissen mit unseren effektiven Strategien und Tools. Kontaktieren Sie uns noch heute!"
				/>
				<meta name="robots" content="index, follow" />
				<Partytown debug={true} forward={["dataLayer.push"]} />
			</Head>
			<Seo1 />
			<Seo2 />
			<Seo3 />
			<Seo4 />
			<Seo5 />
			<Seo6 />

			<Seo7 />
		</div>
	);
}

export default seo;
