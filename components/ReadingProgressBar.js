"use client";
import { useEffect, useState } from "react";

export default function ReadingProgressBar() {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const updateProgress = () => {
			const scrollTop = window.scrollY;
			const height = document.body.scrollHeight - window.innerHeight;
			const p = (scrollTop / height) * 100;
			setProgress(p);
		};

		window.addEventListener("scroll", updateProgress);
		return () => window.removeEventListener("scroll", updateProgress);
	}, []);

	return (
		<div
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				height: "5px",
				width: `${progress}%`,
				background: "#007bff",
				boxShadow: "0 0 10px rgba(0,123,255,0.7)",
				zIndex: 3000,
				transition: "width .15s ease",
			}}
		/>
	);
}
