"use client";
import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";

/**
 * ✅ Statyczna lista ikon technologii.
 * Zamiast react-slick – CSS scroll-snap (lekki, responsywny).
 */
const DATA = [
	{
		icon: "/assets/webseiten-nettetal-google-business-seo.png",
		label: "Google",
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
		label: "Analytics",
	},
	{
		icon: "/assets/webagentur-nettetal-webseiten-webentwicklung-design-photoshop.png",
		label: "Design",
	},
	{
		icon: "/assets/webagentur-nettetal-webseiten-webentwicklung-ecommerce.png",
		label: "Bezahlung",
	},
	{
		icon: "/assets/webagentur-nettetal-webseiten-webentwicklung-seo.png",
		label: "React",
	},
];

export default function TechBar() {
	return (
		<section className="py-4 techbar-section">
			<Container className="my-5">
				<div className="techbar-scroll">
					<div className="techbar-track">
						{[...DATA, ...DATA].map((item, idx) => (
							<div key={idx} className="tech-tile glass-tile text-center">
								<Image
									src={item.icon}
									alt={item.label}
									width={56}
									height={56}
									className="my-2"
									loading="lazy"
								/>
								<span style={{ color: "var(--text-color)" }}>{item.label}</span>
							</div>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
}
