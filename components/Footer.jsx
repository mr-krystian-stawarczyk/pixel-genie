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

import { useTranslation } from "react-i18next";

import {
	AiOutlineFacebook,
	AiOutlineLinkedin,
	AiOutlineInstagram,
} from "react-icons/ai";

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
			className="overflow-hidden shadow-md bg-black text-white"
			ref={sectionRef}
			id="contact"
		>
			<animated.div style={animationProps}>
				{" "}
				<Row className=" justify-content-center align-items-center  mt-2 border-bottom">
					<Col lg={3} className="mx-auto">
						{" "}
						<Card
							style={{ width: "18rem" }}
							className="bg-transparent border-0 shadow-lg "
						>
							<Card.Body className="">
								<Card.Title className="my-3">Produkty</Card.Title>
								<Card.Text>Strony</Card.Text>{" "}
								<Card.Text>Pozycjonowanie</Card.Text>{" "}
								<Card.Text>Branding</Card.Text> <Card.Text>Media</Card.Text>{" "}
								<Card.Text>Social Media</Card.Text>{" "}
							</Card.Body>
						</Card>
					</Col>
					<Col lg={3} className=" mx-auto">
						<Card
							style={{ width: "18rem" }}
							className="bg-transparent border-0 shadow-lg "
						>
							<Card.Body className="">
								<Card.Title className="my-3">Firma</Card.Title>
								<Card.Text>O nas</Card.Text> <Card.Text>Kontakt</Card.Text>{" "}
								<Card.Text>Porady</Card.Text> <Card.Text>Projekty</Card.Text>{" "}
								<Card.Text>Pytania</Card.Text>{" "}
							</Card.Body>
						</Card>
					</Col>{" "}
					<Col lg={3} className=" mx-auto">
						<Card
							style={{ width: "18rem" }}
							className="bg-transparent border-0 shadow-lg text-center"
						>
							<Card.Body className="">
								<Card.Title className="my-3">Social Media</Card.Title>
								<Card.Text>
									<AiOutlineFacebook style={{ fontSize: "3rem" }} />
								</Card.Text>
								<Card.Text>
									<AiOutlineLinkedin style={{ fontSize: "3rem" }} />
								</Card.Text>
								<Card.Text>
									<AiOutlineInstagram style={{ fontSize: "3rem" }} />
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>{" "}
				<Row className="text-center my-2">
					<Col>
						<h6>2023 PixelGenie All Rights Reserved</h6>
					</Col>{" "}
					<Col>
						{" "}
						<h6>Cookies & Imprint</h6>
					</Col>
				</Row>
			</animated.div>
		</Container>
	);
}

export default Footer;
