"use client";
import Head from "next/head";
import Link from "next/link";
import { useRef, useState } from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { getCookie } from "cookies-next";
import { gaEvent } from "@/lib/analytics";
import { getLeadAttribution } from "@/lib/attribution";
import styles from "@/styles/ProjectWizard.module.css";

const choices = {
  project: ["new", "relaunch", "seo", "shop"],
  scope: {
    new: ["one", "few", "large", "unsure"],
    relaunch: ["one", "few", "large", "unsure"],
    seo: ["maps", "search", "both", "unsure"],
    shop: ["small", "medium", "large", "unsure"],
  },
  extras: ["seo", "languages", "content", "hosting"],
  timeline: ["soon", "month", "flexible"],
  budget: ["unknown", "under500", "500to1000", "1000to2000", "over2000"],
};

const de = {
  title: "Ihr Website-Projekt in wenigen Schritten",
  intro: "Kein Fachwissen nötig. Wählen Sie einfach, was zu Ihnen passt. Sie erhalten anschließend ein unverbindliches Angebot per E-Mail.",
  step: "Schritt", of: "von", first: "Was möchten Sie umsetzen?",
  firstHelp: "Wählen Sie das Vorhaben, das am besten passt. Es ist keine technische Entscheidung.",
  project: {
    new: ["Eine neue Website", "Mein Unternehmen soll online sichtbar werden."],
    relaunch: ["Vorhandene Website verbessern", "Meine Seite ist veraltet oder soll neu gestaltet werden."],
    seo: ["Bei Google besser gefunden werden", "Ich möchte mehr passende Besucher und Anfragen."],
    shop: ["Online verkaufen", "Ich möchte Produkte über meine Website anbieten."],
  },
  second: "Wie groß ist Ihr Vorhaben?", secondHelp: "Eine grobe Einschätzung reicht völlig. Sie können „Ich weiß es nicht“ auswählen.",
  scope: {
    new: { one:["Eine übersichtliche Seite","Alle wichtigen Infos untereinander, wie eine digitale Visitenkarte."],few:["Mehrere Unterseiten","Zum Beispiel Startseite, Leistungen, Über uns und Kontakt."],large:["Etwas Umfangreicheres","Viele Unterseiten oder besondere Funktionen."],unsure:["Ich weiß es noch nicht","Wir helfen Ihnen bei der Auswahl."] },
    relaunch: { one:["Kleinere Überarbeitung","Design oder Inhalte einer einzelnen Seite verbessern."],few:["Mehrere Seiten erneuern","Design und Struktur eines Firmenauftritts aktualisieren."],large:["Kompletter Relaunch","Größeres Projekt mit neuen Funktionen."],unsure:["Ich weiß es noch nicht","Wir schauen uns Ihre bestehende Website an."] },
    seo: { maps:["Google Unternehmensprofil","Firmeneintrag bei Google / Google Maps verbessern."],search:["Website & Google-Suche","Bestehende Website für Suchmaschinen optimieren."],both:["Beides","Website und Google-Unternehmensprofil."],unsure:["Ich weiß es noch nicht","Wir schlagen passende erste Maßnahmen vor."] },
    shop: { small:["Wenige Produkte","Kleines Sortiment, zum Beispiel unter 20 Artikel."],medium:["Mittleres Sortiment","Etwa 20 bis 100 Artikel."],large:["Großes Sortiment","Mehr als 100 Artikel oder besondere Anforderungen."],unsure:["Ich weiß es noch nicht","Wir klären den Umfang gemeinsam schriftlich."] },
  },
  third: "Was ist Ihnen außerdem wichtig?", thirdHelp: "Alles optional – lassen Sie weg, was Sie noch nicht wissen.",
  extras: { seo:["Bei Google gefunden werden","Zusätzliche Sichtbarkeit über die Grundoptimierung hinaus."],languages:["Mehrere Sprachen","Zum Beispiel Deutsch und Niederländisch."],content:["Hilfe mit Texten oder Bildern","Noch kein fertiger Inhalt? Kein Problem."],hosting:["Domain, Hosting oder Pflege","Hilfe beim Start und bei der laufenden Betreuung."] },
  when: "Wann soll es losgehen?", timeline: {soon:"Möglichst bald",month:"In den nächsten Wochen",flexible:"Ich bin flexibel"},
  budgetLabel: "Welcher Kostenrahmen passt ungefähr?", budget: {unknown:"Ich kenne mein Budget noch nicht",under500:"Unter 500 €", "500to1000":"500–1.000 €", "1000to2000":"1.000–2.000 €",over2000:"Über 2.000 €"},
  optional: "Optional", back:"Zurück", next:"Weiter", finish:"Unverbindliche Anfrage senden",
  fourth:"Fast geschafft!", fourthHelp:"Hier ist Ihre Auswahl. Ergänzen Sie nur noch Ihre Kontaktdaten.",
  result:"Voraussichtlich passend", from:"ab", custom:"Individuelles Angebot", starter:"Starter – One-Page-Website", business:"Business – bis zu 5 Inhaltsseiten",
  nonbinding:"Die Angabe ist eine Orientierung für Standard-Websites, kein verbindlicher Endpreis. Extras, Relaunch, SEO und Shops werden individuell kalkuliert. Domain und Hosting sind separat.",
  yourSelection:"Ihre Auswahl", extrasNone:"Keine zusätzlichen Wünsche gewählt",
  name:"Ihr Name", email:"E-Mail-Adresse", phone:"Telefon (freiwillig)", company:"Firma / Branche (freiwillig)", currentSite:"Bestehende Website (freiwillig)", note:"Möchten Sie uns noch etwas mitteilen? (freiwillig)",
  consentBefore:"Ich habe die ", privacy:"Datenschutzerklärung", consentAfter:" gelesen. Meine Angaben dürfen zur Bearbeitung meiner Anfrage verwendet werden.",
  noCall:"Kein Telefonat erforderlich · Antwort per E-Mail", saving:"Wird gesendet…",
  error:"Die Anfrage konnte nicht gespeichert werden. Bitte versuchen Sie es erneut oder schreiben Sie an pixelgenie.marketing@gmail.com.",
  success:"Vielen Dank! Ihre Anfrage wurde gespeichert.", successDetail:"Wir melden uns in der Regel innerhalb von zwei Werktagen schriftlich bei Ihnen.",
  home:"Zur Startseite", prices:"Pakete & Preise", required:"Bitte wählen Sie eine Antwort aus.",
  trust:"Kostenlos · Unverbindlich · Ohne Registrierung", short:"Nur vier kurze Schritte",
};
const copies = {
  de,
  pl: {
    ...de, title:"Skonfiguruj swoją stronę w kilku krokach",intro:"Bez wiedzy technicznej. Wybierz odpowiedzi, a przygotujemy niezobowiązującą ofertę e-mailem.",
    step:"Krok",of:"z", first:"Czego potrzebujesz?",firstHelp:"Wybierz to, co najlepiej pasuje. Nie musisz znać technologii.",
    project:{new:["Nowa strona internetowa","Chcę pokazać moją firmę w internecie."],relaunch:["Modernizacja istniejącej strony","Moja strona wymaga zmian."],seo:["Lepsza widoczność w Google","Potrzebuję więcej zapytań."],shop:["Sprzedaż internetowa","Chcę sprzedawać produkty online."]},
    second:"Jak duży to projekt?",secondHelp:"Wystarczy orientacyjnie. Możesz wybrać „Nie wiem”.",
    scope:{new:{one:["Jedna strona","Wszystkie informacje na jednej stronie."],few:["Kilka podstron","Na przykład oferta, o nas i kontakt."],large:["Większa witryna","Dużo podstron lub dodatkowe funkcje."],unsure:["Jeszcze nie wiem","Pomożemy wybrać."]},relaunch:{one:["Drobne zmiany","Wygląd lub zawartość jednej strony."],few:["Odnowienie kilku podstron","Wygląd i układ strony firmowej."],large:["Pełna przebudowa","Większy projekt i nowe funkcje."],unsure:["Jeszcze nie wiem","Przyjrzymy się obecnej stronie."]},seo:{maps:["Profil firmy w Google","Wizytówka Google i mapy."],search:["Pozycjonowanie strony","Poprawa widoczności strony w wyszukiwarce."],both:["Obie usługi","Strona i profil firmy."],unsure:["Jeszcze nie wiem","Zaproponujemy pierwszy krok."]},shop:{small:["Kilka produktów","Mniej niż 20 produktów."],medium:["Średnia oferta","20–100 produktów."],large:["Duży sklep","Ponad 100 produktów lub nietypowe funkcje."],unsure:["Jeszcze nie wiem","Ustalimy zakres pisemnie."]}},
    third:"Co jeszcze będzie przydatne?",thirdHelp:"Wszystko jest opcjonalne – nie musisz zgadywać.",
    extras:{seo:["Dodatkowe SEO","Większa widoczność w Google."],languages:["Wiele języków","Na przykład niemiecki i niderlandzki."],content:["Pomoc z tekstami lub zdjęciami","Nie mam jeszcze materiałów."],hosting:["Domena, hosting i opieka","Pomoc techniczna po publikacji."]},
    when:"Kiedy chcesz zacząć?",timeline:{soon:"Jak najszybciej",month:"W najbliższych tygodniach",flexible:"Nie mam terminu"},
    budgetLabel:"Jaki budżet bierzesz pod uwagę?",budget:{unknown:"Jeszcze nie wiem",under500:"Poniżej 500 €","500to1000":"500–1000 €","1000to2000":"1000–2000 €",over2000:"Powyżej 2000 €"},
    optional:"Opcjonalnie",back:"Wstecz",next:"Dalej",finish:"Wyślij niezobowiązujące zapytanie",
    fourth:"Prawie gotowe!",fourthHelp:"Oto Twoje wybory. Podaj tylko dane do kontaktu.",
    result:"Proponowany zakres",from:"od",custom:"Wycena indywidualna",starter:"Starter – jedna strona",business:"Business – do 5 podstron",
    nonbinding:"Cena orientacyjna dla standardowej strony, nie wiążąca oferta. Dodatki, przebudowy, SEO i sklepy wymagają wyceny. Domena i hosting osobno.",
    yourSelection:"Twoje wybory",extrasNone:"Bez dodatków",name:"Imię i nazwisko",email:"Adres e-mail",phone:"Telefon (opcjonalnie)",company:"Firma / branża (opcjonalnie)",currentSite:"Adres obecnej strony (opcjonalnie)",note:"Dodatkowa wiadomość (opcjonalnie)",
    consentBefore:"Zapoznałem się z ",privacy:"polityką prywatności",consentAfter:" i zgadzam się na przetwarzanie danych w celu obsługi zapytania.",
    noCall:"Bez rozmowy telefonicznej · Odpowiedź e-mailem",saving:"Wysyłanie…",error:"Nie udało się zapisać zgłoszenia. Spróbuj ponownie lub napisz na pixelgenie.marketing@gmail.com.",
    success:"Dziękujemy! Zgłoszenie zostało zapisane.",successDetail:"Zazwyczaj odpowiadamy pisemnie w ciągu dwóch dni roboczych.",
    home:"Strona główna",prices:"Pakiety i ceny",required:"Wybierz odpowiedź.",trust:"Bezpłatnie · Bez zobowiązań · Bez rejestracji",short:"Tylko 4 krótkie kroki",
  },
  en: {
    ...de,title:"Plan your website in a few steps",intro:"No technical knowledge needed. Choose what fits; receive a no-obligation quote by email.",
    step:"Step",of:"of",first:"What do you need?",firstHelp:"Choose the closest match – no technical choices required.",
    project:{new:["A new website","Put my business online."],relaunch:["Improve my existing website","Refresh an outdated website."],seo:["More visibility on Google","Attract more relevant enquiries."],shop:["Sell online","Sell products through a website."]},
    second:"How big is the project?",secondHelp:"An estimate is enough. You can choose “Not sure”.",
    scope:{new:{one:["One-page website","All key information on one page."],few:["Several pages","Services, about, contact, etc."],large:["Larger project","Many pages or special features."],unsure:["Not sure yet","We'll help you decide."]},relaunch:{one:["Small update","Refresh one page."],few:["Several pages","Improve the design and structure."],large:["Full relaunch","New features and a bigger change."],unsure:["Not sure yet","We'll review your current site."]},seo:{maps:["Google Business Profile","Business listing and maps."],search:["Website SEO","Improve organic search visibility."],both:["Both","Website and business listing."],unsure:["Not sure yet","We'll suggest the next step."]},shop:{small:["A few products","Under 20 products."],medium:["Medium range","20–100 products."],large:["Large catalogue","Over 100 products or special features."],unsure:["Not sure yet","We'll discuss the scope by email."]}},
    third:"What else would help?",thirdHelp:"Everything here is optional.",
    extras:{seo:["Extra SEO","More visibility in Google."],languages:["Multiple languages","For example German and Dutch."],content:["Help with copy or photos","I don't have the materials yet."],hosting:["Domain, hosting or support","Assistance after launch."]},
    when:"When would you like to begin?",timeline:{soon:"As soon as possible",month:"In the next few weeks",flexible:"I'm flexible"},
    budgetLabel:"What's your approximate budget?",budget:{unknown:"I'm not sure",under500:"Under €500","500to1000":"€500–1,000","1000to2000":"€1,000–2,000",over2000:"Above €2,000"},
    optional:"Optional",back:"Back",next:"Continue",finish:"Send my no-obligation enquiry",
    fourth:"Nearly done!",fourthHelp:"Review your answers and add your contact details.",result:"Suggested fit",from:"from",custom:"Custom quotation",starter:"Starter – one-page website",business:"Business – up to 5 pages",
    nonbinding:"Indicative starting price for standard websites, not a binding quote. Extras, redesigns, SEO and shops are priced individually. Domain and hosting are separate.",
    yourSelection:"Your choices",extrasNone:"No extras selected",name:"Your name",email:"Email",phone:"Phone (optional)",company:"Company / industry (optional)",currentSite:"Current website (optional)",note:"Anything else? (optional)",
    consentBefore:"I've read the ",privacy:"privacy policy",consentAfter:" and agree to the use of my data to respond to this enquiry.",
    noCall:"No phone calls needed · Reply by email",saving:"Sending…",error:"We couldn't save the enquiry. Try again or email pixelgenie.marketing@gmail.com.",
    success:"Thank you! Your enquiry was saved.",successDetail:"We normally reply by email within two business days.",home:"Homepage",prices:"Packages & pricing",required:"Please choose an answer.",
    trust:"Free · No obligation · No registration",short:"Just four short steps",
  },
  nl: {
    ...de,title:"Stel uw website samen in enkele stappen",intro:"Geen technische kennis nodig. Kies wat bij u past en ontvang vrijblijvend een offerte per e-mail.",
    step:"Stap",of:"van",first:"Wat heeft u nodig?",firstHelp:"Kies wat het beste past. Technische kennis is niet nodig.",
    project:{new:["Een nieuwe website","Mijn bedrijf online presenteren."],relaunch:["Bestaande website vernieuwen","Mijn website kan een update gebruiken."],seo:["Beter vindbaar in Google","Meer relevante aanvragen krijgen."],shop:["Online verkopen","Producten aanbieden via een webshop."]},
    second:"Hoe groot is uw project?",secondHelp:"Een schatting is prima. U kunt ook “Weet ik nog niet” kiezen.",
    scope:{new:{one:["Eén webpagina","Alle belangrijke informatie op één pagina."],few:["Meerdere pagina's","Diensten, over ons, contact enzovoort."],large:["Grotere website","Veel pagina's of speciale functies."],unsure:["Weet ik nog niet","Wij helpen u kiezen."]},relaunch:{one:["Kleine verbetering","Eén pagina aanpassen."],few:["Meerdere pagina's","Vormgeving en structuur verbeteren."],large:["Volledige vernieuwing","Een groter project met nieuwe functies."],unsure:["Weet ik nog niet","We bekijken uw huidige website."]},seo:{maps:["Google Bedrijfsprofiel","Uw bedrijf op Google en Maps."],search:["SEO voor de website","Beter vindbaar in de zoekresultaten."],both:["Allebei","Website en bedrijfsprofiel."],unsure:["Weet ik nog niet","We adviseren over de eerste stap."]},shop:{small:["Enkele producten","Minder dan 20 producten."],medium:["Middelgroot aanbod","20–100 producten."],large:["Groot assortiment","Meer dan 100 producten of extra functies."],unsure:["Weet ik nog niet","We bespreken de omvang per e-mail."]}},
    third:"Wat zou nog handig zijn?",thirdHelp:"Deze opties zijn niet verplicht.",
    extras:{seo:["Extra SEO","Beter gevonden worden in Google."],languages:["Meerdere talen","Bijvoorbeeld Duits en Nederlands."],content:["Hulp met teksten of foto's","Ik heb nog geen materiaal."],hosting:["Domein, hosting of onderhoud","Hulp na de oplevering."]},
    when:"Wanneer wilt u beginnen?",timeline:{soon:"Zo snel mogelijk",month:"Binnen enkele weken",flexible:"Ik ben flexibel"},
    budgetLabel:"Wat is ongeveer uw budget?",budget:{unknown:"Dat weet ik nog niet",under500:"Onder €500","500to1000":"€500–1.000","1000to2000":"€1.000–2.000",over2000:"Meer dan €2.000"},
    optional:"Optioneel",back:"Vorige",next:"Volgende",finish:"Vrijblijvende aanvraag verzenden",
    fourth:"Bijna klaar!",fourthHelp:"Controleer uw keuzes en vul uw gegevens in.",result:"Mogelijk passend",from:"vanaf",custom:"Offerte op maat",starter:"Starter – één webpagina",business:"Business – tot 5 pagina's",
    nonbinding:"Indicatieve startprijs voor standaardwebsites, geen bindende offerte. Extra's, vernieuwingen, SEO en webshops worden apart geoffreerd. Domein en hosting apart.",
    yourSelection:"Uw keuzes",extrasNone:"Geen extra's gekozen",name:"Uw naam",email:"E-mailadres",phone:"Telefoon (optioneel)",company:"Bedrijf / sector (optioneel)",currentSite:"Huidige website (optioneel)",note:"Nog een opmerking? (optioneel)",
    consentBefore:"Ik heb het ",privacy:"privacybeleid",consentAfter:" gelezen en ga akkoord met het gebruik van mijn gegevens voor deze aanvraag.",
    noCall:"Bellen niet nodig · Antwoord per e-mail",saving:"Verzenden…",error:"Uw aanvraag kon niet worden opgeslagen. Probeer opnieuw of mail naar pixelgenie.marketing@gmail.com.",
    success:"Bedankt! Uw aanvraag is opgeslagen.",successDetail:"Meestal reageren we binnen twee werkdagen per e-mail.",
    home:"Startpagina",prices:"Pakketten en prijzen",required:"Kies een antwoord.",
    trust:"Gratis · Vrijblijvend · Zonder account",short:"Slechts vier korte stappen",
  }
};

