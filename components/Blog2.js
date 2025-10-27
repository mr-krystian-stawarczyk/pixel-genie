// /components/Blog2.js
// ✅ Slider + GA + jasne kropki + SEO + dynamiczne czytanie slugów
import React, { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import {
	Container,
	Row,
	Col,
	Card,
	Button,
	ProgressBar, // ✅ zostaje
} from "react-bootstrap"; // ❌ usuwamy Accordion z importów
import Image from "next/image";
import dynamic from "next/dynamic";
import { FaCircleNotch } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blogPosts from "@/data/blogPosts";
import { gaEvent } from "@/lib/analytics";
import BlogIndexList from "./BlogIndexList";
import { hasCookie } from "cookies-next";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const SITE_ORIGIN = "https://pixel-genie.de";
const PAGE_PATH = "/webdesignblog";
const PAGE_URL = `${SITE_ORIGIN}${PAGE_PATH}`;

const toDeDate = (iso) =>
	new Date(iso).toLocaleDateString("de-DE", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	});

// ✅ helper do teasera
const getTeaser = (article, maxLen = 450) => {
	if (!article) return "";
	// bierzemy pierwszy akapit details (jeśli jest), inaczej description
	const base =
		(Array.isArray(article.details) && article.details[0]) ||
		article.description ||
		"";
	// usunięcie prostych znaczników HTML, gdyby były
	const stripped = String(base)
		.replace(/<[^>]+>/g, "")
		.replace(/\s+/g, " ")
		.trim();
	if (stripped.length <= maxLen) return stripped;
	return stripped.slice(0, maxLen).trimEnd() + "...";
};

