import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import Image from "next/image";

function Header5() {
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
							src="/assets/header5.png"
							width={500}
							height={500}
							className="responsive-image"
							alt="blog-image"
						/>
					</Col>{" "}
					<Col lg={5} className="mx-auto">
						<Card className="border-0 text-dark">
							<Card.Body>
								<h3>Skorzystaj z naszych porad</h3>
								<Card.Text>
									- Osiągnij większy sukces online dzięki naszym poradom dla
									małych biznesów. Dowiedz się, jak możesz zwiększyć swoją
									widoczność w sieci i przyciągnąć nowych klientów.
								</Card.Text>
								<Card.Text>
									- Czy wiesz, jakie narzędzia są niezbędne do osiągnięcia
									sukcesu w sieci? Nasze porady pomogą Ci wybrać odpowiednie
									rozwiązania i zbudować skuteczną strategię marketingową dla
									Twojej firmy.
								</Card.Text>
								<Card.Text>
									- Czy wiesz, jak korzystać z darmowych narzędzi online, aby
									zwiększyć widoczność swojej firmy w sieci? Nasz blog pomoże Ci
									poznać najlepsze darmowe narzędzia dla małych biznesów..
								</Card.Text>
								<Button variant="primary px-4">Blog</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</motion.div>
	);
}

export default Header5;
