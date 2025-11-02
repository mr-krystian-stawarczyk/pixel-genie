"use client";
import React, { useEffect, useRef, useState } from "react";

/**
 * MotionLite – zero-dependency replacement for framer-motion
 * Optimized for Next.js + Lighthouse TBT + IdleMount (lazy load fix)
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

						let obs;
						const initObserver = () => {
							if (obs) obs.disconnect();
							obs = new IntersectionObserver(
								([entry]) => {
									if (entry.isIntersecting) {
										setVisible(true);
										if (viewport.once ?? true) obs.disconnect();
									}
								},
								{
									threshold: viewport.amount ?? 0.15,
								}
							);
							obs.observe(el);
						};

						// 🔹 Delay for dynamic/lazy loaded components (IdleMount fix)
						const timer = setTimeout(initObserver, 50);

						return () => {
							clearTimeout(timer);
							if (obs) obs.disconnect();
						};
					}, []);

					// ✅ TBT optimization — shorter, smoother animation
					const dur = `${transition.duration ?? 0.45}s`;
					const easing = transition.ease ?? "cubic-bezier(.25,.6,.3,1)";

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
								transition: `opacity ${dur} ${easing}, transform ${dur} ${easing}`,
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
