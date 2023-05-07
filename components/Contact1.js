import Image from "next/image";
import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";

function Contact1() {
	return (
		<Container>
			<Row className="my-5 justify-content-center text-center align-items-center">
				<Col lg={5}>
					{" "}
					<Card style={{ width: "18rem" }} className="text-dark">
						<Card.Img variant="top" src="holder.js/100px180" />
						<Card.Body>
							<Card.Title>Telefon</Card.Title>
							<Card.Text>173534346</Card.Text>
							<Button variant="primary">Call</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={5}>
					{" "}
					<Card style={{ width: "18rem" }} className="text-dark">
						<Image src="/assets/contact.png" width={300} height={300} />
						<Card.Body>
							<Card.Title>Email</Card.Title>
							<Card.Text>info@pixel-genie.de</Card.Text>
							<Button variant="primary">Send mail</Button>
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
							<Card.Text>Fasanenstr 41134 Nettetal</Card.Text>
							<Button variant="primary">Wynik w mapie google </Button>
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
