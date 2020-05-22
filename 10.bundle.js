(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{50:function(e,t,r){"use strict";r.r(t);var n=r(5),o=r.n(n);function i(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}u((n=n.apply(e,t||[])).next())}))}function a(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}function s(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)n[o]=i[a];return n}var u=r(6),l=function(){function e(e,t){this.code_=E(e),this.message_="Firebase Storage: "+t,this.serverResponse_=null,this.name_="FirebaseError"}return e.prototype.codeProp=function(){return this.code},e.prototype.codeEquals=function(e){return E(e)===this.codeProp()},e.prototype.serverResponseProp=function(){return this.serverResponse_},e.prototype.setServerResponseProp=function(e){this.serverResponse_=e},Object.defineProperty(e.prototype,"name",{get:function(){return this.name_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"code",{get:function(){return this.code_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"message",{get:function(){return this.message_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"serverResponse",{get:function(){return this.serverResponse_},enumerable:!0,configurable:!0}),e}(),c="unknown",p="object-not-found",h="quota-exceeded",f="unauthenticated",d="unauthorized",_="retry-limit-exceeded",v="canceled",m="invalid-url",g="invalid-default-bucket",b="cannot-slice-blob",y="server-file-wrong-size",w="no-download-url",R="invalid-argument",k="invalid-argument-count",T="app-deleted",x="invalid-root-operation",U="invalid-format",S="internal-error";
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
 */function E(e){return"storage/"+e}function O(){return new l(c,"An unknown error occurred, please check the error payload for server response.")}function P(){return new l(v,"User canceled the upload/download.")}function A(){return new l(b,"Cannot slice blob for upload. Please retry the upload.")}function C(){return new l(w,"The given file does not have any download URLs.")}function M(e,t,r){return new l(R,"Invalid argument in `"+t+"` at index "+e+": "+r)}function W(){return new l(T,"The Firebase app was deleted.")}function L(e,t){return new l(U,"String does not match format '"+e+"': "+t)}function I(e){throw new l(S,"Internal error: "+e)}
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
 */var j={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};function q(e){switch(e){case j.RAW:case j.BASE64:case j.BASE64URL:case j.DATA_URL:return;default:throw"Expected one of the event types: ["+j.RAW+", "+j.BASE64+", "+j.BASE64URL+", "+j.DATA_URL+"]."}}var B=function(e,t){this.data=e,this.contentType=t||null};function N(e,t){switch(e){case j.RAW:return new B(H(t));case j.BASE64:case j.BASE64URL:return new B(z(e,t));case j.DATA_URL:return new B((r=new D(t)).base64?z(j.BASE64,r.rest):function(e){var t;try{t=decodeURIComponent(e)}catch(e){throw L(j.DATA_URL,"Malformed data URL.")}return H(t)}(r.rest),function(e){return new D(e).contentType}(t))}var r;throw O()}function H(e){for(var t=[],r=0;r<e.length;r++){var n=e.charCodeAt(r);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|63&n);else if(55296==(64512&n))if(r<e.length-1&&56320==(64512&e.charCodeAt(r+1)))n=65536|(1023&n)<<10|1023&e.charCodeAt(++r),t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n);else t.push(239,191,189);else 56320==(64512&n)?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(t)}function z(e,t){switch(e){case j.BASE64:var r=-1!==t.indexOf("-"),n=-1!==t.indexOf("_");if(r||n)throw L(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break;case j.BASE64URL:var o=-1!==t.indexOf("+"),i=-1!==t.indexOf("/");if(o||i)throw L(e,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/")}var a;try{a=atob(t)}catch(t){throw L(e,"Invalid character found")}for(var s=new Uint8Array(a.length),u=0;u<a.length;u++)s[u]=a.charCodeAt(u);return s}var D=function(e){this.base64=!1,this.contentType=null;var t=e.match(/^data:([^,]+)?,/);if(null===t)throw L(j.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");var r=t[1]||null;null!=r&&(this.base64=(n=r,o=";base64",n.length>=o.length&&n.substring(n.length-o.length)===o),this.contentType=this.base64?r.substring(0,r.length-";base64".length):r),this.rest=e.substring(e.indexOf(",")+1);var n,o;
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
 */};var F,G={STATE_CHANGED:"state_changed"},X="running",K="pausing",Z="paused",J="success",V="canceling",$="canceled",Q="error",Y={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ee(e){switch(e){case X:case K:case V:return Y.RUNNING;case Z:return Y.PAUSED;case J:return Y.SUCCESS;case $:return Y.CANCELED;case Q:default:return Y.ERROR}}
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
 */function te(e){return null!=e}function re(e){return void 0!==e}function ne(e){return"function"==typeof e}function oe(e){return"object"==typeof e}function ie(e){return oe(e)&&null!==e}function ae(e){return"string"==typeof e||e instanceof String}function se(e){return ue(e)&&Number.isInteger(e)}function ue(e){return"number"==typeof e||e instanceof Number}function le(e){return ce()&&e instanceof Blob}function ce(){return"undefined"!=typeof Blob}
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
 */!function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"}(F||(F={}));
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
 */
var pe=function(){function e(){var e=this;this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=F.NO_ERROR,this.sendPromise_=new Promise((function(t){e.xhr_.addEventListener("abort",(function(){e.errorCode_=F.ABORT,t(e)})),e.xhr_.addEventListener("error",(function(){e.errorCode_=F.NETWORK_ERROR,t(e)})),e.xhr_.addEventListener("load",(function(){t(e)}))}))}return e.prototype.send=function(e,t,r,n){if(this.sent_)throw I("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),te(n))for(var o in n)n.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,n[o].toString());return te(r)?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_},e.prototype.getErrorCode=function(){if(!this.sent_)throw I("cannot .getErrorCode() before sending");return this.errorCode_},e.prototype.getStatus=function(){if(!this.sent_)throw I("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}},e.prototype.getResponseText=function(){if(!this.sent_)throw I("cannot .getResponseText() before sending");return this.xhr_.responseText},e.prototype.abort=function(){this.xhr_.abort()},e.prototype.getResponseHeader=function(e){return this.xhr_.getResponseHeader(e)},e.prototype.addUploadProgressListener=function(e){te(this.xhr_.upload)&&this.xhr_.upload.addEventListener("progress",e)},e.prototype.removeUploadProgressListener=function(e){te(this.xhr_.upload)&&this.xhr_.upload.removeEventListener("progress",e)},e}(),he=function(){function e(){}return e.prototype.createXhrIo=function(){return new pe},e}();
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
 */
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
 */
function fe(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function de(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=fe();if(void 0!==r){for(var n=new r,o=0;o<e.length;o++)n.append(e[o]);return n.getBlob()}if(ce())return new Blob(e);throw Error("This browser doesn't seem to support creating Blobs")}
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
 */
var _e=function(){function e(e,t){var r=0,n="";le(e)?(this.data_=e,r=e.size,n=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=n}return e.prototype.size=function(){return this.size_},e.prototype.type=function(){return this.type_},e.prototype.slice=function(t,r){if(le(this.data_)){var n=function(e,t,r){return e.webkitSlice?e.webkitSlice(t,r):e.mozSlice?e.mozSlice(t,r):e.slice?e.slice(t,r):null}(this.data_,t,r);return null===n?null:new e(n)}return new e(new Uint8Array(this.data_.buffer,t,r-t),!0)},e.getBlob=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(ce()){var n=t.map((function(t){return t instanceof e?t.data_:t}));return new e(de.apply(null,n))}var o=t.map((function(e){return ae(e)?N(j.RAW,e).data:e.data_})),i=0;o.forEach((function(e){i+=e.byteLength}));var a=new Uint8Array(i),s=0;return o.forEach((function(e){for(var t=0;t<e.length;t++)a[s++]=e[t]})),new e(a,!0)},e.prototype.uploadData=function(){return this.data_},e}(),ve=function(){function e(e,t){this.bucket=e,this.path_=t}return Object.defineProperty(e.prototype,"path",{get:function(){return this.path_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isRoot",{get:function(){return 0===this.path.length},enumerable:!0,configurable:!0}),e.prototype.fullServerUrl=function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)},e.prototype.bucketOnlyServerUrl=function(){return"/b/"+encodeURIComponent(this.bucket)+"/o"},e.makeFromBucketSpec=function(t){var r;try{r=e.makeFromUrl(t)}catch(r){return new e(t,"")}if(""===r.path)return r;throw new l(g,"Invalid default bucket '"+t+"'.")},e.makeFromUrl=function(t){var r=null;var n=new RegExp("^gs://([A-Za-z0-9.\\-_]+)(/(.*))?$","i");function o(e){e.path_=decodeURIComponent(e.path)}for(var i="firebasestorage.googleapis.com".replace(/[.]/g,"\\."),a=[{regex:n,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp("^https?://"+i+"/v[A-Za-z0-9_]+/b/([A-Za-z0-9.\\-_]+)/o(/([^?#]*).*)?$","i"),indices:{bucket:1,path:3},postModify:o},{regex:new RegExp("^https?://(?:storage.googleapis.com|storage.cloud.google.com)/([A-Za-z0-9.\\-_]+)/([^?#]*)","i"),indices:{bucket:1,path:2},postModify:o}],s=0;s<a.length;s++){var u=a[s],c=u.regex.exec(t);if(c){var p=c[u.indices.bucket],h=c[u.indices.path];h||(h=""),r=new e(p,h),u.postModify(r);break}}if(null==r)throw function(e){return new l(m,"Invalid URL '"+e+"'.")}(t);return r},e}();
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
 */
function me(e){var t,r;try{t=JSON.parse(e)}catch(e){return null}return oe(r=t)&&!Array.isArray(r)?t:null}
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
 */function ge(e,t){var r=t.split("/").filter((function(e){return e.length>0})).join("/");return 0===e.length?r:e+"/"+r}function be(e){var t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
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
 */function ye(e){return"https://firebasestorage.googleapis.com/v0"+e}function we(e){var t=encodeURIComponent,r="?";for(var n in e){if(e.hasOwnProperty(n))r=r+(t(n)+"="+t(e[n]))+"&"}return r=r.slice(0,-1)}
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
 */function Re(e,t){return t}var ke=function(e,t,r,n){this.server=e,this.local=t||e,this.writable=!!r,this.xform=n||Re},Te=null;function xe(){if(Te)return Te;var e=[];e.push(new ke("bucket")),e.push(new ke("generation")),e.push(new ke("metageneration")),e.push(new ke("name","fullPath",!0));var t=new ke("name");t.xform=function(e,t){return function(e){return!ae(e)||e.length<2?e:be(e)}(t)},e.push(t);var r=new ke("size");return r.xform=function(e,t){return te(t)?Number(t):t},e.push(r),e.push(new ke("timeCreated")),e.push(new ke("updated")),e.push(new ke("md5Hash",null,!0)),e.push(new ke("cacheControl",null,!0)),e.push(new ke("contentDisposition",null,!0)),e.push(new ke("contentEncoding",null,!0)),e.push(new ke("contentLanguage",null,!0)),e.push(new ke("contentType",null,!0)),e.push(new ke("metadata","customMetadata",!0)),Te=e}function Ue(e,t,r){for(var n={type:"file"},o=r.length,i=0;i<o;i++){var a=r[i];n[a.local]=a.xform(n,t[a.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){var r=e.bucket,n=e.fullPath,o=new ve(r,n);return t.makeStorageReference(o)}})}(n,e),n}function Se(e,t,r){var n=me(t);return null===n?null:Ue(e,n,r)}function Ee(e,t){for(var r={},n=t.length,o=0;o<n;o++){var i=t[o];i.writable&&(r[i.server]=e[i.local])}return JSON.stringify(r)}function Oe(e){if(!oe(e)||!e)throw"Expected Metadata object.";for(var t in e)if(e.hasOwnProperty(t)){var r=e[t];if("customMetadata"===t){if(!oe(r))throw"Expected object for 'customMetadata' mapping."}else if(ie(r))throw"Mapping for '"+t+"' cannot be an object."}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */function Pe(e,t,r){var n=me(r);return null===n?null:function(e,t,r){var n={prefixes:[],items:[],nextPageToken:r.nextPageToken};if(r.prefixes)for(var o=0,i=r.prefixes;o<i.length;o++){var a=i[o].replace(/\/$/,""),s=e.makeStorageReference(new ve(t,a));n.prefixes.push(s)}if(r.items)for(var u=0,l=r.items;u<l.length;u++){var c=l[u];s=e.makeStorageReference(new ve(t,c.name));n.items.push(s)}return n}(e,t,n)}function Ae(e){if(!oe(e)||!e)throw"Expected ListOptions object.";for(var t in e)if("maxResults"===t){if(!se(e.maxResults)||e.maxResults<=0)throw"Expected maxResults to be a positive number.";if(e.maxResults>1e3)throw"Expected maxResults to be less than or equal to 1000."}else{if("pageToken"!==t)throw"Unknown option: "+t;if(e.pageToken&&!ae(e.pageToken))throw"Expected pageToken to be string."}}var Ce=function(e,t,r,n){this.url=e,this.method=t,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]};
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
 */function Me(e){if(!e)throw O()}function We(e,t){return function(r,n){var o=Se(e,n,t);return Me(null!==o),o}}function Le(e,t){return function(r,n){var o=Se(e,n,t);return Me(null!==o),function(e,t){var r=me(t);if(null===r)return null;if(!ae(r.downloadTokens))return null;var n=r.downloadTokens;if(0===n.length)return null;var o=encodeURIComponent;return n.split(",").map((function(t){var r=e.bucket,n=e.fullPath;return ye("/b/"+o(r)+"/o/"+o(n))+we({alt:"media",token:t})}))[0]}(o,n)}}function Ie(e){return function(t,r){var n,o,i;return 401===t.getStatus()?n=new l(f,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(i=e.bucket,n=new l(h,"Quota for bucket '"+i+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(o=e.path,n=new l(d,"User does not have permission to access '"+o+"'.")):n=r,n.setServerResponseProp(r.serverResponseProp()),n}}function je(e){var t=Ie(e);return function(r,n){var o,i=t(r,n);return 404===r.getStatus()&&(o=e.path,i=new l(p,"Object '"+o+"' does not exist.")),i.setServerResponseProp(n.serverResponseProp()),i}}function qe(e,t,r){var n=ye(t.fullServerUrl()),o=e.maxOperationRetryTime(),i=new Ce(n,"GET",We(e,r),o);return i.errorHandler=je(t),i}function Be(e,t,r,n,o){var i={};t.isRoot?i.prefix="":i.prefix=t.path+"/",r&&r.length>0&&(i.delimiter=r),n&&(i.pageToken=n),o&&(i.maxResults=o);var a=ye(t.bucketOnlyServerUrl()),s=e.maxOperationRetryTime(),u=new Ce(a,"GET",function(e,t){return function(r,n){var o=Pe(e,t,n);return Me(null!==o),o}}(e,t.bucket),s);return u.urlParams=i,u.errorHandler=Ie(t),u}function Ne(e,t,r){var n=ye(t.fullServerUrl()),o=e.maxOperationRetryTime(),i=new Ce(n,"GET",Le(e,r),o);return i.errorHandler=je(t),i}function He(e,t,r,n){var o=ye(t.fullServerUrl()),i=Ee(r,n),a=e.maxOperationRetryTime(),s=new Ce(o,"PATCH",We(e,n),a);return s.headers={"Content-Type":"application/json; charset=utf-8"},s.body=i,s.errorHandler=je(t),s}function ze(e,t){var r=ye(t.fullServerUrl()),n=e.maxOperationRetryTime();var o=new Ce(r,"DELETE",(function(e,t){}),n);return o.successCodes=[200,204],o.errorHandler=je(t),o}function De(e,t,r){var n=Object.assign({},r);return n.fullPath=e.path,n.size=t.size(),n.contentType||(n.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),n}var Fe=function(e,t,r,n){this.current=e,this.total=t,this.finalized=!!r,this.metadata=n||null};function Ge(e,t){var r=null;try{r=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){Me(!1)}return Me(!!r&&-1!==(t||["active"]).indexOf(r)),r}function Xe(e,t,r,n,o,i,a,s){var u=new Fe(0,0);if(a?(u.current=a.current,u.total=a.total):(u.current=0,u.total=n.size()),n.size()!==u.total)throw new l(y,"Server recorded incorrect upload file size, please retry the upload.");var c=u.total-u.current,p=c;o>0&&(p=Math.min(p,o));var h=u.current,f=h+p,d={"X-Goog-Upload-Command":p===c?"upload, finalize":"upload","X-Goog-Upload-Offset":u.current},_=n.slice(h,f);if(null===_)throw A();var v=t.maxUploadRetryTime(),m=new Ce(r,"POST",(function(e,r){var o,a=Ge(e,["active","final"]),s=u.current+p,l=n.size();return o="final"===a?We(t,i)(e,r):null,new Fe(s,l,"final"===a,o)}),v);return m.headers=d,m.body=_.uploadData(),m.progressCallback=s||null,m.errorHandler=Ie(e),m}
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
 */var Ke=function(e,t,r){if(ne(e)||te(t)||te(r))this.next=e,this.error=t||null,this.complete=r||null;else{var n=e;this.next=n.next||null,this.error=n.error||null,this.complete=n.complete||null}},Ze=function(e,t,r,n,o,i){this.bytesTransferred=e,this.totalBytes=t,this.state=r,this.metadata=n,this.task=o,this.ref=i};
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
 */
function Je(e,t,r){for(var n=t.length,o=t.length,i=0;i<t.length;i++)if(t[i].optional){n=i;break}var a,s,u,c,p,h;if(!(n<=r.length&&r.length<=o))throw a=n,s=o,u=e,c=r.length,a===s?(p=a,h=1===a?"argument":"arguments"):(p="between "+a+" and "+s,h="arguments"),new l(k,"Invalid argument count in `"+u+"`: Expected "+p+" "+h+", received "+c+".");for(i=0;i<r.length;i++)try{t[i].validator(r[i])}catch(t){throw t instanceof Error?M(i,e,t.message):M(i,e,t)}}var Ve=function(e,t){var r=this;this.validator=function(t){r.optional&&!re(t)||e(t)},this.optional=!!t};function $e(e,t){function r(e){if(!ae(e))throw"Expected string."}var n,o,i;return e?(o=r,i=e,n=function(e){o(e),i(e)}):n=r,new Ve(n,t)}function Qe(){return new Ve((function(e){if(!(e instanceof Uint8Array||e instanceof ArrayBuffer||ce()&&e instanceof Blob))throw"Expected Blob or File."}))}function Ye(e){return new Ve(Oe,e)}function et(e){return new Ve(Ae,e)}function tt(){return new Ve((function(e){if(!(ue(e)&&e>=0))throw"Expected a number 0 or greater."}))}function rt(e,t){return new Ve((function(t){if(!(null===t||te(t)&&t instanceof Object))throw"Expected an Object.";null!=e&&e(t)}),t)}function nt(e){return new Ve((function(e){if(!(null===e||ne(e)))throw"Expected a Function."}),e)}
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
 */function ot(e){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];Promise.resolve().then((function(){return e.apply(void 0,t)}))}}
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
 */var it=function(){function e(e,t,r,n,o,i){var a=this;void 0===i&&(i=null),this.transferred_=0,this.needToFetchStatus_=!1,this.needToFetchMetadata_=!1,this.observers_=[],this.error_=null,this.uploadUrl_=null,this.request_=null,this.chunkMultiplier_=1,this.resolve_=null,this.reject_=null,this.ref_=e,this.authWrapper_=t,this.location_=r,this.blob_=o,this.metadata_=i,this.mappings_=n,this.resumable_=this.shouldDoResumable_(this.blob_),this.state_=X,this.errorHandler_=function(e){a.request_=null,a.chunkMultiplier_=1,e.codeEquals(v)?(a.needToFetchStatus_=!0,a.completeTransitions_()):(a.error_=e,a.transition_(Q))},this.metadataErrorHandler_=function(e){a.request_=null,e.codeEquals(v)?a.completeTransitions_():(a.error_=e,a.transition_(Q))},this.promise_=new Promise((function(e,t){a.resolve_=e,a.reject_=t,a.start_()})),this.promise_.then(null,(function(){}))}return e.prototype.makeProgressCallback_=function(){var e=this,t=this.transferred_;return function(r){return e.updateProgress_(t+r)}},e.prototype.shouldDoResumable_=function(e){return e.size()>262144},e.prototype.start_=function(){this.state_===X&&null===this.request_&&(this.resumable_?null===this.uploadUrl_?this.createResumable_():this.needToFetchStatus_?this.fetchStatus_():this.needToFetchMetadata_?this.fetchMetadata_():this.continueUpload_():this.oneShotUpload_())},e.prototype.resolveToken_=function(e){var t=this;this.authWrapper_.getAuthToken().then((function(r){switch(t.state_){case X:e(r);break;case V:t.transition_($);break;case K:t.transition_(Z)}}))},e.prototype.createResumable_=function(){var e=this;this.resolveToken_((function(t){var r=function(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a=De(t,n,o),s={name:a.fullPath},u=ye(i),l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":n.size(),"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},c=Ee(a,r),p=e.maxUploadRetryTime(),h=new Ce(u,"POST",(function(e){var t;Ge(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){Me(!1)}return Me(ae(t)),t}),p);return h.urlParams=s,h.headers=l,h.body=c,h.errorHandler=Ie(t),h}(e.authWrapper_,e.location_,e.mappings_,e.blob_,e.metadata_),n=e.authWrapper_.makeRequest(r,t);e.request_=n,n.getPromise().then((function(t){e.request_=null,e.uploadUrl_=t,e.needToFetchStatus_=!1,e.completeTransitions_()}),e.errorHandler_)}))},e.prototype.fetchStatus_=function(){var e=this,t=this.uploadUrl_;this.resolveToken_((function(r){var n=function(e,t,r,n){var o=e.maxUploadRetryTime(),i=new Ce(r,"POST",(function(e){var t=Ge(e,["active","final"]),r=null;try{r=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){Me(!1)}r||Me(!1);var o=Number(r);return Me(!isNaN(o)),new Fe(o,n.size(),"final"===t)}),o);return i.headers={"X-Goog-Upload-Command":"query"},i.errorHandler=Ie(t),i}(e.authWrapper_,e.location_,t,e.blob_),o=e.authWrapper_.makeRequest(n,r);e.request_=o,o.getPromise().then((function(t){t=t,e.request_=null,e.updateProgress_(t.current),e.needToFetchStatus_=!1,t.finalized&&(e.needToFetchMetadata_=!0),e.completeTransitions_()}),e.errorHandler_)}))},e.prototype.continueUpload_=function(){var e=this,t=262144*this.chunkMultiplier_,r=new Fe(this.transferred_,this.blob_.size()),n=this.uploadUrl_;this.resolveToken_((function(o){var i;try{i=Xe(e.location_,e.authWrapper_,n,e.blob_,t,e.mappings_,r,e.makeProgressCallback_())}catch(t){return e.error_=t,void e.transition_(Q)}var a=e.authWrapper_.makeRequest(i,o);e.request_=a,a.getPromise().then((function(t){e.increaseMultiplier_(),e.request_=null,e.updateProgress_(t.current),t.finalized?(e.metadata_=t.metadata,e.transition_(J)):e.completeTransitions_()}),e.errorHandler_)}))},e.prototype.increaseMultiplier_=function(){262144*this.chunkMultiplier_<33554432&&(this.chunkMultiplier_*=2)},e.prototype.fetchMetadata_=function(){var e=this;this.resolveToken_((function(t){var r=qe(e.authWrapper_,e.location_,e.mappings_),n=e.authWrapper_.makeRequest(r,t);e.request_=n,n.getPromise().then((function(t){e.request_=null,e.metadata_=t,e.transition_(J)}),e.metadataErrorHandler_)}))},e.prototype.oneShotUpload_=function(){var e=this;this.resolveToken_((function(t){var r=function(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"},s=function(){for(var e="",t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();a["Content-Type"]="multipart/related; boundary="+s;var u=De(t,n,o),l="--"+s+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+Ee(u,r)+"\r\n--"+s+"\r\nContent-Type: "+u.contentType+"\r\n\r\n",c="\r\n--"+s+"--",p=_e.getBlob(l,n,c);if(null===p)throw A();var h={name:u.fullPath},f=ye(i),d=e.maxUploadRetryTime(),_=new Ce(f,"POST",We(e,r),d);return _.urlParams=h,_.headers=a,_.body=p.uploadData(),_.errorHandler=Ie(t),_}(e.authWrapper_,e.location_,e.mappings_,e.blob_,e.metadata_),n=e.authWrapper_.makeRequest(r,t);e.request_=n,n.getPromise().then((function(t){e.request_=null,e.metadata_=t,e.updateProgress_(e.blob_.size()),e.transition_(J)}),e.errorHandler_)}))},e.prototype.updateProgress_=function(e){var t=this.transferred_;this.transferred_=e,this.transferred_!==t&&this.notifyObservers_()},e.prototype.transition_=function(e){if(this.state_!==e)switch(e){case V:case K:this.state_=e,null!==this.request_&&this.request_.cancel();break;case X:var t=this.state_===Z;this.state_=e,t&&(this.notifyObservers_(),this.start_());break;case Z:this.state_=e,this.notifyObservers_();break;case $:this.error_=P(),this.state_=e,this.notifyObservers_();break;case Q:case J:this.state_=e,this.notifyObservers_()}},e.prototype.completeTransitions_=function(){switch(this.state_){case K:this.transition_(Z);break;case V:this.transition_($);break;case X:this.start_()}},Object.defineProperty(e.prototype,"snapshot",{get:function(){var e=ee(this.state_);return new Ze(this.transferred_,this.blob_.size(),e,this.metadata_,this,this.ref_)},enumerable:!0,configurable:!0}),e.prototype.on=function(e,t,r,n){function o(){if(e!==G.STATE_CHANGED)throw"Expected one of the event types: ["+G.STATE_CHANGED+"]."}var i="Expected a function or an Object with one of `next`, `error`, `complete` properties.",a=nt(!0).validator,s=rt(null,!0).validator;function u(e){try{return void a(e)}catch(e){}try{if(s(e),!(re(e.next)||re(e.error)||re(e.complete)))throw"";return}catch(e){throw i}}var l=[$e(o),rt(u,!0),nt(!0),nt(!0)];Je("on",l,arguments);var c=this;function p(e){return function(t,r,o){null!==e&&Je("on",e,arguments);var i=new Ke(t,r,n);return c.addObserver_(i),function(){c.removeObserver_(i)}}}function h(e){if(null===e)throw i;u(e)}var f=[rt(h),nt(!0),nt(!0)],d=!(re(t)||re(r)||re(n));return d?p(f):p(null)(t,r,n)},e.prototype.then=function(e,t){return this.promise_.then(e,t)},e.prototype.catch=function(e){return this.then(null,e)},e.prototype.addObserver_=function(e){this.observers_.push(e),this.notifyObserver_(e)},e.prototype.removeObserver_=function(e){var t=this.observers_.indexOf(e);-1!==t&&this.observers_.splice(t,1)},e.prototype.notifyObservers_=function(){var e=this;this.finishPromise_(),this.observers_.slice().forEach((function(t){e.notifyObserver_(t)}))},e.prototype.finishPromise_=function(){if(null!==this.resolve_){var e=!0;switch(ee(this.state_)){case Y.SUCCESS:ot(this.resolve_.bind(null,this.snapshot))();break;case Y.CANCELED:case Y.ERROR:ot(this.reject_.bind(null,this.error_))();break;default:e=!1}e&&(this.resolve_=null,this.reject_=null)}},e.prototype.notifyObserver_=function(e){switch(ee(this.state_)){case Y.RUNNING:case Y.PAUSED:e.next&&ot(e.next.bind(e,this.snapshot))();break;case Y.SUCCESS:e.complete&&ot(e.complete.bind(e))();break;case Y.CANCELED:case Y.ERROR:e.error&&ot(e.error.bind(e,this.error_))();break;default:e.error&&ot(e.error.bind(e,this.error_))()}},e.prototype.resume=function(){Je("resume",[],arguments);var e=this.state_===Z||this.state_===K;return e&&this.transition_(X),e},e.prototype.pause=function(){Je("pause",[],arguments);var e=this.state_===X;return e&&this.transition_(K),e},e.prototype.cancel=function(){Je("cancel",[],arguments);var e=this.state_===X||this.state_===K;return e&&this.transition_(V),e},e}(),at=function(){function e(e,t){this.authWrapper=e,this.location=t instanceof ve?t:ve.makeFromUrl(t)}return e.prototype.toString=function(){return Je("toString",[],arguments),"gs://"+this.location.bucket+"/"+this.location.path},e.prototype.newRef=function(t,r){return new e(t,r)},e.prototype.mappings=function(){return xe()},e.prototype.child=function(e){Je("child",[$e()],arguments);var t=ge(this.location.path,e),r=new ve(this.location.bucket,t);return this.newRef(this.authWrapper,r)},Object.defineProperty(e.prototype,"parent",{get:function(){var e=function(e){if(0===e.length)return null;var t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this.location.path);if(null===e)return null;var t=new ve(this.location.bucket,e);return this.newRef(this.authWrapper,t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"root",{get:function(){var e=new ve(this.location.bucket,"");return this.newRef(this.authWrapper,e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bucket",{get:function(){return this.location.bucket},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"fullPath",{get:function(){return this.location.path},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return be(this.location.path)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"storage",{get:function(){return this.authWrapper.service()},enumerable:!0,configurable:!0}),e.prototype.put=function(e,t){return void 0===t&&(t=null),Je("put",[Qe(),Ye(!0)],arguments),this.throwIfRoot_("put"),new it(this,this.authWrapper,this.location,this.mappings(),new _e(e),t)},e.prototype.putString=function(e,t,r){void 0===t&&(t=j.RAW),Je("putString",[$e(),$e(q,!0),Ye(!0)],arguments),this.throwIfRoot_("putString");var n=N(t,e),o=Object.assign({},r);return!te(o.contentType)&&te(n.contentType)&&(o.contentType=n.contentType),new it(this,this.authWrapper,this.location,this.mappings(),new _e(n.data,!0),o)},e.prototype.delete=function(){var e=this;return Je("delete",[],arguments),this.throwIfRoot_("delete"),this.authWrapper.getAuthToken().then((function(t){var r=ze(e.authWrapper,e.location);return e.authWrapper.makeRequest(r,t).getPromise()}))},e.prototype.listAll=function(){Je("listAll",[],arguments);var e={prefixes:[],items:[]};return this.listAllHelper(e).then((function(){return e}))},e.prototype.listAllHelper=function(e,t){return i(this,void 0,void 0,(function(){var r,n,o,i;return a(this,(function(a){switch(a.label){case 0:return r={pageToken:t},[4,this.list(r)];case 1:return n=a.sent(),(o=e.prefixes).push.apply(o,n.prefixes),(i=e.items).push.apply(i,n.items),null==n.nextPageToken?[3,3]:[4,this.listAllHelper(e,n.nextPageToken)];case 2:a.sent(),a.label=3;case 3:return[2]}}))}))},e.prototype.list=function(e){Je("list",[et(!0)],arguments);var t=this;return this.authWrapper.getAuthToken().then((function(r){var n=e||{},o=Be(t.authWrapper,t.location,"/",n.pageToken,n.maxResults);return t.authWrapper.makeRequest(o,r).getPromise()}))},e.prototype.getMetadata=function(){var e=this;return Je("getMetadata",[],arguments),this.throwIfRoot_("getMetadata"),this.authWrapper.getAuthToken().then((function(t){var r=qe(e.authWrapper,e.location,e.mappings());return e.authWrapper.makeRequest(r,t).getPromise()}))},e.prototype.updateMetadata=function(e){var t=this;return Je("updateMetadata",[Ye()],arguments),this.throwIfRoot_("updateMetadata"),this.authWrapper.getAuthToken().then((function(r){var n=He(t.authWrapper,t.location,e,t.mappings());return t.authWrapper.makeRequest(n,r).getPromise()}))},e.prototype.getDownloadURL=function(){var e=this;return Je("getDownloadURL",[],arguments),this.throwIfRoot_("getDownloadURL"),this.authWrapper.getAuthToken().then((function(t){var r=Ne(e.authWrapper,e.location,e.mappings());return e.authWrapper.makeRequest(r,t).getPromise().then((function(e){if(null===e)throw C();return e}))}))},e.prototype.throwIfRoot_=function(e){if(""===this.location.path)throw function(e){return new l(x,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)},e}(),st=function(){function e(e){this.promise_=Promise.reject(e)}return e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){},e}(),ut=function(){function e(){this.map=new Map,this.id=-9007199254740991}return e.prototype.addRequest=function(e){var t=this,r=this.id;this.id++,this.map.set(r,e),e.getPromise().then((function(){return t.map.delete(r)}),(function(){return t.map.delete(r)}))},e.prototype.clear=function(){this.map.forEach((function(e){e&&e.cancel(!0)})),this.map.clear()},e}(),lt=function(){function e(t,r,n,o,i,a){var s;if(this.bucket_=null,this.appId_=null,this.deleted_=!1,this.app_=t,null!==this.app_){var u=this.app_.options;te(u)&&(this.bucket_=e.extractBucket_(u),this.appId_=null!==(s=u.appId)&&void 0!==s?s:null)}this.authProvider_=r,this.storageRefMaker_=n,this.requestMaker_=o,this.pool_=a,this.service_=i,this.maxOperationRetryTime_=12e4,this.maxUploadRetryTime_=6e5,this.requestMap_=new ut}return e.extractBucket_=function(e){var t=e.storageBucket||null;return null==t?null:ve.makeFromBucketSpec(t).bucket},e.prototype.getAuthToken=function(){var e=this.authProvider_.getImmediate({optional:!0});return e?e.getToken().then((function(e){return null!==e?e.accessToken:null}),(function(){return null})):Promise.resolve(null)},e.prototype.bucket=function(){if(this.deleted_)throw W();return this.bucket_},e.prototype.service=function(){return this.service_},e.prototype.makeStorageReference=function(e){return this.storageRefMaker_(this,e)},e.prototype.makeRequest=function(e,t){if(this.deleted_)return new st(W());var r=this.requestMaker_(e,this.appId_,t,this.pool_);return this.requestMap_.addRequest(r),r},e.prototype.deleteApp=function(){this.deleted_=!0,this.app_=null,this.requestMap_.clear()},e.prototype.maxUploadRetryTime=function(){return this.maxUploadRetryTime_},e.prototype.setMaxUploadRetryTime=function(e){this.maxUploadRetryTime_=e},e.prototype.maxOperationRetryTime=function(){return this.maxOperationRetryTime_},e.prototype.setMaxOperationRetryTime=function(e){this.maxOperationRetryTime_=e},e}();
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
 */
var ct=function(){function e(e,t,r,n,o,i,a,s,u,l,c){var p=this;this.pendingXhr_=null,this.backoffId_=null,this.resolve_=null,this.reject_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=o.slice(),this.additionalRetryCodes_=i.slice(),this.callback_=a,this.errorCallback_=s,this.progressCallback_=l,this.timeout_=u,this.pool_=c,this.promise_=new Promise((function(e,t){p.resolve_=e,p.reject_=t,p.start_()}))}return e.prototype.start_=function(){var e=this;function t(t,r){var n,o=e.resolve_,i=e.reject_,a=r.xhr;if(r.wasSuccessCode)try{var s=e.callback_(a,a.getResponseText());re(s)?o(s):o()}catch(e){i(e)}else null!==a?((n=O()).setServerResponseProp(a.getResponseText()),e.errorCallback_?i(e.errorCallback_(a,n)):i(n)):r.canceled?i(n=e.appDelete_?W():P()):i(n=new l(_,"Max retry time for operation exceeded, please try again."))}this.canceled_?t(0,new pt(!1,null,!0)):this.backoffId_=
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
 */
function(e,t,r){var n=1,o=null,i=!1,a=0;function u(){return 2===a}var l=!1;function c(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];l||(l=!0,t.apply(null,e))}function p(t){o=setTimeout((function(){o=null,e(h,u())}),t)}function h(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(!l)if(e)c.call.apply(c,s([null,e],t));else{var o,h=u()||i;if(h)c.call.apply(c,s([null,e],t));else n<64&&(n*=2),1===a?(a=2,o=0):o=1e3*(n+Math.random()),p(o)}}var f=!1;function d(e){f||(f=!0,l||(null!==o?(e||(a=2),clearTimeout(o),p(0)):e||(a=1)))}return p(0),setTimeout((function(){i=!0,d(!0)}),r),d}((function(t,r){if(r)t(!1,new pt(!1,null,!0));else{var n=e.pool_.createXhrIo();e.pendingXhr_=n,null!==e.progressCallback_&&n.addUploadProgressListener(o),n.send(e.url_,e.method_,e.body_,e.headers_).then((function(r){null!==e.progressCallback_&&r.removeUploadProgressListener(o),e.pendingXhr_=null;var n=(r=r).getErrorCode()===F.NO_ERROR,i=r.getStatus();if(n&&!e.isRetryStatusCode_(i)){var a=-1!==e.successCodes_.indexOf(i);t(!0,new pt(a,r))}else{var s=r.getErrorCode()===F.ABORT;t(!1,new pt(!1,null,s))}}))}function o(t){var r=t.loaded,n=t.lengthComputable?t.total:-1;null!==e.progressCallback_&&e.progressCallback_(r,n)}}),t,this.timeout_)},e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingXhr_&&this.pendingXhr_.abort()},e.prototype.isRetryStatusCode_=function(e){var t=e>=500&&e<600,r=-1!==[408,429].indexOf(e),n=-1!==this.additionalRetryCodes_.indexOf(e);return t||r||n},e}(),pt=function(e,t,r){this.wasSuccessCode=e,this.xhr=t,this.canceled=!!r};function ht(e,t,r,n){var i=we(e.urlParams),a=e.url+i,s=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(s,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(s,r),function(e){var t=void 0!==o.a?o.a.SDK_VERSION:"AppManager";e["X-Firebase-Storage-Version"]="webjs/"+t}(s),new ct(a,e.method,s,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,n)}
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
 */var ft,dt,_t=function(){function e(e,t,r,n){if(this.bucket_=null,this.authWrapper_=new lt(e,t,(function(e,t){return new at(e,t)}),ht,this,r),this.app_=e,null!=n)this.bucket_=ve.makeFromBucketSpec(n);else{var o=this.authWrapper_.bucket();null!=o&&(this.bucket_=new ve(o,""))}this.internals_=new vt(this)}return e.prototype.ref=function(e){function t(e){if("string"!=typeof e)throw"Path is not a string.";if(/^[A-Za-z]+:\/\//.test(e))throw"Expected child path but got a URL, use refFromURL instead."}if(Je("ref",[$e(t,!0)],arguments),null==this.bucket_)throw new Error("No Storage Bucket defined in Firebase Options.");var r=new at(this.authWrapper_,this.bucket_);return null!=e?r.child(e):r},e.prototype.refFromURL=function(e){function t(e){if("string"!=typeof e)throw"Path is not a string.";if(!/^[A-Za-z]+:\/\//.test(e))throw"Expected full URL but got a child path, use ref instead.";try{ve.makeFromUrl(e)}catch(e){throw"Expected valid full URL but got an invalid one."}}return Je("refFromURL",[$e(t,!1)],arguments),new at(this.authWrapper_,e)},Object.defineProperty(e.prototype,"maxUploadRetryTime",{get:function(){return this.authWrapper_.maxUploadRetryTime()},enumerable:!0,configurable:!0}),e.prototype.setMaxUploadRetryTime=function(e){Je("setMaxUploadRetryTime",[tt()],arguments),this.authWrapper_.setMaxUploadRetryTime(e)},e.prototype.setMaxOperationRetryTime=function(e){Je("setMaxOperationRetryTime",[tt()],arguments),this.authWrapper_.setMaxOperationRetryTime(e)},Object.defineProperty(e.prototype,"app",{get:function(){return this.app_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"INTERNAL",{get:function(){return this.internals_},enumerable:!0,configurable:!0}),e}(),vt=function(){function e(e){this.service_=e}return e.prototype.delete=function(){return this.service_.authWrapper_.deleteApp(),Promise.resolve()},e}();function mt(e,t){var r=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal");return new _t(r,n,new he,t)}ft=o.a,dt={TaskState:Y,TaskEvent:G,StringFormat:j,Storage:_t,Reference:at},ft.INTERNAL.registerComponent(new u.Component("storage",mt,"PUBLIC").setServiceProps(dt).setMultipleInstances(!0)),ft.registerVersion("@firebase/storage","0.3.33")}}]);