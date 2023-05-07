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
		<Container className="my-5">
			<Row className="my-5">
				<h1>Masz Inne pytania ? </h1>
			</Row>
			<Row className="justify-content-center">
				<Col lg={5}>
					{" "}
					<Image src="/assets/faq2.png" alt="Flag 3" width="500" height="500" />
				</Col>
				<Col lg={5}>
					{!isFormSubmitted ? (
						<Form
							className="app__footer-form app__flex"
							onSubmit={handleSubmit}
						>
							<Row>
								<h1>Wyslij bezposrednie zapytanie</h1>
								<Col>
									{" "}
									<Form.Group className="mb-3" controlId="formBasicEmail">
										<Form.Control
											className="p-text"
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
											className="p-text"
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
											className="p-text"
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
									<Form.Group className="mb-3" controlId="formBasicEmail">
										<Form.Label>Description</Form.Label>
										<Form.Control
											className="p-text"
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

							<Row className="justify-content-center align-items-center">
								<Col>
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
