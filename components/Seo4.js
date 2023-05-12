import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SplitTextJS from "split-text-js";
import gsap from "gsap";
import { Link } from "react-scroll";
import Image from "next/image";

function Seo4() {
	return (
		<Container className="mt-5 pt-5">
			<Row className="justify-content-center text-center align-items-center">
				<Col lg={5} className="mx-auto">
					{" "}
					<Image
						src="/assets/seo4.png"
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
								Link building i optymalizacja techniczna dla silniejszego SEO{" "}
							</h1>
							<Card.Text>
								Pixel-Genie Nettetal oferuje usługi link buildingu i
								optymalizacji technicznej, które są kluczowe dla skutecznej
								strategii SEO. Nasz zespół pomoże Ci w budowaniu wartościowych
								linków prowadzących do Twojej strony i zapewni optymalną
								konfigurację techniczną, co przyczyni się do lepszych wyników w
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

export default Seo4;
