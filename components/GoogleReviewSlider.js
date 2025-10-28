import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

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
		<div className="my-4 text-center">
			<Card
				className="shadow-sm p-4 mx-auto"
				style={{
					maxWidth: "480px",
					backgroundColor: "rgba(255,255,255,0.06)",
					border: "1px solid rgba(255,255,255,0.15)",
				}}
			>
				<div style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>
					{"⭐".repeat(r.stars)}
				</div>

				<p style={{ fontSize: "1rem", opacity: 0.95, lineHeight: 1.5 }}>
					„{r.text}“
				</p>

				<p className="mt-2 fw-semibold" style={{ opacity: 0.85 }}>
					– {r.name}
				</p>
			</Card>

			<div className="d-flex justify-content-center mt-3 gap-2">
				{reviews.map((_, i) => (
					<span
						key={i}
						onClick={() => setIndex(i)}
						style={{
							width: "9px",
							height: "9px",
							borderRadius: "50%",
							cursor: "pointer",
							backgroundColor:
								i === index ? "#00eaff" : "rgba(255,255,255,0.3)",
							transition: "all 0.3s",
						}}
					/>
				))}
			</div>
		</div>
	);
}
