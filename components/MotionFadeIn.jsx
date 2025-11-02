"use client";
import React, { useEffect, useRef, useState } from "react";

/**
 * MotionFadeIn — zastępuje useAnimation + motion.div z Framer Motion
 * używany w sekcjach typu About, FAQ, itp.
 */
export default function MotionFadeIn({
	children,
	initial = { opacity: 0, y: 40 },
	whileInView = { opacity: 1, y: 0 },
	transition = { duration: 0.8, easing: "ease-out" },
	threshold = 0.2,
	className = "",
	style = {},
	tag = "div",
}) {
	const [visible, setVisible] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const obs = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					obs.disconnect();
				}
			},
			{ threshold }
		);
		obs.observe(el);
		return () => obs.disconnect();
	}, [threshold]);

	const duration = transition.duration ?? 0.8;
	const easing = transition.easing ?? "ease-out";

	const from = {
		opacity: initial.opacity ?? 0,
		transform: `translateY(${initial.y ?? 40}px)`,
	};
	const to = {
		opacity: whileInView.opacity ?? 1,
		transform: `translateY(${whileInView.y ?? 0}px)`,
	};

	const Tag = tag;

	return (
		<Tag
			ref={ref}
			className={className}
			style={{
				...style,
				opacity: visible ? to.opacity : from.opacity,
				transform: visible ? to.transform : from.transform,
				transition: `opacity ${duration}s ${easing}, transform ${duration}s ${easing}`,
				willChange: "opacity, transform",
			}}
		>
			{children}
		</Tag>
	);
}
