import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Row, Col, Container, Card } from "react-bootstrap";
import emailjs from "emailjs-com";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";
import Image from "next/image";
export const ContactForm = () => {
	const router = useRouter();
	const { id } = router.query;

	const sectionRef = useRef(null);
	const [animate, setAnimate] = useState(false);
	const [animateImg, setAnimateImg] = useState(false);

	const handleIntersection = (entries) => {
		if (entries[0].isIntersecting) {
			setAnimate(true);
			setAnimateImg(true);
		}
	};

	useEffect(() => {
		const observer = new IntersectionObserver(handleIntersection);
		observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);

	const animationProps = useSpring({
		from: { opacity: 0, transform: "translateY(-100px)" },
		to: {
			opacity: animate ? 1 : 0,
			transform: animate ? "translateY(0)" : "translateY(-100px)",
		},
		config: { duration: 1000 },
		delay: 1000,
	});

	const imgAnimationProps = useSpring({
		from: { opacity: 0 },
		to: { opacity: animateImg ? 1 : 0 },
		config: { duration: 1000 },
		delay: 1000,
	});

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [isFormSubmitted, setIsFormSubmitted] = useState(false);

	const [loading, setLoading] = useState(false);

	const { name, email, description, phone } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;

		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.sendForm(
				"service_u09q8ve",
				"template_ID",
				e.target,
				"user_yM2aRTOGQYE8hG9oFHJIr"
			)
			.then(
				(result) => {
					setLoading(false);
					setIsFormSubmitted(true);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<Container className="my-5 py-5" ref={sectionRef}>
			<Row className="justify-content-center">
				<Col lg={5} className="mx-auto">
					{" "}
					<Image
						src="/assets/contact.png"
						alt="faq-section2-image"
						width="500"
						height="450"
						className="responsive-image"
					/>
				</Col>
				<Col lg={5} className="mx-auto">
					{!isFormSubmitted ? (
						<Form
							className="app__footer-form app__flex mt-5"
							onSubmit={handleSubmit}
						>
							<Row>
								<h3 className="mt-5">Wyslij bezposrednie zapytanie</h3>
								<Col>
									{" "}
									<Form.Group className="mb-3" controlId="formBasicEmail">
										<Form.Control
											className="p-text my-3"
											type="text"
											placeholder="Name"
											value={name}
											name="name"
											onChange={handleChangeInput}
											required
										/>
									</Form.Group>
								</Col>
								<Col>
									<Form.Group className="mb-3" controlId="formBasicEmail">
										<Form.Control
											className="p-text my-3"
											type="text"
											placeholder="Telefon"
											value={phone}
											name="phone"
											onChange={handleChangeInput}
											required
										/>
									</Form.Group>
								</Col>
								<Col>
									<Form.Group className="mb-3" controlId="formBasicEmail">
										<Form.Control
											className="p-text my-3"
											type="email"
											placeholder="E-mail"
											value={email}
											name="email"
											onChange={handleChangeInput}
											required
										/>
									</Form.Group>
								</Col>
							</Row>
							<Row>
								<Col>
									<Form.Group className="my-3" controlId="formBasicEmail">
										<Form.Label>Description</Form.Label>
										<Form.Control
											className="p-text my-3"
											as="textarea"
											placeholder="Description"
											value={description}
											name="description"
											onChange={handleChangeInput}
											rows={3}
											required
										/>
									</Form.Group>
								</Col>
							</Row>

							<Row className="justify-content-center align-items-center text-center">
								<Col className="mx-auto">
									<Button
										type="submit"
										className="p-text m-2 nav-blue-bg btn-lg border-0"
									>
										{loading ? "Sending..." : "Stuur"}
									</Button>
								</Col>
							</Row>
						</Form>
					) : (
						<div>
							<h3 className="head-text"> Thank You For Contact!</h3>
						</div>
					)}{" "}
				</Col>
			</Row>
		</Container>
	);
};

export default ContactForm;
