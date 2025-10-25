// /lib/analytics.js
export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID;

export const initGA = () => {
	if (!GA_ID) {
		console.warn("GA_ID is not defined");
		return;
	}
	if (typeof window === "undefined") {
		// SSR
		return;
	}
	if (window.gtagInitialized) {
		return;
	}

	window.dataLayer = window.dataLayer || [];
	window.gtag = function (...args) {
		window.dataLayer.push(args);
	};

	window.gtag("js", new Date());
	window.gtag("config", GA_ID, { page_path: window.location.pathname });

	window.gtagInitialized = true;

	console.log("GA initialized with ID:", GA_ID);
};

export const gaPageview = (url) => {
	if (window.gtagInitialized && window.gtag) {
		window.gtag("config", GA_ID, { page_path: url });
		console.log("GA pageview:", url);
	}
};

export const gaEvent = (action, params) => {
	if (window.gtagInitialized && window.gtag) {
		window.gtag("event", action, params);
		console.log("GA event:", action, params);
	}
};
