import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SplitTextJS from "split-text-js";
import gsap from "gsap";
import { Link } from "react-scroll";
import Image from "next/image";

function Brand4() {
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
				</Col>{" "}
				<Col lg={5} className="mx-auto">
					<Card className="border-0 text-dark ">
						<Card.Body>
							<h1>Skuteczna Strategia Komunikacji Marki dla Twojego Sukcesu</h1>
							<Card.Text>
								Wprowadzenie skutecznej strategii komunikacji marki może
								znacznie wpłynąć na sukces Twojego biznesu. Nasz zespół
								specjalistów ds. brandingu pomoże Ci opracować spersonalizowaną
								strategię komunikacji, która uwzględnia unikalne cechy Twojej
								marki oraz optymalizację pod kątem SEO. Zbuduj zaangażowanie
								klientów i zwiększ swoją widoczność online dzięki naszym usługom
								brandingowym.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Brand4;
