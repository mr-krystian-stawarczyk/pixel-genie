import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

function Social3() {
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
							src="/assets/webentwicklung-nettetal-socialmedia-webagentur3.png"
							width={400}
							height={400}
							className="responsive-image"
							alt="Social Media Ads Kampagnen Nettetal"
							priority
						/>
					</Col>
					<Col lg={5} className="mx-auto my-2">
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1 className="text-start">
									Zielgerichtete Werbekampagnen für mehr Erfolg
								</h1>
								<Card.Text className="text-start">
									Mit präzisem Targeting und datenbasierten Werbeanzeigen auf
									Facebook, Instagram und Co. erreichen Sie genau die Kunden,
									die sich für Ihre Produkte interessieren. Wir analysieren,
									optimieren und skalieren Ihre Kampagnen für maximale
									Ergebnisse.
								</Card.Text>
								<Button
									className="btn-nav"
									href="#social-media-nettetal-process"
								>
									<span className="text-white">Unsere Strategie entdecken</span>
								</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</motion.div>
	);
}

export default Social3;
