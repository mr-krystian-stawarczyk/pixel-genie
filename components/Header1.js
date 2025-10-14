import { Card, Button, Container, Row, Col } from "react-bootstrap";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const ParticlesComponent = dynamic(() => import("./ParticlesComponent"), {
	ssr: false,
});

export default function Header1() {
	const { t } = useTranslation();

	return (
		<div className="header-container">
			{/* Particles w tle */}
			<div className="particles-container">
				<ParticlesComponent />
			</div>

			{/* Tekst i przyciski */}
			<Container className="header-content-container d-flex flex-column justify-content-center align-items-center text-center">
				<Card className="bg-transparent border-0 blur p-3 p-md-5">
					<Card.Body>
						<h1 className="text-bold mb-3">{t("h1")}</h1>
						<h4 className="text-bold mb-4">{t("h2")}</h4>
						<div className="d-flex flex-column flex-md-row justify-content-center gap-3">
							<Button
								as={Link}
								href="webseitenerstellen"
								className="btn-lg btn-nav"
							>
								{t("h3")}
							</Button>
							<Button
								as={Link}
								href="suchmaschinenoptimierung"
								className="btn-lg btn-nav"
							>
								{t("h4")}
							</Button>
							<Button
								as={Link}
								href="socialmediamarketing"
								className="btn-lg btn-nav"
							>
								{t("h5")}
							</Button>
						</div>
					</Card.Body>
				</Card>
			</Container>
		</div>
	);
}
