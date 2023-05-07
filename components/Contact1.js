import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";

function Contact1() {
	return (
		<Container className="vh-100">
			<Row className="text-center">
				<h1>Contact1</h1>
			</Row>
			<Row className="my-5 justify-content-center text-center align-items-center">
				<Col lg={5}>
					{" "}
					<Card style={{ width: "18rem" }} className="text-dark">
						<Card.Img variant="top" src="holder.js/100px180" />
						<Card.Body>
							<Card.Title>Telefon</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={5}>
					{" "}
					<Card style={{ width: "18rem" }} className="text-dark">
						<Card.Img variant="top" src="holder.js/100px180" />
						<Card.Body>
							<Card.Title>Email</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row className="my-5 justify-content-center text-center align-items-center">
				<Col lg={5}>
					{" "}
					<Card style={{ width: "18rem" }} className="text-dark">
						<Card.Img variant="top" src="holder.js/100px180" />
						<Card.Body>
							<Card.Title>Adres</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={5}>
					{" "}
					<Card style={{ width: "18rem" }} className="text-dark">
						<Card.Img variant="top" src="holder.js/100px180" />
						<Card.Body>
							<Card.Title>Zapytanie</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Contact1;
