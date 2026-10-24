"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactButton from "./ContactButton";
import { useTranslation } from "react-i18next";

const packages = [
  { name: "STARTER", price: "499 €", subtitle: "Ein klarer Start für Selbstständige", items: ["One-Page-Website mit bis zu 5 Abschnitten", "Mobilfreundliches, modernes Layout", "Kontaktmöglichkeit und grundlegende SEO-Einstellungen", "Eine Korrekturrunde"], topic: "Anfrage STARTER Website 499 €" },
  { name: "BUSINESS", price: "899 €", subtitle: "Für Firmen mit mehreren Leistungen", items: ["Unternehmenswebsite mit bis zu 5 Inhaltsseiten", "Individuelle Gestaltung und mobilfreundliche Umsetzung", "Kontaktformular und technische SEO-Grundlagen", "Zwei Korrekturrunden"], topic: "Anfrage BUSINESS Website 899 €" },
  { name: "INDIVIDUELL", price: "auf Anfrage", subtitle: "Wenn Ihr Projekt mehr benötigt", items: ["Größere Websites, CMS oder besondere Funktionen", "Mehrsprachigkeit und Schnittstellen nach Bedarf", "Umfang und Zeitplan vorab schriftlich festgelegt", "Transparentes individuelles Angebot"], topic: "Anfrage individuelle Website" }
];

const localeCopy = {
 pl: {headline:"Przejrzyste pakiety stron internetowych",desc:"Opisz swój projekt, a otrzymasz niezobowiązującą ofertę e-mailem. Rozmowa telefoniczna nie jest wymagana.", ask:"Zapytaj o ofertę", foot:"Podane ceny dotyczą opisanego zakresu. Domena, hosting, utrzymanie i dodatkowe funkcje są wyceniane osobno.", vat:"Zgodnie z § 19 UStG podatek VAT nie jest wykazywany.", names:["START","BIZNES","INDYWIDUALNIE"], subtitles:["Dobry start dla małych firm","Dla firm z kilkoma usługami","Dla bardziej rozbudowanych projektów"], other:"na zapytanie", features:[["Strona One-Page do 5 sekcji","Nowoczesny wygląd na telefonach","Kontakt i podstawowe ustawienia SEO","Jedna runda poprawek"],["Do 5 podstron firmowych","Indywidualny wygląd mobilny","Formularz i podstawy SEO","Dwie rundy poprawek"],["Większe strony, CMS lub dodatkowe funkcje","Wiele języków i integracje według potrzeb","Zakres i termin uzgodnione pisemnie","Przejrzysta wycena"]] },
 en: {headline:"Website packages with a clear scope",desc:"Describe your project and receive a no-obligation quote by email. No phone call required.",ask:"Request a quote",foot:"Prices cover the listed scope. Domain, hosting, maintenance and additional features are quoted separately.",vat:"Under section 19 UStG, no VAT is charged.", names:["STARTER","BUSINESS","CUSTOM"],subtitles:["A clear start for small businesses","For companies with several services","For more advanced projects"],other:"on request",features:[["One-page website with up to 5 sections","Mobile-friendly modern layout","Contact options and basic SEO","One revision round"],["Up to 5 website pages","Custom mobile-friendly design","Contact form and technical SEO basics","Two revision rounds"],["Larger websites, CMS or special features","Multilingual features and integrations as needed","Written scope and timeline","Clear individual quote"]] },
 nl: {headline:"Websites met heldere pakketten en prijzen",desc:"Beschrijf uw project en ontvang vrijblijvend een offerte per e-mail. Bellen is niet nodig.",ask:"Offerte aanvragen",foot:"De prijzen gelden voor de omschreven werkzaamheden. Domein, hosting, onderhoud en extra functies worden afzonderlijk aangeboden.",vat:"Volgens § 19 UStG wordt geen btw in rekening gebracht.",names:["STARTER","BUSINESS","OP MAAT"], subtitles:["Een duidelijke start voor zelfstandigen","Voor bedrijven met meerdere diensten","Voor uitgebreidere projecten"],other:"op aanvraag",features:[["One-page website met maximaal 5 secties","Modern mobielvriendelijk ontwerp","Contact en basis-SEO","Eén correctieronde"],["Tot 5 pagina's","Individueel mobielvriendelijk ontwerp","Contactformulier en technische basis-SEO","Twee correctierondes"],["Grotere websites, CMS of extra functies","Meertaligheid en koppelingen indien nodig","Omvang en planning vooraf afgesproken","Transparante offerte"]] }
};
export default function WebPrices() {
  const { i18n } = useTranslation();
  const t = localeCopy[i18n.language];
  return (
    <Container id="web-design-pricing" className="my-5 py-5">
      <div className="text-center mx-auto mb-4" style={{maxWidth: 730}}>
        <h2 className="fw-bold">{t?.headline || "Websites mit klarem Umfang und fairen Preisen"}</h2>
        <p>{t?.desc || "Sie beschreiben kurz Ihr Vorhaben – Sie erhalten ein unverbindliches Angebot per E-Mail. Kein Verkaufsgespräch am Telefon nötig."}</p>
      </div>
      <Row className="g-3 justify-content-center">
        {packages.map((plan, index)=>(
          <Col key={plan.name} xs={12} md={6} lg={4}>
            <div className="h-100 rounded-4 border p-4" style={{background:"var(--bg-color)",color:"var(--text-color)",borderColor:"rgba(120,140,165,.35)"}}>
              <h3 className="fw-bold h4">{t?.names[index] || plan.name}</h3>
              <p className="small">{t?.subtitles[index] || plan.subtitle}</p>
              <p className="display-6 fw-bold">{t && index === 2 ? t.other : plan.price}</p>
              <ul className="ps-3 text-start">{(t?.features[index] || plan.items).map(item=><li key={item} className="mb-2">{item}</li>)}</ul>
              <ContactButton topic={plan.topic} className="btn btn-primary w-100 fw-semibold py-3">{t?.ask || "Unverbindlich anfragen"}</ContactButton>
            </div>
          </Col>
        ))}
      </Row>
      <p className="text-center small mt-4 mb-1">{t?.foot || "Die genannten Preise gelten für den beschriebenen Leistungsumfang. Domain, Hosting, laufende Pflege und zusätzliche Funktionen werden bei Bedarf separat vereinbart."}</p>
      <p className="text-center small mb-0">{t?.vat || "Gemäß § 19 UStG wird keine Umsatzsteuer ausgewiesen."}</p>
    </Container>
  );
}
