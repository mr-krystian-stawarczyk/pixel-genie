import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import deTranslations from "./public/locales/de.json";
import plTranslations from "./public/locales/pl.json";
import engTranslations from "./public/locales/eng.json";
i18n.use(initReactI18next).init({
	lng: "de", // set the default language
	fallbackLng: "de", // if translation for current language is not available, fallback to this language
	resources: {
		de: {
			translation: deTranslations, // import the nl translations
		},
		pl: {
			translation: plTranslations, // import the pl translations
		},
		eng: {
			translation: engTranslations, // import the pl translations
		},
	},
});

export default i18n;
