"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Header2() {
	return (
		<motion.section
			id="header2"
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.25 }}
			transition={{ duration: 0.7, ease: "easeOut" }}
		>
			<Container className="mt-5 pt-5">
				<Row className="justify-content-center align-items-center g-5">
					<Col lg={5} className="mx-auto text-center">
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h2 className="fw-bold mb-3">
									Wir kennen die Bedürfnisse Ihres Unternehmens
								</h2>
								<p>
									Wir erstellen Websites, die nicht nur toll aussehen – sondern
									Besucher in Kunden verwandeln ✅
								</p>
								<p>
									Schnell, responsiv, modern — basierend auf Ihrem digitalen
									Ziel!
								</p>
								<div className="text-center mt-4">
									<Link href="/webseitenerstellen">
										<Button className="btn-nav text-white" variant="primary">
											WEBSEITEN ERSTELLEN →
										</Button>
									</Link>
								</div>
							</Card.Body>
						</Card>
					</Col>

					<Col lg={5} className="mx-auto text-center position-relative">
						<Image
							src="/assets/webentwicklung-nettetal-seo2.png"
							width={400}
							height={400}
							alt="Webentwicklung Pixel Genie"
							loading="lazy"
							className="responsive-image"
						/>
					</Col>
				</Row>
			</Container>
		</motion.section>
	);
}
