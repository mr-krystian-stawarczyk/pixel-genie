import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SplitTextJS from "split-text-js";
import gsap from "gsap";
import { Link } from "react-scroll";
import Image from "next/image";

function Brand3() {
	return (
		<Container className="mt-5 pt-5">
			<Row className="justify-content-center text-center align-items-center">
				<Col lg={5} className="mx-auto">
					<Card className="border-0 text-dark ">
						<Card.Body>
							<h1>Budowanie Spójnego Wizerunku Marki Online</h1>
							<Card.Text>
								Spójność wizerunku marki online jest kluczowa dla budowania
								zaufania i rozpoznawalności. Nasza agencja brandingowa pomoże Ci
								w budowaniu spójnego wizerunku marki na różnych platformach
								internetowych. Dzięki zharmonizowanym elementom wizualnym,
								stylowi komunikacji i optymalizacji SEO, Twoja marka będzie
								wyróżniać się na tle konkurencji.
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

export default Brand3;
