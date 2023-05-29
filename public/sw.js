const cacheName = "v1";
const maxCacheSize = 5 * 1024 * 1024; // 5MB

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(cacheName).then((cache) => {
			return cache.addAll([
				"/_next/server/pages/_app.js",
				"/_next/static/chunks/main.js",
				"/_next/static/chunks/components_Footer_jsx.js",
				"/_next/static/chunks/components_ContactForm_js.js",
				"/_next/static/chunks/pages/about.js",
			]);
		})
	);
});

self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches.open(cacheName).then((cache) => {
			return cache.match(event.request).then((response) => {
				return (
					response ||
					fetch(event.request).then((fetchResponse) => {
						if (fetchResponse && fetchResponse.ok) {
							cache.put(event.request, fetchResponse.clone());
							// Limit cache size
							limitCacheSize(cacheName, maxCacheSize);
						}
						return fetchResponse;
					})
				);
			});
		})
	);
});

// Function to limit cache size
function limitCacheSize(cacheName, maxSize) {
	caches.open(cacheName).then((cache) => {
		cache.keys().then((keys) => {
			if (keys.length > 0) {
				cache.delete(keys[0]).then(() => {
					limitCacheSize(cacheName, maxSize);
				});
			}
		});
	});
}
