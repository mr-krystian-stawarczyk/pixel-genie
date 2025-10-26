// src/i18n.js (lub gdzie trzymasz)
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// Jeśli masz de.json i chcesz – możesz zostawić, ale nie musisz.
// import deTranslations from "./locales/de.json";

i18n.use(initReactI18next).init({
	lng: "de",
	fallbackLng: "de",
	resources: {
		de: { translation: {} }, // możesz też podać deTranslations
	},
	interpolation: { escapeValue: false },
	initImmediate: false,
});

export default i18n;
