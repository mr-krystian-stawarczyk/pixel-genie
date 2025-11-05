"use client";
import dynamic from "next/dynamic";

export const Hero = dynamic(() => import("./Hero"));
export const USPs = dynamic(() => import("./USPs"));
export const Process = dynamic(() => import("./Process"));
export const Portfolio = dynamic(() => import("./Portfolio"));
export const Pricing = dynamic(() => import("./Pricing"));
export const FAQ = dynamic(() => import("./FAQ"));
export const ContactCTA = dynamic(() => import("./ContactCTA"));
export const BreadcrumbsJsonLd = dynamic(() => import("./BreadcrumbsJsonLd"), {
	ssr: false,
});
