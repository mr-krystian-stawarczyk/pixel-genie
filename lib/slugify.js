// /lib/slugify.js
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
	return String(input)
		.trim()
		.replace(/[^\u0000-\u00ff]/g, (ch) => MAP[ch] ?? ch)
		.normalize("NFKD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");
}
