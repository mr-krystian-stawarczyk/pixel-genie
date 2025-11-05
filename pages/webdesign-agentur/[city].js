import Head from "next/head";
import dynamic from "next/dynamic";
import citiesData from "@/data/citiesData";
import {
	Hero,
	USPs,
	Process,
	Pricing,
	FAQ,
	ContactCTA,
	BreadcrumbsJsonLd,
} from "@/components/service-page";
// ✅ Lazy-load interaktywne komponenty po stronie klienta
const ReadingProgressBar = dynamic(
	() => import("@/components/ReadingProgressBar"),
	{
		ssr: false,
		loading: () => null,
	}
);
const SmartCTA = dynamic(() => import("@/components/SmartCTA"), { ssr: false });
const GoogleReviews = dynamic(() => import("@/components/GoogleReviews"), {
	ssr: false,
});
const LocalNRWHook = dynamic(() => import("@/components/LocalNRWHook"), {
	ssr: false,
});
const PeopleAlsoRead = dynamic(() => import("@/components/PeopleAlsoRead"), {
	ssr: false,
});

function toSlug(entry) {
	return (entry.slug ?? entry.city ?? "").toLowerCase();
}

export async function getStaticPaths() {
	const paths = (citiesData || []).map((c) => ({
		params: { city: toSlug(c) },
	}));
	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const citySlug = (params?.city || "").toLowerCase();
	const cityData = citiesData.find((c) => toSlug(c) === citySlug) || null;

	if (!cityData) return { notFound: true };

	return { props: { cityData } };
}

