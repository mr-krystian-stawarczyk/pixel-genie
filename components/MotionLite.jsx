"use client";
import React, { useEffect, useRef, useState } from "react";

/**
 * MotionLite – zero-dependency replacement for framer-motion
 * Safe for Next.js SSR
 */
export const motion = new Proxy(
	{},
	{
		get: (_, tag) => {
			const Component = React.forwardRef(
				(
					{
						initial = {},
						whileInView = {},
						transition = {},
						viewport = {},
						style,
						className,
						children,
						...rest
					},
					ref
				) => {
					const localRef = useRef(null);
					const targetRef = ref || localRef;
					const [visible, setVisible] = useState(false);

					useEffect(() => {
						const el = targetRef.current;
						if (!el) return;
						const obs = new IntersectionObserver(
							([entry]) => {
								if (entry.isIntersecting) {
									setVisible(true);
									if (viewport.once ?? true) obs.disconnect();
								}
							},
							{ threshold: 0.15 }
						);
						obs.observe(el);
						return () => obs.disconnect();
					}, []);

					const dur = transition.duration ? `${transition.duration}s` : "0.6s";

					const from = {
						opacity: initial.opacity ?? 0,
						transform: `translateY(${initial.y ?? 20}px)`,
					};
					const to = {
						opacity: whileInView.opacity ?? 1,
						transform: `translateY(${whileInView.y ?? 0}px)`,
					};

					return React.createElement(
						tag,
						{
							ref: targetRef,
							className,
							style: {
								...style,
								opacity: visible ? to.opacity : from.opacity,
								transform: visible ? to.transform : from.transform,
								transition: `all ${dur} ease-out`,
								willChange: "opacity, transform",
							},
							...rest,
						},
						children
					);
				}
			);
			Component.displayName = `motion.${tag}`;
			return Component;
		},
	}
);

export default motion;
