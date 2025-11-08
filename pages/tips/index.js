import Link from "next/link";
import blogPosts from "@/data/blogPosts";
import Head from "next/head";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://pixel-genie.de";
const CANONICAL = `${SITE}/webdesignblog`;

export default function TipsLanding() {
	const graph = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		name: "Pixel-Genie Blog Redirect",
		url: CANONICAL,
		description:
			"SEO-, Webentwicklungs- und Webdesign-Tipps von Pixel-Genie. Entdecke unsere Blogartikel auf der Seite Webdesignblog.",
		publisher: {
			"@type": "Organization",
			name: "Pixel-Genie",
			url: SITE,
			logo: `${SITE}/logo.png`,
		},
	};

	return (
		<>
			<Head>
				<title>Tips – Pixel-Genie Blog</title>
				<meta
					name="description"
					content="Diese Seite wurde verschoben. Besuche jetzt unseren Webdesignblog mit aktuellen Tipps rund um SEO, Webentwicklung und Online-Marketing."
				/>
				<link rel="canonical" href={CANONICAL} />
				<meta name="robots" content="noindex, nofollow" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
				/>
			</Head>

			<main
				className="container"
				style={{ padding: "4rem 1rem", textAlign: "center" }}
			>
				<h1>Diese Seite wurde verschoben</h1>
				<p style={{ margin: "1rem 0" }}>
					Du findest unsere neuesten Tipps und Artikel jetzt im{" "}
					<Link
						href="/webdesignblog"
						style={{ color: "#0070f3", textDecoration: "underline" }}
					>
						Webdesignblog
					</Link>
					.
				</p>

				<hr style={{ margin: "2rem 0" }} />

				<h2>Letzte Blogartikel</h2>
				<ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
					{blogPosts.slice(0, 5).map((p) => (
						<li key={p.slug}>
							<Link href={`/tips/${p.slug}`} style={{ color: "#0070f3" }}>
								{p.title}
							</Link>
						</li>
					))}
				</ul>
			</main>
		</>
	);
}
