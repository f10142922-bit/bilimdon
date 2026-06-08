const CACHE_NAME = 'bilimdon-v6'; // Versiya yangilandi
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './manifest.json'
];

// O'rnatish va fayllarni keshga saqlash
self.addEventListener('install', (e) => {
    self.skipWaiting(); // Yangi versiya kelishi bilan kutib turmasdan o'rnatish
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
});

// Eskirgan keshni tozalash
self.addEventListener('activate', (event) => {
    event.waitUntil(
        clients.claim(), // Darhol boshqaruvni qo'lga olish
        caches.keys().then((keys) => Promise.all(
            keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
        ))
    );
});

// Tarmoqsiz rejimda ishlashni ta'minlash
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((res) => res || fetch(e.request))
    );
});