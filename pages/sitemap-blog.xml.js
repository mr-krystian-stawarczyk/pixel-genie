// /pages/sitemap-blog.xml.js
import blogPosts from "@/data/blogPosts";

function generateBlogSitemap(domain) {
	return `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${blogPosts
				.map(
					(a) => `
          <url>
            <loc>${domain}/tips/${a.slug}/</loc>
            <lastmod>${new Date(a.date).toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.95</priority>
          </url>
        `
				)
				.join("")}
    </urlset>
  `;
}

export async function getStaticProps({ res }) {
	const domain = "https://pixel-genie.de";
	const xml = generateBlogSitemap(domain);

	if (typeof res !== "undefined") {
		res.setHeader("Content-Type", "application/xml");
		res.write(xml);
		res.end();
	}

	return {
		props: {},
	};
}

export default function Sitemap() {
	return null;
}
