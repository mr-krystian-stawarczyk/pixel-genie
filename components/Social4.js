import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import AutoTranslate from "@/components/AutoTranslate";

function Social4() {
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
					{/* TEXT */}
					<Col lg={5} className="mx-auto my-2">
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1 className="text-start">
									<AutoTranslate>
										Reporting, Analyse & Wachstum – wir zeigen, was wirklich
										funktioniert
									</AutoTranslate>
								</h1>

								<Card.Text className="text-start">
									<AutoTranslate>
										Social Media darf kein Bauchgefühl sein. Mit monatlichen
										Reports, detaillierten KPIs und echten Insights wissen Sie
										genau, was Ihre Zielgruppe liebt — und was nicht. Wir
										optimieren laufend Ihre Strategie, damit jeder investierte
										Euro für Sie arbeitet: mehr Reichweite, mehr Engagement,
										mehr Neukunden. Transparent, messbar, planbar.
									</AutoTranslate>
								</Card.Text>

								<Button className="btn-nav" href="#contact">
									<span className="text-white">
										<AutoTranslate>Jetzt Kontakt aufnehmen</AutoTranslate>
									</span>
								</Button>
							</Card.Body>
						</Card>
					</Col>

					{/* IMAGE */}
					<Col lg={5} className="mx-auto my-2">
						<Image
							src="/assets/webentwicklung-nettetal-socialmedia-webagentur4.png"
							width={400}
							height={400}
							className="responsive-image"
							alt="Social Media Reporting und Analyse Nettetal"
							
						/>
					</Col>
				</Row>
			</Container>
		</motion.div>
	);
}

export default Social4;
