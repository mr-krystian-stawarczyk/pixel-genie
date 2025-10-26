import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import AutoTranslate from "@/components/AutoTranslate";

function Web1() {
	const [ref, inView] = useInView({
		threshold: 0.5,
		triggerOnce: false,
	});

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
		controls.start(inView ? animateIn : animateOut);
	}, [inView, controls]);

	return (
		<motion.div ref={ref} animate={controls}>
			<Container className="mt-5 py-5">
				<Row className="justify-content-center text-center align-items-center">
					<Col lg={5} className="mx-auto">
						<Image
							src="/assets/webentwicklung-nettetal-webseiten1.png"
							width={400}
							height={400}
							className="responsive-image"
							alt="Pixel Genie Webdesign Nettetal"
							priority
						/>
					</Col>

					<Col lg={5} className="mx-auto">
						<Card className="border-0 bg-transparent">
							<Card.Body className="text-start">
								<h1>
									<AutoTranslate>
										Websites maßgeschneidert nach Ihren Bedürfnissen
									</AutoTranslate>
								</h1>

								<p>
									<AutoTranslate>
										Das Pixel Genie Team aus Nettetal bietet professionelle
										Webdesign Services, die individuell auf Ihre Bedürfnisse
										zugeschnitten sind. Vertrauen Sie uns, um eine einzigartige
										Website zu erstellen, die die Aufmerksamkeit Ihres Publikums
										auf sich zieht und Sie am Markt hervorhebt.
									</AutoTranslate>
								</p>

								<Button className="btn-nav" href="#contact">
									<span className="text-white">
										<AutoTranslate>Kontakt</AutoTranslate>
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

export default Web1;
