import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SplitTextJS from "split-text-js";
import gsap from "gsap";
import { Link } from "react-scroll";
import Image from "next/image";

function Social1() {
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
							<h1>
								Zwiększ Zasięg i Zaangażowanie Twojej Marki na Social Media
							</h1>
							<Card.Text>
								Nasza agencja Pixel-Genie Nettetal oferuje usługi zarządzania
								social media, które pomogą Ci zwiększyć zasięg i zaangażowanie
								Twojej marki. Tworzymy strategie dostosowane do Twoich potrzeb,
								publikujemy atrakcyjne treści i interaktywne posty, które
								przyciągają uwagę Twojej grupy docelowej. Dzięki optymalizacji
								SEO, Twoja obecność na platformach społecznościowych będzie
								bardziej widoczna, przyciągając większą liczbę potencjalnych
								klientów.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>{" "}
			</Row>
		</Container>
	);
}

export default Social1;
