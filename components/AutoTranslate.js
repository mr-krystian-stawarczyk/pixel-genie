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
  "Datenschutz": {pl:"Ochrona danych",en:"Privacy",nl:"Privacy"},
  "Website unverbindlich anfragen": {pl:"Zapytaj o stronę",en:"Request a website",nl:"Website aanvragen"},
  "Pakete & Preise ansehen": {pl:"Zobacz pakiety i ceny",en:"View packages & prices",nl:"Bekijk pakketten en prijzen"},
  "Kontakt per E-Mail · Kein Telefonat nötig": {pl:"Kontakt e-mailowy · bez telefonowania",en:"Contact by email · no calls required",nl:"Contact per e-mail · bellen niet nodig"},
  "Website anfragen": {pl:"Zapytaj o stronę",en:"Request a website",nl:"Website aanvragen"},
  "Blog": {pl:"Blog",en:"Blog",nl:"Blog"},
  "Webseiten Erstellen": {pl:"Tworzenie stron",en:"Website design",nl:"Websites maken"},
  "Suchmaschinenoptimierung": {pl:"Pozycjonowanie SEO",en:"Search engine optimization",nl:"Zoekmachineoptimalisatie"},
  "Webdesign Blog": {pl:"Blog o stronach",en:"Web design blog",nl:"Webdesignblog"},
  "Pixel": {pl:"O mnie",en:"About",nl:"Over mij"},
  "Cookies": {pl:"Pliki cookie",en:"Cookies",nl:"Cookies"},
  "Data Protection": {pl:"Ochrona danych",en:"Privacy policy",nl:"Privacybeleid"},
  "Haben Sie Fragen oder wünschen Sie ein unverbindliches Angebot?": {pl:"Masz pytania lub chcesz ofertę bez zobowiązań?",en:"Have a question or want a no-obligation quote?",nl:"Heeft u vragen of wilt u vrijblijvend een offerte?"},
  "In der Regel erhalten Sie innerhalb von zwei Werktagen eine Antwort.": {pl:"Zazwyczaj odpowiadam w ciągu dwóch dni roboczych.",en:"I usually reply within two working days.",nl:"Meestal ontvangt u binnen twee werkdagen antwoord."},
  "Folge uns": {pl:"Znajdź mnie także tutaj",en:"Find me here",nl:"Volg mijn werk"},
  "Weitere Einblicke und Projekte auf unseren Profilen": {pl:"Więcej projektów i informacji znajdziesz na profilach.",en:"More projects and updates on these profiles.",nl:"Meer projecten en updates op deze profielen."},
  "Eine Website, die zu Ihrem Betrieb passt": {pl:"Strona dopasowana do Twojej firmy",en:"A website made for your business",nl:"Een website die bij uw bedrijf past"},
  "Ich entwickle übersichtliche Websites, auf denen Besucher Ihre Leistungen und Kontaktmöglichkeiten schnell finden.": {pl:"Tworzę czytelne strony, na których klienci łatwo znajdują usługi i kontakt.",en:"I build clear websites where customers can easily find your services and contact details.",nl:"Ik maak overzichtelijke websites waarop klanten snel uw diensten en contactgegevens vinden."},
  "Mobilfreundlich, klar aufgebaut und auf Ihr Unternehmen zugeschnitten.": {pl:"Wygodne na telefonie, przejrzyste i dopasowane do firmy.",en:"Mobile-friendly, clear and tailored to your business.",nl:"Mobielvriendelijk, overzichtelijk en afgestemd op uw bedrijf."},
  "WEBSEITEN ERSTELLEN →": {pl:"STRONY INTERNETOWE →",en:"WEBSITE DESIGN →",nl:"WEBSITES MAKEN →"},
  "Websites maßgeschneidert nach Ihren Bedürfnissen": {pl:"Strony dopasowane do Twoich potrzeb",en:"Websites tailored to your needs",nl:"Websites op maat"},
  "Erstellung responsiver Websites für bessere Online Sichtbarkeit": {pl:"Strony dopasowane do telefonów i komputerów",en:"Responsive websites for your business",nl:"Responsive websites voor uw bedrijf"},
  "Webdesign nach den neuesten Trends": {pl:"Nowoczesny projekt, wygodna obsługa",en:"Modern design and easy navigation",nl:"Modern ontwerp en eenvoudige navigatie"},
  "SEO Optimierung für bessere Suchergebnisse": {pl:"Podstawy SEO, które ułatwiają znalezienie strony",en:"SEO foundations for better discoverability",nl:"SEO-basis voor betere vindbaarheid"},
  "WEBSEITEN PREISE": {pl:"CENY STRON",en:"WEBSITE PRICING",nl:"WEBSITEPRIJZEN"},
  "PIXEL GENIE WEBSEITEN FRAGEN": {pl:"PYTANIA O STRONY",en:"WEBSITE QUESTIONS",nl:"VRAGEN OVER WEBSITES"},
  "SEO OPTIMIERUNG": {pl:"OPTYMALIZACJA SEO",en:"SEO SERVICES",nl:"SEO-OPTIMALISATIE"},
  "Website Erstellungsprozess": {pl:"Jak powstaje Twoja strona",en:"How your website is made",nl:"Zo maken we uw website"},
  "Analyse der Kundenanforderungen": {pl:"Ustalenie potrzeb",en:"Understanding your requirements",nl:"Uw wensen bespreken"},
  "Design und Entwicklung": {pl:"Projekt i wykonanie",en:"Design and development",nl:"Ontwerp en ontwikkeling"},
  "Inhalte erstellen und implementieren": {pl:"Przygotowanie treści",en:"Preparing your content",nl:"Inhoud voorbereiden"},
  "Testen, Optimieren und Bereitstellen": {pl:"Testy i publikacja",en:"Testing and launch",nl:"Testen en publiceren"},,
  "Ich gestalte Ihre Website passend zu Ihren Leistungen und Kunden. Klare Inhalte, unkomplizierte Abstimmung und eine gute Darstellung auf Smartphones stehen dabei im Mittelpunkt.": {pl:"Projektuję stronę pod Twoją ofertę i klientów. Stawiam na czytelność, prostą współpracę i wygodę na telefonie.",en:"I tailor your website to your services and customers, focusing on clear information and a smooth mobile experience.",nl:"Ik ontwerp uw website rond uw diensten en klanten, met heldere inhoud en een goede mobiele ervaring."},
  "Ihre Website soll auf dem Handy genauso gut funktionieren wie am Computer. Ich achte auf lesbare Inhalte, kurze Wege zum Kontakt und eine saubere technische SEO-Basis.": {pl:"Strona powinna działać równie dobrze na telefonie i komputerze. Dbam o czytelność, łatwy kontakt i podstawy technicznego SEO.",en:"Your website should work just as well on a phone as on a desktop, with clear content, easy contact and sound SEO foundations.",nl:"Uw website moet op mobiel net zo goed werken als op desktop, met duidelijke tekst, eenvoudig contact en een goede SEO-basis."},
  "Modernes Webdesign muss vor allem einfach zu bedienen sein. Deshalb stehen die wichtigsten Informationen und eine klare Anfrage-Möglichkeit im Vordergrund.": {pl:"Nowoczesna strona powinna być przede wszystkim prosta w użyciu. Kluczowe informacje i kontakt stawiam na pierwszym miejscu.",en:"Modern websites should be easy to use. Clear information and a simple contact route come first.",nl:"Een moderne website moet vooral gebruiksvriendelijk zijn. Heldere informatie en eenvoudig contact staan voorop."},
  "Eine gute Website braucht verständliche Seiteninhalte und eine solide technische Grundlage. Ich berücksichtige Suchmaschinenoptimierung von Anfang an, ohne unrealistische Ranking-Versprechen.": {pl:"Dobra strona potrzebuje jasnych treści i solidnej technologii. Uwzględniam SEO od początku, bez obietnic konkretnych pozycji.",en:"A good website needs clear content and solid technology. I include SEO fundamentals without making unrealistic ranking promises.",nl:"Een goede website heeft duidelijke inhoud en een sterke technische basis nodig. Ik houd vanaf het begin rekening met SEO, zonder onrealistische beloftes."},
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
