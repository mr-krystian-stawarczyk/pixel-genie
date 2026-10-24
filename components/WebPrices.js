"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactButton from "./ContactButton";

const packages = [
  { name: "STARTER", price: "499 €", subtitle: "Ein klarer Start für Selbstständige", items: ["One-Page-Website mit bis zu 5 Abschnitten", "Mobilfreundliches, modernes Layout", "Kontaktmöglichkeit und grundlegende SEO-Einstellungen", "Eine Korrekturrunde"], topic: "Anfrage STARTER Website 499 €" },
  { name: "BUSINESS", price: "899 €", subtitle: "Für Firmen mit mehreren Leistungen", items: ["Unternehmenswebsite mit bis zu 5 Inhaltsseiten", "Individuelle Gestaltung und mobilfreundliche Umsetzung", "Kontaktformular und technische SEO-Grundlagen", "Zwei Korrekturrunden"], topic: "Anfrage BUSINESS Website 899 €" },
  { name: "INDIVIDUELL", price: "auf Anfrage", subtitle: "Wenn Ihr Projekt mehr benötigt", items: ["Größere Websites, CMS oder besondere Funktionen", "Mehrsprachigkeit und Schnittstellen nach Bedarf", "Umfang und Zeitplan vorab schriftlich festgelegt", "Transparentes individuelles Angebot"], topic: "Anfrage individuelle Website" }
];

export default function WebPrices() {
  return (
    <Container id="web-design-pricing" className="my-5 py-5">
      <div className="text-center mx-auto mb-4" style={{maxWidth: 730}}>
        <h2 className="fw-bold">Websites mit klarem Umfang und fairen Preisen</h2>
        <p>Sie beschreiben kurz Ihr Vorhaben – Sie erhalten ein unverbindliches Angebot per E-Mail. Kein Verkaufsgespräch am Telefon nötig.</p>
      </div>
      <Row className="g-3 justify-content-center">
        {packages.map((plan)=>(
          <Col key={plan.name} xs={12} md={6} lg={4}>
            <div className="h-100 rounded-4 border p-4" style={{background:"var(--bg-color)",color:"var(--text-color)",borderColor:"rgba(120,140,165,.35)"}}>
              <h3 className="fw-bold h4">{plan.name}</h3>
              <p className="small">{plan.subtitle}</p>
              <p className="display-6 fw-bold">{plan.price}</p>
              <ul className="ps-3 text-start">{plan.items.map(item=><li key={item} className="mb-2">{item}</li>)}</ul>
              <ContactButton topic={plan.topic} className="btn btn-primary w-100 fw-semibold py-3">Unverbindlich anfragen</ContactButton>
            </div>
          </Col>
        ))}
      </Row>
      <p className="text-center small mt-4 mb-1">Die genannten Preise gelten für den beschriebenen Leistungsumfang. Domain, Hosting, laufende Pflege und zusätzliche Funktionen werden bei Bedarf separat vereinbart.</p>
      <p className="text-center small mb-0">Gemäß § 19 UStG wird keine Umsatzsteuer ausgewiesen.</p>
    </Container>
  );
}
