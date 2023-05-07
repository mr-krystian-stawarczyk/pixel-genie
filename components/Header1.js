import { useCallback, useEffect, useState } from "react";
import { Card, Container, Button } from "react-bootstrap";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useTheme } from "next-themes";
import { useSpring, animated } from "react-spring";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.css";
const Header1 = ({ toggleTheme }) => {
	const { theme, setTheme } = useTheme();

	const particlesInit = useCallback(async (engine) => {
		await loadFull(engine);
	}, []);

	return (
		<Container fluid id="container">
			<Particles
				id="tsparticles"
				init={particlesInit}
				options={{
					background: {
						color: {
							value: "transparent",
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
							bounce: false,
						},
						number: {
							value: 60,
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
			<>
				{" "}
				<motion.div
					id="your-div"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 2.5 }}
				>
					<Card className="border-0 shadow-lg p-5 m-3">
						<Card.Body>
							<h1 className="text-dark text-bold">Pixel Webagentur</h1>
							<h5 className="text-dark text-bold">
								Pomagamy rozwijac maly biznes
							</h5>
						</Card.Body>
						<Button
							variant="primary "
							href="#section2"
							className="w-50 text-center"
						>
							Discover More
						</Button>
					</Card>
				</motion.div>
			</>
		</Container>
	);
};

export default Header1;
