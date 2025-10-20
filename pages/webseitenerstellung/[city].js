import Head from "next/head";
import citiesData from "@/data/citiesData";
import { useRouter } from "next/router";
import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";
import { generateWebseiteSEO } from "@/lib/generateWebseiteSEO";
import dynamic from "next/dynamic";
const CityMap = dynamic(() => import("@/components/CityMap"), { ssr: false });

const handleEmailClick = () => {
	window.location.href = "mailto:mr.krystian.stawarczyk@gmail.com";
};

export async function getStaticPaths() {
	const paths = citiesData.map((city) => ({
		params: { city: city.city },
	}));
	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const city = citiesData.find((c) => c.city === params.city);
	if (!city) return { notFound: true };

	const cityName = capitalize(city.city);
	const {
		seoTitle,
		seoDescription,
		keywords,
		cityDescription,
		heading1,
		heading2,
		population,
	} = generateWebseiteSEO(cityName, city);

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "ProfessionalService",
		name: `Pixel-Genie Webseitenerstellung ${cityName}`,
		image: "https://pixel-genie.de/og-default.jpg",
		url: `https://pixel-genie.de/webseitenerstellung/${city.city}`,
		telephone: city.phone,
		email: city.email,
		address: {
			"@type": "PostalAddress",
			streetAddress: city.address,
			postalCode: city.postalCode,
			addressLocality: cityName,
			addressCountry: "DE",
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: city.geo.latitude,
			longitude: city.geo.longitude,
		},
		sameAs: ["https://www.facebook.com/pixel.genie.de"],
		areaServed: cityName,
	};

	return {
		props: {
			city,
			cityName,
			seoTitle,
			seoDescription,
			keywords,
			cityDescription,
			jsonLd,
			heading1,
			heading2,
			population,
		},
	};
}

function capitalize(str) {
	return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
}

