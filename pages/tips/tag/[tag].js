// /pages/tips/tag/[tag].js
"use client";
import Head from "next/head";
import Link from "next/link";
import { Container } from "react-bootstrap";
import blogPosts from "@/data/blogPosts";
import BlogIndexListPro from "@/components/BlogIndexListPro";

export async function getStaticPaths() {
	const tags = new Set();
	blogPosts.forEach((p) => p.tags?.forEach((t) => tags.add(t.toLowerCase())));
	return {
		paths: Array.from(tags).map((tag) => ({ params: { tag } })),
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const tag = decodeURIComponent(params.tag);
	const posts = blogPosts.filter((p) =>
		p.tags?.some((t) => t.toLowerCase() === tag)
	);
	return {
		props: { tag, posts },
	};
}

export default function TagPage({ tag, posts }) {
	const pageUrl = `https://pixel-genie.de/tips/tag/${tag}`;

	return (
		<>
			<Head>
				<title>{tag} – Themen Kategorie | Pixel-Genie</title>
				<meta
					name="description"
					content={`Alle Artikel zum Thema ${tag} – Webdesign, SEO & Growth Strategien.`}
				/>
				<link rel="canonical" href={pageUrl} />
			</Head>

			<Container className="pt-5">
				<h1 className="fw-bold mb-3 text-capitalize">{tag}</h1>
				<BlogIndexListPro posts={posts} />
				<p className="mt-5">
					<Link href="/webdesignblog">← Zurück zum Blog</Link>
				</p>
			</Container>
		</>
	);
}
