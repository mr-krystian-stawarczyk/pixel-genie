import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SplitTextJS from "split-text-js";
import gsap from "gsap";
import { Link } from "react-scroll";
import Image from "next/image";

function Social5() {
	return (
		<Container className="my-5 py-5">
			<Row className="justify-content-center text-center align-items-center">
				<Col lg={3} className="mx-auto">
					<Card className="border-0 text-dark " style={{ height: "45rem" }}>
						<Card.Body>
							<h1>1</h1>
							<h2>Strategia i planowanie</h2>
							<Card.Text>
								Pierwszym krokiem w prowadzeniu kampanii w social mediach jest
								opracowanie strategii i planu działania. Na tym etapie
								analizujemy Twoją markę, grupę docelową i cele kampanii.
								Tworzymy spersonalizowaną strategię, która uwzględnia
								odpowiednie platformy społecznościowe, treści do udostępnienia,
								harmonogram publikacji, planowane kampanie reklamowe i cele
								dotyczące wzrostu zaangażowania i konwersji. Optymalizujemy
								strategię pod kątem SEO, aby Twoje posty i treści były bardziej
								widoczne w wynikach wyszukiwania.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={3} className="mx-auto">
					<Card className="border-0 text-dark " style={{ height: "45rem" }}>
						<Card.Body>
							<h1>2</h1>
							<h2>Tworzenie i udostępnianie treści</h2>
							<Card.Text>
								W kolejnym kroku tworzymy atrakcyjne treści, które przyciągną
								uwagę Twojej grupy docelowej. Może to obejmować teksty, grafiki,
								zdjęcia, wideo i inne elementy multimedialne. Tworzymy
								zróżnicowane i angażujące treści, które są zgodne z Twoją marką
								i celami kampanii. Następnie publikujemy te treści na
								odpowiednich platformach społecznościowych, wykorzystując
								planowany harmonogram. Treści są optymalizowane pod kątem SEO,
								aby zwiększyć ich widoczność w wyszukiwarkach.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={3} className="mx-auto">
					<Card className="border-0 text-dark " style={{ height: "45rem" }}>
						<Card.Body>
							<h1>3</h1>
							<h2>Monitorowanie i zaangażowanie</h2>
							<Card.Text>
								W trzecim kroku monitorujemy wyniki kampanii i angażujemy się w
								interakcje z odbiorcami. Regularnie analizujemy dane dotyczące
								zaangażowania, zasięgu, kliknięć i konwersji. Reagujemy na
								komentarze, pytania i opinie użytkowników, budując pozytywny
								wizerunek marki i tworząc więź z klientami. Monitorujemy również
								konkurencję i trendy w branży, dostosowując nasze działania w
								social mediach, aby osiągnąć jak najlepsze rezultaty.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={3} className="mx-auto">
					<Card className="border-0 text-dark " style={{ height: "45rem" }}>
						<Card.Body>
							<h1>4</h1>
							<h2>Analiza i optymalizacja</h2>
							<Card.Text>
								Ostatni krok to analiza efektywności kampanii i optymalizacja
								działań w social mediach. Przeprowadzamy szczegółową analizę
								wyników, oceniamy, które treści i działania przynoszą najlepsze
								rezultaty, i wprowadzamy dostosowania w naszej strategii.
								Optymalizujemy treści, tagi, nagłówki i opisy pod kątem SEO, aby
								poprawić ich widoczność w wyszukiwarkach. Regularnie sprawdzamy
								trendy w social mediach i dostosowujemy nasze działania, aby
								utrzymać konkurencyjność i osiągnąć zamierzone cele.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Social5;
