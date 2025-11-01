"use client";
import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

const REVIEW_LINK = "https://share.google/H99Pkw7ISptviG5BL";

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

export default function GoogleReviews() {
	const trackRef = useRef(null);
	const [paused, setPaused] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	// Detect mobile viewport
	useEffect(() => {
		const check = () => setIsMobile(window.innerWidth < 768);
		check();
		window.addEventListener("resize", check);
		return () => window.removeEventListener("resize", check);
	}, []);

	// Infinite scroll only on desktop
	useEffect(() => {
		if (isMobile) return;

		const el = trackRef.current;
		if (!el) return;

		let pos = 0;
		let raf;
		const speed = 0.3;

		const loop = () => {
			if (!paused) {
				pos -= speed;
				el.style.transform = `translateX(${pos}px)`;

				const first = el.children[0];
				const firstWidth = first.offsetWidth + 24;
				if (Math.abs(pos) >= firstWidth) {
					el.appendChild(first);
					pos += firstWidth;
				}
			}
			raf = requestAnimationFrame(loop);
		};

		loop();
		return () => cancelAnimationFrame(raf);
	}, [paused, isMobile]);

	return (
		<section
			id="google-reviews"
			className="py-5 position-relative"
			onMouseEnter={() => !isMobile && setPaused(true)}
			onMouseLeave={() => !isMobile && setPaused(false)}
		>
			<Container fluid className="px-0">
				<Row className="text-center mb-4 justify-content-center">
					<Col lg={8}>
						<h2 className="fw-bold display-6 mb-2">Google Bewertungen</h2>
						<p>Vertrauen durch echte Kundenstimmen</p>
					</Col>
				</Row>

				<div
					className={`reviews-wrapper my-5 ${
						isMobile ? "mobile-mode" : "desktop-mode"
					}`}
				>
					<div className="reviews-track py-2" ref={trackRef}>
						{[...REVIEWS, ...REVIEWS, ...REVIEWS].map((r, i) => (
							<Card key={i} className="review-card text-center mx-3">
								<div className="google-icon-wrapper mx-auto mt-3">
									<Image
										src="/assets/google-icon.png"
										width={32}
										height={32}
										alt="Google"
										loading="lazy"
									/>
								</div>
								<Card.Body>
									<h5 className="fw-bold mt-2 mb-1 reviewer-name text-black ">
										{r.name}
									</h5>
									<div className="stars text-warning mb-2">★★★★★</div>
									<blockquote className="review-text text-black fst-italic mb-0">
										“{r.text}”
									</blockquote>
								</Card.Body>
							</Card>
						))}
					</div>
				</div>

				<div className="text-center mt-5">
					<Button
						as={Link}
						href={REVIEW_LINK}
						target="_blank"
						rel="noopener noreferrer"
						className="btn-outline-glass text-white"
					>
						Weitere Bewertungen auf Google →
					</Button>
				</div>
			</Container>

			<style jsx>{`
				/* === Wrapper === */
				.reviews-wrapper {
					position: relative;
					overflow: visible;
					padding: 0 6vw;
					mask-image: linear-gradient(
						to right,
						transparent,
						black 10%,
						black 90%,
						transparent
					);
					-webkit-mask-image: linear-gradient(
						to right,
						transparent,
						black 10%,
						black 90%,
						transparent
					);
				}

				/* === Track === */
				.reviews-track {
					display: flex;
					gap: 1.5rem;
					align-items: stretch;
					will-change: transform;
					transform: translateX(0);
					transition: transform 0.1s linear;
				}

				/* === Mobile scroll version === */
				.mobile-mode .reviews-track {
					overflow-x: auto;
					scroll-snap-type: x mandatory;
					transform: none !important;
					-webkit-overflow-scrolling: touch;
				}
				.mobile-mode .review-card {
					scroll-snap-align: center;
				}

				/* === Karta === */
				.review-card {
					flex: 0 0 320px;
					background: transparent;
					border-radius: 18px;
					border: 1px solid rgba(255, 255, 255, 0.08);
					backdrop-filter: blur(4px);
					transition: transform 0.4s ease, box-shadow 0.3s ease;
					box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
					transform-origin: center center;
					z-index: 1;
				}

				.review-card:hover {
					transform: scale(1.06);
					box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
					z-index: 3;
				}

				/* === Teksty === */
				.review-text {
					line-height: 1.5;
					font-size: 0.95rem;
					color: var(--card-text);
				}

				.reviewer-name {
					color: var(--text-color);
				}

				/* === Przycisk === */
				.btn-outline-glass {
					border: 1px solid rgba(255, 255, 255, 0.25);
					background: rgba(255, 255, 255, 0.05);
					backdrop-filter: blur(6px);
					color: var(--text-color);
					transition: all 0.3s ease;
				}

				.btn-outline-glass:hover {
					background: rgba(255, 255, 255, 0.15);
				}

				/* === Theme colors === */
				:global(html[data-theme="dark"]) {
					--text-color: #fff;
					--card-text: #eee;
				}

				:global(html[data-theme="light"]) {
					--text-color: #111;
					--card-text: #111;
				}

				/* === Responsywność === */
				@media (max-width: 991px) {
					.reviews-wrapper {
						padding: 0 3vw;
					}
					.review-card {
						flex: 0 0 260px;
					}
				}

				@media (max-width: 600px) {
					.reviews-wrapper {
						padding: 0 2vw;
					}
					.review-card {
						flex: 0 0 240px;
					}
				}
			`}</style>
		</section>
	);
}
