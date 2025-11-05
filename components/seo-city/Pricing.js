// /components/seo-city/Pricing.js
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Pricing({ cityName, MotionFadeIn, AutoTranslate }) {
	const PriceCard = ({ tone, title, price, items, className }) => (
		<Card
			className={className || "h-100 shadow-lg rounded-4 bg-transparent border"}
		>
			<Card.Body className="p-4">
				<h3 className="fw-bold">{title}</h3>
				<p>Ideal für lokale Unternehmen, Dienstleister und Shops.</p>
				<h2 className="fw-bold mb-3">
					{price} € / Monat <br />
					<span className="fs-6 text-muted">(Endpreis §19 UStG)</span>
				</h2>
				<hr />
				<ul className="text-start small">
					{items.map((it, i) => (
						<li key={i} style={{ color: "var(--text-color)" }}>
							{it}
						</li>
					))}
					<li style={{ color: "var(--text-color)" }}>
						🎉 <strong>-10% Rabatt</strong> für Unternehmen aus{" "}
						<strong>NRW</strong>
					</li>
				</ul>
			</Card.Body>
		</Card>
	);

	return (
		<div id="seo-pricing" className="py-5">
			<Container className="text-center">
				<Row className="justify-content-center text-center mb-5">
					<Col lg={8}>
						<img
							src="/assets/webentwicklung-webagentur-nettetal-price.png"
							width={260}
							height={260}
							alt="SEO Preise Pixel Genie"
							className="my-3"
							loading="eager"
						/>
						<h2 className="fw-bold display-6">
							{AutoTranslate ? (
								<AutoTranslate>SEO-Pakete für {cityName}</AutoTranslate>
							) : (
								`SEO-Pakete für ${cityName}`
							)}
						</h2>
						<p className="lead">
							{AutoTranslate ? (
								<AutoTranslate>
									Mehr Sichtbarkeit, mehr Anfragen, mehr Umsatz – unsere
									SEO-Pakete sind individuell skalierbar.
								</AutoTranslate>
							) : (
								"Mehr Sichtbarkeit, mehr Anfragen, mehr Umsatz – unsere SEO-Pakete sind individuell skalierbar."
							)}
						</p>
					</Col>
				</Row>

				<Row className="justify-content-center text-center g-4">
					<Col lg={4} md={6}>
						{MotionFadeIn ? (
							<MotionFadeIn
								threshold={0.4}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
							>
								<PriceCard
									title="BASIC SEO"
									price={149}
									items={[
										"Technische SEO-Optimierung (OnPage & Speed)",
										"Keyword-Recherche & Zielgruppenanalyse (lokal)",
										"Content-Optimierung & Textanalyse",
										"Google Business Profil & lokale Citations",
										"Basis-Performance-Tuning (Core Web Vitals 85+)",
										"Einrichtung Search Console & Indexkontrolle",
									]}
									className="h-100 shadow-lg rounded-4 border-primary bg-transparent"
								/>
							</MotionFadeIn>
						) : (
							<PriceCard title="BASIC SEO" price={149} items={[]} />
						)}
					</Col>

					<Col lg={4} md={6}>
						{MotionFadeIn ? (
							<MotionFadeIn
								threshold={0.4}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
							>
								<PriceCard
									title="BUSINESS SEO"
									price={299}
									items={[
										"SEO-Roadmap, Keyword-Mapping & Monitoring",
										"Core Web Vitals Optimierung (Lighthouse 90+)",
										"Backlink Aufbau, Citations & Local Authority",
										"4× Content Optimierungen / Monat (Landingpages, Blog)",
										"Conversion Optimierung (UX / Struktur / CTA)",
										"1 Stunde SEO Beratung pro Monat inklusive",
										"Performance, Ranking- & Traffic Report",
										"Monatlicher Performance Report",
										"DSGVO-Check & technisches SEO-Audit",
									]}
									className="h-100 shadow-lg rounded-4 border-success bg-transparent"
								/>
							</MotionFadeIn>
						) : (
							<PriceCard
								title="BUSINESS SEO"
								price={299}
								items={[]}
								style={{ color: "var(--text-color)" }}
							/>
						)}
					</Col>

					<Col lg={4} md={6}>
						{MotionFadeIn ? (
							<MotionFadeIn
								threshold={0.4}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
							>
								<Card
									className="h-100 rounded-4 text-light shadow-lg border-warning"
									style={{
										background: "linear-gradient(135deg,#0b0b2e,#21216b)",
									}}
								>
									<Card.Body className="p-4">
										<h3 className="fw-bold text-warning">PREMIUM SEO</h3>
										<p className="text-light">
											High-End Lösung – Strategie, Content, Technik & Autorität.
										</p>
										<h2 className="fw-bold mb-3 text-warning">
											499 € / Monat <br />
											<span className="fs-6 text-muted">
												(Endpreis §19 UStG)
											</span>
										</h2>
										<hr className="border-light" />
										<ul className="text-start small text-white">
											<li>Individuelle SEO- & Content-Strategie (DE/EN/NL)</li>
											<li>8× Content-Assets / Monat (Blog, Landing, PR)</li>
											<li>
												Digital PR & Authority Building (Backlink Outreach)
											</li>
											<li>Conversion-Tracking, Heatmaps & UX-Analysen</li>
											<li>
												Technische Optimierung (Next.js, SSR, CDN, Speed 95+)
											</li>
											<li>Integration von Google Ads & Meta Ads Tracking</li>
											<li>Wettbewerbsanalyse + Marktmonitoring</li>
											<li>Monatliche Strategie-Calls & Reporting</li>
											<li>
												Persönlicher Ansprechpartner & Priorisierter Support
											</li>
											<li>
												🎉 <strong>-10% Rabatt</strong> für NRW
											</li>
										</ul>
									</Card.Body>
								</Card>
							</MotionFadeIn>
						) : null}
					</Col>
				</Row>

				<Row className="justify-content-center text-center mt-4">
					<Col lg={8}>
						<p className="small">
							Alle Preise sind Endpreise gemäß §19 UStG
							(Kleinunternehmerregelung, keine MwSt-Ausweisung). Monatlich
							kündbar – transparente SEO-Leistung ohne versteckte Kosten.
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
