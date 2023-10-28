import { Html, Head, Main, NextScript } from "next/document";
import dotenv from "dotenv";
dotenv.config();

export default function Document() {
	return (
		<Html lang="de">
			<Head>
				<meta name="theme-color" content="#000000" />
				<link
					rel="icon"
					href="/assets/pixel-genie-nettetal-webentwicklung-logo.png"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
