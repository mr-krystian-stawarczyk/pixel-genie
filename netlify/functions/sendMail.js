import nodemailer from "nodemailer";

// 💡 Rate-limit (3 requests / minute / IP)
const bucket = new Map();
const MAX = 3;
const WINDOW = 60 * 1000;

function allow(ip) {
	const now = Date.now();
	const hit = bucket.get(ip) || { n: 0, t: now };
	if (now - hit.t > WINDOW) {
		bucket.set(ip, { n: 1, t: now });
		return true;
	}
	if (hit.n >= MAX) return false;
	hit.n += 1;
	bucket.set(ip, hit);
	return true;
}

export async function handler(event) {
	if (event.httpMethod !== "POST") {
		return { statusCode: 405, body: "Method Not Allowed" };
	}

	const ip =
		event.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
		event.headers["client-ip"] ||
		"unknown";

	if (!allow(ip)) {
		return {
			statusCode: 429,
			body: JSON.stringify({
				error: "Too many requests. Please wait a minute.",
			}),
		};
	}

	let data;
	try {
		data = JSON.parse(event.body || "{}");
	} catch {
		return { statusCode: 400, body: JSON.stringify({ error: "Bad JSON" }) };
	}

	const { topic, name, email, phone, message, budget } = data || {};
	if (!email || !message) {
		return {
			statusCode: 400,
			body: JSON.stringify({ error: "Missing required fields" }),
		};
	}

	const transporter = nodemailer.createTransport({
		host: "smtp.resend.com",
		port: 465,
		secure: true,
		auth: {
			user: "resend",
			pass: process.env.RESEND_API_KEY,
		},
		tls: {
			rejectUnauthorized: false, // ⚠️ lokalny test: akceptuj self-signed certs
		},
	});

	const text = `
Thema: ${topic || "Kontaktformular"}
Name: ${name || "-"}
E-Mail: ${email}
Telefon: ${phone || "-"}
Budget: ${budget || "-"}
Nachricht:
${message}
	`.trim();

	try {
		await transporter.sendMail({
			from: "Pixel Genie <onboarding@resend.dev>",
			to: "pixelgenie.marketing@gmail.com",
			subject: `Neue Anfrage: ${topic || "Kontaktformular"}`,
			replyTo: email,
			text,
		});

		return { statusCode: 200, body: JSON.stringify({ ok: true }) };
	} catch (err) {
		console.error("❌ SMTP send error:", err);
		return {
			statusCode: 500,
			body: JSON.stringify({ error: "Mail send failed" }),
		};
	}
}
