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
		<motion.section
			className="share-section text-center my-5"
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6, ease: "easeOut" }}
		>
			<h5 className="fw-bold mb-4 gradient-text">
				💬 Teile diesen Artikel, wenn er dir gefällt!
			</h5>

			<div
				className="d-flex justify-content-center flex-wrap gap-3"
				style={{ rowGap: "1.5rem" }}
			>
				{buttons.map(({ id, Button, Icon, color, label, props }) => (
					<motion.div
						key={id}
						whileHover={{
							scale: 1.1,
							boxShadow: `0 0 20px ${color}55`,
						}}
						whileTap={{ scale: 0.95 }}
						transition={{ type: "spring", stiffness: 260, damping: 14 }}
						style={{
							borderRadius: "50%",
							padding: "0.35rem",
							background: "rgba(255,255,255,0.6)", // glass look
							backdropFilter: "blur(8px)",
							boxShadow:
								"0 4px 10px rgba(0,0,0,0.1), inset 0 1px 2px rgba(255,255,255,0.3)",
							transition: "all 0.25s ease",
						}}
					>
						<Button
							{...props}
							aria-label={label}
							className="rounded-circle hover"
						>
							<Icon
								size={52}
								round
								bgStyle={{ fill: color }}
								iconFillColor="#fff"
							/>
						</Button>
					</motion.div>
				))}
			</div>
		</motion.section>
	);
}