const initial = {
  project_type: "", project_scope: "", extras: [], timeline: "flexible", budget: "unknown",
  name: "", email: "", phone: "", company: "", current_site: "", note: "", accepted: false, website: ""
};

function Option({ active, title, description, onClick, multiple }) {
  return (
    <button type="button" aria-pressed={active} onClick={onClick}
      className={styles.option + (active ? " " + styles.chosen : "")}>
      <span className={styles.optionMark} aria-hidden="true">{active ? "✓" : multiple ? "+" : "○"}</span>
      <span className={styles.optionText}><strong>{title}</strong>{description && <small>{description}</small>}</span>
    </button>
  );
}

export default function ProjektStarten() {
  const { theme } = useTheme();
  const { i18n } = useTranslation();
  const lang = i18n.language && i18n.language.slice(0, 2);
  const t = copies[lang] || copies.de;
  const [step, setStep] = useState(0);
  const [data, setData] = useState(initial);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const sending = useRef(false);
  const topRef = useRef(null);

  const patch = (name, value) => { setData((v) => ({ ...v, [name]: value })); setError(""); };
  const chooseProject = (value) => setData((v) => ({ ...v, project_type: value, project_scope: "", extras: [] }));
  const toggleExtra = (key) => setData((v) => ({
    ...v, extras: v.extras.includes(key) ? v.extras.filter((x) => x !== key) : [...v.extras, key]
  }));
  const go = (next) => {
    if (next > step && ((step === 0 && !data.project_type) || (step === 1 && !data.project_scope))) {
      setError(t.required); return;
    }
    setError(""); setStep(next);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (getCookie("marketingConsent") === "true") {
        gaEvent("configurator_step", { step: next + 1, project_type: data.project_type || "unknown" });
      }
    }
  };
  const recommendation = data.project_type === "new" && data.project_scope === "one"
    ? { title: t.starter, price: "499 €" }
    : data.project_type === "new" && data.project_scope === "few"
      ? { title: t.business, price: "899 €" }
      : { title: t.custom, price: null };
  const extraNames = data.extras.map((key) => t.extras[key][0]);
  const submit = async (event) => {
    event.preventDefault();
    if (sending.current || status === "success" || !data.accepted || !data.name.trim() || !data.email.trim()) return;
    if (data.website) return;
    sending.current = true; setStatus("loading"); setError("");
    const reference = (typeof crypto !== "undefined" && crypto.randomUUID)
      ? crypto.randomUUID() : String(Date.now()) + "-" + Math.random().toString(36).slice(2, 10);
    const summary = [
      "Projekt: " + data.project_type,
      "Umfang: " + data.project_scope,
      "Extras: " + (data.extras.join(", ") || "keine"),
      "Zeitplan: " + data.timeline,
      "Budget: " + data.budget,
      "Empfehlung: " + recommendation.title + (recommendation.price ? " / " + recommendation.price : ""),
      "Firma/Branche: " + data.company,
      "Bestehende Seite: " + data.current_site,
      "Anmerkung: " + data.note
    ].join("\n");
    const attribution = getLeadAttribution();
    const payload = {
      ...attribution,
      "form-name": "pixel-genie-contact", lead_reference: reference, source: "/projekt-starten",
      topic: "Projektkonfigurator – " + data.project_type,
      project_type: data.project_type, project_scope: data.project_scope, extras: data.extras.join(", "),
      timeline: data.timeline, current_site: data.current_site, company: data.company,
      name: data.name.trim(), email: data.email.trim(), phone: data.phone.trim(), budget: data.budget,
      message: summary, accepted: "yes", website: data.website
    };
    try {
      const response = await fetch("/__forms.html", {
        method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(payload).toString()
      });
      if (!response.ok) throw new Error("Form storage failed: " + response.status);
      setStatus("success");
      if (getCookie("marketingConsent") === "true") {
        gaEvent("generate_lead", { form_type: "pixel_genie_configurator", lead_source: attribution.traffic_source, lead_medium: attribution.traffic_medium });
      }
      fetch("/.netlify/functions/sendMail", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: data.name.trim(), email: data.email.trim(), phone: data.phone.trim(), budget: data.budget, topic: payload.topic, message: summary, accepted: true, leadReference: reference })
      }).catch(() => {});
    } catch (e) {
      setStatus("error"); setError(t.error);
    } finally { sending.current = false; }
  };
  return (
    <>
      <Head>
        <title>Projekt konfigurieren | Pixel-Genie</title>
        <meta name="description" content="In wenigen Schritten Ihre neue Website planen. Kostenlos, unverbindlich und ohne Telefonat." />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <div className={styles.wrapper} data-mode={theme === "light" ? "light" : "dark"} ref={topRef}>
        <div className={styles.shell}>
          <div className={styles.topline}><span>PIXEL-GENIE</span><Link href="/">{t.home}</Link></div>
          {status === "success" ? (
            <section className={styles.success} role="status" aria-live="polite">
              <span className={styles.successIcon} aria-hidden="true">✓</span>
              <h1>{t.success}</h1><p>{t.successDetail}</p><Link className={styles.primary} href="/">{t.home}</Link>
            </section>
          ) : (
            <>
              <header className={styles.intro}><p className={styles.eyebrow}>{t.short}</p><h1>{t.title}</h1><p>{t.intro}</p></header>
              <div className={styles.progressWrap}>
                <div className={styles.progressText}><span>{t.step} {step + 1} {t.of} 4</span><span>{Math.round((step + 1) * 25)}%</span></div>
                <div className={styles.track} role="progressbar" aria-valuenow={step + 1} aria-valuemin={1} aria-valuemax={4}
                  aria-label={t.step}><span style={{ width: ((step + 1) * 25) + "%" }}/></div>
              </div>
              <section className={styles.panel} aria-labelledby="wizard-heading">
                <h2 id="wizard-heading">{[t.first,t.second,t.third,t.fourth][step]}</h2>
                <p className={styles.help}>{[t.firstHelp,t.secondHelp,t.thirdHelp,t.fourthHelp][step]}</p>
                {step === 0 && (
                  <div className={styles.grid}>
                    {choices.project.map((key) =>
                      <Option key={key} active={data.project_type === key} title={t.project[key][0]} description={t.project[key][1]} onClick={() => {chooseProject(key); setError("");}} />
                    )}
                  </div>
                )}
                {step === 1 && data.project_type && (
                  <div className={styles.grid}>
                    {choices.scope[data.project_type].map((key) =>
                      <Option key={key} active={data.project_scope === key} title={t.scope[data.project_type][key][0]}
                        description={t.scope[data.project_type][key][1]} onClick={() => patch("project_scope",key)} />
                    )}
                  </div>
                )}
                {step === 2 && (
                  <>
                    <div className={styles.grid}>
                      {choices.extras.filter((key) => !(key === "seo" && data.project_type === "seo")).map((key) =>
                        <Option key={key} active={data.extras.includes(key)} title={t.extras[key][0]} description={t.extras[key][1]}
                          multiple onClick={() => toggleExtra(key)} />
                      )}
                    </div>
                    <div className={styles.twoCols}>
                      <label className={styles.field}>{t.when}<select value={data.timeline} onChange={(e) => patch("timeline",e.target.value)}>
                        {choices.timeline.map((key) => <option key={key} value={key}>{t.timeline[key]}</option>)}
                      </select></label>
                      <label className={styles.field}>{t.budgetLabel}<select value={data.budget} onChange={(e) => patch("budget",e.target.value)}>
                        {choices.budget.map((key) => <option key={key} value={key}>{t.budget[key]}</option>)}
                      </select></label>
                    </div>
                  </>
                )}
                {step === 3 && (
                  <form onSubmit={submit} name="pixel-genie-contact" method="post">
                    <input type="hidden" name="form-name" value="pixel-genie-contact"/>
                    <div className={styles.recommendation}>
                      <span>{t.result}</span><strong>{recommendation.title}</strong>
                      <b>{recommendation.price ? t.from + " " + recommendation.price : t.custom}</b>
                      <small>{t.nonbinding}</small>
                    </div>
                    <div className={styles.review}>
                      <strong>{t.yourSelection}</strong>
                      <span>{t.project[data.project_type][0]} · {t.scope[data.project_type][data.project_scope][0]}</span>
                      <span>{extraNames.length ? extraNames.join(" · ") : t.extrasNone}</span>
                    </div>
                    <div className={styles.twoCols}>
                      <label className={styles.field}>{t.name} *<input name="name" autoComplete="name" required maxLength={120} value={data.name} onChange={(e)=>patch("name",e.target.value)} /></label>
                      <label className={styles.field}>{t.email} *<input name="email" type="email" autoComplete="email" required maxLength={180} value={data.email} onChange={(e)=>patch("email",e.target.value)} /></label>
                      <label className={styles.field}>{t.company}<input name="company" autoComplete="organization" maxLength={150} value={data.company} onChange={(e)=>patch("company",e.target.value)} /></label>
                      <label className={styles.field}>{t.phone}<input name="phone" type="tel" autoComplete="tel" maxLength={50} value={data.phone} onChange={(e)=>patch("phone",e.target.value)} /></label>
                    </div>
                    {data.project_type !== "new" && <label className={styles.field}>{t.currentSite}<input name="current_site" type="text" inputMode="url" maxLength={250} placeholder="https://" value={data.current_site} onChange={(e)=>patch("current_site",e.target.value)} /></label>}
                    <label className={styles.field}>{t.note}<textarea name="note" rows={3} maxLength={2500} value={data.note} onChange={(e)=>patch("note",e.target.value)} /></label>
                    <div className={styles.honeypot} aria-hidden="true"><label>Leave empty<input tabIndex={-1} name="website" autoComplete="off" value={data.website} onChange={(e)=>patch("website",e.target.value)} /></label></div>
                    <label className={styles.agreement}><input type="checkbox" required checked={data.accepted} onChange={(e)=>patch("accepted",e.target.checked)}/>
                      <span>{t.consentBefore}<Link href="/impressum" target="_blank" rel="noopener noreferrer">{t.privacy}</Link>{t.consentAfter}</span>
                    </label>
                    <p className={styles.noCall}>{t.noCall}</p>
                    {error && <p role="alert" className={styles.error}>{error}</p>}
                    <div className={styles.actions}>
                      <button className={styles.secondary} type="button" onClick={() => go(2)}>{t.back}</button>
                      <button className={styles.primary} disabled={status === "loading"} type="submit">{status === "loading" ? t.saving : t.finish}</button>
                    </div>
                  </form>
                )}
                {step !== 3 && (
                  <>
                    {error && <p role="alert" className={styles.error}>{error}</p>}
                    <div className={styles.actions}>
                      {step > 0 && <button type="button" className={styles.secondary} onClick={()=>go(step - 1)}>{t.back}</button>}
                      <button type="button" className={styles.primary} onClick={()=>go(step + 1)}>{t.next} →</button>
                    </div>
                  </>
                )}
              </section>
              <div className={styles.under}><span>✓ {t.trust}</span><Link href="/webseitenerstellen#web-design-pricing">{t.prices}</Link></div>
            </>
          )}
        </div>
      </div>
    </>
  );
}