"use client";
import { useTranslation } from "react-i18next";

const translations = {
  "Professionelle Website für Ihr Unternehmen – ab 499 €": {
    pl: "Profesjonalna strona dla Twojej firmy – od 499 €",
    en: "Professional business website – from €499",
    nl: "Professionele website voor uw bedrijf – vanaf €499"
  },
  "Webdesign aus Nettetal: mobilfreundlich, schnell und zum klar vereinbarten Preis. Fragen Sie Ihr Angebot einfach schriftlich an.": {
    pl: "Tworzę szybkie strony przyjazne telefonom, w przejrzystej cenie. Zapytaj pisemnie o ofertę.",
    en: "Mobile-friendly, fast websites with transparent pricing. Request your quote in writing.",
    nl: "Snelle, mobielvriendelijke websites tegen duidelijke prijzen. Vraag schriftelijk een offerte aan."
  },
  "Webseiten erstellen": {pl:"Tworzenie stron",en:"Website design",nl:"Websites maken"},
  "SEO Optimierung": {pl:"Optymalizacja SEO",en:"SEO services",nl:"SEO-optimalisatie"},
  "Social Media Marketing": {pl:"Marketing społecznościowy",en:"Social media marketing",nl:"Socialmediamarketing"},
  "Kostenlose Analyse": {pl:"Bezpłatna analiza",en:"Free website review",nl:"Gratis websiteanalyse"},
  "Jetzt starten": {pl:"Zapytaj o stronę",en:"Get a quote",nl:"Vraag een offerte aan"},
  "Kontakt": {pl:"Kontakt",en:"Contact",nl:"Contact"},
  "Dienste": {pl:"Usługi",en:"Services",nl:"Diensten"},
  "Startseite": {pl:"Strona główna",en:"Home",nl:"Startpagina"},
  "Webseiten": {pl:"Strony internetowe",en:"Websites",nl:"Websites"},
  "Branding": {pl:"Identyfikacja marki",en:"Branding",nl:"Branding"},
  "Über uns": {pl:"O mnie",en:"About me",nl:"Over mij"},
  "Unternehmen": {pl:"Firma",en:"Company",nl:"Bedrijf"},
  "Tipps": {pl:"Porady",en:"Advice",nl:"Tips"},
  "Produkte": {pl:"Oferta",en:"Services",nl:"Aanbod"},
  "Impressum": {pl:"Dane firmy",en:"Legal notice",nl:"Colofon"},
  "✨ Jetzt Kontakt aufnehmen": {pl:"Napisz do mnie",en:"Contact me",nl:"Neem contact op"},
  "Datenschutz": {pl:"Ochrona danych",en:"Privacy",nl:"Privacy"}
};
const normalize = (s) => s.replace(/\s+/g, " ").trim();
export default function AutoTranslate({children}) {
  const {i18n} = useTranslation();
  const source = typeof children === "string" ? normalize(children) : children;
  if (typeof source !== "string") return <>{children}</>;
  const target = translations[source]?.[i18n.language];
  // Don't pretend a text was translated if no reviewed translation exists.
  return <span>{target || source}</span>;
}
