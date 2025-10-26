import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import AutoTranslateArticle from "@/components/AutoTranslateArticle";

function Media2() {
	const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: false });

	const animateIn = {
		opacity: 1,
		transition: { duration: 1, ease: "easeInOut" },
	};
	const animateOut = {
		opacity: 0,
		transition: { duration: 1, ease: "easeInOut" },
	};

	const controls = useAnimation();
	useEffect(() => {
		if (inView) controls.start(animateIn);
		else controls.start(animateOut);
	}, [inView, controls]);

	// ✅ podział na <p> żeby tłumaczenie brało 100% tekstu
	const text = `
<div>
<p>Wir gestalten Websites, die Emotionen wecken und Vertrauen schaffen.</p>
<p>Mit starkem Fokus auf Benutzerfreundlichkeit, Schnelligkeit und Performance sorgt unser Design dafür, dass Besucher zu Kunden werden.</p>
<p>Ideal für lokale Unternehmen, Dienstleister und E-Commerce-Shops.</p>
</div>
`;

	return (
		<motion.div ref={ref} animate={controls}>
			<Container className="mt-5 pt-5">
				<Row className="justify-content-center align-items-center">
					{/* ✅ Tekst lewa strona */}
					<Col lg={5} className="mx-auto my-2">
						<Card className="border-0 bg-transparent">
							<Card.Body>
								{/* ✅ H1 NIE tłumaczony = SEO friendly */}
								<h1 className="text-start fw-bold">
									Einzigartiges Design, das verkauft
								</h1>

								{/* ✅ theme kolor działa */}
								<div className="text-start">
									<AutoTranslateArticle html={text} slug="media2-text" />
								</div>

								<Button className="btn-nav mt-3" href="#design-nettetal-preis">
									<span className="text-white">Preise & Pakete ansehen</span>
								</Button>
							</Card.Body>
						</Card>
					</Col>

					{/* ✅ Obrazek prawa strona */}
					<Col lg={5} className="mx-auto my-2 text-center">
						<Image
							src="/assets/webentwicklung-nettetal-design-seo2.png"
							width={400}
							height={400}
							className="responsive-image"
							alt="Webdesign Nettetal SEO Optimierung"
							loading="lazy"
						/>
					</Col>
				</Row>
			</Container>
		</motion.div>
	);
}

export default Media2;
