import { Html, Head, Main, NextScript } from "next/document";
import dotenv from "dotenv";
dotenv.config();
export default function Document() {
	return (
		<Html lang="de">
			<Head>
				<script
					async
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID}`}
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
					}}
				/>
				<title>Document in 41334 Nettetal | Pixel Genie Webagentur</title>
				<meta
					name="description"
					content="Pixel-Genie: Experten für Webdesign & SEO in Nettetal. Professionelle Webentwicklung & umfassende Dienstleistungen. Gestalten Sie Ihre Online-Präsenz mit uns. Wir bieten Responsive Design, Mobile Optimierung & Online-Marketing-Strategien. Maßgeschneiderte E-Commerce-Lösungen & Apps. Stärken Sie Ihre Marke mit unserem Corporate Design & Content-Marketing. Partner für Social-Media-Marketing & Grafikdesign. Pixel-Genie: Agentur für erfolgreiche Online-Strategien & Webprojekte. Professionelle Lösungen für Online-Shops & Landingpages. Umfassende Lösungen für Webentwicklung & Programmierung."
				/>
				<meta
					name="keywords"
					content="Webdesign,SEO,Online-Marketing,Responsive Design,Programmierung,Social-Media-Marketing,Corporate Design,E-Commerce,Mobile-Optimierung,Content-Marketing,User Experience,Suchmaschinen-Optimierung,Grafikdesign,Webentwicklung,Branding,Online-Shop,Conversion-Optimierung,App-Entwicklung,Webanalyse,Marketingstrategie"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
