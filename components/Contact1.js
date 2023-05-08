import Image from "next/image";
import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
function Contact1() {
	return (
		<Container>
			<Row className="my-5 py-5 justify-content-center text-center align-items-center">
				<Col lg={4} className="m-3">
					{" "}
					<Card style={{ width: "18rem" }} className="text-dark">
						<Card.Body>
							<AiOutlinePhone style={{ fontSize: "4rem" }} />
							<Card.Title>Telefon</Card.Title>
							<Card.Text>173534346</Card.Text>
							<Button variant="primary">Call</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={4} className="m-3">
					{" "}
					<Card style={{ width: "18rem" }} className="text-dark">
						<Card.Body>
							<AiOutlineMail style={{ fontSize: "4rem" }} />
							<Card.Title>Email</Card.Title>
							<Card.Text>info@pixel-genie.de</Card.Text>
							<Button variant="primary">Send mail</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={4} className="m-3">
					<Card style={{ width: "18rem" }} className="text-dark">
						<Card.Body>
							{" "}
							<HiOutlineLocationMarker style={{ fontSize: "4rem" }} />
							<Card.Title>Adres</Card.Title>
							<Card.Text>Fasanenstr 41134 Nettetal</Card.Text>
							<Button variant="primary">Wynik w mapie google </Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Contact1;
