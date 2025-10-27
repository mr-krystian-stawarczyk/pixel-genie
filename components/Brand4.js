import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import AutoTranslate from "@/components/AutoTranslate";

function Brand4() {
	const [ref, inView] = useInView({
		threshold: 0.3,
		triggerOnce: true,
	});

	const controls = useAnimation();

	useEffect(() => {
		if (inView) {
			controls.start({
				opacity: 1,
				transition: { duration: 1, ease: "easeInOut" },
			});
		}
	}, [inView, controls]);

	return (
		<motion.div ref={ref} animate={controls} initial={{ opacity: 0 }}>
			<Container className="mt-5 pt-5">
				<Row className="justify-content-center text-center align-items-center">
					<Col lg={5} className="mx-auto my-2">
						<Image
							src="/assets/webagentur-nettetal-branding-seo4.png"
							width={400}
							height={400}
							className="responsive-image"
							alt="branding-kommunikationsstrategie-nettetal"
							priority
						/>
					</Col>

					<Col lg={5} className="mx-auto my-2">
						<Card className="border-0 bg-transparent ">
							<Card.Body>
								<h1 className="text-start">
									<AutoTranslate>
										Markenkommunikation, die Vertrauen schafft
									</AutoTranslate>
								</h1>

								<Card.Text className="text-start">
									<AutoTranslate>
										Erfolgreiches Branding bedeutet, Ihre Botschaft genau dort
										zu senden, wo sich Ihre Zielgruppe bewegt – und zwar so,
										dass sie hängen bleibt. Wir entwickeln eine klare,
										authentische Kommunikationsstrategie, die exakt zu Ihrer
										Markenidentität passt und Ihre Vision perfekt vermittelt.
										Das Ergebnis: Steigende Interaktionen, ein wachsendes
										Vertrauen und eine sichtbar stärkere Marktposition – online
										und offline.
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
				</Row>
			</Container>
		</motion.div>
	);
}

export default Brand4;
