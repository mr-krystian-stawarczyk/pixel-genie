import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { urlFor } from "../lib/client";
import sanityClient from "@sanity/client";

import { useTranslation } from "react-i18next";

function Media6() {
	const { t, i18n } = useTranslation();

	const [media, setMedia] = useState([]);
	const client = sanityClient({
		projectId: process.env.NEXT_PUBLIC_PROJECTID,
		dataset: "production",
		useCdn: true,
		apiVersion: "2023-05-09",
	});

	const sectionRef = useRef(null);
	const [animate, setAnimate] = useState(false);
	const [animateImg, setAnimateImg] = useState(false);

	const fetchData = async () => {
		const result = await client.fetch(`*[_type == "media"]`);
		setMedia(result);
	};

	useEffect(() => {
		fetchData();
	});

	const handleIntersection = (entries) => {
		if (entries[0].isIntersecting) {
			setAnimate(true);
			setAnimateImg(true);
		}
	};

	useEffect(() => {
		const observer = new IntersectionObserver(handleIntersection);
		observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);

	return (
		<Container
			className=" py-5 my-5"
			ref={sectionRef}
			id="media-design-portfolio"
		>
			<Row className="justify-content-center align-items-center text-center mt-5 ">
				<Col>
					<h1 className="my-5 text-center bold">{t("web22")}</h1>
				</Col>
			</Row>
			<Row className="justify-content-center align-items-center text-center">
				{media.map((item) => (
					<Col lg={5} className="mx-auto my-2" key={item._id}>
						<Card className="bg-transparent border-0 shadow-lg">
							<Card.Img
								className="d-block w-100 design-img"
								src={urlFor(item.image && item.image[0])}
								alt={item.image && item.image[0].alt}
							/>
							<Card.Body>
								<h4>{item.name[i18n.language]}</h4>
								<p>{item.details[i18n.language]}</p>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default Media6;
