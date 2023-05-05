import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import {
	Container,
	Row,
	Col,
	Button,
	Card,
	ListGroup,
	Form,
} from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import Nav from "react-bootstrap/Nav";

import Image from "next/image";
function Footer() {
	const sectionRef = useRef(null);
	const [animate, setAnimate] = useState(false);
	const [animateImg, setAnimateImg] = useState(false);

	const handleIntersection = (entries) => {
		if (entries[0].isIntersecting) {
			setAnimate(true);
			setAnimateImg(true);
			// start counting
			let count = 300;
			const interval = setInterval(() => {
				if (count === 0) {
					clearInterval(interval);
				}
			}, 10);
		}
	};

	useEffect(() => {
		const observer = new IntersectionObserver(handleIntersection);
		observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);

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
	return (
		<Container
			fluid
			className="overflow-hidden shadow-md "
			ref={sectionRef}
			id="contact"
		>
			<Row className="justify-content-center align-items-center text-center">
				{" "}
				<Col lg={6} sm={12} className="p-4">
					<animated.div style={animationProps}>
						{" "}
						<Row className="text-start">
							<Col className="">
								<Card className="border-0 bg-transparent">
									<Card.Body className="pt-0 mt-0">
										<h1>Pixel-Genie 41334 Nettetal</h1>
										<Card.Title className="my-4 bold">Mail</Card.Title>
										<Card.Text>
											<a
												href="mailto:info@pixel-genie.de"
												style={{ textDecoration: "none", color: "black" }}
											>
												{" "}
												info@pixel-genie.de
											</a>
										</Card.Text>
										<Card.Title className="my-4 bold">Policy</Card.Title>
										<Nav.Link as={Link} href="/policy" className="m-1 hover">
											<h6>Cookies & Imprint</h6>
										</Nav.Link>{" "}
									</Card.Body>
								</Card>
							</Col>
							<Col lg={6}>
								{" "}
								<Card style={{ width: "18rem" }}>
									<Card.Img variant="top" src="holder.js/100px180" />
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>
											Some quick example text to build on the card title and
											make up the bulk of the card's content.
										</Card.Text>
										<Button variant="primary">Go somewhere</Button>
									</Card.Body>
								</Card>
							</Col>
						</Row>{" "}
					</animated.div>
				</Col>
			</Row>
		</Container>
	);
}

export default Footer;