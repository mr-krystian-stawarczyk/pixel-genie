"use client";
import { useState } from "react";
import { motion } from "framer-motion";

function MailButtonPremium() {
	const [sending, setSending] = useState(false);

	const handleMailClick = () => {
		setSending(true);
		setTimeout(() => {
			setSending(false);
			window.open(
				"mailto:pixelgenie.marketing@gmail.com?subject=Pixel%20Genie%20Webdesign%20Anfrage&body=Hallo%20Pixel%20Genie%2C%0A%0AIch%20interessiere%20mich%20f%C3%BCr%20eine%20Website%20oder%20SEO-Beratung.%0A%0ABitte%20kontaktieren%20Sie%20mich%20unter%3A%0A%0AName%3A%0ATelefon%3A%0AFirma%3A%0A%0AVielen%20Dank!",
				"_blank"
			);
		}, 900);
	};

	return (
		<motion.button
			onClick={handleMailClick}
			disabled={sending}
			whileHover={{ scale: 1.07 }}
			whileTap={{ scale: 0.95 }}
			className={`btn-premium mt-2 ${sending ? "sending" : ""}`}
			title="E-Mail an Pixel Genie senden"
		>
			{sending ? "Wird geöffnet..." : "✨ Jetzt E-Mail senden"}
		</motion.button>
	);
}

export default MailButtonPremium;
