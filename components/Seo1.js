import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SplitTextJS from "split-text-js";
import gsap from "gsap";
import { Link } from "react-scroll";
import Image from "next/image";

function Seo1() {
	return (
		<Container className="mt-5 pt-5">
			<Row className="justify-content-center text-center align-items-center">
				<Col lg={5} className="mx-auto">
					<Card className="border-0 text-dark ">
						<Card.Body>
							<h1>
								Optymalizacja SEO dla wyższej pozycji w wynikach wyszukiwania
							</h1>
							<Card.Text>
								Zespół Pixel-Genie z Nettetal oferuje kompleksowe usługi
								optymalizacji SEO, które pomogą Twojej stronie internetowej
								osiągnąć wyższą pozycję w wynikach wyszukiwania. Wykorzystaj
								naszą wiedzę i doświadczenie, aby zwiększyć swoją widoczność
								online i przyciągnąć więcej organicznego ruchu na stronie.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={5} className="mx-auto">
					{" "}
					<Image
						src="/assets/seo1.png"
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

export default Seo1;
