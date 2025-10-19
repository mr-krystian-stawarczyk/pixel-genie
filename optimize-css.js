/**
 * optimize-css.js
 * Wstawia krytyczny CSS inline do wygenerowanych plików HTML (out/)
 * Działa po `next build` w procesie Netlify builda
 */

import fs from "fs";
import path from "path";
import Critters from "critters";

const distDir = path.join(process.cwd(), "out");

async function inlineCriticalCSS() {
	console.log("🚀 Inlining critical CSS with Critters...");

	const critters = new Critters({
		path: distDir,
		preload: "swap", // automatyczny preload
		inlineFonts: true,
		pruneSource: true,
		logLevel: "info",
	});

	const files = fs.readdirSync(distDir).filter((f) => f.endsWith(".html"));

	for (const file of files) {
		const filePath = path.join(distDir, file);
		let html = fs.readFileSync(filePath, "utf-8");

		try {
			const optimized = await critters.process(html);
			fs.writeFileSync(filePath, optimized);
			console.log(`✅ Inlined CSS for: ${file}`);
		} catch (err) {
			console.error(`❌ Błąd optymalizacji ${file}:`, err);
		}
	}

	console.log("✨ Critical CSS inline zakończony.");
}

inlineCriticalCSS();
