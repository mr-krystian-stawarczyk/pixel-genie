import { useCallback } from "react";
import { Container } from "react-bootstrap";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import "../styles/globals.css";
function ParticlesComponent() {
	const particlesInit = useCallback(async (engine) => {
		await loadFull(engine);
	}, []);

	return (
		<div id="particles-container">
			<Particles
				init={particlesInit}
				options={{
					fullScreen: {
						enable: false,
					},
					background: {
						color: {
							value: "transparent",
						},
					},

					fpsLimit: 60,
					interactivity: {
						events: {
							onClick: {
								enable: true,
								mode: "push",
							},
							onHover: {
								enable: true,
								mode: "repulse",
							},
							resize: true,
						},
						modes: {
							push: {
								quantity: 10,
							},
							repulse: {
								distance: 100,
								duration: 0.3,
							},
						},
					},
					particles: {
						color: {
							value: "#003681",
						},
						collisions: {
							enable: true,
						},
						move: {
							directions: "none",
							enable: true,
							outModes: {
								default: "out",
							},
							random: true,
							speed: 1,
							straight: false,
							bounce: true,
						},
						number: {
							value: 60,
							density: {
								enable: true,
								value_area: 800,
							},
						},
						opacity: {
							value: 3,
							random: true,
						},
						shape: {
							type: "circle",
						},
						size: {
							value: 4,
							random: true,
						},
					},
					detectRetina: true,
				}}
			/>
		</div>
	);
}

export default ParticlesComponent;
