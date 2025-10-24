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
		<Container className="border-0 my-5 py-5" ref={sectionRef}>
			<Row className="text-center justify-content-center align-items-center">
				<h1 className="py-3">Unsere Ergebnisse sprechen für sich</h1>

				<Col lg={5}>
					<Card className="border-0 bg-transparent">
						<Card.Body>
							<h2 className="text-bold">
								Webentwicklung & Performance Optimierung
							</h2>
							<p>
								Wir entwickeln Websites, die nicht nur gut aussehen, sondern
								auch schnell laden, SEO-stark und konversionsoptimiert sind.
							</p>
						</Card.Body>
					</Card>
				</Col>

				<Col lg={5}>
					<animated.div style={animationProps}>
						<Card className="border-primary bg-light p-2 m-2">
							<Card.Body>
								<Card.Title>Abgeschlossene Projekte</Card.Title>
								<Card.Title>
									+
									{isVisible && (
										<CountUp start={1} end={31} duration={12} delay={0} />
									)}
								</Card.Title>
							</Card.Body>
						</Card>

						<Card className="border-primary bg-light p-2 m-2">
							<Card.Body>
								<Card.Title>Zeilen Code entwickelt</Card.Title>
								<Card.Title>
									+
									{isVisible && (
										<CountUp
											start={80000}
											end={87000}
											duration={12}
											delay={0}
										/>
									)}
								</Card.Title>
							</Card.Body>
						</Card>

						<Card className="border-primary bg-light p-2 m-2">
							<Card.Body>
								<Card.Title>SEO Keywords auf Seite 1</Card.Title>
								<Card.Title>
									+
									{isVisible && (
										<CountUp start={10} end={72} duration={12} delay={0} />
									)}
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
