import { useCallback, useEffect, useState } from "react";
import { Card, Container, Button } from "react-bootstrap";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useTheme } from "next-themes";
const ParticlesBackground = (toggleTheme) => {
	const { theme } = useTheme();
	const [particlesOptions, setParticlesOptions] = useState({
		background: {
			color: {
				value: "#ffffff",
			},
		},
		// rest of the options
	});
	const [particleBackgroundColor, setParticleBackgroundColor] =
		useState("#ffffff");

	const handleParticleBackgroundColorChange = useCallback(() => {
		const newBackgroundColor =
			particleBackgroundColor === "#ffffff" ? "#000000" : "#ffffff";
		setParticleBackgroundColor(newBackgroundColor);
	}, [particleBackgroundColor]);

	const particlesInit = useCallback(async (engine) => {
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(
		async (container) => {
			// update particles options when loaded
			setParticlesOptions((prevOptions) => ({
				...prevOptions,
				background: {
					...prevOptions.background,
					color: {
						value: theme === "light" ? "#ffffff" : "#000000",
					},
				},
			}));
		},
		[theme]
	);
	useEffect(() => {
		setParticlesOptions((prevOptions) => ({
			...prevOptions,
			background: {
				...prevOptions.background,
				color: {
					value: particleBackgroundColor,
				},
			},
		}));
	}, [particleBackgroundColor]);

	return (
		<Container fluid id="container">
			<Particles
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				options={{
					background: {
						color: {
							value: "#000000",
						},
					},
					fullScreen: {
						enable: false, // this is the line to change
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
								quantity: 4,
							},
							repulse: {
								distance: 200,
								duration: 0.4,
							},
						},
					},

					particles: {
						color: {
							value: "#fff",
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
							bounce: false,
						},
						number: {
							value: 160,
							density: {
								enable: true,
								value_area: 800,
							},
						},
						opacity: {
							value: 1,
							random: true,
						},
						shape: {
							type: "circle",
						},
						size: {
							value: 3,
							random: true,
						},
					},
					detectRetina: true,
				}}
			/>{" "}
			<Card id="your-div">
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
					<Button
						variant="primary"
						onClick={handleParticleBackgroundColorChange}
					>
						Change Theme
					</Button>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default ParticlesBackground;
