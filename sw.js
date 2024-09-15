// Nombre del caché
const CACHE_NAME = 'pwa-cache-v1';

// Archivos a cachear para que la PWA funcione offline
const urlsToCache = [
  '/',
  '/app.js',
  'exterior.png',
  'icon.png',
  '/index.html',
  '/app.js',
  '/main_page.css',
  '/manifest.json',
  'sw.js'
  // Agrega otros archivos necesarios aquí
];

// Evento de instalación del Service Worker
self.addEventListener('install', (event) => {
  // Pre-cachear los archivos importantes
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Archivos cacheados correctamente');
        return cache.addAll(urlsToCache);
      })
  );
});

// Evento de activación del Service Worker
self.addEventListener('activate', (event) => {
  // Borrar cachés antiguas si se actualiza el caché
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Cache antiguo eliminado:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Evento de fetch (interceptar peticiones)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Si el recurso está en la caché, devolverlo
        if (response) {
          return response;
        }

        // Si no está en la caché, hacer la petición y cachearla
        return fetch(event.request)
          .then((response) => {
            // Si no se puede cachear la respuesta, devolverla directamente
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Cachear la nueva respuesta
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          });
      })
  );
});
