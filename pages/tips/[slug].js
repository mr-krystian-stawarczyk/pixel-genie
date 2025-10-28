// /pages/tips/[slug].js
"use client";
import { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col, Card } from "react-bootstrap";
import blogPosts from "@/data/blogPosts";
import SmartCTA from "@/components/SmartCTA";
import PeopleAlsoRead from "@/components/PeopleAlsoRead";
import LocalNRWHook from "@/components/LocalNRWHook";
import ShareButtons from "@/components/ShareButtons";
import ShareBarSticky from "@/components/ShareBarSticky";
import AutoTranslate from "@/components/AutoTranslate";
import AutoTranslateArticle from "@/components/AutoTranslateArticle";
import TableOfContents from "@/components/TableOfContents";
import AnchorsInjector from "@/components/AnchorsInjector";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import { breadcrumbJsonLd, articleJsonLd, faqJsonLd } from "@/lib/seoSchema";

const SITE_ORIGIN = "https://pixel-genie.de";
export async function getStaticPaths() {
	return {
		paths: blogPosts.map((p) => ({ params: { slug: p.slug } })),
		fallback: false, // static export safe
	};
}

export async function getStaticProps({ params }) {
	const article = blogPosts.find((p) => p.slug === params.slug);
	if (!article) return { notFound: true };

	const idx = blogPosts.findIndex((p) => p.slug === params.slug);
	const prev = idx > 0 ? blogPosts[idx - 1] : null;
	const next = idx < blogPosts.length - 1 ? blogPosts[idx + 1] : null;

	const related = blogPosts
		.filter(
			(p) =>
				p.slug !== article.slug &&
				p.tags?.some((tag) => article.tags?.includes(tag))
		)
		.slice(0, 6);

	return {
		props: { article, prev, next, related },
	};
}

