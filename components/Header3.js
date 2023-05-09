import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SplitTextJS from "split-text-js";
import gsap from "gsap";
import { Link } from "react-scroll";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
function Header3() {
	const [ref, inView] = useInView({
		threshold: 0.5, // określa część komponentu, która musi być widoczna, aby został uznany za widoczny
		triggerOnce: false, // określa, czy zdarzenie wchodzenia w widok ma być wywołane tylko raz
	});

	const animateIn = {
		opacity: 1,

		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	};

	const animateOut = {
		opacity: 0,

		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	};

	const controls = useAnimation();
	useEffect(() => {
		if (inView) {
			// komponent jest widoczny, więc można uruchomić animację
			controls.start(animateIn);
		} else {
			// komponent jest niewidoczny, więc można uruchomić animację wyjścia
			controls.start(animateOut);
		}
	}, [inView, controls, animateIn, animateOut]);
	return (
		<motion.div ref={ref} animate={controls}>
			<Container className=" my-5 py-5 ">
				<Row className="justify-content-center text-center align-items-center">
					<Col lg={5} className="mx-auto">
						{" "}
						<Image
							src="/assets/seo1.png"
							width={500}
							height={500}
							className="responsive-image"
							alt="seo-image"
						/>
					</Col>
					<Col lg={5} className="mx-auto">
						<Card className="border-0 text-dark">
							<Card.Body>
								<h3>Zwiekszymy twoja widocznosc w sieci</h3>
								<Card.Text>
									- Oferujemy usługi pozycjonowania SEO, aby Twoja strona
									internetowa była lepiej widoczna w wynikach wyszukiwania
									Google.
								</Card.Text>
								<Card.Text>
									- Dzięki naszemu doświadczeniu w SEO, możemy pomóc Ci
									zwiększyć ruch na stronie i przyciągnąć więcej klientów.
								</Card.Text>
								<Card.Text>
									- Korzystamy z najlepszych praktyk SEO, aby zapewnić, że Twoja
									strona będzie wyświetlać się na pierwszej stronie wyników
									wyszukiwania.
								</Card.Text>
								<Button variant="primary" className="px-4">
									SEO
								</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</motion.div>
	);
}

export default Header3;
