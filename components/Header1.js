import { useCallback, useEffect, useState } from "react";
import { Card, Container, Button, Row, Col } from "react-bootstrap";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useTheme } from "next-themes";
import { useSpring, animated } from "react-spring";
import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";
import Link from "next/link";
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
					{" "}
					<Container id="your-div">
						<Card className="border-0 shadow-lg py-3  bg-transparent">
							{" "}
							<Row className="justify-content-center align-items-center">
								<Col
									lg={3}
									className="d-flex justify-content-center align-items-center"
								>
									<Image
										src="/assets/webentwicklung-nettetal-seo1.png"
										id="ja"
										width={200}
										height={200}
										alt="webentwicklung-nettetal-seo1"
									/>
								</Col>{" "}
								<Col lg={9} className="d-flex border-lg ">
									<Card.Body className="text-start ">
										<h1 className="text-bold">{t("h1")}</h1>
										<h5 className="text-bold">{t("h2")}</h5>
										<Button as={Link} href="web" className="m-2 btn-lg btn-nav">
											{t("h3")}
										</Button>{" "}
										<Button as={Link} href="seo" className="m-2 btn-lg btn-nav">
											{t("h4")}
										</Button>{" "}
										<Button
											as={Link}
											href="socialmedia"
											className="m-2 btn-lg btn-nav"
										>
											{t("h5")}
										</Button>
									</Card.Body>
								</Col>
							</Row>
						</Card>{" "}
					</Container>
				</motion.div>
			</>
		</Container>
	);
};

export default Header1;
