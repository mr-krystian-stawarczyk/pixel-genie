import React from "react";
import { hasCookie, setCookie } from "cookies-next";
import { Button, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const CookieConsent = (props) => {
	const [showConsent, setShowConsent] = React.useState(true);
	const { t } = useTranslation();

	React.useEffect(() => {
		setShowConsent(hasCookie("localConsent"));
	}, []);

	const acceptCookie = () => {
		setShowConsent(true);
		setCookie("localConsent", "true", {});
	};

	if (showConsent) {
		return null;
	}

	const overlayStyle = {
		position: "fixed",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		zIndex: 9999,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backdropFilter: "blur(8px)", // Dodaje efekt rozmycia
	};

	return (
		<div style={overlayStyle}>
			<Row className="justify-content-center text-center sticky mt-5 pt-5">
				<Col className="bg-dark rounded">
					<Col className="fixed inset-0 bg-slate-700 bg-opacity-70">
						<Col className="fixed bottom-0 left-0 right-0 my-2 flex items-center justify-between px-4 py-8 bg-gray-100">
							<Row>
								<span className="text-light text-base my-1">
									{t("policy28")}
								</span>
								<span className="text-light text-base ">{t("policy29")}</span>{" "}
								<span className="text-light text-base "> {t("policy30")}</span>
							</Row>

							<Button className="btn-nav m-2" onClick={() => acceptCookie()}>
								{t("policy31")}
							</Button>
						</Col>
					</Col>
				</Col>
			</Row>
		</div>
	);
};

export default CookieConsent;
