import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import AutoTranslateArticle from "@/components/AutoTranslateArticle";

function Media4() {
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

	// ✅ podzielony tekst aby tłumaczył cały
	const text = `
<div>
<p>Ob Webdesign, SEO, Social-Media oder Online-Shops – Pixel Genie bietet alles aus einer Hand.</p>
<p>Wir begleiten Sie von der Idee bis zum Launch und sorgen dafür, dass Ihre Website langfristig Ergebnisse liefert.</p>
<p>Lokal, persönlich und effektiv – für Unternehmen, die wachsen wollen.</p>
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
								{/* SEO — bez tłumaczenia */}
								<h1 className="text-start fw-bold">
									Full-Service Webagentur Nettetal
								</h1>

								{/* ✅ tłumaczony paragraf — theme friendly */}
								<div className="text-start">
									<AutoTranslateArticle html={text} slug="media4-text" />
								</div>

								<Button className="btn-nav mt-3" href="#contact">
									<span className="text-white">Jetzt Kontakt aufnehmen</span>
								</Button>
							</Card.Body>
						</Card>
					</Col>

					{/* ✅ Obrazek prawa strona */}
					<Col lg={5} className="mx-auto my-2 text-center">
						<Image
							src="/assets/webentwicklung-nettetal-design-seo4.png"
							width={400}
							height={400}
							className="responsive-image"
							alt="Full Service Webagentur Nettetal"
							loading="lazy"
						/>
					</Col>
				</Row>
			</Container>
		</motion.div>
	);
}

export default Media4;
