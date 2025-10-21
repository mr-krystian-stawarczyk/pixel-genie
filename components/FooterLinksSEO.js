import Link from "next/link";
import citiesData from "@/data/citiesData";
import { useRouter } from "next/router";

/**
 * Smart SEO Footer – rotacja linków + silosy + cross-linking
 */
export default function FooterLinksSEO() {
	const router = useRouter();

	function hashCode(str) {
		let hash = 0;
		for (let i = 0; i < str.length; i++) {
			hash = str.charCodeAt(i) + ((hash << 5) - hash);
		}
		return Math.abs(hash);
	}

	const seed = hashCode(router.asPath || "/");
	const shuffledCities = [...citiesData].sort(
		(a, b) => (hashCode(a.city) ^ seed) - (hashCode(b.city) ^ seed)
	);

	// 4 silosy po 4 miasta = 16 linków „rdzeniowych”
	const webentwicklungCities = shuffledCities.slice(0, 4);
	const webdesignCities = shuffledCities.slice(4, 8);
	const seoCities = shuffledCities.slice(8, 12);
	const webseitenCities = shuffledCities.slice(12, 16);

	const serviceGroups = [
		{
			slug: "webseitenerstellung",
			label: "🌐 Webseitenerstellung",
			data: webseitenCities,
			color: "#7fd1ae",
		},
		{
			slug: "webentwicklung",
			label: "💻 Webentwicklung",
			data: webentwicklungCities,
			color: "#6eb5ff",
		},
		{ slug: "seo", label: "🔍 SEO Agentur", data: seoCities, color: "#ffb36e" },
		{
			slug: "webdesign-agentur",
			label: "🎨 Webdesign Agentur",
			data: webdesignCities,
			color: "#d68fff",
		},
	];

	return (
		<div className="footer-seo-links text-center mt-4">
			<h3
				className="h6 fw-bold mb-3 text-uppercase"
				style={{ color: "var(--text-color)", letterSpacing: "0.05em" }}
			>
				Webdesign, Webentwicklung & SEO – Standorte in Deutschland
			</h3>

			{/* Silosy: 4 usługi x 4 miasta */}
			<div className="d-flex flex-wrap justify-content-center gap-4 mb-4">
				{serviceGroups.map((group, gi) => (
					<div
						key={gi}
						className="d-flex flex-column align-items-start small text-start mx-2"
						style={{ minWidth: "200px", maxWidth: "260px" }}
					>
						<h4
							className="fw-semibold mb-2"
							style={{
								color: group.color,
								fontSize: "0.9rem",
								textTransform: "uppercase",
							}}
						>
							{group.label}
						</h4>

						{group.data.map((c, i) => {
							const city = c.city.toLowerCase();
							const cityName = c.city.charAt(0).toUpperCase() + c.city.slice(1);
							return (
								<Link
									key={i}
									href={`/${group.slug}/${city}`}
									className="footer-links text-decoration-none hover"
									aria-label={`${group.label} ${cityName}`}
									style={{
										color: "var(--text-color)",
										lineHeight: "1.6",
										transition: "color 0.3s ease",
									}}
								>
									{group.label.replace(/[^a-zA-ZÄÖÜäöüß ]/g, "").trim()}{" "}
									{cityName}
								</Link>
							);
						})}
					</div>
				))}
			</div>

			<hr className="my-3 border-secondary opacity-25" />

			{/* Linki kategorii (strony zbiorcze) */}
			<div className="d-flex flex-wrap justify-content-center gap-2 small mb-3">
				{serviceGroups.map((group, i) => (
					<Link
						key={i}
						href={`/${group.slug}`}
						className="footer-links text-decoration-none"
						style={{
							color: "var(--text-color)",
							fontWeight: 500,
							transition: "color 0.3s ease",
						}}
					>
						{group.label.replace(/[^a-zA-ZÄÖÜäöüß ]/g, "").trim()}
					</Link>
				))}
			</div>

			{/* Cross-linking między silosami – 8 dodatkowych linków (2 z każdego silosu do innej usługi) */}
			<div className="d-flex flex-wrap justify-content-center gap-2 small">
				{webentwicklungCities.slice(0, 2).map((c, i) => (
					<Link
						key={`cross-seo-${i}`}
						href={`/seo/${c.city.toLowerCase()}`}
						className="footer-links text-decoration-none"
					>
						SEO Agentur {c.city}
					</Link>
				))}
				{seoCities.slice(0, 2).map((c, i) => (
					<Link
						key={`cross-web-${i}`}
						href={`/webentwicklung/${c.city.toLowerCase()}`}
						className="footer-links text-decoration-none"
					>
						Webentwicklung {c.city}
					</Link>
				))}
				{webdesignCities.slice(0, 2).map((c, i) => (
					<Link
						key={`cross-webseitenerstellung-${i}`}
						href={`/webseitenerstellung/${c.city.toLowerCase()}`}
						className="footer-links text-decoration-none"
					>
						Webseitenerstellung {c.city}
					</Link>
				))}
				{webseitenCities.slice(0, 2).map((c, i) => (
					<Link
						key={`cross-webdesign-${i}`}
						href={`/webdesign-agentur/${c.city.toLowerCase()}`}
						className="footer-links text-decoration-none"
					>
						Webdesign Agentur {c.city}
					</Link>
				))}
			</div>

			<hr className="my-3 border-secondary opacity-25" />

			{/* Sitemap (pomaga crawlerom i UX) */}
			<div className="mt-3 small opacity-75">
				<Link href="/sitemap.xml" className="text-decoration-none">
					📄 Sitemap – alle Städte & Leistungen
				</Link>
			</div>
			<p className="mt-2 small" style={{ opacity: 0.65 }}>
				© 2025 Pixel-Genie – Webentwicklung, Webdesign & SEO in Deutschland
			</p>
		</div>
	);
}
