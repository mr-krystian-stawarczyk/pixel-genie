import fetch from "node-fetch";

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

		// 🇩🇪 Brak tłumaczenia DE (original)
		if (lang === "de") {
			return {
				statusCode: 200,
				body: JSON.stringify({ translation: text }),
			};
		}

		const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
			text
		)}&langpair=de|${lang}`;

		const r = await fetch(url);
		const data = await r.json();

		let translated = data?.responseData?.translatedText?.trim() || text;

		if (
			translated.toLowerCase() === text.toLowerCase() ||
			translated.includes("UNKNOWN") ||
			translated.includes("[")
		) {
			translated = text;
		}

		translated = translated.replace(/^\[|\]$/g, "").trim();

		return {
			statusCode: 200,
			headers: {
				"Content-Type": "application/json",
				"Cache-Control": "public, max-age=86400", // 24h
			},
			body: JSON.stringify({ translation: translated }),
		};
	} catch (err) {
		// ZERO UI ERRORS ✅
		return {
			statusCode: 200,
			headers: {
				"Cache-Control": "public, max-age=30",
			},
			body: JSON.stringify({ translation: event.queryStringParameters?.text }),
		};
	}
}
