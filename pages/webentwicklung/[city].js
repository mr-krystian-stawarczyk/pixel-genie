// pages/webentwicklung/[city].js
import Head from "next/head";
import citiesData from "@/data/citiesData";
import { useRouter } from "next/router";
import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";
import { generateCitySEO } from "@/lib/generateCitySEO";
import dynamic from "next/dynamic";

const CityMap = dynamic(() => import("@/components/CityMap"), { ssr: false });

export async function getStaticPaths() {
	const paths = citiesData.map((city) => ({
		params: { city: city.city.toLowerCase() },
	}));
	return { paths, fallback: false };
}
const handleEmailClick = () => {
	if (typeof window !== "undefined") {
		window.location.href = "mailto:mr.krystian.stawarczyk@gmail.com";
	}
};
export async function getStaticProps({ params }) {
	const city = citiesData.find(
		(c) => c.city.toLowerCase() === params.city.toLowerCase()
	);

	if (!city) {
		return { notFound: true };
	}

	const cityName = capitalize(city.city);
	const {
		seoTitle,
		seoDescription,
		cityDescription,
		keywords,
		heading1,
		heading2,
		population,
	} = generateCitySEO(cityName, city);

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		name: "Pixel-Genie Webentwicklung",
		image: "https://pixel-genie.de/logo.png",
		"@id": `https://pixel-genie.de/webentwicklung/${params.city.toLowerCase()}`,
		url: `https://pixel-genie.de/webentwicklung/${params.city.toLowerCase()}`,
		telephone: city.phone ?? "",
		address: {
			"@type": "PostalAddress",
			streetAddress: city.address ?? "",
			postalCode: city.postalCode ?? "",
			addressLocality: cityName,
			addressCountry: "DE",
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: city.geo?.latitude ?? 0,
			longitude: city.geo?.longitude ?? 0,
		},
		sameAs: ["https://www.facebook.com/pixel.genie.de"],
		areaServed: cityName,
		...(city.rating && {
			aggregateRating: {
				"@type": "AggregateRating",
				ratingValue: city.rating.value,
				reviewCount: city.rating.count,
			},
		}),
		...(Array.isArray(city.reviews) &&
			city.reviews.length > 0 && {
				review: city.reviews.map((rev) => ({
					"@type": "Review",
					author: rev.author ?? "",
					datePublished: rev.date ?? "",
					reviewBody: rev.body ?? "",
					reviewRating: {
						"@type": "Rating",
						ratingValue: rev.rating ?? 5,
					},
				})),
			}),
	};

	return {
		props: {
			city,
			cityName,
			seoTitle,
			seoDescription,
			keywords,
			jsonLd,
			cityDescription,
			heading1,
			heading2,
			population,
		},
	};
}

function capitalize(str) {
	if (!str) return "";
	return str.charAt(0).toUpperCase() + str.slice(1);
}

CityPage.theme = "dark";

