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
				fullScreen: { enable: false },
				background: { color: { value: "transparent" } },
				fpsLimit: 30, // niższe fps dla lepszej wydajności
				interactivity: {
					events: {
						onClick: { enable: true, mode: "push" },
						onHover: { enable: true, mode: "repulse" },
						resize: true,
					},
					modes: {
						push: { quantity: 2 }, // mniej cząstek
						repulse: { distance: 80, duration: 0.3 },
					},
				},
				particles: {
					color: { value: "#003681" },
					collisions: { enable: true },
					move: { enable: true, speed: 0.8, outModes: { default: "out" } },
					number: { value: 40, density: { enable: true, area: 800 } }, // mniej cząstek
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
				zIndex: -1,
			}}
		/>
	);
}

export default ParticlesComponent;
