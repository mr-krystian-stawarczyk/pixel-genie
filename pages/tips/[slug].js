"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col, Card } from "react-bootstrap";
import blogPosts from "@/data/blogPosts";
import ShareButtons from "@/components/ShareButtons";
import { useEffect, useState } from "react";
import ShareBarSticky from "@/components/ShareBarSticky";
import AutoTranslateArticle from "@/components/AutoTranslateArticle";
import AutoTranslate from "@/components/AutoTranslate";

// Upgrades
import TableOfContents from "@/components/TableOfContents";
import AnchorsInjector from "@/components/AnchorsInjector";
import { breadcrumbJsonLd, articleJsonLd, faqJsonLd } from "@/lib/seoSchema";

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
	const ogTitle = `${article.title} | Pixel-Genie Blog – Webdesign, SEO & Online Sichtbarkeit in NRW`;
	const ogDescription =
		article.description ||
		(Array.isArray(article.details) ? article.details[0] : "");

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

	// ✅ JSON-LD with E-E-A-T
	const breadcrumbLd = breadcrumbJsonLd({
		siteOrigin: SITE_ORIGIN,
		articleTitle: article.title,
		pageUrl,
	});

	const articleLd = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: ogTitle,
		description: ogDescription,
		datePublished: article.date,
		dateModified: new Date().toISOString(),
		image: ogImage,
		mainEntityOfPage: pageUrl,
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
				url: `${SITE_ORIGIN}/assets/pixel-genie-webseiten-seo-nettetal-logo.png`,
				width: 512,
				height: 512,
			},
		},
	};

	const faqLd = faqJsonLd(article.faq);

	const localBusinessLd = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		name: "Pixel-Genie Webagentur Nettetal",
		url: SITE_ORIGIN,
		image: `${SITE_ORIGIN}/assets/pixel-genie-webseiten-seo-nettetal-logo.png`,
		address: {
			"@type": "PostalAddress",
			addressLocality: "Nettetal",
			addressRegion: "NRW",
			addressCountry: "DE",
		},
		areaServed: [
			"Nettetal",
			"Viersen",
			"Krefeld",
			"Mönchengladbach",
			"Düsseldorf",
		],
	};

	return (
		<>
			<Head>
				<title>{ogTitle}</title>
				<meta name="description" content={ogDescription} />
				<link rel="canonical" href={pageUrl} />

				<meta property="og:title" content={ogTitle} />
				<meta property="og:description" content={ogDescription} />
				<meta property="og:image" content={ogImage} />

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
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
				/>
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

								<TableOfContents html={articleHtml} />

								<div id={`article-${article.slug}`}>
									<AutoTranslateArticle
										html={articleHtml}
										slug={article.slug}
									/>
								</div>
								<AnchorsInjector
									containerSelector={`#article-${article.slug}`}
								/>

								<div className="my-5">
									<ShareButtons
										url={pageUrl}
										title={article.title}
										description={ogDescription}
										isMobile={isMobile}
										variant="inline"
									/>
								</div>

								{/* ✅ BUSINESS CTA BLOCK */}
								<section className="my-5 p-4 bg-body-black rounded-3 shadow-sm">
									<h3 className="fw-bold mb-2">
										Bessere Sichtbarkeit? Mehr Kunden in NRW?
									</h3>
									<p>
										Wir erstellen Websites, die Anfragen bringen – für
										Unternehmen aus Nettetal, Krefeld, Viersen, Mönchengladbach
										& Düsseldorf.
									</p>
									<p>
										Mehr erfahren: <Link href="/webdesign/">Webdesign NRW</Link>{" "}
										· <Link href="/seo/">SEO Beratung</Link>
									</p>
								</section>

								<section className="mt-5 p-4 rounded shadow-sm">
									<h4 className="fw-bold mb-2">Über den Autor</h4>
									<p>
										Verfasst von{" "}
										<strong>Pixel-Genie Webagentur Nettetal</strong> – Fokus auf
										Webdesign, SEO und Social Media Marketing für lokale
										Unternehmen in Nordrhein-Westfalen.
									</p>
								</section>

								<hr className="my-5" />

								<div className="d-flex justify-content-between mt-5">
									{prev ? (
										<Link href={`/tips/${prev.slug}/`}>← {prev.title}</Link>
									) : (
										<span />
									)}
									{next && (
										<Link href={`/tips/${next.slug}/`}>{next.title} →</Link>
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
													<Link href={`/tips/${r.slug}/`}>
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
