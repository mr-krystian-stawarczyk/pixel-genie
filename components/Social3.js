import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SplitTextJS from "split-text-js";
import gsap from "gsap";
import { Link } from "react-scroll";
import Image from "next/image";

function Social3() {
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
							<h1>Skuteczne Kampanie Reklamowe na Social Media</h1>
							<Card.Text>
								Wykorzystaj potencjał platform społecznościowych do prowadzenia
								skutecznych kampanii reklamowych. Nasza agencja Pixel-Genie
								Nettetal oferuje profesjonalne usługi reklamowe w mediach
								społecznościowych. Tworzymy spersonalizowane kampanie, które
								trafiają do Twojej grupy docelowej, wykorzystując zaawansowane
								narzędzia targetowania. Dzięki optymalizacji SEO, Twoje kampanie
								będą bardziej widoczne i osiągną większą skuteczność w
								generowaniu ruchu i konwersji.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>{" "}
			</Row>
		</Container>
	);
}

export default Social3;
