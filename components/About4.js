import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import AutoTranslate from "@/components/AutoTranslate";

function About4() {
	const controls = [useAnimation(), useAnimation(), useAnimation()];
	const refs = [];
	const inViews = [];

	for (let i = 0; i < 3; i++) {
		const [ref, inView] = useInView({
			threshold: 0.3,
			triggerOnce: true,
		});
		refs.push(ref);
		inViews.push(inView);
	}

	useEffect(() => {
		inViews.forEach((view, i) => {
			if (view) {
				setTimeout(() => {
					controls[i].start({
						opacity: 1,
						y: 0,
						transition: { duration: 1, ease: "easeOut" },
					});
				}, i * 250);
			}
		});
	}, [...inViews, controls]);

	const uspItems = [
		{
			num: 1,
			title: "Authentisch & greifbar",
			text: `Wir sind keine anonyme Großagentur. Sie sprechen direkt mit den Menschen,
				   die Ihre Website gestalten: persönlich, ehrlich & zuverlässig. Wir hören zu
				   und liefern Lösungen, die zu Ihnen passen — und Ergebnisse bringen.`,
		},
		{
			num: 2,
			title: "100% In-House — keine Umwege",
			text: `Webdesign, Entwicklung, SEO Performance — alles entsteht bei uns im Team.
				   Keine Billig-Outsourcing-Spielchen. Wir garantieren Qualität, Sicherheit &
				   schnelle Umsetzung — weil wir alles selbst in der Hand haben.`,
		},
		{
			num: 3,
			title: "Performance, die verkauft",
			text: `Unsere Websites sind schnell, Google-optimiert und messbar erfolgreich.
				   Core Web Vitals? Check ✅ Conversion-Optimierung? Check ✅ Modernste
				   Technologien wie Next.js & React? Standard! Sichtbarkeit, die wirkt.`,
		},
	];

	return (
		<Container className="my-5 py-5">
			<Row className="text-center my-5">
				<h2 className="fw-bold display-6">
					<AutoTranslate>Warum Pixel Genie?</AutoTranslate>
				</h2>
				<p className=" mt-3">
					<AutoTranslate>
						Wir vereinen Kreativität, Technik & Bauchgefühl — für Websites, die
						Menschen überzeugen & bei Google vorne stehen.
					</AutoTranslate>
				</p>
			</Row>

			<Row className="justify-content-center text-center align-items-start">
				{uspItems.map((item, i) => (
					<Col lg={3} className="mx-auto my-3" key={i}>
						<motion.div
							ref={refs[i]}
							animate={controls[i]}
							initial={{ opacity: 0, y: 50 }}
						>
							<Card className="border-0 bg-transparent shadow-lg p-4 h-100">
								<h1 className="mb-3">{item.num}</h1>
								<h3 className="h5 fw-bold mb-3">
									<AutoTranslate>{item.title}</AutoTranslate>
								</h3>
								<Card.Text className="text-start">
									<AutoTranslate>{item.text}</AutoTranslate>
								</Card.Text>
							</Card>
						</motion.div>
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default About4;
