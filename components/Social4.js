import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SplitTextJS from "split-text-js";
import gsap from "gsap";
import { Link } from "react-scroll";
import Image from "next/image";

function Social4() {
	return (
		<Container className="mt-5 pt-5">
			<Row className="justify-content-center text-center align-items-center">
				<Col lg={5} className="mx-auto">
					<Card className="border-0 text-dark ">
						<Card.Body>
							<h1>Buduj Silną Obecność Marki na Social Media</h1>
							<Card.Text>
								Budowanie silnej obecności marki na platformach
								społecznościowych jest kluczowe dla sukcesu w dzisiejszym
								świecie online. Nasz zespół w Pixel-Genie Nettetal pomoże Ci w
								kreowaniu i utrzymaniu spójnego wizerunku marki na social media.
								Dostarczymy spersonalizowane strategie, angażujące treści i
								regularne publikacje, które budują zaufanie i lojalność
								klientów. Dzięki optymalizacji SEO, Twoja marka będzie bardziej
								widoczna w wyszukiwarkach, zwiększając swoją pozycję w branży.
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

export default Social4;
