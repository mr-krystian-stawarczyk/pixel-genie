// /pages/tips/[slug].js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import blogPosts from "@/data/blogPosts";
import ShareBar from "@/components/ShareBar";
import { gaEvent } from "@/lib/analytics";

const SITE_ORIGIN = "https://pixel-genie.de";

export async function getStaticPaths() {
	const paths = blogPosts.map((p) => ({ params: { slug: p.slug } }));
	return { paths, fallback: false };
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

	const pageUrl = `${SITE_ORIGIN}/tips/${article.slug}`;
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

				<meta property="og:title" content={ogTitle} />
				<meta property="og:description" content={ogDescription} />
				<meta property="og:image" content={ogImage} />
				<meta property="og:url" content={pageUrl} />
				<meta property="og:type" content="article" />
				<meta property="og:site_name" content="Pixel-Genie" />

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
				<link
					rel="preload"
					as="image"
					href={article.imgSrc}
					imagesrcset={`${article.imgSrc} 1x`}
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
								style={{ borderRadius: "16px", objectFit: "cover" }}
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
									article.details.map((p, i) => <p key={i}>{p}</p>)}

								<ShareBar
									pageUrl={pageUrl}
									title={article.title}
									description={ogDescription}
								/>

								<div className="d-flex gap-3 mt-4">
									<Button
										href="#kontakt"
										className="btn-success "
										onClick={handleCta}
									>
										<span className="text-white">
											Website-Analyse starten 🚀
										</span>
									</Button>
									<Link href="/webdesignblog" className="btn btn-nav ">
										<span className="text-white">← Zurück zum Blog</span>
									</Link>
								</div>

								<hr className="my-4" />
								<div className="d-flex justify-content-between">
									{prev && (
										<Link
											href={`/tips/${prev.slug}`}
											className="text-decoration-none"
										>
											← {prev.title}
										</Link>
									)}
									{next && (
										<Link
											href={`/tips/${next.slug}`}
											className="text-decoration-none"
										>
											{next.title} →
										</Link>
									)}
								</div>
							</Card.Body>
						</Card>
					</Col>
				</Row>

				{Array.isArray(related) && related.length > 0 && (
					<Row className="justify-content-center mt-5">
						<Col lg={8}>
							<h2 className="h4 fw-semibold mb-3">Weitere Empfehlungen</h2>
							<Row>
								{related.map((r) => (
									<Col md={6} lg={4} key={r.slug} className="mb-3 hover">
										<Card className="h-100 bg-transparent border-1">
											<Link
												href={`/tips/${r.slug}`}
												className="text-decoration-none"
											>
												<Image
													src={r.imgSrc}
													alt={r.title}
													width={600}
													height={315}
													style={{ borderRadius: "12px", objectFit: "cover" }}
												/>
												<Card.Body>
													<h3 className="h6 fw-semibold">{r.title}</h3>
													<p className="text-muted mb-0">
														{new Date(r.date).toLocaleDateString("de-DE")}
													</p>
												</Card.Body>
											</Link>
										</Card>
									</Col>
								))}
							</Row>
						</Col>
					</Row>
				)}
			</Container>
		</>
	);
}
