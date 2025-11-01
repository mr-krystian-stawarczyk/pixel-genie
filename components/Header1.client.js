"use client";

import dynamic from "next/dynamic";

// ✅ Zmieniony placeholder: całkowicie transparentny, zajmuje pełne 100vh,
// bez czarnego tła, więc Particles wystartują od samej góry ekranu.
const Header1 = dynamic(() => import("./Header1"), {
	ssr: false,
	loading: () => (
		<div
			style={{
				height: "100vh",
				width: "100%",
				background: "transparent",
				margin: 0,
				padding: 0,
			}}
		/>
	),
});

export default Header1;
