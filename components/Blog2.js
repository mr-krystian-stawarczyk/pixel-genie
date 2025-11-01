"use client";
import React, { useMemo, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import {
	Container,
	Row,
	Col,
	Card,
	Button,
	ProgressBar,
} from "react-bootstrap";
import Image from "next/image";
import dynamic from "next/dynamic";
import blogPosts from "@/data/blogPosts";
import BlogIndexListPro from "./BlogIndexListPro";
import { blogListJsonLd } from "@/lib/seoSchema";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

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

export default function Blog2() {
	const [i, setI] = useState(0);

	const settings = useMemo(
		() => ({
			dots: true,
			infinite: true,
			speed: 600,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 8500,
			arrows: false,
			pauseOnHover: true,
			adaptiveHeight: true,
			beforeChange: (_, next) => setI(next),
		}),
		[]
	);

	const progress = blogPosts.length
		? Math.round(((i + 1) / blogPosts.length) * 100)
		: 0;

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

			<Container fluid className="py-5">
				<Row className="justify-content-center text-center mb-4">
					<Col lg={8}>
						<h1 className="fw-bold display-5">Pixel-Genie Blog</h1>
						<p className="fs-5">
							Webdesign, SEO & Growth – Strategien für mehr Kunden.
						</p>
						<Button href="#contact" className="btn-premium mt-3">
							Kostenlose Analyse 🚀
						</Button>
					</Col>
				</Row>

				{/* === HERO SLIDER === */}
				<Row className="justify-content-center text-center mb-5">
					<Col lg={10}>
						<Slider {...settings}>
							{blogPosts.slice(0, 6).map((post, index) => (
								<div key={post.slug || index} className="px-2">
									<Link
										href={`/tips/${
											post.slug || encodeURIComponent(post.title)
										}`}
										prefetch
										className="text-decoration-none"
									>
										<Card className="rounded shadow-lg border-0 overflow-hidden hover-lift bg-transparent">
											<div
												className="position-relative"
												style={{ aspectRatio: "16/9" }}
											>
												<Image
													src={post.imgSrc || post.cover}
													alt={post.title}
													fill
													priority={index === 0}
													loading={index > 0 ? "lazy" : undefined}
													sizes="100vw"
													className="w-100"
													style={{ objectFit: "cover" }}
												/>
											</div>

											<Card.Body className="p-4 text-start">
												<h3 className="fw-bold">{post.title}</h3>
												<p className="text-muted small">
													{toDeDate(post.date)} · {post.readingTime}
												</p>
												<p>{teaser(post)}</p>
												<span className="fw-bold text-black bg-white rounded">
													Weiterlesen →
												</span>
											</Card.Body>
										</Card>
									</Link>
								</div>
							))}
						</Slider>
					</Col>
				</Row>

				<Row className="justify-content-center mb-4">
					<Col lg={8}>
						<ProgressBar
							now={progress}
							style={{ height: 8 }}
							striped
							variant="info"
						/>
					</Col>
				</Row>

				{/* === PRO LISTA: FILTRY + INFINITE SCROLL === */}
				<Row className="justify-content-center">
					<Col lg={10}>
						<BlogIndexListPro posts={blogPosts} />
					</Col>
				</Row>
			</Container>
		</>
	);
}
