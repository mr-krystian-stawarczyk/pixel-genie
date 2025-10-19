import React from "react";
import { Container, Row } from "react-bootstrap";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

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
		<Container fluid>
			<Row className="justify-content-center align-items-center text-center bg-blue my-3 py-3">
				<Slider {...settings}>
					<div className="text-center">
						<Image
							src="/assets/webseiten-nettetal-google-business-seo.png"
							alt="webagentur-nettetal-bootstrap-seo"
							width={100}
							height={100}
							className="img-fluid mx-auto"
							loading="lazy"
						/>
						<h3 className="techbar-title">Google Business</h3>
					</div>
					<div className="text-center">
						<Image
							src="/assets/webseiten-nettetal-facebookads-seo-pixelgenie.png"
							alt="webagentur-nettetal-canva-design"
							width={100}
							height={100}
							className="img-fluid mx-auto"
							loading="lazy"
						/>
						<h3 className="techbar-title">Facebook Ads</h3>
					</div>
					<div className="text-center">
						<Image
							src="/assets/pixelgenie-nettetal-webseiten-wentwicklung-seo-optimierung.png"
							alt="webagentur-nettetal-git-webentwicklung.png"
							width={100}
							height={100}
							className="img-fluid mx-auto"
							loading="lazy"
						/>
						<h3 className="techbar-title">SEO Optimierung</h3>
					</div>
					<div className="text-center">
						<Image
							src="/assets/webagentur-nettetal-google-analytics-seo.png"
							alt="webagentur-nettetal-google-analytics-seo"
							width={100}
							height={100}
							className="img-fluid mx-auto"
							loading="lazy"
						/>
						<h3 className="techbar-title">Google Analytics</h3>
					</div>
					<div className="text-center">
						<Image
							src="/assets/webagentur-nettetal-webseiten-webentwicklung-design-photoshop.png"
							alt="webagentur-nettetal-netlify-webentwicklung-seo"
							width={100}
							height={100}
							className="img-fluid mx-auto"
							loading="lazy"
						/>
						<h3 className="techbar-title">Webdesign</h3>
					</div>
					<div className="text-center">
						<Image
							src="/assets/webagentur-nettetal-webseiten-webentwicklung-ecommerce.png"
							alt="webagentur-nettetal-nextjs-webentwicklung-seo"
							width={100}
							height={100}
							className="img-fluid mx-auto"
							loading="lazy"
						/>
						<h3 className="techbar-title">Stripe Online Bezahlung</h3>
					</div>
					<div className="text-center">
						<Image
							src="/assets/webagentur-nettetal-webseiten-webentwicklung-seo.png"
							alt="webagentur-nettetal-reactjs-webentwicklung-seo"
							width={100}
							height={100}
							className="img-fluid mx-auto"
							loading="lazy"
						/>
						<h3 className="techbar-title">React Programmierung</h3>
					</div>
				</Slider>
			</Row>
		</Container>
	);
};

export default TechBar;
