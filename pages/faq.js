import Faq1 from "@/components/Faq1";
import Faq2 from "@/components/Faq2";
import React from "react";

function faq() {
	return (
		<div className="mt-5 pt-5">
			<Head>
				<title>Pixel Genie Nettetal FAQ</title>
				<meta
					name="description"
					content="Finden Sie Antworten auf häufig gestellte Fragen zu unseren Webdesign- und SEO-Dienstleistungen bei Pixel-Genie. Kontaktieren Sie uns, wenn Sie weitere Fragen haben."
				/>
			</Head>
			<Faq1 />
			<Faq2 />
		</div>
	);
}

export default faq;
