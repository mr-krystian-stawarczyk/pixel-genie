// /pages/rss.xml.js
import blogPosts from "@/data/blogPosts";

export async function getStaticProps({ res }) {
	const domain = "https://pixel-genie.de";

	const rss = `
    <rss version="2.0">
      <channel>
        <title>Pixel-Genie Blog</title>
        <link>${domain}/webdesignblog</link>
        <description>Webdesign & SEO Strategien für Unternehmen in NRW</description>
        ${blogPosts
					.map(
						(p) => `
              <item>
                <title><![CDATA[${p.title}]]></title>
                <link>${domain}/tips/${p.slug}/</link>
                <pubDate>${new Date(p.date).toUTCString()}</pubDate>
                <description><![CDATA[${p.description}]]></description>
              </item>
            `
					)
					.join("")}
      </channel>
    </rss>
  `.trim();

	if (res) {
		res.setHeader("Content-Type", "application/xml");
		res.write(rss);
		res.end();
	}

	return { props: {} };
}

export default function RSSFeed() {
	return null;
}
