import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import AutoTranslate from "@/components/AutoTranslate";

function Seo5() {
	const [ref1, inView1] = useInView({ threshold: 0.5, triggerOnce: false });
	const [ref2, inView2] = useInView({ threshold: 0.5, triggerOnce: false });
	const [ref3, inView3] = useInView({ threshold: 0.5, triggerOnce: false });
	const [ref4, inView4] = useInView({ threshold: 0.5, triggerOnce: false });

	const controls1 = useAnimation();
	const controls2 = useAnimation();
	const controls3 = useAnimation();
	const controls4 = useAnimation();

	const animateIn = {
		opacity: 1,
		transition: { duration: 1, ease: "easeInOut" },
	};

	useEffect(() => {
		inView1 ? controls1.start(animateIn) : controls1.start({ opacity: 0 });
	}, [inView1, controls1]);

	useEffect(() => {
		if (inView2) {
			setTimeout(() => controls2.start(animateIn), 500);
		} else {
			controls2.start({ opacity: 0 });
		}
	}, [inView2, controls2]);

	useEffect(() => {
		if (inView3) {
			setTimeout(() => controls3.start(animateIn), 700);
		} else {
			controls3.start({ opacity: 0 });
		}
	}, [inView3, controls3]);

	useEffect(() => {
		if (inView4) {
			setTimeout(() => controls4.start(animateIn), 1000);
		} else {
			controls4.start({ opacity: 0 });
		}
	}, [inView4, controls4]);

	return (
		<Container className="my-5 py-5" id="process">
			<Row className="justify-content-center text-center align-items-center">
				{/* 1 */}
				<Col lg={3} className="mx-auto my-2">
					<motion.div ref={ref1} animate={controls1} initial={{ opacity: 0 }}>
						<Card
							className="border-0 bg-transparent shadow-lg"
							style={{ height: "45rem" }}
						>
							<Card.Body>
								<h1>1</h1>
								<h2>
									<AutoTranslate>
										SEO Audit und Wettbewerbsanalyse
									</AutoTranslate>
								</h2>
								<Card.Text>
									<AutoTranslate>
										Unser SEO Strategieprozess beginnt mit einem umfangreichen
										SEO Audit und einer Wettbewerbsanalyse für Ihre Pixel Genie
										Nettetal SEO Website. Wir analysieren technische Aspekte
										Ihrer Website wie Struktur, Metadaten und Ladezeiten, um
										Verbesserungsbereiche zu identifizieren.
									</AutoTranslate>
								</Card.Text>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>

				{/* 2 */}
				<Col lg={3} className="mx-auto my-2">
					<motion.div ref={ref2} animate={controls2} initial={{ opacity: 0 }}>
						<Card
							className="border-0 bg-transparent shadow-lg"
							style={{ height: "45rem" }}
						>
							<Card.Body>
								<h1>2</h1>
								<h2>
									<AutoTranslate>Strategieplanung und Keywords</AutoTranslate>
								</h2>
								<Card.Text>
									<AutoTranslate>
										Nach dem SEO Audit werden wir eine maßgeschneiderte SEO
										Strategie entwickeln. Wir erstellen eine Liste relevanter
										Keywords und optimieren Inhalte, damit sie
										benutzerfreundlich und SEO-optimiert sind.
									</AutoTranslate>
								</Card.Text>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>

				{/* 3 */}
				<Col lg={3} className="mx-auto my-2">
					<motion.div ref={ref3} animate={controls3} initial={{ opacity: 0 }}>
						<Card
							className="border-0 bg-transparent shadow-lg"
							style={{ height: "45rem" }}
						>
							<Card.Body>
								<h1>3</h1>
								<h2>
									<AutoTranslate>
										Technische Optimierung und Content Erstellung
									</AutoTranslate>
								</h2>
								<Card.Text>
									<AutoTranslate>
										Wir verbessern Navigation, Struktur, Meta-Tags und Inhalte,
										um sicherzustellen, dass Ihre Website technisch einwandfrei
										und für Suchmaschinen attraktiv ist.
									</AutoTranslate>
								</Card.Text>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>

				{/* 4 */}
				<Col lg={3} className="mx-auto my-2">
					<motion.div ref={ref4} animate={controls4} initial={{ opacity: 0 }}>
						<Card
							className="border-0 bg-transparent shadow-lg"
							style={{ height: "45rem" }}
						>
							<Card.Body>
								<h1>4</h1>
								<h2>
									<AutoTranslate>
										Überwachung, Analyse und Optimierung
									</AutoTranslate>
								</h2>
								<Card.Text>
									<AutoTranslate>
										Wir überwachen laufend Ihr Ranking, analysieren
										Performance-Daten und optimieren Ihre SEO-Strategie
										kontinuierlich für maximale Ergebnisse.
									</AutoTranslate>
								</Card.Text>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>
			</Row>
		</Container>
	);
}

export default Seo5;
