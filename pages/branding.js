import Head from "next/head";
import React, { lazy, Suspense } from "react";

import { Partytown } from "@builder.io/partytown/react";
import Brand1 from "@/components/Brand1";
import Brand2 from "@/components/Brand2";

const Brand3 = lazy(() => import("@/components/Brand3"));
const Brand4 = lazy(() => import("@/components/Brand4"));
const Brand5 = lazy(() => import("@/components/Brand5"));
const Brand6 = lazy(() => import("@/components/Brand6"));
const Brand7 = lazy(() => import("@/components/Brand7"));
const Brand8 = lazy(() => import("@/components/Brand8"));

function branding() {
	return (
		<div className="mt-5 pt-5">
			<Head>
				<title>Branding in 41334 Nettetal | Pixel Genie Webagentur</title>
				<meta
					name="description"
					content="Unser Corporate Design und Content-Marketing stärken Ihre Marke und erreichen Ihre Zielgruppe. Maßgeschneiderte Lösungen für ein einzigartiges Branding. Entdecken Sie unsere Expertise im Branding und Marketing."
				/>
				<meta name="robots" content="index, follow" />
				<Partytown debug={true} forward={["dataLayer.push"]} />
			</Head>
			<Brand1 />
			<Brand2 />
			<Brand3 />
			<Brand4 />
			<Brand8 />
			<Brand5 />
			<Brand6 />
			<Brand7 />
		</div>
	);
}

export default branding;
