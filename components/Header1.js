import { useCallback, useEffect, useState } from "react";
import { Card, Container, Button, Row, Col } from "react-bootstrap";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useTheme } from "next-themes";
import { useSpring, animated } from "react-spring";
import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import Image from "next/image";
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
					<Card
						className="border-0 shadow-lg py-3  bg-transparent"
						id="your-div"
					>
						{" "}
						<Row className="justify-content-center align-items-center">
							<Col lg={7} className="d-flex">
								<Card.Body className="text-start">
									<h1 className="text-bold">Pixel Genie Webagentur </h1>
									<h5 className="text-bold">{t("h2")}</h5>
									<Button className="text-center my-2 btn-nav" href="#header2">
										Web Design Nettetal
									</Button>
								</Card.Body>
							</Col>
							<Col
								lg={2}
								className="d-flex justify-content-center align-items-center"
							>
								<Image src="/assets/ja.png" width={200} height={200} />
							</Col>
						</Row>
					</Card>
				</motion.div>
			</>
		</Container>
	);
};

export default Header1;
