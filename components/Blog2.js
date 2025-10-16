import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card, Button, Accordion } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineSwipe } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Blog2() {
	const { t, i18n } = useTranslation();
	const sectionRef = useRef(null);
	const [animate, setAnimate] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isMobile, setIsMobile] = useState(false);
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		// Check if the screen width is mobile size
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768); // Adjust this breakpoint as needed
		};

		handleResize(); // Check initial width
		window.addEventListener("resize", handleResize);

		// Clean up event listener on unmount
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		// Update articles whenever translations (t) change
		const updateArticles = () => {
			const translatedArticles = [
				{
					imgSrc: "/assets/webentwicklung-nettetal-design-seo4.png",
					title: t("artic56"),
					date: "27-08-2025",
					details: t("artic57"),
					details2: t("artic58"),
					details3: t("artic59"),
					details4: t("artic60"),
					details5: t("artic61"),
				},
				{
					imgSrc: "/assets/webentwicklung-nettetal-design-seo2.png",
					title: t("artic50"),
					date: "10-02-2025",
					details: t("artic51"),
					details2: t("artic52"),
					details3: t("artic53"),
					details4: t("artic54"),
					details5: t("artic55"),
				},

				{
					imgSrc: "/assets/artic8.png",
					title: t("artic44"),
					date: "20-07-2024",
					details: t("artic45"),
					details2: t("artic46"),
					details3: t("artic47"),
					details4: t("artic48"),
					details5: t("artic49"),
				},

				{
					imgSrc: "/assets/artic7.png",
					title: t("artic38"),
					date: "11-07-2024",
					details: t("artic39"),
					details2: t("artic40"),
					details3: t("artic41"),
					details4: t("artic42"),
					details5: t("artic43"),
				},
				{
					imgSrc: "/assets/artic4.png",
					title: t("artic32"),
					date: "18-06-2024",
					details: t("artic33"),
					details2: t("artic34"),
					details3: t("artic35"),
					details4: t("artic36"),
					details5: t("artic37"),
				},
				{
					imgSrc: "/assets/artic6.png",
					title: t("artic26"),
					date: "20-02-2024",
					details: t("artic27"),
					details2: t("artic28"),
					details3: t("artic29"),
					details4: t("artic30"),
					details5: t("artic31"),
				},
				{
					imgSrc: "/assets/artic5.png",
					title: t("artic19"),
					date: "07-12-2023",
					details: t("artic21"),
					details2: t("artic22"),
					details3: t("artic23"),
					details4: t("artic24"),
					details5: t("artic25"),
				},
				{
					imgSrc: "/assets/artic1.png",
					title: t("artic13"),
					date: "21-09-2023",
					details: t("artic14"),
					details2: t("artic15"),
					details3: t("artic16"),
					details4: t("artic17"),
					details5: t("artic18"),
				},
				{
					imgSrc: "/assets/artic2.png",
					title: t("artic7"),
					date: "10-07-2023",
					details: t("artic8"),
					details2: t("artic9"),
					details3: t("artic10"),
					details4: t("artic11"),
					details5: t("artic12"),
				},
				{
					imgSrc: "/assets/artic3.png",
					title: t("artic1"),
					date: "05-05-2023",
					details: t("artic2"),
					details2: t("artic3"),
					details3: t("artic4"),
					details4: t("artic5"),
					details5: t("artic6"),
				},

				// Add more articles as needed
			];
			setArticles(translatedArticles);
		};

		updateArticles(); // Initial update
	}, [t]);

	const handleIntersection = (entries) => {
		if (entries[0].isIntersecting) {
			setAnimate(true);
		}
	};

	useEffect(() => {
		const observer = new IntersectionObserver(handleIntersection);
		observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);

	const handleSwipe = (direction) => {
		if (direction === "left") {
			setCurrentIndex((prevIndex) =>
				prevIndex === articles.length - 1 ? 0 : prevIndex + 1
			);
		} else if (direction === "right") {
			setCurrentIndex((prevIndex) =>
				prevIndex === 0 ? articles.length - 1 : prevIndex - 1
			);
		}
	};

	const settings = {
		dots: true,
		infinite: true,
		speed: 1000,

		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<Container fluid className="py-3 my-5" ref={sectionRef}>
			<Row
				className="justify-content-center align-items-center text-center mt-5"
				id="tips"
			>
				<h1 className="my-5 bold">{t("blog3")}</h1>
			</Row>
			<Row className="justify-content-center align-items-center text-center">
				{isMobile ? (
					<Col lg={6} className="mx-auto my-2">
						<AnimatePresence mode="wait">
							<motion.div
								key={currentIndex}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5 }}
								drag="x"
								dragConstraints={{ left: 0, right: 0 }}
								dragElastic={0.8}
								onDragEnd={(event, info) => {
									if (info.offset.x > 50) {
										handleSwipe("left");
									} else if (info.offset.x < -50) {
										handleSwipe("right");
									}
								}}
							>
								<Image
									src={articles[currentIndex]?.imgSrc || ""}
									width={400}
									height={400}
									className="responsive-image"
									alt={articles[currentIndex]?.title || ""}
									loading="lazy"
								/>
								<Card.Text className="mt-1">
									<MdOutlineSwipe />
								</Card.Text>
								<Card className="bg-transparent border-0 shadow-lg">
									<Card.Body>
										<h1 className="py-2">
											{articles[currentIndex]?.title || ""}
										</h1>

										<Accordion>
											<Accordion.Item eventKey="0">
												<Accordion.Header>
													{articles[currentIndex]?.date || ""}
												</Accordion.Header>
												<Accordion.Body>
													{" "}
													<p className="text-dark">
														{articles[currentIndex]?.details || ""}
													</p>
													<p> {articles[currentIndex]?.details2 || ""}</p>
													<p> {articles[currentIndex]?.details3 || ""}</p>
													<p> {articles[currentIndex]?.details4 || ""}</p>
													<p>{articles[currentIndex]?.details5 || ""}</p>
													<p> {articles[currentIndex]?.details6 || ""}</p>{" "}
													<Button href="#kontakt" className="my-2 btn-nav">
														Kontakt
													</Button>
												</Accordion.Body>{" "}
											</Accordion.Item>
										</Accordion>
									</Card.Body>
								</Card>
							</motion.div>
						</AnimatePresence>
					</Col>
				) : (
					<Row>
						<Col lg={12}>
							<Slider {...settings}>
								{articles.map((article, index) => (
									<Col lg={3} key={index} className="my-3">
										<Card className="bg-transparent border-0 rounded m-2 p-3 shadow-lg">
											<Image
												src={article.imgSrc}
												width={250}
												height={250}
												className="responsive-image mx-auto"
												alt={article.title}
												priority
											/>

											<Card.Body>
												{" "}
												<Card.Text id="p-wrap" style={{ height: "150px" }}>
													<h3 className="py-2">
														<p>{article.title}</p>
													</h3>
												</Card.Text>
												<Accordion>
													<Accordion.Item eventKey="0">
														<Accordion.Header>
															<h5 className="text-bold text-dark">
																{article.date}
															</h5>
														</Accordion.Header>
														<Accordion.Body>
															<p className="text-dark">{article.details}</p>
															<p className="text-dark">{article.details2}</p>
															<p className="text-dark">{article.details3}</p>
															<p className="text-dark">{article.details4}</p>
															<p className="text-dark">{article.details5}</p>
															<p className="text-dark">
																{article.details6}
															</p>{" "}
															<Button
																href="#kontakt"
																className="my-2 btn-nav text-white"
															>
																<span className="text-white">Kontakt</span>
															</Button>
														</Accordion.Body>{" "}
													</Accordion.Item>{" "}
												</Accordion>
											</Card.Body>
										</Card>
									</Col>
								))}
							</Slider>
						</Col>
					</Row>
				)}
			</Row>
		</Container>
	);
}

export default Blog2;
