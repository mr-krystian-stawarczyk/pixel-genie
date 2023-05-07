import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Header1 from "@/components/Header1";
import Header2 from "@/components/Header2";
import Header3 from "@/components/Header3";
import Header4 from "@/components/Header4";
import ReactGA from "react-ga";

export default function Home() {
	const { theme } = useTheme();
	return (
		<>
			<Header1 />
			<Header2 />
			<Header3 />
			<Header4 />
		</>
	);
}
