import React from "react";
import { Container, Row } from "react-bootstrap";
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
						<Image
							src="/assets/webagentur-nettetal-bootstrap-seo.png"
							alt="webagentur-nettetal-bootstrap-seo"
							width={100}
							height={100}
							className="img-fluid mx-auto"
							priority
						/>
					</div>
					<div className="text-center">
						<Image
							src="/assets/webagentur-nettetal-canva-design.png"
							alt="webagentur-nettetal-canva-design"
							width={100}
							height={100}
							className="img-fluid mx-auto"
							priority
						/>
					</div>
					<div className="text-center">
						<Image
							src="/assets/webagentur-nettetal-git-entwicklung.png"
							alt="webagentur-nettetal-git-webentwicklung.png"
							width={100}
							height={100}
							className="img-fluid mx-auto"
							priority
						/>
					</div>
					<div className="text-center">
						<Image
							src="/assets/webagentur-nettetal-google-analytics-seo.png"
							alt="webagentur-nettetal-google-analytics-seo"
							width={100}
							height={100}
							className="img-fluid mx-auto"
							priority
						/>
					</div>
					<div className="text-center">
						<Image
							src="/assets/webagentur-nettetal-netlify-webentwicklung-seo.png"
							alt="webagentur-nettetal-netlify-webentwicklung-seo"
							width={100}
							height={100}
							className="img-fluid mx-auto"
							priority
						/>
					</div>
					<div className="text-center">
						<Image
							src="/assets/webagentur-nettetal-nextjs-webentwicklung-seo.png"
							alt="webagentur-nettetal-nextjs-webentwicklung-seo"
							width={100}
							height={100}
							className="img-fluid mx-auto"
							priority
						/>
					</div>
					<div className="text-center">
						<Image
							src="/assets/webagentur-nettetal-reactjs-webentwicklung-seo.png"
							alt="webagentur-nettetal-reactjs-webentwicklung-seo"
							width={100}
							height={100}
							className="img-fluid mx-auto"
							priority
						/>
					</div>
				</Slider>
			</Row>
		</Container>
	);
};

export default TechBar;
