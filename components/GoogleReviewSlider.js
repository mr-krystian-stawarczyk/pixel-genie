"use client";
import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

/**
 * ✅ Statyczna lista opinii – 100% kompatybilna z SSR.
 */
const reviews = [
	{
		name: "Karolina C.",
		text: "Sehr netter und professioneller Service. Bereit in der Zukunft 👍",
		stars: 5,
	},
	{
		name: "Addie S.",
		text: "Only 5 stars because I can't give 10. Fast, reliable, professional – all that while being wallet-friendly!",
		stars: 5,
	},
	{
		name: "Sven M.",
		text: "Von Anfang bis Ende top! Klare Kommunikation und modernes Design. Unsere Website lädt jetzt doppelt so schnell.",
		stars: 5,
	},
	{
		name: "Mariusz P.",
		text: "Open minded and professional advices leading to creative and unique projects. Check it, you will not regret!",
		stars: 5,
	},
];

export default function GoogleReviewSlider() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setIndex((prev) => (prev + 1) % reviews.length);
		}, 5000);
		return () => clearInterval(timer);
	}, []);

	const r = reviews[index];

	return (
		<div className="my-5 text-center fade-review-wrapper">
			<Card
				key={index}
				className="review-card mx-auto shadow-sm p-4 fade-review"
			>
				<div className="stars-wrapper mb-2">{"⭐".repeat(r.stars)}</div>

				<p className="review-text mb-3">„{r.text}“</p>

				<p className="fw-semibold reviewer-name">– {r.name}</p>
			</Card>

			<div className="d-flex justify-content-center mt-3 gap-2">
				{reviews.map((_, i) => (
					<span
						key={i}
						onClick={() => setIndex(i)}
						className={`dot ${i === index ? "active" : ""}`}
					/>
				))}
			</div>
		</div>
	);
}
