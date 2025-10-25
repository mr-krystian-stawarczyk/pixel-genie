// /components/Blog2.js
// ✅ Slider + GA + jasne kropki (CSS w globals.css) + link do /tips/[slug] + crawlable lista.
import React, { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import {
	Container,
	Row,
	Col,
	Card,
	Button,
	Accordion,
	ProgressBar,
} from "react-bootstrap";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { FaCircleNotch } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blogPosts from "@/data/blogPosts";
import { gaEvent } from "@/lib/analytics";
import BlogIndexList from "./BlogIndexList";
import { hasCookie } from "cookies-next"; // ✅ DODAJ TO

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

function Blog2({ pageUrl = PAGE_URL }) {
	const [articles, setArticles] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [shareMessage, setShareMessage] = useState("");

	const sendEmailCTA = (location) => {
		if (hasCookie("marketingConsent")) {
			gaEvent("cta_click", {
				location,
				page: window.location.pathname,
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

	const progress = useMemo(() => {
		if (!articles.length) return 0;
		return Math.round(((currentIndex + 1) / articles.length) * 100);
	}, [currentIndex, articles.length]);

	const handleReadMore = (slug) => gaEvent("blog_read_more_click", { slug });

	return (
		<>
			<Head>
				<title>{ogTitle}</title>
				<meta name="description" content={ogDescription} />
				<meta name="robots" content="index, follow" />
				<link rel="canonical" href={pageUrl} />
				<meta property="og:title" content={ogTitle} />
				<meta property="og:description" content={ogDescription} />
				<meta property="og:image" content={ogImage} />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:url" content={pageUrl} />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Pixel-Genie" />
				<meta property="og:locale" content="de_DE" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={ogTitle} />
				<meta name="twitter:description" content={ogDescription} />
				<meta name="twitter:image" content={ogImage} />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListLd) }}
				/>
				<link
					rel="preload"
					as="image"
					href="/assets/conversion-fehler.jpg"
					imagesrcset="/assets/conversion-fehler.jpg 1x"
				/>
			</Head>

			<Container as="section" id="tips" fluid className="py-5 my-5">
				<Row className="justify-content-center text-center mb-4">
					<Col lg={8}>
						<h1 className="fw-bold display-5 mb-3">Pixel-Genie Blog</h1>
						<h2 className=" fs-5">
							Webdesign, SEO & Growth – praxisnahe Strategien, die Ihre Website
							messbar profitabler machen.
						</h2>
						<div className="d-flex gap-2 justify-content-center">
							<Button href="#kontakt" className="btn-nav text-white mt-2">
								Gratis Website-Analyse 🚀
							</Button>
						</div>
					</Col>
				</Row>

				<Row className="justify-content-center text-center mb-5">
					<Col lg={10}>
						<Slider {...settings}>
							{articles.map((article, index) => (
								<Col key={`${article.slug}-${article.date}`} className="my-3">
									<article itemScope itemType="https://schema.org/Article">
										<Card className="bg-transparent border-0 rounded m-2 p-3 shadow-lg">
											<div
												className="position-relative w-100 d-flex justify-content-center align-items-center"
												style={{
													aspectRatio: "1200 / 630",
													overflow: "hidden",
													borderRadius: "16px",
												}}
											>
												<Image
													src={article.imgSrc}
													alt={article.title}
													width={1200}
													height={630}
													style={{
														objectFit: "cover",
														objectPosition: "center",
													}}
													sizes="(max-width: 768px) 100vw, 1200px"
													priority={index === 0}
													loading={index === 0 ? "eager" : "lazy"}
												/>
											</div>
											<Card.Body>
												<h2 className="py-3 h3" itemProp="headline">
													{article.title}
												</h2>
												<p itemProp="datePublished" content={article.date}>
													{toDeDate(article.date)}
												</p>
												{article.description && (
													<p itemProp="description">{article.description}</p>
												)}
												{Array.isArray(article.keypoints) &&
													article.keypoints.length > 0 && (
														<div className="text-start bg-light p-3 rounded mb-3">
															<h5 className="fw-bold mb-2">
																<FaCircleNotch className="text-success me-2" />
																<span className="text-dark">Key Takeaways</span>
															</h5>
															<ul className="mb-0 text-dark">
																{article.keypoints.map((p, i) => (
																	<li key={i}>
																		<span className="text-dark">{p}</span>
																	</li>
																))}
															</ul>
														</div>
													)}

												{/* Adaptive accordion / mobile redirect */}
												{Array.isArray(article.details) &&
													article.details.length > 0 && (
														<div className="mt-3">
															{/* Desktop: klasyczny Accordion */}
															<div className="d-none d-md-block">
																<Accordion>
																	<Accordion.Item
																		eventKey="0"
																		className="bg-transparent border-0"
																	>
																		<Accordion.Header className="bg-transparent">
																			Mehr lesen
																		</Accordion.Header>
																		<Accordion.Body className="bg-transparent text-foreground dark:text-foreground text-start">
																			{article.details.map((p, i) => (
																				<p
																					key={i}
																					className="mb-2"
																					dangerouslySetInnerHTML={{
																						__html: p.replace(/\n/g, "<br>"),
																					}}
																				/>
																			))}
																			<div className="mt-4 d-flex flex-wrap justify-content-center gap-3">
																				{/* 🔹 Przycisk „Weiterlesen” */}
																				<Link
																					href={`/tips/${article.slug}`}
																					className="btn-nav text-white fw-semibold px-4 py-2"
																					onClick={() =>
																						handleReadMore(article.slug)
																					}
																					style={{
																						display: "inline-flex",
																						alignItems: "center",
																						justifyContent: "center",
																						borderRadius: "12px",
																						transition: "all 0.3s ease",
																						boxShadow:
																							"0 0 10px rgba(0, 150, 255, 0.4)",
																					}}
																				>
																					<span className="me-1">
																						Weiterlesen
																					</span>{" "}
																					→
																				</Link>

																				{/* 🔹 Przycisk „Kontakt aufnehmen” */}
																				<button
																					onClick={() =>
																						sendEmailCTA("blog_slider_cta")
																					}
																					className="btn-premium-footer text-white fw-bold px-4 py-2"
																					style={{
																						display: "inline-flex",
																						alignItems: "center",
																						justifyContent: "center",
																						borderRadius: "12px",
																						background:
																							"linear-gradient(90deg, rgba(0,123,255,0.9) 0%, rgba(0,212,255,0.9) 100%)",
																						boxShadow:
																							"0 0 15px rgba(0,200,255,0.3)",
																						transition:
																							"transform 0.25s ease, box-shadow 0.25s ease",
																					}}
																				>
																					<span className="text-white">
																						Kontakt aufnehmen
																					</span>
																				</button>
																			</div>
																		</Accordion.Body>
																	</Accordion.Item>
																</Accordion>
															</div>

															{/* Mobile: po prostu przycisk „Mehr lesen” → slug */}
															<div className="d-block d-md-none">
																<Link
																	href={`/tips/${article.slug}`}
																	className="btn btn-nav w-100 mt-2 "
																	onClick={() => handleReadMore(article.slug)}
																>
																	<span className="text-white">
																		{" "}
																		Mehr lesen →
																	</span>
																</Link>
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
				<Row className="justify-content-center mb-2">
					<Col lg={8}>
						<ProgressBar
							now={progress}
							striped
							variant="info"
							style={{ height: 8 }}
						/>
					</Col>
				</Row>
				{/* Crawlable lista kart (SEO + UX) */}
				<BlogIndexList posts={articles} />
			</Container>
		</>
	);
}

export default Blog2;
