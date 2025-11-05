"use client";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function Pricing({ title = "Pakete & Preise", plans = [] }) {
	const surface = {
		backgroundColor: "transparent",
		border: "none",
	};

	// 🔹 wykrywanie motywu z klasy .dark / .light
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const html = document.documentElement;
			setIsDark(html.classList.contains("dark"));

			const observer = new MutationObserver(() => {
				setIsDark(html.classList.contains("dark"));
			});

			observer.observe(html, { attributes: true, attributeFilter: ["class"] });
			return () => observer.disconnect();
		}
	}, []);

	return (
		<section className="py-5">
			<Container>
				<h2 className="h3 fw-bold mb-4 text-center">{title}</h2>

				<Row className="g-4 justify-content-center">
					{plans.map((p, i) => {
						const variant =
							p.variant ||
							(i === 0 ? "primary" : i === 1 ? "success" : "warning");

						const isPremium = variant === "warning";
						const isBusiness = variant === "success";
						const isBasic = variant === "primary";

						// ✅ tylko Basic dynamicznie reaguje na motyw
						const basicTextColor = isDark ? "#fff" : "#000";

						// 🔹 standardowy kolor listy (dla Premium / Business bez zmian)
						let listColor = "#000";
						if (isPremium) listColor = "#fff";
						else if (isBusiness) listColor = "#000";
						else if (isBasic) listColor = basicTextColor;

						let textClass = isPremium
							? "text-white"
							: isBusiness
							? "text-black"
							: isDark
							? "text-light"
							: "text-dark";

						return (
							<Col lg={4} md={6} key={i}>
								<Card
									className={`h-100 rounded-4 shadow-lg border-0 ${
										isPremium
											? "text-light"
											: isBusiness
											? "bg-light"
											: "bg-transparent"
									}`}
									style={
										isPremium
											? {
													background: "linear-gradient(135deg,#0b0b2e,#21216b)",
											  }
											: surface
									}
								>
									<Card.Body className="p-4">
										<h3
											className={`fw-bold mb-2 ${
												isPremium
													? "text-warning"
													: isBusiness
													? "text-success"
													: "text-primary"
											}`}
										>
											{p.name?.toUpperCase()} WEBSITE
										</h3>

										{/* ✅ Tylko Basic dostaje dynamiczny inline kolor */}
										<p
											className={`mb-2 ${
												isPremium
													? "text-white"
													: isBusiness
													? "text-black"
													: isDark
													? "text-light"
													: "text-dark"
											}`}
											style={isBasic ? { color: basicTextColor } : {}}
										>
											{p.desc}
										</p>

										<h2
											className={`fw-bold mb-3 ${
												isPremium
													? "text-warning"
													: isBusiness
													? "text-success"
													: "text-primary"
											}`}
										>
											{p.price}{" "}
											<span
												className={`fs-6 ${
													isPremium ? "text-light-50" : "text-muted"
												}`}
											>
												(Endpreis §19 UStG)
											</span>
										</h2>

										<hr className={isPremium ? "border-light" : ""} />

										<ul
											className="text-start small mb-0"
											style={
												isBasic
													? { color: basicTextColor }
													: { color: listColor }
											}
										>
											{p.features.map((f, fi) => (
												<li key={fi}>{f}</li>
											))}
										</ul>
									</Card.Body>
								</Card>
							</Col>
						);
					})}
				</Row>

				<p className="small text-center mt-4 text-muted">
					Alle Preise sind Endpreise gemäß §19 UStG (Kleinunternehmerregelung,
					keine MwSt-Ausweisung).
				</p>
			</Container>
		</section>
	);
}
