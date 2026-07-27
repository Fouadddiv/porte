const CACHE_NAME = 'fouad-portfolio-v4';
const ASSETS_TO_CACHE = [
  './index.html',
  './style.css',
  './js.js',
  './manifest.json',
  './offline.html',
  './logo.jpg',
  './background.jpg',
  './hom.jpg',
  './service.jpg',
  './project.jpg',
  './contact.jpg',
  './html.jpg',
  './css.jpg',
  './js.jpg',
  './python.jpg',
  './Remote education.jpg',
  './sportPractees.jpg',
  './stor.jpg',
  './legend_rasing.jpg',
  './pythonPro.jpg',
  './jspro.jpg',
  './cours.jpg',
  './calculatrees.jpg',
  './BMI.jpg',
  './X_O.jpg',
  './my chanel.jpg',
  './Facebook.jpg',
  './instagram.jpg',
  './Github.jpg',
  './discord.jpg',
  './Phone.jpg',
  './Email.jpg',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png'
];

// تثبيت Service Worker وتخزين الملفات في الكاش
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

// تفعيل Service Worker وحذف الكاش القديم
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// جلب الموارد مع استراتيجية Cache First ثم Network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request)
          .then((networkResponse) => {
            // تخزين النسخة الجديدة في الكاش
            if (event.request.method === 'GET') {
              const responseClone = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseClone);
              });
            }
            return networkResponse;
          })
          .catch(() => {
            // إذا فشل الجلب، عرض صفحة أوفلاين للصفحات فقط
            if (event.request.destination === 'document') {
              return caches.match('./offline.html');
            }
          });
      })
  );
});