export default function WebdesignAgenturCityPage({ cityData }) {
	const citySlug = toSlug(cityData);
	const cityName =
		(cityData.city || "").charAt(0).toUpperCase() +
		(cityData.city || "").slice(1);
	const canonical = `https://www.pixel-genie.de/webdesign-agentur/${citySlug}`;

	// 🔹 Meta & SEO
	const title = `Webdesign Agentur ${cityName} – Websites, die überzeugen und verkaufen`;
	const description = `Professionelles Webdesign in ${cityName} mit Fokus auf SEO, Performance und Markenauftritt. Pixel-Genie entwickelt Websites, die konvertieren.`;

	// 🔹 Badges
	const badges = [
		{ label: "UX & Conversion", variant: "warning" },
		{ label: "Core Web Vitals 90+", variant: "success" },
		{ label: "SEO-Ready Struktur", variant: "primary" },
		{ label: "Next.js Performance", variant: "info" },
	];

	// 🔹 USPs
	const usps = [
		{
			heading: "Modernes Design, das verkauft",
			text: `Wir gestalten Markenwebsites für ${cityName}, die Emotion und Vertrauen verbinden – mit Fokus auf klare Nutzerführung und starke Conversion.`,
		},
		{
			heading: "SEO & Performance integriert",
			text: "Unsere Seiten sind blitzschnell, technisch sauber und Google-optimiert – inklusive strukturierter Daten und Core Web Vitals 90+.",
		},
		{
			heading: "Skalierbare Technologie",
			text: "Mit Next.js, React und Headless CMS bauen wir flexible Websites, die mit Ihrem Unternehmen wachsen.",
		},
		{
			heading: "Persönliche Betreuung",
			text: "Direkter Kontakt mit Designer & Entwickler – ohne Zwischenhändler oder unnötige Agentur-Overheads.",
		},
	];

	// 🔹 Prozess
	const steps = [
		{
			bold: "1. Strategie & Zielgruppenanalyse",
			text: `Wir starten mit einem Workshop in ${cityName}, um Ihre Marke, Ziele und Zielgruppen zu verstehen.`,
		},
		{
			bold: "2. UX / Wireframes",
			text: "Auf Basis der Strategie entwickeln wir die Struktur und Informationsarchitektur Ihrer Website.",
		},
		{
			bold: "3. UI-Design & Branding",
			text: "Individuelles Design-System mit Wiedererkennungswert – perfekt auf Ihre Marke abgestimmt.",
		},
		{
			bold: "4. Entwicklung & SEO",
			text: "Technisch saubere Umsetzung mit Next.js, Core Web Vitals 90+, semantischem HTML & SEO-Grundoptimierung.",
		},
		{
			bold: "5. Launch & Betreuung",
			text: "Go-Live inklusive Testing, Hosting & Wartung. Optional: monatliches Reporting & Performance-Optimierung.",
		},
	];

	// 🔹 Preise (dane z Twojego Media7)
	const plans = [
		{
			name: "Starter",
			desc: "Für kleine Unternehmen und Start-ups, die schnell professionell online gehen möchten.",
			price: "ab 499 €",
			variant: "primary",
			features: [
				"One-Page oder Mini-Website (bis 3 Seiten)",
				"Modernes, responsives Design",
				"Kontaktformular & Google Maps",
				"Basis-SEO & Ladezeit-Optimierung",
				"Impressum & Datenschutz inklusive",
			],
		},
		{
			name: "Business",
			desc: "Unser Bestseller – perfekt für wachsende Marken mit Fokus auf SEO, Performance und Reichweite.",
			price: "ab 899 €",
			variant: "success",
			features: [
				"Bis zu 10 Seiten + CMS",
				"SEO-Strategie & Keyword-Analyse",
				"Blog- oder News-System",
				"Core Web Vitals Optimierung",
				"3 Monate Support inklusive",
			],
		},
		{
			name: "Premium",
			desc: "Für Unternehmen mit höchsten Ansprüchen an Design, UX, Technik und SEO.",
			price: "ab 1.499 €",
			variant: "warning",
			features: [
				"Unbegrenzte Seiten & Funktionen",
				"E-Commerce oder Buchungssystem",
				"Mehrsprachigkeit & internationale SEO",
				"UI/UX nach Markenrichtlinien",
				"Priorisierter Support & Betreuung",
			],
		},
	];

	// 🔹 Zusatzleistungen
	const addons = [
		{
			title: "📰 Blog Integration",
			desc: "SEO-Struktur & einfache Verwaltung",
			price: "+199 €",
		},
		{
			title: "🎨 Grafikdesign",
			desc: "Icons, Illustrationen & Branding",
			price: "ab 79 €",
		},
		{
			title: "✍️ Texterstellung",
			desc: "SEO-Texte für jede Seite",
			price: "+29 € / Seite",
		},
		{
			title: "📢 Banner & Social Media",
			desc: "Promo-Grafiken & Ads",
			price: "ab 29 €",
		},
	];

	// 🔹 FAQ
	const faq = [
		{
			q: `Wie lange dauert ein Webdesign-Projekt in ${cityName}?`,
			a: "Je nach Umfang 2–6 Wochen. Express-Option verfügbar.",
		},
		{
			q: "Können Sie auch Inhalte liefern?",
			a: "Ja – wir übernehmen Texterstellung, Grafikdesign und SEO-Optimierung, wenn gewünscht.",
		},
		{
			q: "Ist die Seite SEO-optimiert?",
			a: "Ja, jede Website ist suchmaschinenfreundlich aufgebaut – inklusive strukturierter Daten und schneller Ladezeiten.",
		},
		{
			q: "Bieten Sie Wartung & Support?",
			a: "Natürlich. Auf Wunsch übernehmen wir Updates, Backups und technische Betreuung.",
		},
		{
			q: "Kann ich später Inhalte selbst pflegen?",
			a: "Ja, über Headless CMS wie Sanity oder Strapi – einfach und sicher.",
		},
	];

	const crumbs = [
		{ name: "Startseite", url: "https://www.pixel-genie.de/" },
		{
			name: "Webdesign Agentur",
			url: "https://www.pixel-genie.de/webdesign-agentur",
		},
		{ name: cityName, url: canonical },
	];

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<link rel="canonical" href={canonical} />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
			</Head>
			<BreadcrumbsJsonLd items={crumbs} canonical={canonical} />
			<ReadingProgressBar />
			<SmartCTA triggerPercent={35} />
			<Hero
				title={`Webdesign Agentur ${cityName} – Websites, die begeistern & verkaufen`}
				lead={`Individuelles Webdesign in ${cityName} mit Fokus auf Branding, SEO und messbare Ergebnisse. Wir gestalten Websites, die Umsatz bringen.`}
				badges={badges}
				ctaTopic={`Webdesign Beratung ${cityName}`}
			/>
			<GoogleReviews />
			<USPs title="Warum Pixel-Genie?" items={usps} />
			<Process
				title={`Unser Webdesign-Prozess in ${cityName}`}
				steps={steps}
				ctaTopic={`Webdesign Prozess ${cityName}`}
			/>
			<Pricing
				title="Pakete & Preise"
				desc="Transparente Webdesign-Angebote – flexibel, skalierbar und ohne versteckte Kosten."
				plans={plans}
			/>
			{/* 🔹 Zusatzleistungen – zintegrowane z designem */}
			<section className="py-5 text-center">
				<div className="container">
					<h3 className="fw-bold mb-4">✨ Erweiterungen & Zusatzleistungen</h3>
					<p className="mb-5" style={{ color: "var(--text-color)" }}>
						Jedes Paket kann flexibel erweitert werden – holen Sie das Maximum
						aus Ihrer Website heraus:
					</p>
					<div className="row g-3 justify-content-center">
						{addons.map((a, i) => (
							<div key={i} className="col-md-3 col-sm-6">
								<div className="shadow-sm rounded-4 p-3 h-100 bg-light text-dark">
									<h5 className="fw-bold text-black">{a.title}</h5>
									<p className="small mb-0 text-black">
										{a.desc}
										<br />
										<b>{a.price}</b>
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			<LocalNRWHook />
			{/* === RELATED CONTENT (TOPICAL FUNNEL) === */}
			<FAQ
				title={`Häufige Fragen zum Webdesign in ${cityName}`}
				items={faq}
			/>{" "}
			<PeopleAlsoRead tagHint="Webentwicklung" />
			<ContactCTA
				title={`Starte dein Webdesign-Projekt in ${cityName}`}
				desc={`Kostenloses Erstgespräch: Ziele, Struktur, Timing & Quick-Wins für ${cityName}. Gemeinsam gestalten wir deine Website mit klarem Fokus auf Erfolg.`}
				topic={`Webdesign Beratung ${cityName}`}
			/>
		</>
	);
}
