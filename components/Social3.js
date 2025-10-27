import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import AutoTranslate from "@/components/AutoTranslate";

function Social3() {
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
				transition: { duration: 1, ease: "easeOut" },
			});
		}
	}, [inView, controls]);

	return (
		<motion.div ref={ref} animate={controls} initial={{ opacity: 0, y: 60 }}>
			<Container className="mt-5 pt-5">
				<Row className="justify-content-center text-center align-items-center">
					{/* LEFT IMAGE */}
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

					{/* RIGHT CONTENT */}
					<Col lg={5} className="mx-auto my-2">
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1 className="text-start">
									<AutoTranslate>
										Zielgerichtete Social Ads für mehr Leads & Umsatz
									</AutoTranslate>
								</h1>

								<Card.Text className="text-start">
									<AutoTranslate>
										Wir schalten Werbeanzeigen, die verkaufen — nicht
										verbrennen. Mit datenbasiertem Targeting auf Facebook,
										Instagram, LinkedIn oder TikTok erreichen Sie genau die
										Menschen, die sich für Ihre Produkte interessieren. Wir
										testen, analysieren und optimieren stetig — für planbare
										Ergebnisse und echte Geschäftswachstum.
									</AutoTranslate>
								</Card.Text>

								<Button
									className="btn-nav"
									href="#social-media-nettetal-process"
								>
									<span className="text-white">
										<AutoTranslate>Unsere Strategie entdecken</AutoTranslate>
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

export default Social3;
