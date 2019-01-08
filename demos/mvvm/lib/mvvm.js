!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.MVVM=t():e.MVVM=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=5)}([function(e,t,n){"use strict";var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=r(n(2));function a(e,t){for(var n=t.split("."),r=e[n.shift()];n.length;)r=r[n.shift()];return r}t.nextTick=function(e){Promise.resolve().then(e)},t.getType=function(e){return Object.prototype.toString.call(e).toLowerCase().match(/\s(\S+?)\]/)[1]},t.each=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];for(var n in e)t(e[n],n)},t.getValueFromKey=a,t.getValueFromVM=function(e,t){return a(e,t)},t.setValueOfVM=function(e,t,n){for(var r=t.split("."),o=e;r.length>1;)o=o[r.shift()];o[r.shift()]=n},t.serializeDependences=function(e){for(var t=e.toString(),n=/this\.([a-zA-Z\d\.]+)/g,r=[],o=void 0;o=n.exec(t);)r.push(o[1]);return[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(new Set(r)))},t.disposeElement=function e(t){var n=t[o.NODE_STORE_KEY];if(n){var r=!0,a=!1,u=void 0;try{for(var c,f=n.domEventMap.values()[Symbol.iterator]();!(r=(c=f.next()).done);r=!0){var l=c.value,s=l.event,v=l.handler;t.removeEventListener(s,v)}}catch(e){a=!0,u=e}finally{try{!r&&f.return&&f.return()}finally{if(a)throw u}}n.domEventMap.clear();var d=!0,y=!1,p=void 0;try{for(var h,b=n.watcherEventMap.values()[Symbol.iterator]();!(d=(h=b.next()).done);d=!0){var m=h.value,w=m.event,O=m.handler;n.watcher.off(w,O)}}catch(e){y=!0,p=e}finally{try{!d&&b.return&&b.return()}finally{if(y)throw p}}n.watcherEventMap.clear(),n.vnode.nodeType===i.ENodeType.Element&&t.childNodes.forEach(function(t){return e(t)})}},t.getCommentByData=function e(t,n){var r=!0,o=!1,a=void 0;try{for(var u,c=t.childNodes[Symbol.iterator]();!(r=(u=c.next()).done);r=!0){var f=u.value;if(f.nodeType===i.ENodeType.Element){var l=e(f,n);if(l)return l}if(f.nodeType===i.ENodeType.Comment){var s=f;if(s.data===n)return s}}}catch(e){o=!0,a=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw a}}return null},t.nodeToVNode=function(e){var t=this,n=new i.default;if(n.nodeType=e.nodeType,n.nodeType===i.ENodeType.Element){n.tagName=e.tagName;var r=!0,o=!1,a=void 0;try{for(var u,c=e.attributes[Symbol.iterator]();!(r=(u=c.next()).done);r=!0){var f=u.value,l=f.name,s=f.value;n.attributes.set(l,s.trim())}}catch(e){o=!0,a=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw a}}return e.childNodes.forEach(function(e){var r=t.nodeToVNode(e);r&&(r.parent=n,n.children.push(r))}),n}return n.nodeType===i.ENodeType.Text?(n.textContent=e.textContent,n):null};var u=1;t.getUUID=function(){return u++}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NODE_STORE_KEY="__NODE_STORE__",t.MODEL_KEY="x-model",t.IF_KEY="x-if",t.FOR_KEY="x-for",t.FOR_KEY_UUID=t.FOR_KEY+"-uuid"},function(e,t,n){"use strict";var r,o=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.Element=1]="Element",e[e.Text=3]="Text",e[e.Comment=8]="Comment",e[e.DocumentFragment=11]="DocumentFragment"}(r=t.ENodeType||(t.ENodeType={}));var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.isRoot=!1,this.children=[],this.nodeType=r.Element,this.attributes=new Map,this.textContent=""}return i(e,[{key:"clone",value:function(){var t=new e;Object.assign(t,this),t.children=t.children.map(function(e){return e.clone()}),t.attributes=new Map;var n=!0,r=!1,i=void 0;try{for(var a,u=this.attributes[Symbol.iterator]();!(n=(a=u.next()).done);n=!0){var c=a.value,f=o(c,2),l=f[0],s=f[1];t.attributes.set(l,s)}}catch(e){r=!0,i=e}finally{try{!n&&u.return&&u.return()}finally{if(r)throw i}}return t}}]),e}();t.default=a},function(e,t,n){"use strict";var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.normal=0]="normal",e[e.once=1]="once"}(r||(r={}));var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.subscription={}}return o(e,[{key:"on",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r.normal;this.subscription[e]=this.subscription[e]||[],this.subscription[e].push({type:n,listener:t})}},{key:"once",value:function(e,t){this.on(e,t,r.once)}},{key:"off",value:function(e,t){var n=this.subscription[e]||[],r=n.findIndex(function(e){return e.listener===t});r>=0&&n.splice(r,1)}},{key:"emit",value:function(e){for(var t=this.subscription[e]||[],n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];for(var a=0;a<t.length;a++){var u=t[a];u.listener.apply(u,o),u.type!==r.normal&&(u.type===r.once&&(t.splice(a,1),a--))}}},{key:"listeners",value:function(e){return this.subscription[e]||[]}},{key:"events",get:function(){return Object.keys(this.subscription)}}]),e}();t.default=i},function(e,t,n){"use strict";var r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function o(e,t){var n=e.match(/^([^\()]+)(\((([^,\)]+,)*[^,\)]*)\))?$/),r=n[1].trim(),o=n[3]?n[3].split(",").map(function(e){return e.trim()}).filter(function(e){return e.length}):[];return{deps:o.filter(function(e){return"$event"!==e}),handler:function(e){var n,i=o.map(function(n){return"$event"===n?e:t.context.get(n)});return(n=t.vm)[r].apply(n,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(i))}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=!0,i=!1,a=void 0;try{for(var u,c=t.vnode.attributes[Symbol.iterator]();!(n=(u=c.next()).done);n=!0){var f=u.value,l=r(f,2),s=l[0],v=l[1],d=s.match(/(x-on:|@)(\S+)/);if(d){t.vnode.isRoot&&e.removeAttribute(s);var y=d[2],p=o(v,t).handler;e.addEventListener(y,p),t.domEventMap.set(y,{event:y,handler:p})}}}catch(e){i=!0,a=e}finally{try{!n&&c.return&&c.return()}finally{if(i)throw a}}},t.serializeEvent=o},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(e){return e&&e.__esModule?e:{default:e}},i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(6)),u=i(n(0)),c=o(n(7)),f=o(n(8)),l=o(n(9)),s=o(n(16)),v=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.$watcher=new f.default(n),n.$options=e,n.initialize(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.default),r(t,[{key:"initialize",value:function(){var e=this;this.$el="string"===u.getType(this.$options.el)?document.querySelector(this.$options.el):this.$options.el,this.$data=this.$options.data(),u.each(this.$data,function(t,n){Object.defineProperty(e,n,{enumerable:!0,configurable:!1,get:function(){return e.$data[n]},set:function(t){return e.$data[n]=t}})}),this.$computed=new s.default(this.$options.computed,this.$watcher,this),u.each(this.$options.computed,function(t,n){Object.defineProperty(e,n,{enumerable:!0,configurable:!1,get:function(){return e.$computed.data[n]}})}),u.each(this.$options.methods,function(t,n){e[n]=e.$options.methods[n].bind(e)}),new a.default(this.$data,this.$watcher),u.each(this.$options.watch,function(t,n){e.$watcher.on(n,t.bind(e))}),this.$compiler=new l.default(this.$el,this,this.$watcher),"function"===u.getType(this.$options.created)&&this.$options.created.call(this)}}]),t}();t.default=v},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(0)),u=["push","pop","shift","unshift","splice","sort","reverse"],c=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.data=t,this.watcher=n,this.keys=r,"object"===a.getType(t)&&this.observe()}return r(e,[{key:"observe",value:function(){var t=this,n=this.data;Object.keys(n).forEach(function(r){t.defineReactive(r),new e(n[r],t.watcher,[].concat(o(t.keys),[r]))})}},{key:"defineReactive",value:function(t){var n=this,r=this.data[t];Object.defineProperty(this.data,t,{enumerable:!0,configurable:!0,get:function(){return r},set:function(i){r!==i&&(r=i,n.watcher.updateKey([].concat(o(n.keys),[t]).join(".")),n.appendArrayHooks(t),new e(r,n.watcher,[].concat(o(n.keys),[t])))}}),this.appendArrayHooks(t)}},{key:"appendArrayHooks",value:function(e){var t=this,n=this.data[e];if("array"===a.getType(n)){var r=function(r){Object.defineProperty(n,r,{enumerable:!1,configurable:!0,get:function(){return function(){var n=t.data[e].slice(),o=n[r].apply(n,arguments);return t.data[e]=n,o}}})},o=!0,i=!1,c=void 0;try{for(var f,l=u[Symbol.iterator]();!(o=(f=l.next()).done);o=!0){r(f.value)}}catch(e){i=!0,c=e}finally{try{!o&&l.return&&l.return()}finally{if(i)throw c}}}}}]),e}();t.default=c},function(e,t,n){"use strict";var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},o=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(0)),a=o(n(3)),u=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.$nextTick=i.nextTick,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default),t}();u.nextTick=i.nextTick,t.default=u},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},i=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(0)),u=i(n(3)),c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.updateLinks=[],n.vm=e,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.default),r(t,[{key:"updateKey",value:function(e){this.updateLinks.push(e),this.notifyView()}},{key:"notifyView",value:function(){var e=this;a.nextTick(function(){if(e.updateLinks.length){0;var t=!0,n=!1,r=void 0;try{for(var o,i=e.actualLinks[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var u=o.value,c=!0,f=!1,l=void 0;try{for(var s,v=e.events[Symbol.iterator]();!(c=(s=v.next()).done);c=!0){var d=s.value;new RegExp("^"+u+"(\\.|$)").test(d)&&e.emit(d,a.getValueFromVM(e.vm,d))}}catch(e){f=!0,l=e}finally{try{!c&&v.return&&v.return()}finally{if(f)throw l}}}}catch(e){n=!0,r=e}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}e.updateLinks=[]}})}},{key:"on",value:function(e,n){var r=this;"string"==typeof e?function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"on",this).call(this,e,n):e.forEach(function(e){return r.on(e,n)})}},{key:"actualLinks",get:function(){var e=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e=e.slice(),t||e.reverse();var n=[],r=function(e){n.some(function(t){return t=t.replace(/\./g,"\\."),new RegExp("^"+t+"(\\.|$)").test(e)})||n.push(e)},o=!0,i=!1,a=void 0;try{for(var u,c=e[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){r(u.value)}}catch(e){i=!0,a=e}finally{try{!o&&c.return&&c.return()}finally{if(i)throw a}}return n},t=e(this.updateLinks);return t=e(t,!1)}}]),t}();t.default=c},function(e,t,n){"use strict";var r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=function(e){return e&&e.__esModule?e:{default:e}},a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var u=n(2),c=i(n(10)),f=a(n(0)),l=n(1),s=i(n(12)),v=i(n(4)),d=i(n(13)),y=i(n(14)),p=i(n(15)),h=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.el=t,this.vnode=f.nodeToVNode(t),this.vnode.isRoot=!0,this.vm=n,this.watcher=r,this.initialize()}return o(e,[{key:"initialize",value:function(){this.el.innerHTML="",this.buildElementNode(this.vnode)}},{key:"buildElementNode",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.isRoot?this.el:document.createElement(e.tagName.toLowerCase()),o=new c.default(e,this.vm,this.watcher);if(o.context.extend(n),r[l.NODE_STORE_KEY]=o,s.default(r,o),v.default(r,o),d.default(r,o),r=y.default(r,o,n),(r=p.default(r,o,this,n)).nodeType===u.ENodeType.Text)return r;if(r.nodeType===u.ENodeType.Element)e.children.forEach(function(e){e.nodeType===u.ENodeType.Element?r.appendChild(t.buildElementNode(e,n)):e.nodeType===u.ENodeType.Text&&r.appendChild(t.buildTextNode(e,n))});else if(r.nodeType===u.ENodeType.DocumentFragment)return r;return r}},{key:"buildTextNode",value:function(e,t){var n=document.createTextNode(e.textContent),o=new c.default(e,this.vm,this.watcher);o.context.extend(t),n[l.NODE_STORE_KEY]=o;for(var i=new Map,a=e.textContent,u=/\{\{\s*?(\S+?)\s*?\}\}/g,f=void 0,s=function(){var e=a,t=!0,o=!1,u=void 0;try{for(var c,f=i[Symbol.iterator]();!(t=(c=f.next()).done);t=!0){var l=c.value,s=r(l,2),v=s[0],d=s[1],y=v.replace(/\./g,"\\."),p=new RegExp("\\{\\{\\s*?"+y+"\\s*?}\\}","g");e=e.replace(p,d)}}catch(e){o=!0,u=e}finally{try{!t&&f.return&&f.return()}finally{if(o)throw u}}n.textContent=e};f=u.exec(a);)i.set(f[1],o.context.get(f[1]));var v=function(e){if(o.context.isExtdata(e))return"continue";var t=function(t){i.set(e,t),s()};o.watcherEventMap.set(e,{event:e,handler:t}),o.watcher.on(e,t)},d=!0,y=!1,p=void 0;try{for(var h,b=i.keys()[Symbol.iterator]();!(d=(h=b.next()).done);d=!0)v(h.value)}catch(e){y=!0,p=e}finally{try{!d&&b.return&&b.return()}finally{if(y)throw p}}return s(),n}}]),e}();t.default=h},function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}},o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(11)),a=o(n(0));t.default=function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.uuid=a.getUUID(),this.attrMap=new Map,this.domEventMap=new Map,this.watcherEventMap=new Map,this.vnode=t,this.vm=n,this.watcher=r,this.context=new i.default(n)}},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var i=o(n(0)),a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.map=new Map,this.vm=t}return r(e,[{key:"set",value:function(e,t){this.map.set(e,t)}},{key:"isExtdata",value:function(e){var t=e.split(".")[0];return this.map.has(t)}},{key:"get",value:function(e){var t=e.split(".")[0];if(this.map.has(t)){var n=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},t,this.map.get(t));return i.getValueFromKey(n,e)}return i.getValueFromVM(this.vm,e)}},{key:"extend",value:function(e){var t=this;i.each(e,function(e,n){t.set(n,e)})}}]),e}();t.default=a},function(e,t,n){"use strict";var r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(4);t.default=function(e,t){var n=function(n,r){try{e.setAttribute(n,r)}catch(e){}var i=n.match(/^(x-bind)?:(\S+)$/);if(!i)return"continue";e.removeAttribute(n);var a=i[2];if(~r.indexOf("(")){var u=o.serializeEvent(r,t),c=u.deps,f=u.handler,l=function(){e.setAttribute(a,f())};c.forEach(function(e){t.context.isExtdata(e)||(t.watcher.on(e,l),t.watcherEventMap.set(e,{event:e,handler:l}))}),l()}else{e.setAttribute(a,t.context.get(r));var s=function(t){e.setAttribute(a,t)};t.watcher.on(r,s),t.watcherEventMap.set(r,{event:r,handler:s})}},i=!0,a=!1,u=void 0;try{for(var c,f=t.vnode.attributes[Symbol.iterator]();!(i=(c=f.next()).done);i=!0){var l=c.value,s=r(l,2);n(s[0],s[1])}}catch(e){a=!0,u=e}finally{try{!i&&f.return&&f.return()}finally{if(a)throw u}}}},function(e,t,n){"use strict";var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0)),i=n(1),a=new Map([["input","input"],["textarea","input"],["select","change"]]);t.default=function(e,t){if(a.has(e.tagName.toLowerCase())){var n=Array.from(t.vnode.attributes).find(function(e){return e[0]===i.MODEL_KEY});if(n){e.removeAttribute(i.MODEL_KEY);var r=e,u=n[1],c=a.get(e.tagName.toLowerCase()),f=function(){var e=r.value;o.setValueOfVM(t.vm,u,e)};r.addEventListener(c,f),t.domEventMap.set(c,{event:c,handler:f});var l=function(e){e!==r.value&&(r.value=e)};t.watcher.on(u,function(e){e!=r.value&&(r.value=e)}),t.watcherEventMap.set(u,{event:u,handler:l}),o.nextTick(function(){return l(t.context.get(u))})}}}},function(e,t,n){"use strict";var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0)),i=n(1);t.default=function(e,t,n){if(!t.vnode.attributes.has(i.IF_KEY))return e;var r=t.vnode.attributes.get(i.IF_KEY);e.removeAttribute(i.IF_KEY);var a=document.createComment(""+i.IF_KEY+t.uuid);a[i.NODE_STORE_KEY]=t;var u=[e,a],c=function(e){if(e)return o.disposeElement(u[0]),u[0]=t.vm.$compiler.buildElementNode(t.vnode,n),void u[1].parentNode.replaceChild(u[0],u[1]);u[0].parentNode.replaceChild(u[1],u[0])};return t.context.isExtdata(r)||(t.watcher.on(r,c),t.watcherEventMap.set(r,{event:r,handler:c})),t.context.get(r)?e:u[1]}},function(e,t,n){"use strict";var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=r(n(0));t.default=function(e,t,n,r){if(!t.vnode.attributes.has(o.FOR_KEY))return e;var a=t.vnode.attributes.get(o.FOR_KEY),u=void 0,c="",f="",l="";if(u=a.match(/^\s*?([\w]*)\s*in\s*(\S*)\s*$/))l=u[2],c=u[1];else{if(!(u=a.match(/^\s*?\(\s*(\S+)\s*,\s*(\S+)\s*\)\s*in\s*(\S*)\s*$/)))throw new Error(o.FOR_KEY+" 的表达式有误");l=u[3],c=u[1],f=u[2]}var s=document.createDocumentFragment(),v=document.createComment(""+o.FOR_KEY+t.uuid);v[o.NODE_STORE_KEY]=t,s.append(v);for(var d=t.context.get(l),y=0,p=d.length;y<p;y++){var h={};h[c]=d[y],f&&(h[f]=y),h=Object.assign({},r,h);var b=t.vnode.clone();b.attributes.delete(o.FOR_KEY);var m=n.buildElementNode(b,h);m[o.FOR_KEY_UUID]=t.uuid,s.append(m)}var w=function(){for(var e=void 0;(e=v.nextElementSibling)&&e[o.FOR_KEY_UUID]===t.uuid;)i.disposeElement(e),e.parentNode.removeChild(e);i.disposeElement(v),v.parentNode.replaceChild(n.buildElementNode(t.vnode),v)};return t.context.isExtdata(l)||(t.watcher.on(l,w),t.watcherEventMap.set(l,{event:l,handler:w})),s}},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var i=o(n(0)),a=function(){function e(t,n,r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.data={},this.watcherEventMap=new Map,i.each(t||{},function(e,t){var a=i.serializeDependences(e),u=function(){var i=o.data[t],a=o.data[t]=e.call(r);i!==a&&(console.log("update computed:"+t+":"+a),n.emit(t,a))};a.forEach(function(e){n.on(e,u),o.watcherEventMap.set(e,{event:e,handler:u})}),u()})}return r(e,[{key:"dispose",value:function(){var e=!0,t=!1,n=void 0;try{for(var r,o=this.watcherEventMap.values()[Symbol.iterator]();!(e=(r=o.next()).done);e=!0){var i=r.value,a=i.event,u=i.handler;this.watcher.off(a,u)}}catch(e){t=!0,n=e}finally{try{!e&&o.return&&o.return()}finally{if(t)throw n}}this.watcherEventMap.clear()}}]),e}();t.default=a}]).default});