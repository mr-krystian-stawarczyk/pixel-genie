import Link from "next/link";
import blogPosts from "@/data/blogPosts";
import Head from "next/head";
const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://pixel-genie.de";
const CANONICAL = `${SITE}/tips`;
export default function TipsLanding() {
	const graph = {
		"@context": "https://schema.org",
		"@type": "Blog",
		name: "Pixel-Genie Tips",
		url: CANONICAL,
	};
	return (
		<>
			<Head>
				<title>Tips – Pixel-Genie Blog</title>
				<meta
					name="description"
					content="SEO-  Webentwicklungs und Wachstumsberatung für KMU."
				/>
				<link rel="canonical" href={CANONICAL} />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
				/>
			</Head>
			<main className="container" style={{ padding: "2rem 1rem" }}>
				<h1>Tips</h1>
				<ul>
					{blogPosts.map((p) => (
						<li key={p.slug}>
							<Link href={`/tips/${p.slug}`}>{p.title}</Link>
						</li>
					))}
				</ul>
			</main>
		</>
	);
}
