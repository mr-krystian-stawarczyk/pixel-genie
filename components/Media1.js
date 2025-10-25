import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import MailButtonPremium from "./MailButtonPremium";

function Media1() {
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
			<Container>
				{/* Header Animation */}
				<Row className="justify-content-center text-center align-items-center ">
					<Col>
						<Image
							src="/assets/webdesign-header-welcome.gif"
							width={500}
							height={200}
							alt="Webdesign Agentur Nettetal – Pixel Genie Animation"
							unoptimized
							className="responsive-image rounded"
						/>
					</Col>
				</Row>

				{/* Main Section */}
				<Row className="justify-content-center text-center align-items-center">
					<Col lg={10}>
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1 className="fw-bold mb-3">
									Modernes Webdesign & SEO, das Kunden überzeugt
								</h1>
								<Card.Text className="text-start">
									<strong>Pixel Genie</strong> in Nettetal entwickelt Websites,
									die nicht nur optisch begeistern, sondern echte Ergebnisse
									liefern. Wir kombinieren kreatives{" "}
									<a
										href="/webdesign/"
										className="text-bold text-text-black bg-white rounded"
									>
										Webdesign
									</a>
									, technische{" "}
									<a
										href="/webentwicklung/"
										className="text-bold text-text-black bg-white rounded"
									>
										Webentwicklung
									</a>{" "}
									und{" "}
									<a
										href="/suchmaschinenoptimierung/"
										className="text-bold text-text-black bg-white rounded"
									>
										SEO
									</a>
									, damit Ihre Online-Präsenz langfristig sichtbar bleibt.
									<br />
									<br />
									Ob lokale Unternehmen in{" "}
									<a
										href="/seo/viersen/"
										className="text-bold text-text-black bg-white rounded"
									>
										Viersen
									</a>{" "}
									oder{" "}
									<a
										href="/webdesign-agentur/duesseldorf/"
										className="text-bold text-text-black bg-white rounded"
									>
										Düsseldorf
									</a>{" "}
									– unser Ansatz ist individuell, transparent und auf Wachstum
									ausgerichtet. Keine Baukastenseiten, keine leeren Versprechen
									– nur ehrliches, performantes Webdesign mit klarem Fokus auf
									Conversion und Nutzererlebnis.
									<br />
									<br />
									Mit modernen Technologien wie <strong>React</strong> &
									<strong> Next.js</strong> schaffen wir digitale Erlebnisse,
									die Vertrauen aufbauen und messbar mehr Anfragen generieren.
									Mehr Besucher, bessere Rankings, echte Resultate.
								</Card.Text>

								<MailButtonPremium />

								<p className="mt-3  small">
									Kein Risiko – wir beraten ehrlich, transparent und
									zielorientiert.
								</p>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</motion.div>
	);
}

export default Media1;
