"use client";
import Link from "next/link";
import AutoTranslate from "./AutoTranslate";

export default function DesktopStickyCTA() {
	return (
		<div
			className="position-fixed bottom-0 end-0 mb-4 me-4 d-none d-lg-block"
			style={{ zIndex: 998 }}
		>
			<Link
				href="#kontakt"
				className="btn-premium-footer text-white fw-bold shadow-lg rounded"
				style={{ padding: "14px 20px", fontSize: "1.1rem" }}
			>
				🚀 <AutoTranslate>Jetzt kostenlose Analyse sichern</AutoTranslate>
			</Link>
		</div>
	);
}
