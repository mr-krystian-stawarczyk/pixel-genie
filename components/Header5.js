import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";

function Header5() {
	const [ref, inView] = useInView({ threshold: 0.5 });
	const controls = useAnimation();

	useEffect(() => {
		controls.start({ opacity: inView ? 1 : 0, transition: { duration: 1 } });
	}, [inView, controls]);

	return (
		<motion.div ref={ref} animate={controls}>
			<Container className="my-5 py-5">
				<Row className="justify-content-center align-items-center g-5">
					<Col lg={5} className="text-center">
						<div className="image-container">
							<Image
								src="/assets/webentwicklung-nettetal-seo5.png"
								width={400}
								height={400}
								alt="Webdesign Tipps Pixel-Genie"
								className="responsive-image"
								loading="lazy"
							/>
							<div className="arrow-animation5">
								<Image
									src="/assets/anim4.gif"
									width={50}
									height={50}
									alt="Animated Arrow"
									unoptimized
								/>
							</div>
						</div>
					</Col>

					<Col lg={5}>
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1 className="text-bold mb-3">
									Profitieren Sie von unseren Tipps
								</h1>
								<p>
									Erzielen Sie mehr Online Erfolg mit unseren Tipps für kleine
									Unternehmen. Erfahren Sie, wie Sie Ihre Sichtbarkeit erhöhen
									und neue Kunden gewinnen können.
								</p>
								<p>
									Unsere Empfehlungen helfen Ihnen, die richtigen Tools zu
									wählen und eine effektive Marketingstrategie aufzubauen.
								</p>
								<p>
									In unserem Blog zeigen wir, wie Sie kostenlose Tools optimal
									nutzen, um Ihre Marke im Internet bekannter zu machen.
								</p>
								<div className="text-center mt-4">
									<Link href="/webdesignblog" className="m-1">
										<Button className="btn-nav px-4">WEBDESIGN TIPPS</Button>
									</Link>
								</div>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</motion.div>
	);
}

export default Header5;
