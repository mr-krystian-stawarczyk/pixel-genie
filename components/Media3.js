import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SplitTextJS from "split-text-js";
import gsap from "gsap";
import { Link } from "react-scroll";
import Image from "next/image";

function Media3() {
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
							<h1>Montaż i Edycja Wideo na Najwyższym Poziomi</h1>
							<Card.Text>
								Potrzebujesz profesjonalnego montażu i edycji wideo dla Twojego
								projektu? Nasz zespół w Pixel-Genie Nettetal oferuje usługi
								montażu wideo na najwyższym poziomie. Odpowiemy na Twoje
								potrzeby, dopasujemy efekty wizualne i dźwiękowe oraz zapewnimy,
								że Twoje wideo będzie prezentować się dynamicznie i
								profesjonalnie. Dzięki optymalizacji SEO, Twoje usługi montażu
								wideo będą bardziej widoczne dla osób poszukujących tych usług w
								wyszukiwarkach.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Media3;
