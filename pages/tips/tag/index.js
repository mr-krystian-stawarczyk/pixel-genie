// /pages/tips/tag/index.js
import Head from "next/head";
import Link from "next/link";
import { Container } from "react-bootstrap";
import blogPosts from "@/data/blogPosts";

export async function getStaticProps() {
	const tags = new Set();
	blogPosts.forEach((p) => p.tags?.forEach((t) => tags.add(t)));
	return {
		props: { tags: Array.from(tags) },
	};
}

export default function TagIndex({ tags }) {
	return (
		<>
			<Head>
				<title>Alle Blog Themen – Pixel-Genie</title>
				<meta name="description" content="Übersicht aller Themenbereiche" />
				<link rel="canonical" href="https://pixel-genie.de/tips/tag" />
			</Head>

			<Container className="pt-5">
				<h1 className="fw-bold mb-4">Alle Themen</h1>
				{tags.map((t) => (
					<p key={t} className="mb-2">
						<Link href={`/tips/tag/${t.toLowerCase()}`}>{t}</Link>
					</p>
				))}
			</Container>
		</>
	);
}
