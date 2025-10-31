"use client";
import React, { useEffect, useState, memo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticlesComponent() {
	const [init, setInit] = useState(false);

	useEffect(() => {
		let cancelled = false;
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			if (!cancelled) setInit(true);
		});
		return () => {
			cancelled = true;
		};
	}, []);

	if (!init) return null;

	// ✅ prosty warunek na rozdzielczość
	const isMobile =
		typeof window !== "undefined" ? window.innerWidth < 768 : false;

	// 🔧 lekkie różnice w wydajności / liczbie cząstek
	const particlesNumber = isMobile ? 12 : 26;
	const fps = isMobile ? 28 : 30;
	const moveSpeed = isMobile ? 0.3 : 0.5;

	return (
		<Particles
			id="tsparticles"
			options={{
				fullScreen: { enable: false },
				background: { color: { value: "transparent" } },
				fpsLimit: fps,
				interactivity: {
					events: {
						// ✅ Klik działa wszędzie
						onClick: { enable: true, mode: "push" },
						// ✅ Hover tylko na desktopie
						onHover: { enable: !isMobile, mode: "repulse" },
						resize: true,
					},
					modes: {
						push: { quantity: 2 },
						repulse: { distance: 80, duration: 0.3 },
					},
				},
				particles: {
					color: { value: "#003681" },
					number: {
						value: particlesNumber,
						density: { enable: true, area: 900 },
					},
					move: { enable: true, speed: moveSpeed },
					opacity: { value: 0.9, random: true },
					shape: { type: "circle" },
					size: { value: 6, random: true },
				},
				detectRetina: true,
			}}
			style={{
				position: "absolute",
				inset: 0,
				width: "100%",
				height: "100%",
				zIndex: 0,
				pointerEvents: "none", // ⚙️ nie blokuje interakcji z UI
			}}
		/>
	);
}

export default memo(ParticlesComponent);
