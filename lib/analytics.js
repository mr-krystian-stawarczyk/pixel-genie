// ✅ /lib/analytics.js
export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

export const initGA = () => {
	if (!GA_ID || typeof window === "undefined") return;
	if (window.gtagInitialized) return;

	window.dataLayer = window.dataLayer || [];
	window.gtag = function () {
		window.dataLayer.push(arguments);
	};

	window.gtag("js", new Date());
	window.gtag("config", GA_ID, {
		page_path: window.location.pathname,
		anonymize_ip: true,
		debug_mode: process.env.NODE_ENV !== "production",
	});

	console.log("✅ GA config prepared:", GA_ID);
};

export const setGAReady = () => {
	window.gtagInitialized = true;
	console.log("🔥 GA READY — tracking active");
};

export const gaPageview = (url) => {
	if (!window.gtagInitialized) return;
	window.gtag("config", GA_ID, {
		page_path: url,
		anonymize_ip: true,
	});
};

export const gaEvent = (action, params = {}) => {
	if (!window.gtagInitialized) return;
	window.gtag("event", action, {
		...params,
		anonymize_ip: true,
	});
};
