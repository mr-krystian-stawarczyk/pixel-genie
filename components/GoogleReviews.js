"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Image from "next/image";

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
						<h2 className="fw-bold display-6 mb-2">Google Bewertungen</h2>
						<p>Vertrauen durch echte Kundenstimmen</p>
					</Col>
				</Row>

				{/* ✅ CSS Scroll Snap – brak JS, ultra lekki */}
				{inView && (
					<div className="reviews-snap">
						<div className="reviews-track">
							{[...REVIEWS, ...REVIEWS].map((r, i) => (
								<Card
									key={i}
									className="review-card glass-tile text-center mx-auto"
								>
									<div className="google-icon-wrapper mx-auto mt-3">
										<Image
											src="/assets/google-icon.png"
											width={30}
											height={30}
											alt="Google"
											loading="lazy"
										/>
									</div>
									<Card.Body>
										<h5 className="fw-bold mt-2 text-black">{r.name}</h5>
										<div className="stars" aria-label="5 Sterne">
											★★★★★
										</div>
										<blockquote className="review-text fst-italic mt-2 mb-0">
											“{r.text}”
										</blockquote>
									</Card.Body>
								</Card>
							))}
						</div>
					</div>
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
						<span style={{ color: "var(--text-color)" }}>
							Weitere Bewertungen auf Google →
						</span>
					</Button>
				</div>
			</Container>

			{/* ✅ Własny CSS wewnętrzny – możesz też przenieść do globals.css */}
			<style jsx>{`
				.reviews-snap {
					display: grid;
					grid-auto-flow: column;
					grid-auto-columns: 85%;
					overflow-x: auto;
					scroll-snap-type: x mandatory;
					gap: 16px;
					padding: 10px 0 20px;
				}
				.review-card {
					scroll-snap-align: start;
					min-width: 280px;
					background-color: rgba(255, 255, 255, 0.08);
					border: 1px solid rgba(255, 255, 255, 0.15);
					border-radius: 14px;
					transition: transform 0.3s ease;
				}
				.review-card:hover {
					transform: translateY(-3px);
				}
				.stars {
					color: #ffd700;
					font-size: 1.1rem;
				}
				@media (min-width: 768px) {
					.reviews-snap {
						grid-auto-columns: 45%;
					}
				}
				@media (min-width: 1200px) {
					.reviews-snap {
						grid-auto-columns: 30%;
					}
				}
			`}</style>
		</motion.section>
	);
}
