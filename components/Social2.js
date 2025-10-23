import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

function Social2() {
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
								<h1 className="text-start">
									Social Media Betreuung & Content Creation
								</h1>
								<Card.Text className="text-start">
									Wir übernehmen die vollständige Betreuung Ihrer
									Social-Media-Kanäle – von der Planung über das Design bis zur
									regelmäßigen Veröffentlichung von Inhalten. Durch gezieltes
									Community Management und kreative Kampagnen erhöhen wir Ihre
									Reichweite und Interaktion.
								</Card.Text>
								<Button
									className="btn-nav"
									href="#social-media-nettetal-fragen"
								>
									<span className="text-white">Jetzt Beratung anfragen</span>
								</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={5} className="mx-auto my-2">
						<Image
							src="/assets/webentwicklung-nettetal-socialmedia-webagentur2.png"
							width={400}
							height={400}
							className="responsive-image"
							alt="Social Media Agentur Nettetal Content Marketing"
							priority
						/>
					</Col>
				</Row>
			</Container>
		</motion.div>
	);
}

export default Social2;
