"use client";
import React, { useEffect, useRef, useState, forwardRef } from "react";

/**
 * MotionLite – ultralekki zamiennik framer-motion (bez zależności)
 * Optymalizowany pod Next.js 15 i Cloudflare Pages
 */
export const motion = new Proxy(
	{},
	{
		get: (_, tag) => {
			const Component = forwardRef(
				(
					{
						initial = {},
						whileInView = {},
						transition = {},
						viewport = {},
						style = {},
						className = "",
						children,
						...rest
					},
					ref
				) => {
					const innerRef = useRef(null);
					const targetRef = ref || innerRef;
					const [visible, setVisible] = useState(false);

					useEffect(() => {
						const el = targetRef.current;
						if (!el) return;

						let observer;
						const startObserver = () => {
							if (observer) observer.disconnect();
							observer = new IntersectionObserver(
								([entry]) => {
									if (entry.isIntersecting) {
										setVisible(true);
										if (viewport.once ?? true) observer.disconnect();
									}
								},
								{ threshold: viewport.amount ?? 0.15 }
							);
							observer.observe(el);
						};

						const timer = setTimeout(startObserver, 50);
						return () => {
							clearTimeout(timer);
							observer?.disconnect();
						};
					}, [viewport.amount, viewport.once]);

					const dur = `${transition.duration ?? 0.5}s`;
					const easing = transition.ease ?? "cubic-bezier(.25,.6,.3,1)";

					const from = {
						opacity: initial.opacity ?? 0,
						transform: `translateY(${initial.y ?? 20}px)`,
					};
					const to = {
						opacity: whileInView.opacity ?? 1,
						transform: `translateY(${whileInView.y ?? 0}px)`,
					};

					const Tag = tag;

					return (
						<Tag
							ref={targetRef}
							className={className}
							style={{
								...style,
								opacity: visible ? to.opacity : from.opacity,
								transform: visible ? to.transform : from.transform,
								transition: `opacity ${dur} ${easing}, transform ${dur} ${easing}`,
								willChange: "opacity, transform",
							}}
							{...rest}
						>
							{children}
						</Tag>
					);
				}
			);
			Component.displayName = `motion.${tag}`;
			return Component;
		},
	}
);

export default motion;
