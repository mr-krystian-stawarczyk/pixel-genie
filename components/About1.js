import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import AutoTranslate from "@/components/AutoTranslate";

function About1() {
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
			<Container className="py-5">
				<Row className="justify-content-center align-items-center">
					{/* TEXT */}
					<Col
						xs={{ span: 12, order: 2 }}
						lg={{ span: 5, order: 1 }}
						className="mx-auto my-2"
					>
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1 className="text-bold">
									<AutoTranslate>
										Unser Geschäft basiert auf Beziehungen
									</AutoTranslate>
								</h1>

								<Card.Text>
									<AutoTranslate>
										Wir sind eine bodenständige, neugierige Crew aus Nettetal,
										die Webdesign & SEO nicht nur macht – sondern lebt. Wir
										hören zu, stellen die richtigen Fragen und liefern Lösungen,
										die sich auf Ihr Geschäft auswirken: mehr Sichtbarkeit,
										bessere Leads, spürbares Wachstum.
									</AutoTranslate>
								</Card.Text>

								<Card.Text>
									<AutoTranslate>
										Technisch arbeiten wir mit Next.js & React, optimieren für
										Core Web Vitals, PageSpeed und Conversion. Strategisch
										verbinden wir Branding, Content und Suchmaschinenoptimierung
										– damit Ihre Website nicht nur gut aussieht, sondern messbar
										performt.
									</AutoTranslate>
								</Card.Text>

								<Card.Text>
									<AutoTranslate>
										Ob Relaunch, Logo, Landingpages oder komplettes SEO: Wir
										entwickeln schlanke, schnelle Websites, die Vertrauen
										aufbauen und Ergebnisse liefern. Persönlich, transparent und
										auf Augenhöhe – von Nettetal aus für Kundinnen und Kunden in
										der Region und darüber hinaus.
									</AutoTranslate>
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>

					{/* IMAGES */}
					<Col
						xs={{ span: 12, order: 1 }}
						lg={{ span: 5, order: 2 }}
						className="mx-auto my-5 text-center"
					>
						<div className="image-container">
							<Image
								src="/assets/webentwicklung-nettetal-seo1.png"
								width={380}
								height={400}
								className="foreground-image responsive-image rounded"
								alt="Webagentur Nettetal – Pixel Genie Team & Webentwicklung"
								priority
							/>
							<Image
								src="/assets/mypictureframe.gif"
								width={400}
								height={515}
								className="background-image responsive-image shadow-lg rounded"
								alt="Pixel Genie – Über uns"
								priority
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</motion.div>
	);
}

export default About1;
