import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

function ParticlesComponent() {
	const particlesInit = useCallback(async (engine) => {
		await loadFull(engine);
	}, []);

	return (
		<Particles
			init={particlesInit}
			options={{
				fullScreen: { enable: false }, // używamy div jako kontenera
				background: { color: { value: "transparent" } },
				fpsLimit: 60,
				interactivity: {
					events: {
						onClick: { enable: true, mode: "push" },
						onHover: { enable: true, mode: "repulse" },
						resize: true,
					},
					modes: {
						push: { quantity: 4 },
						repulse: { distance: 100, duration: 0.3 },
					},
				},
				particles: {
					color: { value: "#003681" },
					collisions: { enable: true },
					move: { enable: true, speed: 1, outModes: { default: "out" } },
					number: { value: 60, density: { enable: true, area: 800 } },
					opacity: { value: 0.8, random: true },
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
				zIndex: -1, // żeby było pod tekstem
			}}
		/>
	);
}

export default ParticlesComponent;
