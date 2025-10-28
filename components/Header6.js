// /components/Header6.js
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Accordion, Row, Col } from "react-bootstrap";

export default function Header6() {
	return (
		<Container className="my-5 py-5" id="web-design-faq">
			<Row className="justify-content-center align-items-center text-center mb-4">
				<Col lg={7}>
					<Image
						src="/assets/webentwicklung-nettetal-fragen1.png"
						width={320}
						height={320}
						alt="Pixel-Genie Webentwicklung und Webdesign FAQ"
						priority
					/>
					<h2 className="fw-bold mt-3">
						Häufig gestellte Fragen zu Webdesign, SEO & Webseiten erstellen
					</h2>
					<p className="text-bold">
						Finden Sie umfassende Antworten zu Themen wie{" "}
						<strong>modernes Webdesign</strong>,{" "}
						<strong>SEO Optimierung</strong> und <strong>Webentwicklung</strong>{" "}
						– verfasst von <strong>Pixel-Genie</strong>, Ihrer{" "}
						<Link href="/webdesign-agentur" className="text-blue fw-semibold">
							<span className="text-bold">Webdesign Agentur in Nettetal</span>
						</Link>
						. Unser Ziel ist es, Unternehmen in ganz Deutschland bei der
						digitalen Transformation zu begleiten.
					</p>
				</Col>
			</Row>

			<Row className="justify-content-center">
				<Col lg={9}>
					<Accordion alwaysOpen className="shadow-lg rounded-4 overflow-hidden">
						{/* 1 */}
						<Accordion.Item eventKey="0">
							<Accordion.Header>
								Was ist Webdesign und Webseiten erstellen?
							</Accordion.Header>
							<Accordion.Body>
								Modernes Webdesign und Webseiten erstellen bedeutet weit mehr
								als eine optisch schöne Website zu gestalten. Es geht um
								<strong> Strategie, Nutzerführung und Markenidentität</strong>.
								Professionelles{" "}
								<Link href="/webdesign-agentur" className="text-blue">
									<span className="text-dark">Webdesign</span>
								</Link>{" "}
								verbindet kreative Gestaltung, technische Präzision und
								Conversion-Optimierung. Unsere{" "}
								<Link href="/webentwicklung" className="text-blue">
									<span className="text-dark">Webentwickler</span>
								</Link>{" "}
								nutzen aktuelle Technologien wie React, Next.js und Tailwind, um
								Websites zu schaffen, die schnell, sicher und für Suchmaschinen
								optimiert sind – perfekt abgestimmt auf Ihr Unternehmensziel.
							</Accordion.Body>
						</Accordion.Item>

						{/* 2 */}
						<Accordion.Item eventKey="1">
							<Accordion.Header>
								Warum ist professionelles Webdesign so wichtig?
							</Accordion.Header>
							<Accordion.Body>
								Ihre Website ist das digitale Schaufenster Ihres Unternehmens.
								Ein professionelles{" "}
								<Link href="/webdesign-agentur" className="text-blue">
									<span className="text-dark">Webdesign</span>
								</Link>{" "}
								sorgt dafür, dass Besucher sich zurechtfinden, Vertrauen
								aufbauen und zu Kunden werden. Aspekte wie UX-Design,
								Barrierefreiheit, Performance und mobile Anpassung spielen eine
								große Rolle. Darüber hinaus verbessert gutes Design die{" "}
								<Link href="/seo" className="text-blue">
									<span className="text-dark">
										Sichtbarkeit in Suchmaschinen
									</span>
								</Link>{" "}
								und stärkt Ihr Markenimage nachhaltig.
							</Accordion.Body>
						</Accordion.Item>

						{/* 3 */}
						<Accordion.Item eventKey="2">
							<Accordion.Header>
								Welche Leistungen bietet Pixel-Genie im Webdesign?
							</Accordion.Header>
							<Accordion.Body>
								Unser Leistungsspektrum deckt alles ab, was moderne
								Online-Präsenz braucht:{" "}
								<Link href="/webseitenerstellung" className="text-blue">
									<span className="text-dark">Webseitenerstellung</span>
								</Link>
								,{" "}
								<Link href="/webentwicklung" className="text-blue">
									<span className="text-dark">individuelle Webentwicklung</span>
								</Link>
								,{" "}
								<Link href="/seo" className="text-blue">
									<span className="text-dark">technisches SEO</span>
								</Link>
								, Performance-Optimierung, Wartung, Branding und
								Content-Strategie. Dabei berücksichtigen wir Conversion-Ziele,
								Nutzerverhalten, Core Web Vitals und modernes Design für
								nachhaltige Ergebnisse.
							</Accordion.Body>
						</Accordion.Item>

						{/* 4 */}
						<Accordion.Item eventKey="3">
							<Accordion.Header>
								Was sind die Vorteile professionellen Webdesigns?
							</Accordion.Header>
							<Accordion.Body>
								Professionelles Webdesign ist ein Erfolgsfaktor für jedes
								Unternehmen. Eine durchdachte Struktur, intuitive Navigation und
								eine schnelle Ladegeschwindigkeit steigern die Conversion-Rate.
								Hinzu kommen Aspekte wie Sicherheit, DSGVO-Konformität und
								responsives Design. Pixel-Genie kombiniert{" "}
								<strong>
									ästhetisches Design mit datengetriebener Strategie
								</strong>
								, um Websites zu schaffen, die Umsatz, Leads und Markenwert
								steigern.
							</Accordion.Body>
						</Accordion.Item>

						{/* 5 */}
						<Accordion.Item eventKey="4">
							<Accordion.Header>
								Welche Sprachen und Tools verwenden Sie?
							</Accordion.Header>
							<Accordion.Body>
								Wir arbeiten mit modernen Technologien wie HTML5, CSS3,
								JavaScript, React, Next.js, Node.js, PHP und Python. Diese Tools
								ermöglichen performante, skalierbare Lösungen für{" "}
								<Link href="/webentwicklung" className="text-blue">
									<span className="text-dark">
										Webentwicklung in Deutschland
									</span>
								</Link>
								. Ergänzt wird dies durch CMS-Systeme wie WordPress oder
								Headless- Lösungen, um unseren Kunden Flexibilität und Kontrolle
								zu bieten.
							</Accordion.Body>
						</Accordion.Item>

						{/* 6 */}
						<Accordion.Item eventKey="5">
							<Accordion.Header>Was ist Responsive Webdesign?</Accordion.Header>
							<Accordion.Body>
								Responsive Webdesign stellt sicher, dass Ihre Website auf jedem
								Gerät einwandfrei funktioniert – ob Smartphone, Tablet oder
								Desktop. Es optimiert nicht nur die Benutzerfreundlichkeit,
								sondern ist ein entscheidender Faktor für SEO-Ranking. Bei
								Pixel-Genie ist jedes Projekt <strong>„mobile-first“</strong>{" "}
								aufgebaut – eine Voraussetzung für modernes{" "}
								<Link href="/webdesign-agentur" className="text-blue">
									<span className="text-dark">Webdesign</span>
								</Link>{" "}
								im Jahr 2025.
							</Accordion.Body>
						</Accordion.Item>

						{/* 7 */}
						<Accordion.Item eventKey="6">
							<Accordion.Header>
								Was ist der Unterschied zwischen Frontend und Backend?
							</Accordion.Header>
							<Accordion.Body>
								Das Frontend bildet die sichtbare Benutzeroberfläche – Design,
								Layout und Interaktion. Das Backend hingegen verarbeitet Logik,
								Datenbanken und Serverkommunikation. Eine starke Zusammenarbeit
								zwischen beiden Bereichen ist essenziell für erfolgreiche{" "}
								<Link href="/webentwicklung" className="text-blue">
									<span className="text-dark">Webentwicklung</span>
								</Link>{" "}
								und optimale Ladezeiten.
							</Accordion.Body>
						</Accordion.Item>

						{/* 8 */}
						<Accordion.Item eventKey="7">
							<Accordion.Header>
								Was ist E-Commerce Entwicklung?
							</Accordion.Header>
							<Accordion.Body>
								E-Commerce Entwicklung umfasst alles von Produktkatalogen über
								Zahlungssysteme bis zu automatisierten Schnittstellen. Wir
								entwickeln sichere, skalierbare und konversionsstarke{" "}
								<Link href="/webseitenerstellung" className="text-blue">
									<span className="text-dark">Online-Shops</span>
								</Link>
								, die Ihre Marke stärken und Umsatz generieren – optimiert für
								Google Shopping, Performance Marketing und UX.
							</Accordion.Body>
						</Accordion.Item>

						{/* 9 */}
						<Accordion.Item eventKey="8">
							<Accordion.Header>Was ist ein CMS?</Accordion.Header>
							<Accordion.Body>
								Ein <strong>Content Management System</strong> ermöglicht
								einfache Inhaltsverwaltung ohne Programmierkenntnisse. Wir
								integrieren Systeme wie WordPress, Strapi oder Sanity, die volle
								Flexibilität bieten. Damit können Sie{" "}
								<Link href="/webseitenerstellung" className="text-blue">
									<span className="text-dark">Website Inhalte</span>
								</Link>{" "}
								aktualisieren, neue Seiten anlegen und SEO-optimierte Texte
								veröffentlichen – jederzeit und ohne Agenturabhängigkeit.
							</Accordion.Body>
						</Accordion.Item>

						{/* 10 */}
						<Accordion.Item eventKey="9">
							<Accordion.Header>
								Warum ist Suchmaschinenoptimierung (SEO) wichtig?
							</Accordion.Header>
							<Accordion.Body>
								Suchmaschinenoptimierung verbessert die organische Reichweite
								und den Traffic Ihrer Website. Durch technische, inhaltliche und
								strukturelle SEO-Maßnahmen steigern wir Ihr Ranking bei Google.
								Unsere{" "}
								<Link href="/seo" className="text-blue">
									<span className="text-dark">SEO Agentur</span>
								</Link>{" "}
								fokussiert sich auf nachhaltige Strategien, Keyword-Analyse,
								Core-Web-Vitals und Content-Optimierung – damit Sie langfristig
								vorn bleiben.
							</Accordion.Body>
						</Accordion.Item>

						{/* 11 */}
						<Accordion.Item eventKey="10">
							<Accordion.Header>
								Wie lange dauert die Erstellung einer Website?
							</Accordion.Header>
							<Accordion.Body>
								Der Zeitrahmen hängt von Umfang, Funktionen und
								Designkomplexität ab. Einfache Landingpages entstehen in 2–4
								Wochen, während umfangreiche Webportale oder Shops mehrere
								Monate benötigen. Dank agiler Prozesse und effizientem
								Projektmanagement halten wir Termine zuverlässig ein.
							</Accordion.Body>
						</Accordion.Item>

						{/* 12 */}
						<Accordion.Item eventKey="11">
							<Accordion.Header>
								Was kostet eine professionelle Website?
							</Accordion.Header>
							<Accordion.Body>
								Die Kosten variieren je nach Anforderungen, Funktionsumfang und
								Strategie. Bei Pixel-Genie erhalten Sie ein transparentes
								Angebot ohne versteckte Kosten – inklusive SEO-Grundoptimierung,
								Sicherheits-Setup und DSGVO-Check.{" "}
								<Link href="#contact" className="text-blue">
									<span className="text-dark">
										Jetzt unverbindlich anfragen
									</span>
								</Link>
								.
							</Accordion.Body>
						</Accordion.Item>

						{/* 13 */}
						<Accordion.Item eventKey="12">
							<Accordion.Header>
								Bieten Sie individuelle Lösungen an?
							</Accordion.Header>
							<Accordion.Body>
								Jedes Projekt wird individuell geplant und umgesetzt – keine
								Templates, kein Baukasten. Wir kombinieren{" "}
								<Link href="/webentwicklung" className="text-blue">
									<span className="text-dark">Webentwicklung</span>
								</Link>
								,{" "}
								<Link href="/webdesign-agentur" className="text-blue">
									<span className="text-dark">UI/UX Design</span>
								</Link>{" "}
								und Branding zu einem ganzheitlichen Konzept, das Ihre
								Zielgruppe emotional anspricht und gleichzeitig messbare
								Ergebnisse liefert.
							</Accordion.Body>
						</Accordion.Item>

						{/* 14 */}
						<Accordion.Item eventKey="13">
							<Accordion.Header>
								Welche Arten von Websites entwickeln Sie?
							</Accordion.Header>
							<Accordion.Body>
								Wir entwickeln Unternehmensseiten, E-Commerce Shops,
								Portfolio-Sites, Blogs und maßgeschneiderte Web-Applikationen.
								Unsere{" "}
								<Link href="/webseitenerstellung" className="text-blue">
									<span className="text-dark">Webseitenerstellung</span>
								</Link>{" "}
								folgt modernsten UI-Richtlinien, nutzt neueste Frameworks und
								ist vollständig SEO-ready.
							</Accordion.Body>
						</Accordion.Item>

						{/* 15 */}
						<Accordion.Item eventKey="14">
							<Accordion.Header>
								Bieten Sie Wartung und Support an?
							</Accordion.Header>
							<Accordion.Body>
								Ja, wir übernehmen technische Wartung, Sicherheits-Monitoring,
								Backups, Performance-Analysen und Content-Updates. Damit bleibt
								Ihre Website dauerhaft aktuell, geschützt und blitzschnell – ein
								wichtiger Faktor für SEO und Nutzerzufriedenheit.
							</Accordion.Body>
						</Accordion.Item>

						{/* 16 */}
						<Accordion.Item eventKey="15">
							<Accordion.Header>
								Können Sie bestehende Websites überarbeiten?
							</Accordion.Header>
							<Accordion.Body>
								Absolut. Wir analysieren Ihre aktuelle Website, identifizieren
								technische Schwächen und optimieren Design, UX, Performance und
								SEO. Eine Überarbeitung ist oft günstiger und nachhaltiger als
								ein kompletter Relaunch.
							</Accordion.Body>
						</Accordion.Item>

						{/* 17 */}
						<Accordion.Item eventKey="16">
							<Accordion.Header>
								Wie kann ich Ihre Dienstleistungen beauftragen?
							</Accordion.Header>
							<Accordion.Body>
								Kontaktieren Sie uns einfach über das{" "}
								<Link href="#contact" className="text-blue">
									<span className="text-dark">Kontaktformular</span>
								</Link>{" "}
								oder telefonisch. Gemeinsam besprechen wir Ihr Projekt in den
								Bereichen{" "}
								<Link href="/webentwicklung" className="text-blue">
									<span className="text-dark">Webentwicklung</span>
								</Link>
								,{" "}
								<Link href="/webdesign-agentur" className="text-blue">
									<span className="text-dark">Webdesign</span>
								</Link>{" "}
								und{" "}
								<Link href="/seo" className="text-blue">
									<span className="text-dark">SEO Optimierung</span>
								</Link>
								– für eine starke Online-Präsenz mit messbaren Ergebnissen.
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>
			</Row>
		</Container>
	);
}
