import { Resend } from "resend";

// Prosty limiter (RAM-based, resetuje się automatycznie po ~60 sek.)
const rateLimit = new Map();
const MAX_REQUESTS = 3;
const WINDOW_MS = 60 * 1000; // 1 minuta

function checkRateLimit(ip) {
	const now = Date.now();
	const entry = rateLimit.get(ip) || { count: 0, start: now };

	if (now - entry.start > WINDOW_MS) {
		// reset
		rateLimit.set(ip, { count: 1, start: now });
		return true;
	}

	if (entry.count >= MAX_REQUESTS) {
		return false;
	}

	entry.count += 1;
	rateLimit.set(ip, entry);
	return true;
}
console.log(
	"🔑 RESEND_API_KEY:",
	process.env.RESEND_API_KEY ? "Loaded" : "Missing"
);
const resend = new Resend(process.env.RESEND_API_KEY);

export async function handler(event) {
	if (event.httpMethod !== "POST") {
		return { statusCode: 405, body: "Method Not Allowed" };
	}

	const ip =
		event.headers["x-forwarded-for"]?.split(",")[0] ||
		event.headers["client-ip"] ||
		"unknown";

	if (!checkRateLimit(ip)) {
		return {
			statusCode: 429,
			body: JSON.stringify({
				error: "Too many requests. Please wait a minute.",
			}),
		};
	}

	try {
		const data = JSON.parse(event.body);

		if (!data.email || !data.message) {
			return {
				statusCode: 400,
				body: JSON.stringify({ error: "Missing required fields" }),
			};
		}

		await resend.emails.send({
			from: "Pixel Genie <noreply@pixelgenie.dev>",
			to: "pixelgenie.marketing@gmail.com",
			subject: `Neue Anfrage: ${data.topic || "Kontaktformular"}`,
			reply_to: data.email,
			text: `
Thema: ${data.topic}
Name: ${data.name}
E-Mail: ${data.email}
Telefon: ${data.phone}
Nachricht:
${data.message}
      `,
		});

		return {
			statusCode: 200,
			body: JSON.stringify({ ok: true }),
		};
	} catch (err) {
		console.error("❌ Mail send error:", err);
		return {
			statusCode: 500,
			body: JSON.stringify({ error: "Mail send failed" }),
		};
	}
}
