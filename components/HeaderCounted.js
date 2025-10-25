import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import CountUp from "react-countup";
import { useSpring, animated } from "react-spring";

function HeaderCounted() {
	const sectionRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);
	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setIsVisible(true);
					setAnimate(true);
				}
			},
			{ threshold: 0.5 }
		);
		if (sectionRef.current) observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);

	const animationProps = useSpring({
		from: { opacity: 0, transform: "translateX(-50%)" },
		to: {
			opacity: animate ? 1 : 0,
			transform: animate ? "translateX(0)" : "translateX(-50%)",
		},
		config: { duration: 1000 },
	});

	return (
		<Container className="border-0 my-5" ref={sectionRef}>
			<Row className="text-center justify-content-center align-items-center">
				<h1 className="py-3 fw-bold">Unsere Ergebnisse sprechen für sich</h1>

				<Col lg={8}>
					<Card className="border-0 bg-transparent">
						<Card.Body>
							<h2 className="text-bold">
								Webentwicklung, SEO Optimierung & modernes Webdesign in Nettetal
							</h2>
							<p>
								Bei <strong>Pixel Genie</strong> kombinieren wir
								<span> modernes Webdesign</span>,{" "}
								<span>technische Webentwicklung</span> und{" "}
								<span>SEO Optimierung</span>, um Unternehmen in Nettetal und
								ganz Deutschland online sichtbar zu machen. Unsere Websites
								werden so entwickelt, dass sie nicht nur visuell überzeugen,
								sondern auch durch <strong>Performance, Conversion</strong> und
								<strong> Benutzerfreundlichkeit</strong> glänzen.
							</p>
							<p>
								Als <strong>Webdesign Agentur aus Nettetal</strong> legen wir
								Besonderen Wert auf <strong>Responsive Design</strong>, schnelle
								Ladezeiten, <strong>OnPage SEO</strong> und{" "}
								<strong>strukturierte Inhalte</strong>. So erreichen Sie mehr
								Sichtbarkeit bei Google, bessere Nutzererfahrungen und messbare
								Resultate – von <em>lokalen Betrieben</em> bis zu{" "}
								<em>mittelständischen Unternehmen</em>.
							</p>
						</Card.Body>
					</Card>
				</Col>

				<Col lg={4}>
					<animated.div style={animationProps}>
						<Card className="border-primary bg-light p-2 m-2">
							<Card.Body>
								<Card.Title className="text-bold">
									Abgeschlossene Projekte
								</Card.Title>
								<Card.Title className="text-bold">
									+{isVisible && <CountUp start={1} end={31} duration={12} />}
								</Card.Title>
							</Card.Body>
						</Card>

						<Card className="border-primary bg-light p-2 m-2">
							<Card.Body>
								<Card.Title className="text-bold">Online Reichweite</Card.Title>
								<Card.Title className="text-bold">
									+
									{isVisible && (
										<CountUp start={80000} end={87000} duration={12} />
									)}
								</Card.Title>
							</Card.Body>
						</Card>

						<Card className="border-primary bg-light p-2 m-2">
							<Card.Body>
								<Card.Title className="text-bold">Zufriedene Kunden</Card.Title>
								<Card.Title className="text-bold">
									+{isVisible && <CountUp start={10} end={72} duration={12} />}
								</Card.Title>
							</Card.Body>
						</Card>
					</animated.div>
				</Col>
			</Row>
		</Container>
	);
}

export default HeaderCounted;
