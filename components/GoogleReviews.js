"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import dynamic from "next/dynamic";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const settings = {
	dots: true,
	infinite: true,
	speed: 600,
	arrows: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3500,
	centerMode: true,
	centerPadding: "40px",
	responsive: [
		{
			breakpoint: 992,
			settings: { slidesToShow: 2, centerPadding: "20px" },
		},
		{
			breakpoint: 768,
			settings: { slidesToShow: 1, centerPadding: "0" },
		},
	],
};

const GoogleReviews = () => {
	return (
		<Container fluid className="py-5 my-5  text-light" id="google-reviews">
			<Row className="text-center mb-4">
				<Col>
					<h2 className="fw-bold display-6 mb-3 text-gradient">
						Was unsere Kunden über Pixel Genie sagen
					</h2>
					<p>
						Echte Google Bewertungen – 100% authentisch. <br></br>Zufriedene
						Kunden, echte Ergebnisse und moderne Websites, die überzeugen.
					</p>
				</Col>
			</Row>

			<Row>
				<Slider {...settings}>
					{/* --- Review 1 --- */}
					<div className="p-3">
						<div className="review-card bg-gradient-dark p-4 rounded-4 shadow-lg h-100 mx-2">
							<div className="d-flex align-items-center mb-3">
								<div>
									<h5 className="mb-0 fw-semibold">Karolina C.</h5>
									<small>⭐⭐⭐⭐⭐ Google Review</small>
								</div>
							</div>
							<p className="fst-italic">
								" Sehr netter und professioneller Service. Bereit in der Zukunft
								"👍
							</p>
							<div className="text-warning">
								{[...Array(5)].map((_, i) => (
									<FaStar key={i} />
								))}
							</div>
						</div>
					</div>

					{/* --- Review 2 --- */}
					<div className="p-3">
						<div className="review-card bg-gradient-dark p-4 rounded-4 shadow-lg h-100 mx-2">
							<div className="d-flex align-items-center mb-3">
								<div>
									<h5 className="mb-0 fw-semibold">Addie S.</h5>
									<small>⭐⭐⭐⭐⭐ Google Review</small>
								</div>
							</div>
							<p className="fst-italic">
								'Only 5 stars because I can't give 10. Fast, reliable,
								professional - all that while being wallet-friendly!""
							</p>
							<div className="text-warning">
								{[...Array(5)].map((_, i) => (
									<FaStar key={i} />
								))}
							</div>
						</div>
					</div>

					{/* --- Review 3 --- */}
					<div className="p-3">
						<div className="review-card bg-gradient-dark p-4 rounded-4 shadow-lg h-100 mx-2">
							<div className="d-flex align-items-center mb-3">
								<div>
									<h5 className="mb-0 fw-semibold">Sven M.</h5>
									<small>⭐⭐⭐⭐⭐ Google Review</small>
								</div>
							</div>
							<p className="fst-italic">
								“Von Anfang bis Ende top! Klare Kommunikation und modernes
								Design. Unsere Website lädt jetzt doppelt so schnell.”
							</p>
							<div className="text-warning">
								{[...Array(5)].map((_, i) => (
									<FaStar key={i} />
								))}
							</div>
						</div>
					</div>

					{/* --- Review 4 --- */}
					<div className="p-3">
						<div className="review-card bg-gradient-dark p-4 rounded-4 shadow-lg h-100 mx-2">
							<div className="d-flex align-items-center mb-3">
								<div>
									<h5 className="mb-0 fw-semibold">Mariusz P.</h5>
									<small>⭐⭐⭐⭐⭐ Google Review</small>
								</div>
							</div>
							<p className="fst-italic">
								"Open minded and professional advices leading to creative and
								unique projects. Check it, you will not regret!"
							</p>
							<div className="text-warning">
								{[...Array(5)].map((_, i) => (
									<FaStar key={i} />
								))}
							</div>
						</div>
					</div>
				</Slider>
			</Row>
		</Container>
	);
};

export default GoogleReviews;
