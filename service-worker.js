
self.addEventListener('install', event => {
  console.log('✅ Service Worker מותקן');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('✅ Service Worker הופעל');
});

self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