function Blog2({ pageUrl = PAGE_URL }) {
	const [articles, setArticles] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	const sendEmailCTA = (location) => {
		if (hasCookie("marketingConsent")) {
			gaEvent("cta_click", {
				location,
				page:
					typeof window !== "undefined" ? window.location.pathname : PAGE_PATH,
			});
		}
		window.open(
			"mailto:pixelgenie.marketing@gmail.com?subject=Pixel%20Genie%20Webdesign%20Anfrage&body=Hallo%20Pixel%20Genie%2C%0A%0AIch%20interessiere%20mich%20für%20eine%20neue%20Website%20oder%20SEO-Beratung.%0A%0AName%3A%0AFirma%3A%0ATelefon%3A%0A%0AVielen%20Dank!",
			"_blank"
		);
	};

	useEffect(() => setArticles(blogPosts), []);

	const currentArticle = articles[currentIndex];

	const ogTitle =
		currentArticle?.title || "Pixel-Genie Blog – Webdesign & SEO Insights";
	const ogDescription =
		currentArticle?.description ||
		"Webdesign, SEO, Social Media & Conversion-Optimierung – lernen Sie, wie Sie Ihre Website profitabler machen.";
	const ogImage = currentArticle?.imgSrc
		? `${SITE_ORIGIN}${currentArticle.imgSrc}`
		: `${SITE_ORIGIN}/assets/og-default.jpg`;
	const publishedTime = currentArticle?.date || "2025-01-01";

	const articleJsonLd = useMemo(
		() => ({
			"@context": "https://schema.org",
			"@type": "Article",
			headline: ogTitle,
			description: ogDescription,
			image: [ogImage],
			author: {
				"@type": "Organization",
				name: "Pixel-Genie Webagentur Nettetal",
				url: SITE_ORIGIN,
			},
			publisher: {
				"@type": "Organization",
				name: "Pixel-Genie",
				logo: {
					"@type": "ImageObject",
					url: `${SITE_ORIGIN}/assets/pixel-genie-logo.png`,
				},
			},
			datePublished: publishedTime,
			dateModified: publishedTime,
			mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
		}),
		[ogTitle, ogDescription, ogImage, pageUrl, publishedTime]
	);

	const blogListLd = useMemo(
		() => ({
			"@context": "https://schema.org",
			"@type": "Blog",
			name: "Pixel-Genie Blog",
			url: pageUrl,
			blogPost: articles.map((a) => ({
				"@type": "BlogPosting",
				headline: a.title,
				image: [`${SITE_ORIGIN}${a.imgSrc}`],
				datePublished: a.date,
				dateModified: a.date,
				url: `${SITE_ORIGIN}/tips/${a.slug}`,
			})),
		}),
		[articles, pageUrl]
	);

	const settings = {
		dots: true,
		infinite: true,
		speed: 750,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 9000,
		arrows: false,
		pauseOnHover: true,
		beforeChange: (_curr, next) => setCurrentIndex(next),
	};

	const progress = articles.length
		? Math.round(((currentIndex + 1) / articles.length) * 100)
		: 0;

	return (
		<>
			<Head>
				<title>{ogTitle}</title>
				<meta name="description" content={ogDescription} />
				<meta name="robots" content="index, follow" />
				<link rel="canonical" href={pageUrl} />

				{/* OpenGraph */}
				<meta property="og:title" content={ogTitle} />
				<meta property="og:description" content={ogDescription} />
				<meta property="og:image" content={ogImage} />
				<meta property="og:url" content={pageUrl} />
				<meta property="og:type" content="website" />

				{/* Twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={ogTitle} />
				<meta name="twitter:description" content={ogDescription} />
				<meta name="twitter:image" content={ogImage} />

				{/* JSON-LD */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListLd) }}
				/>
			</Head>

			<Container as="section" id="tips" fluid className="py-5 my-5">
				<Row className="justify-content-center text-center mb-4">
					<Col lg={8}>
						<h1 className="fw-bold display-5 mb-3">Pixel-Genie Blog</h1>
						<h2 className="fs-5">
							Webdesign, SEO & Growth – praxisnahe Strategien, die Ihre Website
							messbar profitabler machen.
						</h2>

						<Button href="#kontakt" className="btn-nav text-white mt-3">
							Gratis Website-Analyse 🚀
						</Button>
					</Col>
				</Row>

				{/* --- Slider --- */}
				<Row className="justify-content-center text-center mb-5">
					<Col lg={10}>
						<Slider {...settings}>
							{articles.map((article, index) => (
								<Col key={`${article.slug}-${article.date}`} className="my-3">
									<article itemScope itemType="https://schema.org/Article">
										<Card className="bg-transparent border-0 rounded p-3 shadow-lg m-2">
											{/* IMAGE */}
											<div
												className="position-relative d-flex justify-content-center align-items-center w-100"
												style={{
													aspectRatio: "1200/630",
													overflow: "hidden",
													borderRadius: "18px",
												}}
											>
												<Image
													src={article.imgSrc}
													alt={article.title}
													fill
													style={{
														objectFit: "cover",
														objectPosition: "center",
													}}
													sizes="(max-width: 768px) 100vw, 1200px"
													priority={index === 0}
												/>
											</div>

											<Card.Body className="text-body">
												{/* TITLE */}
												<h2 className="h3 py-3" itemProp="headline">
													{article.title}
												</h2>

												{/* DATE */}
												<p
													className="text-body small mb-2"
													itemProp="datePublished"
													content={article.date}
												>
													{toDeDate(article.date)}
												</p>

												{/* DESCRIPTION */}
												{article.description && (
													<p
														style={{ color: "var(--text-color)" }}
														itemProp="description"
													>
														{article.description}
													</p>
												)}

												{/* KEYPOINTS */}
												{Array.isArray(article.keypoints) &&
													article.keypoints.length > 0 && (
														<div className="text-start bg-body-secondary p-3 rounded mb-3">
															<h5 className="fw-bold mb-2 text-black">
																<FaCircleNotch className="text-success me-2" />
																Key Takeaways
															</h5>
															<ul className="m-0">
																{article.keypoints.map((p, i) => (
																	<li key={i} className="text-black mb-1">
																		{p}
																	</li>
																))}
															</ul>
														</div>
													)}

												{/* ✅ TEASER (zamiast całego artykułu/Accordion) */}
												{Array.isArray(article.details) &&
													article.details.length > 0 && (
														<div className="text-start mt-3">
															<p
																className="mb-3"
																style={{ color: "var(--text-color)" }}
															>
																{getTeaser(article, 450)}
															</p>

															<div className="mt-3 d-flex flex-wrap justify-content-center gap-3">
																<Link
																	href={`/tips/${article.slug}`}
																	className="btn-nav fw-semibold text-white px-4 py-2"
																>
																	Weiterlesen →
																</Link>

																<button
																	className="btn-premium-footer fw-bold text-white px-4 py-2"
																	onClick={() =>
																		sendEmailCTA("blog_slider_cta")
																	}
																>
																	Kontakt aufnehmen
																</button>
															</div>
														</div>
													)}
											</Card.Body>
										</Card>
									</article>
								</Col>
							))}
						</Slider>
					</Col>
				</Row>

				{/* --- Slider Progress --- */}
				<Row className="justify-content-center mb-3">
					<Col lg={8}>
						<ProgressBar
							now={progress}
							variant="info"
							stripped="true"
							style={{ height: 8 }}
						/>
					</Col>
				</Row>

				{/* 🔥 Full crawlable blog list for SEO */}
				<BlogIndexList posts={articles} />
			</Container>
		</>
	);
}

export default Blog2;
