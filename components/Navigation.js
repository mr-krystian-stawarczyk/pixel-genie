import React from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Image from "next/image";
function Navigation() {
	const { t, i18n } = useTranslation();

	return (
		<>
			<Image
				src="/assets/netherlands.png"
				alt="My Image"
				width={32}
				height={32}
				onClick={() => i18n.changeLanguage("nl")}
				className="m-1 shadow-lg hover"
			/>

			<Image
				src="/assets/poland.png"
				alt="My Image"
				width={32}
				height={32}
				onClick={() => i18n.changeLanguage("pl")}
				className=" shadow-lg hover m-1 "
			/>
		</>
	);
}

export default Navigation;
