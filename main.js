/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t="",e={baseUrl:"https://nomoreparties.co/v1/wbf-cohort-9",headers:{authorization:"084b94ae-4c65-45f2-a87f-08bffc7ca6ad","Content-Type":"application/json"}},r=function(){return fetch("".concat(e.baseUrl,"/users/me"),{method:"GET",headers:e.headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){console.error(t)}))},n=function(t,r){return fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:t,about:r})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){console.error(t)}))},o=function(t){return fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:t})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){console.error(t)}))},i=function(){return fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){console.error(t)}))},a=function(t,r){return fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:t,link:r})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){console.error(t)}))},c=function(t){return fetch("".concat(e.baseUrl,"/cards/").concat(t),{method:"DELETE",headers:e.headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){console.error(t)}))},u=function(t){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(t),{method:"PUT",headers:e.headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){console.error(t)}))},s=function(t){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(t),{method:"DELETE",headers:e.headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){console.error(t)}))},l=function(t){t.classList.add("popup_visible"),t.classList.remove("popup_hidden"),document.addEventListener("keydown",d)},f=function(t){t.classList.add("popup_hidden"),t.classList.remove("popup_visible"),document.removeEventListener("keydown",d)},p=function(t){var e=document.querySelector(".popup_visible");t.target.classList.contains("popup")&&f(e)},d=function(t){if("Escape"===t.key){var e=document.querySelector(".popup_visible");f(e)}},h=function(t,e){e?(t.disabled=!0,t.textContent="Загрузка..."):(t.disabled=!1,t.textContent="Сохранить")};const v=t+"87ed371465c7a6a1cd01.svg",m=t+"e787eeb70bb65b7b453a.svg";function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function g(){g=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new j(o||[]);return n(a,"_invoke",{value:L(t,r,c)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f={};function p(){}function d(){}function h(){}var v={};u(v,i,(function(){return this}));var m=Object.getPrototypeOf,_=m&&m(m(q([])));_&&_!==e&&r.call(_,i)&&(v=_);var b=h.prototype=p.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(n,i,a,c){var u=l(t[n],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==y(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function q(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return d.prototype=h,n(b,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:d,configurable:!0}),d.displayName=u(h,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(x.prototype),u(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),u(b,c,"Generator"),u(b,i,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=q,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:q(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function _(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var b={ref:document.querySelector(".popup_card-view"),name:document.querySelector(".popup__card-view-name"),image:document.querySelector(".popup__card-view-image")};b.ref.addEventListener("mousedown",p);var w=document.getElementById("cardTemplate").content.querySelector(".card"),x=document.querySelector(".cards"),L=function(t){var e=t.profileId,r=t.cardId,n=t.cardName,o=t.url,i=t.likes,a=t.ownerId,c=t.onOpenCardDeletionModal,f=w.cloneNode(!0),p=f.querySelector(".card__name"),d=f.querySelector(".card__image"),h=f.querySelector(".card__like-value"),y=f.querySelector(".card__like-button"),x=f.querySelector(".card__delete-button"),L=y.querySelector(".card__like-image");p.textContent=n,d.src=o,d.alt=n,h.textContent=i.length,Boolean(i.find((function(t){return t._id===e})))&&(y.classList.toggle(".card__like-button_active"),L.src=m);var E=function(){var t,e=(t=g().mark((function t(){var e,n,o,i,a;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=y.classList.toggle(".card__like-button_active"))){t.next=9;break}return t.next=4,u(r);case 4:n=t.sent,o=n.likes,h.textContent=o.length,t.next=14;break;case 9:return t.next=11,s(r);case 11:i=t.sent,a=i.likes,h.textContent=a.length;case 14:L.src=e?m:v;case 15:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){_(i,n,o,a,c,"next",t)}function c(t){_(i,n,o,a,c,"throw",t)}a(void 0)}))});return function(){return e.apply(this,arguments)}}();return d.addEventListener("click",(function(){return function(t,e){b.name.textContent=t,b.image.src=e,b.image.alt=t,l(b.ref)}(n,o)})),y.addEventListener("click",E),a!==e?x.remove():x.addEventListener("click",(function(){return function(t){c(t,r)}(f)})),f},E={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},S=function(t){for(var e in t.inputs)if(!t.inputs[e].validity.valid){t.submitButton.classList.add(E.inactiveButtonClass),t.submitButton.disabled=!0;break}};function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function j(){j=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new S(o||[]);return n(a,"_invoke",{value:w(t,r,c)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f={};function p(){}function d(){}function h(){}var v={};u(v,i,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(q([])));y&&y!==e&&r.call(y,i)&&(v=y);var g=h.prototype=p.prototype=Object.create(v);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(n,i,a,c){var u=l(t[n],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==k(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function w(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=x(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function q(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return d.prototype=h,n(g,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:d,configurable:!0}),d.displayName=u(h,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,u(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},_(b.prototype),u(b.prototype,a,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(g),u(g,c,"Generator"),u(g,i,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=q,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:q(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function q(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function O(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){q(i,n,o,a,c,"next",t)}function c(t){q(i,n,o,a,c,"throw",t)}a(void 0)}))}}var C={id:-1,name:document.querySelector(".profile__name"),description:document.querySelector(".profile__description"),avatar:document.querySelector(".profile__avatar")},P={ref:document.querySelector(".popup_profile"),form:{ref:document.querySelector(".popup__profile-form"),inputs:{name:document.querySelector(".input__profile_name"),description:document.querySelector(".input__profile_description")},submitButton:document.querySelector(".popup__profile-form .popup__submit-button")},openButton:document.querySelector(".profile__edit-button")},B=function(){var t=O(j().mark((function t(){var e,n,o,i,a;return j().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r();case 2:e=t.sent,n=e._id,o=e.name,i=e.about,a=e.avatar,C.id=n,C.name.textContent=o,C.description.textContent=i,C.avatar.src=a;case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),N=function(){var t=P.form.inputs,e=t.name,r=t.description;e.value=C.name.textContent,r.value=C.description.textContent,S(P.form),l(P.ref)},I=function(){var t=O(j().mark((function t(e){var r,o,i,a,c,u;return j().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),r=P.form,o=r.inputs,i=r.submitButton,t.prev=2,h(i,!0),t.next=6,n(o.name.value,o.description.value);case 6:a=t.sent,c=a.name,u=a.about,C.name.textContent=c,C.description.textContent=u,f(P.ref),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),console.error(t.t0);case 17:return t.prev=17,h(i,!1),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[2,14,17,20]])})));return function(e){return t.apply(this,arguments)}}(),T={ref:document.querySelector(".popup_profile-avatar"),form:{ref:document.querySelector(".popup__profile-avatar-form"),inputs:{url:document.querySelector(".input__profile-avatar-url")},submitButton:document.querySelector(".popup__profile-avatar-form .popup__submit-button")},openButton:document.querySelector(".profile__edit-avatar-button")},G=function(){T.form.inputs.url.value=C.avatar.src,S(T.form),l(T.ref)},A=function(){var t=O(j().mark((function t(e){var r,n,i,a,c;return j().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),r=T.form,n=r.inputs,i=r.submitButton,t.prev=2,h(i,!0),t.next=6,o(n.url.value);case 6:a=t.sent,c=a.avatar,C.avatar.src=c,f(T.ref),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),console.error(t.t0);case 15:return t.prev=15,h(i,!1),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[2,12,15,18]])})));return function(e){return t.apply(this,arguments)}}(),D={ref:document.querySelector(".popup_card-deletion"),form:{ref:document.querySelector(".popup__card-deletion-form"),submitButton:document.querySelector(".popup__card-deletion-form .popup__submit-button")},cardInfo:{ref:null,id:-1}},F=function(t,e){D.cardInfo={ref:t,id:e},l(D.ref)},U=function(){var t=O(j().mark((function t(e){var r,n,o;return j().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),r=D.form,n=D.cardInfo,o=r.submitButton,t.prev=3,h(o,!0),t.next=7,c(n.id);case 7:n.ref.remove(),f(D.ref),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(3),console.error(t.t0);case 14:return t.prev=14,h(o,!1),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[3,11,14,17]])})));return function(e){return t.apply(this,arguments)}}(),M=function(){var t=O(j().mark((function t(){return j().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i();case 2:t.sent.forEach((function(t){var e=t._id,r=t.name,n=t.link,o=t.likes,i=t.owner,a=L({profileId:C.id,ownerId:i._id,cardId:e,cardName:r,url:n,likes:o,onOpenCardDeletionModal:F});x.append(a)}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Y={ref:document.querySelector(".popup_card"),form:{ref:document.querySelector(".popup__card-form"),inputs:{name:document.querySelector(".popup__card-form .input__text_type_title"),url:document.querySelector(".popup__card-form .input__text_type_link")},submitButton:document.querySelector(".popup__card-form .popup__submit-button")},openButton:document.querySelector(".profile__add-card-button")},J=function(){var t=O(j().mark((function t(e){var r,n,o,i,c,u,s,l,p,d;return j().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),r=Y.form,n=r.inputs,o=r.submitButton,t.prev=2,h(o,!0),t.next=6,a(n.name.value,n.url.value);case 6:i=t.sent,c=i._id,u=i.name,s=i.link,l=i.likes,p=i.owner,d=L({profileId:C.id,ownerId:p._id,cardId:c,cardName:u,url:s,likes:l,onOpenCardDeletionModal:F}),x.prepend(d),Y.form.ref.reset(),f(Y.ref),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(2),console.error(t.t0);case 21:return t.prev=21,h(o,!1),t.finish(21);case 24:case"end":return t.stop()}}),t,null,[[2,18,21,24]])})));return function(e){return t.apply(this,arguments)}}();B(),M(),P.openButton.addEventListener("click",N),P.form.ref.addEventListener("submit",I),P.ref.addEventListener("mousedown",p),T.openButton.addEventListener("click",G),T.form.ref.addEventListener("submit",A),T.ref.addEventListener("mousedown",p),Y.openButton.addEventListener("click",(function(){S(Y.form),l(Y.ref)})),Y.ref.addEventListener("mousedown",p),Y.form.ref.addEventListener("submit",J),D.form.ref.addEventListener("submit",U),D.ref.addEventListener("mousedown",p),document.querySelectorAll(".popup__close-button").forEach((function(t){var e=t.closest(".popup");t.addEventListener("click",(function(){return f(e)}))})),function(t){Array.from(document.querySelectorAll(t.formSelector)).forEach((function(e){e.addEventListener("submit",(function(t){t.preventDefault()})),function(t,e){var r=Array.from(t.querySelectorAll(e.inputSelector)),n=t.querySelector(e.submitButtonSelector);r.forEach((function(o){o.addEventListener("input",(function(){!function(t,e,r){e.validity.valid?function(t,e,r){var n=t.querySelector("#".concat(e.id,"-error"));e.classList.remove(r.inputErrorClass),n.classList.remove(r.errorClass),n.textContent=""}(t,e,r):function(t,e,r,n){var o=t.querySelector("#".concat(e.id,"-error"));e.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(t,e,r,e.validationMessage)}(t,o,e),function(t,e,r){!function(t){return t.some((function(t){return!t.validity.valid}))}(t)?(e.classList.remove(r.inactiveButtonClass),e.disabled=!1):(e.classList.add(r.inactiveButtonClass),e.disabled=!0)}(r,n,e)}))}))}(e,t)}))}(E)})();