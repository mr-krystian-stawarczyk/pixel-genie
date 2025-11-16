"use client";
import React, { useState, useEffect, useMemo, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";

import {
	Container,
	Row,
	Col,
	Card,
	Button,
	ProgressBar,
} from "react-bootstrap";
import Image from "next/image";
import blogPosts from "@/data/blogPosts";
import BlogIndexListPro from "./BlogIndexListPro";
import { blogListJsonLd } from "@/lib/seoSchema";

const ContactModal = dynamic(() => import("@/components/ContactModal"), {
	ssr: false,
});
const SITE_ORIGIN = "https://pixel-genie.de";
const PAGE_URL = `${SITE_ORIGIN}/webdesignblog`;

const toDeDate = (iso) =>
	new Date(iso).toLocaleDateString("de-DE", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	});

const teaser = (article, len = 220) =>
	article.description?.length <= len
		? article.description
		: article.description?.slice(0, len) + "…";

/* === 🖤 AutoSlider v4 – dark theme + interactive progress bar === */
function AutoSlider({ posts, interval = 8000 }) {
	const [index, setIndex] = useState(0);
	const timeoutRef = useRef(null);
	const length = posts.length;

	const next = () => setIndex((prev) => (prev + 1) % length);
	const prev = () => setIndex((prev) => (prev - 1 + length) % length);

	// autoplay
	useEffect(() => {
		timeoutRef.current = setTimeout(next, interval);
		return () => clearTimeout(timeoutRef.current);
	}, [index]);

	// kliknięcie w progress bar
	const handleProgressClick = (e) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const clickX = e.clientX - rect.left;
		const clickedIndex = Math.floor((clickX / rect.width) * length);
		setIndex(clickedIndex);
	};

	const progress = ((index + 1) / length) * 100;

	return (
		<div className="auto-slider">
			{posts.map((post, i) => (
				<div key={post.slug} className={`slide ${i === index ? "active" : ""}`}>
					<Link href={`/tips/${post.slug}`} className="text-decoration-none">
						<div className="slide-content">
							<div className="img-box">
								<Image
									src={post.imgSrc || post.cover}
									alt={post.title}
									fill
									sizes="100vw"
									priority={i === 0}
									className="slide-img"
								/>
							</div>
							<div className="text-box">
								<h3 className="fw-bold mb-2">{post.title}</h3>
								<p className="small mb-2 opacity-75">
									{toDeDate(post.date)} · {post.readingTime}
								</p>
								<p className="teaser mb-3">{teaser(post, 200)}</p>
								<span className="fw-bold text-info">Weiterlesen →</span>
							</div>
						</div>
					</Link>
				</div>
			))}

			{/* interactive progress bar */}
			<div className="slide-progress" onClick={handleProgressClick}>
				<div className="bar" style={{ width: `${progress}%` }} />
				<div className="dot" style={{ left: `calc(${progress}% - 8px)` }} />
			</div>

			<style jsx>{`
				.auto-slider {
					position: relative;
					width: 100%;
					overflow: hidden;
					border-radius: 18px;
					box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
				}
				.slide {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					opacity: 0;
					transform: translateY(10px);
					transition: all 0.8s ease-in-out;
					pointer-events: none;
				}
				.slide.active {
					opacity: 1;
					transform: translateY(0);
					pointer-events: auto;
					position: relative;
					z-index: 2;
				}

				.slide-content {
					display: grid;
					grid-template-columns: 1fr 1fr;
					align-items: center;
					gap: 40px;
					padding: 2.5rem;
				}
				.img-box {
					position: relative;
					width: 100%;
					aspect-ratio: 16 / 9;
					overflow: hidden;
					border-radius: 14px;
				}
				.slide-img {
					object-fit: cover;
					object-position: center;
					filter: brightness(0.75);
					transform: scale(1.05);
					transition: transform 6s ease, filter 0.3s ease;
				}
				.slide.active .slide-img {
					transform: scale(1);
					filter: brightness(0.9);
				}
				.text-box {
					text-align: left;
				}
				.teaser {
					color: rgba(255, 255, 255, 0.85);
				}

				/* progress bar (nav) */
				.slide-progress {
					position: relative;
					margin: 28px auto 10px auto;
					width: 90%;
					height: 6px;
					background: rgba(255, 255, 255, 0.15);
					border-radius: 3px;
					cursor: pointer;
					transition: background 0.3s ease;
				}
				.slide-progress:hover {
					background: rgba(255, 255, 255, 0.25);
				}
				.bar {
					position: absolute;
					top: 0;
					left: 0;
					height: 100%;
					background: #0dcaf0;
					border-radius: 3px;
					box-shadow: 0 0 8px rgba(13, 202, 240, 0.6);
					transition: width 0.5s ease;
				}
				.dot {
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
					width: 16px;
					height: 16px;
					background: #0dcaf0;
					border-radius: 50%;
					box-shadow: 0 0 12px rgba(13, 202, 240, 0.8);
					cursor: grab;
					transition: transform 0.2s ease;
				}
				.dot:hover {
					transform: translateY(-50%) scale(1.15);
				}

				@media (max-width: 991px) {
					.slide-content {
						grid-template-columns: 1fr;
						padding: 1.5rem;
						text-align: center;
					}
					.text-box {
						text-align: center;
					}
				}
			`}</style>
		</div>
	);
}
/* === === === */

export default function Blog2() {
	const [showContact, setShowContact] = useState(false);

	const blogLd = useMemo(
		() => blogListJsonLd({ posts: blogPosts, pageUrl: PAGE_URL }),
		[]
	);

	return (
		<>
			<Head>
				<title>Pixel-Genie Blog – Webdesign, SEO & Wachstum</title>
				<meta
					name="description"
					content="Praxisnahe SEO-, Webdesign- & Growth-Strategien – für Unternehmen in NRW (Nettetal, Viersen, Krefeld, Düsseldorf)."
				/>
				<link rel="canonical" href={PAGE_URL} />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }}
				/>
			</Head>

			<Container fluid className="py-5" id="tips">
				<Row className="justify-content-center text-center mb-4">
					<Col lg={8}>
						<h1 className="fw-bold display-5">Pixel-Genie Blog</h1>
						<p className="fs-5">
							Webdesign, SEO & Growth – Strategien für mehr Kunden.
						</p>
						<Button
							onClick={() => setShowContact(true)}
							className="btn-premium mt-3 align-items-center justify-content-center align-self-center"
						>
							<span className="text-white">Kostenlose Analyse 🚀</span>
						</Button>
					</Col>
				</Row>

				{/* === HERO SLIDER === */}
				<Row className="justify-content-center text-center mb-5">
					<Col lg={10}>
						<AutoSlider posts={blogPosts.slice(0, 6)} />
					</Col>
				</Row>

				{/* === PRO LISTA === */}
				<Row className="justify-content-center">
					<Col lg={10}>
						<BlogIndexListPro posts={blogPosts} />
					</Col>
				</Row>
			</Container>
			<ContactModal
				show={showContact}
				onHide={() => setShowContact(false)}
				topic="Blog Anfrage"
			/>
		</>
	);
}
