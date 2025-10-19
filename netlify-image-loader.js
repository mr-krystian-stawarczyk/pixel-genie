/**
 * Custom Netlify Image Loader
 * Proxy obrazów do CDN Netlify dla exportowanych buildów
 */
export default function netlifyImageLoader({ src, width, quality }) {
	const params = new URLSearchParams({ w: width.toString() });
	if (quality) params.set("q", quality.toString());
	return `/_next/image?url=${encodeURIComponent(src)}&${params.toString()}`;
}
