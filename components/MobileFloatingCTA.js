import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { gaEvent } from "@/lib/analytics";

export default function MobileFloatingCTA() {
	const [visible, setVisible] = useState(false);

	// ✅ Lazy init – pojawia się po 2 sekundach (nie psuje LCP)
	useEffect(() => {
		const timer = setTimeout(() => setVisible(true), 2000);
		return () => clearTimeout(timer);
	}, []);

	if (!visible) return null;

	return (
		<motion.div
			initial={{ opacity: 0, y: 60 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			className="mobile-floating-cta d-md-none"
		>
			<div className="text-center align-items-center justify-content-center">
				<Link
					href="#kontakt"
					className="btn-premium-footer w-100 text-white fw-bold text-center p-1 "
					onClick={() =>
						gaEvent("cta_click", {
							category: "engagement",
							label: "mobile_cta",
						})
					}
				>
					🚀 Jetzt starten
				</Link>
			</div>
		</motion.div>
	);
}
