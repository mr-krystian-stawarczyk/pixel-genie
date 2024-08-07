// _document.js
import { Html, Head, Main, NextScript } from "next/document";
import dotenv from "dotenv";
dotenv.config();
export default function Document() {
	return (
		<Html lang="de">
			<Head>
				<meta
					name="keywords"
					content="Webdesign,SEO,Online-Marketing,Responsive Design,Programmierung,Social-Media-Marketing,Corporate Design,E-Commerce,Mobile-Optimierung,Content-Marketing,User Experience,Suchmaschinen-Optimierung,Grafikdesign,Webentwicklung,Branding,Online-Shop,Conversion-Optimierung,App-Entwicklung,Webanalyse,Marketingstrategie"
				/>
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
