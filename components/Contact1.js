import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useTranslation } from "react-i18next";
function Contact1() {
	const { t } = useTranslation();

	function handleCall() {
		window.location.href = "tel:+4872697493";
	}

	const handleEmailClick = () => {
		window.location.href = "mailto:pixelgenie.marketing@gmail.com";
	};

	return (
		<Container className=" ">
			<Row className="my-5 py-5 justify-content-center text-center align-items-center">
				<Col lg={4} className="my-3 mx-auto">
					<Card
						style={{ minWidth: "18rem" }}
						className="bg-transparent border-0 shadow-lg"
					>
						<Card.Body>
							<AiOutlineMail style={{ fontSize: "4rem" }} />
							<Card.Title>Email</Card.Title>
							<Card.Text>pixelgenie.marketing@gmail.com</Card.Text>
							<Button className="btn-nav" onClick={handleEmailClick}>
								E Mail
							</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={4} className="my-3 mx-auto">
					<Card
						style={{ minWidth: "18rem" }}
						className="bg-transparent border-0 shadow-lg"
					>
						<Card.Body>
							<HiOutlineLocationMarker style={{ fontSize: "4rem" }} />
							<Card.Title>Adresse</Card.Title>
							<Card.Text>Fasanenstr 41134 Nettetal</Card.Text>
							<Button
								target="_blank"
								rel="noopener noreferrer"
								className="btn-nav"
								href="https://www.google.com/maps/place/Pixel-Genie/@51.2989446,6.2737063,15z/data=!4m6!3m5!1s0x47c75783bf077a0f:0x9e16ae7c216c0cb7!8m2!3d51.2989446!4d6.2737063!16s%2Fg%2F11kk7451mc"
							>
								Adresse
							</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Contact1;
