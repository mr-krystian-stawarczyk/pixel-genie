import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";

function Header2() {
	const [ref, inView] = useInView({ threshold: 0.5 });
	const controls = useAnimation();

	useEffect(() => {
		controls.start({ opacity: inView ? 1 : 0, transition: { duration: 1 } });
	}, [inView, controls]);

	return (
		<motion.div ref={ref} animate={controls} id="header2">
			<Container className="mt-5 pt-5">
				<Row className="justify-content-center align-items-center g-5">
					<Col lg={5} className="mx-auto text-center">
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1 className="text-bold mb-3">
									Wir kennen die Bedürfnisse Ihres Unternehmens
								</h1>
								<p>
									Wir bieten umfassende Dienstleistungen zur Erstellung moderner
									Websites für Ihr Unternehmen.
								</p>
								<p>
									Unsere Websites sind schnell, reaktionsschnell und funktional
									– sie helfen, Traffic und Konversionen messbar zu steigern.
								</p>
								<p>
									Wir begleiten Sie durch den gesamten Prozess der
									Webseitenerstellung, von der Idee bis zum Launch.
								</p>
								<div className="text-center mt-4">
									<Link href="/webseitenerstellen" className="m-1">
										<Button className="btn-nav">WEBSEITEN ERSTELLEN</Button>
									</Link>
								</div>
							</Card.Body>
						</Card>
					</Col>

					<Col lg={5} className="mx-auto position-relative text-center">
						<div className="image-container">
							<Image
								src="/assets/webentwicklung-nettetal-seo2.png"
								width={400}
								height={400}
								alt="webentwicklung-nettetal-seo2"
								className="responsive-image"
								loading="lazy"
							/>
							<div className="arrow-animation2">
								<Image
									src="/assets/anim0.webp"
									alt="Animated Arrow"
									width={50}
									height={50}
									loading="lazy"
								/>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</motion.div>
	);
}

export default Header2;
