import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import AutoTranslate from "@/components/AutoTranslate";

function Seo1() {
	const [ref, inView] = useInView({
		threshold: 0.5,
		triggerOnce: false,
	});

	const controls = useAnimation();

	useEffect(() => {
		controls.start({
			opacity: inView ? 1 : 0,
			transition: { duration: 1, ease: "easeInOut" },
		});
	}, [inView, controls]);

	return (
		<motion.div ref={ref} animate={controls}>
			<Container className="mt-5 pt-5">
				<Row className="justify-content-center text-center align-items-center">
					<Col lg={5} className="mx-auto my-2">
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h1 className="text-start">
									<AutoTranslate>
										Suchmaschinenoptimierung für eine höhere Position in den
										Suchergebnissen
									</AutoTranslate>
								</h1>
								<Card.Text className="text-start">
									<AutoTranslate>
										Das Pixel Genie Team aus Nettetal bietet umfassende SEO
										Optimierungsdienste an, um Ihre Website in den
										Suchergebnissen höher zu positionieren. Nutzen Sie unser
										Wissen und unsere Erfahrung, um Ihre Online Sichtbarkeit zu
										steigern und mehr organischen Traffic auf Ihrer Website zu
										generieren.
									</AutoTranslate>
								</Card.Text>

								<Button className="btn-nav" href="#process">
									<span className="text-white">
										<AutoTranslate>SEO OPTIMIERUNG PROZESS</AutoTranslate>
									</span>
								</Button>
							</Card.Body>
						</Card>
					</Col>

					<Col lg={5} className="mx-auto my-2">
						<Image
							src="/assets/webentwicklung-nettetal-seo3.png"
							width={400}
							height={400}
							className="responsive-image"
							alt="SEO-webentwicklung-nettetal-1"
							priority
						/>
					</Col>
				</Row>
			</Container>
		</motion.div>
	);
}

export default Seo1;
