import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SplitTextJS from "split-text-js";
import gsap from "gsap";
import { Link } from "react-scroll";
import Image from "next/image";

function Brand2() {
	return (
		<Container className="mt-5 pt-5">
			<Row className="justify-content-center text-center align-items-center">
				<Col lg={5} className="mx-auto">
					{" "}
					<Image
						src="/assets/seo3.png"
						width={500}
						height={500}
						className="responsive-image"
						alt="header2-image"
					/>
				</Col>
				<Col lg={5} className="mx-auto">
					<Card className="border-0 text-dark ">
						<Card.Body>
							<h1>Tworzenie Unikalnego Logo, które Przyciąga Uwagę</h1>
							<Card.Text>
								Logo jest kluczowym elementem w budowaniu rozpoznawalności
								marki. Nasz zespół specjalistów ds. brandingu pomoże Ci stworzyć
								unikalne logo, które wyróżni Twoją firmę. Dzięki optymalizacji
								pod kątem SEO, Twoje logo będzie widoczne dla szerokiej grupy
								odbiorców i przyczyni się do budowania świadomości marki.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Brand2;
