if (!self.define) {
    let e,
        s = {};
    const n = (n, a) => (
        (n = new URL(n + '.js', a).href),
        s[n] ||
            new Promise((s) => {
                if ('document' in self) {
                    const e = document.createElement('script');
                    (e.src = n), (e.onload = s), document.head.appendChild(e);
                } else (e = n), importScripts(n), s();
            }).then(() => {
                let e = s[n];
                if (!e) throw new Error(`Module ${n} didn’t register its module`);
                return e;
            })
    );
    self.define = (a, i) => {
        const t = e || ('document' in self ? document.currentScript.src : '') || location.href;
        if (s[t]) return;
        let r = {};
        const c = (e) => n(e, t),
            o = { module: { uri: t }, exports: r, require: c };
        s[t] = Promise.all(a.map((e) => o[e] || c(e))).then((e) => (i(...e), r));
    };
}
define(['./workbox-5f5b08d6'], function (e) {
    'use strict';
    importScripts('fallback-fny6iZ905IO4M_AKt_N1E.js'),
        self.skipWaiting(),
        e.clientsClaim(),
        e.precacheAndRoute(
            [
                { url: '/_next/static/chunks/800-268522f869a41d0c.js', revision: '268522f869a41d0c' },
                { url: '/_next/static/chunks/933-207784ac69937a95.js', revision: '207784ac69937a95' },
                { url: '/_next/static/chunks/framework-a87821de553db91d.js', revision: 'a87821de553db91d' },
                { url: '/_next/static/chunks/main-5035a05945ec0e6e.js', revision: '5035a05945ec0e6e' },
                { url: '/_next/static/chunks/pages/_app-af2fa881acf0f487.js', revision: 'af2fa881acf0f487' },
                { url: '/_next/static/chunks/pages/_error-0a004b8b8498208d.js', revision: '0a004b8b8498208d' },
                { url: '/_next/static/chunks/pages/_offline-1dedd51caffb2f76.js', revision: '1dedd51caffb2f76' },
                { url: '/_next/static/chunks/pages/about-460a57c8ecec5609.js', revision: '460a57c8ecec5609' },
                { url: '/_next/static/chunks/pages/index-932505bbb1a3358b.js', revision: '932505bbb1a3358b' },
                { url: '/_next/static/chunks/pages/users-61e21c99935516a0.js', revision: '61e21c99935516a0' },
                {
                    url: '/_next/static/chunks/pages/users/%5Busername%5D/%5Bemail%5D/%5Bid%5D-984b0af64b3270f9.js',
                    revision: '984b0af64b3270f9',
                },
                {
                    url: '/_next/static/chunks/polyfills-5cd94c89d3acac5f.js',
                    revision: '99442aec5788bccac9b2f0ead2afdd6b',
                },
                { url: '/_next/static/chunks/webpack-9b312e20a4e32339.js', revision: '9b312e20a4e32339' },
                { url: '/_next/static/css/4cbaf67281a7967d.css', revision: '4cbaf67281a7967d' },
                {
                    url: '/_next/static/fny6iZ905IO4M_AKt_N1E/_buildManifest.js',
                    revision: '5bbecbd53df7b070e8063a05dd39531e',
                },
                {
                    url: '/_next/static/fny6iZ905IO4M_AKt_N1E/_middlewareManifest.js',
                    revision: 'fb2823d66b3e778e04a3f681d0d2fb19',
                },
                {
                    url: '/_next/static/fny6iZ905IO4M_AKt_N1E/_ssgManifest.js',
                    revision: 'b6652df95db52feb4daf4eca35380933',
                },
                { url: '/_next/static/media/Inter-Bold.579e0f95.woff2', revision: '579e0f95' },
                { url: '/_next/static/media/Inter-Bold.b1234477.woff', revision: 'b1234477' },
                { url: '/_next/static/media/Inter-Light.27083fa6.woff2', revision: '27083fa6' },
                { url: '/_next/static/media/Inter-Light.91dfddd8.woff', revision: '91dfddd8' },
                { url: '/_next/static/media/Inter-Medium.dc792b50.woff2', revision: 'dc792b50' },
                { url: '/_next/static/media/Inter-Medium.ec7dd2d9.woff', revision: 'ec7dd2d9' },
                { url: '/_next/static/media/Inter-Regular.f1f0c35b.woff2', revision: 'f1f0c35b' },
                { url: '/_next/static/media/Inter-Regular.f356e84a.woff', revision: 'f356e84a' },
                { url: '/_next/static/media/Inter-SemiBold.55027e47.woff', revision: '55027e47' },
                { url: '/_next/static/media/Inter-SemiBold.fcb100c7.woff2', revision: 'fcb100c7' },
                { url: '/_next/static/media/primeicons.29151a74.woff', revision: '29151a74' },
                { url: '/_next/static/media/primeicons.5f5d08cd.ttf', revision: '5f5d08cd' },
                { url: '/_next/static/media/primeicons.76044b1c.svg', revision: '76044b1c' },
                { url: '/_next/static/media/primeicons.964f445f.eot', revision: '964f445f' },
                { url: '/_offline', revision: 'fny6iZ905IO4M_AKt_N1E' },
                { url: '/favicon.ico', revision: '71ea79a99fefea46dfd93509f43adc88' },
                { url: '/logo512.png', revision: '2b609ad9bf85f359f2b4a0a75f0ecd91' },
                { url: '/manifest.json', revision: 'f5717077cab9c1985476527eab894568' },
                { url: '/maskableLogo512.png', revision: '2b609ad9bf85f359f2b4a0a75f0ecd91' },
            ],
            { ignoreURLParametersMatching: [] }
        ),
        e.cleanupOutdatedCaches(),
        e.registerRoute(
            '/',
            new e.NetworkFirst({
                cacheName: 'start-url',
                plugins: [
                    {
                        cacheWillUpdate: async ({ request: e, response: s, event: n, state: a }) =>
                            s && 'opaqueredirect' === s.type
                                ? new Response(s.body, { status: 200, statusText: 'OK', headers: s.headers })
                                : s,
                    },
                    { handlerDidError: async ({ request: e }) => self.fallback(e) },
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
            new e.CacheFirst({
                cacheName: 'google-fonts-webfonts',
                plugins: [
                    new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
                    { handlerDidError: async ({ request: e }) => self.fallback(e) },
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
            new e.StaleWhileRevalidate({
                cacheName: 'google-fonts-stylesheets',
                plugins: [
                    new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
                    { handlerDidError: async ({ request: e }) => self.fallback(e) },
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-font-assets',
                plugins: [
                    new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
                    { handlerDidError: async ({ request: e }) => self.fallback(e) },
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-image-assets',
                plugins: [
                    new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
                    { handlerDidError: async ({ request: e }) => self.fallback(e) },
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            /\/_next\/image\?url=.+$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'next-image',
                plugins: [
                    new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
                    { handlerDidError: async ({ request: e }) => self.fallback(e) },
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:mp3|wav|ogg)$/i,
            new e.CacheFirst({
                cacheName: 'static-audio-assets',
                plugins: [
                    new e.RangeRequestsPlugin(),
                    new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
                    { handlerDidError: async ({ request: e }) => self.fallback(e) },
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:mp4)$/i,
            new e.CacheFirst({
                cacheName: 'static-video-assets',
                plugins: [
                    new e.RangeRequestsPlugin(),
                    new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
                    { handlerDidError: async ({ request: e }) => self.fallback(e) },
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:js)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-js-assets',
                plugins: [
                    new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
                    { handlerDidError: async ({ request: e }) => self.fallback(e) },
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:css|less)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-style-assets',
                plugins: [
                    new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
                    { handlerDidError: async ({ request: e }) => self.fallback(e) },
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            /\/_next\/data\/.+\/.+\.json$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'next-data',
                plugins: [
                    new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
                    { handlerDidError: async ({ request: e }) => self.fallback(e) },
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:json|xml|csv)$/i,
            new e.NetworkFirst({
                cacheName: 'static-data-assets',
                plugins: [
                    new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
                    { handlerDidError: async ({ request: e }) => self.fallback(e) },
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            ({ url: e }) => {
                if (!(self.origin === e.origin)) return !1;
                const s = e.pathname;
                return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
            },
            new e.NetworkFirst({
                cacheName: 'apis',
                networkTimeoutSeconds: 10,
                plugins: [
                    new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
                    { handlerDidError: async ({ request: e }) => self.fallback(e) },
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            ({ url: e }) => {
                if (!(self.origin === e.origin)) return !1;
                return !e.pathname.startsWith('/api/');
            },
            new e.NetworkFirst({
                cacheName: 'others',
                networkTimeoutSeconds: 10,
                plugins: [
                    new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
                    { handlerDidError: async ({ request: e }) => self.fallback(e) },
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            ({ url: e }) => !(self.origin === e.origin),
            new e.NetworkFirst({
                cacheName: 'cross-origin',
                networkTimeoutSeconds: 10,
                plugins: [
                    new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
                    { handlerDidError: async ({ request: e }) => self.fallback(e) },
                ],
            }),
            'GET'
        );
});
