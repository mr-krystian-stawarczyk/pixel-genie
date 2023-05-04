import Header1 from "@/components/Header1";
import Header2 from "@/components/Header2";
import Header3 from "@/components/Header3";
import ParticlesBackground from "@/components/ParticlesBacground";
import ParticlesBacground from "@/components/ParticlesBacground";

import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function Home() {
	const { theme } = useTheme();
	return (
		<>
			<ParticlesBackground />
			<Header1 />
		</>
	);
}
