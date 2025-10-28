// /netlify/functions/og.js
const satori = require("satori");
const { Resvg } = require("@resvg/resvg-js");

/**
 * Quick OG generator: /.netlify/functions/og?title=...&subtitle=...&bg=...
 * bg (optional): absolute URL to background image
 */
exports.handler = async (event) => {
	try {
		const params = new URLSearchParams(event.rawQuery || "");
		const title = (params.get("title") || "Pixel-Genie Blog").slice(0, 160);
		const subtitle = (
			params.get("subtitle") || "Webdesign • SEO • Growth in NRW"
		).slice(0, 140);
		const bg = params.get("bg");

		// Simple style (no external fonts to keep function portable)
		const svg = await satori(
			{
				type: "div",
				props: {
					style: {
						width: "1200px",
						height: "630px",
						display: "flex",
						flexDirection: "column",
						justifyContent: "flex-end",
						padding: "56px",
						background: bg
							? `url('${bg}') center / cover no-repeat`
							: "linear-gradient(135deg,#003681 0%,#0b5ed7 60%,#66a3ff 100%)",
						color: "#fff",
						fontFamily: "sans-serif",
					},
					children: [
						{
							type: "div",
							props: {
								style: {
									fontSize: "58px",
									lineHeight: 1.2,
									fontWeight: 800,
									textShadow: "0 4px 16px rgba(0,0,0,.35)",
								},
								children: title,
							},
						},
						{
							type: "div",
							props: {
								style: {
									marginTop: "16px",
									fontSize: "28px",
									fontWeight: 600,
									opacity: 0.95,
									textShadow: "0 2px 10px rgba(0,0,0,.35)",
								},
								children: subtitle,
							},
						},
						{
							type: "div",
							props: {
								style: {
									marginTop: "28px",
									fontSize: "22px",
									fontWeight: 700,
									opacity: 0.9,
								},
								children: "pixel-genie.de",
							},
						},
					],
				},
			},
			{
				width: 1200,
				height: 630,
			}
		);

		const png = new Resvg(svg, {
			background: "rgba(0,0,0,0)",
			fitTo: { mode: "width", value: 1200 },
		}).render();

		return {
			statusCode: 200,
			headers: {
				"Content-Type": "image/png",
				"Cache-Control": "public, max-age=604800, immutable",
			},
			body: png.asPng().toString("base64"),
			isBase64Encoded: true,
		};
	} catch (e) {
		return { statusCode: 500, body: e?.message || "OG error" };
	}
};
