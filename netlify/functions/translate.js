// netlify/functions/translate.js

// Prosty cache in-memory (Netlify utrzymuje krótko)
const memCache = new Map();

// Dummy tłumaczenie — możesz tu później podpiąć DeepL, OpenAI, itp.
async function fakeTranslate(text, lang) {
	// symulacja lekkiego tłumaczenia — w realnym projekcie API call
	if (lang === "de") return text; // oryginalny niemiecki → brak zmiany
	if (lang === "en") return `[EN] ${text}`;
	if (lang === "pl") return `[PL] ${text}`;
	return text;
}

export async function handler(event) {
	try {
		// 🔹 Obsługa GET i POST
		let text, lang;

		if (event.httpMethod === "GET") {
			text = event.queryStringParameters.text || "";
			lang = event.queryStringParameters.lang || "en";
		} else if (event.httpMethod === "POST") {
			const body = JSON.parse(event.body || "{}");
			text = body.text || "";
			lang = body.lang || "en";
		} else {
			return { statusCode: 405, body: "Method Not Allowed" };
		}

		const key = `${lang}::${text}`;
		if (memCache.has(key)) {
			return {
				statusCode: 200,
				body: JSON.stringify({ translation: memCache.get(key) }),
			};
		}

		// Walidacja inputu
		if (!text.trim()) {
			return {
				statusCode: 400,
				body: JSON.stringify({ error: "Missing text to translate" }),
			};
		}

		// 🔹 Wykonaj tłumaczenie
		const translation = await fakeTranslate(text, lang);

		// 🔹 Zapisz w cache
		memCache.set(key, translation);

		return {
			statusCode: 200,
			headers: {
				"Content-Type": "application/json",
				"Cache-Control": "public, max-age=86400", // 1 dzień
			},
			body: JSON.stringify({ translation }),
		};
	} catch (err) {
		console.error("translate.js error:", err);
		return {
			statusCode: 500,
			body: JSON.stringify({
				error: "Translation failed",
				translation: "",
			}),
		};
	}
}
