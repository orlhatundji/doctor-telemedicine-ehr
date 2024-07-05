(()=>{"use strict";var e={295:()=>{try{self["workbox:core:6.6.0"]&&_()}catch(e){}},229:()=>{try{self["workbox:expiration:6.6.0"]&&_()}catch(e){}},740:()=>{try{self["workbox:precaching:6.6.0"]&&_()}catch(e){}},130:()=>{try{self["workbox:routing:6.6.0"]&&_()}catch(e){}},205:()=>{try{self["workbox:strategies:6.6.0"]&&_()}catch(e){}}},t={};function s(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,s),r.exports}s(295);const n=function(e){let t=e;for(var s=arguments.length,n=new Array(s>1?s-1:0),a=1;a<s;a++)n[a-1]=arguments[a];return n.length>0&&(t+=" :: ".concat(JSON.stringify(n))),t};class a extends Error{constructor(e,t){super(n(e,t)),this.name=e,this.details=t}}const r=new Set;const i={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!==typeof registration?registration.scope:""},o=e=>[i.prefix,e,i.suffix].filter((e=>e&&e.length>0)).join("-"),c=e=>e||o(i.precache),h=e=>e||o(i.runtime);function l(e,t){const s=new URL(e);for(const n of t)s.searchParams.delete(n);return s.href}let u;function d(e){e.then((()=>{}))}class f{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const p=e=>new URL(String(e),location.href).href.replace(new RegExp("^".concat(location.origin)),"");function g(e){return new Promise((t=>setTimeout(t,e)))}function w(e,t){const s=t();return e.waitUntil(s),s}async function m(e,t){let s=null;if(e.url){s=new URL(e.url).origin}if(s!==self.location.origin)throw new a("cross-origin-copy-response",{origin:s});const n=e.clone(),r={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},i=t?t(r):r,o=function(){if(void 0===u){const t=new Response("");if("body"in t)try{new Response(t.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(o,i)}const y=(e,t)=>t.some((t=>e instanceof t));let v,b;const R=new WeakMap,x=new WeakMap,C=new WeakMap,L=new WeakMap,E=new WeakMap;let q={get(e,t,s){if(e instanceof IDBTransaction){if("done"===t)return x.get(e);if("objectStoreNames"===t)return e.objectStoreNames||C.get(e);if("store"===t)return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return T(e[t])},set:(e,t,s)=>(e[t]=s,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function D(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(b||(b=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,s=new Array(t),n=0;n<t;n++)s[n]=arguments[n];return e.apply(k(this),s),T(R.get(this))}:function(){for(var t=arguments.length,s=new Array(t),n=0;n<t;n++)s[n]=arguments[n];return T(e.apply(k(this),s))}:function(t){for(var s=arguments.length,n=new Array(s>1?s-1:0),a=1;a<s;a++)n[a-1]=arguments[a];const r=e.call(k(this),t,...n);return C.set(r,t.sort?t.sort():[t]),T(r)}}function U(e){return"function"===typeof e?D(e):(e instanceof IDBTransaction&&function(e){if(x.has(e))return;const t=new Promise(((t,s)=>{const n=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",r),e.removeEventListener("abort",r)},a=()=>{t(),n()},r=()=>{s(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",a),e.addEventListener("error",r),e.addEventListener("abort",r)}));x.set(e,t)}(e),y(e,v||(v=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,q):e)}function T(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,s)=>{const n=()=>{e.removeEventListener("success",a),e.removeEventListener("error",r)},a=()=>{t(T(e.result)),n()},r=()=>{s(e.error),n()};e.addEventListener("success",a),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&R.set(t,e)})).catch((()=>{})),E.set(t,e),t}(e);if(L.has(e))return L.get(e);const t=U(e);return t!==e&&(L.set(e,t),E.set(t,e)),t}const k=e=>E.get(e);const N=["get","getKey","getAll","getAllKeys","count"],I=["put","add","delete","clear"],K=new Map;function M(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(K.get(t))return K.get(t);const s=t.replace(/FromIndex$/,""),n=t!==s,a=I.includes(s);if(!(s in(n?IDBIndex:IDBObjectStore).prototype)||!a&&!N.includes(s))return;const r=async function(e){const t=this.transaction(e,a?"readwrite":"readonly");let r=t.store;for(var i=arguments.length,o=new Array(i>1?i-1:0),c=1;c<i;c++)o[c-1]=arguments[c];return n&&(r=r.index(o.shift())),(await Promise.all([r[s](...o),a&&t.done]))[0]};return K.set(t,r),r}q=(e=>({...e,get:(t,s,n)=>M(t,s)||e.get(t,s,n),has:(t,s)=>!!M(t,s)||e.has(t,s)}))(q);s(229);const A="cache-entries",P=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class S{constructor(e){this._db=null,this._cacheName=e}_upgradeDb(e){const t=e.createObjectStore(A,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1})}_upgradeDbAndDeleteOldDbs(e){this._upgradeDb(e),this._cacheName&&function(e){let{blocked:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const s=indexedDB.deleteDatabase(e);t&&s.addEventListener("blocked",(e=>t(e.oldVersion,e))),T(s).then((()=>{}))}(this._cacheName)}async setTimestamp(e,t){const s={url:e=P(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)},n=(await this.getDb()).transaction(A,"readwrite",{durability:"relaxed"});await n.store.put(s),await n.done}async getTimestamp(e){const t=await this.getDb(),s=await t.get(A,this._getId(e));return null===s||void 0===s?void 0:s.timestamp}async expireEntries(e,t){const s=await this.getDb();let n=await s.transaction(A).store.index("timestamp").openCursor(null,"prev");const a=[];let r=0;for(;n;){const s=n.value;s.cacheName===this._cacheName&&(e&&s.timestamp<e||t&&r>=t?a.push(n.value):r++),n=await n.continue()}const i=[];for(const o of a)await s.delete(A,o.id),i.push(o.url);return i}_getId(e){return this._cacheName+"|"+P(e)}async getDb(){return this._db||(this._db=await function(e,t){let{blocked:s,upgrade:n,blocking:a,terminated:r}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const i=indexedDB.open(e,t),o=T(i);return n&&i.addEventListener("upgradeneeded",(e=>{n(T(i.result),e.oldVersion,e.newVersion,T(i.transaction),e)})),s&&i.addEventListener("blocked",(e=>s(e.oldVersion,e.newVersion,e))),o.then((e=>{r&&e.addEventListener("close",(()=>r())),a&&e.addEventListener("versionchange",(e=>a(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),o}("workbox-expiration",1,{upgrade:this._upgradeDbAndDeleteOldDbs.bind(this)})),this._db}}class O{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new S(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),s=await self.caches.open(this._cacheName);for(const n of t)await s.delete(n,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,d(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){const t=await this._timestampModel.getTimestamp(e),s=Date.now()-1e3*this._maxAgeSeconds;return void 0===t||t<s}return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}s(740);function W(e){if(!e)throw new a("add-to-cache-list-unexpected-type",{entry:e});if("string"===typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new a("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(s,location.href),r=new URL(s,location.href);return n.searchParams.set("__WB_REVISION__",t),{cacheKey:n.href,url:r.href}}class B{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async e=>{let{request:t,state:s}=e;s&&(s.originalRequest=t)},this.cachedResponseWillBeUsed=async e=>{let{event:t,state:s,cachedResponse:n}=e;if("install"===t.type&&s&&s.originalRequest&&s.originalRequest instanceof Request){const e=s.originalRequest.url;n?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return n}}}class j{constructor(e){let{precacheController:t}=e;this.cacheKeyWillBeUsed=async e=>{let{request:t,params:s}=e;const n=(null===s||void 0===s?void 0:s.cacheKey)||this._precacheController.getCacheKeyForURL(t.url);return n?new Request(n,{headers:t.headers}):t},this._precacheController=t}}s(205);function F(e){return"string"===typeof e?new Request(e):e}class H{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new f,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const s of this._plugins)this._pluginStateMap.set(s,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let s=F(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(i){if(i instanceof Error)throw new a("plugin-error-request-will-fetch",{thrownErrorMessage:i.message})}const r=s.clone();try{let e;e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))e=await s({event:t,request:r,response:e});return e}catch(o){throw n&&await this.runCallbacks("fetchDidFail",{error:o,event:t,originalRequest:n.clone(),request:r.clone()}),o}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=F(e);let s;const{cacheName:n,matchOptions:a}=this._strategy,r=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},a),{cacheName:n});s=await caches.match(r,i);for(const o of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await o({cacheName:n,matchOptions:a,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(e,t){const s=F(e);await g(0);const n=await this.getCacheKey(s,"write");if(!t)throw new a("cache-put-with-no-response",{url:p(n.url)});const i=await this._ensureResponseSafeToCache(t);if(!i)return!1;const{cacheName:o,matchOptions:c}=this._strategy,h=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),d=u?await async function(e,t,s,n){const a=l(t.url,s);if(t.url===a)return e.match(t,n);const r=Object.assign(Object.assign({},n),{ignoreSearch:!0}),i=await e.keys(t,r);for(const o of i)if(a===l(o.url,s))return e.match(o,n)}(h,n.clone(),["__WB_REVISION__"],c):null;try{await h.put(n,u?i.clone():i)}catch(f){if(f instanceof Error)throw"QuotaExceededError"===f.name&&await async function(){for(const e of r)await e()}(),f}for(const a of this.iterateCallbacks("cacheDidUpdate"))await a({cacheName:o,oldResponse:d,newResponse:i.clone(),request:n,event:this.event});return!0}async getCacheKey(e,t){const s="".concat(e.url," | ").concat(t);if(!this._cacheKeys[s]){let n=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))n=F(await e({mode:t,request:n,event:this.event,params:this.params}));this._cacheKeys[s]=n}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"===typeof t[e]){const s=this._pluginStateMap.get(t),n=n=>{const a=Object.assign(Object.assign({},n),{state:s});return t[e](a)};yield n}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const n of this.iterateCallbacks("cacheWillUpdate"))if(t=await n({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class V{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.cacheName=h(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"===typeof e.request?new Request(e.request):e.request,n="params"in e?e.params:void 0,a=new H(this,{event:t,request:s,params:n}),r=this._getResponse(a,s,t);return[r,this._awaitComplete(r,a,s,t)]}async _getResponse(e,t,s){let n;await e.runCallbacks("handlerWillStart",{event:s,request:t});try{if(n=await this._handle(t,e),!n||"error"===n.type)throw new a("no-response",{url:t.url})}catch(r){if(r instanceof Error)for(const a of e.iterateCallbacks("handlerDidError"))if(n=await a({error:r,event:s,request:t}),n)break;if(!n)throw r}for(const a of e.iterateCallbacks("handlerWillRespond"))n=await a({event:s,request:t,response:n});return n}async _awaitComplete(e,t,s,n){let a,r;try{a=await e}catch(r){}try{await t.runCallbacks("handlerDidRespond",{event:n,request:s,response:a}),await t.doneWaiting()}catch(i){i instanceof Error&&(r=i)}if(await t.runCallbacks("handlerDidComplete",{event:n,request:s,response:a,error:r}),t.destroy(),r)throw r}}class G extends V{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.cacheName=c(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(G.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;const n=t.params||{};if(!this._fallbackToNetwork)throw new a("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const a=n.integrity,r=e.integrity,i=!r||r===a;if(s=await t.fetch(new Request(e,{integrity:"no-cors"!==e.mode?r||a:void 0})),a&&i&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await t.cachePut(e,s.clone());0}}return s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const s=await t.fetch(e);if(!await t.cachePut(e,s.clone()))throw new a("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,n]of this.plugins.entries())n!==G.copyRedirectedCacheableResponsesPlugin&&(n===G.defaultPrecacheCacheabilityPlugin&&(e=s),n.cacheWillUpdate&&t++);0===t?this.plugins.push(G.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}G.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate(e){let{response:t}=e;return!t||t.status>=400?null:t}},G.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate(e){let{response:t}=e;return t.redirected?await m(t):t}};class ${constructor(){let{cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new G({cacheName:c(e),plugins:[...t,new j({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const s of e){"string"===typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:n}=W(s),r="string"!==typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new a("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!==typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new a("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,r),t.length>0){const e="Workbox is precaching URLs without revision "+"info: ".concat(t.join(", "),"\nThis is generally NOT safe. ")+"Learn more at https://bit.ly/wb-precache";console.warn(e)}}}install(e){return w(e,(async()=>{const t=new B;this.strategy.plugins.push(t);for(const[a,r]of this._urlsToCacheKeys){const t=this._cacheKeysToIntegrities.get(r),s=this._urlsToCacheModes.get(a),n=new Request(a,{integrity:t,cache:s,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:r},request:n,event:e}))}const{updatedURLs:s,notUpdatedURLs:n}=t;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(e){return w(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(const a of t)s.has(a.url)||(await e.delete(a),n.push(a.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new a("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=Object.assign({cacheKey:t},s.params),this.strategy.handle(s))}}let Q;const J=()=>(Q||(Q=new $),Q);s(130);const z=e=>e&&"object"===typeof e?e:{handle:e};class X{constructor(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";this.handler=z(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=z(e)}}class Y extends X{constructor(e,t,s){super((t=>{let{url:s}=t;const n=e.exec(s.href);if(n&&(s.origin===location.origin||0===n.index))return n.slice(1)}),t,s)}}class Z{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const s=Promise.all(t.urlsToCache.map((t=>{"string"===typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest(e){let{request:t,event:s}=e;const n=new URL(t.url,location.href);if(!n.protocol.startsWith("http"))return void 0;const a=n.origin===location.origin,{params:r,route:i}=this.findMatchingRoute({event:s,request:t,sameOrigin:a,url:n});let o=i&&i.handler;const c=t.method;if(!o&&this._defaultHandlerMap.has(c)&&(o=this._defaultHandlerMap.get(c)),!o)return void 0;let h;try{h=o.handle({url:n,request:t,event:s,params:r})}catch(u){h=Promise.reject(u)}const l=i&&i.catchHandler;return h instanceof Promise&&(this._catchHandler||l)&&(h=h.catch((async e=>{if(l){0;try{return await l.handle({url:n,request:t,event:s,params:r})}catch(a){a instanceof Error&&(e=a)}}if(this._catchHandler)return this._catchHandler.handle({url:n,request:t,event:s});throw e}))),h}findMatchingRoute(e){let{url:t,sameOrigin:s,request:n,event:a}=e;const r=this._routes.get(n.method)||[];for(const i of r){let e;const r=i.match({url:t,sameOrigin:s,request:n,event:a});if(r)return e=r,(Array.isArray(e)&&0===e.length||r.constructor===Object&&0===Object.keys(r).length||"boolean"===typeof r)&&(e=void 0),{route:i,params:e}}return{}}setDefaultHandler(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET";this._defaultHandlerMap.set(t,z(e))}setCatchHandler(e){this._catchHandler=z(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new a("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new a("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let ee;const te=()=>(ee||(ee=new Z,ee.addFetchListener(),ee.addCacheListener()),ee);function se(e,t,s){let n;if("string"===typeof e){const a=new URL(e,location.href);0;n=new X((e=>{let{url:t}=e;return t.href===a.href}),t,s)}else if(e instanceof RegExp)n=new Y(e,t,s);else if("function"===typeof e)n=new X(e,t,s);else{if(!(e instanceof X))throw new a("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});n=e}return te().registerRoute(n),n}class ne extends X{constructor(e,t){super((s=>{let{request:n}=s;const a=e.getURLsToCacheKeys();for(const r of function(e){let{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:a}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function*(){const r=new URL(e,location.href);r.hash="",yield r.href;const i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(r,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(n){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(a){const e=a({url:r});for(const t of e)yield t.href}}()}(n.url,t)){const t=a.get(r);if(t){return{cacheKey:t,integrity:e.getIntegrityForCacheKey(t)}}}}),e.strategy)}}const ae={cacheWillUpdate:async e=>{let{response:t}=e;return 200===t.status||0===t.status?t:null}};var re;self.addEventListener("activate",(()=>self.clients.claim())),function(e){J().precache(e)}([{'revision':'a12675465c903e20b50273b417548832','url':'/doctor-telemedicine-ehr/index.html'},{'revision':null,'url':'/doctor-telemedicine-ehr/static/css/main.b16ed5c9.css'},{'revision':null,'url':'/doctor-telemedicine-ehr/static/js/453.37ff8029.chunk.js'},{'revision':null,'url':'/doctor-telemedicine-ehr/static/js/main.66c0e135.js'},{'revision':null,'url':'/doctor-telemedicine-ehr/static/media/HelveticaNeueBold.caac1e27ec3f5b3f7a04.ttf'},{'revision':'d9a164650f4fac52f01b543670dc9121','url':'/doctor-telemedicine-ehr/static/media/add.f0bf2307fd4cddf0d5e6dbb9f07d24ce.svg'},{'revision':'6838fb333700b534a8e4bfd828bcc112','url':'/doctor-telemedicine-ehr/static/media/appointments_active.2da2d3eebfdb1fc20326b2577e297812.svg'},{'revision':'51951af99438ccebb50ebf6fe6fe105e','url':'/doctor-telemedicine-ehr/static/media/appointments_inactive.01dd3b9f114ee92a18e718a4b3f2f4d7.svg'},{'revision':'9077b9bf87b2a5d1f1be5e5224e8aea5','url':'/doctor-telemedicine-ehr/static/media/cancel.c02d2f3bcabdd6d8a072b2a8a2a3e52c.svg'},{'revision':'4490d460a0fc47284c2bed3d05c6b635','url':'/doctor-telemedicine-ehr/static/media/cloud.ef4030d93535aadc3b493b104bd55a06.svg'},{'revision':'c30d07835a242a322b8ff75e1f1f9880','url':'/doctor-telemedicine-ehr/static/media/dashboard_active.b8b97566b911bb1a8131b7c2bf1960d9.svg'},{'revision':'6e0d16f8e912be352aeb6b70aa2ab6be','url':'/doctor-telemedicine-ehr/static/media/dashboard_inactive.9af5945c2e4cee08f5dd7483bb198a69.svg'},{'revision':'75c5e94653ef4b27a2be978ad1e841fb','url':'/doctor-telemedicine-ehr/static/media/doc.54e944538356de8b1d0d358fc4506c0e.svg'},{'revision':'e38ce02f01cfd9d43a04378c2d1688d7','url':'/doctor-telemedicine-ehr/static/media/empty-state.68b7a9ad95388721f4fa3c79d58c474b.svg'},{'revision':'7b56e1eab00ec8000da9331a4888cb35','url':'/doctor-telemedicine-ehr/static/media/mask.768f7568d1951d5abd311e09c348fb7a.svg'},{'revision':'456179bdceb7912de17ad8c5185e5b9b','url':'/doctor-telemedicine-ehr/static/media/note.04d8d6775a73b79aa94db2b58a1abb50.svg'},{'revision':'b0b31c1a80643fa618ae6a425b0a9e69','url':'/doctor-telemedicine-ehr/static/media/notification.d0c360d3d0e042986d998c94855d253c.svg'},{'revision':'29b89de10d6a9167d7b78301a7c6c50d','url':'/doctor-telemedicine-ehr/static/media/patients_active.aea9603c319041fe133343d169793563.svg'},{'revision':'bb78f5e77a9549ccf5f7550a7c550f72','url':'/doctor-telemedicine-ehr/static/media/patients_inactive.41bcff95f6223d299a79b2063bbcc5c9.svg'},{'revision':'0bb4a1bebd6797c10f0c99d3570197d6','url':'/doctor-telemedicine-ehr/static/media/patients_outline.c433c111c210beb916d5f571d1bfc2ee.svg'},{'revision':'63ee3149faca23d2cb81df4c51417fa1','url':'/doctor-telemedicine-ehr/static/media/person.b7b32ab8c956ebb978c13eeb761762e8.svg'},{'revision':'bdd277c780960df27569071812478d3e','url':'/doctor-telemedicine-ehr/static/media/platform_logo.a6fa73838dc82897f18c6224bf8047d3.svg'},{'revision':null,'url':'/doctor-telemedicine-ehr/static/media/proximanova_bold.41a02a7fb08bb9438ae9.ttf'},{'revision':null,'url':'/doctor-telemedicine-ehr/static/media/proximanova_regular.8181ca4b7c2d1189d78a.ttf'},{'revision':null,'url':'/doctor-telemedicine-ehr/static/media/proximanova_semibold.3a75f030b0e71ecb8838.ttf'},{'revision':'c8d7428c3711dbee078ce15037889de7','url':'/doctor-telemedicine-ehr/static/media/remove.a67cc3b8d5a4514fe9ee129e9d4e5c88.svg'},{'revision':'e6dbf170f652335bdd45e218fc53aa1b','url':'/doctor-telemedicine-ehr/static/media/reviews_active.0d814527da51b98b474d437aeb487305.svg'},{'revision':'546012bc201671d1c5c0d2eee62a7ced','url':'/doctor-telemedicine-ehr/static/media/reviews_inactive.2736c8814e5537b805d6331c880b9432.svg'},{'revision':'e18aefef7ae406f1297448fd90dd81d3','url':'/doctor-telemedicine-ehr/static/media/search.af3f81a707fd827982fb42e52fdc490d.svg'},{'revision':'ced5fb5810c8657c53c904025dd142d3','url':'/doctor-telemedicine-ehr/static/media/settings_active.907e2f82e2cc94914829313f3b826868.svg'},{'revision':'17d1b0c1ebe60f212a01a112667d38b8','url':'/doctor-telemedicine-ehr/static/media/settings_inactive.f6fb7ca328ae0ad6bd5b684894b319ee.svg'},{'revision':'3b68ede289a5b3e5a6dcd9c8c2984474','url':'/doctor-telemedicine-ehr/static/media/star.9738930f712211715a0a11971f215fea.svg'},{'revision':'059f77bd48332fa6c1f8933e839274e3','url':'/doctor-telemedicine-ehr/static/media/star_active.312bf89abf6a9c0e75831c50e8f1f632.svg'},{'revision':'ea947bf7804d8d60d3d722a36d5a2acc','url':'/doctor-telemedicine-ehr/static/media/star_inactive.c29e5427f729f724cde74b1a90be5e85.svg'},{'revision':'3ad7afb3f105d87ebcde0c78b52c131b','url':'/doctor-telemedicine-ehr/static/media/tablet.106e33448aa3914aac2c19665c82d93d.svg'},{'revision':'8e0c9485a90e3df90c7718adaabc88df','url':'/doctor-telemedicine-ehr/static/media/welcome-person.b4c27c0ecff8ee2df4d46a46dd1c422e.svg'}]),function(e){const t=J();se(new ne(t,e))}(re);const ie=new RegExp("/[^/?]+\\.[^/]+$");var oe;se((e=>{let{request:t,url:s}=e;return"navigate"===t.mode&&(!s.pathname.startsWith("/_")&&!s.pathname.match(ie))}),(oe="/doctor-telemedicine-ehr/index.html",J().createHandlerBoundToURL(oe))),se((e=>{let{url:t}=e;return t.origin===self.location.origin&&t.pathname.endsWith(".png")}),new class extends V{constructor(){super(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(ae)}async _handle(e,t){const s=t.fetchAndCachePut(e).catch((()=>{}));t.waitUntil(s);let n,r=await t.cacheMatch(e);if(r)0;else{0;try{r=await s}catch(i){i instanceof Error&&(n=i)}}if(!r)throw new a("no-response",{url:e.url,error:n});return r}}({cacheName:"images",plugins:[new class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.cachedResponseWillBeUsed=async e=>{let{event:t,request:s,cacheName:n,cachedResponse:a}=e;if(!a)return null;const r=this._isResponseDateFresh(a),i=this._getCacheExpiration(n);d(i.expireEntries());const o=i.updateTimestamp(s.url);if(t)try{t.waitUntil(o)}catch(c){0}return r?a:null},this.cacheDidUpdate=async e=>{let{cacheName:t,request:s}=e;const n=this._getCacheExpiration(t);await n.updateTimestamp(s.url),await n.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&function(e){r.add(e)}((()=>this.deleteCacheAndMetadata()))}_getCacheExpiration(e){if(e===h())throw new a("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new O(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);if(null===t)return!0;return t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}({maxEntries:50})]})),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}))})();
//# sourceMappingURL=service-worker.js.map