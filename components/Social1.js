import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

function Social1() {
	const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: false });
	const controls = useAnimation();

	useEffect(() => {
		controls.start({
			opacity: inView ? 1 : 0,
			transition: { duration: 1, ease: "easeInOut" },
		});
	}, [inView, controls]);

	return (
		<motion.div ref={ref} animate={controls}>
			<Container className="mt-5 pt-5">
				<Row className="justify-content-center text-center align-items-center">
					<Col lg={5} className="mx-auto my-2">
						<Image
							src="/assets/webentwicklung-nettetal-socialmedia-webagentur1.png"
							width={400}
							height={400}
							className="responsive-image"
							alt="Social Media Marketing Agentur Nettetal"
							priority
						/>
					</Col>
					<Col lg={5} className="mx-auto my-2">
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1 className="text-start">
									Social Media Marketing für Unternehmen in Nettetal
								</h1>
								<Card.Text className="text-start">
									Steigern Sie Ihre Markenbekanntheit und Kundennähe mit
									professionellem Social Media Marketing. Pixel Genie entwickelt
									maßgeschneiderte Strategien für Facebook, Instagram, LinkedIn
									und TikTok – perfekt abgestimmt auf Ihre Zielgruppe und Ihr
									Budget.
								</Card.Text>
								<Button className="btn-nav" href="#social-media-preis">
									<span className="text-white">
										Mehr über unsere Leistungen
									</span>
								</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</motion.div>
	);
}

export default Social1;
