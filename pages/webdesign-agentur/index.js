import Link from "next/link";
import citiesData from "@/data/citiesData";
import ServicePageHead from "@/components/service-page/ServicePageHead";
import BreadcrumbsJsonLd from "@/components/service-page/BreadcrumbsJsonLd";
const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://pixel-genie.de";
const CANONICAL = `${SITE}/webdesign-agentur`;
export default function WebdesignAgenturLanding() {
	const items = [
		{ name: "Start", url: SITE },
		{ name: "Webdesign Agentur", url: CANONICAL },
	];
	return (
		<>
			<ServicePageHead
				title="Webdesign Agentur – Pixel-Genie | Performance & UX"
				description="Seiten, die schnell laden und sich gut verkaufen. Next.js, Lighthouse 85+."
				canonical={CANONICAL}
				noIndex={true}
				offerSchema={{
					"@context": "https://schema.org",
					"@type": "ProfessionalService",
					name: "Webdesign Agentur – Pixel-Genie",
					url: CANONICAL,
				}}
			/>
			<BreadcrumbsJsonLd items={items} canonical={CANONICAL} />
			<main className="container" style={{ padding: "2rem 1rem" }}>
				<h1>Webdesign Agentur</h1>
				<ul>
					{citiesData.map((c) => (
						<li key={c.slug}>
							<Link href={`/webdesign-agentur/${c.slug}`}>
								Webdesign {c.city}
							</Link>
						</li>
					))}
				</ul>
			</main>
		</>
	);
}
