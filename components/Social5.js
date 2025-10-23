import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

function Social5() {
	const [ref1, inView1] = useInView({ threshold: 0.5, triggerOnce: false });
	const [ref2, inView2] = useInView({ threshold: 0.5, triggerOnce: false });
	const [ref3, inView3] = useInView({ threshold: 0.5, triggerOnce: false });
	const [ref4, inView4] = useInView({ threshold: 0.5, triggerOnce: false });

	const controls1 = useAnimation();
	const controls2 = useAnimation();
	const controls3 = useAnimation();
	const controls4 = useAnimation();

	useEffect(() => {
		if (inView1) controls1.start({ opacity: 1, transition: { duration: 1 } });
		else controls1.start({ opacity: 0 });
	}, [inView1, controls1]);

	useEffect(() => {
		if (inView2) controls2.start({ opacity: 1, transition: { duration: 1 } });
		else controls2.start({ opacity: 0 });
	}, [inView2, controls2]);

	useEffect(() => {
		if (inView3) controls3.start({ opacity: 1, transition: { duration: 1 } });
		else controls3.start({ opacity: 0 });
	}, [inView3, controls3]);

	useEffect(() => {
		if (inView4) controls4.start({ opacity: 1, transition: { duration: 1 } });
		else controls4.start({ opacity: 0 });
	}, [inView4, controls4]);

	return (
		<Container className="my-5 py-5" id="social-media-nettetal-process">
			<Row className="justify-content-center text-center align-items-center">
				<Col lg={3} className="mx-auto my-2">
					<motion.div ref={ref1} animate={controls1} initial={{ opacity: 0 }}>
						<Card
							className="border-0 bg-transparent shadow-lg"
							style={{ height: "45rem" }}
						>
							<Card.Body>
								<h1>1</h1>
								<h2>Analyse & Strategieentwicklung</h2>
								<Card.Text>
									Im ersten Schritt analysieren wir Ihre aktuelle Präsenz,
									Zielgruppe und Mitbewerber. Auf dieser Grundlage entwickeln
									wir eine individuelle Social-Media-Strategie, die zu Ihrer
									Marke und Ihren Zielen passt.
								</Card.Text>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>

				<Col lg={3} className="mx-auto my-2">
					<motion.div ref={ref2} animate={controls2} initial={{ opacity: 0 }}>
						<Card
							className="border-0 bg-transparent shadow-lg"
							style={{ height: "45rem" }}
						>
							<Card.Body>
								<h1>2</h1>
								<h2>Content Design & Redaktionsplan</h2>
								<Card.Text>
									Wir gestalten hochwertige, markenkonforme Inhalte – Bilder,
									Videos und Texte – und erstellen einen durchdachten
									Redaktionsplan. So bleiben Sie mit Ihrer Community regelmäßig
									im Kontakt.
								</Card.Text>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>

				<Col lg={3} className="mx-auto my-2">
					<motion.div ref={ref3} animate={controls3} initial={{ opacity: 0 }}>
						<Card
							className="border-0 bg-transparent shadow-lg"
							style={{ height: "45rem" }}
						>
							<Card.Body>
								<h1>3</h1>
								<h2>Werbung & Kampagnenmanagement</h2>
								<Card.Text>
									Durch gezielte Anzeigenkampagnen auf Facebook, Instagram oder
									LinkedIn steigern wir Ihre Reichweite und generieren neue
									Leads. Wir optimieren Ihre Kampagnen laufend für bestmögliche
									Ergebnisse.
								</Card.Text>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>

				<Col lg={3} className="mx-auto my-2">
					<motion.div ref={ref4} animate={controls4} initial={{ opacity: 0 }}>
						<Card
							className="border-0 bg-transparent shadow-lg"
							style={{ height: "45rem" }}
						>
							<Card.Body>
								<h1>4</h1>
								<h2>Analyse, Reporting & Optimierung</h2>
								<Card.Text>
									Wir überwachen Ihre Performance, liefern detaillierte Reports
									und passen Strategien laufend an. So stellen wir sicher, dass
									Ihre Social-Media-Aktivitäten messbar zum Unternehmenserfolg
									beitragen.
								</Card.Text>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>
			</Row>
		</Container>
	);
}

export default Social5;
