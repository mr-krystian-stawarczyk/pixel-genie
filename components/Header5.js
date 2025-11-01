"use client";
import motion from "@/components/MotionLite";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Header5() {
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
							src="/assets/webentwicklung-nettetal-seo5.png"
							width={420}
							height={420}
							alt="Webdesign Tipps Pixel Genie"
							loading="lazy"
							className="responsive-image"
						/>
					</Col>

					<Col lg={5}>
						<Card className="border-0 bg-transparent">
							<Card.Body>
								<h2 className="fw-bold mb-3">
									Praktische Tipps für Ihr Business
								</h2>
								<p>Erstklassige Webdesign- & Marketing-Hinweise für KMU ✅</p>
								<p>Mehr Sichtbarkeit – smart, ohne hohe Kosten 💡</p>
								<div className="text-center mt-4">
									<Link href="/webdesignblog">
										<Button className="btn-nav" variant="info">
											WEBDESIGN TIPPS →
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
