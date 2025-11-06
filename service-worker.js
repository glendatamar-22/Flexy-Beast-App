const CACHE_NAME = 'flexy-beast-v1';
const urlsToCache = [
    './',
    './index.html',
    './styles.css',
    './app.js',
    './manifest.json'
];

// Install service worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                // Cache all files, but don't fail if some fail
                return Promise.allSettled(
                    urlsToCache.map(url => 
                        cache.add(url).catch(err => {
                            console.log(`Failed to cache ${url}:`, err);
                        })
                    )
                );
            })
            .then(() => {
                // Skip waiting to activate immediately
                return self.skipWaiting();
            })
    );
});

// Activate event - clean up old caches and claim clients
self.addEventListener('activate', event => {
    event.waitUntil(
        Promise.all([
            // Clean up old caches
            caches.keys().then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheName !== CACHE_NAME) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            }),
            // Claim all clients immediately
            self.clients.claim()
        ])
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
    // Only handle GET requests
    if (event.request.method !== 'GET') {
        return;
    }
    
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return cached version or fetch from network
                if (response) {
                    return response;
                }
                
                return fetch(event.request).then(fetchResponse => {
                    // Don't cache external resources or non-successful responses
                    if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
                        return fetchResponse;
                    }
                    
                    // Clone the response
                    const responseToCache = fetchResponse.clone();
                    
                    // Cache successful responses
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, responseToCache);
                    });
                    
                    return fetchResponse;
                }).catch(() => {
                    // If fetch fails and we're offline, return a basic offline page
                    if (event.request.destination === 'document') {
                        return caches.match('./index.html');
                    }
                });
            })
    );
});

