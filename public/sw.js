<<<<<<< HEAD
if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,t,a)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const i={uri:location.origin+s.slice(1)};return Promise.all(t.map((s=>{switch(s){case"exports":return n;case"module":return i;default:return e(s)}}))).then((e=>{const s=a(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/2kOUPqe1UoSf5QyLxoE8s/_buildManifest.js",revision:"2kOUPqe1UoSf5QyLxoE8s"},{url:"/_next/static/2kOUPqe1UoSf5QyLxoE8s/_ssgManifest.js",revision:"2kOUPqe1UoSf5QyLxoE8s"},{url:"/_next/static/chunks/framework-895f067827ebe11ffe45.js",revision:"2kOUPqe1UoSf5QyLxoE8s"},{url:"/_next/static/chunks/main-62a3e12e79ce59795999.js",revision:"2kOUPqe1UoSf5QyLxoE8s"},{url:"/_next/static/chunks/pages/_app-8c764b55256f481f1a7e.js",revision:"2kOUPqe1UoSf5QyLxoE8s"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"2kOUPqe1UoSf5QyLxoE8s"},{url:"/_next/static/chunks/pages/conocenos-8a4c7bb5e26379b5f4fc.js",revision:"2kOUPqe1UoSf5QyLxoE8s"},{url:"/_next/static/chunks/pages/horarios-66d31e462494f87cbf2e.js",revision:"2kOUPqe1UoSf5QyLxoE8s"},{url:"/_next/static/chunks/pages/index-06b9a776c7f5aa4f1d75.js",revision:"2kOUPqe1UoSf5QyLxoE8s"},{url:"/_next/static/chunks/pages/productos-0bb60eca696eda13beb6.js",revision:"2kOUPqe1UoSf5QyLxoE8s"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"2kOUPqe1UoSf5QyLxoE8s"},{url:"/_next/static/chunks/webpack-1a8a258926ecde76681b.js",revision:"2kOUPqe1UoSf5QyLxoE8s"},{url:"/_next/static/css/fb5daa173286dbc30a91.css",revision:"2kOUPqe1UoSf5QyLxoE8s"},{url:"/_next/static/image/src/assets/images/logo_bar.70a5ce6fadb43c823698e1826286d5b6.png",revision:"2kOUPqe1UoSf5QyLxoE8s"},{url:"/_next/static/image/src/assets/images/pageUnder.e1d0e154d880056816abb4d6ee8fd79d.png",revision:"2kOUPqe1UoSf5QyLxoE8s"},{url:"/icons/android-chrome-192x192.png",revision:"d00628c627dedebd64c69217804d9cc2"},{url:"/icons/apple-touch-icon.png",revision:"64b2367d3fa73d908c620b17f25807eb"},{url:"/icons/favicon.ico",revision:"e77f1427d9cb56da40a44557e1dec4c8"},{url:"/icons/icon-512x512.png",revision:"5f9c331b86db9f0fd1787726b72d45de"},{url:"/manifest.json",revision:"bd8b5de7d296c1925e25f82c6fd8665c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
=======
if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,i,a)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return n;case"module":return c;default:return e(s)}}))).then((e=>{const s=a(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/framework-895f067827ebe11ffe45.js",revision:"i_Dea2DZ_swAPxgrEGlwc"},{url:"/_next/static/chunks/main-62a3e12e79ce59795999.js",revision:"i_Dea2DZ_swAPxgrEGlwc"},{url:"/_next/static/chunks/pages/_app-8c764b55256f481f1a7e.js",revision:"i_Dea2DZ_swAPxgrEGlwc"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"i_Dea2DZ_swAPxgrEGlwc"},{url:"/_next/static/chunks/pages/conocenos-939b032e7942df28bf3e.js",revision:"i_Dea2DZ_swAPxgrEGlwc"},{url:"/_next/static/chunks/pages/horarios-ec1610e4f1b15eed60cf.js",revision:"i_Dea2DZ_swAPxgrEGlwc"},{url:"/_next/static/chunks/pages/index-9c217b902067f8f13683.js",revision:"i_Dea2DZ_swAPxgrEGlwc"},{url:"/_next/static/chunks/pages/productos-91941c2ea9c5c0d055da.js",revision:"i_Dea2DZ_swAPxgrEGlwc"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"i_Dea2DZ_swAPxgrEGlwc"},{url:"/_next/static/chunks/webpack-1a8a258926ecde76681b.js",revision:"i_Dea2DZ_swAPxgrEGlwc"},{url:"/_next/static/css/fb5daa173286dbc30a91.css",revision:"i_Dea2DZ_swAPxgrEGlwc"},{url:"/_next/static/i_Dea2DZ_swAPxgrEGlwc/_buildManifest.js",revision:"i_Dea2DZ_swAPxgrEGlwc"},{url:"/_next/static/i_Dea2DZ_swAPxgrEGlwc/_ssgManifest.js",revision:"i_Dea2DZ_swAPxgrEGlwc"},{url:"/_next/static/image/src/assets/images/logo_bar.70a5ce6fadb43c823698e1826286d5b6.png",revision:"i_Dea2DZ_swAPxgrEGlwc"},{url:"/icons/android-chrome-192x192.png",revision:"d00628c627dedebd64c69217804d9cc2"},{url:"/icons/apple-touch-icon.png",revision:"64b2367d3fa73d908c620b17f25807eb"},{url:"/icons/favicon-16x16.png:Zone.Identifier",revision:"9a426f1c255f178766e0c23f51cbbd23"},{url:"/icons/favicon.ico",revision:"e77f1427d9cb56da40a44557e1dec4c8"},{url:"/icons/favicon.ico:Zone.Identifier",revision:"9a426f1c255f178766e0c23f51cbbd23"},{url:"/icons/icon-512x512.png",revision:"5f9c331b86db9f0fd1787726b72d45de"},{url:"/manifest.json",revision:"bd8b5de7d296c1925e25f82c6fd8665c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
>>>>>>> develop
