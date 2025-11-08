import Link from "next/link";
import citiesData from "@/data/citiesData";
import ServicePageHead from "@/components/service-page/ServicePageHead";
import BreadcrumbsJsonLd from "@/components/service-page/BreadcrumbsJsonLd";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://pixel-genie.de";
const CANONICAL = `${SITE}/seo`;

export default function SeoLanding() {
	const items = [
		{ name: "Start", url: SITE },
		{ name: "SEO", url: CANONICAL },
	];

	return (
		<>
			<ServicePageHead
				title="SEO Agentur – Pixel-Genie | Sichtbarkeit & Wachstum"
				description="SEO, das Leads generiert: Technik, Content, Lokales."
				canonical={CANONICAL}
				offerSchema={{
					"@context": "https://schema.org",
					"@type": "ProfessionalService",
					name: "Pixel-Genie – SEO Agentur",
					url: CANONICAL,
					areaServed: "Deutschland",
					offers: {
						"@type": "Offer",
						availability: "https://schema.org/InStock",
					},
				}}
			/>
			<BreadcrumbsJsonLd items={items} canonical={CANONICAL} />
			<main className="container" style={{ padding: "2rem 1rem" }}>
				<h1>SEO Agentur</h1>
				<p>
					Wählen Sie eine Stadt aus, um spezielle Angebote und Fallstudien
					anzuzeigen:
				</p>
				<ul>
					{citiesData.map((c) => (
						<li key={c.slug}>
							<Link href={`/seo/${c.slug}`}>SEO {c.city}</Link>
						</li>
					))}
				</ul>
			</main>
		</>
	);
}
