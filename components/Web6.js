import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { MdOutlineSwipe } from "react-icons/md";

function Web6() {
	const { t, i18n } = useTranslation();

	const [realizacje, setRealizacje] = useState([]);
	const sectionRef = useRef(null);
	const [currentIndex, setCurrentIndex] = useState(0); // State to track current portfolio item index
	const [isMobile, setIsMobile] = useState(false);

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
		// Update dummy data whenever translations (t) change
		const updateDummyData = () => {
			const dummyData = [
				{
					image: "/assets/fensterfigiel.png",
					title: t("web120"),
					description: t("web121"),
					link: "https://fensterfigiel.de/",
				},
				{
					image: "/assets/amgreen.png",
					title: t("web122"),
					description: t("web123"),
					link: "https://amgreenergy.nl/",
				},
				{
					image: "/assets/studiomo.png",
					title: t("web124"),
					description: t("web125"),
					link: "https://studiomo.se/",
				},
				{
					image: "/assets/linktree.png",
					title: t("web126"),
					description: t("web127"),
					link: "https://linktr.ee/",
				},
				{
					image: "/assets/ecommerce.png",
					title: t("web128"),
					description: t("web129"),
					link: "https://sanity-react-next-ecommerce-szablon.netlify.app/", // Replace with actual link
				},
				{
					image: "/assets/dgbouwgroep.png",
					title: t("web130"),
					description: t("web131"),
					link: "https://dgbouwgroep.nl/",
				},
			];

			setRealizacje(dummyData);
		};

		updateDummyData(); // Initial update
	}, [t]); // Update when translations (t) change

	const handleSwipe = (direction) => {
		if (direction === "left") {
			setCurrentIndex((prevIndex) =>
				prevIndex === realizacje.length - 1 ? 0 : prevIndex + 1
			);
		} else if (direction === "right") {
			setCurrentIndex((prevIndex) =>
				prevIndex === 0 ? realizacje.length - 1 : prevIndex - 1
			);
		}
	};

	return (
		<Container className="py-5 my-5" ref={sectionRef} id="web-design-portfolio">
			<Row className="justify-content-center align-items-center text-center mt-5">
				<Col>
					<h1 className="my-5 text-center bold">{t("web22")}</h1>
				</Col>
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
									src={realizacje[currentIndex]?.image || ""}
									width={400}
									height={400}
									className="responsive-image"
									alt={realizacje[currentIndex]?.title || ""}
									loading="lazy"
								/>{" "}
								<Card className="bg-transparent border-0 shadow-lg">
									<Card.Text className="mt-1">
										<MdOutlineSwipe />
									</Card.Text>{" "}
									<Card.Body>
										<h3>{realizacje[currentIndex]?.title || ""}</h3>
										<p>{realizacje[currentIndex]?.description || ""}</p>
										<Button
											href={realizacje[currentIndex]?.link || "#"}
											target="_blank"
											className="btn-nav px-4"
										>
											Link
										</Button>{" "}
									</Card.Body>
								</Card>
							</motion.div>
						</AnimatePresence>
					</Col>
				) : (
					// Render all projects in a single row on larger screens
					realizacje.map((projekt, index) => (
						<Col lg={6} md={6} key={index} className="mx-auto my-2">
							<Image
								src={projekt.image}
								width={400}
								height={400}
								className="responsive-image"
								alt={projekt.title}
								loading="lazy"
							/>
							<Card className="bg-transparent border-0 shadow-lg">
								<Card.Body>
									<h3>{projekt.title}</h3>
									<p>{projekt.description}</p>
									<Button
										href={projekt.link}
										target="_blank"
										className="btn-nav px-4"
									>
										Link
									</Button>
								</Card.Body>
							</Card>
						</Col>
					))
				)}
			</Row>
		</Container>
	);
}

export default Web6;
