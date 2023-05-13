import Seo1 from "@/components/Seo1";
import Seo2 from "@/components/Seo2";
import Seo3 from "@/components/Seo3";
import Seo4 from "@/components/Seo4";
import React from "react";
import Head from "next/head";
import Seo5 from "@/components/Seo5";
import Seo6 from "@/components/Seo6";
import Seo7 from "@/components/Seo7";
import ContactForm from "@/components/ContactForm";
function seo() {
	return (
		<div className="mt-5 pt-5">
			<Head>
				<title>Pixel Genie Nettetal SEO</title>
				<meta
					name="description"
					content="Als Spezialisten für SEO helfen wir Ihnen dabei, Ihre Website auf die vorderen Plätze der Suchergebnisse zu bringen. Mit unserem tiefen Verständnis von Suchmaschinenoptimierung und Online-Marketing-Strategien unterstützen wir Sie dabei, Ihre Online-Sichtbarkeit zu verbessern und mehr Traffic auf Ihre Website zu bringen. Entdecken Sie jetzt unsere maßgeschneiderten SEO-Lösungen."
				/>
			</Head>
			<Seo1 />
			<Seo2 />
			<Seo3 />
			<Seo4 />
			<Seo5 />
			<Seo6 />
			<Seo7 />
			<ContactForm />
		</div>
	);
}

export default seo;
