"use strict";var precacheConfig=[["/my-portfolio/index.html","932ebbc46d9d510d2910fcecde44b11a"],["/my-portfolio/static/css/main.9bc1832f.css","f21a12c45285f14583da1a42b2dbba38"],["/my-portfolio/static/js/main.5f93dd05.js","79f87948f712b990d0234539d4815b28"],["/my-portfolio/static/media/ProfilePic.645f6e61.JPG","645f6e61bce235c541d4763b73554255"],["/my-portfolio/static/media/ResumeSample.aed2a57a.xps","aed2a57aa549270dc6498bcc0dee348f"],["/my-portfolio/static/media/github.1dca1c61.png","1dca1c61aa6304d86cbf0995e58a27d8"],["/my-portfolio/static/media/portfolioBackground.24e62cb4.png","24e62cb4e9715d149e184773c54e8520"],["/my-portfolio/static/media/resume.e4e51acf.png","e4e51acf56757c3c7a6f3608c4db3248"],["/my-portfolio/static/media/video-1.26c7d5e3.webm","26c7d5e3bde6eac9f936e6a07434fdc7"],["/my-portfolio/static/media/video-2.5168be66.webm","5168be6667b0d0da55f62426c21edb5a"],["/my-portfolio/static/media/video-3.342d6d09.webm","342d6d096677141c20c3c39b1e999a43"],["/my-portfolio/static/media/video-4.c49c26cf.webm","c49c26cfb3b2f501fb1811b5519313ad"],["/my-portfolio/static/media/video-5.d1109356.webm","d1109356207479077af31319c558343b"],["/my-portfolio/static/media/video-6.07ae7fe5.webm","07ae7fe5c5c70301fbba0dd40a8d656c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,/\.\w{8}\./);return[r.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,r),e=urlsToCacheKeys.has(n));var a="/my-portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(a,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});