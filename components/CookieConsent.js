import React, { useEffect, useState } from "react";
import { hasCookie, setCookie } from "cookies-next";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useCookies } from "react-cookie";

const CookieConsent = () => {
	const [showConsent, setShowConsent] = useState(false);
	const { t } = useTranslation();
	const [cookies] = useCookies(["localConsent"]);

	useEffect(() => {
		setShowConsent(!hasCookie("localConsent"));
	}, []);

	const acceptCookie = () => {
		setCookie("localConsent", "true", { sameSite: "none", secure: true });
		setShowConsent(false);
	};

	const acceptEssentialCookies = () => {
		const nonEssential = ["_gat", "_gid", "_ga"];
		nonEssential.forEach((name) =>
			setCookie(name, "", { expires: new Date(0) })
		);
		setCookie("localConsent", "true", { sameSite: "none", secure: true });
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
