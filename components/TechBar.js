import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const settings = {
	dots: false,
	infinite: true,
	speed: 500,
	arrows: false,
	slidesToShow: 6,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 4,
			},
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 2,
			},
		},
	],
};

const TechBar = () => {
	return (
		<Container fluid className="my-5 py-5">
			<Row className="justify-content-center align-items-center text-center bg-blue my-3 py-3">
				<Slider {...settings}>
					<div className="text-center">
						{" "}
						<Image
							src="/assets/bootstrap.png"
							alt="webentwicklung-nettetal-tech-brands1"
							width={100}
							height={100}
							className="img-fluid mx-auto"
						/>{" "}
					</div>
					<div className="text-center">
						<Image
							src="/assets/canva.png"
							alt="webentwicklung-nettetal-tech-brands2"
							width={100}
							height={100}
							className="img-fluid mx-auto"
						/>
					</div>
					<div className="text-center">
						<Image
							src="/assets/git.png"
							alt="webentwicklung-nettetal-tech-brands3"
							width={100}
							height={100}
							className="img-fluid mx-auto"
						/>{" "}
					</div>
					<div className="text-center">
						<Image
							src="/assets/googleanalytics.png"
							alt="webentwicklung-nettetal-tech-brands4"
							width={100}
							height={100}
							className="img-fluid mx-auto"
						/>{" "}
					</div>
					<div className="text-center">
						<Image
							src="/assets/netlify.png"
							alt="webentwicklung-nettetal-tech-brands5"
							width={100}
							height={100}
							className="img-fluid mx-auto"
						/>{" "}
					</div>
					<div className="text-center">
						<Image
							src="/assets/next.png"
							alt="webentwicklung-nettetal-tech-brands6"
							width={100}
							height={100}
							className="img-fluid mx-auto"
						/>{" "}
					</div>
					<div className="text-center">
						<Image
							src="/assets/react.png"
							alt="webentwicklung-nettetal-tech-brands7"
							width={100}
							height={100}
							className="img-fluid mx-auto"
						/>{" "}
					</div>
				</Slider>
			</Row>
		</Container>
	);
};

export default TechBar;
