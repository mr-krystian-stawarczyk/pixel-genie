import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import AutoTranslate from "@/components/AutoTranslate";

function Web5() {
	const [ref1, inView1] = useInView({ threshold: 0.5, triggerOnce: false });
	const [ref2, inView2] = useInView({ threshold: 0.5, triggerOnce: false });
	const [ref3, inView3] = useInView({ threshold: 0.5, triggerOnce: false });
	const [ref4, inView4] = useInView({ threshold: 0.5, triggerOnce: false });

	const animateIn = {
		opacity: 1,
		transition: { duration: 1, ease: "easeInOut" },
	};

	const controls1 = useAnimation();
	const controls2 = useAnimation();
	const controls3 = useAnimation();
	const controls4 = useAnimation();

	useEffect(() => {
		if (inView1) controls1.start(animateIn);
	}, [inView1]);
	useEffect(() => {
		if (inView2) setTimeout(() => controls2.start(animateIn), 400);
	}, [inView2]);
	useEffect(() => {
		if (inView3) setTimeout(() => controls3.start(animateIn), 700);
	}, [inView3]);
	useEffect(() => {
		if (inView4) setTimeout(() => controls4.start(animateIn), 1000);
	}, [inView4]);

	return (
		<Container className="my-5 py-5">
			<Row className="text-center my-5">
				<h1>
					<AutoTranslate>Website Erstellungsprozess</AutoTranslate>
				</h1>
			</Row>

			<Row className="justify-content-center text-center align-items-center">
				<Col lg={3} className="mx-auto">
					<motion.div ref={ref1} animate={controls1} initial={{ opacity: 0 }}>
						<Card
							className="border-0 shadow-lg bg-transparent"
							style={{ height: "40rem" }}
						>
							<Card.Body>
								<h1>1</h1>
								<h2>
									<AutoTranslate>Analyse der Kundenanforderungen</AutoTranslate>
								</h2>
								<p>
									<AutoTranslate>
										Der erste Schritt besteht darin, die Kundenanforderungen
										gründlich zu analysieren und zu verstehen. Treffen Sie sich
										mit dem Kunden, um Ziele, Vision, Branche, Zielgruppe,
										Funktionen und andere Details zur Website zu besprechen.
										Sammeln Sie Informationen wie Designpräferenzen,
										Funktionalitäten, Inhalte und Konkurrenzwebsites. Dadurch
										kann das Projekt besser an die Erwartungen des Kunden
										angepasst werden.
									</AutoTranslate>
								</p>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>

				<Col lg={3} className="mx-auto">
					<motion.div ref={ref2} animate={controls2} initial={{ opacity: 0 }}>
						<Card
							className="border-0 bg-transparent shadow-lg"
							style={{ height: "40rem" }}
						>
							<Card.Body>
								<h1>2</h1>
								<h2>
									<AutoTranslate>Design und Entwicklung</AutoTranslate>
								</h2>
								<p>
									<AutoTranslate>
										Basierend auf den gesammelten Informationen beginnen Sie mit
										dem Design und der Entwicklung der Website. Entwickeln Sie
										ein grafisches Konzept unter Berücksichtigung des
										Kundenbrandings, der Ästhetik, Benutzerfreundlichkeit und
										Responsiveness. Gehen Sie zur Erstellung von Seitenvorlagen,
										interaktiven Elementen und Navigation über. In diesem
										Stadium können verschiedene Grafikdesign- und
										Entwicklungstools verwendet werden.
									</AutoTranslate>
								</p>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>

				<Col lg={3} className="mx-auto">
					<motion.div ref={ref3} animate={controls3} initial={{ opacity: 0 }}>
						<Card
							className="border-0 bg-transparent shadow-lg"
							style={{ height: "40rem" }}
						>
							<Card.Body>
								<h1>3</h1>
								<h2>
									<AutoTranslate>
										Inhalte erstellen und implementieren
									</AutoTranslate>
								</h2>
								<p>
									<AutoTranslate>
										Konzentrieren Sie sich dann auf die Erstellung und
										Implementierung des Website-Inhalts. Bereiten Sie Texte,
										Bilder, Multimedia und alle anderen Materialien vor, die auf
										der Website platziert werden sollen. Stellen Sie sicher,
										dass der Inhalt konsistent, lesbar und ansprechend ist.
										Beschäftigen Sie sich auch mit der SEO-Optimierung, indem
										Sie relevante Keywords und Metadaten hinzufügen.
									</AutoTranslate>
								</p>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>

				<Col lg={3} className="mx-auto">
					<motion.div ref={ref4} animate={controls4} initial={{ opacity: 0 }}>
						<Card
							className="border-0 bg-transparent shadow-lg"
							style={{ height: "40rem" }}
						>
							<Card.Body>
								<h1>4</h1>
								<h2>
									<AutoTranslate>
										Testen, Optimieren und Bereitstellen
									</AutoTranslate>
								</h2>
								<p>
									<AutoTranslate>
										Im letzten Schritt führen Sie Tests, Optimierungen und die
										Bereitstellung der Website durch. Überprüfen Sie die
										Funktionalität in allen Browsern und Geräten, korrigieren
										Sie Fehler, und stellen Sie sicher, dass die Website schnell
										lädt. Danach wird sie auf dem Server veröffentlicht — bereit
										für den Launch!
									</AutoTranslate>
								</p>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>
			</Row>
		</Container>
	);
}

export default Web5;
