import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import AutoTranslateArticle from "@/components/AutoTranslateArticle";

function Media3() {
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

	// ✅ pełne tłumaczenie — podział na paragrafy
	const text = `
<div>
<p>Unsere Websites werden mit modernen Frameworks wie Next.js und React entwickelt – schnell, sicher und SEO-optimiert.</p>
<p>Damit Ihre Seite perfekt performt, bei Google ganz vorne steht und auf jedem Gerät beeindruckt.</p>
</div>
`;

	return (
		<motion.div ref={ref} animate={controls}>
			<Container className="mt-5 pt-5">
				<Row className="justify-content-center align-items-center">
					{/* ✅ obrazek lewa strona */}
					<Col lg={5} className="mx-auto my-2 text-center">
						<Image
							src="/assets/webentwicklung-nettetal-design-seo3.png"
							width={400}
							height={400}
							className="responsive-image"
							alt="Professionelle Webentwicklung Nettetal"
							priority
						/>
					</Col>

					{/* ✅ treść prawa strona */}
					<Col lg={5} className="mx-auto my-2">
						<Card className="border-0 bg-transparent">
							<Card.Body>
								{/* ✅ SEO: H1 bez tłumaczenia */}
								<h1 className="text-start fw-bold">
									Modernste Technik & SEO Performance
								</h1>

								{/* ✅ tłumaczenie z zachowaniem kolorów */}
								<div className="text-start">
									<AutoTranslateArticle html={text} slug="media3-text" />
								</div>

								<Button className="btn-nav mt-3" href="#design-nettetal-fragen">
									<span className="text-white">Häufige Fragen</span>
								</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</motion.div>
	);
}

export default Media3;
