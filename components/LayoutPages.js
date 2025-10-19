import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
const pageVariants = {
	initial: { opacity: 0, x: "-10vw" },
	animate: { opacity: 1, x: 0, transition: { duration: 0.4 } },
	exit: { opacity: 0, x: "10vw", transition: { duration: 0.4 } },
};

export default function LayoutPages({ children }) {
	const router = useRouter();
	return (
		<motion.div
			key={router.asPath}
			initial="initial"
			animate="animate"
			exit="exit"
			variants={pageVariants}
		>
			{children}
		</motion.div>
	);
}
