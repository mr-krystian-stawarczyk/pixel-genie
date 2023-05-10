import React, { useEffect, useRef, useState } from "react";
import {
	Container,
	Row,
	Col,
	Card,
	Carousel,
	Button,
	CardGroup,
} from "react-bootstrap";
import { urlFor } from "../lib/client";
import sanityClient from "@sanity/client";
import { useSpring, animated } from "react-spring";
import { useTranslation } from "react-i18next";

function Blog2() {
	const { t } = useTranslation();

	const [blog, setBlog] = useState([]);
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
		const result = await client.fetch(`*[_type == "blog"]`);
		setBlog(result);
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
		<Container className=" py-3 " ref={sectionRef}>
			<Row className="justify-content-center align-items-center text-center mt-5 ">
				<h1 className="my-5  bold">Przedstawiamy Nasze ostatnie realizacje</h1>
			</Row>
			<Row className="justify-content-center align-items-center text-center">
				<Col lg={10}>
					<Carousel>
						{blog.map((item) => (
							<Carousel.Item key={item._id}>
								<img
									className="d-block w-100 "
									src={urlFor(item.image && item.image[0])}
									alt={item.name}
								/>
								<Carousel.Caption>
									<h3>{item.name}</h3>
									<p>{item.details}</p>
								</Carousel.Caption>
							</Carousel.Item>
						))}
					</Carousel>{" "}
				</Col>
			</Row>
		</Container>
	);
}

export default Blog2;
