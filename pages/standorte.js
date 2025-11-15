import Head from "next/head";
import Link from "next/link";
import citiesData from "@/data/citiesData";
import { Container, Row, Col } from "react-bootstrap";

export default function Standorte() {
	const services = [
		{ slug: "webseitenerstellung", label: "Webseitenerstellung" },
		{ slug: "webentwicklung", label: "Webentwicklung" },
		{ slug: "seo", label: "SEO Agentur" },
		{ slug: "webdesign-agentur", label: "Webdesign Agentur" },
	];

	return (
		<>
			<Head>
				<title>
					Alle 160 Standorte – Webdesign, Webentwicklung & SEO | Pixel-Genie
				</title>
				<meta
					name="description"
					content="Übersicht aller Städte: Webdesign, Webentwicklung, Webseitenerstellung und SEO von Pixel-Genie."
				/>
				<link rel="canonical" href="https://pixel-genie.de/standorte" />
			</Head>

			<Container className="py-5 my-5">
				<h1 className="text-center mb-4">Alle Standorte</h1>
				<p className="text-center opacity-75 mb-4">
					Wähle eine Stadt und Leistung, um direkt zur lokalen Seite zu
					wechseln.
				</p>

				<Row className="justify-content-center">
					{citiesData.map((c, i) => {
						const slug = (c.slug || c.city).toLowerCase();
						const cityName = c.city.charAt(0).toUpperCase() + c.city.slice(1);
						return (
							<Col
								key={i}
								xs={12}
								sm={6}
								md={4}
								lg={3}
								className="mb-3 d-flex flex-column align-items-center"
							>
								<div
									className="fw-semibold mb-2"
									style={{ color: "var(--text-color)" }}
								>
									{cityName}
								</div>
								<div
									className="d-flex flex-column gap-1 text-center"
									style={{ width: "100%", maxWidth: 260 }}
								>
									{services.map((s) => (
										<Link
											key={s.slug}
											href={`/${s.slug}/${slug}`}
											className="text-decoration-none fw-medium rounded-3"
											style={{
												color: "var(--text-color)",
												backgroundColor: "rgba(255,255,255,0.05)",
												border: "1px solid rgba(255,255,255,0.1)",
												minHeight: "40px",
												padding: "0.4rem 0.6rem",
												transition: "all 0.2s ease",
											}}
										>
											{s.label}
										</Link>
									))}
								</div>
							</Col>
						);
					})}
				</Row>
			</Container>
		</>
	);
}
