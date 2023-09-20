const filesToCache = [
	"us1.bin",
	"us2.bin",
	"Emulatrix.css",
	"Emulatrix.htm",
	"Emulatrix_SegaGenesis.htm",
	"Emulatrix_SegaGenesis.js",
	"Emulatrix_SegaGenesis.wasm",
	"index.html"
];

const staticCacheName = "segacdbiosweb";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});