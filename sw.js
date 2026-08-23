const CACHE_NAME = "psychiatrist-v1";
const urlsToCache = [
  "/Psychiatrist/",
  "/Psychiatrist/index.html",
  "/Psychiatrist/icon-192.png",
  "/Psychiatrist/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
