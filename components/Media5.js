import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import Link from "next/link";

function Media5() {
	const [ref1, inView1] = useInView({ threshold: 0.5, triggerOnce: false });
	const [ref2, inView2] = useInView({ threshold: 0.5, triggerOnce: false });
	const [ref3, inView3] = useInView({ threshold: 0.5, triggerOnce: false });
	const [ref4, inView4] = useInView({ threshold: 0.5, triggerOnce: false });

	const animateIn = {
		opacity: 1,
		transition: { duration: 1, ease: "easeInOut" },
	};
	const animateOut = {
		opacity: 0,
		transition: { duration: 1, ease: "easeInOut" },
	};

	const controls1 = useAnimation();
	const controls2 = useAnimation();
	const controls3 = useAnimation();
	const controls4 = useAnimation();

	useEffect(() => {
		if (inView1) controls1.start(animateIn);
		else controls1.start(animateOut);
	}, [inView1]);

	useEffect(() => {
		let timeout;
		if (inView2) timeout = setTimeout(() => controls2.start(animateIn), 500);
		else controls2.start(animateOut);
		return () => clearTimeout(timeout);
	}, [inView2]);

	useEffect(() => {
		let timeout;
		if (inView3) timeout = setTimeout(() => controls3.start(animateIn), 700);
		else controls3.start(animateOut);
		return () => clearTimeout(timeout);
	}, [inView3]);

	useEffect(() => {
		let timeout;
		if (inView4) timeout = setTimeout(() => controls4.start(animateIn), 1000);
		else controls4.start(animateOut);
		return () => clearTimeout(timeout);
	}, [inView4]);

	return (
		<Container className="my-5 py-5" id="design-nettetal-preis">
			<Row className="justify-content-center text-center mb-5">
				<Col lg={8}>
					<h2 className="fw-bold mb-3">
						Unser Prozess – So entsteht Ihre Website
					</h2>
					<p>
						Transparenz, Kreativität und Strategie – so gestaltet Pixel Genie
						maßgeschneiderte <Link href="/webdesign/">Websites</Link> und{" "}
						<Link href="/suchmaschinenoptimierung/">SEO-Lösungen</Link> für
						Kunden in
						<Link href="/webdesign-agentur/nettetal/"> Nettetal</Link>,{" "}
						<Link href="/webdesign-agentur/viersen/">Viersen</Link> und ganz
						NRW.
					</p>
				</Col>
			</Row>

			<Row className="justify-content-center text-center align-items-start">
				{/* Schritt 1 */}
				<Col lg={3} className="mx-auto">
					<motion.div ref={ref1} animate={controls1} initial={{ opacity: 0 }}>
						<h1 className="shadow-lg rounded text-bold text-primary">1</h1>
						<Card
							className="border-0 bg-transparent shadow-lg"
							style={{ height: "20rem" }}
						>
							<Card.Body>
								<h3>Analyse & Strategie</h3>
								<Card.Text>
									Wir starten mit einem kostenlosen Beratungsgespräch, in dem
									wir Ihre Ziele, Zielgruppen und das gewünschte Design
									analysieren. Daraus entsteht eine klare Strategie – ob{" "}
									<Link
										href="/webseitenerstellung/"
										className=" text-black text-bold bg-white rounded "
									>
										Webseitenerstellung
									</Link>
									,{" "}
									<Link
										href="/webentwicklung/"
										className=" text-black text-bold bg-white rounded "
									>
										Webentwicklung
									</Link>
									oder vollständige Online-Kampagne.
								</Card.Text>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>

				{/* Schritt 2 */}
				<Col lg={3} className="mx-auto">
					<motion.div ref={ref2} animate={controls2} initial={{ opacity: 0 }}>
						<h1 className="shadow-lg rounded text-bold text-success">2</h1>
						<Card
							className="border-0 bg-transparent shadow-lg"
							style={{ height: "20rem" }}
						>
							<Card.Body>
								<h3>Design & Prototyping</h3>
								<Card.Text>
									Wir entwerfen ein modernes, responsives Design nach den
									neuesten UX/UI-Trends. Visuelle Identität, Benutzerführung und
									Markenkommunikation stehen im Fokus – optimiert für Mobile und
									Google Core Web Vitals.
								</Card.Text>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>

				{/* Schritt 3 */}
				<Col lg={3} className="mx-auto">
					<motion.div ref={ref3} animate={controls3} initial={{ opacity: 0 }}>
						<h1 className="shadow-lg rounded text-bold text-warning">3</h1>
						<Card
							className="border-0 bg-transparent shadow-lg"
							style={{ height: "20rem" }}
						>
							<Card.Body>
								<h3>Entwicklung & SEO</h3>
								<Card.Text>
									Mit modernsten Frameworks wie React & Next.js entwickeln wir
									performante Websites. Dabei integrieren wir{" "}
									<Link
										href="/suchmaschinenoptimierung/"
										className="text-black text-bold bg-white rounded"
									>
										SEO
									</Link>
									, Analytics und Conversion-Tracking, um nachhaltige
									Sichtbarkeit zu erreichen.
								</Card.Text>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>

				{/* Schritt 4 */}
				<Col lg={3} className="mx-auto">
					<motion.div ref={ref4} animate={controls4} initial={{ opacity: 0 }}>
						<h1 className="shadow-lg rounded text-bold text-danger">4</h1>
						<Card
							className="border-0 bg-transparent shadow-lg"
							style={{ height: "20rem" }}
						>
							<Card.Body>
								<h3>Launch & Betreuung</h3>
								<Card.Text>
									Nach der finalen Abnahme wird Ihre Website auf einem
									schnellen, sicheren Hosting bereitgestellt. Anschließend
									übernehmen wir Pflege, Updates und{" "}
									<Link href="/socialmediamarketing/">
										<span className=" text-black text-bold bg-white rounded ">
											Social Media Marketing
										</span>
									</Link>{" "}
									– für langfristigen Erfolg und Vertrauen Ihrer Kunden.
								</Card.Text>
							</Card.Body>
						</Card>
					</motion.div>
				</Col>
			</Row>
		</Container>
	);
}

export default Media5;
