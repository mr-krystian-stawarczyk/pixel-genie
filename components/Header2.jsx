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
function Header2() {
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
			<Container className="mt-5 pt-5">
				<Row className="justify-content-center text-center align-items-center">
					<Col lg={5} className="mx-auto">
						<Card className="border-0 text-dark ">
							<Card.Body>
								<h3>Wiemy jakie potrzeby ma twoj biznes</h3>
								<Card.Text>
									- Oferujemy kompleksowe usługi związane z tworzeniem stron
									internetowych dla Twojego biznesu.
								</Card.Text>
								<Card.Text>
									- Nasze strony są szybkie, responsywne i funkcjonalne, aby
									pomóc Ci zwiększyć ruch na stronie i konwersje.
								</Card.Text>
								<Card.Text>
									- Przeprowadzimy Cię przez cały proces tworzenia strony
									internetowej, aby zapewnić, że spełni ona Twoje wymagania.
								</Card.Text>
								<Button variant="primary">Strony</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={5} className="mx-auto">
						{" "}
						<Image
							src="/assets/header2.png"
							width={500}
							height={500}
							className="responsive-image"
							alt="header2-image"
						/>
					</Col>
				</Row>
			</Container>{" "}
		</motion.div>
	);
}

export default Header2;
