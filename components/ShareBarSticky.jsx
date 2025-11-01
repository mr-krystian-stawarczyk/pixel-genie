import ShareButtons from "./ShareButtons";
import motion from "@/components/MotionLite";

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
				pointerEvents: "none",
				width: isMobile ? "100%" : "auto",
			}}
			className={isMobile ? "share-sticky sharebar-fixed" : "sharebar-fixed"}
		>
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
					variant="sticky"
				/>
			</div>
		</motion.div>
	);
}
