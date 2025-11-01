"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

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
		label: "E-Commerce",
	},
	{
		icon: "/assets/webagentur-nettetal-webseiten-webentwicklung-seo.png",
		label: "React",
	},
];

export default function TechBar() {
	const ref = useRef(null);

	useEffect(() => {
		const track = ref.current;
		if (!track) return;
		let offset = 0;
		let raf;
		const loop = () => {
			offset -= 0.5;
			if (Math.abs(offset) >= track.scrollWidth / 2) offset = 0;
			track.style.transform = `translateX(${offset}px)`;
			raf = requestAnimationFrame(loop);
		};
		loop();
		return () => cancelAnimationFrame(raf);
	}, []);

	return (
		<section className="techbar-section">
			<div className="techbar-track" ref={ref}>
				{[...DATA, ...DATA, ...DATA].map((item, idx) => (
					<div key={idx} className="tech-item">
						<Image
							src={item.icon}
							alt={item.label}
							width={52}
							height={52}
							loading="lazy"
						/>
						<span>{item.label}</span>
					</div>
				))}
			</div>

			<style jsx>{`
				.techbar-section {
					width: 100%;
					overflow: hidden;
					background: var(--tech-bg);
					backdrop-filter: blur(10px);
					border-top: 1px solid rgba(255, 255, 255, 0.05);
					border-bottom: 1px solid rgba(255, 255, 255, 0.05);
					padding: 1rem 0;
				}
				.techbar-track {
					display: flex;
					align-items: center;
					gap: 2.5rem;
					will-change: transform;
				}
				.tech-item {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					min-width: 110px;
					color: var(--tech-color);
					transition: transform 0.3s ease;
				}
				.tech-item:hover {
					transform: scale(1.1);
				}
				:global(html[data-theme="dark"]) {
					--tech-bg: rgba(10, 10, 15, 0.9);
					--tech-color: #fff;
				}
				:global(html[data-theme="light"]) {
					--tech-bg: rgba(255, 255, 255, 0.95);
					--tech-color: #000;
				}
			`}</style>
		</section>
	);
}
