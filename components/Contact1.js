import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { AiOutlineMail, AiOutlineLaptop } from "react-icons/ai";
import ContactButton from "@/components/ContactButton";

export default function Contact1() {
  return (
    <Container>
      <Row className="my-5 py-5 justify-content-center text-center align-items-stretch">
        <Col lg={4} className="my-3 mx-auto">
          <Card style={{ minWidth: "18rem", height: "100%" }} className="bg-transparent border-0 shadow-lg">
            <Card.Body>
              <AiOutlineMail style={{ fontSize: "4rem" }} aria-hidden="true" />
              <Card.Title>E-Mail</Card.Title>
              <Card.Text>Sie möchten lieber schreiben? Wir freuen uns auf Ihre Anfrage.</Card.Text>
              <Button className="btn-nav" href="mailto:pixelgenie.marketing@gmail.com?subject=Webdesign%20Anfrage">
                E-Mail schreiben
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} className="my-3 mx-auto">
          <Card style={{ minWidth: "18rem", height: "100%" }} className="bg-transparent border-0 shadow-lg">
            <Card.Body>
              <AiOutlineLaptop style={{ fontSize: "4rem" }} aria-hidden="true" />
              <Card.Title>Online &amp; persönlich nach Vereinbarung</Card.Title>
              <Card.Text>
                Wir arbeiten überwiegend online und schriftlich. Persönliche Termine
                bei Ihnen vor Ort sind nach Absprache möglich. Kein Kundenbüro vor Ort.
              </Card.Text>
              <ContactButton
                className="btn btn-nav"
                topic="Kontaktseite – Projektanfrage"
              >
                Website schriftlich anfragen
              </ContactButton>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
