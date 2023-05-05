import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SplitTextJS from "split-text-js";
import gsap from "gsap";
import { Link } from "react-scroll";

function Header3() {
	return (
		<Container fluid className="  mt-5 pt-5 vh-100">
			<Row
				className=""
				style={{
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Col lg={6}>
					<h1>Header3</h1>
				</Col>
				<Col lg={6}></Col>
			</Row>
		</Container>
	);
}

export default Header3;
