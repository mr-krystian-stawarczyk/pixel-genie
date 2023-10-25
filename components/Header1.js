import { Card, Container, Button, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";
import ParticlesComponent from "./ParticlesComponent";

const Header1 = () => {
	const { t } = useTranslation();

	return (
		<div className="header-container pt-5 d-flex justify-content-center align-items-center">
			<Container className="py-5">
				<Row className="py-2">
					<Col lg={12} xs={12} className="header-content text-center">
						<Card className="bg-transparent border-0 blur">
							<Card.Body>
								<h1 className="text-bold">{t("h1")}</h1>
								<h4 className="text-bold">{t("h2")}</h4>
								<Button
									as={Link}
									href="webseitenerstellen"
									className="m-2 btn-lg btn-nav"
								>
									{t("h3")}
								</Button>
								<Button
									as={Link}
									href="suchmaschinenoptimierung"
									className="m-2 btn-lg btn-nav"
								>
									{t("h4")}
								</Button>
								<Button
									as={Link}
									href="socialmediamarketing"
									className="m-2 btn-lg btn-nav"
								>
									{t("h5")}
								</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
			<div className="particles-container">
				<ParticlesComponent />
			</div>
		</div>
	);
};

export default Header1;
