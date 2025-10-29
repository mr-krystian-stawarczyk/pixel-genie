"use client";
import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const REVIEW_LINK =
	"https://www.google.com/search?q=pixel+genie+nettetal&ludocid=13238374149558357979#lrd=0x47c74dec2e1b84e7:0xb7d4548932d3176b,1,,,";

const REVIEWS = [
	{
		name: "Karolina C.",
		text: "Sehr netter und professioneller Service. Bereit in der Zukunft 👍",
	},
	{
		name: "Addie S.",
		text: "Only 5 stars because I can't give 10. Fast, reliable, professional – and wallet-friendly!",
	},
	{
		name: "Sven M.",
		text: "Von Anfang bis Ende top! Klare Kommunikation und modernes Design. Unsere Website lädt jetzt doppelt so schnell.",
	},
	{
		name: "Mariusz P.",
		text: "Open minded and professional advice leading to creative and unique projects. Check it, you will not regret!",
	},
];

const sliderSettings = {
	dots: true,
	infinite: true,
	speed: 600,
	arrows: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 4500,
	centerPadding: "10px",
	responsive: [
		{ breakpoint: 1200, settings: { slidesToShow: 2 } },
		{ breakpoint: 768, settings: { slidesToShow: 1 } },
	],
};

export default function GoogleReviews() {
	const ref = useRef(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const obs = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true);
					obs.disconnect();
				}
			},
			{ threshold: 0.25 }
		);

		obs.observe(el);
		return () => obs.disconnect();
	}, []);

	return (
		<motion.section
			id="google-reviews"
			ref={ref}
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7, ease: "easeOut" }}
			viewport={{ once: true }}
			className="pb-5 pt-2"
		>
			<Container>
				<Row className="text-center mb-4">
					<Col>
						<h2 className="fw-bold display-6 mb-2 ">Google Bewertungen</h2>
						<p className="">Vertrauen durch echte Kundenstimmen</p>
					</Col>
				</Row>

				{inView && (
					<Slider {...sliderSettings}>
						{REVIEWS.map((r, i) => (
							<div className="p-3" key={i}>
								<figure className="review-tile glass-tile mx-auto">
									{/* Google Badge */}
									<div className="google-icon-wrapper">
										<Image
											src="/assets/google-icon.png"
											width={30}
											height={30}
											alt="Google"
										/>
									</div>

									{/* Reviewer */}
									<h5 className="fw-bold mt-2">{r.name}</h5>

									{/* Stars */}
									<span className="stars" aria-label="5 Sterne">
										★★★★★
									</span>

									{/* Text */}
									<blockquote className="review-text fst-italic mt-2 mb-0">
										“{r.text}”
									</blockquote>
								</figure>
							</div>
						))}
					</Slider>
				)}

				{/* CTA */}
				<div className="text-center mt-4">
					<Button
						variant="outline-primary"
						className="text-white glass-button"
						href={REVIEW_LINK}
						target="_blank"
						rel="noopener noreferrer"
					>
						Weitere Bewertungen auf Google →
					</Button>
				</div>
			</Container>
		</motion.section>
	);
}
