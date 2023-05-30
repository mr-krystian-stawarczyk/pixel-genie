const cacheName = "v1";
const maxCacheSize = 5 * 1024 * 1024; // 5MB

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(cacheName).then((cache) => {
			return cache.addAll([]);
		})
	);
});
