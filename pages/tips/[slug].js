// /pages/tips/[slug].js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import blogPosts from "@/data/blogPosts";
import ShareButtons from "@/components/ShareButtons";
import { gaEvent } from "@/lib/analytics";

const SITE_ORIGIN = "https://pixel-genie.de";

export async function getStaticPaths() {
	const paths = blogPosts.map((p) => ({ params: { slug: p.slug } }));
	return { paths, fallback: false }; // ✅ eksportuje wszystkie /tips/slug/
}

export async function getStaticProps({ params }) {
	const article = blogPosts.find((p) => p.slug === params.slug) || null;
	const index = blogPosts.findIndex((p) => p.slug === params.slug);
	const next = index >= 0 ? blogPosts[(index + 1) % blogPosts.length] : null;
	const prev =
		index >= 0
			? blogPosts[(index - 1 + blogPosts.length) % blogPosts.length]
			: null;
	const related = blogPosts.filter((_, i) => i !== index).slice(0, 3);
	return { props: { article, next, prev, related } };
}

export default function BlogPostPage({ article, next, prev, related }) {
	if (!article) return null;

	const pageUrl = `${SITE_ORIGIN}/tips/${article.slug}/`;
	const ogImage = `${SITE_ORIGIN}${article.imgSrc}`;
	const ogTitle = article.title;
	const ogDescription =
		article.description ||
		(Array.isArray(article.details) ? article.details[0] : "");

	const articleJsonLd = {
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
			{ "@type": "ListItem", position: 2, name: ogTitle, item: pageUrl },
		],
	};

	const handleCta = () => gaEvent("blog_cta_click", { slug: article.slug });

	return (
		<>
			<Head>
				<title>{ogTitle}</title>
				<meta name="description" content={ogDescription} />
				<link rel="canonical" href={pageUrl} />

				{/* --- Open Graph --- */}
				<meta property="og:locale" content="de_DE" />
				<meta property="og:type" content="article" />
				<meta property="og:title" content={ogTitle} />
				<meta property="og:description" content={ogDescription} />
				<meta property="og:url" content={pageUrl} />
				<meta property="og:site_name" content="Pixel Genie" />
				<meta property="og:image" content={ogImage} />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />

				{/* --- Twitter --- */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={ogTitle} />
				<meta name="twitter:description" content={ogDescription} />
				<meta name="twitter:image" content={ogImage} />

				{/* --- JSON-LD --- */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(articleJsonLd),
					}}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(breadcrumbLd),
					}}
				/>
			</Head>

			<Container className="py-5 my-5">
				<Row className="justify-content-center">
					<Col lg={8}>
						<Card className="border-0 bg-transparent shadow-sm">
							<Image
								src={article.imgSrc}
								alt={article.title}
								width={1200}
								height={630}
								priority
								sizes="(max-width: 768px) 100vw, 1200px"
								style={{
									borderRadius: "16px",
									objectFit: "cover",
									objectPosition: "center",
								}}
							/>

							<Card.Body>
								<h1 className="fw-bold my-4">{article.title}</h1>
								<p className="text-muted mb-3">
									{new Date(article.date).toLocaleDateString("de-DE", {
										year: "numeric",
										month: "2-digit",
										day: "2-digit",
									})}
								</p>

								{article.description && (
									<p className="lead">{article.description}</p>
								)}

								{Array.isArray(article.keypoints) && (
									<div className="bg-light p-3 rounded mb-3">
										<h5 className="fw-bold mb-2 text-dark">Key Takeaways</h5>
										<ul className="mb-0">
											{article.keypoints.map((p, i) => (
												<li key={i}>{p}</li>
											))}
										</ul>
									</div>
								)}

								{Array.isArray(article.details) &&
									article.details.map((p, i) => (
										<p
											key={i}
											className="text-dark"
											dangerouslySetInnerHTML={{
												__html: p
													.replace(/\n/g, "<br>")
													.replace(/### (.*)/g, "<h3>$1</h3>")
													.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
											}}
										/>
									))}

								{/* 🔗 Social share buttons */}
								<ShareButtons
									url={pageUrl}
									title={article.title}
									description={ogDescription}
								/>

								{/* CTA */}
								<div className="d-flex flex-wrap gap-3 mt-4">
									<Button
										href="#kontakt"
										className="btn-success"
										onClick={handleCta}
									>
										<span className="text-white">
											Website-Analyse starten 🚀
										</span>
									</Button>
									<Link href="/webdesignblog" className="btn btn-nav">
										<span className="text-white">← Zurück zum Blog</span>
									</Link>
								</div>

								<hr className="my-4" />

								{/* Prev / Next navigation */}
								<div className="d-flex justify-content-between bg-white rounded p-3">
									{prev && (
										<Link
											href={`/tips/${prev.slug}/`}
											className="text-decoration-none fw-semibold"
										>
											← {prev.title}
										</Link>
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
							</Card.Body>
						</Card>

						{/* Optional: related posts preview */}
						{Array.isArray(related) && related.length > 0 && (
							<div className="mt-5">
								<h3 className="fw-bold mb-4">Verwandte Artikel</h3>
								<Row>
									{related.map((r) => (
										<Col md={4} key={r.slug} className="mb-3">
											<Link
												href={`/tips/${r.slug}/`}
												className="text-decoration-none"
											>
												<Card className="border-0 shadow-sm h-100">
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
														<h6 className="fw-semibold text-dark mb-0">
															{r.title}
														</h6>
													</Card.Body>
												</Card>
											</Link>
										</Col>
									))}
								</Row>
							</div>
						)}
					</Col>
				</Row>
			</Container>
		</>
	);
}
