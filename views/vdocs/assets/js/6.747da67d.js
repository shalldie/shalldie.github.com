(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{331:function(t,e,i){},362:function(t,e,i){t.exports=function(){"use strict";var t,e=(function(t){t.exports=function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var e=function e(){t(this,e),this.offsetTop=0};function i(t){for(var e=t.offsetLeft,i=t.offsetTop;t=t.offsetParent;)e+=t.offsetLeft,i+=t.offsetTop;return{x:e,y:i}}!function(t,e){void 0===e&&(e={});var i,s,o=e.insertAt;"undefined"!=typeof document&&(i=document.head||document.getElementsByTagName("head")[0],(s=document.createElement("style")).type="text/css","top"===o&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t)))}(".scroll-affix{position:fixed}.scroll-affix-max{position:relative}");var s="scroll-affix",o="scroll-affix-max";return function(){function n(s){var o=this;t(this,n),this.status=0,this.handleScroll=function(){var t,e=o.options,s=e.el,n=e.offsetTop,r=e.maxScrollHeight,c=e.sectionSelector,a="function"==typeof r?r():r;c&&(a=i(t=document.querySelector(c)).y+t.offsetHeight);var l=document.body.scrollTop||document.documentElement.scrollTop,f=0;a&&l+n+s.offsetHeight>a?f=2:l+n>o.baseTop&&(f=1),f!==o.status&&o.updateStatus(f,a)},this.options=Object.assign({},new e,s),this.initialize()}var r;return(r=[{key:"initialize",value:function(){this.baseTop=i(this.options.el).y,window.addEventListener("scroll",this.handleScroll)}},{key:"updateStatus",value:function(t,e){this.status=t;var i=this.options,n=i.el,r=i.offsetTop;switch(t){case 0:n.classList.remove(s,o),n.style.top="auto";break;case 1:n.classList.add(s),n.classList.remove(o),n.style.top=r+"px";break;default:n.classList.remove(s),n.classList.add(o),n.style.top=e-n.offsetHeight-this.baseTop+"px"}}},{key:"dispose",value:function(){window.removeEventListener("scroll",this.handleScroll)}}])&&function(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}(n.prototype,r),n}()}()}(t={path:void 0,exports:{},require:function(e,i){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==i&&t.path)}},t.exports),t.exports),i="__scroll_affix__",s=function(t,e,i,s,o,n,r,c,a,l){"boolean"!=typeof r&&(a=c,c=r,r=!1);var f,u,d,p="function"==typeof i?i.options:i;return t&&t.render&&(p.render=t.render,p.staticRenderFns=t.staticRenderFns,p._compiled=!0,o&&(p.functional=!0)),s&&(p._scopeId=s),n?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,a(t)),t&&t._registeredComponents&&t._registeredComponents.add(n)},p._ssrRegister=f):e&&(f=r?function(t){e.call(this,l(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,c(t))}),f&&(p.functional?(u=p.render,p.render=function(t,e){return f.call(e),u(t,e)}):(d=p.beforeCreate,p.beforeCreate=d?[].concat(d,f):[f])),i}({render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._t("default")],2)},staticRenderFns:[]},void 0,{name:"v-scroll-affix",props:{offsetTop:{default:0},maxScrollHeight:{default:0},sectionSelector:{default:""}},methods:{initScrollAffix:function(){this[i]=new e({el:this.$el,offsetTop:this.offsetTop,maxScrollHeight:this.maxScrollHeight,sectionSelector:this.sectionSelector})},updateOptions:function(){Object.assign(this[i].options,this.$props)}},mounted:function(){var t=this;this.$nextTick((function(){t.initScrollAffix()}))},beforeDestroy:function(){this[i]&&(this[i].dispose(),this[i]=void 0)},watch:{$props:{deep:!0,handler:function(){this.updateOptions()}}}},void 0,!1,void 0,!1,void 0,void 0,void 0);return s.install=function(t){t.component(s.name,s)},s}()},363:function(t,e,i){"use strict";i(331)},381:function(t,e,i){"use strict";i.r(e);var s=i(362),o={components:{VScrollAffix:i.n(s).a}},n=(i(363),i(46)),r=Object(n.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"demo-v-scroll-affix"},[t._m(0),t._v(" "),t._l(4,(function(e){return i("div",{key:e,staticClass:"right-menu"},[i("VScrollAffix",{class:"v-scroll-affix affix-item-"+e,attrs:{"offset-top":100,"section-selector":".main .section"+e}},[i("ul",t._l(5,(function(s){return i("li",{key:s},[t._v("list "+t._s(e))])})),0)])],1)})),t._v(" "),i("div",{staticClass:"right-menu"},[i("VScrollAffix",{staticClass:"v-scroll-affix affix-item-5",attrs:{"offset-top":100}},[i("ul",t._l(5,(function(e){return i("li",{key:e},[t._v("no limit")])})),0)])],1)],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main"},[e("div",{staticClass:"section1"},[this._v("section1")]),this._v(" "),e("div",{staticClass:"section2"},[this._v("section2")]),this._v(" "),e("div",{staticClass:"section3"},[this._v("section3")]),this._v(" "),e("div",{staticClass:"section4"},[this._v("section4")])])}],!1,null,"7be3c1d8",null);e.default=r.exports}}]);