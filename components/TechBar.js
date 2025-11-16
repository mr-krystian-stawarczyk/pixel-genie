"use client";

import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MotionFadeIn from "@/components/MotionFadeIn";
import {
	AiOutlineFacebook,
	AiFillLinkedin,
	AiOutlineArrowRight,
} from "react-icons/ai";
import { FaTwitter, FaMedium } from "react-icons/fa";

export default function TechBar() {
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
		const speed = 2.0;

		const animate = () => {
			scrollPos += speed;
			if (scrollPos >= track.scrollWidth / 2) scrollPos = 0;
			track.scrollLeft = scrollPos;
			raf = requestAnimationFrame(animate);
		};
		raf = requestAnimationFrame(animate);

		return () => cancelAnimationFrame(raf);
	}, [isMobile]);

	const socials = [
		{
			name: "Facebook",
			icon: <AiOutlineFacebook style={{ color: "#1877f2" }} />,
			url: "https://www.facebook.com/profile.php?id=100090817536941",
		},
		{
			name: "LinkedIn",
			icon: <AiFillLinkedin style={{ color: "#0077b5" }} />,
			url: "https://www.linkedin.com/company/pixel-genie-de/?viewAsMember=true",
		},
		{
			name: "X (Twitter)",
			icon: <FaTwitter style={{ color: "#000000" }} />,
			url: "https://x.com/PixelGenieWeb",
		},
		{
			name: "Medium",
			icon: <FaMedium style={{ color: "#00ab6c" }} />,
			url: "https://medium.com/@pixelgenie.marketing",
		},
	];

	const scrollNext = () => {
		const container = scrollRef.current;
		if (container) container.scrollBy({ left: 250, behavior: "smooth" });
	};

	const scrollPrev = () => {
		const container = scrollRef.current;
		if (container) container.scrollBy({ left: -250, behavior: "smooth" });
	};

	return (
		<section className="review-section techbar">
			<MotionFadeIn threshold={0.2}>
				<Container fluid>
					<Row className="justify-content-center text-center mb-4">
						<Col lg={12}>
							<h2 className="section-title">🌐 Sie finden uns auf</h2>
						</Col>
					</Row>

					<div className="review-wrapper">
						<div className="review-track" ref={scrollRef}>
							{[...socials, ...socials].map((item, index) => (
								<a
									key={index}
									href={item.url}
									target="_blank"
									rel="noopener noreferrer"
									className="review-card social-card"
									aria-label={item.name}
								>
									<div className="social-icon">{item.icon}</div>
									<div className="social-info">
										<h5>{item.name}</h5>
										<p>Besuchen Sie uns</p>
									</div>
								</a>
							))}
						</div>

						{/* Mobile arrows */}
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
					overflow: hidden;
					position: relative;
				}
				.section-title {
					font-weight: 700;
					font-size: 1.6rem;
					text-transform: uppercase;
					letter-spacing: 0.03em;
					margin-bottom: 2rem;
					color: var(--text-color);
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
					min-width: 280px;
					height: 140px;
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
					padding: 0 1.6rem;
					gap: 1.5rem;
					transition: all 0.35s ease;
					flex-shrink: 0;
					cursor: grab;
				}
				.review-card.social-card:hover {
					transform: translateY(-4px) scale(1.03);
					box-shadow: var(--card-shadow-hover);
				}

				.social-icon {
					font-size: 2.9rem;
					display: flex;
					align-items: center;
					justify-content: center;
					width: 70px;
					height: 70px;
					border-radius: 50%;
					background: rgba(255, 255, 255, 0.1);
					box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
				}

				.social-info {
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					justify-content: center;
				}
				.social-info h5 {
					margin: 0;
					font-size: 1.15rem;
					font-weight: 600;
				}
				.social-info p {
					margin: 0;
					font-size: 0.9rem;
					opacity: 0.8;
				}

				/* Mobile arrows */
				.mobile-arrows {
					display: flex;
					justify-content: center;
					align-items: center;
					margin-top: 0.2rem;
					gap: 1rem;
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
					color: var(--text-color);
					cursor: pointer;
					transition: all 0.25s ease;
				}

				.mobile-arrows .scroll-arrow:hover {
					background: rgba(255, 255, 255, 0.25);
					transform: scale(1.12);
				}

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
