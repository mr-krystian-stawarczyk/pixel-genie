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

export default function WebseitenerstellungCityPage({ cityData }) {
	const citySlug = toSlug(cityData);
	const cityName =
		(cityData.city || "").charAt(0).toUpperCase() +
		(cityData.city || "").slice(1);
	const canonical = `https://pixel-genie.de/webseitenerstellung/${citySlug}`;

	const title = `Webseitenerstellung ${cityName} – Modern, SEO-stark & konvertierend`;
	const description = `Webseitenerstellung in ${cityName} mit Fokus auf Design, SEO und Benutzerfreundlichkeit. Wir erstellen Websites, die Vertrauen schaffen und Leads generieren.`;

	const badges = [
		{ label: "Schnelle Umsetzung", variant: "success" },
		{ label: "SEO Ready", variant: "info" },
		{ label: "Responsives Design", variant: "primary" },
		{ label: "UX-Optimiert", variant: "warning" },
	];

	const usps = [
		{
			heading: "Individuelles Webdesign",
			text: `Visuell starke Websites für ${cityName}, die Nutzer begeistern und Google lieben.`,
		},
		{
			heading: "SEO & Ladezeit",
			text: "Optimiert für Core Web Vitals & Top-Rankings in lokalen Suchergebnissen.",
		},
		{
			heading: "Einfache Pflege",
			text: "CMS-basierte Websites, die du selbst aktualisieren kannst – ohne Code.",
		},
		{
			heading: "All-in-One Service",
			text: "Design, Texte, Hosting, Wartung – alles aus einer Hand.",
		},
	];

	const steps = [
		{
			bold: "1. Konzept & Struktur",
			text: `Analyse deiner Marke & Zielgruppe in ${cityName}.`,
		},
		{
			bold: "2. Design & Content",
			text: "Erstellung von Layouts, Texten & Bildkonzepten.",
		},
		{
			bold: "3. Entwicklung",
			text: "Responsives Frontend mit SEO-Struktur & Analytics.",
		},
		{ bold: "4. Launch", text: "Testing, Hosting & Go-Live in wenigen Tagen." },
		{
			bold: "5. Betreuung",
			text: "Wartung, Updates & langfristige Optimierung.",
		},
	];

	const plans = [
		{
			name: "Basic Website",
			desc: "Ideal für den schnellen Start – Ihre erste professionelle Website mit modernem Design, schnellen Ladezeiten und solider SEO-Basis.",
			price: "ab 499 €",
			variant: "primary",
			features: [
				"One-Page oder Landingpage",
				"Responsive Design (Mobile & Desktop)",
				"Basis-SEO & schnelle Ladezeiten",
				"Kontaktformular & Google Maps",
				"Impressum & Datenschutz inklusive",
				"Domain-Anbindung & SSL-Zertifikat",
				"Optimiert mit React & Next.js Technologie",
				"Google Business Profil Integration",
				"Performance Optimierung (Lighthouse 85+)",
				"Kostenlose Beratung vor Projektstart",
				"🎉 –10 % Rabatt für Kunden aus NRW",
			],
		},
		{
			name: "Business Website",
			desc: "Unser Bestseller – maßgeschneiderte Website für Unternehmen, die Design, Performance und Sichtbarkeit verbinden möchten.",
			price: "ab 899 €",
			variant: "success",
			features: [
				"Mehrseitige Website (bis 6 Seiten)",
				"Individuelles Design & Branding",
				"Headless CMS Integration (Inhalte selbst pflegen)",
				"SEO & Performance Optimierung (Lighthouse 90+)",
				"Analytics & Search Console Einrichtung",
				"Google My Business & Local SEO Optimierung",
				"1 Jahr Hosting & technische Wartung inklusive",
				"DSGVO-konformes Cookie & Consent Management",
				"Blog oder Portfolio integriert",
				"E-Mail mit Domain (z. B. info@firma.de)",
				"Sicherheitsupdates & Backups",
				"🎉 –10 % Rabatt für Firmen aus NRW",
			],
		},
		{
			name: "Premium Website",
			desc: "Für Marken, die online dominieren wollen – High-End Design, maximale Geschwindigkeit & eine ganzheitliche digitale Strategie.",
			price: "ab 1.499 €",
			variant: "warning",
			features: [
				"Maßgeschneidertes UX/UI Konzept + Markenstrategie",
				"Unbegrenzte Seiten & CMS Integration",
				"Technische SEO + Core Web Vitals 95+",
				"Content-System + automatisiertes Blog Setup",
				"Conversion Tracking, A/B Tests & Heatmaps",
				"Mehrsprachigkeit (DE / EN / NL)",
				"Google Ads & Meta Ads Setup inklusive",
				"Premium Hosting (Cloudflare CDN + Next.js SSR)",
				"Launch-Kampagne & digitale Markenberatung",
				"Persönliche Projektbetreuung (1:1 mit Designer & Entwickler)",
				"24/7 Support in den ersten 3 Monaten",
				"🎉 –10 % Rabatt für Unternehmen aus NRW",
			],
		},
	];

	const faq = [
		{
			q: `Wie lange dauert die Webseitenerstellung in ${cityName}?`,
			a: "In der Regel 10–20 Werktage, abhängig vom Umfang und Content-Bereitstellung.",
		},
		{
			q: "Bieten Sie Hosting & Wartung an?",
			a: "Ja, wir übernehmen Hosting, Updates, Backups & technische Pflege.",
		},
		{
			q: "Kann ich Inhalte selbst bearbeiten?",
			a: "Ja – dank CMS kannst du Texte & Bilder jederzeit selbst anpassen.",
		},
	];

	const crumbs = [
		{ name: "Startseite", url: "https://pixel-genie.de/" },
		{
			name: "Webseitenerstellung",
			url: "https://pixel-genie.de/webseitenerstellung",
		},
		{ name: cityName, url: canonical },
	];

	// ✅ OfferSchema mit lokalem SEO, City-Daten & automatischem Rabatt
	const offerSchema = {
		"@context": "https://schema.org",
		"@type": "Service",
		name: `Webseitenerstellung ${cityName}`,
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
		offers: plans.map((p) => {
			const offer = {
				"@type": "Offer",
				name: p.name,
				description: p.desc,
				price: p.price.replace("ab ", "").replace("€", "").trim(),
				priceCurrency: "EUR",
				availability: "https://schema.org/InStock",
			};

			// 🔹 Automatische Rabatt-Erkennung
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
				title={`Webseitenerstellung ${cityName} – Modern & überzeugend`}
				lead={`Professionelle Websites in ${cityName}, die Vertrauen schaffen und verkaufen. Design, SEO & Technik perfekt kombiniert.`}
				badges={badges}
				ctaTopic={`Webseitenerstellung Beratung ${cityName}`}
			/>
			<GoogleReviews />
			<USPs title="Warum Pixel-Genie?" items={usps} />
			<Process
				title={`Unser Prozess der Webseitenerstellung in ${cityName}`}
				steps={steps}
			/>
			<Pricing
				title="Pakete & Preise"
				desc="Faire Preise ohne versteckte Kosten."
				plans={plans}
			/>
			<FAQ title={`FAQ zur Webseitenerstellung in ${cityName}`} items={faq} />
			<LocalNRWHook />
			<PeopleAlsoRead tagHint="Webdesign" />
			<ContactCTA
				title={`Starte dein Website-Projekt in ${cityName}`}
				desc={`Kostenlose Erstberatung & Angebotsplanung für deine Website in ${cityName}.`}
				topic={`Webseitenerstellung Beratung ${cityName}`}
			/>
		</>
	);
}
