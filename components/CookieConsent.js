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

	return (
		<Row className="justify-content-center text-center sticky mt-5 pt-5">
			<Col className="bg-dark rounded ">
				<Col className="fixed inset-0 bg-slate-700 bg-opacity-70">
					<Col className="fixed bottom-0 left-0 right-0 my-2 flex items-center justify-between px-4 py-8 bg-gray-100">
						<Row>
							<span className="text-light text-base my-1">{t("policy28")}</span>
							<span className="text-light text-base ">
								{t("policy29")}
							</span>{" "}
							<span className="text-light text-base "> {t("policy30")}</span>
						</Row>

						<Button className="btn-nav m-2" onClick={() => acceptCookie()}>
							{t("policy31")}
						</Button>
						<Link href="policy">
							<Button className="btn-nav m-2">Cookies & Imprint</Button>
						</Link>
					</Col>
				</Col>
			</Col>
		</Row>
	);
};

export default CookieConsent;
