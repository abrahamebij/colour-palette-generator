self.addEventListener("install", (e) => {
	e.waitUntil(
		caches
			.open("fox-store")
			.then((cache) =>
				cache.addAll([
					"index.html",
					"assets/scripts.js",
					"assets/styles.css",
					"assets/hint.css",
					"assets/overview.png",
					"assets/favicon/favicon.ico",
					"assets/favicon/favicon-16x16.png",
					"assets/favicon/favicon-32x32.png",
					"assets/favicon/apple-touch-icon.png",
					"assets/favicon/android-chrome-192x192.png",
					"assets/favicon/android-chrome-512x512.png",
				])
			)
	);
});

self.addEventListener("fetch", (e) => {
	console.log(e.request.url);
	e.respondWith(
		caches.match(e.request).then((response) => response || fetch(e.request))
	);
});
