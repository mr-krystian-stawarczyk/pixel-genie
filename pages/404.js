import Image from "next/image";
import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import Head from "next/head";
function error() {
	return (
		<Container className="mt-5 pt-5">
			<Head>
				<title>Pixel Genie Nettetal 404</title>
				<meta
					name="description"
					content="Leider scheint die von Ihnen angeforderte Seite nicht vorhanden zu sein. Kontaktieren Sie uns, um Hilfe zu erhalten, oder besuchen Sie unsere Startseite, um unsere Dienstleistungen zu sehen."
				/>
			</Head>
			<Row className="text-center align-items-center justify-content-center">
				<Col lg={6}>
					<h1>Something Went Wrong</h1> <Button>Home</Button>
				</Col>
				<Col lg={6}>
					<Image
						src="/assets/404.png"
						width={500}
						height={500}
						className="responsive-image py-3"
						alt="404-error-image"
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default error;
