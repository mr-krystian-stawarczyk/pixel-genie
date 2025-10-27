"use client";
import React, { useEffect } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import AutoTranslateArticle from "@/components/AutoTranslateArticle";

function MediaFAQ() {
	const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });
	const controls = useAnimation();

	useEffect(() => {
		controls.start({
			opacity: inView ? 1 : 0,
			transition: { duration: 1, ease: "easeInOut" },
		});
	}, [inView, controls]);

	return (
		<motion.div
			ref={ref}
			animate={controls}
			initial={{ opacity: 0 }}
			id="design-nettetal-fragen"
			className="my-5 py-5 text-body"
		>
			<Container>
				<Row className="justify-content-center text-center mb-4">
					<Col lg={8}>
						<h2 className="fw-bold mb-3">
							Häufige Fragen zu Webdesign, SEO <br /> & Online Marketing
						</h2>

						<div style={{ color: "var(--text-color)" }}>
							<AutoTranslateArticle
								slug="faq-intro"
								html={`
In diesem FAQ beantwortet <a href="/webdesign/" class="text-decoration-none">Pixel Genie</a> die häufigsten Fragen rund um modernes <strong>Webdesign in Nettetal</strong>, <a href="/suchmaschinenoptimierung/" class="text-decoration-none">Suchmaschinenoptimierung (SEO)</a>, Performance, Ladezeiten und Marketing-Strategien. Die Inhalte basieren auf unseren Blogartikeln, wie <a href="/tips/moderne-webseite-gruende-fuer-unternehmen/" class="text-decoration-none">„Warum eine moderne Website entscheidend ist“</a> und <a href="/tips/conversion-rate-steigern-3-unsichtbare-website-fehler/" class="text-decoration-none">„Conversion-Rate steigern – 3 unsichtbare Website-Fehler“</a>.
								`}
							/>
						</div>
					</Col>
				</Row>

				<Row className="justify-content-center">
					<Col lg={10}>
						<Accordion defaultActiveKey="0" alwaysOpen className="text-body">
							{/* 1 */}
							<Accordion.Item eventKey="0">
								<Accordion.Header>
									Was kostet professionelles Webdesign in Nettetal?
								</Accordion.Header>
								<Accordion.Body className="text-body text-start">
									<AutoTranslateArticle
										slug="faq-1"
										html={`
Die Preise hängen vom gewünschten Funktionsumfang ab. Eine schlichte Business-Website startet bei <strong>ab 399 €</strong>, während umfangreiche Lösungen mit Online-Shop, individuellen Animationen oder Mehrsprachigkeit zwischen <strong>799 € – 1500 €</strong> liegen. Bei <a href="/webdesign/" class="text-decoration-none">Pixel Genie</a> erhalten Sie nicht nur eine Website, sondern ein SEO-optimiertes System mit messbarem Ranking-Potenzial. Mehr dazu in unserem Blogartikel <a href="/tips/warum-website-wichtig-7-argumente/" class="text-decoration-none">„7 Argumente, warum eine gute Website wichtig ist“</a> oder direkt auf der Seite <a href="#design-nettetal-preis" class="text-decoration-none">Webdesign-Pakete</a>.
											`}
									/>
								</Accordion.Body>
							</Accordion.Item>

							{/* 2 */}
							<Accordion.Item eventKey="1">
								<Accordion.Header>
									Wie lange dauert die Erstellung einer Website?
								</Accordion.Header>
								<Accordion.Body className="text-body text-start">
									<AutoTranslateArticle
										slug="faq-2"
										html={`
Eine kleine Website (bis 5 Seiten) ist meist in <strong>7 bis 10 Tagen</strong> online. Bei umfangreichen E-Commerce-Projekten planen wir etwa <strong>3 bis 5 Wochen</strong>.
Wir setzen auf moderne Frameworks wie <strong>Next.js</strong> und <strong>React</strong> für maximale Ladegeschwindigkeit und technische Zukunftssicherheit.
Dank unseres agilen Workflows sind auch kurzfristige Launches möglich – mehr zu unseren Prozessen unter <a href="/webdesign-agentur/nettetal/" class="text-decoration-none">Webdesign Agentur Nettetal</a>.
										`}
									/>
								</Accordion.Body>
							</Accordion.Item>

							{/* 3 */}
							<Accordion.Item eventKey="2">
								<Accordion.Header>
									Was ist der Unterschied zwischen Webdesign und Webentwicklung?
								</Accordion.Header>
								<Accordion.Body className="text-body text-start">
									<AutoTranslateArticle
										slug="faq-3"
										html={`
Beim <strong>Webdesign</strong> geht es um die visuelle Gestaltung, UX-Design, Farben, Schriften und Nutzerführung.
Die <strong>Webentwicklung</strong> hingegen befasst sich mit der technischen Umsetzung – Programmierung, Hosting, Datenbanklogik und SEO-Struktur.
<a href="/webentwicklung/nettetal/" class="text-decoration-none">Pixel Genie Nettetal</a> kombiniert beides – Design, Performance und Suchmaschinenoptimierung – damit Ihre Website nicht nur schön, sondern auch effektiv ist.
										`}
									/>
								</Accordion.Body>
							</Accordion.Item>

							{/* 4 */}
							<Accordion.Item eventKey="3">
								<Accordion.Header>
									Bieten Sie auch Suchmaschinenoptimierung (SEO) an?
								</Accordion.Header>
								<Accordion.Body className="text-body text-start">
									<AutoTranslateArticle
										slug="faq-4"
										html={`
Ja – SEO ist das Herzstück unserer Arbeit. Wir bieten sowohl technische als auch Content-Optimierung, um Ihre Sichtbarkeit bei Google zu steigern.
<ul>
<li>On-Page-Optimierung (Core Web Vitals, Ladezeit, Struktur)</li>
<li>Keyword-Analyse und Content-Strategie</li>
<li>Lokale SEO für Regionen wie <a href="/seo/viersen/" class="text-decoration-none">Viersen</a>, <a href="/seo/krefeld/" class="text-decoration-none">Krefeld</a>, <a href="/seo/venlo/" class="text-decoration-none">Venlo</a> und NRW</li>
<li>Backlink-Aufbau und Analyse</li>
</ul>
Lesen Sie auch unseren Ratgeber <a href="/tips/sichtbarkeit-im-internet-erhoehen-10-tipps/" class="text-decoration-none">„10 Tipps, um die Sichtbarkeit im Internet zu erhöhen“</a>.
										`}
									/>
								</Accordion.Body>
							</Accordion.Item>

							{/* 5 */}
							<Accordion.Item eventKey="4">
								<Accordion.Header>
									Erstellen Sie Websites auch für andere Städte oder Branchen?
								</Accordion.Header>
								<Accordion.Body className="text-body text-start">
									<AutoTranslateArticle
										slug="faq-5"
										html={`
Absolut – wir arbeiten deutschlandweit und auch mit Kunden aus den Niederlanden.
Zu unseren häufigsten Standorten gehören <a href="/webdesign-agentur/venlo/" class="text-decoration-none">Venlo</a>, <a href="/webdesign-agentur/moenchengladbach/" class="text-decoration-none">Mönchengladbach</a>, <a href="/webdesign-agentur/duesseldorf/" class="text-decoration-none">Düsseldorf</a> und <a href="/webdesign-agentur/kempen/" class="text-decoration-none">Kempen</a>.
Unsere Websites sind lokal optimiert, sodass Sie bei Google Maps und lokalen Suchergebnissen (Local SEO) besser platziert werden.
Mehr Informationen finden Sie unter <a href="/standorte/" class="text-decoration-none">Pixel Genie Standorte</a>.
										`}
									/>
								</Accordion.Body>
							</Accordion.Item>

							{/* 6 */}
							<Accordion.Item eventKey="5">
								<Accordion.Header>
									Wie läuft die Zusammenarbeit mit Pixel Genie ab?
								</Accordion.Header>
								<Accordion.Body className="text-body text-start">
									<AutoTranslateArticle
										slug="faq-6"
										html={`
Der Ablauf ist klar strukturiert:
<ol>
<li>Kostenlose Erstberatung & Analyse Ihrer Ziele</li>
<li>Individuelles Angebot + Zeitplan</li>
<li>Design & Entwicklung (UX/UI, SEO, Performance)</li>
<li>Launch & Betreuung</li>
</ol>
Nach dem Launch bieten wir Support, Sicherheits-Updates und auf Wunsch Social-Media-Kampagnen.
Jetzt direkt <a href="/kontakt/" class="text-decoration-none">Kontakt aufnehmen</a> und Ihr Projekt starten!
										`}
									/>
								</Accordion.Body>
							</Accordion.Item>

							{/* 7 */}
							<Accordion.Item eventKey="6">
								<Accordion.Header>
									Welche Vorteile bietet Pixel Genie gegenüber anderen
									Agenturen?
								</Accordion.Header>
								<Accordion.Body className="text-body text-start">
									<AutoTranslateArticle
										slug="faq-7"
										html={`
Wir sind nicht nur eine klassische Agentur, sondern ein Technologie-Partner.
Unsere Stärken:
<ul>
<li>Full-Service Agentur – Design + Entwicklung + SEO</li>
<li>Modernste Technologien (React / Next.js)</li>
<li>Lokale SEO-Spezialisierung für NRW und Grenzregion NL</li>
<li>Persönlicher Support statt Callcenter</li>
</ul>
Mit Niederlassungen in <a href="/webdesign-agentur/nettetal/" class="text-decoration-none">Nettetal</a> und <a href="/seo/venlo/" class="text-decoration-none">Venlo</a> bieten wir echten regionalen Bezug, schnelle Kommunikation und nachhaltige Ergebnisse.
Lesen Sie mehr über unsere Philosophie in <a href="/pixelgeniehistory/" class="text-decoration-none">Pixel Genie History</a>.
										`}
									/>
								</Accordion.Body>
							</Accordion.Item>

							{/* 8 */}
							<Accordion.Item eventKey="7">
								<Accordion.Header>
									Was macht eine Website erfolgreich?
								</Accordion.Header>
								<Accordion.Body className="text-body text-start">
									<AutoTranslateArticle
										slug="faq-8"
										html={`
Eine erfolgreiche Website ist die Kombination aus Design, Inhalt und Strategie.
Bei <a href="/webdesign/" class="text-decoration-none">Pixel Genie</a> setzen wir auf:
<ul>
<li>Klare Struktur und UX-Optimierung</li>
<li>Schnelle Ladezeiten (unter 1 Sekunde LCP)</li>
<li>SEO-Texte mit Conversion-Fokus</li>
<li>Regelmäßige Analysen & Content-Updates</li>
</ul>
Mehr dazu in unserem Artikel <a href="/tips/conversion-rate-steigern-3-unsichtbare-website-fehler/" class="text-decoration-none">„Conversion-Rate steigern“</a>.
										`}
									/>
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Col>
				</Row>
			</Container>

			{/* ✅ Structured FAQ for SEO — unchanged */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "FAQPage",
						mainEntity: [
							{
								"@type": "Question",
								name: "Was kostet professionelles Webdesign in Nettetal?",
								acceptedAnswer: {
									"@type": "Answer",
									text: "Professionelles Webdesign bei Pixel Genie Nettetal beginnt ab 399 €. Individuelle Lösungen mit SEO und E-Commerce liegen zwischen 799 € und 1500 €.",
								},
							},
							{
								"@type": "Question",
								name: "Wie lange dauert die Erstellung einer Website?",
								acceptedAnswer: {
									"@type": "Answer",
									text: "Je nach Projektgröße dauert die Umsetzung zwischen 7 Tagen und 5 Wochen. Wir arbeiten mit modernen Frameworks wie Next.js und React.",
								},
							},
							{
								"@type": "Question",
								name: "Bieten Sie Suchmaschinenoptimierung (SEO) an?",
								acceptedAnswer: {
									"@type": "Answer",
									text: "Ja, Pixel Genie bietet umfassende SEO-Optimierung – technisch, inhaltlich und lokal für Regionen wie Nettetal, Viersen, Venlo und ganz NRW.",
								},
							},
						],
					}),
				}}
			/>
		</motion.div>
	);
}

export default MediaFAQ;
