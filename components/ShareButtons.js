import React from "react";
import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	RedditShareButton,
	FacebookIcon,
	LinkedinIcon,
	XIcon,
	RedditIcon,
} from "react-share";
import { motion } from "framer-motion";

export default function ShareButtons({ url, title, description, isMobile }) {
	const text = description ? `${title} — ${description}` : title;

	const buttons = [
		{
			id: "facebook",
			Button: FacebookShareButton,
			Icon: FacebookIcon,
			color: "#1877F2",
			label: "Facebook",
			props: { url, quote: text },
		},
		{
			id: "linkedin",
			Button: LinkedinShareButton,
			Icon: LinkedinIcon,
			color: "#0A66C2",
			label: "LinkedIn",
			props: { url, title, summary: description },
		},
		{
			id: "twitter",
			Button: TwitterShareButton,
			Icon: XIcon,
			color: "#000000",
			label: "X",
			props: { url, title: text },
		},
		{
			id: "reddit",
			Button: RedditShareButton,
			Icon: RedditIcon,
			color: "#FF4500",
			label: "Reddit",
			props: { url, title: text },
		},
	];

	return (
		<div className="share-layout d-flex align-items-center gap-2">
			{/* ✅ Dekstop: SHARE pionowo */}
			{!isMobile && (
				<div className="share-vertical-text text-white fw-bold fs-6">
					<span>S</span>
					<span>H</span>
					<span>A</span>
					<span>R</span>
					<span>E</span>
				</div>
			)}

			<div className="d-flex flex-column align-items-center gap-2">
				{/* ✅ Mobile: SHARE nad ikonami */}
				{isMobile && (
					<div className="text-white fw-bold small text-uppercase">Share</div>
				)}

				<div
					className={`d-flex gap-3 ${
						isMobile ? "flex-row" : "flex-column"
					} justify-content-center align-items-center`}
				>
					{buttons.map(({ id, Button, Icon, color, label, props }) => (
						<motion.div
							key={id}
							className="share-btn"
							whileHover={{ scale: 1.15 }}
							whileTap={{ scale: 0.9 }}
							transition={{ type: "spring", stiffness: 260, damping: 18 }}
						>
							<Button {...props} aria-label={label}>
								<Icon
									size={isMobile ? 38 : 48}
									round
									bgStyle={{ fill: color }}
									iconFillColor="#fff"
								/>
							</Button>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}
