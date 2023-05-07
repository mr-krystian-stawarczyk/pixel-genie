import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SplitTextJS from "split-text-js";
import gsap from "gsap";
import { Link } from "react-scroll";
import Image from "next/image";

function Header3() {
	return (
		<Container className=" my-5 py-5 ">
			<Row className="justify-content-center text-center align-items-center">
				<Col lg={5} className="mx-auto">
					{" "}
					<Image
						src="/assets/header3.png"
						width={500}
						height={500}
						className="responsive-image"
						alt="header3-image"
					/>
				</Col>
				<Col lg={5} className="mx-auto">
					<Card className="border-0 text-dark">
						<Card.Body>
							<h1>Wiemy jakie potrzeby ma twoj biznes</h1>
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

export default Header3;
