// /pages/impressum.js
import Head from "next/head";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Impressum() {
	return (
		<Container className="my-5 py-5">
			<Head>
				<title>
					Impressum & Datenschutzerklärung | Pixel-Genie Webagentur Nettetal
				</title>
				<meta
					name="description"
					content="Impressum und Datenschutzerklärung der Pixel-Genie Webagentur in Nettetal – rechtssicher, transparent und DSGVO-konform."
				/>
				<meta name="robots" content="index, follow" />
				<link rel="canonical" href="https://pixel-genie.de/impressum" />
			</Head>

			{/* --- IMPRESSUM --- */}
			<Row className="text-center mb-5">
				<h1>Impressum</h1>
			</Row>

			<Row className="justify-content-center">
				<Col lg={6} className="mb-3">
					<Card className="bg-transparent border-0">
						<Card.Body>
							<Card.Title className="text-white bg-dark rounded p-1">
								Angaben gemäß § 5 TMG
							</Card.Title>
							<p>
								<strong>Pixel-Genie</strong>
								<br />
								Inhaber: Krystian Stawarczyk
							</p>
							<p>
								Fasanenstraße 10
								<br />
								41334 Nettetal
								<br />
								Deutschland
							</p>
							<p>
								Telefon: (+48) 726 897 493
								<br />
								E-Mail: pixelgenie.marketing@gmail.com
							</p>
							<p>Steuernummer: 115/5187/3619</p>
							<p>
								Umsatzsteuer-ID: wird nicht erhoben (Kleinunternehmer gemäß §19
								UStG)
							</p>
						</Card.Body>
					</Card>
				</Col>

				<Col lg={6} className="mb-3">
					<Card className="bg-transparent border-0">
						<Card.Body>
							<Card.Title className="text-white bg-dark rounded p-1">
								Verantwortlich nach § 18 Abs. 2 MStV
							</Card.Title>
							<p>Krystian Stawarczyk, Anschrift wie oben</p>
							<p>
								Krystian Stawarczyk
								<br />
								Fasanenstraße 10
								<br />
								41334 Nettetal
							</p>
						</Card.Body>
					</Card>
				</Col>
			</Row>

			<Row className="justify-content-center">
				<Col lg={6} className="mb-3">
					<Card className="bg-transparent border-0">
						<Card.Body>
							<Card.Title className="text-white bg-dark rounded p-1">
								EU-Streitschlichtung
							</Card.Title>
							<p>
								Die Europäische Kommission stellt eine Plattform zur
								Online-Streitbeilegung (OS) bereit:
								<a
									href="https://ec.europa.eu/consumers/odr/"
									target="_blank"
									rel="noopener noreferrer"
								>
									https://ec.europa.eu/consumers/odr/
								</a>
								Wir sind nicht bereit und nicht verpflichtet, an einem
								Streitbeilegungsverfahren vor einer
								Verbraucherschlichtungsstelle teilzunehmen.
							</p>
						</Card.Body>
					</Card>
				</Col>
			</Row>

			{/* --- HAFTUNGSAUSSCHLUSS --- */}
			<Row className="mt-5">
				<Col>
					<h2>Haftungsausschluss</h2>
					<h4>Haftung für Inhalte</h4>
					<p>
						Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für
						die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
						wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir
						gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
						allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
						jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
						Informationen zu überwachen oder nach Umständen zu forschen, die auf
						eine rechtswidrige Tätigkeit hinweisen.
					</p>

					<h4>Haftung für Links</h4>
					<p>
						Unser Angebot enthält Links zu externen Websites Dritter, auf deren
						Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
						fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
						verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
						der Seiten verantwortlich.
					</p>
				</Col>
			</Row>

			{/* --- DATENSCHUTZERKLÄRUNG --- */}
			<Row className="text-center my-5">
				<h2>Datenschutzerklärung</h2>
			</Row>

			<Row>
				<Col>
					<h4>1. Verantwortlicher</h4>
					<p>
						Verantwortlich für die Datenverarbeitung auf dieser Website ist:
						<br />
						<strong>Krystian Stawarczyk – Pixel-Genie Webagentur</strong>
						<br />
						Fasanenstraße 10, 41334 Nettetal, Deutschland
						<br />
						E-Mail: pixelgenie.marketing@gmail.com
					</p>

					<h4>2. Allgemeine Hinweise zur Datenverarbeitung</h4>
					<p>
						Wir verarbeiten personenbezogene Daten ausschließlich im Rahmen der
						geltenden Datenschutzgesetze (DSGVO und BDSG). Personenbezogene
						Daten sind alle Daten, mit denen Sie persönlich identifiziert werden
						können.
					</p>

					<h4>3. Server-Logfiles</h4>
					<p>
						Beim Aufruf unserer Website werden automatisch Informationen
						erfasst, die Ihr Browser übermittelt. Dies sind:
					</p>
					<ul>
						<li>Browsertyp und Browserversion</li>
						<li>Verwendetes Betriebssystem</li>
						<li>Referrer URL</li>
						<li>Hostname des zugreifenden Rechners</li>
						<li>Uhrzeit der Serveranfrage</li>
						<li>IP-Adresse (anonymisiert gespeichert)</li>
					</ul>
					<p>
						Die Speicherung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
						im berechtigten Interesse der technischen Stabilität und Sicherheit.
					</p>

					<h4>4. Cookies</h4>
					<p>
						Wir verwenden essenzielle Cookies, um die grundlegende
						Funktionalität unserer Website sicherzustellen. Statistik- oder
						Marketing-Cookies werden erst nach Ihrer aktiven Zustimmung gesetzt.
						Diese Zustimmung können Sie jederzeit über das Cookie-Banner
						widerrufen.
					</p>

					<h4>5. Google Analytics</h4>
					<p>
						Diese Website nutzt Google Analytics ausschließlich nach Ihrer
						aktiven Zustimmung. Der Dienst wird von der Google Ireland Limited,
						Gordon House, Barrow Street, Dublin 4, Irland, betrieben. Es wird
						die IP-Anonymisierung („anonymizeIP“) verwendet, sodass keine
						personenbezogene Zuordnung möglich ist. Die Rechtsgrundlage ist Ihre
						Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO.
					</p>
					<p>
						Sie können Ihre Zustimmung jederzeit über die Cookie-Einstellungen
						widerrufen.
					</p>

					<h4>6. Google Search Console</h4>
					<p>
						Zur technischen Optimierung und Leistungsmessung dieser Website wird
						die Google Search Console genutzt. Es werden hierbei keine
						personenbezogenen Daten gespeichert oder übertragen.
					</p>

					<h4>7. Hosting</h4>
					<p>
						Unsere Website wird über Cloudflare gehostet. Der Anbieter
						verarbeitet technische Daten (z. B. IP-Adressen) zur
						Performance-Optimierung und Sicherheitszwecken. Die Verarbeitung
						erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO im berechtigten Interesse
						eines sicheren und effizienten Betriebs.
					</p>

					<h4>8. Ihre Rechte</h4>
					<ul>
						<li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
						<li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
						<li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
						<li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
						<li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
						<li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
						<li>Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
					</ul>

					<h4>9. Kontakt zur Aufsichtsbehörde</h4>
					<p>
						Landesbeauftragte für Datenschutz und Informationsfreiheit
						Nordrhein-Westfalen (LDI NRW)
						<br />
						Kavalleriestraße 2-4, 40213 Düsseldorf
						<br />
						Web:{" "}
						<a
							href="https://www.ldi.nrw.de"
							target="_blank"
							rel="noopener noreferrer"
						>
							www.ldi.nrw.de
						</a>
					</p>

					<h4>10. Änderungen dieser Datenschutzerklärung</h4>
					<p>
						Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie
						an geänderte rechtliche Anforderungen oder bei Änderungen unserer
						Leistungen anzupassen. Die jeweils aktuelle Version finden Sie auf
						dieser Seite.
					</p>
					<h4>11. Links zu Social Media (Instagram, LinkedIn etc.)</h4>
					<p>
						Können zur Verarbeitung personenbezogener Daten durch den jeweiligen
						Anbieter führen. Details entnehmen Sie bitte den
						Datenschutzhinweisen der jeweiligen Plattform.
					</p>
				</Col>
			</Row>
		</Container>
	);
}
