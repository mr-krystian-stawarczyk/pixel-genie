import Link from "next/link";
import citiesData from "@/data/citiesData";
import ServicePageHead from "@/components/service-page/ServicePageHead";
import BreadcrumbsJsonLd from "@/components/service-page/BreadcrumbsJsonLd";
const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://pixel-genie.de";
const CANONICAL = `${SITE}/webentwicklung`;
export default function WebentwicklungLanding() {
	const items = [
		{ name: "Start", url: SITE },
		{ name: "Webentwicklung", url: CANONICAL },
	];
	return (
		<>
			<ServicePageHead
				title="Webentwicklung – Pixel-Genie | Next.js & API"
				description="Moderne Webanwendungen, Integrationen, Optimierung der Core Web Vitals."
				canonical={CANONICAL}
				noIndex={true}
				offerSchema={{
					"@context": "https://schema.org",
					"@type": "ProfessionalService",
					name: "Webentwicklung – Pixel-Genie",
					url: CANONICAL,
				}}
			/>
			<BreadcrumbsJsonLd items={items} canonical={CANONICAL} />
			<main className="container" style={{ padding: "2rem 1rem" }}>
				<h1>Webentwicklung</h1>
				<ul>
					{citiesData.map((c) => (
						<li key={c.slug}>
							<Link href={`/webentwicklung/${c.slug}`}>
								Webentwicklung {c.city}
							</Link>
						</li>
					))}
				</ul>
			</main>
		</>
	);
}
