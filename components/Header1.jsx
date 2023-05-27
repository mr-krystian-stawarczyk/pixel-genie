import { useCallback, useEffect, useRef } from "react";
import { Card, Container, Button, Row, Col } from "react-bootstrap";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";

const Header1 = () => {
	const particlesInit = useCallback(async (engine) => {
		await loadFull(engine);
	}, []);
	const { t } = useTranslation();

	return (
		<Container fluid>
			<Particles
				style={{ zIndex: "-10" }}
				id="tsparticles"
				init={particlesInit}
				options={{
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
								distance: 300,
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
							value: 30,
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
							type: "square",
						},
						size: {
							value: 4,
							random: true,
						},
					},
					detectRetina: true,
				}}
			/>
			<>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 4 }}
				>
					<Container id="your-div">
						<Card className="border-0 shadow-lg py-3  bg-transparent">
							<Row className="justify-content-center align-items-center">
								<Col lg={9} xl={9} md={12} className="d-flex border-lg ">
									<Card.Body className="text-start ">
										<h1 className="text-bold">{t("h1")}</h1>
										<h5 className="text-bold">{t("h2")}</h5>
										<Button as={Link} href="web" className="m-2 btn-lg btn-nav">
											{t("h3")}
										</Button>
										<Button as={Link} href="seo" className="m-2 btn-lg btn-nav">
											{t("h4")}
										</Button>
										<Button
											as={Link}
											href="socialmedia"
											className="m-2 btn-lg btn-nav"
										>
											{t("h5")}
										</Button>
									</Card.Body>
								</Col>
								<Col
									sm={6}
									md={6}
									lg={3}
									xl={3}
									className="d-flex justify-content-center align-items-center"
								>
									<Image
										src="/assets/webentwicklung-nettetal-seo6.png"
										alt="webentwicklung-nettetal-seo1"
										width={300}
										height={300}
										id="ja"
										priority
									/>
								</Col>
							</Row>
						</Card>
					</Container>
				</motion.div>
			</>
		</Container>
	);
};

export default Header1;
