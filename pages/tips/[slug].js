// /pages/tips/[slug].js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col, Card } from "react-bootstrap";
import blogPosts from "@/data/blogPosts";
import ShareButtons from "@/components/ShareButtons";
import { gaEvent } from "@/lib/analytics";
import { useEffect, useState } from "react";

const SITE_ORIGIN = "https://pixel-genie.de";

export async function getStaticPaths() {
	const paths = blogPosts.map((p) => ({ params: { slug: p.slug } }));
	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const article = blogPosts.find((p) => p.slug === params.slug);
	if (!article) return { notFound: true };

	const index = blogPosts.findIndex((p) => p.slug === params.slug);
	const next = index < blogPosts.length - 1 ? blogPosts[index + 1] : null;
	const prev = index > 0 ? blogPosts[index - 1] : null;

	const related = blogPosts
		.filter(
			(p) =>
				p.slug !== article.slug &&
				p.tags?.some((tag) => article.tags?.includes(tag))
		)
		.slice(0, 3);

	return {
		props: { article, next, prev, related },
	};
}

export default function BlogPostPage({ article, next, prev, related }) {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 992);
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	if (!article) return null;

	const pageUrl = `${SITE_ORIGIN}/tips/${article.slug}/`;
	const ogImage = `${SITE_ORIGIN}${article.imgSrc}`;
	const ogTitle = `${article.title} | Pixel-Genie Blog – Webdesign, SEO & Conversion Tipps`;
	const ogDescription =
		article.description ||
		(Array.isArray(article.details) ? article.details[0] : "");

	const handleCta = () => gaEvent("blog_cta_click", { slug: article.slug });

	const articleJsonLd = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: article.title,
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
		datePublished: article.date,
		dateModified: article.date,
		mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
	};

	const breadcrumbLd = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Blog",
				item: `${SITE_ORIGIN}/webdesignblog`,
			},
			{ "@type": "ListItem", position: 2, name: article.title, item: pageUrl },
		],
	};

	return (
		<>
			<Head>
				<title>{ogTitle}</title>
				<meta name="description" content={ogDescription} />
				<link rel="canonical" href={pageUrl} />
				<meta property="og:locale" content="de_DE" />
				<meta property="og:type" content="article" />
				<meta property="og:title" content={ogTitle} />
				<meta property="og:description" content={ogDescription} />
				<meta property="og:url" content={pageUrl} />
				<meta property="og:site_name" content="Pixel-Genie" />
				<meta property="og:image" content={ogImage} />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
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
					dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
				/>
			</Head>

			{/* ✅ Sticky Share Bar (widoczny i działa) */}
			<div
				style={{
					position: "fixed",
					zIndex: 2000,
					top: isMobile ? "auto" : "50%",
					left: isMobile ? 0 : "10px",
					bottom: isMobile ? 0 : "auto",
					transform: isMobile ? "none" : "translateY(-50%)",
					background: isMobile ? "rgba(15,15,15,0.95)" : "transparent",
					padding: isMobile ? "6px 0" : "0",
					width: isMobile ? "100%" : "auto",
					boxShadow: isMobile ? "0 -3px 10px rgba(0,0,0,0.3)" : "none",
					borderTopLeftRadius: isMobile ? "12px" : "0",
					borderTopRightRadius: isMobile ? "12px" : "0",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: isMobile ? "row" : "column",
						alignItems: "center",
						justifyContent: "center",
						gap: "10px",
					}}
				></div>
			</div>

			<Container className="py-5 mt-5">
				<Row className="justify-content-center">
					<Col lg={8}>
						<article
							itemScope
							itemType="https://schema.org/BlogPosting"
							className="bg-transparent border-0 shadow-sm rounded"
						>
							<Image
								src={article.imgSrc}
								alt={article.title}
								width={1200}
								height={630}
								priority
								style={{
									borderRadius: "16px",
									objectFit: "cover",
									objectPosition: "center",
								}}
							/>

							<div className="mt-4">
								<h1 className="fw-bold mb-3" itemProp="headline">
									{article.title}
								</h1>
								<p className="text-muted mb-4">
									{new Date(article.date).toLocaleDateString("de-DE", {
										year: "numeric",
										month: "2-digit",
										day: "2-digit",
									})}{" "}
									· ⏱️ {article.readingTime}
								</p>

								{article.description && (
									<p className="lead text-foreground">{article.description}</p>
								)}

								{/* Główna treść */}
								{Array.isArray(article.details) &&
									article.details.map((p, i) => (
										<p
											key={i}
											dangerouslySetInnerHTML={{
												__html: p
													.replace(/\n/g, "<br>")
													.replace(/### (.*)/g, "<h3>$1</h3>")
													.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
											}}
										/>
									))}

								{/* ShareButtons pod treścią */}
								<div className="my-5">
									<ShareButtons
										url={pageUrl}
										title={article.title}
										description={ogDescription}
									/>
								</div>

								{/* Key Takeaways */}
								{article.keypoints && (
									<section className="mt-5">
										<h3 className="fw-bold mb-3">🔑 Wichtigste Erkenntnisse</h3>
										<ul>
											{article.keypoints.map((k, i) => (
												<li key={i}>{k}</li>
											))}
										</ul>
									</section>
								)}

								{/* FAQ */}
								{article.faq && article.faq.length > 0 && (
									<section className="mt-5">
										<h3 className="fw-bold mb-4">
											❓ Häufige Fragen zum Thema
										</h3>
										{article.faq.map((f, i) => (
											<details key={i} className="mb-3">
												<summary className="fw-semibold">{f.q}</summary>
												<p className="mt-2 text-secondary">{f.a}</p>
											</details>
										))}
									</section>
								)}

								{/* Quellen */}
								{article.sources && article.sources.length > 0 && (
									<section className="mt-5">
										<h3 className="fw-bold mb-3">🔗 Weiterführende Quellen</h3>
										<ul>
											{article.sources.map((s, i) => (
												<li key={i}>
													<a
														href={s.url}
														target="_blank"
														rel="nofollow noopener"
													>
														{s.label}
													</a>
												</li>
											))}
										</ul>
									</section>
								)}

								{/* Autor */}
								<section className="mt-5 p-4 bg-transparent rounded shadow-sm">
									<h4 className="fw-bold mb-2">Über den Autor</h4>
									<p>
										Dieser Artikel wurde verfasst von{" "}
										<strong>Pixel-Genie Webagentur Nettetal</strong> – Experten
										für Webdesign, SEO und Conversion-Optimierung.
									</p>
									<p>
										Mehr erfahren unter{" "}
										<Link href="/pixelgeniehistory" className="fw-semibold">
											Über uns
										</Link>
										.
									</p>
								</section>

								{/* CTA */}
								<div className="d-flex flex-wrap gap-3 mt-5 justify-content-center">
									<Link
										href="#kontakt"
										className="btn-premium-footer text-white fw-bold"
										onClick={handleCta}
									>
										🚀 Kostenlose Website-Analyse sichern
									</Link>
									<Link href="/webdesignblog" className="btn-premium-footer">
										← Zurück zum Blog
									</Link>
								</div>

								<hr className="my-5" />

								{/* Prev / Next */}
								<div className="d-flex justify-content-between">
									{prev ? (
										<Link
											href={`/tips/${prev.slug}/`}
											className="text-decoration-none fw-semibold"
										>
											← {prev.title}
										</Link>
									) : (
										<span />
									)}
									{next && (
										<Link
											href={`/tips/${next.slug}/`}
											className="text-decoration-none fw-semibold"
										>
											{next.title} →
										</Link>
									)}
								</div>

								{/* Related */}
								{Array.isArray(related) && related.length > 0 && (
									<section className="mt-5">
										<h3 className="fw-bold mb-4">
											Weitere Artikel zum Thema {article.tags?.[0]}
										</h3>
										<Row>
											{related.map((r) => (
												<Col md={4} key={r.slug} className="mb-3 hover">
													<Link
														href={`/tips/${r.slug}/`}
														className="text-decoration-none"
													>
														<Card className="bg-transparent border-0 shadow-sm h-100">
															<Image
																src={r.imgSrc}
																alt={r.title}
																width={400}
																height={210}
																style={{
																	borderRadius: "12px",
																	objectFit: "cover",
																}}
															/>
															<Card.Body>
																<h6 className="fw-semibold mb-0">{r.title}</h6>
															</Card.Body>
														</Card>
													</Link>
												</Col>
											))}
										</Row>
									</section>
								)}
							</div>
						</article>
					</Col>
				</Row>
			</Container>
		</>
	);
}
