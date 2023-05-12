import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SplitTextJS from "split-text-js";
import gsap from "gsap";
import { Link } from "react-scroll";
import Image from "next/image";

function Seo3() {
	return (
		<Container className="mt-5 pt-5">
			<Row className="justify-content-center text-center align-items-center">
				<Col lg={5} className="mx-auto">
					<Card className="border-0 text-dark ">
						<Card.Body>
							<h1>
								Słowa kluczowe i strategie treści dla skuteczniejszego SEO
							</h1>
							<Card.Text>
								Nasz zespół ekspertów od SEO z Pixel-Genie Nettetal pomoże Ci w
								doborze odpowiednich słów kluczowych i opracowaniu strategii
								treści, które przyczynią się do poprawy widoczności Twojej
								strony internetowej w wynikach wyszukiwania. Wykorzystaj
								potencjał organicznego ruchu i dotrzyj do swojej docelowej grupy
								odbiorców.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={5} className="mx-auto">
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

export default Seo3;
