import { Card, Button, Container, Row, Col } from "react-bootstrap";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
const ParticlesComponent = dynamic(() => import("./ParticlesComponent"), {
	ssr: false,
});

export default function Header1() {
	const { t } = useTranslation();
	const handleEmailClick = () => {
		window.location.href = "mailto:mr.krystian.stawarczyk@gmail.com";
	};
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef(null);
	return (
		<div className="header-container">
			{/* Particles w tle */}
			<div className="particles-container">
				<ParticlesComponent />
			</div>

			{/* Tekst i przyciski */}
			<Container className="header-content-container d-flex flex-column justify-content-center align-items-center text-center mt-sm-5">
				<Card className="bg-transparent border-0 blur p-md-3 p-md-5 mt-xs-5">
					<Card.Body>
						<h1 className="text-bold mb-3">{t("h1")}</h1>
						<h4 className="text-bold mb-4">{t("h2")}</h4>
						<div className="d-flex flex-column flex-md-row justify-content-center gap-3">
							<Button
								as={Link}
								href="webseitenerstellen"
								className="btn-lg btn-nav"
							>
								<span className="text-white"> {t("h3")} </span>
							</Button>
							<Button
								as={Link}
								href="suchmaschinenoptimierung"
								className="btn-lg btn-nav"
							>
								<span className="text-white"> {t("h4")} </span>
							</Button>
							<Button
								as={Link}
								href="socialmediamarketing"
								className="btn-lg btn-nav"
							>
								<span className="text-white"> {t("h5")} </span>
							</Button>
						</div>
					</Card.Body>
					<Card.Body>
						<div className="d-flex flex-column flex-md-row justify-content-center gap-3">
							<Button
								as={Link}
								href="webseitenerstellen"
								className="btn-md btn-nav"
							>
								<span className="text-white">
									{" "}
									<p className="mt-4 text-lg text-white">{t("h6")}</p>{" "}
								</span>
							</Button>

							<Button
								className="btn-md btn-success hover"
								as={Link}
								href="#kontakt"
							>
								<span className="text-white text-uppercase">
									<p
										className="mt-4 text-lg text-white text-bold"
										onClick={handleEmailClick}
										style={{ cursor: "pointer" }}
									>
										{t("h7")}
									</p>{" "}
								</span>
							</Button>
						</div>
					</Card.Body>
				</Card>
			</Container>
		</div>
	);
}
