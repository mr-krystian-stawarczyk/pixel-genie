import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import AutoTranslate from "@/components/AutoTranslate";

function Social1() {
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
					{/* IMAGE */}
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

					{/* TEXT CONTENT */}
					<Col lg={5} className="mx-auto my-2">
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1 className="text-start">
									<AutoTranslate>
										Social Media Marketing für Unternehmen in Nettetal –
										sichtbar werden, Kunden gewinnen
									</AutoTranslate>
								</h1>

								<Card.Text className="text-start">
									<AutoTranslate>
										Ihre Kunden sind täglich auf Instagram, Facebook, TikTok &
										LinkedIn unterwegs – also sollte Ihre Marke es auch sein.
										Durch kreative Inhalte, gezielte Strategien und einer
										Kommunikation, die Menschen erreicht, machen wir Ihre Marke
										in den sozialen Medien bekannt. Mehr Reichweite. Mehr Leads.
										Mehr Umsatz. Ganz ohne Rätselraten.
									</AutoTranslate>
								</Card.Text>

								<Button className="btn-nav" href="#social-media-preis">
									<span className="text-white">
										<AutoTranslate>
											Jetzt Leistungen & Preise ansehen
										</AutoTranslate>
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
