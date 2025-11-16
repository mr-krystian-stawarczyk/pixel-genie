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
import ServicePageHead from "@/components/service-page/ServicePageHead";
import CityFacts from "@/components/seo-city/CityFacts";
import CityMap from "@/components/CityMap"; // już masz w SEO

const ReadingProgressBar = dynamic(
	() => import("@/components/ReadingProgressBar"),
	{ ssr: false }
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

export default function WebentwicklungCityPage({ cityData }) {
	const citySlug = toSlug(cityData);
	const cityName =
		(cityData.city || "").charAt(0).toUpperCase() +
		(cityData.city || "").slice(1);
	const canonical = `https://pixel-genie.de/webentwicklung/${citySlug}`;

	const title = `Webentwicklung ${cityName} – Schnelle, skalierbare Websites & Web-Apps`;
	const description = `Individuelle Webentwicklung in ${cityName} mit Fokus auf Performance, SEO und Integration moderner Tools. Wir bauen Websites, die Ergebnisse liefern.`;

	const badges = [
		{ label: "Next.js & React", variant: "primary" },
		{ label: "Core Web Vitals 90+", variant: "success" },
		{ label: "Headless CMS", variant: "info" },
		{ label: "API & Automatisierung", variant: "warning" },
	];

	const usps = [
		{
			heading: "Performance & Stabilität",
			text: `Schnelle Ladezeiten und skalierbare Architektur – ideal für Unternehmen in ${cityName}, die wachsen möchten.`,
		},
		{
			heading: "SEO & Sichtbarkeit",
			text: "Technisch optimierter Code, strukturierte Daten und perfekte Lighthouse-Werte.",
		},
		{
			heading: "Integration & Automatisierung",
			text: "CRM, Zahlungsanbieter, E-Mail-Automation – alles nahtlos verbunden.",
		},
		{
			heading: "Langfristige Partnerschaft",
			text: "Wir entwickeln, optimieren und begleiten – ohne Agentur-Blabla.",
		},
	];

	const steps = [
		{
			bold: "1. Analyse & Strategie",
			text: `Workshop in ${cityName}: Zielgruppen, Ziele und KPIs definieren.`,
		},
		{
			bold: "2. Architektur & UX",
			text: "Struktur, Informationsarchitektur und Userflows planen.",
		},
		{
			bold: "3. Entwicklung",
			text: "Next.js / React, API-Integrationen, Testing & CMS-Einbindung.",
		},
		{
			bold: "4. SEO & Launch",
			text: "Optimierung, strukturierte Daten, Core Web Vitals 90+, Go-Live.",
		},
		{
			bold: "5. Betreuung",
			text: "Updates, Monitoring, Growth-Optimierung und A/B-Tests.",
		},
	];

	const plans = [
		{
			name: "Starter Dev",
			desc: "Perfekt für Startups, Freelancer oder lokale Unternehmen, die eine solide, schnelle und technisch saubere Website benötigen.",
			price: "ab 899 €",
			variant: "primary",
			features: [
				"Onepager oder Mini-Website (bis 3 Seiten)",
				"Next.js & SEO-Basis inklusive",
				"Kontaktformular & Conversion-Tracking",
				"Google Analytics & Search Console Integration",
				"Kostenlose Erstberatung & Projektplan",
				"Schneller Launch in 7–10 Tagen",
				"Mobile First Design & Performance Optimierung (Lighthouse 85+)",
				"Core Web Vitals 90+ vorbereitet",
				"Kostenloses SSL & Domain-Verknüpfung",
				"🎉 –10 % Rabatt für Kunden aus NRW",
			],
		},
		{
			name: "Professional Dev",
			desc: "Unser Bestseller – für Unternehmen, die Performance, SEO und langfristige Skalierbarkeit suchen.",
			price: "ab 1.499 €",
			variant: "success",
			features: [
				"Bis zu 8 Seiten mit CMS (z. B. Sanity, Strapi oder Hygraph)",
				"Individuelles UI/UX Design mit Markenanpassung",
				"SEO-Struktur & schema.org Daten automatisch integriert",
				"Core Web Vitals 90+ garantiert",
				"Integrationen: CRM (Hubspot / Pipedrive), Newsletter & APIs",
				"Google Analytics 4 + Conversion-Tracking",
				"Blog- oder Wissenssystem inklusive",
				"DSGVO-konformes Consent Management",
				"3 Monate technischer Support & Optimierung inklusive",
				"🎉 –10 % Rabatt für Unternehmen aus NRW",
			],
		},
		{
			name: "Enterprise Dev",
			desc: "Für ambitionierte Marken & Unternehmen, die digitale Infrastruktur, API-Architektur und Skalierbarkeit benötigen.",
			price: "ab 2.990 €",
			variant: "warning",
			features: [
				"Unbegrenzte Seiten & dynamische Inhaltsstrukturen",
				"Headless CMS + GraphQL API Integration",
				"Mehrsprachigkeit & Internationalisierung (i18n)",
				"Komplexe API-Integrationen & Automatisierungen (z. B. CRM, ERP, Stripe, Zapier)",
				"Advanced Performance Audits & PageSpeed Optimierungen (Lighthouse 95+)",
				"Individuelle CI/CD Pipeline + Cloudflare Deployment",
				"Enterprise Hosting (Vercel Edge / Cloudflare)",
				"Technische SEO & automatisierte Schema-Daten",
				"Langfristige Betreuung, Wartung & Reporting",
				"Priorisierter Support (SLA 24h Reaktionszeit)",
				"🎉 –10 % Rabatt für Kunden aus NRW",
			],
		},
	];

	const faq = [
		{
			q: `Wie läuft ein Webentwicklungsprojekt in ${cityName} ab?`,
			a: "Kickoff, Zieldefinition, Architektur, Entwicklung, Testing und Launch. Je nach Umfang dauert ein Projekt 3–6 Wochen.",
		},
		{
			q: "Sind Ihre Projekte SEO-optimiert?",
			a: "Ja – wir entwickeln strikt nach Google Core Web Vitals, technischer SEO, strukturierter Daten und modernen Performance-Standards.",
		},
		{
			q: "Welche Technologien verwenden Sie?",
			a: "Next.js, React, moderne APIs, Server Actions, Tailwind, Tracking-Integrationen, Automatisierungen und skalierbare Architekturen.",
		},
		{
			q: "Bieten Sie Support nach dem Launch?",
			a: "Optional mit Monitoring, Sicherheitsupdates, API-Pflege, Optimierung, Backups und technischer Betreuung.",
		},
		{
			q: "Können bestehende Websites verbessert oder erweitert werden?",
			a: "Wir analysieren bestehenden Code, beheben Schwachstellen, modernisieren UX und steigern Performance und SEO.",
		},
		{
			q: "Entwickeln Sie individuelle Funktionen?",
			a: "Ja – Buchungssysteme, Formulare, Dashboards, Schnittstellen, Automatisierungen, Admin-Bereiche und vieles mehr.",
		},
		{
			q: "Wie sicher sind Ihre Projekte?",
			a: "Wir setzen auf moderne Sicherheitsstandards wie HTTPS, API-Token, Server Actions, Rate Limiting, Monitoring und regelmäßige Updates.",
		},
		{
			q: "Kann ich Funktionen oder Inhalte selbst verwalten?",
			a: "Wir integrieren bei Bedarf Headless CMS oder modulare Editoren, mit denen Inhalte einfach gepflegt werden können.",
		},
	];

	const crumbs = [
		{ name: "Startseite", url: "https://pixel-genie.de/" },
		{
			name: "Webentwicklung",
			url: "https://pixel-genie.de/webentwicklung",
		},
		{ name: cityName, url: canonical },
	];

	// ✅ OfferSchema – technisches SEO + Rabatt + dynamische City-Daten
	const offerSchema = {
		"@context": "https://schema.org",
		"@type": "WebDevelopmentService",
		name: `Webentwicklung ${cityName}`,
		description: `Professionelle Webentwicklung in ${cityName} – mit Fokus auf Performance, SEO und Skalierbarkeit.`,
		provider: {
			"@type": "Organization",
			name: "Pixel-Genie",
			url: "https://pixel-genie.de",
			logo: "https://pixel-genie.de/logo.png",
			telephone: cityData?.phone || "+48 726 897 493",
			email: cityData?.email || "pixelgenie.marketing@gmail.com",
			address: {
				"@type": "PostalAddress",
				streetAddress: cityData?.address || "Fasanenstr. 10",
				postalCode: cityData?.postalCode || "41334",
				addressLocality:
					(cityData?.city || "").charAt(0).toUpperCase() +
					(cityData?.city || "").slice(1),
				addressRegion: "Nordrhein-Westfalen",
				addressCountry: "DE",
			},
			geo: cityData?.geo
				? {
						"@type": "GeoCoordinates",
						latitude: cityData.geo.latitude,
						longitude: cityData.geo.longitude,
				  }
				: undefined,
		},
		areaServed: `${
			(cityData?.city || "").charAt(0).toUpperCase() +
			(cityData?.city || "").slice(1)
		}, Nordrhein-Westfalen, Deutschland`,
		serviceType: "Webentwicklung & API-Integration",
		offers: plans.map((p) => {
			const offer = {
				"@type": "Offer",
				name: p.name,
				description: p.desc,
				price: p.price.replace("ab ", "").replace("€", "").trim(),
				priceCurrency: "EUR",
				availability: "https://schema.org/InStock",
				url: `https://pixel-genie.de/webentwicklung/${citySlug}`,
			};

			// 🔹 Automatische Rabatt-Erkennung (Rabatt + Gültigkeit)
			const rabattFeature = p.features?.find((f) =>
				f.toLowerCase().includes("rabatt")
			);
			if (rabattFeature) {
				offer.priceValidUntil = `${new Date().getFullYear()}-12-31`;
				offer.discount = rabattFeature;
			}

			return offer;
		}),
	};

	return (
		<>
			<ServicePageHead
				title={title}
				description={description}
				canonical={canonical}
				offerSchema={offerSchema}
			/>

			<BreadcrumbsJsonLd items={crumbs} canonical={canonical} />
			<ReadingProgressBar />
			<SmartCTA triggerPercent={35} />
			<Hero
				title={`Webentwicklung ${cityName} Schnell, Skalierbar, SEO stark !`}
				lead={`Wir entwickeln performante Websites & Web-Apps in ${cityName}, die sichtbar sind und verkaufen.`}
				badges={badges}
				ctaTopic={`Webentwicklung Beratung ${cityName}`}
			/>
			<CityFacts cityData={cityData} CityMap={CityMap} />
			<GoogleReviews />
			<USPs title="Warum Pixel-Genie?" items={usps} />
			<Process
				title={`Unser Prozess der Webentwicklung in ${cityName}`}
				steps={steps}
			/>
			<Pricing
				title="Pakete & Preise"
				desc="Transparente Webentwicklung ohne versteckte Kosten."
				plans={plans}
			/>
			<FAQ title={`FAQ zur Webentwicklung in ${cityName}`} items={faq} />
			<LocalNRWHook />
			<PeopleAlsoRead tagHint="Webentwicklung" />
			<ContactCTA
				title={`Starte dein Webentwicklungs-Projekt in ${cityName}`}
				desc={`Kostenloses Erstgespräch – wir planen mit dir Struktur, Ziele & Tech-Stack für dein Projekt in ${cityName}.`}
				topic={`Webentwicklung Beratung ${cityName}`}
			/>
		</>
	);
}
