import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import CountUp from "react-countup";
import { useSpring, animated } from "react-spring";
import { useTranslation } from "react-i18next";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
function HeaderCounted() {
	const { t } = useTranslation();
	const sectionRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);
	const [animate, setAnimate] = useState(false);
	const [animateImg, setAnimateImg] = useState(false);
	const options = {
		root: null,
		rootMargin: "0px",
		threshold: 0.5,
	};

	useEffect(() => {
		const observer = new IntersectionObserver(handleIntersection, options);
		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}
		return () => {
			observer.disconnect();
		};
	}, [sectionRef, options]);

	const handleIntersection = (entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
			if (entries[0].isIntersecting) {
				setAnimate(true);
				setAnimateImg(true);
			}
		});
	};

	const animationProps = useSpring({
		from: { opacity: 0, transform: "translateX(-50%)" },
		to: {
			opacity: animate ? 1 : 0,
			transform: animate ? "translateX(0)" : "translateX(-50%)",
		},
		config: { duration: 1000 },
		delay: 1000,
	});

	const imgAnimationProps = useSpring({
		from: { opacity: 0, transform: "translateX(50%)" },
		to: {
			opacity: animate ? 1 : 0,
			transform: animate ? "translateX(0)" : "translateX(50%)",
		},
		config: { duration: 1000 },
		delay: 1000,
	});

	const animationPropsMiddle = useSpring({
		from: { opacity: 0 },
		to: {
			opacity: animate ? 1 : 0,
		},
		config: { duration: 1000 },
		delay: 1000,
	});

	return (
		<Container className=" border-0 ">
			<Row className="text-center justify-content-center justify-content-sm-center align-items-center  ">
				<Row className=" ">
					<h1 className="py-3">{t("webseiten1")}</h1>
				</Row>
				<Row
					className="text-center align-items-center justify-content-center"
					ref={sectionRef}
				>
					<Col lg={5} className="mx-auto my-2 ">
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1 className="text-bold">{t("webseiten2")}</h1>
								<Card.Text>{t("webseiten3")}</Card.Text>
							</Card.Body>
						</Card>
					</Col>

					<Col lg={5} xs={10} className="mx-auto my-2 text-dark">
						<Col lg={10}>
							<animated.div style={animationProps}>
								<Card className=" border-primary bg-light p-1 m-1">
									<Card.Body>
										<Card.Title>{t("webseiten4")}</Card.Title>
										<Card.Title>
											<span className="display-6">+</span>
											{isVisible && (
												<CountUp start={1} end={31} duration={12} delay={0}>
													{({ countUpRef }) => (
														<span
															className="count display-5 text-dark"
															ref={countUpRef}
														/>
													)}
												</CountUp>
											)}
										</Card.Title>
									</Card.Body>
								</Card>
							</animated.div>
						</Col>
						<Col lg={10}>
							<animated.div style={animationPropsMiddle}>
								<Card className=" border-primary bg-light p-1 m-1">
									<Card.Body>
										<Card.Title>{t("webseiten5")}</Card.Title>
										<Card.Title>
											<span className="display-6 ">+</span>
											{isVisible && (
												<CountUp
													start={80000}
													end={87000}
													duration={12}
													delay={0}
												>
													{({ countUpRef }) => (
														<span
															className="count display-5 text-dark"
															ref={countUpRef}
														/>
													)}
												</CountUp>
											)}
										</Card.Title>
									</Card.Body>
								</Card>
							</animated.div>
						</Col>
						<Col lg={10}>
							<animated.div style={imgAnimationProps}>
								<Card className=" border-primary bg-light p-1 m-1">
									<Card.Body>
										<Card.Title>{t("webseiten6")}</Card.Title>
										<Card.Title>
											<span className="display-6">+</span>
											{isVisible && (
												<CountUp start={10} end={72} duration={12} delay={0}>
													{({ countUpRef }) => (
														<span
															className="count display-5 text-dark"
															ref={countUpRef}
														/>
													)}
												</CountUp>
											)}
										</Card.Title>
									</Card.Body>
								</Card>
							</animated.div>
						</Col>
					</Col>
				</Row>
			</Row>
		</Container>
	);
}

export default HeaderCounted;
