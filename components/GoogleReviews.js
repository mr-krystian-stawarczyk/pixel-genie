"use client";
import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

const REVIEW_LINK =
	"https://www.google.com/search?sca_esv=a844ed52de55440e&sxsrf=AE3TifN3y1fxVE_WbjmvsF7dPhrap5Ktdw:1762021565611&kgmid=/g/11kk7451mc&q=Pixel-Genie+Webagentur,+Webseiten&shndl=30&shem=lcuae,uaasie,shrtsdl&source=sh/x/loc/uni/m1/1&kgs=8927d6c794ea4c37&utm_source=lcuae,uaasie,shrtsdl,sh/x/loc/uni/m1/1&sei=yVAGaaXXB4Crxc8PvvLpyQU";

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

	useEffect(() => {
		const el = trackRef.current;
		if (!el) return;
		let pos = 0;
		let raf;
		const animate = () => {
			pos += 0.3;
			if (pos >= el.scrollWidth / 2) pos = 0;
			el.scrollLeft = pos;
			raf = requestAnimationFrame(animate);
		};
		animate();
		return () => cancelAnimationFrame(raf);
	}, []);

	return (
		<section id="google-reviews" className="py-5 position-relative">
			<Container>
				<Row className="text-center mb-4">
					<Col>
						<h2 className="fw-bold display-6 mb-2">Google Bewertungen</h2>
						<p>Vertrauen durch echte Kundenstimmen</p>
					</Col>
				</Row>

				<div className="reviews-slider" ref={trackRef}>
					{[...REVIEWS, ...REVIEWS].map((r, i) => (
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
								<h5 className="fw-bold mt-2 mb-1 text-black">{r.name}</h5>
								<div className="stars text-warning mb-2">★★★★★</div>
								<blockquote className="review-text fst-italic mb-0">
									“{r.text}”
								</blockquote>
							</Card.Body>
						</Card>
					))}
				</div>

				<div className="text-center mt-4">
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
				.reviews-slider {
					display: flex;
					overflow-x: auto;
					scroll-snap-type: x mandatory;
					gap: 1rem;
					padding: 0.5rem 0 1.5rem;
				}
				.review-card {
					flex: 0 0 320px;
					scroll-snap-align: center;
					background: var(--card-bg);
					color: var(--card-text);
					border-radius: 16px;
					border: 1px solid rgba(255, 255, 255, 0.1);
					backdrop-filter: blur(8px);
					transition: transform 0.4s ease, background 0.3s ease;
				}
				.review-card:hover {
					transform: translateY(-6px);
					background: var(--card-bg-hover);
				}
				.btn-outline-glass {
					border: 1px solid rgba(255, 255, 255, 0.25);
					background: rgba(255, 255, 255, 0.05);
					color: var(--text-color);
					backdrop-filter: blur(10px);
				}

				:global(html[data-theme="dark"]) {
					--card-bg: rgba(30, 30, 35, 0.9);
					--card-bg-hover: rgba(255, 255, 255, 0.1);
					--card-text: #fff;
					--text-color: #fff;
				}

				:global(html[data-theme="light"]) {
					--card-bg: rgba(255, 255, 255, 0.9);
					--card-bg-hover: rgba(240, 240, 240, 0.95);
					--card-text: #111;
					--text-color: #111;
				}
			`}</style>
		</section>
	);
}
