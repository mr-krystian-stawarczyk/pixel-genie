import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SplitTextJS from "split-text-js";
import gsap from "gsap";
import { Link } from "react-scroll";
import Image from "next/image";

function Seo2() {
	return (
		<Container className="mt-5 pt-5">
			<Row className="justify-content-center text-center align-items-center">
				<Col lg={5} className="mx-auto">
					{" "}
					<Image
						src="/assets/seo2.png"
						width={500}
						height={500}
						className="responsive-image"
						alt="header2-image"
					/>
				</Col>{" "}
				<Col lg={5} className="mx-auto">
					<Card className="border-0 text-dark ">
						<Card.Body>
							<h1>Audyt SEO dla lepszej optymalizacji strony</h1>
							<Card.Text>
								Pixel-Genie Nettetal oferuje usługi audytu SEO, które pomogą Ci
								zidentyfikować mocne i słabe strony Twojej strony internetowej
								pod kątem optymalizacji SEO. Nasz zespół specjalistów
								przeprowadzi kompleksową analizę i zaproponuje konkretną
								strategię poprawy, abyś mógł maksymalnie wykorzystać potencjał
								swojej strony w wyszukiwarkach.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Seo2;
