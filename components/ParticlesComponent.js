"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticlesComponent() {
	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => setInit(true));
	}, []);

	if (!init) return null;

	return (
		<Particles
			id="tsparticles"
			options={{
				fullScreen: { enable: false },
				background: { color: { value: "transparent" } },
				fpsLimit: 30,
				interactivity: {
					events: {
						onClick: { enable: true, mode: "push" },
						onHover: { enable: true, mode: "repulse" },
						resize: true,
					},
					modes: {
						push: { quantity: 2 },
						repulse: { distance: 80, duration: 0.3 },
					},
				},
				particles: {
					color: { value: "#003681" },
					number: { value: 30, density: { enable: true, area: 900 } },
					move: { enable: true, speed: 0.5 },
					opacity: { value: 0.9, random: true },
					shape: { type: "circle" },
					size: { value: 6, random: true },
				},
				detectRetina: true,
			}}
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				zIndex: 0,
			}}
		/>
	);
}

export default ParticlesComponent;
