import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

function Header4() {
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
						<Card className="border-0 text-dark">
							<Card.Body>
								<h3>Zaistniej w Social Media</h3>
								<Card.Text>
									- Oferujemy usługi zarządzania social media, aby pomóc Ci w
									zwiększeniu świadomości marki i zaangażowaniu klientów.
								</Card.Text>
								<Card.Text>
									- Nasz zespół specjalistów ds. social media pomoże Ci wybrać
									najlepszą strategię dla Twojego biznesu.
								</Card.Text>
								<Card.Text>
									- Pomagamy w zarządzaniu Twoimi profilami na Facebooku,
									Instagramie, Twitterze i innych, aby zwiększyć widoczność
									Twojej marki w mediach społecznościowych.
								</Card.Text>
								<Button variant="primary">Social Media</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={5} className="mx-auto">
						{" "}
						<Image
							src="/assets/socialmedia1.png"
							width={500}
							height={500}
							className="responsive-image"
							alt="socialmedia-image"
						/>
					</Col>
				</Row>
			</Container>
		</motion.div>
	);
}

export default Header4;
