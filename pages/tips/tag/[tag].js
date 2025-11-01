// /pages/tips/tag/[tag].js
import Head from "next/head";
import Link from "next/link";
import { Container } from "react-bootstrap";
import blogPosts from "@/data/blogPosts";
import dynamic from "next/dynamic";
const BlogIndexListPro = dynamic(
	() => import("@/components/BlogIndexListPro"),
	{
		loading: () => <p>Lade Artikel...</p>,
		ssr: false,
	}
);
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

	// 🔥 wybierz 3–5 polecanych wpisów spoza tego taga (na crawl i linkowanie wewnętrzne)
	const recommended = blogPosts
		.filter((p) => !p.tags?.includes(tag))
		.sort(() => 0.5 - Math.random())
		.slice(0, 5);

	return {
		props: { tag, posts, recommended },
	};
}

export default function TagPage({ tag, posts, recommended }) {
	const pageUrl = `https://pixel-genie.de/tips/tag/${tag}`;
	const title = `${tag} – Themen Kategorie | Pixel-Genie`;
	const description = `Alle Artikel zum Thema ${tag} – Webdesign, SEO & Growth Strategien.`;

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="robots" content="noindex,follow" />
				<link rel="canonical" href={pageUrl} />
			</Head>

			<Container className="pt-5">
				<h1 className="fw-bold mb-3 text-capitalize">{tag}</h1>
				<BlogIndexListPro posts={posts} />

				{/* 🔥 Sekcja: Polecane wpisy */}
				{recommended?.length > 0 && (
					<section className="mt-5">
						<h2 className="fw-bold mb-3">Empfohlene Artikel</h2>
						<BlogIndexListPro posts={recommended} />
					</section>
				)}

				<p className="mt-5">
					<Link href="/webdesignblog">← Zurück zum Blog</Link>
				</p>
			</Container>
		</>
	);
}
