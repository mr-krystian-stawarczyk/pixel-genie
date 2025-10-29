"use client";
import React from "react";
import { Container } from "react-bootstrap";
import dynamic from "next/dynamic";
import Image from "next/image";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const settings = {
	dots: false,
	infinite: true,
	speed: 450,
	arrows: false,
	slidesToShow: 6,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2500,
	pauseOnHover: false,
	swipeToSlide: true,
	responsive: [
		{ breakpoint: 1200, settings: { slidesToShow: 5 } },
		{ breakpoint: 992, settings: { slidesToShow: 4 } },
		{ breakpoint: 768, settings: { slidesToShow: 3 } },
		{ breakpoint: 576, settings: { slidesToShow: 2 } },
	],
};

const DATA = [
	{
		icon: "/assets/webseiten-nettetal-google-business-seo.png",
		label: "Google ",
	},
	{
		icon: "/assets/webseiten-nettetal-facebookads-seo-pixelgenie.png",
		label: "Ads",
	},
	{
		icon: "/assets/pixelgenie-nettetal-webseiten-wentwicklung-seo-optimierung.png",
		label: "SEO",
	},
	{
		icon: "/assets/webagentur-nettetal-google-analytics-seo.png",
		label: " Analytics",
	},
	{
		icon: "/assets/webagentur-nettetal-webseiten-webentwicklung-design-photoshop.png",
		label: " Design",
	},
	{
		icon: "/assets/webagentur-nettetal-webseiten-webentwicklung-ecommerce.png",
		label: "Bezahlung",
	},
	{
		icon: "/assets/webagentur-nettetal-webseiten-webentwicklung-seo.png",
		label: "React ",
	},
];

export default function TechBar() {
	return (
		<section className="py-4 techbar-section">
			<Container className="my-5">
				<Slider {...settings}>
					{DATA.map((item, idx) => (
						<div key={idx} className="px-2">
							<div className="glass-tile tech-tile text-center mx-auto">
								<Image
									src={item.icon}
									alt={item.label}
									width={56}
									height={56}
									className="my-2"
									loading="lazy"
								/>
								<span className="">{item.label}</span>
							</div>
						</div>
					))}
				</Slider>
			</Container>
		</section>
	);
}
