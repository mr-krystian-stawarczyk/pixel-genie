import Image from "next/image";

import {
	Container,
	Accordion,
	Row,
	Col,
	Card,
	Button,
	Form,
} from "react-bootstrap";
import React, { useRef, useState, useEffect } from "react";
function Faq2() {
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
		<Container className="my-5 py-5">
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
}

export default Faq2;
