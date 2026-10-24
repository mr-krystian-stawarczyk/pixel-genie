"use client";
import motion from "@/components/MotionLite";
import Link from "next/link";
import AutoTranslate from "./AutoTranslate";
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
								<h2 className="fw-bold mb-3"><AutoTranslate>
									Eine Website, die zu Ihrem Betrieb passt
								</AutoTranslate></h2>
								<p><AutoTranslate>
									Ich entwickle übersichtliche Websites, auf denen Besucher Ihre Leistungen und Kontaktmöglichkeiten schnell finden.
								</AutoTranslate></p>
								<p>
									Mobilfreundlich, klar aufgebaut und auf Ihr Unternehmen zugeschnitten.
								</p>
								<div className="text-center mt-4">
									<Link href="/webseitenerstellen">
										<Button className="btn-nav text-white" variant="primary">
											<AutoTranslate>WEBSEITEN ERSTELLEN →</AutoTranslate>
										</Button>
									</Link>
								</div>
							</Card.Body>
						</Card>
					</Col>

					<Col lg={5} className="mx-auto text-center position-relative">
						<Image
							src="/assets/webentwicklung-nettetal-seo2.webp"
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
