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
	slidesToShow: 4,
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
			<Row className="justify-content-center align-items-center text-center">
				<Col>
					<h1 className="text-center mb-4">Tech Brands</h1>
					<Slider {...settings}>
						<div className="text-center">
							{" "}
							<Image
								src="/assets/bootstrap.png"
								alt="Apple"
								width={500}
								height={500}
								className="img-fluid mx-2 px-5"
							/>{" "}
							<h3 className="py-3">Bootstrap</h3>
						</div>
						<div className="text-center">
							<Image
								src="/assets/canva.png"
								alt="Apple"
								width={500}
								height={500}
								className="img-fluid mx-2 px-5"
							/>
							<h3>Canva</h3>
						</div>
						<div className="text-center">
							<Image
								src="/assets/git.png"
								alt="Apple"
								width={500}
								height={500}
								className="img-fluid mx-2 px-5"
							/>{" "}
							<h3 className="py-3">Git</h3>
						</div>
						<div className="text-center">
							<Image
								src="/assets/googleanalytics.png"
								alt="Apple"
								width={500}
								height={500}
								className="img-fluid mx-2 px-5"
							/>{" "}
							<h3 className="py-3">Analytics</h3>
						</div>
						<div className="text-center">
							<Image
								src="/assets/netlify.png"
								alt="Apple"
								width={500}
								height={500}
								className="img-fluid mx-2 px-5"
							/>{" "}
							<h3 className="py-3">Netlify</h3>
						</div>
						<div className="text-center">
							<Image
								src="/assets/next.png"
								alt="Apple"
								width={500}
								height={500}
								className="img-fluid mx-2 px-5"
							/>{" "}
							<h3 className="py-3">Next</h3>
						</div>
						<div className="text-center">
							<Image
								src="/assets/react.png"
								alt="Apple"
								width={500}
								height={500}
								className="img-fluid mx-2 px-5"
							/>{" "}
							<h3 className="py-3">React</h3>
						</div>
					</Slider>
				</Col>
			</Row>
		</Container>
	);
};

export default TechBar;
