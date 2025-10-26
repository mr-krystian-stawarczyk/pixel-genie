import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import AutoTranslate from "@/components/AutoTranslate";

function Seo4() {
	const [ref, inView] = useInView({
		threshold: 0.5,
		triggerOnce: false,
	});

	const controls = useAnimation();
	useEffect(() => {
		controls.start({
			opacity: inView ? 1 : 0,
			transition: { duration: 1, ease: "easeInOut" },
		});
	}, [inView, controls]);

	return (
		<motion.div ref={ref} animate={controls}>
			<Container className="mt-5 pt-5 ">
				<Row className="justify-content-center text-center align-items-center">
					<Col lg={5} className="mx-auto my-2">
						<Image
							src="/assets/SEO-webentwicklung-nettetal-4.png"
							width={500}
							height={500}
							className="responsive-image"
							alt="SEO-webentwicklung-nettetal-4"
							priority
						/>
					</Col>

					<Col lg={5} className="mx-auto my-2">
						<Card className="border-0 bg-transparent ">
							<Card.Body>
								<h1 className="text-start">
									<AutoTranslate>
										Linkbuilding und Optimierung für ein stärkeres SEO
									</AutoTranslate>
								</h1>

								<Card.Text className="text-start">
									<AutoTranslate>
										Pixel Genie Nettetal bietet Linkbuilding und technische
										Optimierungsdienste an, die für eine effektive SEO Strategie
										entscheidend sind. Unser Team unterstützt Sie beim Aufbau
										hochwertiger Backlinks für Ihre Website und sorgt für eine
										optimale technische Konfiguration, um bessere Suchergebnisse
										zu erzielen.
									</AutoTranslate>
								</Card.Text>

								<Button className="btn-nav" href="#contact">
									<span className="text-white">
										<AutoTranslate>PIXEL GENIE KONTAKT</AutoTranslate>
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

export default Seo4;
