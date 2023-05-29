const cacheName = "v1";
const maxCacheSize = 5 * 1024 * 1024; // 5MB

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(cacheName).then((cache) => {
			return cache.addAll([
				"/_next/server/pages/_app.js",
				"/_next/static/chunks/main.js",
			]);
		})
	);
});
