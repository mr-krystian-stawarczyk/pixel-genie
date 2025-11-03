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

	// ✅ Auto-scroll desktop
	useEffect(() => {
		if (isMobile) return;
		const track = scrollRef.current;
		if (!track) return;

		let raf;
		let scrollPos = 0;
		const speed = 1.3; // 🔹 prędkość płynnego ruchu

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

	return (
		<section className="review-section techbar">
			<MotionFadeIn threshold={0.2}>
				<Container fluid className="my-3 ">
					<Row className="justify-content-center text-center mb-4">
						<Col lg={12}>
							<h2 className="section-title">⭐ Google Bewertungen</h2>
							<p className="section-subtitle">
								Vertrauen durch echte Kundenstimmen
							</p>
						</Col>
					</Row>

					<div className="review-wrapper ">
						<div className="review-track " ref={scrollRef}>
							{[...REVIEWS, ...REVIEWS].map((r, i) => (
								<a
									key={i}
									href={REVIEW_LINK}
									target="_blank"
									rel="noopener noreferrer"
									className="review-card social-card shadow-md"
									aria-label={`Google review by ${r.name}`}
								>
									<div className="review-icon ">
										<Image
											src="/assets/google-icon.png"
											alt="Google"
											width={36}
											height={36}
										/>
									</div>
									<div className="review-info">
										<h5>{r.name}</h5>
										<div className="stars">
											{"★".repeat(r.stars)}
											{"☆".repeat(5 - r.stars)}
										</div>
										<p>{r.text}</p>
									</div>
								</a>
							))}
						</div>

						{/* ▶️ Strzałka przewijania – tylko mobile */}
						{isMobile && (
							<button
								className="scroll-arrow"
								onClick={scrollNext}
								aria-label="Mehr anzeigen"
							>
								<AiOutlineArrowRight />
							</button>
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
					overflow: hidden;
					position: relative;
				}

				.section-title {
					font-weight: 700;
					font-size: 1.6rem;
					text-transform: uppercase;
					letter-spacing: 0.03em;
					margin-bottom: 0.5rem;
					color: var(--text-color);
				}

				.section-subtitle {
					font-size: 1rem;
					opacity: 0.85;
					margin-bottom: 2rem;
				}

				.review-wrapper {
					position: relative;
				}

				.review-track {
					display: flex;
					gap: 1.8rem;
					align-items: center;
					overflow-x: auto;
					scroll-behavior: smooth;
					scroll-snap-type: x mandatory;
					-webkit-overflow-scrolling: touch;
					scrollbar-width: none;
					padding: 1rem 0 2rem;
				}
				.review-track::-webkit-scrollbar {
					display: none;
				}

				.review-card.social-card {
					scroll-snap-align: center;
					min-width: 300px;
					height: 180px;
					background: var(--card-bg);
					border-radius: 22px;
					box-shadow: var(--card-shadow);
					backdrop-filter: blur(10px);
					border: 1px solid rgba(255, 255, 255, 0.08);
					display: flex;
					align-items: center;
					justify-content: flex-start;
					text-decoration: none;
					color: var(--text-color);
					padding: 1rem 1.6rem;
					gap: 1.5rem;
					transition: all 0.35s ease;
					flex-shrink: 0;
					cursor: grab;
				}
				.review-card.social-card:hover {
					transform: translateY(-4px) scale(1.03);
					box-shadow: var(--card-shadow-hover);
				}

				.review-icon {
					width: 60px;
					height: 60px;
					display: flex;
					align-items: center;
					justify-content: center;
					background: rgba(255, 255, 255, 0.1);
					border-radius: 50%;
					box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
					flex-shrink: 0;
				}

				.review-info {
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					justify-content: center;
					gap: 0.3rem;
				}
				.review-info h5 {
					margin: 0;
					font-size: 1.15rem;
					font-weight: 600;
				}
				.review-info p {
					margin: 0;
					font-size: 0.9rem;
					line-height: 1.4;
					opacity: 0.85;
					font-style: italic;
				}
				.stars {
					color: #fbbc05;
					font-size: 1rem;
					letter-spacing: 1px;
				}

				.scroll-arrow {
					position: absolute;
					right: 0.6rem;
					top: 45%;
					transform: translateY(-50%);
					width: 44px;
					height: 44px;
					border-radius: 50%;
					border: none;
					background: rgba(255, 255, 255, 0.12);
					backdrop-filter: blur(6px);
					display: flex;
					align-items: center;
					justify-content: center;
					color: var(--text-color);
					font-size: 1.8rem;
					cursor: pointer;
					transition: all 0.3s ease;
					z-index: 10;
				}
				.scroll-arrow:hover {
					background: rgba(255, 255, 255, 0.2);
					transform: translateY(-50%) scale(1.08);
				}

				@media (max-width: 768px) {
					.review-card.social-card {
						min-width: 250px;
						height: 160px;
						padding: 0.8rem 1.2rem;
						gap: 1rem;
					}
					.review-icon {
						width: 54px;
						height: 54px;
					}
					.section-title {
						font-size: 1.3rem;
					}
					.section-subtitle {
						font-size: 0.9rem;
						margin-bottom: 1rem;
					}
					.review-info h5 {
						font-size: 1rem;
					}
					.review-info p {
						font-size: 0.8rem;
					}
				}
			`}</style>
		</section>
	);
}
