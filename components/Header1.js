import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SplitTextJS from "split-text-js";
import gsap from "gsap";
import { Link } from "react-scroll";

function Header1() {
	return (
		<Container fluid className="  vh-100">
			<Row
				className=""
				style={{
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Col lg={6}>
					<h1>Tutaj Text</h1>
				</Col>
				<Col lg={6}></Col>
			</Row>
		</Container>
	);
}

export default Header1;
