import ShareButtons from "./ShareButtons";
import { motion } from "framer-motion";

export default function ShareBarSticky({ isMobile, url, title, description }) {
	return (
		<motion.div
			initial={{ opacity: 0, x: -20 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.4 }}
			style={{
				position: "fixed",
				zIndex: 2000,
				top: isMobile ? "auto" : "50%",
				left: isMobile ? 0 : "16px",
				bottom: isMobile ? 0 : "auto",
				transform: isMobile ? "none" : "translateY(-50%)",
				background: isMobile ? "rgba(0, 0, 0, 1)" : "transparent",
				width: isMobile ? "100%" : "auto",
				height: isMobile ? "15%" : "auto",
				padding: isMobile ? "1px 0" : 0,
				borderTopLeftRadius: isMobile ? "12px" : 0,
				borderTopRightRadius: isMobile ? "12px" : 0,
				boxShadow: isMobile ? "0 -3px 10px rgba(0,0,0,0.3)" : "none",
				pointerEvents: "none",
			}}
			className="sharebar-fixed"
		>
			{/* ✅ ShareButtons osadzone lokalnie */}
			<div
				style={{
					pointerEvents: "auto",
					display: "flex",
					flexDirection: isMobile ? "row" : "column",
					alignItems: "center",
					justifyContent: "center",
					gap: "10px",
				}}
			>
				<ShareButtons
					url={url}
					title={title}
					description={description}
					isMobile={isMobile}
				/>
			</div>
		</motion.div>
	);
}