export default function WebseiteErstellungCity({
	city,
	cityName,
	seoTitle,
	seoDescription,
	keywords,
	cityDescription,
	jsonLd,
	heading1,
	heading2,
	population,
}) {
	const router = useRouter();
	if (router.isFallback) return <div>Laden…</div>;

	return (
		<>
			<Head>
				<title>{seoTitle}</title>
				<meta name="description" content={seoDescription} />
				<meta name="keywords" content={keywords} />
				<meta property="og:title" content={seoTitle} />
				<meta property="og:description" content={seoDescription} />
				<meta
					property="og:url"
					content={`https://pixel-genie.de/webseitenerstellung/${city.city}`}
				/>
				<meta
					property="og:image"
					content="https://pixel-genie.de/og-default.jpg"
				/>
				<link
					rel="canonical"
					href={`https://pixel-genie.de/webseitenerstellung/${city.city}`}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</Head>

			<Container className="min-h-screen px-6 md:px-10 py-10 my-5">
				<Row className="text-center">
					<h1 className="text-4xl md:text-5xl font-bold mt-5">{heading1}</h1>
					<p className="text-lg mb-8 mt-3 leading-relaxed">{heading2}</p>
				</Row>

				<Row className="my-5 text-center">
					<Col md={6} cl>
						<h2 className="text-2xl font-semibold mb-4">
							Unsere Leistungen in {cityName}
						</h2>
						<ul className="list-disc list-inside text-center space-y-2 mb-6">
							<li>Individuelles Webdesign & moderne Layouts</li>
							<li>SEO-optimierte Webseiten für lokale Sichtbarkeit</li>
							<li>Online-Shops, Unternehmensseiten, Landingpages</li>
							<li>WordPress, Next.js & maßgeschneiderte Lösungen</li>
							<li>Technischer Support & Hosting</li>
						</ul>
						<Button
							as={Link}
							href="#kontakt"
							className="btn-lg btn-nav text-white"
							onClick={handleEmailClick}
							style={{ cursor: "pointer" }}
						>
							🚀 Kostenlose Erstberatung 💼
						</Button>
					</Col>

					<Col md={6}>
						<h2 className="text-2xl font-semibold mb-4">
							Ihre Vorteile mit Pixel-Genie
						</h2>
						<ul className="list-disc list-inside text-center space-y-2 mb-6">
							<li>Persönliche Beratung direkt in {cityName}</li>
							<li>Kurze Ladezeiten & Top Google PageSpeed</li>
							<li>Mobilfreundliches & responsives Design</li>
							<li>SEO-Strategie für lokale Rankings</li>
							<li>Faire Preise & klare Kommunikation</li>
						</ul>
						<Button
							as={Link}
							href="/webseitenerstellen"
							className="btn-lg btn-nav text-white"
							style={{ cursor: "pointer" }}
						>
							🖥️ Portfolio & Mehr 🎨
						</Button>
					</Col>
				</Row>

				<Row className="my-5">
					<h2 className="text-2xl font-semibold mb-4 text-center">
						Warum eine professionelle Webseite in {cityName} entscheidend ist
					</h2>
					<p className="leading-relaxed whitespace-pre-line text-center">
						{cityDescription}
					</p>
				</Row>

				<Row className="my-5">
					<Col md={6}>
						<h3 className="font-semibold mb-2">Regionale Highlights:</h3>
						<h4>Einwohner:{population}</h4>
						<ul className="list-disc list-inside">
							{Object.entries(city.economicHighlights).map(([key, val]) => (
								<li key={key}>
									<strong>{key.replace(/([A-Z])/g, " $1")}:</strong> {val}
								</li>
							))}
						</ul>
					</Col>
					<Col md={6}>
						<h3 className="font-semibold mb-2">Kontakt in {cityName}</h3>
						<p>
							<strong>Adresse:</strong> {city.address}, {city.postalCode}{" "}
							{cityName}
						</p>
						<p>
							<strong>Telefon:</strong>{" "}
							<a href={`tel:${city.phone}`} className="text-blue-500 underline">
								{city.phone}
							</a>
						</p>
						<p>
							<strong>E-Mail:</strong>{" "}
							<a
								href={`mailto:${city.email}`}
								className="text-blue-500 underline"
							>
								{city.email}
							</a>
						</p>
					</Col>
				</Row>

				{/* 🔗 Internal linking dla SEO */}
				<Row className="my-5 text-center">
					<p>
						Sie interessieren sich für{" "}
						<Link
							href={`/webentwicklung/${city.city}`}
							className="text-blue-500"
						>
							Webentwicklung in {cityName}
						</Link>{" "}
						oder möchten Ihre Webseite durch{" "}
						<Link
							href={`/suchmaschinenoptimierung/${city.city}`}
							className="text-blue-500"
						>
							Suchmaschinenoptimierung
						</Link>{" "}
						verbessern? Pixel-Genie bietet alles aus einer Hand.
					</p>
				</Row>
				<Row className="my-5">
					<h2 className="text-2xl font-semibold mb-4 text-center">
						Unser Standort in {cityName}
					</h2>
					<CityMap key={city.city} cityData={city} height={320} />
				</Row>

				<Row className="my-5">
					<h2 className="text-2xl font-semibold mb-4 text-center">
						Unser Prozess der Webseitenerstellung in {cityName}
					</h2>
					<ol className="list-decimal list-inside space-y-2 text-center">
						<p>Briefing & Zieldefinition</p>
						<p>Konzeption & UX-Design</p>
						<p>Entwicklung mit Next.js oder WordPress</p>
						<p>SEO & Performance-Optimierung</p>
						<p>Launch & Betreuung</p>
					</ol>
				</Row>
				{/* FAQ Sekcja */}
				<Row className="my-5">
					<h2 className="text-2xl font-semibold mb-4 text-center">
						Häufig gestellte Fragen (FAQ)
					</h2>
					<ul className="space-y-5 text-start">
						<li>
							<strong>💰 Wie viel kostet eine Webseite in {cityName}?</strong>
							<p>
								Der Preis einer Webseite hängt stark von den Anforderungen ab.
								Eine einfache Unternehmensseite in {cityName} beginnt bei{" "}
								<strong>499 €</strong>, während umfangreiche Projekte mit
								Online-Shop, SEO-Optimierung oder Mehrsprachigkeit bis zu
								mehreren tausend Euro kosten können. Wir erstellen Ihnen gerne
								ein individuelles Angebot – transparent und ohne versteckte
								Kosten.
							</p>
						</li>

						<li>
							<strong>
								⏱️ Wie lange dauert die Erstellung einer Webseite?
							</strong>
							<p>
								Im Durchschnitt dauert die Erstellung einer professionellen
								Webseite <strong>2 bis 4 Wochen</strong>. Bei Projekten mit
								vielen Unterseiten, individuellen Funktionen oder Onlineshops
								kann die Dauer leicht variieren. Wir halten Sie in jeder Phase
								auf dem Laufenden.
							</p>
						</li>

						<li>
							<strong>♻️ Optimieren Sie auch bestehende Webseiten?</strong>
							<p>
								Ja! Wir bieten ein komplettes <strong>Website-Relaunch</strong>-
								und
								<strong>SEO-Optimierungsprogramm</strong> an. Wenn Ihre aktuelle
								Seite langsam ist, kein responsives Design hat oder bei Google
								schlecht rankt, können wir sie technisch und optisch auf den
								neuesten Stand bringen.
							</p>
						</li>

						<li>
							<strong>📱 Sind Ihre Webseiten mobil optimiert?</strong>
							<p>
								Absolut! Jede von uns erstellte Webseite ist{" "}
								<strong>100 % responsiv</strong>
								und wird für Smartphones, Tablets und Desktop-Geräte optimiert.
								Wir achten auf perfekte Darstellung, schnelle Ladezeiten und
								mobile Usability, damit Ihre Besucher auf jedem Gerät überzeugt
								werden.
							</p>
						</li>

						<li>
							<strong>
								🔍 Bieten Sie auch SEO für Webseiten in {cityName} an?
							</strong>
							<p>
								Ja, SEO ist ein zentraler Bestandteil jeder Website, die wir
								erstellen. Wir optimieren Seitenstruktur, Meta-Tags, Ladezeiten
								und Inhalte für Suchmaschinen. Dadurch erreicht Ihre Webseite in{" "}
								{cityName} bessere Platzierungen bei Google und generiert mehr
								organischen Traffic und Anfragen.
							</p>
						</li>

						<li>
							<strong>
								🎨 Kann ich das Design meiner Webseite mitbestimmen?
							</strong>
							<p>
								Selbstverständlich! Wir gestalten Ihre Webseite nach Ihren
								Vorstellungen und Ihrer Markenidentität. Sie erhalten mehrere
								Designvorschläge und können aktiv am kreativen Prozess
								teilnehmen, damit das Endergebnis perfekt zu Ihrem Unternehmen
								passt.
							</p>
						</li>

						<li>
							<strong>
								🧑‍💻 Welche Technologien verwenden Sie zur Webseitenerstellung?
							</strong>
							<p>
								Wir nutzen moderne und performante Technologien wie{" "}
								<strong>Next.js, React</strong>
								und <strong>WordPress</strong>, kombiniert mit Best Practices in
								SEO, Core Web Vitals und Performance-Optimierung. So entsteht
								eine Webseite, die sowohl schnell als auch zukunftssicher ist.
							</p>
						</li>

						<li>
							<strong>
								🚀 Warum sollte ich Pixel-Genie für meine Webseite in {cityName}{" "}
								wählen?
							</strong>
							<p>
								Pixel-Genie vereint Design, Technik und Marketing in einer
								Lösung. Wir erstellen Webseiten, die nicht nur schön aussehen,
								sondern verkaufen. Mit lokalem Fokus auf {cityName} bieten wir
								persönliche Beratung, schnelle Umsetzung und nachhaltige
								SEO-Strategien für langfristigen Erfolg.
							</p>
						</li>
					</ul>

					{/* ✅ FAQ JSON-LD dla Rich Results */}
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: JSON.stringify({
								"@context": "https://schema.org",
								"@type": "FAQPage",
								mainEntity: [
									{
										"@type": "Question",
										name: `Wie viel kostet eine Webseite in ${cityName}?`,
										acceptedAnswer: {
											"@type": "Answer",
											text: `Der Preis einer Webseite hängt von Design, Umfang und SEO-Anforderungen ab. Eine einfache Website in ${cityName} startet bei 499 €, während umfangreiche Projekte bis zu mehreren tausend Euro kosten können.`,
										},
									},
									{
										"@type": "Question",
										name: "Wie lange dauert die Erstellung einer Webseite?",
										acceptedAnswer: {
											"@type": "Answer",
											text: "Die Erstellung einer professionellen Webseite dauert im Durchschnitt 2–4 Wochen, abhängig vom Projektumfang und der Rückmeldung des Kunden.",
										},
									},
									{
										"@type": "Question",
										name: "Optimieren Sie auch bestehende Webseiten?",
										acceptedAnswer: {
											"@type": "Answer",
											text: "Ja, wir bieten Website-Relaunch und SEO-Optimierung an, um bestehende Webseiten technisch, visuell und inhaltlich zu verbessern.",
										},
									},
									{
										"@type": "Question",
										name: "Sind Ihre Webseiten mobil optimiert?",
										acceptedAnswer: {
											"@type": "Answer",
											text: "Ja, alle von uns erstellten Webseiten sind vollständig responsiv und mobil optimiert für Smartphones, Tablets und Desktop.",
										},
									},
									{
										"@type": "Question",
										name: `Bieten Sie auch SEO für Webseiten in ${cityName} an?`,
										acceptedAnswer: {
											"@type": "Answer",
											text: `Ja, SEO ist Teil jeder Website, die wir erstellen. Wir optimieren Struktur, Meta-Daten und Inhalte, damit Ihre Website in ${cityName} besser rankt.`,
										},
									},
									{
										"@type": "Question",
										name: "Kann ich das Design meiner Webseite mitbestimmen?",
										acceptedAnswer: {
											"@type": "Answer",
											text: "Natürlich! Sie können aktiv am Designprozess teilnehmen, Vorschläge einbringen und Ihr Branding einfließen lassen.",
										},
									},
									{
										"@type": "Question",
										name: "Welche Technologien verwenden Sie zur Webseitenerstellung?",
										acceptedAnswer: {
											"@type": "Answer",
											text: "Wir setzen moderne Technologien wie Next.js, React und WordPress ein, um performante und nachhaltige Webseiten zu entwickeln.",
										},
									},
									{
										"@type": "Question",
										name: `Warum sollte ich Pixel-Genie für meine Webseite in ${cityName} wählen?`,
										acceptedAnswer: {
											"@type": "Answer",
											text: `Pixel-Genie ist spezialisiert auf professionelle Webseitenerstellung in ${cityName} – mit Fokus auf Design, SEO und Performance.`,
										},
									},
								],
							}),
						}}
					/>
				</Row>

				<Row className="my-5">
					<h3 className="text-xl font-semibold mb-3 text-center">
						Weitere Städte, in denen wir Webseiten erstellen:
					</h3>
					<Row className="justify-content-center">
						{citiesData
							.filter((c) => c.city !== city.city)
							.slice(0, 20)
							.map((c, i) => (
								<Col
									key={i}
									xs={12}
									sm={6}
									md={4}
									lg={3}
									className="mb-3 d-flex justify-content-center"
								>
									<Link
										href={`/webentwicklung/${c.city.toLowerCase()}`}
										className="d-flex align-items-center justify-content-center text-decoration-none fw-medium text-center rounded-3"
										style={{
											color: "var(--text-color)",
											backgroundColor: "rgba(255,255,255,0.05)",
											border: "1px solid rgba(255,255,255,0.1)",
											minHeight: "56px",
											maxWidth: "220px",
											width: "100%",
											padding: "0.5rem 0.75rem",
											whiteSpace: "normal",
											wordBreak: "break-word",
											transition: "all 0.3s ease",
										}}
									>
										Webseite Erstellen{" "}
										{c.city.charAt(0).toUpperCase() + c.city.slice(1)}
									</Link>
								</Col>
							))}
					</Row>
				</Row>
			</Container>
		</>
	);
}
