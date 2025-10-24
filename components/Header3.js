import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";

function Header3() {
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
								src="/assets/webentwicklung-nettetal-seo3.png"
								width={400}
								height={400}
								alt="SEO Optimierung Nettetal"
								className="responsive-image"
								loading="lazy"
							/>
							<div className="arrow-animation3">
								<Image
									src="/assets/anim8.webp"
									alt="Animated Arrow"
									width={50}
									height={50}
									loading="lazy"
								/>
							</div>
						</div>
					</Col>

					<Col lg={5}>
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1 className="text-bold mb-3">
									Steigern Sie Ihre Online Sichtbarkeit
								</h1>
								<p>
									Wir bieten professionelle SEO Dienstleistungen an, um Ihre
									Website in den Google Suchergebnissen besser sichtbar zu
									machen.
								</p>
								<p>
									Mit unserer SEO Erfahrung helfen wir Ihnen, organischen
									Traffic zu steigern und neue Kunden zu gewinnen.
								</p>
								<p>
									Unsere bewährten Strategien sorgen dafür, dass Ihre Website
									stabil auf den ersten Seiten erscheint.
								</p>
								<div className="text-center mt-4">
									<Link href="/suchmaschinenoptimierung" className="m-1">
										<Button className="btn-nav px-4">SEO OPTIMIERUNG</Button>
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

export default Header3;
