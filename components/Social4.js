import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

function Social4() {
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
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1 className="text-start">Reporting, Analyse & Wachstum</h1>
								<Card.Text className="text-start">
									Wir liefern Ihnen monatliche Auswertungen, Insights und klare
									Empfehlungen. So behalten Sie Ihre Performance stets im Blick.
									Dank transparenter KPIs und kontinuierlicher Optimierung
									wachsen Ihre Social Media Kanäle nachhaltig.
								</Card.Text>
								<Button className="btn-nav" href="#contact">
									<span className="text-white">Jetzt Kontakt aufnehmen</span>
								</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={5} className="mx-auto my-2">
						<Image
							src="/assets/webentwicklung-nettetal-socialmedia-webagentur4.png"
							width={400}
							height={400}
							className="responsive-image"
							alt="Social Media Analyse Agentur Nettetal"
							priority
						/>
					</Col>
				</Row>
			</Container>
		</motion.div>
	);
}

export default Social4;
