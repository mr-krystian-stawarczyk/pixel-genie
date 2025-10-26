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

export default function ShareButtons({
	url,
	title,
	description,
	isMobile,
	variant,
}) {
	const text = description ? `${title} — ${description}` : title;

	const shareNative = () => {
		if (navigator.share) {
			return navigator
				.share({ title, text, url })
				.catch(() => console.log("Share cancelled"));
		}
	};

	const openTwitter = () =>
		navigator.share
			? shareNative()
			: window.open(
					`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
					"_blank"
				);

	const openReddit = () =>
		navigator.share
			? shareNative()
			: window.open(
					`https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`,
					"_blank"
				);

	const brandButtons = [
		{
			id: "facebook",
			Button: FacebookShareButton,
			Icon: FacebookIcon,
			color: "#1877F2",
			props: { url, quote: text },
		},
		{
			id: "linkedin",
			Button: LinkedinShareButton,
			Icon: LinkedinIcon,
			color: "#0A66C2",
			props: { url, title },
		},
		{
			id: "twitter",
			Button: TwitterShareButton,
			Icon: XIcon,
			color: "#000000",
			props: isMobile ? { onClick: openTwitter } : { url, title: text },
		},
		{
			id: "reddit",
			Button: RedditShareButton,
			Icon: RedditIcon,
			color: "#FF4500",
			props: isMobile ? { onClick: openReddit } : { url, title: text },
		},
	];

	// ✅ LOGIC: animacja tylko dla inline
	const inlineAnimation =
		variant === "inline"
			? {
					animate: {
						scale: [1, 1.04, 1],
						filter: [
							"drop-shadow(0 0 0px rgba(0,123,255,0))",
							isMobile
								? "drop-shadow(0 0 6px rgba(0,123,255,0.25))"
								: "drop-shadow(0 0 16px rgba(0,123,255,0.45))",
							"drop-shadow(0 0 0px rgba(0,123,255,0))",
						],
					},
					transition: {
						duration: isMobile ? 5 : 3,
						repeat: Infinity,
						ease: "easeInOut",
					},
				}
			: {};

	return (
		<motion.div
			className={`share-layout
				${variant === "sticky" ? "share-sticky" : ""}
				${variant === "inline" ? "share-inline" : ""}
			`}
			{...inlineAnimation}
		>
			{!isMobile && variant === "sticky" && (
				<div className="share-vertical-text fw-bold">
					<span>S</span>
					<span>H</span>
					<span>A</span>
					<span>R</span>
					<span>E</span>
				</div>
			)}

			{variant === "inline" && (
				<div className="share-label fw-semibold">Share:</div>
			)}

			{isMobile && variant === "sticky" && (
				<div className="share-label fw-semibold">Share</div>
			)}

			<div
				className={`d-flex ${
					!isMobile && variant === "sticky" ? "flex-column" : "flex-row"
				} gap-3`}
			>
				{brandButtons.map(({ id, Button, Icon, color, props }) => (
					<motion.div
						key={id}
						className="share-btn"
						whileHover={{ scale: 1.12 }}
					>
						<Button {...props}>
							<Icon
								round
								size={isMobile ? 44 : 48}
								bgStyle={{ fill: color }}
								iconFillColor="#fff"
							/>
						</Button>
					</motion.div>
				))}
			</div>
		</motion.div>
	);
}
