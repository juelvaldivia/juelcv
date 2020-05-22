(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{51:function(e,t,n){"use strict";n.r(t);var r=n(5),i=n.n(r),o=(n(12),n(6));var s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function a(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{c(r.next(e))}catch(e){o(e)}}function a(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))}function c(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}function u(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function l(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)s.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return s}var f,d=n(2),p=n(9),h=((f={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',f["only-available-in-window"]="This method is available in a Window context.",f["only-available-in-sw"]="This method is available in a service worker context.",f["permission-default"]="The notification permission was not granted and dismissed instead.",f["permission-blocked"]="The notification permission was not granted and blocked instead.",f["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",f["failed-service-worker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",f["token-subscribe-failed"]="A problem occured while subscribing the user to FCM: {$errorInfo}",f["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",f["token-unsubscribe-failed"]="A problem occured while unsubscribing the user from FCM: {$errorInfo}",f["token-update-failed"]="A problem occured while updating the user from FCM: {$errorInfo}",f["token-update-no-token"]="FCM returned no token when updating the user to push.",f["use-sw-after-get-token"]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",f["invalid-sw-registration"]="The input to useServiceWorker() must be a ServiceWorkerRegistration.",f["invalid-bg-handler"]="The input to setBackgroundMessageHandler() must be a function.",f["invalid-vapid-key"]="The public VAPID key must be a string.",f["use-vapid-key-after-get-token"]="The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",f),v=new d.ErrorFactory("messaging","Messaging",h);function b(e){return v.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(e){var t=new Uint8Array(e);return btoa(String.fromCharCode.apply(String,function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(l(arguments[t]));return e}(t))).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function y(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),r=new Uint8Array(n.length),i=0;i<n.length;++i)r[i]=n.charCodeAt(i);return r}
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e){return a(this,void 0,void 0,(function(){var t,n,r=this;return c(this,(function(i){switch(i.label){case 0:return"databases"in indexedDB?[4,indexedDB.databases()]:[3,2];case 1:if(t=i.sent(),!t.map((function(e){return e.name})).includes("fcm_token_details_db"))return[2,null];i.label=2;case 2:return n=null,[4,Object(p.openDb)("fcm_token_details_db",5,(function(t){return a(r,void 0,void 0,(function(){var r,i,o,s;return c(this,(function(a){switch(a.label){case 0:return t.oldVersion<2?[2]:t.objectStoreNames.contains("fcm_token_object_Store")?[4,(r=t.transaction.objectStore("fcm_token_object_Store")).index("fcmSenderId").get(e)]:[2];case 1:return i=a.sent(),[4,r.clear()];case 2:if(a.sent(),!i)return[2];if(2===t.oldVersion){if(!(o=i).auth||!o.p256dh||!o.endpoint)return[2];n={token:o.fcmToken,createTime:null!==(s=o.createTime)&&void 0!==s?s:Date.now(),subscriptionOptions:{auth:o.auth,p256dh:o.p256dh,endpoint:o.endpoint,swScope:o.swScope,vapidKey:"string"==typeof o.vapidKey?o.vapidKey:g(o.vapidKey)}}}else(3===t.oldVersion||4===t.oldVersion)&&(n={token:(o=i).fcmToken,createTime:o.createTime,subscriptionOptions:{auth:g(o.auth),p256dh:g(o.p256dh),endpoint:o.endpoint,swScope:o.swScope,vapidKey:g(o.vapidKey)}});return[2]}}))}))}))];case 3:return i.sent().close(),[4,Object(p.deleteDb)("fcm_token_details_db")];case 4:return i.sent(),[4,Object(p.deleteDb)("fcm_vapid_details_db")];case 5:return i.sent(),[4,Object(p.deleteDb)("undefined")];case 6:return i.sent(),[2,m(n)?n:null]}}))}))}function m(e){if(!e||!e.subscriptionOptions)return!1;var t=e.subscriptionOptions;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var k="firebase-messaging-store",S=null;function I(){return S||(S=Object(p.openDb)("firebase-messaging-database",1,(function(e){switch(e.oldVersion){case 0:e.createObjectStore(k)}}))),S}function T(e){return a(this,void 0,void 0,(function(){var t,n,r;return c(this,(function(i){switch(i.label){case 0:return t=K(e),[4,I()];case 1:return[4,i.sent().transaction(k).objectStore(k).get(t)];case 2:return(n=i.sent())?[2,n]:[3,3];case 3:return[4,w(e.appConfig.senderId)];case 4:return(r=i.sent())?[4,C(e,r)]:[3,6];case 5:return i.sent(),[2,r];case 6:return[2]}}))}))}function C(e,t){return a(this,void 0,void 0,(function(){var n,r,i;return c(this,(function(o){switch(o.label){case 0:return n=K(e),[4,I()];case 1:return r=o.sent(),[4,(i=r.transaction(k,"readwrite")).objectStore(k).put(t,n)];case 2:return o.sent(),[4,i.complete];case 3:return o.sent(),[2,t]}}))}))}function D(e){return a(this,void 0,void 0,(function(){var t,n,r;return c(this,(function(i){switch(i.label){case 0:return t=K(e),[4,I()];case 1:return n=i.sent(),[4,(r=n.transaction(k,"readwrite")).objectStore(k).delete(t)];case 2:return i.sent(),[4,r.complete];case 3:return i.sent(),[2]}}))}))}function K(e){return e.appConfig.appId}
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4";
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function P(e,t){return a(this,void 0,void 0,(function(){var n,r,i,o,s,a;return c(this,(function(c){switch(c.label){case 0:return[4,E(e)];case 1:n=c.sent(),r=N(t),i={method:"POST",headers:n,body:JSON.stringify(r)},c.label=2;case 2:return c.trys.push([2,5,,6]),[4,fetch(j(e.appConfig),i)];case 3:return[4,c.sent().json()];case 4:return o=c.sent(),[3,6];case 5:throw s=c.sent(),v.create("token-subscribe-failed",{errorInfo:s});case 6:if(o.error)throw a=o.error.message,v.create("token-subscribe-failed",{errorInfo:a});if(!o.token)throw v.create("token-subscribe-no-token");return[2,o.token]}}))}))}function _(e,t){return a(this,void 0,void 0,(function(){var n,r,i,o,s,a;return c(this,(function(c){switch(c.label){case 0:return[4,E(e)];case 1:n=c.sent(),r=N(t.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)},c.label=2;case 2:return c.trys.push([2,5,,6]),[4,fetch(j(e.appConfig)+"/"+t.token,i)];case 3:return[4,c.sent().json()];case 4:return o=c.sent(),[3,6];case 5:throw s=c.sent(),v.create("token-update-failed",{errorInfo:s});case 6:if(o.error)throw a=o.error.message,v.create("token-update-failed",{errorInfo:a});if(!o.token)throw v.create("token-update-no-token");return[2,o.token]}}))}))}function O(e,t){return a(this,void 0,void 0,(function(){var n,r,i,o,s;return c(this,(function(a){switch(a.label){case 0:return[4,E(e)];case 1:n=a.sent(),r={method:"DELETE",headers:n},a.label=2;case 2:return a.trys.push([2,5,,6]),[4,fetch(j(e.appConfig)+"/"+t,r)];case 3:return[4,a.sent().json()];case 4:if((i=a.sent()).error)throw o=i.error.message,v.create("token-unsubscribe-failed",{errorInfo:o});return[3,6];case 5:throw s=a.sent(),v.create("token-unsubscribe-failed",{errorInfo:s});case 6:return[2]}}))}))}function j(e){return"https://fcmregistrations.googleapis.com/v1/projects/"+e.projectId+"/registrations"}function E(e){var t=e.appConfig,n=e.installations;return a(this,void 0,void 0,(function(){var e;return c(this,(function(r){switch(r.label){case 0:return[4,n.getToken()];case 1:return e=r.sent(),[2,new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":"FIS "+e})]}}))}))}function N(e){var t=e.p256dh,n=e.auth,r=e.endpoint,i=e.vapidKey,o={web:{endpoint:r,auth:n,p256dh:t}};return i!==M&&(o.web.applicationPubKey=i),o}
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var x;function R(e,t,n){return a(this,void 0,void 0,(function(){var r,i,o,s;return c(this,(function(a){switch(a.label){case 0:if("granted"!==Notification.permission)throw v.create("permission-blocked");return[4,L(t,n)];case 1:return r=a.sent(),[4,T(e)];case 2:return i=a.sent(),o={vapidKey:n,swScope:t.scope,endpoint:r.endpoint,auth:g(r.getKey("auth")),p256dh:g(r.getKey("p256dh"))},i?[3,3]:[2,H(e,o)];case 3:if(c=i.subscriptionOptions,l=(u=o).vapidKey===c.vapidKey,f=u.endpoint===c.endpoint,d=u.auth===c.auth,p=u.p256dh===c.p256dh,l&&f&&d&&p)return[3,8];a.label=4;case 4:return a.trys.push([4,6,,7]),[4,O(e,i.token)];case 5:return a.sent(),[3,7];case 6:return s=a.sent(),console.warn(s),[3,7];case 7:return[2,H(e,o)];case 8:return Date.now()>=i.createTime+6048e5?[2,W({token:i.token,createTime:Date.now(),subscriptionOptions:o},e,t)]:[2,i.token];case 9:return[2]}var c,u,l,f,d,p;
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}))}))}function A(e,t){return a(this,void 0,void 0,(function(){var n,r;return c(this,(function(i){switch(i.label){case 0:return[4,T(e)];case 1:return(n=i.sent())?[4,O(e,n.token)]:[3,4];case 2:return i.sent(),[4,D(e)];case 3:i.sent(),i.label=4;case 4:return[4,t.pushManager.getSubscription()];case 5:return(r=i.sent())?[2,r.unsubscribe()]:[2,!0]}}))}))}function W(e,t,n){return a(this,void 0,void 0,(function(){var r,i,o;return c(this,(function(a){switch(a.label){case 0:return a.trys.push([0,3,,5]),[4,_(t,e)];case 1:return r=a.sent(),i=s({token:r,createTime:Date.now()},e),[4,C(t,i)];case 2:return a.sent(),[2,r];case 3:return o=a.sent(),[4,A(t,n)];case 4:throw a.sent(),o;case 5:return[2]}}))}))}function H(e,t){return a(this,void 0,void 0,(function(){var n,r;return c(this,(function(i){switch(i.label){case 0:return[4,P(e,t)];case 1:return n=i.sent(),r={token:n,createTime:Date.now(),subscriptionOptions:t},[4,C(e,r)];case 2:return i.sent(),[2,r.token]}}))}))}function L(e,t){return a(this,void 0,void 0,(function(){var n;return c(this,(function(r){switch(r.label){case 0:return[4,e.pushManager.getSubscription()];case 1:return(n=r.sent())?[2,n]:[2,e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:y(t)})]}}))}))}
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function V(e){return"object"==typeof e&&!!e&&"google.c.a.c_id"in e}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"}(x||(x={}));var U=function(){function e(e){var t=this;this.firebaseDependencies=e,this.vapidKey=null,this.onMessageCallback=null,navigator.serviceWorker.addEventListener("message",(function(e){return t.messageEventListener(e)}))}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!0,configurable:!0}),e.prototype.getToken=function(){return a(this,void 0,void 0,(function(){var e;return c(this,(function(t){switch(t.label){case 0:return this.vapidKey||(this.vapidKey=M),[4,this.getServiceWorkerRegistration()];case 1:return e=t.sent(),"default"!==Notification.permission?[3,3]:[4,Notification.requestPermission()];case 2:t.sent(),t.label=3;case 3:if("granted"!==Notification.permission)throw v.create("permission-blocked");return[2,R(this.firebaseDependencies,e,this.vapidKey)]}}))}))},e.prototype.deleteToken=function(){return a(this,void 0,void 0,(function(){var e;return c(this,(function(t){switch(t.label){case 0:return[4,this.getServiceWorkerRegistration()];case 1:return e=t.sent(),[2,A(this.firebaseDependencies,e)]}}))}))},e.prototype.requestPermission=function(){return a(this,void 0,void 0,(function(){var e;return c(this,(function(t){switch(t.label){case 0:return"granted"===Notification.permission?[2]:[4,Notification.requestPermission()];case 1:if("granted"===(e=t.sent()))return[2];throw"denied"===e?v.create("permission-blocked"):v.create("permission-default")}}))}))},e.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw v.create("use-vapid-key-after-get-token");if("string"!=typeof e||0===e.length)throw v.create("invalid-vapid-key");this.vapidKey=e},e.prototype.useServiceWorker=function(e){if(!(e instanceof ServiceWorkerRegistration))throw v.create("invalid-sw-registration");if(this.swRegistration)throw v.create("use-sw-after-get-token");this.swRegistration=e},e.prototype.onMessage=function(e){var t=this;return this.onMessageCallback="function"==typeof e?e:e.next,function(){t.onMessageCallback=null}},e.prototype.setBackgroundMessageHandler=function(){throw v.create("only-available-in-sw")},e.prototype.onTokenRefresh=function(){return function(){}},e.prototype.getServiceWorkerRegistration=function(){return a(this,void 0,void 0,(function(){var e,t;return c(this,(function(n){switch(n.label){case 0:if(this.swRegistration)return[3,4];n.label=1;case 1:return n.trys.push([1,3,,4]),e=this,[4,navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"})];case 2:return e.swRegistration=n.sent(),this.swRegistration.update().catch((function(){})),[3,4];case 3:throw t=n.sent(),v.create("failed-service-worker-registration",{browserErrorMessage:t.message});case 4:return[2,this.swRegistration]}}))}))},e.prototype.messageEventListener=function(e){var t;return a(this,void 0,void 0,(function(){var n,r,i,o;return c(this,(function(s){switch(s.label){case 0:return(null===(t=e.data)||void 0===t?void 0:t.firebaseMessaging)?(n=e.data.firebaseMessaging,r=n.type,i=n.payload,this.onMessageCallback&&r===x.PUSH_RECEIVED&&this.onMessageCallback(i),V(o=i.data)&&"1"===o["google.c.a.e"]?[4,this.logEvent(r,o)]:[3,2]):[2];case 1:s.sent(),s.label=2;case 2:return[2]}}))}))},e.prototype.logEvent=function(e,t){return a(this,void 0,void 0,(function(){var n;return c(this,(function(r){switch(r.label){case 0:return n=function(e){switch(e){case x.NOTIFICATION_CLICKED:return"notification_open";case x.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e),[4,this.firebaseDependencies.analyticsProvider.get()];case 1:return r.sent().logEvent(n,{message_id:t["google.c.a.c_id"],message_name:t["google.c.a.c_l"],message_time:t["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)}),[2]}}))}))},e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var F=function(){function e(e){var t=this;this.firebaseDependencies=e,this.vapidKey=null,this.bgMessageHandler=null,self.addEventListener("push",(function(e){e.waitUntil(t.onPush(e))})),self.addEventListener("pushsubscriptionchange",(function(e){e.waitUntil(t.onSubChange(e))})),self.addEventListener("notificationclick",(function(e){e.waitUntil(t.onNotificationClick(e))}))}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!0,configurable:!0}),e.prototype.setBackgroundMessageHandler=function(e){if(!e||"function"!=typeof e)throw v.create("invalid-bg-handler");this.bgMessageHandler=e},e.prototype.getToken=function(){var e,t;return a(this,void 0,void 0,(function(){var n;return c(this,(function(r){switch(r.label){case 0:return this.vapidKey?[3,2]:[4,T(this.firebaseDependencies)];case 1:n=r.sent(),this.vapidKey=null!==(t=null===(e=null==n?void 0:n.subscriptionOptions)||void 0===e?void 0:e.vapidKey)&&void 0!==t?t:M,r.label=2;case 2:return[2,R(this.firebaseDependencies,self.registration,this.vapidKey)]}}))}))},e.prototype.deleteToken=function(){return A(this.firebaseDependencies,self.registration)},e.prototype.requestPermission=function(){throw v.create("only-available-in-window")},e.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw v.create("use-vapid-key-after-get-token");if("string"!=typeof e||0===e.length)throw v.create("invalid-vapid-key");this.vapidKey=e},e.prototype.useServiceWorker=function(){throw v.create("only-available-in-window")},e.prototype.onMessage=function(){throw v.create("only-available-in-window")},e.prototype.onTokenRefresh=function(){throw v.create("only-available-in-window")},e.prototype.onPush=function(e){return a(this,void 0,void 0,(function(){var t,n,r;return c(this,(function(i){switch(i.label){case 0:return(t=function(e){var t=e.data;if(!t)return null;try{return t.json()}catch(e){return null}}(e))?[4,G()]:[2];case 1:return function(e){return e.some((function(e){return"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")}))}(n=i.sent())?[2,q(n,t)]:(r=function(e){var t;if(!e||"object"!=typeof e.notification)return;var n=s({},e.notification);return n.data=s(s({},e.notification.data),((t={}).FCM_MSG=e,t)),n}(t))?[4,$(r)]:[3,3];case 2:return i.sent(),[3,5];case 3:return this.bgMessageHandler?[4,this.bgMessageHandler(t)]:[3,5];case 4:i.sent(),i.label=5;case 5:return[2]}}))}))},e.prototype.onSubChange=function(e){var t,n;return a(this,void 0,void 0,(function(){var r;return c(this,(function(i){switch(i.label){case 0:return e.newSubscription?[3,2]:[4,A(this.firebaseDependencies,self.registration)];case 1:return i.sent(),[2];case 2:return[4,T(this.firebaseDependencies)];case 3:return r=i.sent(),[4,A(this.firebaseDependencies,self.registration)];case 4:return i.sent(),[4,R(this.firebaseDependencies,self.registration,null!==(n=null===(t=null==r?void 0:r.subscriptionOptions)||void 0===t?void 0:t.vapidKey)&&void 0!==n?n:M)];case 5:return i.sent(),[2]}}))}))},e.prototype.onNotificationClick=function(e){var t,n;return a(this,void 0,void 0,(function(){var r,i,o,s;return c(this,(function(a){switch(a.label){case 0:return(r=null===(n=null===(t=e.notification)||void 0===t?void 0:t.data)||void 0===n?void 0:n.FCM_MSG)?e.action?[2]:(e.stopImmediatePropagation(),e.notification.close(),(i=function(e){var t,n,r,i=null!==(n=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==n?n:null===(r=e.notification)||void 0===r?void 0:r.click_action;if(i)return i;return V(e.data)?self.location.origin:null}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r))?[4,B(i)]:[2]):[2];case 1:return(o=a.sent())?[3,4]:[4,self.clients.openWindow(i)];case 2:return o=a.sent(),[4,(c=3e3,new Promise((function(e){setTimeout(e,c)})))];case 3:return a.sent(),[3,6];case 4:return[4,o.focus()];case 5:o=a.sent(),a.label=6;case 6:return o?(s=J(x.NOTIFICATION_CLICKED,r),[2,o.postMessage(s)]):[2]}var c}))}))},e}();function B(e){return a(this,void 0,void 0,(function(){var t,n,r,i,o,s,a;return c(this,(function(c){switch(c.label){case 0:return t=new URL(e,self.location.href),[4,G()];case 1:n=c.sent();try{for(r=u(n),i=r.next();!i.done;i=r.next())if(o=i.value,new URL(o.url,self.location.href).host===t.host)return[2,o]}catch(e){s={error:e}}finally{try{i&&!i.done&&(a=r.return)&&a.call(r)}finally{if(s)throw s.error}}return[2,null]}}))}))}function q(e,t){var n,r,i=J(x.PUSH_RECEIVED,t);try{for(var o=u(e),s=o.next();!s.done;s=o.next()){s.value.postMessage(i)}}catch(e){n={error:e}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}}function G(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function J(e,t){return{firebaseMessaging:{type:e,payload:t}}}function $(e){var t,n=null!==(t=e.title)&&void 0!==t?t:"",r=e.actions,i=Notification.maxActions;return r&&i&&r.length>i&&console.warn("This browser only supports "+i+" actions. The remaining actions will not be displayed."),self.registration.showNotification(n,e)}var z={isSupported:Q};function Q(){return self&&"ServiceWorkerGlobalScope"in self?"indexedDB"in self&&null!==indexedDB&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey"):"indexedDB"in window&&null!==indexedDB&&navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}i.a.INTERNAL.registerComponent(new o.Component("messaging",(function(e){var t=e.getProvider("app").getImmediate(),n={app:t,appConfig:
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){var t,n;if(!e||!e.options)throw b("App Configuration Object");if(!e.name)throw b("App Name");var r=e.options;try{for(var i=u(["projectId","apiKey","appId","messagingSenderId"]),o=i.next();!o.done;o=i.next()){var s=o.value;if(!r[s])throw b(s)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return{appName:e.name,projectId:r.projectId,apiKey:r.apiKey,appId:r.appId,senderId:r.messagingSenderId}}(t),installations:e.getProvider("installations").getImmediate(),analyticsProvider:e.getProvider("analytics-internal")};if(!Q())throw v.create("unsupported-browser");return self&&"ServiceWorkerGlobalScope"in self?new F(n):new U(n)}),"PUBLIC").setServiceProps(z))}}]);