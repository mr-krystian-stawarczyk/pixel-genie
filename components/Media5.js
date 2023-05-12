import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SplitTextJS from "split-text-js";
import gsap from "gsap";
import { Link } from "react-scroll";
import Image from "next/image";

function Media5() {
	return (
		<Container className="my-5 py-5">
			<Row className="justify-content-center text-center align-items-center">
				<Col lg={3} className="mx-auto">
					<Card className="border-0 text-dark " style={{ height: "44rem" }}>
						<Card.Body>
							<h1>1</h1>
							<h2>Konsultacja i analiza wymagań klienta</h2>
							<Card.Text>
								Pierwszym krokiem w procesie obróbki mediów jest przeprowadzenie
								konsultacji z klientem i analiza jego wymagań. Dowiemy się,
								jakie są Twoje cele i oczekiwania dotyczące obrobki zdjęć, wideo
								i banerów reklamowych. Zapoznamy się z Twoją marką, stylami
								wizualnymi i preferencjami, aby dopasować nasze usługi do Twoich
								potrzeb. Wszystko to jest optymalizowane pod kątem SEO, aby
								Twoje media były lepiej widoczne w wynikach wyszukiwania.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={3} className="mx-auto">
					<Card className="border-0 text-dark " style={{ height: "44rem" }}>
						<Card.Body>
							<h1>2</h1>
							<h2>Projektowanie i kreatywna oprawa</h2>
							<Card.Text>
								Po zrozumieniu wymagań klienta przechodzimy do etapu
								projektowania i kreatywnej oprawy. Nasz zespół grafików i
								projektantów stworzy spersonalizowane projekty, które będą
								odzwierciedlać Twoją markę i przyciągać uwagę odbiorców.
								Tworzymy oryginalne projekty graficzne, dostosowane do Twoich
								potrzeb, optymalizując je pod kątem SEO, aby Twoje media były
								lepiej widoczne dla potencjalnych klientów.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={3} className="mx-auto">
					<Card className="border-0 text-dark " style={{ height: "44rem" }}>
						<Card.Body>
							<h1>3</h1> <h2>Obróbka i montaż mediów</h2>
							<Card.Text>
								W kolejnym kroku przystępujemy do obróbki i montażu mediów. Nasz
								zespół specjalistów ds. obróbki zdjęć i wideo użyje
								zaawansowanych narzędzi i technik, aby poprawić jakość, usunąć
								niedoskonałości, dopasować kolory i dodać efekty specjalne,
								zgodnie z Twoimi oczekiwaniami. W przypadku banerów reklamowych
								zapewnimy, że są one atrakcyjne, czytelne i skuteczne w
								przyciąganiu uwagi odbiorców. Cały proces jest optymalizowany
								pod kątem SEO, aby Twoje media były lepiej widoczne w wynikach
								wyszukiwania.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={3} className="mx-auto">
					<Card className="border-0 text-dark " style={{ height: "44rem" }}>
						<Card.Body>
							{" "}
							<h1>4</h1>
							<h2>Dostawa i optymalizacja SEO</h2>
							<Card.Text>
								Ostatni krok to dostawa gotowych mediów oraz optymalizacja SEO.
								Dostarczymy Ci gotowe pliki w odpowiednich formatach i
								rozmiarach, które będą gotowe do użycia na Twojej stronie
								internetowej lub w kampaniach reklamowych. Dodatkowo,
								przeprowadzimy optymalizację pod kątem SEO, uwzględniając
								odpowiednie słowa kluczowe i tagi, aby Twoje media były lepiej
								widoczne w wynikach wyszukiwania i przyciągały większą liczbę
								użytkowników.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Media5;
