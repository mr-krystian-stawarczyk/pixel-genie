// pages/webentwicklung/[city].js
import Head from "next/head";
import citiesData from "@/data/citiesData"; // Twój plik z danymi miast
import { useRouter } from "next/router";
import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";
import Link from "next/link";
import { generateCitySEO } from "@/lib/generateCitySEO";

export async function getStaticPaths() {
	const paths = citiesData.map((city) => ({
		params: { city: city.city },
	}));
	return { paths, fallback: false };
}
const handleEmailClick = () => {
	window.location.href = "mailto:mr.krystian.stawarczyk@gmail.com";
};

export async function getStaticProps({ params }) {
	const city = citiesData.find((c) => c.city === params.city);
	if (!city) {
		return { notFound: true };
	}

	const cityName = capitalize(city.city);

	// ✅ Nowy SEO generator
	const {
		seoTitle,
		seoDescription,
		cityDescription,
		keywords,
		heading1,
		heading2,
	} = generateCitySEO(cityName, city);

	// ✅ JSON-LD dla Google
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		name: "Pixel-Genie Webentwicklung",
		image: "https://pixel-genie.de/logo.png",
		"@id": `https://pixel-genie.de/webentwicklung/${city.city}`,
		url: `https://pixel-genie.de/webentwicklung/${city.city}`,
		telephone: city.phone,
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
		...(city.rating && {
			aggregateRating: {
				"@type": "AggregateRating",
				ratingValue: city.rating.value,
				reviewCount: city.rating.count,
			},
		}),
		...(city.reviews &&
			city.reviews.length > 0 && {
				review: city.reviews.map((rev) => ({
					"@type": "Review",
					author: rev.author,
					datePublished: rev.date,
					reviewBody: rev.body,
					reviewRating: {
						"@type": "Rating",
						ratingValue: rev.rating,
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
		},
	};
}

function capitalize(str) {
	if (!str) return "";
	return str.charAt(0).toUpperCase() + str.slice(1);
}

// Wymuszamy motyw dark dla tej strony
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
}) {
	const router = useRouter();

	// Jeśli strona jest w fallback — możesz pokazać loader
	if (router.isFallback) {
		return <div>Laden…</div>;
	}

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
					content={`https://pixel-genie.de/webentwicklung/${city.city}`}
				/>
				<meta
					property="og:image"
					content={city.ogImage ?? "https://pixel-genie.de/og-default.jpg"}
				/>
				<meta name="robots" content="index, follow" />
				<link
					rel="canonical"
					href={`https://pixel-genie.de/webentwicklung/${city.city}`}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</Head>

			<Container className="min-h-screen  px-6 md:px-10 py-10 my-5 pt-2">
				<Row className="mt-5">
					<h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
						{heading1}
					</h1>
					<Row className="my-5">
						<Col md={6} className="text-center">
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
						<Col md={6} className="text-center">
							<h2 className="text-2xl font-semibold mt-10 mb-4">
								Unsere Services in {cityName}
							</h2>
							<ul className="list-disc list-inside space-y-2 mb-8">
								<li>Individuelle Webentwicklung & Webdesign in {cityName}</li>
								<li>SEO (Suchmaschinenoptimierung) speziell für {cityName}</li>
								<li>Online-Marketing & Branding lokal in {cityName}</li>
								<li>Performance-Analyse, Content-Optimierung</li>
								<li>Responsive & mobile-first Websites</li>
							</ul>
						</Col>{" "}
					</Row>
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
				<Row className="my-3">
					{city.testimonials && city.testimonials.length > 0 && (
						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">
								Kundenstimmen aus {cityName}
							</h2>
							<div className="space-y-6">
								{city.testimonials.map((t, idx) => (
									<blockquote
										key={idx}
										className="border-l-4 border-blue-400 pl-4 italic"
									>
										<p className="mb-2">“{t.quote}”</p>
										<footer className="text-sm">
											— {t.author}, {t.company}
										</footer>
									</blockquote>
								))}
							</div>
						</section>
					)}
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
						<Row>
							{citiesData
								.filter((c) => c.city !== city.city)
								.slice(0, 24) // więcej, jeśli chcesz
								.map((c, i) => (
									<Col key={i} xs={12} sm={6} md={4} lg={3} className="mb-3">
										<Link
											href={`/webentwicklung/${c.city}`}
											className="text-blue-500 hover:underline d-block text-center"
										>
											Webdesign & SEO in {capitalize(c.city)}
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
			</Container>
		</>
	);
}
