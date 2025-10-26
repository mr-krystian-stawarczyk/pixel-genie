export async function handler(event, context) {
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

		// 🇩🇪 Oryginał po niemiecku -> bez tłumaczenia
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

		let translated = data?.responseData?.translatedText?.trim();

		// Jeśli API zwróci śmieci/identyczny tekst – oddaj oryginał
		if (
			!translated ||
			translated.toLowerCase() === text.toLowerCase() ||
			translated.includes("UNKNOWN")
		) {
			translated = text;
		}

		// Usuń przypadkowe nawiasy/brackety
		translated = translated.replace(/^\[|\]$/g, "").trim();

		return {
			statusCode: 200,
			body: JSON.stringify({ translation: translated }),
		};
	} catch (err) {
		// Full fallback — zero błędów w UI
		return {
			statusCode: 200,
			body: JSON.stringify({ translation: text || "" }),
		};
	}
}
