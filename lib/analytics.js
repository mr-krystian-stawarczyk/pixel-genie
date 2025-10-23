// /lib/analytics.js
// ✅ Zgodne z lazy-init GA w /pages/_app.js (po 3s), z buforem eventów i mierzeniem czasu spędzonego na stronie.
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

// 🔹 Flush pending GA events when GA becomes available
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

// ✅ Pomiar czasu spędzonego na stronie (lightweight, async, bez wpływu na performance)
if (typeof window !== "undefined") {
	let startTime = Date.now();
	let sent = false;

	const sendTimeOnPage = () => {
		if (sent) return;
		sent = true;
		const durationSec = Math.round((Date.now() - startTime) / 1000);
		// wysyłamy tylko jeśli użytkownik był min. 5 sekund
		if (durationSec >= 5) {
			_trySend("time_on_page", {
				value: durationSec,
				page: window.location.pathname,
			});
		}
	};

	// wysyłaj event tylko raz, przy opuszczeniu strony lub zmianie widoczności
	window.addEventListener("beforeunload", sendTimeOnPage);
	document.addEventListener("visibilitychange", () => {
		if (document.visibilityState === "hidden") sendTimeOnPage();
	});
}
