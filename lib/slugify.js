// /lib/slugify.js

// ✅ Obsługa niemieckich i polskich znaków + fallback Unicode
const MAP = {
	ä: "ae",
	ö: "oe",
	ü: "ue",
	ß: "ss",
	Ä: "Ae",
	Ö: "Oe",
	Ü: "Ue",
	ą: "a",
	ć: "c",
	ę: "e",
	ł: "l",
	ń: "n",
	ó: "o",
	ś: "s",
	ż: "z",
	ź: "z",
	Ą: "A",
	Ć: "C",
	Ę: "E",
	Ł: "L",
	Ń: "N",
	Ó: "O",
	Ś: "S",
	Ż: "Z",
	Ź: "Z",
};

export default function slugify(input = "") {
	return (
		String(input)
			.trim()
			// ✅ Zamiana DE/PL znaków
			.replace(/[^\u0000-\u00ff]/g, (ch) => MAP[ch] ?? ch)
			// ✅ Usuwanie akcentów Unicode
			.normalize("NFKD")
			.replace(/[\u0300-\u036f]/g, "")
			.toLowerCase()
			// ✅ Wszystkie niealfanumeryczne → "-"
			.replace(/[^a-z0-9]+/g, "-")
			.replace(/-+/g, "-")
			.replace(/^-+|-+$/g, "")
	);
}
