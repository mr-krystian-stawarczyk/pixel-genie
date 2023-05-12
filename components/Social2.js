import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SplitTextJS from "split-text-js";
import gsap from "gsap";
import { Link } from "react-scroll";
import Image from "next/image";

function Social2() {
	return (
		<Container className="mt-5 pt-5">
			<Row className="justify-content-center text-center align-items-center">
				<Col lg={5} className="mx-auto">
					<Card className="border-0 text-dark ">
						<Card.Body>
							<h1>Twórz Wrażenie z Profesjonalnym Profilem na Social Media</h1>
							<Card.Text>
								Profesjonalny wizerunek w mediach społecznościowych to klucz do
								sukcesu online. Nasz zespół w Pixel-Genie Nettetal pomoże Ci
								stworzyć atrakcyjny i spójny profil na platformach
								społecznościowych. Zaprojektujemy wyjątkowe grafiki, napiszemy
								zwięzłe i angażujące opisy oraz dostosujemy tagi i słowa
								kluczowe pod kątem optymalizacji SEO. Dzięki temu Twój profil
								będzie bardziej widoczny w wyszukiwarkach i przyciągnie uwagę
								potencjalnych klientów.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>{" "}
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
			</Row>
		</Container>
	);
}

export default Social2;
