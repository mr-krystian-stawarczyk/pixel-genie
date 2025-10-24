// /lib/analytics.js
export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID;

export const initGA = () => {
	if (!GA_ID || typeof window === "undefined") return;
	if (window.gtagInitialized) return;

	window.dataLayer = window.dataLayer || [];
	function gtag() {
		window.dataLayer.push(arguments);
	}
	window.gtag = gtag;
	window.gtag("js", new Date());
	window.gtag("config", GA_ID, { page_path: window.location.pathname });
	window.gtagInitialized = true;
};

export const gaPageview = (url) => {
	if (window.gtagInitialized && window.gtag) {
		window.gtag("config", GA_ID, { page_path: url });
	}
};

export const gaEvent = (action, params) => {
	if (window.gtagInitialized && window.gtag) {
		window.gtag("event", action, params);
	}
};
