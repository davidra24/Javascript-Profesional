const VERSION_CACHE = 'version1';

self.addEventListener('install', (event) => {
  event.waitUntil(precache());
});

/**
 * @fetch -> Cuando se realiza una petición fetch
 */
self.addEventListener('fetch', (event) => {
  const { request } = event;
  //Sólo con get
  if (request.method !== 'GET') {
    return;
  }

  //Buscar en caché
  event.respondWith(cachedResponse(request));

  //Actualizar el caché
  event.waitUntil(updateCache(request));
});

async function cachedResponse(request) {
  const cache = await caches.open(VERSION_CACHE);
  const response = await cache.match(request);
  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open(VERSION_CACHE);
  const response = await fetch(request);
  return cache.put(request, response);
}

async function precache() {
  const cache = await caches.open(VERSION_CACHE);
  return cache.addAll([
    '/',
    '/index.html',
    '/js/index.js',
    '/js/media/MediaPlayer.js',
    '/js/plugins/AutoPlay.js',
    '/js/plugins/AutoPause.js',
    '/styles/index.css',
    '/assets/video/BigBuckBunny.mp4',
  ]);
}
