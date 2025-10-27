// netlify/functions/ping_sitemaps.js

export async function handler() {
	const sitemapUrl = "https://pixel-genie.de/sitemap.xml";
	const googlePing = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
	const bingPing = `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;

	try {
		await Promise.all([fetch(googlePing), fetch(bingPing)]);

		return {
			statusCode: 200,
			body: JSON.stringify({ success: true, pinged: [googlePing, bingPing] }),
		};
	} catch (err) {
		return {
			statusCode: 500,
			body: JSON.stringify({ success: false, error: err.message }),
		};
	}
}
