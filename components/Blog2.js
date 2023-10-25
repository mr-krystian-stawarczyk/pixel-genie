import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { urlFor } from "../lib/client";
import sanityClient from "@sanity/client";
import { useTranslation } from "react-i18next";
import Link from "next/link"; // Import Link from Next.js
import { BsFillArrowRightCircleFill } from "react-icons/bs";
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
		const result = await client.fetch(`*[_type == "blog"] | order(date desc)`);
		setBlog(result);
	};

	useEffect(() => {
		fetchData();
	}, []);

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

	const { i18n } = useTranslation();

	return (
		<Container fluid className="py-3" ref={sectionRef}>
			<Row
				className="justify-content-center align-items-center text-center mt-5"
				id="tips"
			>
				<h1 className="my-5 bold">{t("blog3")}</h1>
			</Row>
			<Row className="justify-content-center align-items-center text-center">
				{blog.map((item) => (
					<Col lg={6} className="my-3" key={item._id}>
						{item.slug && (
							<Link
								href={`/blog/${item.slug.current}`}
								style={{ textDecoration: "none", color: "inherit" }}
							>
								<Card className="bg-transparent border-0 rounded m-2 p-3 shadow-lg">
									<Card.Img
										src={urlFor(item.image && item.image[0])}
										alt={item.image && item.image[0].alt}
										style={{ height: "200px", width: "200px" }}
										className="mx-auto"
									/>
									<h1 className="py-2">{item.name[i18n.language]}</h1>
									<Card.Text>{item.date}</Card.Text>
									<Card.Text id="p-wrap">
										{item.details.details1[i18n.language]}
									</Card.Text>
									<Button className="bg-transparent border-0">
										<BsFillArrowRightCircleFill className="hover arrow-nav" />
									</Button>
								</Card>
							</Link>
						)}
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default Blog2;
