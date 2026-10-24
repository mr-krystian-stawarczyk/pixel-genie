import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

// Dynamiczny import komponentów
const Contact1 = dynamic(() => import("@/components/Contact1"), { ssr: false });
const Contact2 = dynamic(() => import("@/components/Contact2"), { ssr: false });
const Contact3 = dynamic(() => import("@/components/Contact3"), { ssr: false });

function Contact() {
	return (
		<div className="mt-5 pt-5">
			<Head>
				<title>Kontakt – Nettetal Webdesign und Webentwicklung</title>
				<meta
					name="description"
					content="Pixel-Genie: Kontaktieren Sie uns für professionelles Webdesign und Online-Marketing-Dienstleistungen in Nettetal. Schreiben Sie uns per Kontaktformular oder E-Mail – ganz ohne Telefonat."
				/>
				<meta name="robots" content="index, follow" />

				{/* Link Canonical */}
				<link rel="canonical" href="https://pixel-genie.de/kontakt" />

				{/* Meta Open Graph */}
				<meta property="og:title" content="Kontakt – Pixel-Genie" />
				<meta
					property="og:description"
					content="Kontaktieren Sie Pixel-Genie für professionelles Webdesign und Online-Marketing in Nettetal. Wir helfen Ihnen gerne weiter."
				/>
				<meta property="og:image" content="/assets/og-default.jpg" />
				<meta property="og:type" content="website" />
			</Head>
			{/* Komponent dynamicznie importowany */}
			<Contact1 />

			<section className="mt-5 text-center">
				<h3>📰 Pixel-Genie in den Medien</h3>
				<p>
					Unser neuer Fachartikel auf <strong>Medium</strong>:
					<br />
					<a
						href="https://medium.com/@pixelgenie.marketing/3-unsichtbare-website-fehler-die-ihre-conversion-rate-senken-60137d20afe5"
						target="_blank"
						rel="noopener noreferrer"
						className="btn-premium-footer mt-3 d-inline-block"
					>
						Artikel auf Medium lesen →
					</a>
				</p>
			</section>
		</div>
	);
}

export default Contact;
