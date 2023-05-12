import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SplitTextJS from "split-text-js";
import gsap from "gsap";
import { Link } from "react-scroll";
import Image from "next/image";

function Media2() {
	return (
		<Container className="mt-5 pt-5">
			<Row className="justify-content-center text-center align-items-center">
				<Col lg={5} className="mx-auto">
					<Card className="border-0 text-dark ">
						<Card.Body>
							<h1>
								Kreowanie Efektownych Bannerów Reklamowych dla Twojej Kampanii
							</h1>
							<Card.Text>
								Potrzebujesz atrakcyjnych i efektownych banerów reklamowych dla
								Twojej kampanii? Jesteśmy tutaj, aby pomóc! Nasz zespół grafików
								stworzy spersonalizowane i zgodne z Twoją marką banery
								reklamowe. Dzięki zaawansowanej wiedzy w dziedzinie
								optymalizacji pod kątem SEO, Twoje banery będą lepiej widoczne w
								wyszukiwarkach i przyciągną większą uwagę potencjalnych
								klientów.
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
				</Col>
			</Row>
		</Container>
	);
}

export default Media2;
