// /lib/slugify.js

// Mapa znaków dla DE + PL (można rozszerzać)
const MAP = {
	ä: "ae",
	ö: "oe",
	ü: "ue",
	ß: "ss",
	Ä: "ae",
	Ö: "oe",
	Ü: "ue",
	ą: "a",
	ć: "c",
	ę: "e",
	ł: "l",
	ń: "n",
	ó: "o",
	ś: "s",
	ż: "z",
	ź: "z",
	Ą: "a",
	Ć: "c",
	Ę: "e",
	Ł: "l",
	Ń: "n",
	Ó: "o",
	Ś: "s",
	Ż: "z",
	Ź: "z",
};

export default function slugify(input = "") {
	return (
		String(input)
			.trim()
			// ✅ Zastąpienie znaków z mapy
			.replace(/[^\u0000-\u00ff]/g, (ch) => MAP[ch] ?? ch)
			// ✅ Usuwanie akcentów Unicode (bezpieczne fallback)
			.normalize("NFKD")
			.replace(/[\u0300-\u036f]/g, "")
			.toLowerCase()
			// ✅ Każdy nie-alfanumeryczny znak → "-"
			.replace(/[^a-z0-9]+/g, "-")
			// ✅ Usunięcie myślników z początku i końca
			.replace(/^-+|-+$/g, "")
	);
}
