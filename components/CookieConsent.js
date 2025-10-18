// components/CookieConsent.js
import React, { useEffect, useState } from "react";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const CookieConsent = () => {
	const [showConsent, setShowConsent] = useState(false);
	const { t } = useTranslation();

	useEffect(() => {
		// Sprawdź, czy zgoda już istnieje
		const consent = getCookie("localConsent");
		setShowConsent(!consent);
	}, []);

	const acceptCookie = () => {
		setCookie("localConsent", "true", {
			sameSite: "Lax", // "None" może być nadmiarowe dla zwykłych zastosowań
			secure: process.env.NODE_ENV === "production", // tylko w prod
			maxAge: 60 * 60 * 24 * 365, // 1 rok
		});
		setShowConsent(false);
	};

	const acceptEssentialCookies = () => {
		// Usunięcie niepotrzebnych cookies
		const nonEssential = ["_gat", "_gid", "_ga"];
		nonEssential.forEach((name) => {
			setCookie(name, "", { expires: new Date(0) });
		});

		setCookie("localConsent", "true", {
			sameSite: "Lax",
			secure: process.env.NODE_ENV === "production",
			maxAge: 60 * 60 * 24 * 365,
		});
		setShowConsent(false);
	};

	if (!showConsent) return null;

	return (
		<div
			style={{
				position: "fixed",
				left: 0,
				bottom: 0,
				right: 0,
				zIndex: 998,
				background: "rgba(0,0,0,0.8)",
				padding: "10px",
			}}
		>
			<Row className="justify-content-center text-center">
				<Col>
					<Row className="justify-content-center">
						<h6 className="text-light">{t("policy28")}</h6>
						<ButtonGroup style={{ maxWidth: "15rem" }}>
							<Button
								className="btn-nav m-2 btn-sm rounded"
								onClick={acceptCookie}
							>
								{t("policy31")}
							</Button>
							<Button
								className="btn-nav m-2 btn-sm rounded"
								onClick={acceptEssentialCookies}
							>
								{t("policy31-1")}
							</Button>
						</ButtonGroup>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default CookieConsent;
