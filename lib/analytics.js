export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID;

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
		debug_mode: true, // ✅ Widoczne natychmiast w DebugView
	});

	window.gtagInitialized = true;
	console.log("✅ GA initialized:", GA_ID);
};

export const gaPageview = (url) => {
	if (!window.gtagInitialized) return;
	window.gtag("config", GA_ID, {
		page_path: url,
		debug_mode: true, // ✅ debug continue
	});
	console.log("📄 Pageview sent:", url);
};
