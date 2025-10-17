import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import deTranslations from "./locales/de.json"; // DE ładowany od razu

// Inicjalizacja i18n z niemieckim jako domyślnym
i18n.use(initReactI18next).init({
	lng: "de",
	fallbackLng: "de",
	resources: {
		de: { translation: deTranslations },
	},
	interpolation: { escapeValue: false },
});

export default i18n;

// Funkcja do dynamicznego ładowania języków
export const loadLanguage = async (lng) => {
	if (!i18n.hasResourceBundle(lng, "translation")) {
		const resources = await import(`./locales/${lng}.json`);
		i18n.addResourceBundle(lng, "translation", resources.default || resources);
	}
	i18n.changeLanguage(lng);
};
