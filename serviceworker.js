var CACHE_NAME= 'version-2'
var urlsToCache = ['/clock_pwa', '/clock_pwa/index.html', '/clock_pwa/styles.css', '/clock_pwa/favicon.ico'];
self.addEventListener('install',(event)=>{
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache)=>{
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
})

self.addEventListener('fetch',function (event) {
    event.respondWith(
        caches.match(event.request).then((response)=>{
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
        )
})

self.addEventListener('activate',function (event) {
    var cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);
    event.waitUntil(
        caches.keys().then((cacheNames)=>
        Promise.all(cacheNames.map((cacheName)=>{
           if(cacheWhitelist.indexOf(cacheName) === -1)
            return caches.delete(cacheName);
        }))
        )
    )
    })