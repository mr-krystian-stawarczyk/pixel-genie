import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

function Media4() {
	const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: false });
	const animateIn = {
		opacity: 1,
		transition: { duration: 1, ease: "easeInOut" },
	};
	const animateOut = {
		opacity: 0,
		transition: { duration: 1, ease: "easeInOut" },
	};
	const controls = useAnimation();

	useEffect(() => {
		if (inView) controls.start(animateIn);
		else controls.start(animateOut);
	}, [inView, controls]);

	return (
		<motion.div ref={ref} animate={controls}>
			<Container className="mt-5 pt-5">
				<Row className="justify-content-center align-items-center">
					<Col lg={5} className="mx-auto my-2">
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1 className="text-start fw-bold">
									Full-Service Webagentur Nettetal
								</h1>
								<Card.Text className="text-start">
									Ob Webdesign, SEO, Social-Media oder Online-Shops – Pixel
									Genie bietet alles aus einer Hand. Wir begleiten Sie von der
									Idee bis zum Launch und sorgen dafür, dass Ihre Website
									langfristig Ergebnisse liefert. Lokal, persönlich und
									effektiv.
								</Card.Text>
								<Button className="btn-nav mt-3" href="#contact">
									<span className="text-white">Jetzt Kontakt aufnehmen</span>
								</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={5} className="mx-auto my-2 text-center">
						<Image
							src="/assets/webentwicklung-nettetal-design-seo4.png"
							width={400}
							height={400}
							className="responsive-image"
							alt="Full Service Webagentur Nettetal"
							loading="lazy"
						/>
					</Col>
				</Row>
			</Container>
		</motion.div>
	);
}

export default Media4;
