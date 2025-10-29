"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Header3() {
	return (
		<motion.section
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.25 }}
			transition={{ duration: 0.7, ease: "easeOut" }}
		>
			<Container className="my-5 py-5">
				<Row className="justify-content-center align-items-center g-5">
					<Col lg={5} className="text-center">
						<Image
							src="/assets/webentwicklung-nettetal-seo3.png"
							width={420}
							height={420}
							alt="SEO Optimierung Pixel Genie"
							loading="lazy"
							className="responsive-image"
						/>
					</Col>

					<Col lg={5}>
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h2 className="fw-bold mb-3">
									Steigern Sie Ihre Online Sichtbarkeit
								</h2>
								<p>
									Wir bringen Sie auf Google nach oben – und darüber hinaus 🚀
								</p>
								<p>Mehr Besucher → Mehr Anfragen → Mehr Umsatz 📈</p>
								<div className="text-center mt-4">
									<Link href="/seo">
										<Button className="btn-nav text-white" variant="success">
											SEO OPTIMIERUNG →
										</Button>
									</Link>
								</div>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</motion.section>
	);
}
