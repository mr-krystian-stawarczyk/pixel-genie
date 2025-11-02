export async function handler(event) {
	try {
		const params = new URLSearchParams(event.rawQuery);
		const text = params.get("text");
		const lang = params.get("lang")?.toLowerCase();

		if (!text || !lang) {
			return {
				statusCode: 400,
				body: JSON.stringify({ translation: text || "" }),
			};
		}

		if (lang === "de") {
			return {
				statusCode: 200,
				body: JSON.stringify({ translation: text }),
			};
		}

		// ✅ API z prostym cachingiem CDN
		const res = await fetch(
			`https://api.mymemory.translated.net/get?q=${encodeURIComponent(
				text
			)}&langpair=de|${lang}`
		);
		const data = await res.json();

		let translated =
			data?.responseData?.translatedText?.trim()?.replace(/^\[|\]$/g, "") ||
			text;

		return {
			statusCode: 200,
			headers: {
				"Content-Type": "application/json",
				// ✅ Cache 7 dni w CDN (Netlify Edge)
				"Cache-Control": "public, max-age=604800, s-maxage=604800, immutable",
			},
			body: JSON.stringify({ translation: translated }),
		};
	} catch (err) {
		return {
			statusCode: 200,
			headers: {
				"Content-Type": "application/json",
				"Cache-Control": "public, max-age=30",
			},
			body: JSON.stringify({
				translation: event.queryStringParameters?.text,
			}),
		};
	}
}
