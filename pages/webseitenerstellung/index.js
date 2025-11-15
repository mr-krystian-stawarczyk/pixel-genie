import Link from "next/link";
import citiesData from "@/data/citiesData";
import ServicePageHead from "@/components/service-page/ServicePageHead";
import BreadcrumbsJsonLd from "@/components/service-page/BreadcrumbsJsonLd";
const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://pixel-genie.de";
const CANONICAL = `${SITE}/webseitenerstellung`;
export default function WebseitenerstellungLanding() {
	const items = [
		{ name: "Start", url: SITE },
		{ name: "Webseitenerstellung", url: CANONICAL },
	];
	return (
		<>
			<ServicePageHead
				title="Webseitenerstellung – Pixel-Genie | Vollständig"
				description="Design, Entwicklung, Implementierung, technische Suchmaschinenoptimierung – Komplettservice."
				canonical={CANONICAL}
				noIndex={true}
				offerSchema={{
					"@context": "https://schema.org",
					"@type": "ProfessionalService",
					name: "Webseitenerstellung – Pixel-Genie",
					url: CANONICAL,
				}}
			/>
			<BreadcrumbsJsonLd items={items} canonical={CANONICAL} />
			<main className="container" style={{ padding: "2rem 1rem" }}>
				<h1>Webseitenerstellung</h1>
				<ul>
					{citiesData.map((c) => (
						<li key={c.slug}>
							<Link href={`/webseitenerstellung/${c.slug}`}>
								Webseitenerstellung {c.city}
							</Link>
						</li>
					))}
				</ul>
			</main>
		</>
	);
}
