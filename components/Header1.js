import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { useTheme } from "next-themes";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import dynamic from "next/dynamic";

const ParticlesComponent = dynamic(() => import("./ParticlesComponent"), {
	ssr: false,
	loading: () => <div style={{ position: "absolute", inset: 0 }} />,
});

export default function Header1() {
	const { t } = useTranslation();
	const { theme } = useTheme();
	const sectionRef = useRef(null);

	const handleEmailClick = () => {
		window.location.href = "mailto:mr.krystian.stawarczyk@gmail.com";
	};

	return (
		<header className="header-container position-relative" ref={sectionRef}>
			{/* 🔹 Background */}
			<div
				className="particles-container"
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100vh",
					zIndex: 0,
					overflow: "hidden",
					background:
						theme === "light"
							? "#ffffff" // czyste białe tło
							: "linear-gradient(180deg, #040b1a 0%, #000000 100%)",
					transition: "background 0.4s ease-in-out",
				}}
			>
				<ParticlesComponent theme={theme} /> {/* ✅ przekazujemy motyw */}
			</div>

			<Container className="header-content-container d-flex flex-column justify-content-center align-items-center text-center mt-sm-5">
				<Card className="bg-transparent border-0 blur p-md-3 p-md-5 mt-xs-5">
					<Card.Body>
						<h1 className="text-bold mb-3">{t("h1")}</h1>
						<h2 className="text-bold mb-4">{t("h2")}</h2>

						<div className="d-flex flex-column flex-md-row justify-content-center gap-3">
							<Button
								as={Link}
								href="/webseitenerstellen"
								className="btn-lg btn-nav"
							>
								<span className="text-white">{t("h3")}</span>
							</Button>
							<Button
								as={Link}
								href="/suchmaschinenoptimierung"
								className="btn-lg btn-nav"
							>
								<span className="text-white">{t("h4")}</span>
							</Button>
							<Button
								as={Link}
								href="/socialmediamarketing"
								className="btn-lg btn-nav"
							>
								<span className="text-white">{t("h5")}</span>
							</Button>
						</div>
					</Card.Body>

					<Card.Body>
						<div className="d-flex flex-column flex-md-row justify-content-center gap-3">
							<Button
								as={Link}
								href="/webseitenerstellen"
								className="btn-md btn-nav"
							>
								<span className="text-white text-lg">{t("h6")}</span>
							</Button>
							<Button
								className="btn-md btn-success hover"
								as="button"
								onClick={handleEmailClick}
								style={{ cursor: "pointer" }}
							>
								<span className="text-white text-uppercase text-lg text-bold">
									{t("h7")}
								</span>
							</Button>
						</div>
					</Card.Body>
				</Card>
			</Container>
		</header>
	);
}
