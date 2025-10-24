import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";

function Header4() {
	const [ref, inView] = useInView({ threshold: 0.5 });
	const controls = useAnimation();

	useEffect(() => {
		controls.start({ opacity: inView ? 1 : 0, transition: { duration: 1 } });
	}, [inView, controls]);

	return (
		<motion.div ref={ref} animate={controls}>
			<Container className="my-5 py-5">
				<Row className="justify-content-center align-items-center g-5">
					<Col lg={5}>
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1 className="text-bold mb-3">
									Präsenz in den sozialen Medien aufbauen
								</h1>
								<p>
									Wir bieten Social Media Management Dienstleistungen an, um
									Ihnen bei der Steigerung der Markenbekanntheit und
									Kundenbindung zu helfen.
								</p>
								<p>
									Unser Team von Social Media Spezialisten entwickelt
									Strategien, die genau zu Ihrem Unternehmen passen.
								</p>
								<p>
									Wir unterstützen Sie bei Facebook, Instagram, LinkedIn und
									anderen Plattformen, um Ihre Marke authentisch zu
									präsentieren.
								</p>
								<div className="text-center mt-4">
									<Link href="/socialmediamarketing" className="m-1">
										<Button className="btn-nav px-4">
											SOCIAL MEDIA MARKETING
										</Button>
									</Link>
								</div>
							</Card.Body>
						</Card>
					</Col>

					<Col lg={5} className="text-center">
						<div className="image-container">
							<Image
								src="/assets/webentwicklung-nettetal-seo4.png"
								width={400}
								height={400}
								alt="Social Media Marketing"
								className="responsive-image"
								loading="lazy"
							/>
							<div className="arrow-animation4">
								<Image
									src="/assets/anim3.gif"
									width={80}
									height={80}
									alt="Animated Arrow"
									unoptimized
								/>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</motion.div>
	);
}

export default Header4;
