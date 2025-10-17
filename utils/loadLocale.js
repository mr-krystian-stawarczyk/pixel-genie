export async function loadLocale(lang = "de") {
	try {
		// Pobieramy plik z public/locales
		const response = await fetch(`/locales/${lang}.json`, {
			cache: "force-cache",
		});
		if (!response.ok) {
			console.warn(`Language loading failed : ${lang}`);
			return {};
		}
		return await response.json();
	} catch (error) {
		console.error("Translattion error", error);
		return {};
	}
}
