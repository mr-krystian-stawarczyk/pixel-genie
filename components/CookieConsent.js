import React, { useEffect, useState } from "react";
import { hasCookie, setCookie } from "cookies-next";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { CookiesProvider, useCookies } from "react-cookie";
import Link from "next/link";
const CookieConsent = (props) => {
	const [showConsent, setShowConsent] = useState(true);
	const { t } = useTranslation();
	const [cookies, setCookies] = useCookies(["localConsent"]);

	useEffect(() => {
		setShowConsent(hasCookie("localConsent"));
	}, []);

	const acceptCookie = () => {
		setShowConsent(true);
		setCookie("localConsent", "true", { sameSite: "none", secure: true });
	};

	const acceptEssentialCookies = () => {
		// Define a list of cookies that should be considered essential
		const essentialCookies = ["localConsent"];

		// Define a list of non-essential cookies that should be removed
		const nonEssentialCookies = ["_gat", "_gid", "_ga"];

		// Check if the "localConsent" cookie exists
		if (!cookies.localConsent) {
			// The "localConsent" cookie doesn't exist, so we consider only essential cookies
			nonEssentialCookies.forEach((cookieName) => {
				setCookie(cookieName, "", { expires: new Date(0) });
			});
		}

		// Set the "localConsent" cookie to indicate acceptance of essential cookies
		setCookie("localConsent", "false", { sameSite: "none", secure: true });

		setShowConsent(true);

		// You can also add your specific essential cookies here
		// setCookie("essentialCookie1", "value1", { sameSite: "none", secure: true });

		// You may need to refresh the page or perform other operations related to accepting "Essential" cookies.
	};

	if (showConsent) {
		return null;
	}

	const overlayStyle = {
		position: "fixed",
		// Place the banner at the top of the page
		left: 0,
		bottom: 0,
		right: 0,
		zIndex: 998,
		background: "rgba(0, 0, 0, 0.8)", // Optional background style
		padding: "10px", // Optional padding
	};

	const contentStyle = {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	};

	return (
		<CookiesProvider>
			<div style={overlayStyle}>
				<Row className="justify-content-center bg-black text-center sticky mt-3 ">
					<Col className=" rounded">
						<Col className="fixed ">
							<Col className="fixed bottom-0 left-0 right-0 my-1 flex items-center justify-between px-4 py-2 ">
								<Row style={contentStyle}>
									<h6 className="text-light text-base my-1">{t("policy28")}</h6>
									<h6 className="text-light text-base ">{t("policy29")}</h6>
									<h6 className="text-light text-base ">{t("policy30")}</h6>
									<Row className="text-center align-items-center justify-content-center">
										<ButtonGroup
											style={{
												maxWidth: "15rem",
											}}
										>
											<Button
												className="btn-nav m-2 btn-sm rounded"
												onClick={() => acceptCookie()}
											>
												{t("policy31")}
											</Button>
											<Button
												className="btn-nav m-2 btn-sm rounded"
												onClick={() => acceptEssentialCookies()}
											>
												{t("policy31-1")}
											</Button>
										</ButtonGroup>
									</Row>
								</Row>
							</Col>
						</Col>
					</Col>
				</Row>
			</div>
		</CookiesProvider>
	);
};

export default CookieConsent;
