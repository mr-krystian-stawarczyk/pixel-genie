// /lib/analytics.js
// ✅ Zgodne z lazy-init GA w /pages/_app.js (po 3s), z buforem eventów.
const MAX_RETRIES = 12;
const RETRY_DELAY = 500;

function _trySend(action, params, attempt = 0) {
	if (typeof window !== "undefined" && typeof window.gtag === "function") {
		window.gtag("event", action, params || {});
		return;
	}
	if (attempt >= MAX_RETRIES) {
		window.__pendingGa = window.__pendingGa || [];
		window.__pendingGa.push({ action, params });
		return;
	}
	setTimeout(() => _trySend(action, params, attempt + 1), RETRY_DELAY);
}

export function gaEvent(action, params = {}) {
	_trySend(action, params);
}

export function gaPageview(url) {
	const id = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID;
	if (
		typeof window !== "undefined" &&
		typeof window.gtag === "function" &&
		id
	) {
		window.gtag("config", id, { page_path: url });
		return;
	}
	gaEvent("page_view", { page_path: url });
}

if (typeof window !== "undefined") {
	const flush = () => {
		if (typeof window.gtag !== "function" || !Array.isArray(window.__pendingGa))
			return;
		while (window.__pendingGa.length) {
			const { action, params } = window.__pendingGa.shift();
			window.gtag("event", action, params || {});
		}
	};
	const int = setInterval(() => {
		if (typeof window.gtag === "function") {
			clearInterval(int);
			flush();
		}
	}, 1000);
}
