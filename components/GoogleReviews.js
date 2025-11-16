"use client";

import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MotionFadeIn from "@/components/MotionFadeIn";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";

const REVIEW_LINK = "https://share.google/H99Pkw7ISptviG5BL";

const REVIEWS = [
	{
		name: "Karolina C.",
		text: "Sehr netter und professioneller Service. Bereit in der Zukunft 👍",
		stars: 5,
	},
	{
		name: "Addie S.",
		text: "Only 5 stars because I can't give 10. Fast, reliable, professional – and wallet-friendly!",
		stars: 5,
	},
	{
		name: "Sven M.",
		text: "Von Anfang bis Ende top! Klare Kommunikation und modernes Design. Unsere Website lädt jetzt doppelt so schnell.",
		stars: 5,
	},
	{
		name: "Mariusz P.",
		text: "Open minded and professional advice leading to creative and unique projects. Check it, you will not regret!",
		stars: 5,
	},
];

export default function GoogleReviews() {
	const scrollRef = useRef(null);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 992);
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Auto-scroll desktop
	useEffect(() => {
		if (isMobile) return;
		const track = scrollRef.current;
		if (!track) return;

		let raf;
		let scrollPos = 0;
		const speed = 1.3;

		const animate = () => {
			scrollPos += speed;
			if (scrollPos >= track.scrollWidth / 2) scrollPos = 0;
			track.scrollLeft = scrollPos;
			raf = requestAnimationFrame(animate);
		};
		raf = requestAnimationFrame(animate);

		return () => cancelAnimationFrame(raf);
	}, [isMobile]);

	const scrollNext = () => {
		const container = scrollRef.current;
		if (container) container.scrollBy({ left: 280, behavior: "smooth" });
	};

	const scrollPrev = () => {
		const container = scrollRef.current;
		if (container) container.scrollBy({ left: -280, behavior: "smooth" });
	};

	return (
		<section className="review-section techbar">
			<MotionFadeIn threshold={0.2}>
				<Container fluid className="my-3">
					<Row className="justify-content-center text-center mb-4">
						<Col lg={12}>
							<h2 className="section-title">⭐ Google Bewertungen</h2>{" "}
							<div className="review-icon my-2">
								<Image
									src="/assets/google-icon.png"
									alt="Google"
									width={36}
									height={36}
								/>
							</div>
							<p className="section-subtitle">
								Vertrauen durch echte Kundenstimmen
							</p>
						</Col>
					</Row>

					<div className="review-wrapper">
						<div className="review-track" ref={scrollRef}>
							{[...REVIEWS, ...REVIEWS].map((r, i) => (
								<a
									key={i}
									href={REVIEW_LINK}
									target="_blank"
									rel="noopener noreferrer"
									className="review-card social-card"
									aria-label={`Google review by ${r.name}`}
								>
									<div className="review-info pt-2">
										<h5 className="text-bold">{r.name}</h5>
										<div className="stars">
											{"★".repeat(r.stars)}
											{"☆".repeat(5 - r.stars)}
										</div>
										<p>{r.text}</p>
									</div>
								</a>
							))}
						</div>

						{/* MOBILE ARROWS */}
						{isMobile && (
							<div className="mobile-arrows">
								<button className="scroll-arrow" onClick={scrollPrev}>
									<AiOutlineArrowRight
										style={{ transform: "rotate(180deg)" }}
									/>
								</button>

								<button className="scroll-arrow" onClick={scrollNext}>
									<AiOutlineArrowRight />
								</button>
							</div>
						)}
					</div>
				</Container>
			</MotionFadeIn>

			<style jsx>{`
				.techbar {
					background: var(--section-bg);
					color: var(--text-color);
					padding: 3.5rem 0;
					border-top: 1px solid rgba(255, 255, 255, 0.05);
					border-bottom: 1px solid rgba(255, 255, 255, 0.05);
				}

				.section-title {
					font-weight: 700;
					font-size: 1.6rem;
					margin-bottom: 0.5rem;
				}
				.section-subtitle {
					opacity: 0.85;
					margin-bottom: 2rem;
				}

				.review-wrapper {
					position: relative;
				}

				.review-track {
					display: flex;
					gap: 1.8rem;
					overflow-x: auto;
					scroll-behavior: smooth;
					scroll-snap-type: x mandatory;
					padding: 1rem 0 2rem;
				}

				.review-track::-webkit-scrollbar {
					display: none;
				}

				.review-card.social-card {
					min-width: 300px;
					height: 180px;
					background: var(--card-bg);
					border-radius: 22px;
					box-shadow: var(--card-shadow);
					backdrop-filter: blur(10px);
					border: 1px solid rgba(255, 255, 255, 0.08);
					display: flex;
					align-items: center;
					padding: 1rem 1.6rem;
					gap: 1.5rem;
					cursor: grab;
					scroll-snap-align: center;
					text-decoration: none !important;
				}

				.review-info p {
					opacity: 0.85;
				}

				.stars {
					color: #fbbc05;
				}

				/* MOBILE ARROWS */
				.mobile-arrows {
					display: flex;
					justify-content: center;
					align-items: center;
					gap: 1rem;
					margin-top: 0.3rem;
				}

				.mobile-arrows .scroll-arrow {
					width: 42px;
					height: 42px;
					border-radius: 14px;
					border: 1px solid rgba(255, 255, 255, 0.25);
					background: rgba(255, 255, 255, 0.15);
					backdrop-filter: blur(8px);
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 1.6rem;
					cursor: pointer;
					transition: all 0.25s ease;
				}

				.mobile-arrows .scroll-arrow:hover {
					background: rgba(255, 255, 255, 0.25);
					transform: scale(1.12);
				}

				/* DESKTOP */
				@media (min-width: 992px) {
					.review-track {
						overflow-x: hidden;
					}
					.review-card.social-card {
						min-width: 31.5vw;
					}
				}
			`}</style>
		</section>
	);
}
