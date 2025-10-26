// /pages/tips/[slug].js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col, Card } from "react-bootstrap";
import blogPosts from "@/data/blogPosts";
import ShareButtons from "@/components/ShareButtons";
import { gaEvent } from "@/lib/analytics";
import { useEffect, useState } from "react";
import ShareBarSticky from "@/components/ShareBarSticky";
import AutoTranslateArticle from "@/components/AutoTranslateArticle";
import AutoTranslate from "@/components/AutoTranslate";
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

	// ✅ FULL dynamic article HTML block for translation
	const articleHtml = `
		${article.description ? `<p class="lead">${article.description}</p>` : ""}
		${article.details.map((p) => `<p>${p}</p>`).join("")}

		${
			article.keypoints?.length
				? `
			<section>
				<h3>🔑 Wichtigste Erkenntnisse</h3>
				<ul>${article.keypoints.map((k) => `<li>${k}</li>`).join("")}</ul>
			</section>`
				: ""
		}

		${
			article.faq?.length
				? `
			<section>
				<h3>❓ Häufige Fragen zum Thema</h3>
				${article.faq
					.map(
						(f) => `
				<details>
					<summary>${f.q}</summary>
					<p>${f.a}</p>
				</details>`
					)
					.join("")}
			</section>`
				: ""
		}
	`;

	return (
		<>
			<Head>
				<title>{ogTitle}</title>
				<meta name="description" content={ogDescription} />
				<link rel="canonical" href={pageUrl} />
				<meta property="og:title" content={ogTitle} />
				<meta property="og:description" content={ogDescription} />
				<meta property="og:image" content={ogImage} />
			</Head>

			<ShareBarSticky
				isMobile={isMobile}
				url={pageUrl}
				title={article.title}
				description={ogDescription}
			/>

			<Container className="pt-5">
				<Row className="justify-content-center">
					<Col lg={8}>
						<article className="bg-transparent border-0 shadow-sm rounded blog-article mt-4">
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
								<h1 className="fw-bold mb-3">
									<AutoTranslate>{article.title}</AutoTranslate>
								</h1>

								<p className="mb-4">
									{new Date(article.date).toLocaleDateString("de-DE", {
										year: "numeric",
										month: "2-digit",
										day: "2-digit",
									})}{" "}
									· ⏱️ {article.readingTime}
								</p>

								{/* ✅ Full translated article */}
								<AutoTranslateArticle html={articleHtml} slug={article.slug} />

								<div className="my-5">
									<ShareButtons
										url={pageUrl}
										title={article.title}
										description={ogDescription}
										isMobile={isMobile}
										variant="inline"
									/>
								</div>

								<section className="mt-5 p-4 bg-transparent rounded shadow-sm">
									<h4 className="fw-bold mb-2">Über den Autor</h4>
									<p>
										Dieser Artikel wurde verfasst von{" "}
										<strong>Pixel-Genie Webagentur Nettetal</strong>.
									</p>
								</section>

								<div className="d-flex flex-wrap gap-3 mt-5 justify-content-center">
									<Link
										href="#kontakt"
										className="btn-premium-footer text-white fw-bold"
										onClick={handleCta}
									>
										<p className="text-white">
											🚀 Kostenlose Website-Analyse sichern
										</p>
									</Link>
									<Link href="/webdesignblog" className="btn-premium-footer">
										<p className="text-white"> ← Zurück zum Blog</p>
									</Link>
								</div>

								<hr className="my-5" />

								<div className="d-flex justify-content-between mt-5">
									{prev ? (
										<Link
											href={`/tips/${prev.slug}/`}
											className="fw-semibold text-blue"
										>
											← {prev.title}
										</Link>
									) : (
										<span />
									)}

									{next && (
										<Link
											href={`/tips/${next.slug}/`}
											className="fw-semibold text-blue"
										>
											{next.title} →
										</Link>
									)}
								</div>

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
