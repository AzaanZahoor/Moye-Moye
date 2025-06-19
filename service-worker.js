const CACHE="intro-sound-v1";
const FILES=["./","index.html","manifest.json","intro.mp3","icon-192.png","icon-512.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
