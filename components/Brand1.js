import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SplitTextJS from "split-text-js";
import gsap from "gsap";
import { Link } from "react-scroll";
import Image from "next/image";

function Brand1() {
	return (
		<Container className="mt-5 pt-5">
			<Row className="justify-content-center text-center align-items-center">
				<Col lg={5} className="mx-auto">
					<Card className="border-0 text-dark ">
						<Card.Body>
							<h1>Kreowanie Silnej Marki Online dla Twojego Biznesu</h1>
							<Card.Text>
								Poznaj nasze usługi brandingowe, które pomogą Ci w budowaniu
								silnej marki online dla Twojej firmy. Zaprojektujemy unikalne
								logo, dostosujemy wizerunek marki i opracujemy strategię
								komunikacji, która wyróżni Cię na rynku. Zaufaj naszemu
								doświadczeniu i zwiększ swoją widoczność w wyszukiwarkach.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
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

export default Brand1;
