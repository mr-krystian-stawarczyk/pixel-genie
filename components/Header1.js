import { useCallback, useEffect, useState } from "react";
import { Card, Container, Button } from "react-bootstrap";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useTheme } from "next-themes";
import { useSpring, animated } from "react-spring";
import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
const Header1 = ({ toggleTheme }) => {
	const { theme, setTheme } = useTheme();

	const particlesInit = useCallback(async (engine) => {
		await loadFull(engine);
	}, []);
	const { t } = useTranslation();
	return (
		<Container fluid>
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
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 4 }}
				>
					<Card className="border-0 shadow-lg p-3 m-3" id="your-div">
						<Card.Body>
							<h1 className="text-dark text-bold">Pixel Genie Webagentur</h1>
							<h5 className="text-dark text-bold my-3">{t("h2")}</h5>{" "}
							<Button
								variant="primary"
								className=" text-center my-2"
								href="#header2"
							>
								{t("h3")}
							</Button>
						</Card.Body>
					</Card>
				</motion.div>
			</>
		</Container>
	);
};

export default Header1;
