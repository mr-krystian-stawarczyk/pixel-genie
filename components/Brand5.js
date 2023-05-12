import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SplitTextJS from "split-text-js";
import gsap from "gsap";
import { Link } from "react-scroll";
import Image from "next/image";

function Brand5() {
	return (
		<Container className="my-5 py-5">
			<Row className="justify-content-center text-center align-items-center">
				<Col lg={3} className="mx-auto">
					<Card className="border-0 text-dark " style={{ height: "48rem" }}>
						<Card.Body>
							<h1>1</h1>
							<h2>Analiza i badanie rynku</h2>
							<Card.Text>
								Pierwszym krokiem w procesie tworzenia marki dla Twojej strony
								Pixel-Genie Nettetal SEO jest przeprowadzenie analizy i badania
								rynku. Zapoznamy się z Twoją branżą, konkurencją oraz
								preferencjami i oczekiwaniami Twojej grupy docelowej. Badanie to
								pozwoli nam zrozumieć unikalne cechy Twojej firmy oraz znaleźć
								obszary, w których możemy wyróżnić Twoją markę i stworzyć
								strategię, która przyciągnie uwagę i wyróżni się na tle
								konkurencji.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={3} className="mx-auto">
					<Card className="border-0 text-dark " style={{ height: "48rem" }}>
						<Card.Body>
							<h1>2</h1>
							<h2>Tworzenie wizerunku marki</h2>
							<Card.Text>
								W oparciu o wyniki analizy i badania rynku rozpoczynamy proces
								tworzenia wizerunku marki. Skupiamy się na elementach takich jak
								logo, kolorystyka, czcionki i style wizualne, które będą
								odzwierciedlać tożsamość Twojej marki i przyciągać uwagę
								użytkowników. Projektujemy unikalne logo, które będzie
								reprezentować Twoją firmę i zapadnie w pamięć klientów. Tworzymy
								również zestaw zasad dotyczących używania logo i innych
								elementów wizualnych, aby zapewnić spójność i konsekwencję w
								komunikacji marki.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={3} className="mx-auto">
					<Card className="border-0 text-dark " style={{ height: "48rem" }}>
						<Card.Body>
							<h1>3</h1>
							<h2>Budowanie strategii komunikacji</h2>
							<Card.Text>
								W tym etapie tworzymy strategię komunikacji, która będzie
								promować Twoją markę i budować jej świadomość. Opracowujemy
								wytyczne dotyczące tonu, stylu i sposobu komunikacji, aby
								zapewnić spójność i jednolitość w przekazach marki. Kreujemy
								treści, które są optymalizowane pod kątem SEO, aby Twoja strona
								Pixel-Genie Nettetal SEO była lepiej widoczna w wynikach
								wyszukiwania. Działamy na różnych kanałach, takich jak strona
								internetowa, media społecznościowe, blogi itp., aby dotrzeć do
								Twojej grupy docelowej i budować zaangażowanie wokół Twojej
								marki.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={3} className="mx-auto">
					<Card className="border-0 text-dark " style={{ height: "48rem" }}>
						<Card.Body>
							<h1>4</h1>
							<h2>Budowanie relacji i monitorowanie wyników</h2>
							<Card.Text>
								Ostatni krok to budowanie relacji z klientami i monitorowanie
								wyników naszych działań. Staramy się tworzyć wartościowe treści
								i angażować użytkowników, aby budować lojalność wobec Twojej
								marki. Monitorujemy wyniki naszych działań, analizujemy dane
								dotyczące ruchu na stronie, interakcji użytkowników, konwersji
								itp., aby ocenić skuteczność strategii i wprowadzać niezbędne
								zmiany i dostosowania.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Brand5;
