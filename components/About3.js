"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { Container, Accordion, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

function About3() {
	const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: false });
	const controls = useAnimation();

	useEffect(() => {
		if (inView) {
			controls.start({
				opacity: 1,
				transition: { duration: 1.2, ease: "easeInOut" },
			});
		}
	}, [inView, controls]);

	const { t } = useTranslation();

	return (
		<motion.div ref={ref} animate={controls}>
			<Container
				fluid
				className="py-5  transition-colors duration-500"
				id="pixel-genie-history"
			>
				<Row className="justify-content-center text-center mb-5">
					<Col lg={8}>
						<Image
							src="/assets/webentwicklung-nettetal-fragen1.png"
							width={260}
							height={260}
							alt="Pixel Genie Webentwicklung Nettetal"
							className="my-3"
							priority
						/>
						<h2 className="fw-bold display-5 mb-3">
							Die am häufigsten gestellten Fragen an die Agentur
							Pixel&nbsp;Genie
						</h2>
						<p className="lead">
							In diesem Bereich finden Sie Antworten auf die häufigsten Fragen,
							die Kunden unserer{" "}
							<strong>Webdesign- und SEO Agentur aus Nettetal</strong> stellen.
							Hier erfahren Sie alles über unsere Arbeitsweise, Philosophie,
							Technologien und darüber, wie Pixel&nbsp;Genie in nur zwei Jahren
							zu einem anerkannten Namen in der <strong>Webentwicklung</strong>{" "}
							und <strong>Performance Optimierung</strong> wurde.
						</p>
					</Col>
				</Row>

				<Row className="justify-content-center">
					<Col lg={9}>
						<Accordion className="shadow-lg bg-dark text-light border-0 rounded-4">
							{/* 1 */}
							<Accordion.Item eventKey="0">
								<Accordion.Header>
									Was bedeutet das Wort Pixel?
								</Accordion.Header>
								<Accordion.Body>
									Das Wort <strong>Pixel</strong> steht symbolisch für das
									kleinste, aber bedeutendste Detail eines digitalen Projekts.
									Bei Pixel&nbsp;Genie glauben wir, dass jedes Pixel zählt – es
									steht für{" "}
									<em>Perfektion, Genauigkeit und visuelle Klarheit</em>. Unser
									Name spiegelt unsere Philosophie wider: Wir entwickeln
									Websites, bei denen jedes Pixel ein Teil einer größeren Vision
									ist – ein Zusammenspiel aus Design, Geschwindigkeit und
									Benutzerfreundlichkeit.
								</Accordion.Body>
							</Accordion.Item>

							{/* 2 */}
							<Accordion.Item eventKey="1">
								<Accordion.Header>
									Wie lange existiert Pixel Genie?
								</Accordion.Header>
								<Accordion.Body>
									Pixel&nbsp;Genie wurde im Jahr <strong>2023</strong> gegründet
									und ist seitdem zu einer der aufstrebenden{" "}
									<em>Webdesign- und SEO Agenturen in Nettetal</em> geworden.
									Obwohl wir erst seit <strong>zwei Jahren</strong> operativ
									tätig sind, vereint unser Team über ein Jahrzehnt an Erfahrung
									in{" "}
									<strong>
										Webentwicklung, Next.js, React und digitalem Marketing
									</strong>
									. Unsere Projekte zeichnen sich durch technologische
									Innovation, hervorragende Performance und ein tiefes
									Verständnis für Google-SEO aus.
								</Accordion.Body>
							</Accordion.Item>

							{/* 3 */}
							<Accordion.Item eventKey="2">
								<Accordion.Header>
									Mit wem arbeitet Pixel Genie zusammen?
								</Accordion.Header>
								<Accordion.Body>
									Wir betreuen eine vielfältige Kundschaft – von jungen
									Start-ups bis zu etablierten Unternehmen. Unsere Expertise im{" "}
									<strong>Webdesign</strong>, in der{" "}
									<strong>SEO Optimierung</strong> und im{" "}
									<strong>Performance Marketing</strong> ermöglicht es uns,
									individuelle Lösungen zu schaffen. Ob Online-Shop, Portfolio
									oder Unternehmenswebsite – jedes Projekt erhält bei uns eine
									maßgeschneiderte Strategie, die Design und Technik vereint.
								</Accordion.Body>
							</Accordion.Item>

							{/* 4 */}
							<Accordion.Item eventKey="3">
								<Accordion.Header>
									Arbeiten Sie nur lokal in Nettetal?
								</Accordion.Header>
								<Accordion.Body>
									Nein, wir arbeiten mit Kunden in ganz Deutschland, den
									Niederlanden und der Schweiz zusammen. Unsere Basis in{" "}
									<strong>Nettetal</strong> ist unser kreatives Zuhause, aber
									dank moderner Tools wie{" "}
									<em>Zoom, Slack und Cloud-Plattformen</em>
									können wir nahtlos mit internationalen Partnern kommunizieren.
									So kombinieren wir lokale Nähe mit globalem Know-how.
								</Accordion.Body>
							</Accordion.Item>

							{/* 5 */}
							<Accordion.Item eventKey="4">
								<Accordion.Header>
									Warum haben Sie mit dieser Arbeit begonnen?
								</Accordion.Header>
								<Accordion.Body>
									Unsere Motivation war es, eine Agentur zu schaffen, die{" "}
									<em>Design, Performance und SEO</em> in perfekter Balance
									vereint. Wir wollten Websites entwickeln, die nicht nur schön
									aussehen, sondern auch bei Google und Nutzern gleichermaßen
									überzeugen. So entstand Pixel&nbsp;Genie – eine Kombination
									aus technischer Präzision, kreativem Denken und digitaler
									Leidenschaft.
								</Accordion.Body>
							</Accordion.Item>

							{/* 6 */}
							<Accordion.Item eventKey="5">
								<Accordion.Header>
									Was macht Pixel Genie anders als andere Agenturen?
								</Accordion.Header>
								<Accordion.Body>
									Wir setzen nicht auf Masse, sondern auf Klasse. Jede Website
									wird von Grund auf mit modernen Technologien wie{" "}
									<strong>Next.js</strong> und <strong>React</strong>{" "}
									entwickelt, optimiert für <strong>Core Web Vitals</strong> und{" "}
									<em>SEO Performance</em>. Wir hören zu, analysieren Daten,
									testen, messen und verbessern kontinuierlich. Das Ergebnis:
									Websites, die schneller, sichtbarer und nachhaltiger sind.
								</Accordion.Body>
							</Accordion.Item>

							{/* 7 */}
							<Accordion.Item eventKey="6">
								<Accordion.Header>
									Wo kann man mehr über Pixel Genie erfahren?
								</Accordion.Header>
								<Accordion.Body>
									Folgen Sie uns auf{" "}
									<strong>Instagram, LinkedIn und Facebook</strong> – dort
									teilen wir regelmäßig Insights über Webentwicklung, SEO und
									digitales Branding. Weitere Informationen, Case Studies und
									Blogbeiträge finden Sie auf unserer offiziellen Seite{" "}
									<a
										href="https://pixel-genie.de"
										className="text-white fw-bold"
									>
										pixel-genie.de
									</a>
									. Für direkte Anfragen erreichen Sie uns unter{" "}
									<a
										href="mailto:pixelgenie.marketing@gmail.com"
										className="text-white fw-bold"
									>
										pixelgenie.marketing@gmail.com
									</a>
									.
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Col>
				</Row>

				<Row className="justify-content-center text-center mt-5">
					<Col lg={9}>
						<h4 className="fw-bold mt-4 mb-3">
							🚀 Fazit: Ihre Marke verdient digitale Exzellenz
						</h4>
						<p>
							Pixel&nbsp;Genie steht für <strong>Designqualität</strong>,{" "}
							<strong>technische Präzision</strong> und{" "}
							<strong>SEO-Strategie</strong>. Unsere Mission: Marken dabei zu
							unterstützen, durch digitales Design und Performance-Marketing
							sichtbar und erfolgreich zu werden. Mit jedem Projekt setzen wir
							neue Standards in <em>Webentwicklung</em> und{" "}
							<em>Online Marketing</em>.
						</p>
					</Col>
				</Row>
			</Container>
		</motion.div>
	);
}

export default About3;
