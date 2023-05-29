import { Card, Container, Button, Row, Col } from "react-bootstrap";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";
import ParticlesComponent from "@/components/ParticlesComponent";

const Header1 = () => {
	const { t } = useTranslation();

	return (
		<div className="header-container pt-5">
			<Container className="py-5  ">
				<Row className=" py-5 align-items-center justify-content-center text-center">
					<Col md={6} className=" pt-5 ">
						<Card className="bg-transparent border-0 blur">
							<Card.Body className="text-start  ">
								<h1 className="text-bold">{t("h1")}</h1>
								<h5 className="text-bold">{t("h2")}</h5>
								<Button as={Link} href="web" className="m-2 btn-lg btn-nav">
									{t("h3")}
								</Button>
								<Button as={Link} href="seo" className="m-2 btn-lg btn-nav">
									{t("h4")}
								</Button>
								<Button
									as={Link}
									href="socialmedia"
									className="m-2 btn-lg btn-nav"
								>
									{t("h5")}
								</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col md={6} className="pt-5 bg-transparent blur ">
						<Image
							src="/assets/webentwicklung-nettetal-seo6.png"
							alt="webentwicklung-nettetal-seo1"
							width={400}
							height={400}
							id="ja"
							priority
						/>
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
