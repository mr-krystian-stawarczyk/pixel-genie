// ✅ /netlify/functions/og.js — kompatybilna wersja dla Netlify
import satori from "satori";
import { Resvg } from "@resvg/resvg-js"; // <-- zamiast resvg-wasm

export const handler = async (event) => {
	try {
		const params = new URLSearchParams(event.rawQuery || "");
		const title = (params.get("title") || "Pixel-Genie Blog").slice(0, 160);
		const subtitle = (
			params.get("subtitle") || "Webdesign • SEO • Growth in NRW"
		).slice(0, 140);
		const bg = params.get("bg");

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
			{ width: 1200, height: 630 }
		);

		// ✅ render with @resvg/resvg-js (pure JS)
		const png = new Resvg(svg, {
			fitTo: { mode: "width", value: 1200 },
		})
			.render()
			.asPng();

		return {
			statusCode: 200,
			headers: {
				"Content-Type": "image/png",
				"Cache-Control": "public, max-age=604800, immutable",
			},
			body: Buffer.from(png).toString("base64"),
			isBase64Encoded: true,
		};
	} catch (err) {
		return {
			statusCode: 500,
			body: err?.message || "OG generation error",
		};
	}
};
