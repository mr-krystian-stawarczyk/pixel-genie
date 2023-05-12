import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SplitTextJS from "split-text-js";
import gsap from "gsap";
import { Link } from "react-scroll";
import Image from "next/image";

function Media1() {
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
							<h1>Profesjonalna Obróbka Zdjęć i Wideo dla Twojego Biznesu</h1>
							<Card.Text>
								Oferujemy profesjonalne usługi obrobki zdjęć i wideo, które
								pomogą Ci w wyróżnieniu Twojego biznesu. Nasz zespół ekspertów z
								Pixel-Genie Nettetal zajmie się edycją i retuszowaniem zdjęć
								oraz montażem i obróbką wideo, aby Twoje materiały prezentowały
								się profesjonalnie i przyciągały uwagę klientów. Dzięki
								optymalizacji SEO, Twoje usługi obrobki zdjęć i wideo będą
								bardziej widoczne w wynikach wyszukiwania.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Media1;
