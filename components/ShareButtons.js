// /components/ShareButtons.jsx
import React from "react";
import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	EmailShareButton,
	FacebookIcon,
	LinkedinIcon,
	XIcon,
	EmailIcon,
} from "react-share";
import { motion } from "framer-motion";

export default function ShareButtons({ url, title, description }) {
	const text = description ? `${title} — ${description}` : title;

	const buttons = [
		{
			id: "facebook",
			Button: FacebookShareButton,
			Icon: FacebookIcon,
			color: "#1877F2",
			label: "Auf Facebook teilen",
			props: { url, quote: text },
		},
		{
			id: "linkedin",
			Button: LinkedinShareButton,
			Icon: LinkedinIcon,
			color: "#0A66C2",
			label: "Auf LinkedIn teilen",
			props: { url, title, summary: description },
		},
		{
			id: "twitter",
			Button: TwitterShareButton,
			Icon: XIcon,
			color: "#000000",
			label: "Auf X posten",
			props: { url, title: text },
		},
		{
			id: "email",
			Button: EmailShareButton,
			Icon: EmailIcon,
			color: "#EA4335",
			label: "Per E-Mail senden",
			props: { url, subject: title, body: description },
		},
	];

	return (
		<div className="share-section my-5 text-center">
			<motion.h5
				className="fw-bold mb-4 gradient-text"
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				💬 Teile diesen Artikel, wenn er dir gefällt!
			</motion.h5>

			<div className="d-flex justify-content-center flex-wrap gap-4">
				{buttons.map(({ id, Button, Icon, color, label, props }) => (
					<motion.div
						key={id}
						whileHover={{ scale: 1.15 }}
						whileTap={{ scale: 0.95 }}
						transition={{ type: "spring", stiffness: 300, damping: 15 }}
						className="rounded-circle p-2 shadow-sm share-btn"
						style={{
							background:
								"linear-gradient(145deg, rgba(255,255,255,0.9), rgba(240,240,240,0.6))",
							boxShadow:
								"0 4px 8px rgba(0,0,0,0.08), inset 0 1px 3px rgba(255,255,255,0.6)",
						}}
					>
						<Button {...props} aria-label={label} className="rounded-circle">
							<Icon
								size={48}
								round
								bgStyle={{ fill: color }}
								iconFillColor="#fff"
							/>
						</Button>
					</motion.div>
				))}
			</div>
		</div>
	);
}
