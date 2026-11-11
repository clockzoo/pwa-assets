const CACHE_NAME = 'clockzoo-cache-v1';
const urlsToCache = [
  '/',
  '/?utm_source=pwa&utm_medium=app'
];

// Install event - caching basic files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});