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
			className="overflow-hidden shadow-md "
			ref={sectionRef}
			id="contact"
		>
			<animated.div style={animationProps}>
				{" "}
				<Row className=" justify-content-center align-items-center text-center my-5">
					<Col lg={3} className="mx-auto">
						{" "}
						<Card
							style={{ width: "18rem" }}
							className="bg-transparent border-0 shadow-lg "
						>
							<Card.Body className="">
								<h4 className="my-3">Odnosniki</h4>
								<h4 className="my-3">Strony</h4>
								<h4 className="my-3">Pozycjonowanie</h4>
								<h4>Social Media</h4>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={3} className=" mx-auto">
						{" "}
						<Card
							style={{ width: "18rem" }}
							className="bg-transparent border-0 shadow-lg"
						>
							<Card.Body>
								<h4 className="my-3">More</h4>
								<h4 className="my-3">O nas</h4>
								<h4 className="my-3">Faq</h4>
								<h4>Contact</h4>
							</Card.Body>
						</Card>
					</Col>{" "}
					<Col lg={3} className=" mx-auto">
						<Card
							className=" bg-transparent border-0 text-center shadow-lg"
							style={{ width: "18rem" }}
						>
							<Card.Body>
								<h4 className=" bold my-3">Mail</h4>
								<h4>
									<a
										href="mailto:info@pixel-genie.de"
										style={{ textDecoration: "none", color: "black" }}
									>
										{" "}
										info@pixel-genie.de
									</a>
								</h4>
								<h4 className="bold my-3">Policy</h4>
								<Nav.Link as={Link} href="/policy" className="m-1 hover">
									<h4>Cookies & Imprint</h4>
								</Nav.Link>{" "}
							</Card.Body>
						</Card>
					</Col>
				</Row>{" "}
			</animated.div>
		</Container>
	);
}

export default Footer;