export default function BlogPostPage({ article, prev, next, related }) {
	const [mobile, setMobile] = useState(false);
	useEffect(() => {
		const fn = () => setMobile(innerWidth < 992);
		fn();
		addEventListener("resize", fn);
		return () => removeEventListener("resize", fn);
	}, []);

	if (!article) return null; // guard
	const lcpSrc = article?.imgSrc || null;

	const pageUrl = `${SITE_ORIGIN}/tips/${article.slug}/`;

	const ogImage = `https://pixel-genie.de/.netlify/functions/og?title=${encodeURIComponent(
		article.title
	)}&bg=${encodeURIComponent(SITE_ORIGIN + article.imgSrc)}`;

	const ogTitle = `${article.title} | Pixel-Genie Blog – Webdesign & SEO in NRW`;
	const ogDescription =
		article.description ||
		(Array.isArray(article.details) ? article.details[0] : "");

	const html = `
    ${article.description ? `<p class="lead">${article.description}</p>` : ""}
    ${article.details.map((p) => `<p>${p}</p>`).join("")}
    ${
			article.keypoints?.length
				? `<section><h3>🔑 Wichtigste Erkenntnisse</h3><ul>${article.keypoints
						.map((k) => `<li>${k}</li>`)
						.join("")}</ul></section>`
				: ""
		}
    ${
			article.faq?.length
				? `<section><h3>❓ Häufige Fragen</h3>${article.faq
						.map(
							(f) => `<details><summary>${f.q}</summary><p>${f.a}</p></details>`
						)
						.join("")}</section>`
				: ""
		}
  `;

	// JSON-LD
	const breadcrumbLd = useMemo(
		() =>
			breadcrumbJsonLd({
				trail: [
					{ name: "Blog", item: `${SITE_ORIGIN}/webdesignblog` },
					{ name: article.title, item: pageUrl },
				],
			}),
		[article.title, pageUrl]
	);
	const articleLd = useMemo(
		() => articleJsonLd({ article, pageUrl }),
		[article, pageUrl]
	);
	const faqLd = useMemo(() => faqJsonLd(article.faq), [article.faq]);

	// Smooth hash anchors
	useEffect(() => {
		const handler = (e) => {
			const a = e.target.closest('a[href^="#"]');
			if (!a) return;
			const id = a.getAttribute("href").slice(1);
			const el = document.getElementById(id);
			if (el) {
				e.preventDefault();
				el.scrollIntoView({ behavior: "smooth", block: "start" });
			}
		};
		document.addEventListener("click", handler);
		return () => document.removeEventListener("click", handler);
	}, []);

	// Preload next/prev (perf)
	useEffect(() => {
		const link = document.createElement("link");
		link.rel = "prefetch";
		if (next) link.href = `/tips/${next.slug}`;
		document.head.appendChild(link);
		return () => document.head.removeChild(link);
	}, [next]);

	return (
		<>
			<Head>
				<title>{ogTitle}</title>
				<meta name="description" content={ogDescription} />
				<link rel="canonical" href={pageUrl} />
				{lcpSrc && (
					<link
						rel="preload"
						as="image"
						href={lcpSrc}
						imagesrcset={`${lcpSrc} 1200w`}
						imagesizes="100vw"
					/>
				)}

				<meta property="og:image" content={ogImage} />
				<meta name="twitter:image" content={ogImage} />
				<meta property="og:title" content={ogTitle} />
				<meta property="og:description" content={ogDescription} />
				<meta property="og:image" content={ogImage} />
				<meta property="og:url" content={pageUrl} />
				<meta property="og:type" content="article" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={ogTitle} />
				<meta name="twitter:description" content={ogDescription} />
				<meta name="twitter:image" content={ogImage} />

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
				/>
				{faqLd && (
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
					/>
				)}
			</Head>

			<ShareBarSticky
				isMobile={mobile}
				url={pageUrl}
				title={article.title}
				description={ogDescription}
			/>
			<ReadingProgressBar />
			<Container className="pt-5">
				<Row className="justify-content-center">
					<Col lg={8}>
						<article id={`article-${article.slug}`} className="blog-article">
							<div
								className="position-relative rounded-4 overflow-hidden"
								style={{ aspectRatio: "1200/630" }}
							>
								<Image
									src={article.imgSrc}
									alt={article.title}
									fill
									priority
									sizes="100vw"
									style={{ objectFit: "cover" }}
								/>
							</div>

							<h1 className="fw-bold mt-4 mb-3">
								<AutoTranslate>{article.title}</AutoTranslate>
							</h1>
							<LocalNRWHook />
							<PeopleAlsoRead
								currentSlug={article.slug}
								tagHint={article.tags?.[0]}
							/>
							<nav className="mb-3 small">
								<Link href="/webdesignblog" className="text-blue">
									Blog
								</Link>{" "}
								/ <span className="fw-semibold">{article.title}</span>
							</nav>
							<p className="text-muted mb-4">
								{new Date(article.date).toLocaleDateString("de-DE")} ·{" "}
								{article.readingTime}
							</p>

							<TableOfContents html={html} />

							<AutoTranslateArticle html={html} slug={article.slug} />
							<AnchorsInjector containerSelector={`#article-${article.slug}`} />

							<div className="my-5">
								<ShareButtons
									url={pageUrl}
									title={article.title}
									description={ogDescription}
									isMobile={mobile}
									variant="inline"
								/>
							</div>

							{/* CTA */}
							<section className="p-4 rounded bg-transparent shadow-sm mb-5">
								<h3 className="fw-bold mb-2">🚀 Mehr Kunden in NRW?</h3>
								<p>
									Websites, die Leads bringen — Nettetal, Viersen, Krefeld,
									Düsseldorf & Umgebung.
								</p>
								<p>
									👉 <Link href="#contact">Kostenlose Website-Analyse</Link>
								</p>
							</section>

							{/* Prev/Next */}
							<div className="d-flex justify-content-between mt-5">
								{prev ? (
									<Link href={`/tips/${prev.slug}`} prefetch>
										← {prev.title}
									</Link>
								) : (
									<span />
								)}
								{next && (
									<Link href={`/tips/${next.slug}`} prefetch>
										{next.title} →
									</Link>
								)}
							</div>
							{/* ✅ Recommended By Tags */}
							{related?.length > 0 && (
								<section className="mt-5 mb-4">
									<h3 className="fw-bold mb-3">Empfohlene Artikel für Sie</h3>
									<Row>
										{related.slice(0, 3).map((r) => (
											<Col md={4} key={r.slug} className="mb-3">
												<Link
													href={`/tips/${r.slug}`}
													prefetch
													className="text-decoration-none"
												>
													<Card className="shadow-sm border-0 h-100 rounded hover-lift bg-transparent">
														<div
															className="position-relative"
															style={{ aspectRatio: "4/2" }}
														>
															<Image
																src={r.imgSrc}
																alt={r.title}
																fill
																sizes="(max-width:768px) 100vw, 33vw"
																style={{ objectFit: "cover" }}
															/>
														</div>
														<Card.Body>
															<h6 className="fw-semibold">{r.title}</h6>
														</Card.Body>
													</Card>
												</Link>
											</Col>
										))}
									</Row>
								</section>
							)}
							{/* Related */}
							{related?.length > 0 && (
								<section className="mt-5">
									<h3 className="fw-bold mb-3">Ähnliche Artikel</h3>
									<Row>
										{related.map((r) => (
											<Col md={4} key={r.slug} className="mb-3">
												<Link
													href={`/tips/${r.slug}`}
													prefetch
													className="text-decoration-none"
												>
													<Card className="shadow-sm border-0 h-100 rounded hover-lift bg-transparent">
														<div
															className="position-relative"
															style={{ aspectRatio: "4/2" }}
														>
															<Image
																src={r.imgSrc}
																alt={r.title}
																fill
																sizes="(max-width:768px) 100vw, 33vw"
																style={{ objectFit: "cover" }}
																className="rounded-top"
															/>
														</div>
														<Card.Body>
															<h6 className="fw-semibold">{r.title}</h6>
														</Card.Body>
													</Card>
												</Link>
											</Col>
										))}
									</Row>
								</section>
							)}
						</article>
						<nav className="mb-3 small">
							<Link href="/webdesignblog" className="text-blue">
								Blog
							</Link>{" "}
							/ <span className="fw-semibold">{article.title}</span>
						</nav>
					</Col>
				</Row>
			</Container>
		</>
	);
}
