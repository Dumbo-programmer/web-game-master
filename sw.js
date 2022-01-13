const cacheName = 'v1'; 

const cacheAssets = [
    'index.html',
    'credits.html',
    'profile.html'
]

self.addEventListener('install', e => {
    // Perform install steps
    console.log('service worker installed')
 
e.waitUntil(
    caches
    .open(cacheName)
    .then(cache => {
         console.log('Caching')
         cache.addAll(cacheAssets)
     })
     .then(() => self.skipWaiting())
 );

});
  
  self.addEventListener('activate', e => {
    // Perform install steps
    
    console.log('service worker activated')
  });
  