"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Header4() {
	return (
		<motion.section
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.25 }}
			transition={{ duration: 0.7, ease: "easeOut" }}
		>
			<Container className="my-5 py-5">
				<Row className="justify-content-center align-items-center g-5">
					<Col lg={5}>
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h2 className="fw-bold mb-3">Social Media, das verkauft</h2>
								<p>Wir verwandeln Follower in Kunden.</p>
								<p>Konsequente Content-Strategie & Markenaufbau ✅</p>
								<div className="text-center mt-4">
									<Link href="/socialmediamarketing">
										<Button className="btn-nav text-white" variant="warning">
											SOCIAL MEDIA →
										</Button>
									</Link>
								</div>
							</Card.Body>
						</Card>
					</Col>

					<Col lg={5} className="text-center">
						<Image
							src="/assets/webentwicklung-nettetal-seo4.png"
							width={420}
							height={420}
							alt="Social Media Marketing Pixel Genie"
							loading="lazy"
							className="responsive-image"
						/>
					</Col>
				</Row>
			</Container>
		</motion.section>
	);
}
