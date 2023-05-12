import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SplitTextJS from "split-text-js";
import gsap from "gsap";
import { Link } from "react-scroll";
import Image from "next/image";

function Seo5() {
	return (
		<Container className="my-5 py-5">
			<Row className="justify-content-center text-center align-items-center">
				<Col lg={3} className="mx-auto">
					<Card className="border-0 text-dark " style={{ height: "45rem" }}>
						<Card.Body>
							<h1>1</h1>
							<h2>Audyt SEO i analiza konkurencji</h2>
							<Card.Text>
								Nasz proces strategii SEO rozpoczyna się od przeprowadzenia
								szczegółowego audytu SEO i analizy konkurencji dla Twojej strony
								Pixel-Genie Nettetal SEO. Przeanalizujemy techniczne aspekty
								Twojej strony, takie jak struktura, metadane i prędkość
								ładowania, aby zidentyfikować obszary do poprawy. Równocześnie
								zbadać działania konkurencji, ich strategie SEO oraz słowa
								kluczowe, na które się skupiają. Dzięki temu będziemy mieć pełny
								obraz i będziemy w stanie dostosować strategię do Twoich
								unikalnych potrzeb.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={3} className="mx-auto">
					<Card className="border-0 text-dark " style={{ height: "45rem" }}>
						<Card.Body>
							<h1>2</h1>
							<h2>Planowanie strategii i słowa kluczowe</h2>
							<Card.Text>
								Po przeprowadzeniu audytu SEO opracujemy spersonalizowaną
								strategię SEO dla Twojej strony Pixel-Genie Nettetal SEO.
								Stworzymy listę istotnych słów kluczowych, które są związane z
								Twoimi usługami i mają potencjał generowania ruchu organicznego.
								Dobierzemy słowa kluczowe o odpowiednim zasięgu i
								konkurencyjności, które będą miały wpływ na Twoją widoczność w
								wyszukiwarkach. Planując strategię treści, dostosujemy
								istniejące treści lub stworzymy nową, atrakcyjną dla
								użytkowników i zoptymalizowaną pod kątem SEO.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={3} className="mx-auto">
					<Card className="border-0 text-dark " style={{ height: "45rem" }}>
						<Card.Body>
							<h1>3</h1>
							<h2>Optymalizacja techniczna i tworzenie treści</h2>
							<Card.Text>
								W tym etapie skupimy się na optymalizacji technicznej Twojej
								strony Pixel-Genie Nettetal SEO. Poprawimy strukturę URL,
								wewnętrzną nawigację, tagi meta, nagłówki, opisy obrazów i inne
								czynniki techniczne, które wpływają na indeksację strony przez
								wyszukiwarki. Równocześnie dostosujemy treści, aby były
								unikalne, wartościowe dla użytkowników i zoptymalizowane pod
								kątem słów kluczowych. Umieścimy słowa kluczowe w treściach,
								nagłówkach i linkach wewnętrznych, aby wzmocnić ich znaczenie
								dla SEO.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={3} className="mx-auto">
					<Card className="border-0 text-dark " style={{ height: "45rem" }}>
						<Card.Body>
							<h1>4</h1>
							<h2>Monitorowanie, analiza i optymalizacja</h2>
							<Card.Text>
								Monitorowanie, analiza i optymalizacja Ostatni krok to
								monitorowanie, analiza i optymalizacja strategii SEO dla Twojej
								strony Pixel-Genie Nettetal SEO. Regularnie będziemy sprawdzać
								pozycje Twojej strony w wynikach wyszukiwania dla wybranych słów
								kluczowych. Analizujemy dane analityczne, takie jak ruch na
								stronie, czas przebywania użytkowników, wskaźniki konwersji, aby
								zrozumieć efektywność naszej strategii.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Seo5;
