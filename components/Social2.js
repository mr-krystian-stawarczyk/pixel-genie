import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import AutoTranslate from "@/components/AutoTranslate";

function Social2() {
	const [ref, inView] = useInView({
		threshold: 0.3,
		triggerOnce: true,
	});

	const controls = useAnimation();

	useEffect(() => {
		if (inView) {
			controls.start({
				opacity: 1,
				y: 0,
				transition: { duration: 1, ease: "easeInOut" },
			});
		}
	}, [inView, controls]);

	return (
		<motion.div ref={ref} animate={controls} initial={{ opacity: 0, y: 60 }}>
			<Container className="mt-5 pt-5">
				<Row className="justify-content-center text-center align-items-center">
					{/* TEXT SIDE */}
					<Col lg={5} className="mx-auto my-2">
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1 className="text-start">
									<AutoTranslate>
										Social Media Betreuung & Content Creation – wir kümmern uns
										um alles ✅
									</AutoTranslate>
								</h1>

								<Card.Text className="text-start">
									<AutoTranslate>
										Regelmäßig posten, Kommentare beantworten, Trends verfolgen
										– Social Media braucht Zeit und Erfahrung. Wir entwickeln
										einen maßgeschneiderten Content-Plan, erstellen hochwertige
										Posts (Bild, Video & Text) und übernehmen das
										Community-Management. So wird aus Followern eine echte
										Fanbase – und aus Fans Kunden.
									</AutoTranslate>
								</Card.Text>

								<Button
									className="btn-nav"
									href="#social-media-nettetal-fragen"
								>
									<span className="text-white">
										<AutoTranslate>Jetzt Beratung sichern</AutoTranslate>
									</span>
								</Button>
							</Card.Body>
						</Card>
					</Col>

					{/* IMAGE */}
					<Col lg={5} className="mx-auto my-2">
						<Image
							src="/assets/webentwicklung-nettetal-socialmedia-webagentur2.png"
							width={400}
							height={400}
							className="responsive-image"
							alt="Social Media Agentur Nettetal Content Creation"
						/>
					</Col>
				</Row>
			</Container>
		</motion.div>
	);
}

export default Social2;
