// /lib/analytics.js
export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

// Inicjalizacja GA (tylko raz)
export const initGA = () => {
	if (!GA_ID || typeof window === "undefined") return;
	if (window.gtagInitialized) return;

	window.dataLayer = window.dataLayer || [];
	function gtag() {
		window.dataLayer.push(arguments);
	}
	window.gtag = gtag;

	gtag("js", new Date());
	gtag("config", GA_ID, {
		page_path: window.location.pathname,
		anonymize_ip: true,
	});

	window.gtagInitialized = true;
	console.log("✅ Google Analytics initialized:", GA_ID);
};

// Śledzenie pageview
export const gaPageview = (url) => {
	if (!window.gtagInitialized || !window.gtag) return;
	window.gtag("config", GA_ID, {
		page_path: url,
		anonymize_ip: true,
	});
};

// Eventy
export const gaEvent = (action, params = {}) => {
	if (!window.gtagInitialized || !window.gtag) return;
	window.gtag("event", action, params);
};