export default function CityPage({
	city,
	cityName,
	seoTitle,
	seoDescription,
	keywords,
	jsonLd,
	cityDescription,
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
				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content={`https://pixel-genie.de/webentwicklung/${city.city.toLowerCase()}`}
				/>
				<meta
					property="og:image"
					content={city.ogImage ?? "https://pixel-genie.de/og-default.jpg"}
				/>
				<link
					rel="canonical"
					href={`https://pixel-genie.de/webentwicklung/${city.city.toLowerCase()}`}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</Head>

			<Container className="min-h-screen px-6 md:px-10 py-10 my-5 pt-2">
				<Row className="mt-5">
					<h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
						{heading1}
					</h1>
					<Row className="my-5">
						<Col className="text-center">
							<h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center text-gray-400">
								{heading2}
							</h2>
							<p className="text-lg mb-6 leading-relaxed">
								Sie suchen eine Webagentur in <strong>{cityName}</strong>, die
								moderne, schnelle und SEO-optimierte Webseiten erstellt?
								Pixel‑Genie ist Ihr Partner für digitales Wachstum in {cityName}
								. Wir liefern individuelle Lösungen, die Ihr Unternehmen online
								sichtbar machen.
							</p>
						</Col>
					</Row>
				</Row>
				<Row>
					<Col className="text-center">
						<h2 className="text-2xl font-semibold mt-5 mb-6">
							Unsere Services in {cityName}
						</h2>

						<div className="flex flex-col items-center space-y-4 mb-10">
							<div className="flex items-center gap-3 text-lg">
								<span className="text-3xl">💻</span>
								<span>
									Individuelle Webentwicklung & Webdesign in {cityName}
								</span>
							</div>

							<div className="flex items-center gap-3 text-lg">
								<span className="text-3xl">🔍</span>
								<span>
									SEO (Suchmaschinenoptimierung) speziell für {cityName}
								</span>
							</div>

							<div className="flex items-center gap-3 text-lg">
								<span className="text-3xl">📣</span>
								<span> Marketing & Branding lokal in {cityName}</span>
							</div>

							<div className="flex items-center gap-3 text-lg">
								<span className="text-3xl">📊</span>
								<span> Performance-Analyse & Content-Optimierung</span>
							</div>

							<div className="flex items-center gap-3 text-lg">
								<span className="text-3xl">📱</span>
								<span> Responsive & mobile-first Websites</span>
							</div>
						</div>
					</Col>
				</Row>
				<Row className="my-5">
					<Col>
						<h2 className="text-2xl font-semibold my-4 text-center">
							Digitalisierung in {cityName} vorantreiben
						</h2>
						<p>
							{cityName} ist eine Stadt mit wachsender digitaler Präsenz. Immer
							mehr Unternehmen in {cityName} setzen auf moderne Webseiten, um
							ihre Zielgruppen lokal und überregional zu erreichen. Bei
							Pixel‑Genie kennen wir die Besonderheiten der Region – von den
							wirtschaftlichen Strukturen über branchenspezifische Anforderungen
							bis hin zu den lokalen Gegebenheiten.
						</p>
						<p className="mt-3">
							Besonders in Stadtteilen wie{" "}
							<strong>
								{cityName.includes("-")
									? cityName.split("-")[1]
									: "der Innenstadt"}
							</strong>{" "}
							oder der Umgebung von <strong>{cityName}</strong>
							sehen wir eine steigende Nachfrage nach digitaler Sichtbarkeit.
							Nutzen Sie diesen Vorsprung – mit einer Webseite, die überzeugt.
						</p>
					</Col>
				</Row>
				<Row>
					<h2 className="text-2xl font-semibold mt-10 my-5 text-center">
						Warum Pixel‑Genie?
					</h2>
					<p className="mb-6">
						Als Webagentur mit Fokus auf {cityName} kennen wir den Markt, die
						Mitbewerber und die Anforderungen der Kunden in Ihrer Stadt. Wir
						verstehen, was nötig ist, um lokal sichtbar zu werden und Kunden zu
						gewinnen.
					</p>
				</Row>
				<Row className="my-5">
					<Col>
						<h2 className="text-2xl font-semibold mb-4 text-center">
							Webentwicklung & Digitalisierung in {cityName}
						</h2>
						<p className="leading-relaxed whitespace-pre-line">
							{cityDescription}
						</p>
					</Col>
				</Row>
				<Row>
					<Col>
						<div className="bg-transparent p-6 rounded-2xl mb-8">
							<h3 className="text-xl font-semibold mb-4">
								Lokal in {cityName} – Ihr Kontakt
							</h3>
							<p>
								<strong>Adresse:</strong> {city.address}, {city.postalCode}{" "}
								{cityName}
							</p>
							<p>
								<strong>Telefon:</strong>{" "}
								<a
									href={`tel:${city.phone}`}
									className="text-blue-400 underline"
								>
									{city.phone}
								</a>
							</p>
							<p>
								<strong>E-Mail:</strong>{" "}
								<a
									href={`mailto:${city.email}`}
									className="text-blue-400 underline"
								>
									{city.email}
								</a>
							</p>
						</div>
					</Col>
					<Col className="d-flex flex-column ">
						{" "}
						<Button
							as={Link}
							href="/webseitenerstellen"
							className="btn-lg btn-nav my-2"
						>
							<span className="text-white"> Webseiten</span>
						</Button>
						<Button
							as={Link}
							href="/suchmaschinenoptimierung"
							className="btn-lg btn-nav my-2"
						>
							<span className="text-white"> SEO Positionierung </span>
						</Button>
						<Button
							as={Link}
							href="/socialmediamarketing"
							className="btn-lg btn-nav my-2"
						>
							<span className="text-white"> Social Media</span>
						</Button>
					</Col>
				</Row>
				{/* Lokalny dowód zaufania */}
				<Row className="my-5">
					<h2 className="text-2xl font-semibold mb-4 text-center">
						Unser Standort in {cityName}
					</h2>
					<CityMap key={city.city} cityData={city} height={320} />
				</Row>

				<Row>
					<Button className="btn-md btn-success hover">
						<span className="text-white text-uppercase">
							<p className="text-white text-bold">
								{" "}
								Jetzt kostenlose Beratung in {cityName} anfragen
							</p>{" "}
							<p
								className="mt-4 text-lg text-white text-bold"
								onClick={handleEmailClick}
								style={{ cursor: "pointer" }}
							>
								Frei Audit ( 15 min )
							</p>{" "}
						</span>
					</Button>
				</Row>
				<Row className="my-5">
					<h2 className="text-2xl font-semibold mb-4 text-center">
						Über {cityName}
					</h2>
					<h3 className="text-center">Einwohner: {population}</h3>
					{city.historySnippet && (
						<p className="mb-4 text-center">{city.historySnippet}</p>
					)}{" "}
					<Col md={6}>
						<div className="text-sm text-gray-600 mb-3">
							<h3 className="font-semibold mb-2">
								<span className="text-uppercase">{city.city}</span> Info:
							</h3>{" "}
							{city.elevation != null && (
								<li>
									<span>
										Höhe: {city.elevation} m über NN
										<br />
									</span>
								</li>
							)}
							{city.areaKm2 != null && (
								<li>
									<span>
										Fläche: {city.areaKm2} km²
										<br />
									</span>
								</li>
							)}
							{city.boroughs && (
								<li>
									<span>
										Stadtteile: {city.boroughs.join(", ")}
										<br />
									</span>
								</li>
							)}
						</div>
					</Col>{" "}
					<Col md={6}>
						{city.economicHighlights && (
							<div>
								<h3 className="font-semibold mb-2">
									Wirtschaft & Standortvorteile:
								</h3>
								<ul className="list-disc list-inside space-y-1">
									{Object.entries(city.economicHighlights).map(([key, val]) => (
										<li key={key}>
											<strong>{key.replace(/([A-Z])/g, " $1")}:</strong> {val}
										</li>
									))}
								</ul>
							</div>
						)}{" "}
					</Col>
				</Row>
				<Row className="my-5">
					<Col>
						<h3 className="text-xl font-semibold mb-4 text-center">
							Weitere Standorte in der Nähe von {cityName}
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
											Webentwicklung{" "}
											{c.city.charAt(0).toUpperCase() + c.city.slice(1)}
										</Link>
									</Col>
								))}
						</Row>
					</Col>
				</Row>
				<Row>
					<p>
						Sie möchten eine{" "}
						<Link href={`/webseitenerstellung/${city.city}`}>
							komplett neue Webseite erstellen
						</Link>
						? → Sehen Sie unsere Angebote für Webdesign in {cityName}.
					</p>
				</Row>
				{/* ✅ FAQ JSON-LD – Rich Snippets für Google */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "FAQPage",
							mainEntity: [
								{
									"@type": "Question",
									name: `Was macht eine professionelle Webentwicklung in ${cityName} aus?`,
									acceptedAnswer: {
										"@type": "Answer",
										text: `Professionelle Webentwicklung in ${cityName} umfasst maßgeschneiderte Lösungen mit modernem Design, schneller Ladezeit und SEO-Optimierung.`,
									},
								},
								{
									"@type": "Question",
									name: `Wie lange dauert die Webentwicklung einer Website in ${cityName}?`,
									acceptedAnswer: {
										"@type": "Answer",
										text: `In ${cityName} dauert die Entwicklung einer Website im Durchschnitt 2–4 Wochen, abhängig von Umfang, Design und technischen Anforderungen.`,
									},
								},
								{
									"@type": "Question",
									name: `Was kostet eine Website-Entwicklung in ${cityName}?`,
									acceptedAnswer: {
										"@type": "Answer",
										text: `Die Kosten für Webentwicklung in ${cityName} beginnen bei etwa 499 € für einfache Seiten und können je nach Funktionen bis zu mehreren tausend Euro betragen.`,
									},
								},
								{
									"@type": "Question",
									name: `Bieten Sie auch Webpflege oder Support in ${cityName} an?`,
									acceptedAnswer: {
										"@type": "Answer",
										text: `Ja, Pixel-Genie bietet in ${cityName} auch laufende Wartung, Updates und Performance-Monitoring für bestehende Webseiten an.`,
									},
								},
								{
									"@type": "Question",
									name: `Warum sollte ich Pixel-Genie für Webentwicklung in ${cityName} wählen?`,
									acceptedAnswer: {
										"@type": "Answer",
										text: `Pixel-Genie vereint Design, Technik und SEO – für Websites, die nicht nur funktionieren, sondern überzeugen und konvertieren.`,
									},
								},
							],
						}),
					}}
				/>
			</Container>
		</>
	);
}
