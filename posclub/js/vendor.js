/*!
  * Bootstrap v5.0.2 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap=e()}(this,(function(){"use strict";const t={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter(t=>t.matches(e)),parents(t,e){const i=[];let n=t.parentNode;for(;n&&n.nodeType===Node.ELEMENT_NODE&&3!==n.nodeType;)n.matches(e)&&i.push(n),n=n.parentNode;return i},prev(t,e){let i=t.previousElementSibling;for(;i;){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling;for(;i;){if(i.matches(e))return[i];i=i.nextElementSibling}return[]}},e=t=>{do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t},i=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i="#"+i.split("#")[1]),e=i&&"#"!==i?i.trim():null}return e},n=t=>{const e=i(t);return e&&document.querySelector(e)?e:null},s=t=>{const e=i(t);return e?document.querySelector(e):null},o=t=>{t.dispatchEvent(new Event("transitionend"))},r=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),a=e=>r(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?t.findOne(e):null,l=(t,e,i)=>{Object.keys(i).forEach(n=>{const s=i[n],o=e[n],a=o&&r(o)?"element":null==(l=o)?""+l:{}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();var l;if(!new RegExp(s).test(a))throw new TypeError(`${t.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`)})},c=t=>!(!r(t)||0===t.getClientRects().length)&&"visible"===getComputedStyle(t).getPropertyValue("visibility"),h=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),d=t=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?d(t.parentNode):null},u=()=>{},f=t=>t.offsetHeight,p=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},m=[],g=()=>"rtl"===document.documentElement.dir,_=t=>{var e;e=()=>{const e=p();if(e){const i=t.NAME,n=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=n,t.jQueryInterface)}},"loading"===document.readyState?(m.length||document.addEventListener("DOMContentLoaded",()=>{m.forEach(t=>t())}),m.push(e)):e()},b=t=>{"function"==typeof t&&t()},v=(t,e,i=!0)=>{if(!i)return void b(t);const n=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const n=Number.parseFloat(e),s=Number.parseFloat(i);return n||s?(e=e.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0})(e)+5;let s=!1;const r=({target:i})=>{i===e&&(s=!0,e.removeEventListener("transitionend",r),b(t))};e.addEventListener("transitionend",r),setTimeout(()=>{s||o(e)},n)},y=(t,e,i,n)=>{let s=t.indexOf(e);if(-1===s)return t[!i&&n?t.length-1:0];const o=t.length;return s+=i?1:-1,n&&(s=(s+o)%o),t[Math.max(0,Math.min(s,o-1))]},w=/[^.]*(?=\..*)\.|.*/,E=/\..*/,A=/::\d+$/,T={};let O=1;const C={mouseenter:"mouseover",mouseleave:"mouseout"},k=/^(mouseenter|mouseleave)/i,L=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function x(t,e){return e&&`${e}::${O++}`||t.uidEvent||O++}function D(t){const e=x(t);return t.uidEvent=e,T[e]=T[e]||{},T[e]}function S(t,e,i=null){const n=Object.keys(t);for(let s=0,o=n.length;s<o;s++){const o=t[n[s]];if(o.originalHandler===e&&o.delegationSelector===i)return o}return null}function I(t,e,i){const n="string"==typeof e,s=n?i:e;let o=M(t);return L.has(o)||(o=t),[n,s,o]}function N(t,e,i,n,s){if("string"!=typeof e||!t)return;if(i||(i=n,n=null),k.test(e)){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};n?n=t(n):i=t(i)}const[o,r,a]=I(e,i,n),l=D(t),c=l[a]||(l[a]={}),h=S(c,r,o?i:null);if(h)return void(h.oneOff=h.oneOff&&s);const d=x(r,e.replace(w,"")),u=o?function(t,e,i){return function n(s){const o=t.querySelectorAll(e);for(let{target:r}=s;r&&r!==this;r=r.parentNode)for(let a=o.length;a--;)if(o[a]===r)return s.delegateTarget=r,n.oneOff&&P.off(t,s.type,e,i),i.apply(r,[s]);return null}}(t,i,n):function(t,e){return function i(n){return n.delegateTarget=t,i.oneOff&&P.off(t,n.type,e),e.apply(t,[n])}}(t,i);u.delegationSelector=o?i:null,u.originalHandler=r,u.oneOff=s,u.uidEvent=d,c[d]=u,t.addEventListener(a,u,o)}function j(t,e,i,n,s){const o=S(e[i],n,s);o&&(t.removeEventListener(i,o,Boolean(s)),delete e[i][o.uidEvent])}function M(t){return t=t.replace(E,""),C[t]||t}const P={on(t,e,i,n){N(t,e,i,n,!1)},one(t,e,i,n){N(t,e,i,n,!0)},off(t,e,i,n){if("string"!=typeof e||!t)return;const[s,o,r]=I(e,i,n),a=r!==e,l=D(t),c=e.startsWith(".");if(void 0!==o){if(!l||!l[r])return;return void j(t,l,r,o,s?i:null)}c&&Object.keys(l).forEach(i=>{!function(t,e,i,n){const s=e[i]||{};Object.keys(s).forEach(o=>{if(o.includes(n)){const n=s[o];j(t,e,i,n.originalHandler,n.delegationSelector)}})}(t,l,i,e.slice(1))});const h=l[r]||{};Object.keys(h).forEach(i=>{const n=i.replace(A,"");if(!a||e.includes(n)){const e=h[i];j(t,l,r,e.originalHandler,e.delegationSelector)}})},trigger(t,e,i){if("string"!=typeof e||!t)return null;const n=p(),s=M(e),o=e!==s,r=L.has(s);let a,l=!0,c=!0,h=!1,d=null;return o&&n&&(a=n.Event(e,i),n(t).trigger(a),l=!a.isPropagationStopped(),c=!a.isImmediatePropagationStopped(),h=a.isDefaultPrevented()),r?(d=document.createEvent("HTMLEvents"),d.initEvent(s,l,!0)):d=new CustomEvent(e,{bubbles:l,cancelable:!0}),void 0!==i&&Object.keys(i).forEach(t=>{Object.defineProperty(d,t,{get:()=>i[t]})}),h&&d.preventDefault(),c&&t.dispatchEvent(d),d.defaultPrevented&&void 0!==a&&a.preventDefault(),d}},H=new Map;var R={set(t,e,i){H.has(t)||H.set(t,new Map);const n=H.get(t);n.has(e)||0===n.size?n.set(e,i):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)},get:(t,e)=>H.has(t)&&H.get(t).get(e)||null,remove(t,e){if(!H.has(t))return;const i=H.get(t);i.delete(e),0===i.size&&H.delete(t)}};class B{constructor(t){(t=a(t))&&(this._element=t,R.set(this._element,this.constructor.DATA_KEY,this))}dispose(){R.remove(this._element,this.constructor.DATA_KEY),P.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach(t=>{this[t]=null})}_queueCallback(t,e,i=!0){v(t,e,i)}static getInstance(t){return R.get(t,this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.0.2"}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return"bs."+this.NAME}static get EVENT_KEY(){return"."+this.DATA_KEY}}class W extends B{static get NAME(){return"alert"}close(t){const e=t?this._getRootElement(t):this._element,i=this._triggerCloseEvent(e);null===i||i.defaultPrevented||this._removeElement(e)}_getRootElement(t){return s(t)||t.closest(".alert")}_triggerCloseEvent(t){return P.trigger(t,"close.bs.alert")}_removeElement(t){t.classList.remove("show");const e=t.classList.contains("fade");this._queueCallback(()=>this._destroyElement(t),t,e)}_destroyElement(t){t.remove(),P.trigger(t,"closed.bs.alert")}static jQueryInterface(t){return this.each((function(){const e=W.getOrCreateInstance(this);"close"===t&&e[t](this)}))}static handleDismiss(t){return function(e){e&&e.preventDefault(),t.close(this)}}}P.on(document,"click.bs.alert.data-api",'[data-bs-dismiss="alert"]',W.handleDismiss(new W)),_(W);class q extends B{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){const e=q.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}function z(t){return"true"===t||"false"!==t&&(t===Number(t).toString()?Number(t):""===t||"null"===t?null:t)}function $(t){return t.replace(/[A-Z]/g,t=>"-"+t.toLowerCase())}P.on(document,"click.bs.button.data-api",'[data-bs-toggle="button"]',t=>{t.preventDefault();const e=t.target.closest('[data-bs-toggle="button"]');q.getOrCreateInstance(e).toggle()}),_(q);const U={setDataAttribute(t,e,i){t.setAttribute("data-bs-"+$(e),i)},removeDataAttribute(t,e){t.removeAttribute("data-bs-"+$(e))},getDataAttributes(t){if(!t)return{};const e={};return Object.keys(t.dataset).filter(t=>t.startsWith("bs")).forEach(i=>{let n=i.replace(/^bs/,"");n=n.charAt(0).toLowerCase()+n.slice(1,n.length),e[n]=z(t.dataset[i])}),e},getDataAttribute:(t,e)=>z(t.getAttribute("data-bs-"+$(e))),offset(t){const e=t.getBoundingClientRect();return{top:e.top+document.body.scrollTop,left:e.left+document.body.scrollLeft}},position:t=>({top:t.offsetTop,left:t.offsetLeft})},F={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},V={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},K="next",X="prev",Y="left",Q="right",G={ArrowLeft:Q,ArrowRight:Y};class Z extends B{constructor(e,i){super(e),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(i),this._indicatorsElement=t.findOne(".carousel-indicators",this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return F}static get NAME(){return"carousel"}next(){this._slide(K)}nextWhenVisible(){!document.hidden&&c(this._element)&&this.next()}prev(){this._slide(X)}pause(e){e||(this._isPaused=!0),t.findOne(".carousel-item-next, .carousel-item-prev",this._element)&&(o(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(e){this._activeElement=t.findOne(".active.carousel-item",this._element);const i=this._getItemIndex(this._activeElement);if(e>this._items.length-1||e<0)return;if(this._isSliding)return void P.one(this._element,"slid.bs.carousel",()=>this.to(e));if(i===e)return this.pause(),void this.cycle();const n=e>i?K:X;this._slide(n,this._items[e])}_getConfig(t){return t={...F,...U.getDataAttributes(this._element),..."object"==typeof t?t:{}},l("carousel",t,V),t}_handleSwipe(){const t=Math.abs(this.touchDeltaX);if(t<=40)return;const e=t/this.touchDeltaX;this.touchDeltaX=0,e&&this._slide(e>0?Q:Y)}_addEventListeners(){this._config.keyboard&&P.on(this._element,"keydown.bs.carousel",t=>this._keydown(t)),"hover"===this._config.pause&&(P.on(this._element,"mouseenter.bs.carousel",t=>this.pause(t)),P.on(this._element,"mouseleave.bs.carousel",t=>this.cycle(t))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const e=t=>{!this._pointerEvent||"pen"!==t.pointerType&&"touch"!==t.pointerType?this._pointerEvent||(this.touchStartX=t.touches[0].clientX):this.touchStartX=t.clientX},i=t=>{this.touchDeltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this.touchStartX},n=t=>{!this._pointerEvent||"pen"!==t.pointerType&&"touch"!==t.pointerType||(this.touchDeltaX=t.clientX-this.touchStartX),this._handleSwipe(),"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(t=>this.cycle(t),500+this._config.interval))};t.find(".carousel-item img",this._element).forEach(t=>{P.on(t,"dragstart.bs.carousel",t=>t.preventDefault())}),this._pointerEvent?(P.on(this._element,"pointerdown.bs.carousel",t=>e(t)),P.on(this._element,"pointerup.bs.carousel",t=>n(t)),this._element.classList.add("pointer-event")):(P.on(this._element,"touchstart.bs.carousel",t=>e(t)),P.on(this._element,"touchmove.bs.carousel",t=>i(t)),P.on(this._element,"touchend.bs.carousel",t=>n(t)))}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=G[t.key];e&&(t.preventDefault(),this._slide(e))}_getItemIndex(e){return this._items=e&&e.parentNode?t.find(".carousel-item",e.parentNode):[],this._items.indexOf(e)}_getItemByOrder(t,e){const i=t===K;return y(this._items,e,i,this._config.wrap)}_triggerSlideEvent(e,i){const n=this._getItemIndex(e),s=this._getItemIndex(t.findOne(".active.carousel-item",this._element));return P.trigger(this._element,"slide.bs.carousel",{relatedTarget:e,direction:i,from:s,to:n})}_setActiveIndicatorElement(e){if(this._indicatorsElement){const i=t.findOne(".active",this._indicatorsElement);i.classList.remove("active"),i.removeAttribute("aria-current");const n=t.find("[data-bs-target]",this._indicatorsElement);for(let t=0;t<n.length;t++)if(Number.parseInt(n[t].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(e)){n[t].classList.add("active"),n[t].setAttribute("aria-current","true");break}}}_updateInterval(){const e=this._activeElement||t.findOne(".active.carousel-item",this._element);if(!e)return;const i=Number.parseInt(e.getAttribute("data-bs-interval"),10);i?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=i):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(e,i){const n=this._directionToOrder(e),s=t.findOne(".active.carousel-item",this._element),o=this._getItemIndex(s),r=i||this._getItemByOrder(n,s),a=this._getItemIndex(r),l=Boolean(this._interval),c=n===K,h=c?"carousel-item-start":"carousel-item-end",d=c?"carousel-item-next":"carousel-item-prev",u=this._orderToDirection(n);if(r&&r.classList.contains("active"))return void(this._isSliding=!1);if(this._isSliding)return;if(this._triggerSlideEvent(r,u).defaultPrevented)return;if(!s||!r)return;this._isSliding=!0,l&&this.pause(),this._setActiveIndicatorElement(r),this._activeElement=r;const p=()=>{P.trigger(this._element,"slid.bs.carousel",{relatedTarget:r,direction:u,from:o,to:a})};if(this._element.classList.contains("slide")){r.classList.add(d),f(r),s.classList.add(h),r.classList.add(h);const t=()=>{r.classList.remove(h,d),r.classList.add("active"),s.classList.remove("active",d,h),this._isSliding=!1,setTimeout(p,0)};this._queueCallback(t,s,!0)}else s.classList.remove("active"),r.classList.add("active"),this._isSliding=!1,p();l&&this.cycle()}_directionToOrder(t){return[Q,Y].includes(t)?g()?t===Y?X:K:t===Y?K:X:t}_orderToDirection(t){return[K,X].includes(t)?g()?t===X?Y:Q:t===X?Q:Y:t}static carouselInterface(t,e){const i=Z.getOrCreateInstance(t,e);let{_config:n}=i;"object"==typeof e&&(n={...n,...e});const s="string"==typeof e?e:n.slide;if("number"==typeof e)i.to(e);else if("string"==typeof s){if(void 0===i[s])throw new TypeError(`No method named "${s}"`);i[s]()}else n.interval&&n.ride&&(i.pause(),i.cycle())}static jQueryInterface(t){return this.each((function(){Z.carouselInterface(this,t)}))}static dataApiClickHandler(t){const e=s(this);if(!e||!e.classList.contains("carousel"))return;const i={...U.getDataAttributes(e),...U.getDataAttributes(this)},n=this.getAttribute("data-bs-slide-to");n&&(i.interval=!1),Z.carouselInterface(e,i),n&&Z.getInstance(e).to(n),t.preventDefault()}}P.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",Z.dataApiClickHandler),P.on(window,"load.bs.carousel.data-api",()=>{const e=t.find('[data-bs-ride="carousel"]');for(let t=0,i=e.length;t<i;t++)Z.carouselInterface(e[t],Z.getInstance(e[t]))}),_(Z);const J={toggle:!0,parent:""},tt={toggle:"boolean",parent:"(string|element)"};class et extends B{constructor(e,i){super(e),this._isTransitioning=!1,this._config=this._getConfig(i),this._triggerArray=t.find(`[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`);const s=t.find('[data-bs-toggle="collapse"]');for(let e=0,i=s.length;e<i;e++){const i=s[e],o=n(i),r=t.find(o).filter(t=>t===this._element);null!==o&&r.length&&(this._selector=o,this._triggerArray.push(i))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}static get Default(){return J}static get NAME(){return"collapse"}toggle(){this._element.classList.contains("show")?this.hide():this.show()}show(){if(this._isTransitioning||this._element.classList.contains("show"))return;let e,i;this._parent&&(e=t.find(".show, .collapsing",this._parent).filter(t=>"string"==typeof this._config.parent?t.getAttribute("data-bs-parent")===this._config.parent:t.classList.contains("collapse")),0===e.length&&(e=null));const n=t.findOne(this._selector);if(e){const t=e.find(t=>n!==t);if(i=t?et.getInstance(t):null,i&&i._isTransitioning)return}if(P.trigger(this._element,"show.bs.collapse").defaultPrevented)return;e&&e.forEach(t=>{n!==t&&et.collapseInterface(t,"hide"),i||R.set(t,"bs.collapse",null)});const s=this._getDimension();this._element.classList.remove("collapse"),this._element.classList.add("collapsing"),this._element.style[s]=0,this._triggerArray.length&&this._triggerArray.forEach(t=>{t.classList.remove("collapsed"),t.setAttribute("aria-expanded",!0)}),this.setTransitioning(!0);const o="scroll"+(s[0].toUpperCase()+s.slice(1));this._queueCallback(()=>{this._element.classList.remove("collapsing"),this._element.classList.add("collapse","show"),this._element.style[s]="",this.setTransitioning(!1),P.trigger(this._element,"shown.bs.collapse")},this._element,!0),this._element.style[s]=this._element[o]+"px"}hide(){if(this._isTransitioning||!this._element.classList.contains("show"))return;if(P.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const t=this._getDimension();this._element.style[t]=this._element.getBoundingClientRect()[t]+"px",f(this._element),this._element.classList.add("collapsing"),this._element.classList.remove("collapse","show");const e=this._triggerArray.length;if(e>0)for(let t=0;t<e;t++){const e=this._triggerArray[t],i=s(e);i&&!i.classList.contains("show")&&(e.classList.add("collapsed"),e.setAttribute("aria-expanded",!1))}this.setTransitioning(!0),this._element.style[t]="",this._queueCallback(()=>{this.setTransitioning(!1),this._element.classList.remove("collapsing"),this._element.classList.add("collapse"),P.trigger(this._element,"hidden.bs.collapse")},this._element,!0)}setTransitioning(t){this._isTransitioning=t}_getConfig(t){return(t={...J,...t}).toggle=Boolean(t.toggle),l("collapse",t,tt),t}_getDimension(){return this._element.classList.contains("width")?"width":"height"}_getParent(){let{parent:e}=this._config;e=a(e);const i=`[data-bs-toggle="collapse"][data-bs-parent="${e}"]`;return t.find(i,e).forEach(t=>{const e=s(t);this._addAriaAndCollapsedClass(e,[t])}),e}_addAriaAndCollapsedClass(t,e){if(!t||!e.length)return;const i=t.classList.contains("show");e.forEach(t=>{i?t.classList.remove("collapsed"):t.classList.add("collapsed"),t.setAttribute("aria-expanded",i)})}static collapseInterface(t,e){let i=et.getInstance(t);const n={...J,...U.getDataAttributes(t),..."object"==typeof e&&e?e:{}};if(!i&&n.toggle&&"string"==typeof e&&/show|hide/.test(e)&&(n.toggle=!1),i||(i=new et(t,n)),"string"==typeof e){if(void 0===i[e])throw new TypeError(`No method named "${e}"`);i[e]()}}static jQueryInterface(t){return this.each((function(){et.collapseInterface(this,t)}))}}P.on(document,"click.bs.collapse.data-api",'[data-bs-toggle="collapse"]',(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();const i=U.getDataAttributes(this),s=n(this);t.find(s).forEach(t=>{const e=et.getInstance(t);let n;e?(null===e._parent&&"string"==typeof i.parent&&(e._config.parent=i.parent,e._parent=e._getParent()),n="toggle"):n=i,et.collapseInterface(t,n)})})),_(et);var it="top",nt="bottom",st="right",ot="left",rt=[it,nt,st,ot],at=rt.reduce((function(t,e){return t.concat([e+"-start",e+"-end"])}),[]),lt=[].concat(rt,["auto"]).reduce((function(t,e){return t.concat([e,e+"-start",e+"-end"])}),[]),ct=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function ht(t){return t?(t.nodeName||"").toLowerCase():null}function dt(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function ut(t){return t instanceof dt(t).Element||t instanceof Element}function ft(t){return t instanceof dt(t).HTMLElement||t instanceof HTMLElement}function pt(t){return"undefined"!=typeof ShadowRoot&&(t instanceof dt(t).ShadowRoot||t instanceof ShadowRoot)}var mt={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var i=e.styles[t]||{},n=e.attributes[t]||{},s=e.elements[t];ft(s)&&ht(s)&&(Object.assign(s.style,i),Object.keys(n).forEach((function(t){var e=n[t];!1===e?s.removeAttribute(t):s.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow),function(){Object.keys(e.elements).forEach((function(t){var n=e.elements[t],s=e.attributes[t]||{},o=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:i[t]).reduce((function(t,e){return t[e]="",t}),{});ft(n)&&ht(n)&&(Object.assign(n.style,o),Object.keys(s).forEach((function(t){n.removeAttribute(t)})))}))}},requires:["computeStyles"]};function gt(t){return t.split("-")[0]}function _t(t){var e=t.getBoundingClientRect();return{width:e.width,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left,x:e.left,y:e.top}}function bt(t){var e=_t(t),i=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-i)<=1&&(i=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:i,height:n}}function vt(t,e){var i=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(i&&pt(i)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function yt(t){return dt(t).getComputedStyle(t)}function wt(t){return["table","td","th"].indexOf(ht(t))>=0}function Et(t){return((ut(t)?t.ownerDocument:t.document)||window.document).documentElement}function At(t){return"html"===ht(t)?t:t.assignedSlot||t.parentNode||(pt(t)?t.host:null)||Et(t)}function Tt(t){return ft(t)&&"fixed"!==yt(t).position?t.offsetParent:null}function Ot(t){for(var e=dt(t),i=Tt(t);i&&wt(i)&&"static"===yt(i).position;)i=Tt(i);return i&&("html"===ht(i)||"body"===ht(i)&&"static"===yt(i).position)?e:i||function(t){var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&ft(t)&&"fixed"===yt(t).position)return null;for(var i=At(t);ft(i)&&["html","body"].indexOf(ht(i))<0;){var n=yt(i);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||e&&"filter"===n.willChange||e&&n.filter&&"none"!==n.filter)return i;i=i.parentNode}return null}(t)||e}function Ct(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}var kt=Math.max,Lt=Math.min,xt=Math.round;function Dt(t,e,i){return kt(t,Lt(e,i))}function St(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function It(t,e){return e.reduce((function(e,i){return e[i]=t,e}),{})}var Nt={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,i=t.state,n=t.name,s=t.options,o=i.elements.arrow,r=i.modifiersData.popperOffsets,a=gt(i.placement),l=Ct(a),c=[ot,st].indexOf(a)>=0?"height":"width";if(o&&r){var h=function(t,e){return St("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:It(t,rt))}(s.padding,i),d=bt(o),u="y"===l?it:ot,f="y"===l?nt:st,p=i.rects.reference[c]+i.rects.reference[l]-r[l]-i.rects.popper[c],m=r[l]-i.rects.reference[l],g=Ot(o),_=g?"y"===l?g.clientHeight||0:g.clientWidth||0:0,b=p/2-m/2,v=h[u],y=_-d[c]-h[f],w=_/2-d[c]/2+b,E=Dt(v,w,y),A=l;i.modifiersData[n]=((e={})[A]=E,e.centerOffset=E-w,e)}},effect:function(t){var e=t.state,i=t.options.element,n=void 0===i?"[data-popper-arrow]":i;null!=n&&("string"!=typeof n||(n=e.elements.popper.querySelector(n)))&&vt(e.elements.popper,n)&&(e.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},jt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Mt(t){var e,i=t.popper,n=t.popperRect,s=t.placement,o=t.offsets,r=t.position,a=t.gpuAcceleration,l=t.adaptive,c=t.roundOffsets,h=!0===c?function(t){var e=t.x,i=t.y,n=window.devicePixelRatio||1;return{x:xt(xt(e*n)/n)||0,y:xt(xt(i*n)/n)||0}}(o):"function"==typeof c?c(o):o,d=h.x,u=void 0===d?0:d,f=h.y,p=void 0===f?0:f,m=o.hasOwnProperty("x"),g=o.hasOwnProperty("y"),_=ot,b=it,v=window;if(l){var y=Ot(i),w="clientHeight",E="clientWidth";y===dt(i)&&"static"!==yt(y=Et(i)).position&&(w="scrollHeight",E="scrollWidth"),y=y,s===it&&(b=nt,p-=y[w]-n.height,p*=a?1:-1),s===ot&&(_=st,u-=y[E]-n.width,u*=a?1:-1)}var A,T=Object.assign({position:r},l&&jt);return a?Object.assign({},T,((A={})[b]=g?"0":"",A[_]=m?"0":"",A.transform=(v.devicePixelRatio||1)<2?"translate("+u+"px, "+p+"px)":"translate3d("+u+"px, "+p+"px, 0)",A)):Object.assign({},T,((e={})[b]=g?p+"px":"",e[_]=m?u+"px":"",e.transform="",e))}var Pt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,i=t.options,n=i.gpuAcceleration,s=void 0===n||n,o=i.adaptive,r=void 0===o||o,a=i.roundOffsets,l=void 0===a||a,c={placement:gt(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,Mt(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:r,roundOffsets:l})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,Mt(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}},Ht={passive:!0},Rt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,i=t.instance,n=t.options,s=n.scroll,o=void 0===s||s,r=n.resize,a=void 0===r||r,l=dt(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&c.forEach((function(t){t.addEventListener("scroll",i.update,Ht)})),a&&l.addEventListener("resize",i.update,Ht),function(){o&&c.forEach((function(t){t.removeEventListener("scroll",i.update,Ht)})),a&&l.removeEventListener("resize",i.update,Ht)}},data:{}},Bt={left:"right",right:"left",bottom:"top",top:"bottom"};function Wt(t){return t.replace(/left|right|bottom|top/g,(function(t){return Bt[t]}))}var qt={start:"end",end:"start"};function zt(t){return t.replace(/start|end/g,(function(t){return qt[t]}))}function $t(t){var e=dt(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Ut(t){return _t(Et(t)).left+$t(t).scrollLeft}function Ft(t){var e=yt(t),i=e.overflow,n=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(i+s+n)}function Vt(t,e){var i;void 0===e&&(e=[]);var n=function t(e){return["html","body","#document"].indexOf(ht(e))>=0?e.ownerDocument.body:ft(e)&&Ft(e)?e:t(At(e))}(t),s=n===(null==(i=t.ownerDocument)?void 0:i.body),o=dt(n),r=s?[o].concat(o.visualViewport||[],Ft(n)?n:[]):n,a=e.concat(r);return s?a:a.concat(Vt(At(r)))}function Kt(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Xt(t,e){return"viewport"===e?Kt(function(t){var e=dt(t),i=Et(t),n=e.visualViewport,s=i.clientWidth,o=i.clientHeight,r=0,a=0;return n&&(s=n.width,o=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(r=n.offsetLeft,a=n.offsetTop)),{width:s,height:o,x:r+Ut(t),y:a}}(t)):ft(e)?function(t){var e=_t(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}(e):Kt(function(t){var e,i=Et(t),n=$t(t),s=null==(e=t.ownerDocument)?void 0:e.body,o=kt(i.scrollWidth,i.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),r=kt(i.scrollHeight,i.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-n.scrollLeft+Ut(t),l=-n.scrollTop;return"rtl"===yt(s||i).direction&&(a+=kt(i.clientWidth,s?s.clientWidth:0)-o),{width:o,height:r,x:a,y:l}}(Et(t)))}function Yt(t){return t.split("-")[1]}function Qt(t){var e,i=t.reference,n=t.element,s=t.placement,o=s?gt(s):null,r=s?Yt(s):null,a=i.x+i.width/2-n.width/2,l=i.y+i.height/2-n.height/2;switch(o){case it:e={x:a,y:i.y-n.height};break;case nt:e={x:a,y:i.y+i.height};break;case st:e={x:i.x+i.width,y:l};break;case ot:e={x:i.x-n.width,y:l};break;default:e={x:i.x,y:i.y}}var c=o?Ct(o):null;if(null!=c){var h="y"===c?"height":"width";switch(r){case"start":e[c]=e[c]-(i[h]/2-n[h]/2);break;case"end":e[c]=e[c]+(i[h]/2-n[h]/2)}}return e}function Gt(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=void 0===n?t.placement:n,o=i.boundary,r=void 0===o?"clippingParents":o,a=i.rootBoundary,l=void 0===a?"viewport":a,c=i.elementContext,h=void 0===c?"popper":c,d=i.altBoundary,u=void 0!==d&&d,f=i.padding,p=void 0===f?0:f,m=St("number"!=typeof p?p:It(p,rt)),g="popper"===h?"reference":"popper",_=t.elements.reference,b=t.rects.popper,v=t.elements[u?g:h],y=function(t,e,i){var n="clippingParents"===e?function(t){var e=Vt(At(t)),i=["absolute","fixed"].indexOf(yt(t).position)>=0&&ft(t)?Ot(t):t;return ut(i)?e.filter((function(t){return ut(t)&&vt(t,i)&&"body"!==ht(t)})):[]}(t):[].concat(e),s=[].concat(n,[i]),o=s[0],r=s.reduce((function(e,i){var n=Xt(t,i);return e.top=kt(n.top,e.top),e.right=Lt(n.right,e.right),e.bottom=Lt(n.bottom,e.bottom),e.left=kt(n.left,e.left),e}),Xt(t,o));return r.width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,r}(ut(v)?v:v.contextElement||Et(t.elements.popper),r,l),w=_t(_),E=Qt({reference:w,element:b,strategy:"absolute",placement:s}),A=Kt(Object.assign({},b,E)),T="popper"===h?A:w,O={top:y.top-T.top+m.top,bottom:T.bottom-y.bottom+m.bottom,left:y.left-T.left+m.left,right:T.right-y.right+m.right},C=t.modifiersData.offset;if("popper"===h&&C){var k=C[s];Object.keys(O).forEach((function(t){var e=[st,nt].indexOf(t)>=0?1:-1,i=[it,nt].indexOf(t)>=0?"y":"x";O[t]+=k[i]*e}))}return O}function Zt(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=i.boundary,o=i.rootBoundary,r=i.padding,a=i.flipVariations,l=i.allowedAutoPlacements,c=void 0===l?lt:l,h=Yt(n),d=h?a?at:at.filter((function(t){return Yt(t)===h})):rt,u=d.filter((function(t){return c.indexOf(t)>=0}));0===u.length&&(u=d);var f=u.reduce((function(e,i){return e[i]=Gt(t,{placement:i,boundary:s,rootBoundary:o,padding:r})[gt(i)],e}),{});return Object.keys(f).sort((function(t,e){return f[t]-f[e]}))}var Jt={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0===r||r,l=i.fallbackPlacements,c=i.padding,h=i.boundary,d=i.rootBoundary,u=i.altBoundary,f=i.flipVariations,p=void 0===f||f,m=i.allowedAutoPlacements,g=e.options.placement,_=gt(g),b=l||(_!==g&&p?function(t){if("auto"===gt(t))return[];var e=Wt(t);return[zt(t),e,zt(e)]}(g):[Wt(g)]),v=[g].concat(b).reduce((function(t,i){return t.concat("auto"===gt(i)?Zt(e,{placement:i,boundary:h,rootBoundary:d,padding:c,flipVariations:p,allowedAutoPlacements:m}):i)}),[]),y=e.rects.reference,w=e.rects.popper,E=new Map,A=!0,T=v[0],O=0;O<v.length;O++){var C=v[O],k=gt(C),L="start"===Yt(C),x=[it,nt].indexOf(k)>=0,D=x?"width":"height",S=Gt(e,{placement:C,boundary:h,rootBoundary:d,altBoundary:u,padding:c}),I=x?L?st:ot:L?nt:it;y[D]>w[D]&&(I=Wt(I));var N=Wt(I),j=[];if(o&&j.push(S[k]<=0),a&&j.push(S[I]<=0,S[N]<=0),j.every((function(t){return t}))){T=C,A=!1;break}E.set(C,j)}if(A)for(var M=function(t){var e=v.find((function(e){var i=E.get(e);if(i)return i.slice(0,t).every((function(t){return t}))}));if(e)return T=e,"break"},P=p?3:1;P>0&&"break"!==M(P);P--);e.placement!==T&&(e.modifiersData[n]._skip=!0,e.placement=T,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function te(t,e,i){return void 0===i&&(i={x:0,y:0}),{top:t.top-e.height-i.y,right:t.right-e.width+i.x,bottom:t.bottom-e.height+i.y,left:t.left-e.width-i.x}}function ee(t){return[it,st,nt,ot].some((function(e){return t[e]>=0}))}var ie={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,i=t.name,n=e.rects.reference,s=e.rects.popper,o=e.modifiersData.preventOverflow,r=Gt(e,{elementContext:"reference"}),a=Gt(e,{altBoundary:!0}),l=te(r,n),c=te(a,s,o),h=ee(l),d=ee(c);e.modifiersData[i]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:h,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":d})}},ne={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.offset,o=void 0===s?[0,0]:s,r=lt.reduce((function(t,i){return t[i]=function(t,e,i){var n=gt(t),s=[ot,it].indexOf(n)>=0?-1:1,o="function"==typeof i?i(Object.assign({},e,{placement:t})):i,r=o[0],a=o[1];return r=r||0,a=(a||0)*s,[ot,st].indexOf(n)>=0?{x:a,y:r}:{x:r,y:a}}(i,e.rects,o),t}),{}),a=r[e.placement],l=a.x,c=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=r}},se={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,i=t.name;e.modifiersData[i]=Qt({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},oe={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0!==r&&r,l=i.boundary,c=i.rootBoundary,h=i.altBoundary,d=i.padding,u=i.tether,f=void 0===u||u,p=i.tetherOffset,m=void 0===p?0:p,g=Gt(e,{boundary:l,rootBoundary:c,padding:d,altBoundary:h}),_=gt(e.placement),b=Yt(e.placement),v=!b,y=Ct(_),w="x"===y?"y":"x",E=e.modifiersData.popperOffsets,A=e.rects.reference,T=e.rects.popper,O="function"==typeof m?m(Object.assign({},e.rects,{placement:e.placement})):m,C={x:0,y:0};if(E){if(o||a){var k="y"===y?it:ot,L="y"===y?nt:st,x="y"===y?"height":"width",D=E[y],S=E[y]+g[k],I=E[y]-g[L],N=f?-T[x]/2:0,j="start"===b?A[x]:T[x],M="start"===b?-T[x]:-A[x],P=e.elements.arrow,H=f&&P?bt(P):{width:0,height:0},R=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},B=R[k],W=R[L],q=Dt(0,A[x],H[x]),z=v?A[x]/2-N-q-B-O:j-q-B-O,$=v?-A[x]/2+N+q+W+O:M+q+W+O,U=e.elements.arrow&&Ot(e.elements.arrow),F=U?"y"===y?U.clientTop||0:U.clientLeft||0:0,V=e.modifiersData.offset?e.modifiersData.offset[e.placement][y]:0,K=E[y]+z-V-F,X=E[y]+$-V;if(o){var Y=Dt(f?Lt(S,K):S,D,f?kt(I,X):I);E[y]=Y,C[y]=Y-D}if(a){var Q="x"===y?it:ot,G="x"===y?nt:st,Z=E[w],J=Z+g[Q],tt=Z-g[G],et=Dt(f?Lt(J,K):J,Z,f?kt(tt,X):tt);E[w]=et,C[w]=et-Z}}e.modifiersData[n]=C}},requiresIfExists:["offset"]};function re(t,e,i){void 0===i&&(i=!1);var n,s,o=Et(e),r=_t(t),a=ft(e),l={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(a||!a&&!i)&&(("body"!==ht(e)||Ft(o))&&(l=(n=e)!==dt(n)&&ft(n)?{scrollLeft:(s=n).scrollLeft,scrollTop:s.scrollTop}:$t(n)),ft(e)?((c=_t(e)).x+=e.clientLeft,c.y+=e.clientTop):o&&(c.x=Ut(o))),{x:r.left+l.scrollLeft-c.x,y:r.top+l.scrollTop-c.y,width:r.width,height:r.height}}var ae={placement:"bottom",modifiers:[],strategy:"absolute"};function le(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function ce(t){void 0===t&&(t={});var e=t,i=e.defaultModifiers,n=void 0===i?[]:i,s=e.defaultOptions,o=void 0===s?ae:s;return function(t,e,i){void 0===i&&(i=o);var s,r,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},ae,o),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},l=[],c=!1,h={state:a,setOptions:function(i){d(),a.options=Object.assign({},o,a.options,i),a.scrollParents={reference:ut(t)?Vt(t):t.contextElement?Vt(t.contextElement):[],popper:Vt(e)};var s,r,c=function(t){var e=function(t){var e=new Map,i=new Set,n=[];return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){i.has(t.name)||function t(s){i.add(s.name),[].concat(s.requires||[],s.requiresIfExists||[]).forEach((function(n){if(!i.has(n)){var s=e.get(n);s&&t(s)}})),n.push(s)}(t)})),n}(t);return ct.reduce((function(t,i){return t.concat(e.filter((function(t){return t.phase===i})))}),[])}((s=[].concat(n,a.options.modifiers),r=s.reduce((function(t,e){var i=t[e.name];return t[e.name]=i?Object.assign({},i,e,{options:Object.assign({},i.options,e.options),data:Object.assign({},i.data,e.data)}):e,t}),{}),Object.keys(r).map((function(t){return r[t]}))));return a.orderedModifiers=c.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,i=t.options,n=void 0===i?{}:i,s=t.effect;if("function"==typeof s){var o=s({state:a,name:e,instance:h,options:n});l.push(o||function(){})}})),h.update()},forceUpdate:function(){if(!c){var t=a.elements,e=t.reference,i=t.popper;if(le(e,i)){a.rects={reference:re(e,Ot(i),"fixed"===a.options.strategy),popper:bt(i)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var n=0;n<a.orderedModifiers.length;n++)if(!0!==a.reset){var s=a.orderedModifiers[n],o=s.fn,r=s.options,l=void 0===r?{}:r,d=s.name;"function"==typeof o&&(a=o({state:a,options:l,name:d,instance:h})||a)}else a.reset=!1,n=-1}}},update:(s=function(){return new Promise((function(t){h.forceUpdate(),t(a)}))},function(){return r||(r=new Promise((function(t){Promise.resolve().then((function(){r=void 0,t(s())}))}))),r}),destroy:function(){d(),c=!0}};if(!le(t,e))return h;function d(){l.forEach((function(t){return t()})),l=[]}return h.setOptions(i).then((function(t){!c&&i.onFirstUpdate&&i.onFirstUpdate(t)})),h}}var he=ce(),de=ce({defaultModifiers:[Rt,se,Pt,mt]}),ue=ce({defaultModifiers:[Rt,se,Pt,mt,ne,Jt,oe,Nt,ie]}),fe=Object.freeze({__proto__:null,popperGenerator:ce,detectOverflow:Gt,createPopperBase:he,createPopper:ue,createPopperLite:de,top:it,bottom:nt,right:st,left:ot,auto:"auto",basePlacements:rt,start:"start",end:"end",clippingParents:"clippingParents",viewport:"viewport",popper:"popper",reference:"reference",variationPlacements:at,placements:lt,beforeRead:"beforeRead",read:"read",afterRead:"afterRead",beforeMain:"beforeMain",main:"main",afterMain:"afterMain",beforeWrite:"beforeWrite",write:"write",afterWrite:"afterWrite",modifierPhases:ct,applyStyles:mt,arrow:Nt,computeStyles:Pt,eventListeners:Rt,flip:Jt,hide:ie,offset:ne,popperOffsets:se,preventOverflow:oe});const pe=new RegExp("ArrowUp|ArrowDown|Escape"),me=g()?"top-end":"top-start",ge=g()?"top-start":"top-end",_e=g()?"bottom-end":"bottom-start",be=g()?"bottom-start":"bottom-end",ve=g()?"left-start":"right-start",ye=g()?"right-start":"left-start",we={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},Ee={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class Ae extends B{constructor(t,e){super(t),this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}static get Default(){return we}static get DefaultType(){return Ee}static get NAME(){return"dropdown"}toggle(){h(this._element)||(this._element.classList.contains("show")?this.hide():this.show())}show(){if(h(this._element)||this._menu.classList.contains("show"))return;const t=Ae.getParentFromElement(this._element),e={relatedTarget:this._element};if(!P.trigger(this._element,"show.bs.dropdown",e).defaultPrevented){if(this._inNavbar)U.setDataAttribute(this._menu,"popper","none");else{if(void 0===fe)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;"parent"===this._config.reference?e=t:r(this._config.reference)?e=a(this._config.reference):"object"==typeof this._config.reference&&(e=this._config.reference);const i=this._getPopperConfig(),n=i.modifiers.find(t=>"applyStyles"===t.name&&!1===t.enabled);this._popper=ue(e,this._menu,i),n&&U.setDataAttribute(this._menu,"popper","static")}"ontouchstart"in document.documentElement&&!t.closest(".navbar-nav")&&[].concat(...document.body.children).forEach(t=>P.on(t,"mouseover",u)),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.toggle("show"),this._element.classList.toggle("show"),P.trigger(this._element,"shown.bs.dropdown",e)}}hide(){if(h(this._element)||!this._menu.classList.contains("show"))return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_addEventListeners(){P.on(this._element,"click.bs.dropdown",t=>{t.preventDefault(),this.toggle()})}_completeHide(t){P.trigger(this._element,"hide.bs.dropdown",t).defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(t=>P.off(t,"mouseover",u)),this._popper&&this._popper.destroy(),this._menu.classList.remove("show"),this._element.classList.remove("show"),this._element.setAttribute("aria-expanded","false"),U.removeDataAttribute(this._menu,"popper"),P.trigger(this._element,"hidden.bs.dropdown",t))}_getConfig(t){if(t={...this.constructor.Default,...U.getDataAttributes(this._element),...t},l("dropdown",t,this.constructor.DefaultType),"object"==typeof t.reference&&!r(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError("dropdown".toUpperCase()+': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');return t}_getMenuElement(){return t.next(this._element,".dropdown-menu")[0]}_getPlacement(){const t=this._element.parentNode;if(t.classList.contains("dropend"))return ve;if(t.classList.contains("dropstart"))return ye;const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?ge:me:e?be:_e}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map(t=>Number.parseInt(t,10)):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,..."function"==typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_selectMenuItem({key:e,target:i}){const n=t.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(c);n.length&&y(n,i,"ArrowDown"===e,!n.includes(i)).focus()}static dropdownInterface(t,e){const i=Ae.getOrCreateInstance(t,e);if("string"==typeof e){if(void 0===i[e])throw new TypeError(`No method named "${e}"`);i[e]()}}static jQueryInterface(t){return this.each((function(){Ae.dropdownInterface(this,t)}))}static clearMenus(e){if(e&&(2===e.button||"keyup"===e.type&&"Tab"!==e.key))return;const i=t.find('[data-bs-toggle="dropdown"]');for(let t=0,n=i.length;t<n;t++){const n=Ae.getInstance(i[t]);if(!n||!1===n._config.autoClose)continue;if(!n._element.classList.contains("show"))continue;const s={relatedTarget:n._element};if(e){const t=e.composedPath(),i=t.includes(n._menu);if(t.includes(n._element)||"inside"===n._config.autoClose&&!i||"outside"===n._config.autoClose&&i)continue;if(n._menu.contains(e.target)&&("keyup"===e.type&&"Tab"===e.key||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;"click"===e.type&&(s.clickEvent=e)}n._completeHide(s)}}static getParentFromElement(t){return s(t)||t.parentNode}static dataApiKeydownHandler(e){if(/input|textarea/i.test(e.target.tagName)?"Space"===e.key||"Escape"!==e.key&&("ArrowDown"!==e.key&&"ArrowUp"!==e.key||e.target.closest(".dropdown-menu")):!pe.test(e.key))return;const i=this.classList.contains("show");if(!i&&"Escape"===e.key)return;if(e.preventDefault(),e.stopPropagation(),h(this))return;const n=()=>this.matches('[data-bs-toggle="dropdown"]')?this:t.prev(this,'[data-bs-toggle="dropdown"]')[0];return"Escape"===e.key?(n().focus(),void Ae.clearMenus()):"ArrowUp"===e.key||"ArrowDown"===e.key?(i||n().click(),void Ae.getInstance(n())._selectMenuItem(e)):void(i&&"Space"!==e.key||Ae.clearMenus())}}P.on(document,"keydown.bs.dropdown.data-api",'[data-bs-toggle="dropdown"]',Ae.dataApiKeydownHandler),P.on(document,"keydown.bs.dropdown.data-api",".dropdown-menu",Ae.dataApiKeydownHandler),P.on(document,"click.bs.dropdown.data-api",Ae.clearMenus),P.on(document,"keyup.bs.dropdown.data-api",Ae.clearMenus),P.on(document,"click.bs.dropdown.data-api",'[data-bs-toggle="dropdown"]',(function(t){t.preventDefault(),Ae.dropdownInterface(this)})),_(Ae);class Te{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",e=>e+t),this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top","paddingRight",e=>e+t),this._setElementAttributes(".sticky-top","marginRight",e=>e-t)}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const n=this.getWidth();this._applyManipulationCallback(t,t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+n)return;this._saveInitialAttribute(t,e);const s=window.getComputedStyle(t)[e];t.style[e]=i(Number.parseFloat(s))+"px"})}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top","paddingRight"),this._resetElementAttributes(".sticky-top","marginRight")}_saveInitialAttribute(t,e){const i=t.style[e];i&&U.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,t=>{const i=U.getDataAttribute(t,e);void 0===i?t.style.removeProperty(e):(U.removeDataAttribute(t,e),t.style[e]=i)})}_applyManipulationCallback(e,i){r(e)?i(e):t.find(e,this._element).forEach(i)}isOverflowing(){return this.getWidth()>0}}const Oe={isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},Ce={isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"};class ke{constructor(t){this._config=this._getConfig(t),this._isAppended=!1,this._element=null}show(t){this._config.isVisible?(this._append(),this._config.isAnimated&&f(this._getElement()),this._getElement().classList.add("show"),this._emulateAnimation(()=>{b(t)})):b(t)}hide(t){this._config.isVisible?(this._getElement().classList.remove("show"),this._emulateAnimation(()=>{this.dispose(),b(t)})):b(t)}_getElement(){if(!this._element){const t=document.createElement("div");t.className="modal-backdrop",this._config.isAnimated&&t.classList.add("fade"),this._element=t}return this._element}_getConfig(t){return(t={...Oe,..."object"==typeof t?t:{}}).rootElement=a(t.rootElement),l("backdrop",t,Ce),t}_append(){this._isAppended||(this._config.rootElement.appendChild(this._getElement()),P.on(this._getElement(),"mousedown.bs.backdrop",()=>{b(this._config.clickCallback)}),this._isAppended=!0)}dispose(){this._isAppended&&(P.off(this._element,"mousedown.bs.backdrop"),this._element.remove(),this._isAppended=!1)}_emulateAnimation(t){v(t,this._getElement(),this._config.isAnimated)}}const Le={backdrop:!0,keyboard:!0,focus:!0},xe={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"};class De extends B{constructor(e,i){super(e),this._config=this._getConfig(i),this._dialog=t.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollBar=new Te}static get Default(){return Le}static get NAME(){return"modal"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||P.trigger(this._element,"show.bs.modal",{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add("modal-open"),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),P.on(this._element,"click.dismiss.bs.modal",'[data-bs-dismiss="modal"]',t=>this.hide(t)),P.on(this._dialog,"mousedown.dismiss.bs.modal",()=>{P.one(this._element,"mouseup.dismiss.bs.modal",t=>{t.target===this._element&&(this._ignoreBackdropClick=!0)})}),this._showBackdrop(()=>this._showElement(t)))}hide(t){if(t&&["A","AREA"].includes(t.target.tagName)&&t.preventDefault(),!this._isShown||this._isTransitioning)return;if(P.trigger(this._element,"hide.bs.modal").defaultPrevented)return;this._isShown=!1;const e=this._isAnimated();e&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),P.off(document,"focusin.bs.modal"),this._element.classList.remove("show"),P.off(this._element,"click.dismiss.bs.modal"),P.off(this._dialog,"mousedown.dismiss.bs.modal"),this._queueCallback(()=>this._hideModal(),this._element,e)}dispose(){[window,this._dialog].forEach(t=>P.off(t,".bs.modal")),this._backdrop.dispose(),super.dispose(),P.off(document,"focusin.bs.modal")}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new ke({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_getConfig(t){return t={...Le,...U.getDataAttributes(this._element),..."object"==typeof t?t:{}},l("modal",t,xe),t}_showElement(e){const i=this._isAnimated(),n=t.findOne(".modal-body",this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,n&&(n.scrollTop=0),i&&f(this._element),this._element.classList.add("show"),this._config.focus&&this._enforceFocus(),this._queueCallback(()=>{this._config.focus&&this._element.focus(),this._isTransitioning=!1,P.trigger(this._element,"shown.bs.modal",{relatedTarget:e})},this._dialog,i)}_enforceFocus(){P.off(document,"focusin.bs.modal"),P.on(document,"focusin.bs.modal",t=>{document===t.target||this._element===t.target||this._element.contains(t.target)||this._element.focus()})}_setEscapeEvent(){this._isShown?P.on(this._element,"keydown.dismiss.bs.modal",t=>{this._config.keyboard&&"Escape"===t.key?(t.preventDefault(),this.hide()):this._config.keyboard||"Escape"!==t.key||this._triggerBackdropTransition()}):P.off(this._element,"keydown.dismiss.bs.modal")}_setResizeEvent(){this._isShown?P.on(window,"resize.bs.modal",()=>this._adjustDialog()):P.off(window,"resize.bs.modal")}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove("modal-open"),this._resetAdjustments(),this._scrollBar.reset(),P.trigger(this._element,"hidden.bs.modal")})}_showBackdrop(t){P.on(this._element,"click.dismiss.bs.modal",t=>{this._ignoreBackdropClick?this._ignoreBackdropClick=!1:t.target===t.currentTarget&&(!0===this._config.backdrop?this.hide():"static"===this._config.backdrop&&this._triggerBackdropTransition())}),this._backdrop.show(t)}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(P.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented)return;const{classList:t,scrollHeight:e,style:i}=this._element,n=e>document.documentElement.clientHeight;!n&&"hidden"===i.overflowY||t.contains("modal-static")||(n||(i.overflowY="hidden"),t.add("modal-static"),this._queueCallback(()=>{t.remove("modal-static"),n||this._queueCallback(()=>{i.overflowY=""},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;(!i&&t&&!g()||i&&!t&&g())&&(this._element.style.paddingLeft=e+"px"),(i&&!t&&!g()||!i&&t&&g())&&(this._element.style.paddingRight=e+"px")}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=De.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}P.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',(function(t){const e=s(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),P.one(e,"show.bs.modal",t=>{t.defaultPrevented||P.one(e,"hidden.bs.modal",()=>{c(this)&&this.focus()})}),De.getOrCreateInstance(e).toggle(this)})),_(De);const Se={backdrop:!0,keyboard:!0,scroll:!1},Ie={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"};class Ne extends B{constructor(t,e){super(t),this._config=this._getConfig(e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._addEventListeners()}static get NAME(){return"offcanvas"}static get Default(){return Se}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||P.trigger(this._element,"show.bs.offcanvas",{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||((new Te).hide(),this._enforceFocusOnElement(this._element)),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add("show"),this._queueCallback(()=>{P.trigger(this._element,"shown.bs.offcanvas",{relatedTarget:t})},this._element,!0))}hide(){this._isShown&&(P.trigger(this._element,"hide.bs.offcanvas").defaultPrevented||(P.off(document,"focusin.bs.offcanvas"),this._element.blur(),this._isShown=!1,this._element.classList.remove("show"),this._backdrop.hide(),this._queueCallback(()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||(new Te).reset(),P.trigger(this._element,"hidden.bs.offcanvas")},this._element,!0)))}dispose(){this._backdrop.dispose(),super.dispose(),P.off(document,"focusin.bs.offcanvas")}_getConfig(t){return t={...Se,...U.getDataAttributes(this._element),..."object"==typeof t?t:{}},l("offcanvas",t,Ie),t}_initializeBackDrop(){return new ke({isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_enforceFocusOnElement(t){P.off(document,"focusin.bs.offcanvas"),P.on(document,"focusin.bs.offcanvas",e=>{document===e.target||t===e.target||t.contains(e.target)||t.focus()}),t.focus()}_addEventListeners(){P.on(this._element,"click.dismiss.bs.offcanvas",'[data-bs-dismiss="offcanvas"]',()=>this.hide()),P.on(this._element,"keydown.dismiss.bs.offcanvas",t=>{this._config.keyboard&&"Escape"===t.key&&this.hide()})}static jQueryInterface(t){return this.each((function(){const e=Ne.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}P.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',(function(e){const i=s(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),h(this))return;P.one(i,"hidden.bs.offcanvas",()=>{c(this)&&this.focus()});const n=t.findOne(".offcanvas.show");n&&n!==i&&Ne.getInstance(n).hide(),Ne.getOrCreateInstance(i).toggle(this)})),P.on(window,"load.bs.offcanvas.data-api",()=>t.find(".offcanvas.show").forEach(t=>Ne.getOrCreateInstance(t).show())),_(Ne);const je=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Me=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,Pe=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,He=(t,e)=>{const i=t.nodeName.toLowerCase();if(e.includes(i))return!je.has(i)||Boolean(Me.test(t.nodeValue)||Pe.test(t.nodeValue));const n=e.filter(t=>t instanceof RegExp);for(let t=0,e=n.length;t<e;t++)if(n[t].test(i))return!0;return!1};function Re(t,e,i){if(!t.length)return t;if(i&&"function"==typeof i)return i(t);const n=(new window.DOMParser).parseFromString(t,"text/html"),s=Object.keys(e),o=[].concat(...n.body.querySelectorAll("*"));for(let t=0,i=o.length;t<i;t++){const i=o[t],n=i.nodeName.toLowerCase();if(!s.includes(n)){i.remove();continue}const r=[].concat(...i.attributes),a=[].concat(e["*"]||[],e[n]||[]);r.forEach(t=>{He(t,a)||i.removeAttribute(t.nodeName)})}return n.body.innerHTML}const Be=new RegExp("(^|\\s)bs-tooltip\\S+","g"),We=new Set(["sanitize","allowList","sanitizeFn"]),qe={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},ze={AUTO:"auto",TOP:"top",RIGHT:g()?"left":"right",BOTTOM:"bottom",LEFT:g()?"right":"left"},$e={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:{"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},popperConfig:null},Ue={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"};class Fe extends B{constructor(t,e){if(void 0===fe)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this._config=this._getConfig(e),this.tip=null,this._setListeners()}static get Default(){return $e}static get NAME(){return"tooltip"}static get Event(){return Ue}static get DefaultType(){return qe}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(t){if(this._isEnabled)if(t){const e=this._initializeOnDelegatedTarget(t);e._activeTrigger.click=!e._activeTrigger.click,e._isWithActiveTrigger()?e._enter(null,e):e._leave(null,e)}else{if(this.getTipElement().classList.contains("show"))return void this._leave(null,this);this._enter(null,this)}}dispose(){clearTimeout(this._timeout),P.off(this._element.closest(".modal"),"hide.bs.modal",this._hideModalHandler),this.tip&&this.tip.remove(),this._popper&&this._popper.destroy(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this.isWithContent()||!this._isEnabled)return;const t=P.trigger(this._element,this.constructor.Event.SHOW),i=d(this._element),n=null===i?this._element.ownerDocument.documentElement.contains(this._element):i.contains(this._element);if(t.defaultPrevented||!n)return;const s=this.getTipElement(),o=e(this.constructor.NAME);s.setAttribute("id",o),this._element.setAttribute("aria-describedby",o),this.setContent(),this._config.animation&&s.classList.add("fade");const r="function"==typeof this._config.placement?this._config.placement.call(this,s,this._element):this._config.placement,a=this._getAttachment(r);this._addAttachmentClass(a);const{container:l}=this._config;R.set(s,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(l.appendChild(s),P.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=ue(this._element,s,this._getPopperConfig(a)),s.classList.add("show");const c="function"==typeof this._config.customClass?this._config.customClass():this._config.customClass;c&&s.classList.add(...c.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(t=>{P.on(t,"mouseover",u)});const h=this.tip.classList.contains("fade");this._queueCallback(()=>{const t=this._hoverState;this._hoverState=null,P.trigger(this._element,this.constructor.Event.SHOWN),"out"===t&&this._leave(null,this)},this.tip,h)}hide(){if(!this._popper)return;const t=this.getTipElement();if(P.trigger(this._element,this.constructor.Event.HIDE).defaultPrevented)return;t.classList.remove("show"),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(t=>P.off(t,"mouseover",u)),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1;const e=this.tip.classList.contains("fade");this._queueCallback(()=>{this._isWithActiveTrigger()||("show"!==this._hoverState&&t.remove(),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),P.trigger(this._element,this.constructor.Event.HIDDEN),this._popper&&(this._popper.destroy(),this._popper=null))},this.tip,e),this._hoverState=""}update(){null!==this._popper&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const t=document.createElement("div");return t.innerHTML=this._config.template,this.tip=t.children[0],this.tip}setContent(){const e=this.getTipElement();this.setElementContent(t.findOne(".tooltip-inner",e),this.getTitle()),e.classList.remove("fade","show")}setElementContent(t,e){if(null!==t)return r(e)?(e=a(e),void(this._config.html?e.parentNode!==t&&(t.innerHTML="",t.appendChild(e)):t.textContent=e.textContent)):void(this._config.html?(this._config.sanitize&&(e=Re(e,this._config.allowList,this._config.sanitizeFn)),t.innerHTML=e):t.textContent=e)}getTitle(){let t=this._element.getAttribute("data-bs-original-title");return t||(t="function"==typeof this._config.title?this._config.title.call(this._element):this._config.title),t}updateAttachment(t){return"right"===t?"end":"left"===t?"start":t}_initializeOnDelegatedTarget(t,e){const i=this.constructor.DATA_KEY;return(e=e||R.get(t.delegateTarget,i))||(e=new this.constructor(t.delegateTarget,this._getDelegateConfig()),R.set(t.delegateTarget,i,e)),e}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map(t=>Number.parseInt(t,10)):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:t=>this._handlePopperPlacementChange(t)}],onFirstUpdate:t=>{t.options.placement!==t.placement&&this._handlePopperPlacementChange(t)}};return{...e,..."function"==typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_addAttachmentClass(t){this.getTipElement().classList.add("bs-tooltip-"+this.updateAttachment(t))}_getAttachment(t){return ze[t.toUpperCase()]}_setListeners(){this._config.trigger.split(" ").forEach(t=>{if("click"===t)P.on(this._element,this.constructor.Event.CLICK,this._config.selector,t=>this.toggle(t));else if("manual"!==t){const e="hover"===t?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,i="hover"===t?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;P.on(this._element,e,this._config.selector,t=>this._enter(t)),P.on(this._element,i,this._config.selector,t=>this._leave(t))}}),this._hideModalHandler=()=>{this._element&&this.hide()},P.on(this._element.closest(".modal"),"hide.bs.modal",this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const t=this._element.getAttribute("title"),e=typeof this._element.getAttribute("data-bs-original-title");(t||"string"!==e)&&(this._element.setAttribute("data-bs-original-title",t||""),!t||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",t),this._element.setAttribute("title",""))}_enter(t,e){e=this._initializeOnDelegatedTarget(t,e),t&&(e._activeTrigger["focusin"===t.type?"focus":"hover"]=!0),e.getTipElement().classList.contains("show")||"show"===e._hoverState?e._hoverState="show":(clearTimeout(e._timeout),e._hoverState="show",e._config.delay&&e._config.delay.show?e._timeout=setTimeout(()=>{"show"===e._hoverState&&e.show()},e._config.delay.show):e.show())}_leave(t,e){e=this._initializeOnDelegatedTarget(t,e),t&&(e._activeTrigger["focusout"===t.type?"focus":"hover"]=e._element.contains(t.relatedTarget)),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState="out",e._config.delay&&e._config.delay.hide?e._timeout=setTimeout(()=>{"out"===e._hoverState&&e.hide()},e._config.delay.hide):e.hide())}_isWithActiveTrigger(){for(const t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1}_getConfig(t){const e=U.getDataAttributes(this._element);return Object.keys(e).forEach(t=>{We.has(t)&&delete e[t]}),(t={...this.constructor.Default,...e,..."object"==typeof t&&t?t:{}}).container=!1===t.container?document.body:a(t.container),"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),l("tooltip",t,this.constructor.DefaultType),t.sanitize&&(t.template=Re(t.template,t.allowList,t.sanitizeFn)),t}_getDelegateConfig(){const t={};if(this._config)for(const e in this._config)this.constructor.Default[e]!==this._config[e]&&(t[e]=this._config[e]);return t}_cleanTipClass(){const t=this.getTipElement(),e=t.getAttribute("class").match(Be);null!==e&&e.length>0&&e.map(t=>t.trim()).forEach(e=>t.classList.remove(e))}_handlePopperPlacementChange(t){const{state:e}=t;e&&(this.tip=e.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(e.placement)))}static jQueryInterface(t){return this.each((function(){const e=Fe.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}_(Fe);const Ve=new RegExp("(^|\\s)bs-popover\\S+","g"),Ke={...Fe.Default,placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'},Xe={...Fe.DefaultType,content:"(string|element|function)"},Ye={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"};class Qe extends Fe{static get Default(){return Ke}static get NAME(){return"popover"}static get Event(){return Ye}static get DefaultType(){return Xe}isWithContent(){return this.getTitle()||this._getContent()}getTipElement(){return this.tip||(this.tip=super.getTipElement(),this.getTitle()||t.findOne(".popover-header",this.tip).remove(),this._getContent()||t.findOne(".popover-body",this.tip).remove()),this.tip}setContent(){const e=this.getTipElement();this.setElementContent(t.findOne(".popover-header",e),this.getTitle());let i=this._getContent();"function"==typeof i&&(i=i.call(this._element)),this.setElementContent(t.findOne(".popover-body",e),i),e.classList.remove("fade","show")}_addAttachmentClass(t){this.getTipElement().classList.add("bs-popover-"+this.updateAttachment(t))}_getContent(){return this._element.getAttribute("data-bs-content")||this._config.content}_cleanTipClass(){const t=this.getTipElement(),e=t.getAttribute("class").match(Ve);null!==e&&e.length>0&&e.map(t=>t.trim()).forEach(e=>t.classList.remove(e))}static jQueryInterface(t){return this.each((function(){const e=Qe.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}_(Qe);const Ge={offset:10,method:"auto",target:""},Ze={offset:"number",method:"string",target:"(string|element)"};class Je extends B{constructor(t,e){super(t),this._scrollElement="BODY"===this._element.tagName?window:this._element,this._config=this._getConfig(e),this._selector=`${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,P.on(this._scrollElement,"scroll.bs.scrollspy",()=>this._process()),this.refresh(),this._process()}static get Default(){return Ge}static get NAME(){return"scrollspy"}refresh(){const e=this._scrollElement===this._scrollElement.window?"offset":"position",i="auto"===this._config.method?e:this._config.method,s="position"===i?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),t.find(this._selector).map(e=>{const o=n(e),r=o?t.findOne(o):null;if(r){const t=r.getBoundingClientRect();if(t.width||t.height)return[U[i](r).top+s,o]}return null}).filter(t=>t).sort((t,e)=>t[0]-e[0]).forEach(t=>{this._offsets.push(t[0]),this._targets.push(t[1])})}dispose(){P.off(this._scrollElement,".bs.scrollspy"),super.dispose()}_getConfig(t){if("string"!=typeof(t={...Ge,...U.getDataAttributes(this._element),..."object"==typeof t&&t?t:{}}).target&&r(t.target)){let{id:i}=t.target;i||(i=e("scrollspy"),t.target.id=i),t.target="#"+i}return l("scrollspy",t,Ze),t}_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}_process(){const t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),i=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=i){const t=this._targets[this._targets.length-1];this._activeTarget!==t&&this._activate(t)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(let e=this._offsets.length;e--;)this._activeTarget!==this._targets[e]&&t>=this._offsets[e]&&(void 0===this._offsets[e+1]||t<this._offsets[e+1])&&this._activate(this._targets[e])}}_activate(e){this._activeTarget=e,this._clear();const i=this._selector.split(",").map(t=>`${t}[data-bs-target="${e}"],${t}[href="${e}"]`),n=t.findOne(i.join(","));n.classList.contains("dropdown-item")?(t.findOne(".dropdown-toggle",n.closest(".dropdown")).classList.add("active"),n.classList.add("active")):(n.classList.add("active"),t.parents(n,".nav, .list-group").forEach(e=>{t.prev(e,".nav-link, .list-group-item").forEach(t=>t.classList.add("active")),t.prev(e,".nav-item").forEach(e=>{t.children(e,".nav-link").forEach(t=>t.classList.add("active"))})})),P.trigger(this._scrollElement,"activate.bs.scrollspy",{relatedTarget:e})}_clear(){t.find(this._selector).filter(t=>t.classList.contains("active")).forEach(t=>t.classList.remove("active"))}static jQueryInterface(t){return this.each((function(){const e=Je.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}P.on(window,"load.bs.scrollspy.data-api",()=>{t.find('[data-bs-spy="scroll"]').forEach(t=>new Je(t))}),_(Je);class ti extends B{static get NAME(){return"tab"}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains("active"))return;let e;const i=s(this._element),n=this._element.closest(".nav, .list-group");if(n){const i="UL"===n.nodeName||"OL"===n.nodeName?":scope > li > .active":".active";e=t.find(i,n),e=e[e.length-1]}const o=e?P.trigger(e,"hide.bs.tab",{relatedTarget:this._element}):null;if(P.trigger(this._element,"show.bs.tab",{relatedTarget:e}).defaultPrevented||null!==o&&o.defaultPrevented)return;this._activate(this._element,n);const r=()=>{P.trigger(e,"hidden.bs.tab",{relatedTarget:this._element}),P.trigger(this._element,"shown.bs.tab",{relatedTarget:e})};i?this._activate(i,i.parentNode,r):r()}_activate(e,i,n){const s=(!i||"UL"!==i.nodeName&&"OL"!==i.nodeName?t.children(i,".active"):t.find(":scope > li > .active",i))[0],o=n&&s&&s.classList.contains("fade"),r=()=>this._transitionComplete(e,s,n);s&&o?(s.classList.remove("show"),this._queueCallback(r,e,!0)):r()}_transitionComplete(e,i,n){if(i){i.classList.remove("active");const e=t.findOne(":scope > .dropdown-menu .active",i.parentNode);e&&e.classList.remove("active"),"tab"===i.getAttribute("role")&&i.setAttribute("aria-selected",!1)}e.classList.add("active"),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),f(e),e.classList.contains("fade")&&e.classList.add("show");let s=e.parentNode;if(s&&"LI"===s.nodeName&&(s=s.parentNode),s&&s.classList.contains("dropdown-menu")){const i=e.closest(".dropdown");i&&t.find(".dropdown-toggle",i).forEach(t=>t.classList.add("active")),e.setAttribute("aria-expanded",!0)}n&&n()}static jQueryInterface(t){return this.each((function(){const e=ti.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}P.on(document,"click.bs.tab.data-api",'[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),h(this)||ti.getOrCreateInstance(this).show()})),_(ti);const ei={animation:"boolean",autohide:"boolean",delay:"number"},ii={animation:!0,autohide:!0,delay:5e3};class ni extends B{constructor(t,e){super(t),this._config=this._getConfig(e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return ei}static get Default(){return ii}static get NAME(){return"toast"}show(){P.trigger(this._element,"show.bs.toast").defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove("hide"),f(this._element),this._element.classList.add("showing"),this._queueCallback(()=>{this._element.classList.remove("showing"),this._element.classList.add("show"),P.trigger(this._element,"shown.bs.toast"),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this._element.classList.contains("show")&&(P.trigger(this._element,"hide.bs.toast").defaultPrevented||(this._element.classList.remove("show"),this._queueCallback(()=>{this._element.classList.add("hide"),P.trigger(this._element,"hidden.bs.toast")},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this._element.classList.contains("show")&&this._element.classList.remove("show"),super.dispose()}_getConfig(t){return t={...ii,...U.getDataAttributes(this._element),..."object"==typeof t&&t?t:{}},l("toast",t,this.constructor.DefaultType),t}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e}if(e)return void this._clearTimeout();const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){P.on(this._element,"click.dismiss.bs.toast",'[data-bs-dismiss="toast"]',()=>this.hide()),P.on(this._element,"mouseover.bs.toast",t=>this._onInteraction(t,!0)),P.on(this._element,"mouseout.bs.toast",t=>this._onInteraction(t,!1)),P.on(this._element,"focusin.bs.toast",t=>this._onInteraction(t,!0)),P.on(this._element,"focusout.bs.toast",t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=ni.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return _(ni),{Alert:W,Button:q,Carousel:Z,Collapse:et,Dropdown:Ae,Modal:De,Offcanvas:Ne,Popover:Qe,ScrollSpy:Je,Tab:ti,Toast:ni,Tooltip:Fe}}));
//# sourceMappingURL=bootstrap.bundle.min.js.map
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t():"function"==typeof define&&define.amd?define(t):t()}(0,function(){"use strict";function e(e){var t=!0,n=!1,o=null,d={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function i(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function s(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function u(e){t=!1}function a(){document.addEventListener("mousemove",c),document.addEventListener("mousedown",c),document.addEventListener("mouseup",c),document.addEventListener("pointermove",c),document.addEventListener("pointerdown",c),document.addEventListener("pointerup",c),document.addEventListener("touchmove",c),document.addEventListener("touchstart",c),document.addEventListener("touchend",c)}function c(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",c),document.removeEventListener("mousedown",c),document.removeEventListener("mouseup",c),document.removeEventListener("pointermove",c),document.removeEventListener("pointerdown",c),document.removeEventListener("pointerup",c),document.removeEventListener("touchmove",c),document.removeEventListener("touchstart",c),document.removeEventListener("touchend",c))}document.addEventListener("keydown",function(n){n.metaKey||n.altKey||n.ctrlKey||(i(e.activeElement)&&s(e.activeElement),t=!0)},!0),document.addEventListener("mousedown",u,!0),document.addEventListener("pointerdown",u,!0),document.addEventListener("touchstart",u,!0),document.addEventListener("visibilitychange",function(e){"hidden"===document.visibilityState&&(n&&(t=!0),a())},!0),a(),e.addEventListener("focus",function(e){var n,o,u;i(e.target)&&(t||(n=e.target,o=n.type,"INPUT"===(u=n.tagName)&&d[o]&&!n.readOnly||"TEXTAREA"===u&&!n.readOnly||n.isContentEditable))&&s(e.target)},!0),e.addEventListener("blur",function(e){var t;i(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout(function(){n=!1},100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))},!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)});
//# sourceMappingURL=focus-visible.min.js.map

/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
// @fancyapps/ui/Fancybox v4.0.0-alpha.2
! function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).window = t.window || {})
}(this, (function (t) {
    "use strict";

    function e(t) {
        return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function o(t, e, i) {
        return e && n(t.prototype, e), i && n(t, i), t
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && r(t, e)
    }

    function a(t) {
        return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function r(t, e) {
        return (r = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function l(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function c(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? l(t) : e
    }

    function h(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var i, n = a(t);
            if (e) {
                var o = a(this).constructor;
                i = Reflect.construct(n, arguments, o)
            } else i = n.apply(this, arguments);
            return c(this, i)
        }
    }

    function d(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var i = t && ("undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]);
            if (null == i) return;
            var n, o, s = [],
                a = !0,
                r = !1;
            try {
                for (i = i.call(t); !(a = (n = i.next()).done) && (s.push(n.value), !e || s.length !== e); a = !0);
            } catch (t) {
                r = !0, o = t
            } finally {
                try {
                    a || null == i.return || i.return()
                } finally {
                    if (r) throw o
                }
            }
            return s
        }(t, e) || f(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function u(t) {
        return function (t) {
            if (Array.isArray(t)) return v(t)
        }(t) || function (t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
        }(t) || f(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function f(t, e) {
        if (t) {
            if ("string" == typeof t) return v(t, e);
            var i = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? v(t, e) : void 0
        }
    }

    function v(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n
    }

    function p(t, e) {
        var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!i) {
            if (Array.isArray(t) || (i = f(t)) || e && t && "number" == typeof t.length) {
                i && (t = i);
                var n = 0,
                    o = function () {};
                return {
                    s: o,
                    n: function () {
                        return n >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[n++]
                        }
                    },
                    e: function (t) {
                        throw t
                    },
                    f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var s, a = !0,
            r = !1;
        return {
            s: function () {
                i = i.call(t)
            },
            n: function () {
                var t = i.next();
                return a = t.done, t
            },
            e: function (t) {
                r = !0, s = t
            },
            f: function () {
                try {
                    a || null == i.return || i.return()
                } finally {
                    if (r) throw s
                }
            }
        }
    }
    var g = function (t) {
            return "object" === e(t) && null !== t && t.constructor === Object && "[object Object]" === Object.prototype.toString.call(t)
        },
        m = function t() {
            for (var i = !1, n = arguments.length, o = new Array(n), s = 0; s < n; s++) o[s] = arguments[s];
            "boolean" == typeof o[0] && (i = o.shift());
            var a = o[0];
            if (!a || "object" !== e(a)) throw new Error("extendee must be an object");
            for (var r = o.slice(1), l = r.length, c = 0; c < l; c++) {
                var h = r[c];
                for (var d in h)
                    if (h.hasOwnProperty(d)) {
                        var u = h[d];
                        if (i && (Array.isArray(u) || g(u))) {
                            var f = Array.isArray(u) ? [] : {};
                            a[d] = t(!0, a.hasOwnProperty(d) ? a[d] : f, u)
                        } else a[d] = u
                    }
            }
            return a
        },
        y = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
            return t = parseFloat(t) || 0, Math.round((t + Number.EPSILON) * e) / e
        },
        b = "undefined" != typeof window && window.ResizeObserver || function () {
            function t(e) {
                i(this, t), this.observables = [], this.boundCheck = this.check.bind(this), this.boundCheck(), this.callback = e
            }
            return o(t, [{
                key: "observe",
                value: function (t) {
                    if (!this.observables.some((function (e) {
                            return e.el === t
                        }))) {
                        var e = {
                            el: t,
                            size: {
                                height: t.clientHeight,
                                width: t.clientWidth
                            }
                        };
                        this.observables.push(e)
                    }
                }
            }, {
                key: "unobserve",
                value: function (t) {
                    this.observables = this.observables.filter((function (e) {
                        return e.el !== t
                    }))
                }
            }, {
                key: "disconnect",
                value: function () {
                    this.observables = []
                }
            }, {
                key: "check",
                value: function () {
                    var t = this.observables.filter((function (t) {
                        var e = t.el.clientHeight,
                            i = t.el.clientWidth;
                        if (t.size.height !== e || t.size.width !== i) return t.size.height = e, t.size.width = i, !0
                    })).map((function (t) {
                        return t.el
                    }));
                    t.length > 0 && this.callback(t), window.requestAnimationFrame(this.boundCheck)
                }
            }]), t
        }(),
        w = function t(e) {
            return !(!e || e.classList.contains("carousel__track") || e === document.body) && (function (t) {
                var e = window.getComputedStyle(t)["overflow-y"],
                    i = window.getComputedStyle(t)["overflow-x"],
                    n = ("scroll" === e || "auto" === e) && Math.abs(t.scrollHeight - t.clientHeight) > 1,
                    o = ("scroll" === i || "auto" === i) && Math.abs(t.scrollWidth - t.clientWidth) > 1;
                return n || o
            }(e) ? e : t(e.parentNode))
        },
        x = function (t) {
            var e = 0;
            return t && (e = t instanceof SVGElement ? Math.min(t.getClientRects()[0].height, t.height.baseVal.value) : Math.max(t.offsetHeight, t.scrollHeight)), e
        },
        k = function () {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                i(this, t), this.options = m(!0, {}, e), this.plugins = [], this.events = {};
                for (var n = 0, o = ["on", "once"]; n < o.length; n++)
                    for (var s = o[n], a = 0, r = Object.entries(this.options[s] || {}); a < r.length; a++) {
                        var l = r[a];
                        this[s].apply(this, u(l))
                    }
            }
            return o(t, [{
                key: "option",
                value: function (t, e) {
                    t = String(t);
                    var i, n, o = (i = t, n = this.options, i.split(".").reduce((function (t, e) {
                        return t[e]
                    }), n));
                    return "function" == typeof o && (o = o.call(this, t)), void 0 === o ? e : o
                }
            }, {
                key: "localize",
                value: function (t) {
                    var e = this,
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    return String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g, (function (t, n, o) {
                        var s = !1;
                        if (!(s = o ? e.option("".concat(n[0] + n.toLowerCase().substring(1), ".l10n.").concat(o)) : e.option("l10n.".concat(n)))) return n;
                        for (var a = 0; a < i.length; a++) s = s.split(i[a][0]).join(i[a][1]);
                        return s
                    }))
                }
            }, {
                key: "on",
                value: function (t, e) {
                    var i = this;
                    if (g(t)) {
                        for (var n = 0, o = Object.entries(t); n < o.length; n++) {
                            var s = o[n];
                            this.on.apply(this, u(s))
                        }
                        return this
                    }
                    return String(t).split(" ").forEach((function (t) {
                        var n = i.events[t] = i.events[t] || []; - 1 == n.indexOf(e) && n.push(e)
                    })), this
                }
            }, {
                key: "once",
                value: function (t, e) {
                    var i = this;
                    if (g(t)) {
                        for (var n = 0, o = Object.entries(t); n < o.length; n++) {
                            var s = o[n];
                            this.once.apply(this, u(s))
                        }
                        return this
                    }
                    return String(t).split(" ").forEach((function (t) {
                        var n = function n() {
                            i.off(t, n);
                            for (var o = arguments.length, s = new Array(o), a = 0; a < o; a++) s[a] = arguments[a];
                            e.call.apply(e, [i, i].concat(s))
                        };
                        n._ = e, i.on(t, n)
                    })), this
                }
            }, {
                key: "off",
                value: function (t, e) {
                    var i = this;
                    if (!g(t)) return t.split(" ").forEach((function (t) {
                        var n = i.events[t];
                        if (!n || !n.length) return i;
                        for (var o = -1, s = 0, a = n.length; s < a; s++) {
                            var r = n[s];
                            if (r && (r === e || r._ === e)) {
                                o = s;
                                break
                            }
                        } - 1 != o && n.splice(o, 1)
                    })), this;
                    for (var n = 0, o = Object.entries(t); n < o.length; n++) {
                        var s = o[n];
                        this.off.apply(this, u(s))
                    }
                }
            }, {
                key: "trigger",
                value: function (t) {
                    for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
                    var o, s = p(u(this.events[t] || []).slice());
                    try {
                        for (s.s(); !(o = s.n()).done;) {
                            var a = o.value;
                            if (a && !1 === a.call.apply(a, [this, this].concat(i))) return !1
                        }
                    } catch (t) {
                        s.e(t)
                    } finally {
                        s.f()
                    }
                    var r, l = p(u(this.events["*"] || []).slice());
                    try {
                        for (l.s(); !(r = l.n()).done;) {
                            var c = r.value;
                            if (c && !1 === c.call.apply(c, [this, t, this].concat(i))) return !1
                        }
                    } catch (t) {
                        l.e(t)
                    } finally {
                        l.f()
                    }
                    return !0
                }
            }, {
                key: "attachPlugins",
                value: function (t) {
                    for (var e = {}, i = 0, n = Object.entries(t || {}); i < n.length; i++) {
                        var o = d(n[i], 2),
                            s = o[0],
                            a = o[1];
                        !1 !== this.options[s] && (this.options[s] = m({}, a.defaults || {}, this.options[s]), e[s] = new a(this))
                    }
                    for (var r = 0, l = Object.entries(e); r < l.length; r++) {
                        var c = d(l[r], 2);
                        c[0], c[1].attach(this)
                    }
                    return this.plugins = Object.assign({}, this.plugins, e), this
                }
            }, {
                key: "detachPlugins",
                value: function () {
                    for (var t in this.plugins) {
                        var e = void 0;
                        (e = this.plugins[t]) && "function" == typeof e.detach && e.detach(this)
                    }
                    return this.plugins = {}, this
                }
            }]), t
        }(),
        $ = {
            panOnlyZoomed: !1,
            lockAxis: !1,
            friction: .72,
            decelFriction: .92,
            zoomFriction: .72,
            bounceForce: .1,
            baseScale: 1,
            minScale: 1,
            maxScale: 2,
            step: .5,
            zoomInCentered: !0,
            pinchToZoom: !0,
            textSelection: !0,
            click: "toggleZoom",
            clickDelay: 250,
            doubleClick: !1,
            wheel: "zoom",
            wheelFactor: 30,
            wheelLimit: 3,
            touch: !0,
            draggableClass: "is-draggable",
            draggingClass: "is-dragging"
        },
        C = function (t) {
            s(n, t);
            var e = h(n);

            function n(t) {
                var o, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (i(this, n), s = m(!0, {}, $, s), o = e.call(this, s), !(t instanceof HTMLElement)) throw new Error("Viewport not found");
                o.state = "init", o.$viewport = t;
                for (var a = 0, r = ["onPointerDown", "onPointerMove", "onPointerUp", "onWheel", "onClick"]; a < r.length; a++) {
                    var c = r[a];
                    o[c] = o[c].bind(l(o))
                }
                if (o.$content = o.option("content"), o.$content || (o.$content = o.$viewport.querySelector(".panzoom__content")), !o.$content) throw new Error("Content not found");
                if (!1 === o.option("textSelection") && o.$viewport.classList.add("not-selectable"), o.resetValues(), o.attachPlugins(n.Plugins), o.trigger("init"), o.handleContent(), o.attachEvents(), o.trigger("ready"), "init" === o.state) {
                    var h = o.option("baseScale");
                    1 === h ? (o.state = "ready", o.handleCursor()) : o.panTo({
                        scale: h,
                        friction: 0
                    })
                }
                return o
            }
            return o(n, [{
                key: "handleContent",
                value: function () {
                    var t = this;
                    if (this.$content instanceof HTMLImageElement) {
                        var e = function () {
                            var e = t.$content.naturalWidth;
                            t.maxScale = t.option("maxScale"), t.options.maxScale = function () {
                                var t = this.contentDim.width;
                                return e > 0 && t > 0 ? e / t * this.maxScale : this.maxScale
                            }, t.updateMetrics(), t.trigger(e > 0 ? "load" : "error")
                        };
                        !0 !== this.$content.complete ? (this.$content.onload = function () {
                            return e()
                        }, this.$content.onerror = function () {
                            return e()
                        }) : e()
                    } else this.updateMetrics()
                }
            }, {
                key: "resetValues",
                value: function () {
                    this.viewportDim = {
                        top: 0,
                        left: 0,
                        width: 0,
                        height: 0
                    }, this.contentDim = {
                        width: 0,
                        height: 0
                    }, this.friction = this.option("friction"), this.current = {
                        x: 0,
                        y: 0,
                        scale: 1
                    }, this.velocity = {
                        x: 0,
                        y: 0,
                        scale: 0
                    }, this.pan = {
                        x: 0,
                        y: 0,
                        scale: 1
                    }, this.drag = {
                        startTime: null,
                        firstPosition: null,
                        startPosition: null,
                        startPoint: null,
                        startDistance: null,
                        endPosition: null,
                        endPoint: null,
                        distance: 0,
                        distanceX: 0,
                        distanceY: 0,
                        elapsedTime: 0
                    }, this.lockAxis = null, this.pendingAnimateUpdate = null, this.pendingResizeUpdate = null, this.pointers = []
                }
            }, {
                key: "updateMetrics",
                value: function () {
                    var t, e, i = this.$viewport.getBoundingClientRect(),
                        n = i.top,
                        o = i.left,
                        s = i.width,
                        a = i.height,
                        r = window.getComputedStyle(this.$viewport);
                    s -= parseFloat(r.paddingLeft) + parseFloat(r.paddingRight), a -= parseFloat(r.paddingTop) + parseFloat(r.paddingBottom), this.viewportDim = {
                        top: n,
                        left: o,
                        width: s,
                        height: a
                    }, this.contentDim = {
                        width: this.option("width", (t = this.$content, e = 0, t && (e = t instanceof SVGElement ? Math.min(t.getClientRects()[0].width, t.width.baseVal.value) : Math.max(t.offsetWidth, t.scrollWidth)), e)),
                        height: this.option("hidth", x(this.$content))
                    }, this.trigger("updateMetrics"), this.updateBounds()
                }
            }, {
                key: "updateBounds",
                value: function (t) {
                    var e = {
                            from: 0,
                            to: 0
                        },
                        i = {
                            from: 0,
                            to: 0
                        };
                    if (t || (t = this.velocity.scale ? this.pan.scale : this.current.scale), t < 1) return [e, i];
                    var n = this.contentDim,
                        o = this.viewportDim,
                        s = n.width * t,
                        a = n.height * t;
                    return e.to = y(.5 * (s - n.width)), n.width > o.width ? e.from = y(e.to + o.width - s) : e.from = y(-1 * e.to), i.to = y(.5 * (a - n.height)), n.height > o.height ? i.from = y(i.to + o.height - a) : i.from = y(-1 * i.to), this.boundX = e, this.boundY = i, this.trigger("updateBounds", t), [this.boundX, this.boundY]
                }
            }, {
                key: "zoomIn",
                value: function (t) {
                    this.zoomTo(this.current.scale + (t || this.option("step")))
                }
            }, {
                key: "zoomOut",
                value: function (t) {
                    this.zoomTo(this.current.scale - (t || this.option("step")))
                }
            }, {
                key: "toggleZoom",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = this.option("maxScale"),
                        i = this.option("baseScale");
                    this.zoomTo(this.current.scale > i + .5 * (e - i) ? i : e, t)
                }
            }, {
                key: "zoomTo",
                value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = e.x,
                        n = void 0 === i ? null : i,
                        o = e.y,
                        s = void 0 === o ? null : o,
                        a = e.friction,
                        r = void 0 === a ? this.option("zoomFriction") : a;
                    t || (t = this.option("baseScale")), t = Math.max(Math.min(t, this.option("maxScale")), this.option("minScale"));
                    var l = this.contentDim.width,
                        c = this.contentDim.height,
                        h = l * this.current.scale,
                        d = c * this.current.scale,
                        u = l * t,
                        f = c * t;
                    null === n && (n = .5 * h), null === s && (s = .5 * d), !1 === this.option("zoomInCentered") && (n < .5 * h && (n = h), n > h && (n = 0), s < 0 && (s = d), s > d && (s = 0));
                    var v = h > 0 ? n / h : 0,
                        p = d > 0 ? s / d : 0,
                        g = (u - h) * (v - .5),
                        m = (f - d) * (p - .5);
                    Math.abs(g) < 1 && (g = 0), Math.abs(m) < 1 && (m = 0), n = this.current.x - g, s = this.current.y - m, this.panTo({
                        x: n,
                        y: s,
                        scale: t,
                        friction: r
                    })
                }
            }, {
                key: "panTo",
                value: function (t) {
                    var e = t.x,
                        i = void 0 === e ? 0 : e,
                        n = t.y,
                        o = void 0 === n ? 0 : n,
                        s = t.scale,
                        a = void 0 === s ? this.current.scale : s,
                        r = t.friction,
                        l = void 0 === r ? this.option("friction") : r,
                        c = t.ignoreBounds,
                        h = void 0 !== c && c;
                    if (l || this.stopMoving(), !0 !== h) {
                        var u = d(this.updateBounds(a), 2),
                            f = u[0],
                            v = u[1];
                        f && (i = Math.max(Math.min(i, f.to), f.from)), v && (o = Math.max(Math.min(o, v.to), v.from))
                    }
                    return l > 0 && (Math.abs(i - this.current.x) > .1 || Math.abs(o - this.current.y) > .1 || Math.abs(a - this.current.scale) > .1) ? (this.state = "panning", this.friction = l, this.pan = {
                        x: i,
                        y: o,
                        scale: a
                    }, this.velocity = {
                        x: (1 / this.friction - 1) * (i - this.current.x),
                        y: (1 / this.friction - 1) * (o - this.current.y),
                        scale: (1 / this.friction - 1) * (a - this.current.scale)
                    }, this.animate(), this) : (this.pendingAnimateUpdate && (cancelAnimationFrame(this.pendingAnimateUpdate), this.pendingAnimateUpdate = null), this.state = "ready", this.stopMoving(), this.current = {
                        x: i,
                        y: o,
                        scale: a
                    }, this.transform(), this.handleCursor(), this.trigger("afterAnimate", !0), this)
                }
            }, {
                key: "animate",
                value: function () {
                    var t = this;
                    if (!this.pendingAnimateUpdate) {
                        if (this.applyBoundForce(), this.applyDragForce(), this.velocity.x *= this.friction, this.velocity.y *= this.friction, this.velocity.scale *= this.friction, this.current.x += this.velocity.x, this.current.y += this.velocity.y, this.current.scale += this.velocity.scale, "dragging" == this.state || "pointerdown" == this.state || Math.abs(this.velocity.x) > .05 || Math.abs(this.velocity.y) > .05 || Math.abs(this.velocity.scale) > .05) return this.transform(), void(this.pendingAnimateUpdate = requestAnimationFrame((function () {
                            t.pendingAnimateUpdate = null, t.animate()
                        })));
                        this.current.x = y(this.current.x + this.velocity.x / (1 / this.friction - 1)), this.current.y = y(this.current.y + this.velocity.y / (1 / this.friction - 1)), Math.abs(this.current.x) < .5 && (this.current.x = 0), Math.abs(this.current.y) < .5 && (this.current.y = 0), this.current.scale = y(this.current.scale + this.velocity.scale / (1 / this.friction - 1), 1e4), Math.abs(this.current.scale - 1) < .01 && (this.current.scale = 1), this.state = "ready", this.stopMoving(), this.transform(), this.handleCursor(), this.trigger("afterAnimate")
                    }
                }
            }, {
                key: "handleCursor",
                value: function () {
                    var t = this.option("draggableClass");
                    t && this.option("touch") && (this.contentDim.width <= this.viewportDim.width && 1 == this.option("panOnlyZoomed") && this.current.scale <= this.option("baseScale") ? this.$viewport.classList.remove(t) : this.$viewport.classList.add(t))
                }
            }, {
                key: "isMoved",
                value: function () {
                    return 0 !== this.current.x || 0 !== this.current.y || 1 !== this.current.scale || this.velocity.x > 0 || this.velocity.y > 0 || this.velocity.scale > 0
                }
            }, {
                key: "stopMoving",
                value: function () {
                    this.velocity = {
                        x: 0,
                        y: 0,
                        scale: 0
                    }
                }
            }, {
                key: "transform",
                value: function () {
                    this.trigger("beforeTransform");
                    var t = y(this.current.x, 100),
                        e = y(this.current.y, 100),
                        i = y(this.current.scale, 1e5);
                    Math.abs(t) <= .1 && Math.abs(e) <= .1 && Math.abs(i - 1) <= .1 ? this.$content.style.transform = "" : this.$content.style.transform = "translate3d(".concat(t, "px, ").concat(e, "px, 0px) scale(").concat(i, ")"), this.trigger("afterTransform")
                }
            }, {
                key: "applyBoundForce",
                value: function () {
                    if ("decel" === this.state) {
                        var t, e, i, n, o = {
                                x: 0,
                                y: 0
                            },
                            s = this.option("bounceForce"),
                            a = this.boundX,
                            r = this.boundY;
                        if (a && (t = this.current.x < a.from, e = this.current.x > a.to), r && (i = this.current.y < r.from, n = this.current.y > r.to), t || e) {
                            var l = (t ? a.from : a.to) - this.current.x,
                                c = l * s,
                                h = this.current.x + (this.velocity.x + c) / (1 / this.friction - 1);
                            t && h < a.from || e && h > a.to || (c = l * s - this.velocity.x), o.x = c
                        }
                        if (i || n) {
                            var d = (i ? r.from : r.to) - this.current.y,
                                u = d * s,
                                f = this.current.y + (this.velocity.y + u) / (1 / this.friction - 1);
                            i && f < r.from || n && f > r.to || (u = d * s - this.velocity.y), o.y = u
                        }
                        this.velocity.x += o.x, this.velocity.y += o.y
                    }
                }
            }, {
                key: "applyDragForce",
                value: function () {
                    "dragging" === this.state && (this.velocity = {
                        x: (1 / this.friction - 1) * (this.drag.endPosition.x - this.current.x),
                        y: (1 / this.friction - 1) * (this.drag.endPosition.y - this.current.y),
                        scale: (1 / this.friction - 1) * (this.drag.endPosition.scale - this.current.scale)
                    })
                }
            }, {
                key: "attachEvents",
                value: function () {
                    var t = this,
                        e = this.$viewport;
                    this.resizeObserver = this.resizeObserver || new b((function (e) {
                        t.pendingResizeUpdate = t.pendingResizeUpdate || setTimeout((function () {
                            t.pendingResizeUpdate = null;
                            var i = e && e[0].contentRect;
                            !i && t.$viewport && (i = t.$viewport.getBoundingClientRect()), i && (Math.abs(i.width - t.viewportDim.width) > 1 || Math.abs(i.height - t.viewportDim.height) > 1) && t.updateMetrics()
                        }), 50)
                    })), this.resizeObserver.observe(e), e.addEventListener("click", this.onClick, {
                        passive: !1
                    }), e.addEventListener("wheel", this.onWheel, {
                        passive: !1
                    }), this.option("touch") && (window.PointerEvent ? (e.addEventListener("pointerdown", this.onPointerDown, {
                        passive: !1
                    }), e.addEventListener("pointermove", this.onPointerMove, {
                        passive: !1
                    }), e.addEventListener("pointerup", this.onPointerUp), e.addEventListener("pointercancel", this.onPointerUp)) : (e.addEventListener("touchstart", this.onPointerDown, {
                        passive: !1
                    }), e.addEventListener("touchmove", this.onPointerMove, {
                        passive: !1
                    }), e.addEventListener("touchend", this.onPointerUp), e.addEventListener("touchcancel", this.onPointerUp), e.addEventListener("mousedown", this.onPointerDown)))
                }
            }, {
                key: "detachEvents",
                value: function () {
                    this.resizeObserver && this.resizeObserver.disconnect(), this.resizeObserver = null, this.pendingResizeUpdate && (clearTimeout(this.pendingResizeUpdate), this.pendingResizeUpdate = null);
                    var t = this.$viewport;
                    window.PointerEvent ? (t.removeEventListener("pointerdown", this.onPointerDown, {
                        passive: !1
                    }), t.removeEventListener("pointermove", this.onPointerMove, {
                        passive: !1
                    }), t.removeEventListener("pointerup", this.onPointerUp), t.removeEventListener("pointercancel", this.onPointerUp)) : (t.removeEventListener("touchstart", this.onPointerDown, {
                        passive: !1
                    }), t.removeEventListener("touchmove", this.onPointerMove, {
                        passive: !1
                    }), t.removeEventListener("touchend", this.onPointerUp), t.removeEventListener("touchcancel", this.onPointerUp), t.removeEventListener("mousedown", this.onPointerDown)), t.removeEventListener("click", this.onClick, {
                        passive: !1
                    }), t.removeEventListener("wheel", this.onWheel, {
                        passive: !1
                    })
                }
            }, {
                key: "copyPointer",
                value: function (t) {
                    return {
                        pointerId: t.pointerId,
                        clientX: t.clientX,
                        clientY: t.clientY
                    }
                }
            }, {
                key: "findPointerIndex",
                value: function (t) {
                    for (var e = this.pointers.length; e--;)
                        if (this.pointers[e].pointerId === t.pointerId) return e;
                    return -1
                }
            }, {
                key: "addPointer",
                value: function (t) {
                    var e = 0;
                    if (t.touches && t.touches.length) {
                        var i, n = p(t.touches);
                        try {
                            for (n.s(); !(i = n.n()).done;) {
                                var o = i.value;
                                o.pointerId = e++, this.addPointer(o)
                            }
                        } catch (t) {
                            n.e(t)
                        } finally {
                            n.f()
                        }
                    } else(e = this.findPointerIndex(t)) > -1 && this.pointers.splice(e, 1), this.pointers.push(t)
                }
            }, {
                key: "removePointer",
                value: function (t) {
                    if (t.touches)
                        for (; this.pointers.length;) this.pointers.pop();
                    else {
                        var e = this.findPointerIndex(t);
                        e > -1 && this.pointers.splice(e, 1)
                    }
                }
            }, {
                key: "getMiddlePoint",
                value: function () {
                    var t = u(this.pointers),
                        e = (t = t.sort((function (t, e) {
                            return e.pointerId - t.pointerId
                        }))).shift(),
                        i = t.shift();
                    return i ? {
                        clientX: .5 * (e.clientX - i.clientX) + i.clientX,
                        clientY: .5 * (e.clientY - i.clientY) + i.clientY
                    } : {
                        clientX: e ? e.clientX : 0,
                        clientY: e ? e.clientY : 0
                    }
                }
            }, {
                key: "getDistance",
                value: function (t, e) {
                    if (!(t = (t = t || u(this.pointers)).slice()) || t.length < 2) return 0;
                    var i = (t = t.sort((function (t, e) {
                            return e.pointerId - t.pointerId
                        }))).shift(),
                        n = t.shift(),
                        o = Math.abs(n.clientX - i.clientX);
                    if ("x" === e) return o;
                    var s = Math.abs(n.clientY - i.clientY);
                    return "y" === e ? s : Math.sqrt(Math.pow(o, 2) + Math.pow(s, 2))
                }
            }, {
                key: "resetDragState",
                value: function () {
                    var t = this.$content.getClientRects()[0],
                        e = t.left,
                        i = t.top,
                        n = this.getMiddlePoint(),
                        o = {
                            top: i,
                            left: e,
                            x: this.current.x,
                            y: this.current.y,
                            scale: this.current.scale
                        };
                    m(this.drag, {
                        startPosition: m({}, o),
                        startPoint: m({}, n),
                        startDistance: this.getDistance(),
                        endPosition: m({}, o),
                        endPoint: m({}, n),
                        distance: 0,
                        distanceX: 0,
                        distanceY: 0
                    }), "pointerdown" === this.state && (this.lockAxis = null, this.drag.startTime = new Date, this.drag.firstPosition = Object.assign({}, o)), this.stopMoving(), this.friction = this.option("friction")
                }
            }, {
                key: "onPointerDown",
                value: function (t) {
                    if (t && !(t.button && t.button > 0))
                        if (this.option("panOnlyZoomed") && this.velocity.scale) t.preventDefault();
                        else {
                            if (this.resetDragState(), !this.pointers.length) {
                                if (-1 !== ["BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(t.target.nodeName)) return;
                                if (this.option("textSelection") && function (t, e, i) {
                                        for (var n = t.childNodes, o = document.createRange(), s = 0; s < n.length; s++) {
                                            var a = n[s];
                                            if (a.nodeType === Node.TEXT_NODE) {
                                                o.selectNodeContents(a);
                                                var r = o.getBoundingClientRect();
                                                if (e >= r.left && i >= r.top && e <= r.right && i <= r.bottom) return a
                                            }
                                        }
                                        return !1
                                    }(t.target, t.clientX, t.clientY)) return;
                                if (w(t.target)) return
                            }
                            var e;
                            if ((e = window.getSelection ? window.getSelection() : document.selection) && e.rangeCount && e.getRangeAt(0).getClientRects().length && (e.removeAllRanges ? e.removeAllRanges() : e.empty && e.empty()), this.pointers.length > 1 || this.pointers.length && this.lockAxis) t.preventDefault();
                            else if (!1 !== this.trigger("touchStart", t))
                                if (t.preventDefault(), this.state = "pointerdown", this.addPointer(this.copyPointer(t)), this.resetDragState(), window.PointerEvent) try {
                                    t.target.setPointerCapture(t.pointerId)
                                } catch (t) {} else document.addEventListener("mousemove", this.onPointerMove, {
                                    passive: !1
                                }), document.addEventListener("mouseup", this.onPointerUp, {
                                    passive: !1
                                })
                        }
                }
            }, {
                key: "onPointerMove",
                value: function (t) {
                    if (!(t.targetTouches && t.targetTouches.length > 1 || "pointerdown" !== this.state && "dragging" !== this.state))
                        if (0 != this.trigger("touchMove", t)) {
                            if (this.addPointer(this.copyPointer(t)), !(this.pointers.length > 1 && !1 === this.option("pinchToZoom")))
                                if (1 == this.option("panOnlyZoomed") && this.current.scale === this.option("baseScale") && this.pointers.length < 2) t.preventDefault();
                                else {
                                    var e = this.getMiddlePoint(),
                                        i = [e, this.drag.startPoint];
                                    this.drag.distance = this.getDistance(i);
                                    var n = this.events.click && this.events.click.length || this.events.doubleClick && this.events.doubleClick.length || this.option.click || this.option.doubleClick;
                                    if (!(this.drag.distance < 6 && (n || this.option("lockAxis") && !this.lockAxis)) && ("pointerdown" == this.state && (this.state = "dragging"), "dragging" === this.state)) {
                                        var o = this.option("lockAxis");
                                        if (!this.lockAxis && o)
                                            if ("xy" === o) {
                                                var s = this.getDistance(i, "x"),
                                                    a = this.getDistance(i, "y"),
                                                    r = Math.abs(180 * Math.atan2(a, s) / Math.PI);
                                                this.lockAxis = r > 45 && r < 135 ? "y" : "x"
                                            } else this.lockAxis = o;
                                        t.preventDefault(), t.stopPropagation(), this.$viewport.classList.add(this.option("draggingClass")), this.animate();
                                        var l = this.current.scale,
                                            c = 0,
                                            h = 0;
                                        if (this.current.scale === this.option("baseScale") && "y" === this.lockAxis || (c = e.clientX - this.drag.startPoint.clientX), this.current.scale === this.option("baseScale") && "x" === this.lockAxis || (h = e.clientY - this.drag.startPoint.clientY), this.drag.endPosition.x = this.drag.startPosition.x + c, this.drag.endPosition.y = this.drag.startPosition.y + h, this.pointers.length > 1) {
                                            this.drag.middlePoint = e, l = this.drag.startPosition.scale * this.getDistance() / this.drag.startDistance, l = Math.max(Math.min(l, 2 * this.option("maxScale")), .5 * this.option("minScale"));
                                            var d = this.$content.width,
                                                u = this.$content.height,
                                                f = d * this.drag.startPosition.scale,
                                                v = u * this.drag.startPosition.scale,
                                                p = u * l,
                                                g = (d * l - f) * ((this.drag.startPoint.clientX - this.drag.startPosition.left) / f - .5),
                                                m = (p - v) * ((this.drag.startPoint.clientY - this.drag.startPosition.top) / v - .5);
                                            this.drag.endPosition.x -= g, this.drag.endPosition.y -= m, this.drag.endPosition.scale = l, this.updateBounds(l)
                                        }
                                        this.applyDragResistance()
                                    }
                                }
                        } else t.preventDefault()
                }
            }, {
                key: "onPointerUp",
                value: function (t) {
                    if (this.removePointer(t), window.PointerEvent) try {
                        t.target.releasePointerCapture(t.pointerId)
                    } catch (t) {} else document.removeEventListener("mousemove", this.onPointerMove, {
                        passive: !1
                    }), document.removeEventListener("mouseup", this.onPointerUp, {
                        passive: !1
                    });
                    if (this.pointers.length > 0) return t.preventDefault(), void this.resetDragState();
                    if ("pointerdown" === this.state || "dragging" === this.state) {
                        this.$viewport.classList.remove(this.option("draggingClass"));
                        var e = this.$content.getClientRects()[0],
                            i = e.top,
                            n = e.left,
                            o = this.drag;
                        if (m(!0, o, {
                                elapsedTime: new Date - o.startTime,
                                distanceX: o.endPosition.x - o.firstPosition.x,
                                distanceY: o.endPosition.y - o.firstPosition.y,
                                endPosition: {
                                    top: i,
                                    left: n
                                }
                            }), o.distance = Math.sqrt(Math.pow(o.distanceX, 2) + Math.pow(o.distanceY, 2)), this.state = "decel", this.friction = this.option("decelFriction"), this.pan = {
                                x: this.current.x + this.velocity.x / (1 / this.friction - 1),
                                y: this.current.y + this.velocity.y / (1 / this.friction - 1),
                                scale: this.current.scale + this.velocity.scale / (1 / this.friction - 1)
                            }, !1 !== this.trigger("touchEnd", t) && "decel" === this.state) {
                            var s = this.option("minScale");
                            if (this.current.scale < s) this.zoomTo(s, {
                                friction: .64
                            });
                            else {
                                var a = this.option("maxScale");
                                if (this.current.scale - a > .01) {
                                    var r = {
                                        friction: .64
                                    };
                                    o.middlePoint && (r.x = o.middlePoint.clientX - n, r.y = o.middlePoint.clientY - i), this.zoomTo(a, r)
                                }
                            }
                        }
                    }
                }
            }, {
                key: "applyDragResistance",
                value: function () {
                    var t, e, i, n, o = this.boundX,
                        s = this.boundY;
                    if (o && (t = this.drag.endPosition.x < o.from, e = this.drag.endPosition.x > o.to), s && (i = this.drag.endPosition.y < s.from, n = this.drag.endPosition.y > s.to), t || e) {
                        var a = t ? o.from : o.to,
                            r = this.drag.endPosition.x - a;
                        this.drag.endPosition.x = a + .3 * r
                    }
                    if (i || n) {
                        var l = i ? s.from : s.to,
                            c = this.drag.endPosition.y - l;
                        this.drag.endPosition.y = l + .3 * c
                    }
                }
            }, {
                key: "onWheel",
                value: function (t) {
                    !1 !== this.trigger("wheel", t) && "zoom" == this.option("wheel", t) && this.zoomWithWheel(t)
                }
            }, {
                key: "zoomWithWheel",
                value: function (t) {
                    void 0 === this.changedDelta && (this.changedDelta = 0);
                    var e = this.current.scale,
                        i = Math.max(-1, Math.min(1, -t.deltaY || -t.deltaX || t.wheelDelta || -t.detail));
                    if (i < 0 && e <= this.option("minScale") || i > 0 && e >= this.option("maxScale")) {
                        if (this.changedDelta += Math.abs(i), this.changedDelta > this.option("wheelLimit")) return
                    } else this.changedDelta = 0;
                    e = e * (100 + i * this.option("wheelFactor")) / 100, t.preventDefault();
                    var n = this.$content.getClientRects()[0],
                        o = n.top,
                        s = n.left,
                        a = t.clientX - s,
                        r = t.clientY - o;
                    this.zoomTo(e, {
                        x: a,
                        y: r
                    })
                }
            }, {
                key: "onClick",
                value: function (t) {
                    var e = this;
                    if (!t.defaultPrevented) {
                        if (window.getSelection().toString().length) return t.stopPropagation(), void t.stopImmediatePropagation();
                        if (this.drag.startPosition && this.drag.endPosition && (Math.abs(this.drag.endPosition.top - this.drag.startPosition.top) > 1 || Math.abs(this.drag.endPosition.left - this.drag.startPosition.left) > 1)) return t.stopPropagation(), void t.stopImmediatePropagation();
                        if (this.drag.distance > (this.lockAxis ? 6 : 1)) return t.preventDefault(), t.stopPropagation(), void t.stopImmediatePropagation();
                        var i = null,
                            n = null;
                        void 0 !== t.clientX && void 0 !== t.clientY && (i = t.clientX - this.$content.getClientRects()[0].left, n = t.clientY - this.$content.getClientRects()[0].top);
                        var o = this.options.doubleClick;
                        if (!o && this.events.doubleClick && this.events.doubleClick.length && (o = !0), o) {
                            if (!this.clickTimer) return this.lastClickEvent = t, void(this.clickTimer = setTimeout((function () {
                                e.clickTimer = null, !1 !== e.trigger("click", t) && "toggleZoom" === e.option("click") && e.toggleZoom({
                                    x: i,
                                    y: n
                                })
                            }), this.option("clickDelay")));
                            this.getDistance([t, this.lastClickEvent]) >= 6 || (clearTimeout(this.clickTimer), this.clickTimer = null, !1 !== this.trigger("doubleClick", t) && "toggleZoom" === this.option("doubleClick") && this.toggleZoom({
                                x: i,
                                y: n
                            }))
                        } else {
                            if (!1 === this.trigger("click", t)) return;
                            "toggleZoom" === this.option("click") && this.toggleZoom({
                                x: i,
                                y: n
                            })
                        }
                    }
                }
            }, {
                key: "destroy",
                value: function () {
                    "destroy" !== this.state && (this.state = "destroy", this.$viewport.classList.remove("not-selectable"), this.$content instanceof HTMLImageElement && !this.$content.complete && (this.$content.onload = null, this.$content.onerror = null), this.pendingAnimateUpdate && (cancelAnimationFrame(this.pendingAnimateUpdate), this.pendingAnimateUpdate = null), this.clickTimer && (clearTimeout(this.clickTimer), this.clickTimer = null), this.detachEvents(), this.pointers = [], this.resetValues(), this.$viewport = null, this.$content = null, this.options = {}, this.events = {})
                }
            }]), n
        }(k);
    C.version = "4.0.0-alpha.2", C.Plugins = {};
    var P = function (t, e) {
            var i = 0;
            return function () {
                var n = (new Date).getTime();
                if (!(n - i < e)) return i = n, t.apply(void 0, arguments)
            }
        },
        S = function () {
            function t(e) {
                i(this, t), this.$container = null, this.$prev = null, this.$next = null, this.carousel = e, this.onRefresh = this.onRefresh.bind(this)
            }
            return o(t, [{
                key: "option",
                value: function (t) {
                    return this.carousel.option("Navigation.".concat(t))
                }
            }, {
                key: "createButton",
                value: function (t) {
                    var e, i = this,
                        n = document.createElement("button");
                    n.setAttribute("title", this.carousel.localize("{{".concat(t.toUpperCase(), "}}")));
                    var o = this.option("classNames.button") + " " + this.option("classNames.".concat(t));
                    return (e = n.classList).add.apply(e, u(o.split(" "))), n.setAttribute("tabindex", "0"), n.innerHTML = this.carousel.localize(this.option("".concat(t, "Tpl"))), n.addEventListener("click", (function (e) {
                        e.preventDefault(), e.stopPropagation(), i.carousel["slide".concat("next" === t ? "Next" : "Prev")]()
                    })), n
                }
            }, {
                key: "build",
                value: function () {
                    this.$container || (this.$container = document.createElement("div"), this.$container.classList.add(this.option("classNames.main")), this.carousel.$element.appendChild(this.$container)), this.$next || (this.$next = this.createButton("next"), this.$container.appendChild(this.$next)), this.$prev || (this.$prev = this.createButton("prev"), this.$container.appendChild(this.$prev))
                }
            }, {
                key: "onRefresh",
                value: function () {
                    var t = this.carousel.pages.length;
                    t <= 1 || t > 1 && this.carousel.elemDimWidth < this.carousel.wrapDimWidth && !Number.isInteger(this.carousel.option("slidesPerPage")) ? this.cleanup() : (this.build(), this.$prev.removeAttribute("disabled"), this.$next.removeAttribute("disabled"), this.carousel.option("infiniteX", this.carousel.option("infinite")) || (this.carousel.page <= 0 && this.$prev.setAttribute("disabled", ""), this.carousel.page >= t - 1 && this.$next.setAttribute("disabled", "")))
                }
            }, {
                key: "cleanup",
                value: function () {
                    this.$prev && this.$prev.remove(), this.$prev = null, this.$next && this.$next.remove(), this.$next = null, this.$container && this.$container.remove(), this.$container = null
                }
            }, {
                key: "attach",
                value: function () {
                    this.carousel.on("refresh change", this.onRefresh)
                }
            }, {
                key: "detach",
                value: function () {
                    this.carousel.off("refresh change", this.onRefresh), this.cleanup()
                }
            }]), t
        }();
    S.defaults = {
        prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>',
        nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
        classNames: {
            main: "carousel__nav",
            button: "carousel__button",
            next: "is-next",
            prev: "is-prev"
        }
    };
    var E = function () {
            function t(e) {
                i(this, t), this.carousel = e, this.$list = null, this.events = {
                    change: this.onChange.bind(this),
                    refresh: this.onRefresh.bind(this)
                }
            }
            return o(t, [{
                key: "buildList",
                value: function () {
                    var t = this;
                    if (!(this.carousel.pages.length < 2)) {
                        var e = document.createElement("ol");
                        return e.classList.add("carousel__dots"), e.addEventListener("click", (function (e) {
                            if ("page" in e.target.dataset) {
                                e.preventDefault(), e.stopPropagation();
                                var i = parseInt(e.target.dataset.page, 10),
                                    n = t.carousel;
                                i !== n.page && (n.pages.length < 3 && n.option("infinite") ? n[0 == i ? "slidePrev" : "slideNext"]() : n.slideTo(i))
                            }
                        })), this.$list = e, this.carousel.$element.appendChild(e), this.carousel.$element.classList.add("has-dots"), e
                    }
                }
            }, {
                key: "removeList",
                value: function () {
                    this.$list && (this.$list.parentNode.removeChild(this.$list), this.$list = null)
                }
            }, {
                key: "rebuildDots",
                value: function () {
                    var t = this,
                        e = this.$list,
                        i = !!e,
                        n = this.carousel.pages.length;
                    if (n < 2) i && this.removeList();
                    else {
                        i || (e = this.buildList());
                        var o = this.$list.children.length;
                        if (o > n)
                            for (var s = n; s < o; s++) this.$list.removeChild(this.$list.lastChild);
                        else {
                            for (var a = function (e) {
                                    var i = document.createElement("li");
                                    i.classList.add("carousel__dot"), i.dataset.page = e, i.setAttribute("role", "button"), i.setAttribute("tabindex", "0"), i.setAttribute("title", t.carousel.localize("{{GOTO}}", [["%d", e + 1]])), i.addEventListener("keydown", (function (t) {
                                        var e, n = t.code;
                                        "Enter" === n || "NumpadEnter" === n ? e = i : "ArrowRight" === n ? e = i.nextSibling : "ArrowLeft" === n && (e = i.previousSibling), e && e.click()
                                    })), t.$list.appendChild(i)
                                }, r = o; r < n; r++) a(r);
                            this.setActiveDot()
                        }
                    }
                }
            }, {
                key: "setActiveDot",
                value: function () {
                    if (this.$list) {
                        this.$list.childNodes.forEach((function (t) {
                            t.classList.remove("is-selected")
                        }));
                        var t = this.$list.childNodes[this.carousel.page];
                        t && t.classList.add("is-selected")
                    }
                }
            }, {
                key: "onChange",
                value: function () {
                    this.setActiveDot()
                }
            }, {
                key: "onRefresh",
                value: function () {
                    this.rebuildDots()
                }
            }, {
                key: "attach",
                value: function () {
                    this.carousel.on(this.events)
                }
            }, {
                key: "detach",
                value: function () {
                    this.removeList(), this.carousel.off(this.events), this.carousel = null
                }
            }]), t
        }(),
        L = function () {
            function t(e) {
                i(this, t), this.nav = e, this.selectedIndex = null, this.onNavReady = this.onNavReady.bind(this), this.onNavClick = this.onNavClick.bind(this), this.onNavCreateSlide = this.onNavCreateSlide.bind(this), this.onTargetChange = this.onTargetChange.bind(this)
            }
            return o(t, [{
                key: "onNavReady",
                value: function () {
                    this.onTargetChange(!0), this.nav.on("createSlide", this.onNavCreateSlide), this.sync.on("change", this.onTargetChange), this.nav.Panzoom.on("click", this.onNavClick)
                }
            }, {
                key: "onNavCreateSlide",
                value: function (t, e) {
                    e.index === this.selectedIndex && this.markSelectedSlide(e.index)
                }
            }, {
                key: "onNavClick",
                value: function (t, e) {
                    var i = e.target.closest(".carousel__slide");
                    if (i) {
                        e.preventDefault();
                        var n = parseInt(i.dataset.index, 10),
                            o = this.sync.getPageforSlide(n);
                        this.sync.page !== o && this.sync.slideTo(o, {
                            friction: this.nav.option("Sync.friction")
                        }), this.markSelectedSlide(n)
                    }
                }
            }, {
                key: "markSelectedSlide",
                value: function (t) {
                    this.selectedIndex = t, u(this.nav.slides).filter((function (t) {
                        return t.$el && t.$el.classList.remove("is-nav-selected")
                    }));
                    var e = this.nav.slides[t];
                    e && e.$el && e.$el.classList.add("is-nav-selected")
                }
            }, {
                key: "onTargetChange",
                value: function (t) {
                    var e = this.sync.pages[this.sync.page].indexes[0],
                        i = this.nav.getPageforSlide(e);
                    null !== i && (this.nav.slideTo(i, !0 === t ? {
                        friction: 0
                    } : {}), this.markSelectedSlide(e))
                }
            }, {
                key: "attach",
                value: function () {
                    var t = this.nav.options.Sync;
                    t && (g(t) && "object" === e(t.with) && (this.sync = t.with), this.sync && this.nav.on("ready", this.onNavReady))
                }
            }, {
                key: "detach",
                value: function () {
                    this.sync && (this.nav.off("ready", this.onNavReady), this.nav.off("createSlide", this.onNavCreate), this.sync.off("change", this.onTargetChange)), this.nav.Panzoom.off("click", this.onNavClick), this.sync = null, this.selectedIndex = null
                }
            }]), t
        }();
    L.defaults = {
        friction: .92
    };
    var T = {
            Navigation: S,
            Dots: E,
            Sync: L
        },
        M = {
            slides: [],
            preload: 0,
            slidesPerPage: "auto",
            initialPage: 0,
            friction: .92,
            center: !0,
            infinite: !0,
            fill: !0,
            dragFree: !1,
            classNames: {
                viewport: "carousel__viewport",
                track: "carousel__track",
                slide: "carousel__slide",
                slideSelected: "is-selected"
            },
            l10n: {
                NEXT: "Next slide",
                PREV: "Previous slide",
                GOTO: "Go to slide %d"
            }
        },
        A = function (t) {
            s(n, t);
            var e = h(n);

            function n(t) {
                var o, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return i(this, n), s = m(!0, {}, M, s), (o = e.call(this, s)).state = "init", o.$element = t, t.Carousel = l(o), o.page = o.pageIndex = null, o.prevPage = o.prevPageIndex = null, o.slideNext = P(o.slideNext.bind(l(o)), 250), o.slidePrev = P(o.slidePrev.bind(l(o)), 250), o.attachPlugins(n.Plugins), o.trigger("init"), o.initLayout(), o.initSlides(), o.initPanzoom(), o.state = "ready", o.trigger("ready"), o
            }
            return o(n, [{
                key: "initLayout",
                value: function () {
                    if (!(this.$element instanceof HTMLElement)) throw new Error("No root element provided");
                    var t, e, i = this.option("classNames");
                    (this.$viewport = this.option("viewport") || this.$element.querySelector("." + i.viewport), this.$viewport) || (this.$viewport = document.createElement("div"), this.$viewport.classList.add(i.viewport), (t = this.$viewport).append.apply(t, u(this.$element.childNodes)), this.$element.appendChild(this.$viewport));
                    (this.$track = this.option("track") || this.$element.querySelector("." + i.track), this.$track) || (this.$track = document.createElement("div"), this.$track.classList.add(i.track), (e = this.$track).append.apply(e, u(this.$viewport.childNodes)), this.$viewport.appendChild(this.$track))
                }
            }, {
                key: "initSlides",
                value: function () {
                    var t = this;
                    this.slides = [], this.$viewport.querySelectorAll("." + this.option("classNames.slide")).forEach((function (e) {
                        var i = {
                            $el: e,
                            isDom: !0
                        };
                        t.slides.push(i), t.trigger("createSlide", i, t.slides.length)
                    })), Array.isArray(this.options.slides) && (this.slides = m(!0, u(this.slides), this.options.slides))
                }
            }, {
                key: "updatePage",
                value: function () {
                    var t = this.page;
                    null === t && (t = this.page = this.option("initialPage")), this.updateMetrics();
                    var e = this.pages;
                    e[t] || (t = e.length ? e[e.length - 1].index : 0), this.slideTo(t, {
                        friction: 0
                    })
                }
            }, {
                key: "updateBounds",
                value: function () {
                    var t = this.Panzoom,
                        e = this.option("infinite"),
                        i = this.option("infiniteX", e),
                        n = this.option("infiniteY", e);
                    i && (t.boundX = null), n && (t.boundY = null), i || n || (t.boundX = {
                        from: -1 * this.pages[this.pages.length - 1].left,
                        to: -1 * this.pages[0].left
                    })
                }
            }, {
                key: "initPanzoom",
                value: function () {
                    var t = this,
                        e = m(!0, {}, {
                            content: this.$track,
                            click: !1,
                            doubleClick: !1,
                            wheel: !1,
                            pinchToZoom: !1,
                            lockAxis: "x",
                            textSelection: function () {
                                return t.option("textSelection", !1)
                            },
                            panOnlyZoomed: function () {
                                return t.option("panOnlyZoomed", t.elemDimWidth < t.wrapDimWidth)
                            },
                            on: {
                                "*": function (e) {
                                    for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) n[o - 1] = arguments[o];
                                    return t.trigger.apply(t, ["Panzoom.".concat(e)].concat(n))
                                },
                                init: function (e) {
                                    return t.Panzoom = e
                                },
                                updateMetrics: function () {
                                    t.updatePage()
                                },
                                updateBounds: function () {
                                    t.updateBounds()
                                },
                                beforeTransform: this.onBeforeTransform.bind(this),
                                afterAnimate: this.onAfterAnimate.bind(this),
                                touchEnd: this.onTouchEnd.bind(this)
                            }
                        }, this.option("Panzoom"));
                    new C(this.$viewport, e)
                }
            }, {
                key: "onBeforeTransform",
                value: function () {
                    this.option("infiniteX", this.option("infinite")) && this.manageInfiniteTrack(), this.manageSlideVisiblity()
                }
            }, {
                key: "onAfterAnimate",
                value: function (t, e) {
                    e || this.trigger("settle")
                }
            }, {
                key: "onTouchEnd",
                value: function (t) {
                    var e = this.option("dragFree");
                    if (!e && this.pages.length > 1 && t.drag.elapsedTime < 350 && Math.abs(t.drag.distanceY) < 1 && Math.abs(t.drag.distanceX) > 5) this[t.drag.distanceX < 0 ? "slideNext" : "slidePrev"]();
                    else if (e) {
                        var i = d(this.getPageFromPosition(-1 * this.Panzoom.pan.x), 2)[1];
                        this.setPage(i)
                    } else this.slideToClosest()
                }
            }, {
                key: "manageInfiniteTrack",
                value: function () {
                    if (!(!this.option("infiniteX", this.option("infinite")) || this.pages.length < 2 || this.elemDimWidth < this.wrapDimWidth)) {
                        var t = this.Panzoom,
                            e = !1;
                        return t.current.x < -1 * (t.contentDim.width - t.viewportDim.width) && (t.current.x += t.contentDim.width, t.drag.firstPosition && (t.drag.firstPosition.x += t.contentDim.width), this.pageIndex = this.pageIndex - this.pages.length, e = !0), t.current.x > t.viewportDim.width && (t.current.x -= t.contentDim.width, t.drag.firstPosition && (t.drag.firstPosition.x -= t.contentDim.width), this.pageIndex = this.pageIndex + this.pages.length, e = !0), e && "dragging" === t.state && t.resetDragState(), e
                    }
                }
            }, {
                key: "manageSlideVisiblity",
                value: function () {
                    var t = this,
                        e = this.elemDimWidth,
                        i = this.wrapDimWidth,
                        n = -1 * this.Panzoom.current.x;
                    Math.abs(n) < .1 && (n = 0);
                    var o = this.option("preload"),
                        s = this.option("infiniteX", this.option("infinite")),
                        a = parseFloat(window.getComputedStyle(this.$viewport, null).getPropertyValue("padding-left")),
                        r = parseFloat(window.getComputedStyle(this.$viewport, null).getPropertyValue("padding-right"));
                    this.slides.forEach((function (l) {
                        var c, h, d = 0;
                        c = n - a, h = n + i + r, c -= o * (i + a + r), h += o * (i + a + r);
                        var u = l.left + l.width > c && l.left < h;
                        c = n + e - a, h = n + e + i + r, c -= o * (i + a + r);
                        var f = s && l.left + l.width > c && l.left < h;
                        c = n - e - a, h = n - e + i + r, c -= o * (i + a + r);
                        var v = s && l.left + l.width > c && l.left < h;
                        f || u || v ? (t.createSlideEl(l), u && (d = 0), f && (d = -1), v && (d = 1), l.left + l.width > n && l.left <= n + i + r && (d = 0)) : t.removeSlideEl(l), l.hasDiff = d
                    }));
                    var l = 0,
                        c = 0;
                    this.slides.forEach((function (t, i) {
                        var n = 0;
                        t.$el ? (i !== l || t.hasDiff ? n = c + t.hasDiff * e : c = 0, t.$el.style.left = Math.abs(n) > .1 ? "".concat(c + t.hasDiff * e, "px") : "", l++) : c += t.width
                    })), this.Panzoom.viewportDim.height = this.Panzoom.$content.clientHeight, this.markSelectedSlides()
                }
            }, {
                key: "markSelectedSlides",
                value: function () {
                    var t = this,
                        e = this.option("classNames.slideSelected"),
                        i = "aria-hidden";
                    this.slides.forEach((function (n, o) {
                        var s = n.$el;
                        if (s) {
                            var a = t.pages[t.page];
                            a && a.indexes && a.indexes.indexOf(o) > -1 ? (e && !s.classList.contains(e) && (s.classList.add(e), t.trigger("selectSlide", n)), s.removeAttribute(i)) : (e && s.classList.contains(e) && (s.classList.remove(e), t.trigger("unselectSlide", n)), s.setAttribute(i, !0))
                        }
                    }))
                }
            }, {
                key: "createSlideEl",
                value: function (t) {
                    if (t) {
                        if (!t.$el) {
                            var e, i = document.createElement("div");
                            if (i.dataset.index = t.index, i.classList.add(this.option("classNames.slide")), t.customClass)(e = i.classList).add.apply(e, u(t.customClass.split(" ")));
                            t.html && (i.innerHTML = t.html);
                            var n = [];
                            this.slides.forEach((function (t, e) {
                                t.$el && n.push(e)
                            }));
                            var o = t.index,
                                s = null;
                            if (n.length) {
                                var a = n.reduce((function (t, e) {
                                    return Math.abs(e - o) < Math.abs(t - o) ? e : t
                                }));
                                s = this.slides[a]
                            }
                            return this.$track.insertBefore(i, s && s.$el ? s.index < t.index ? s.$el.nextSibling : s.$el : null), t.$el = i, this.trigger("createSlide", t, o), t
                        }
                        var r;
                        parseInt(t.$el.dataset.index, 10) !== t.index && (t.$el.dataset.index = t.index, t.$el.querySelectorAll("[data-lazy-src]").forEach((function (t) {
                            var e = t.dataset.lazySrc;
                            t instanceof HTMLImageElement ? t.src = e : t.style.backgroundImage = "url('".concat(e, "')")
                        })), (r = t.$el.dataset.lazySrc) && (t.$el.style.backgroundImage = "url('".concat(r, "')")), t.state = "ready")
                    }
                }
            }, {
                key: "getSlideMetrics",
                value: function (t) {
                    if (!t) {
                        var e, i = this.slides[0];
                        if ((t = document.createElement("div")).dataset.isTestEl = 1, t.style.visibility = "hidden", t.classList.add(this.option("classNames.slide")), i.customClass)(e = t.classList).add.apply(e, u(i.customClass.split(" ")));
                        this.$track.prepend(t)
                    }
                    var n = y(t.getBoundingClientRect().width),
                        o = t.currentStyle || window.getComputedStyle(t);
                    return n = n + (parseFloat(o.marginLeft) || 0) + (parseFloat(o.marginRight) || 0), window.visualViewport && (n *= window.visualViewport.scale), t.dataset.isTestEl && t.remove(), n
                }
            }, {
                key: "updateMetrics",
                value: function () {
                    var t, e = this,
                        i = 0,
                        n = [];
                    this.slides.forEach((function (o, s) {
                        var a = o.$el,
                            r = o.isDom || !t ? e.getSlideMetrics(a) : t;
                        o.index = s, o.width = r, o.left = i, t = r, i += r, n.push(s)
                    })), this.elemDimWidth = y(i), this.Panzoom.contentDim.width = this.elemDimWidth, this.wrapDimWidth = y(this.$viewport.getBoundingClientRect().width);
                    var o = window.getComputedStyle(this.$viewport),
                        s = parseFloat(o.paddingLeft) + parseFloat(o.paddingRight);
                    this.wrapDimWidth = this.wrapDimWidth - s, window.visualViewport && (this.wrapDimWidth *= window.visualViewport.scale), this.Panzoom.viewportDim.width = this.wrapDimWidth;
                    var a = [],
                        r = this.option("slidesPerPage");
                    if (Number.isInteger(r) && this.elemDimWidth > this.wrapDimWidth)
                        for (var l = 0; l < this.slides.length; l += r) a.push({
                            indexes: n.slice(l, l + r),
                            slides: this.slides.slice(l, l + r)
                        });
                    else
                        for (var c = 0, h = 0, d = 0; d < this.slides.length; d += 1) {
                            var f = this.slides[d];
                            (!a.length || h + f.width > this.wrapDimWidth) && (a.push({
                                indexes: [],
                                slides: []
                            }), c = a.length - 1, h = 0), h += f.width, a[c].indexes.push(d), a[c].slides.push(f)
                        }
                    var v = this.option("center"),
                        p = this.option("fill");
                    a.forEach((function (t, i) {
                        t.index = i, t.width = t.slides.reduce((function (t, e) {
                            return t + e.width
                        }), 0), t.left = t.slides[0].left, v && (t.left += .5 * (e.wrapDimWidth - t.width) * -1), p && !e.option("infiniteX", e.option("infinite")) && e.elemDimWidth > e.wrapDimWidth && (t.left = Math.max(t.left, 0), t.left = Math.min(t.left, e.elemDimWidth - e.wrapDimWidth))
                    }));
                    var g, m = [];
                    a.forEach((function (t) {
                        g && t.left === g.left ? (g.width += t.width, g.slides = [].concat(u(g.slides), u(t.slides)), g.indexes = [].concat(u(g.indexes), u(t.indexes))) : (t.index = m.length, g = t, m.push(t))
                    })), this.pages = m, this.manageSlideVisiblity(), this.trigger("refresh")
                }
            }, {
                key: "setPage",
                value: function (t, e) {
                    var i = 0,
                        n = parseInt(t, 10) || 0,
                        o = this.page,
                        s = this.pageIndex,
                        a = this.pages.length;
                    if (t = (n % a + a) % a, this.option("infiniteX", this.option("infinite")) && this.elemDimWidth > this.wrapDimWidth) {
                        var r = Math.floor(n / a) || 0,
                            l = this.elemDimWidth;
                        if (i = this.pages[t].left + r * l, !0 === e && a > 2) {
                            var c = -1 * this.Panzoom.current.x,
                                h = i - l,
                                d = i + l,
                                u = Math.abs(c - i),
                                f = Math.abs(c - h),
                                v = Math.abs(c - d);
                            v < u && v <= f ? (i = d, n += a) : f < u && f < v && (i = h, n -= a)
                        }
                    } else t = n = Math.max(0, Math.min(n, a - 1)), i = this.pages[t].left;
                    return this.page = t, this.pageIndex = n, null !== o && t !== o && (this.prevPage = o, this.prevPageIndex = s, this.trigger("change", t, o)), i
                }
            }, {
                key: "slideTo",
                value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = e.friction,
                        n = void 0 === i ? this.option("friction") : i;
                    this.Panzoom.panTo({
                        x: -1 * this.setPage(t, !0),
                        y: 0,
                        friction: n
                    })
                }
            }, {
                key: "slideToClosest",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = this.getPageFromPosition(-1 * this.Panzoom.pan.x),
                        i = d(e, 2),
                        n = i[1];
                    this.slideTo(n, t)
                }
            }, {
                key: "slideNext",
                value: function () {
                    this.slideTo(this.pageIndex + 1)
                }
            }, {
                key: "slidePrev",
                value: function () {
                    this.slideTo(this.pageIndex - 1)
                }
            }, {
                key: "getPageforSlide",
                value: function (t) {
                    var e = this.pages.find((function (e) {
                        return e.indexes.indexOf(t) > -1
                    }));
                    return e ? e.index : null
                }
            }, {
                key: "getPageFromPosition",
                value: function (t) {
                    var e = this.pages.length;
                    this.option("center") && (t += .5 * this.wrapDimWidth);
                    var i = Math.floor(t / this.elemDimWidth);
                    t -= i * this.elemDimWidth;
                    var n = this.slides.find((function (e) {
                        return e.left < t && e.left + e.width > t
                    }));
                    if (n) {
                        var o = this.getPageforSlide(n.index);
                        return [o, o + i * e]
                    }
                    return [0, 0]
                }
            }, {
                key: "removeSlideEl",
                value: function (t) {
                    t.$el && !t.isDom && (this.trigger("deleteSlide", t), t.$el.remove(), t.$el = null)
                }
            }, {
                key: "destroy",
                value: function () {
                    var t = this;
                    this.state = "destroy", this.slides.forEach((function (e) {
                        t.removeSlideEl(e)
                    })), this.Panzoom.destroy(), this.options = {}, this.events = {}
                }
            }]), n
        }(k);
    A.version = "4.0.0-alpha.2", A.Plugins = T;
    var D = !("undefined" == typeof window || !window.document || !window.document.createElement),
        I = function () {
            function t(e) {
                i(this, t), this.fancybox = e, this.viewport = null, this.pendingUpdate = null;
                for (var n = 0, o = ["onReady", "onResize", "onTouchstart", "onTouchmove"]; n < o.length; n++) {
                    var s = o[n];
                    this[s] = this[s].bind(this)
                }
            }
            return o(t, [{
                key: "onReady",
                value: function () {
                    var t = window.visualViewport;
                    t && (this.viewport = t, this.startY = 0, t.addEventListener("resize", this.onResize), this.updateViewport()), window.addEventListener("touchstart", this.onTouchstart, {
                        passive: !1
                    }), window.addEventListener("touchmove", this.onTouchmove, {
                        passive: !1
                    })
                }
            }, {
                key: "onResize",
                value: function () {
                    var t = this;
                    this.pendingUpdate || (this.pendingUpdate = requestAnimationFrame((function () {
                        t.pendingUpdate = null, t.updateViewport()
                    })))
                }
            }, {
                key: "updateViewport",
                value: function () {
                    var t = this.fancybox,
                        e = this.viewport,
                        i = e.scale,
                        n = t.$container;
                    if (n) {
                        var o = "",
                            s = "",
                            a = "";
                        Math.abs(i - 1) > .1 && (o = "".concat(e.width * i, "px"), s = "".concat(e.height * i, "px"), a = "translate3d(".concat(e.offsetLeft, "px, ").concat(e.offsetTop, "px, 0) scale(").concat(1 / i, ")")), n.style.width = o, n.style.height = s, n.style.transform = a, t.Carousel && t.Carousel.updateMetrics()
                    }
                }
            }, {
                key: "onTouchstart",
                value: function (t) {
                    this.startY = t.touches ? t.touches[0].screenY : t.screenY
                }
            }, {
                key: "onTouchmove",
                value: function (t) {
                    var e = this.startY,
                        i = window.innerWidth / window.document.documentElement.clientWidth;
                    if (!(t.touches.length > 1 || 1 !== i)) {
                        var n = t.target,
                            o = w(n);
                        if (o) {
                            var s = window.getComputedStyle(o),
                                a = parseInt(s.getPropertyValue("height"), 10),
                                r = t.touches ? t.touches[0].screenY : t.screenY,
                                l = e <= r && 0 === o.scrollTop,
                                c = e >= r && o.scrollHeight - o.scrollTop === a;
                            (l || c) && t.preventDefault()
                        } else t.preventDefault()
                    }
                }
            }, {
                key: "cleanup",
                value: function () {
                    this.pendingUpdate && (cancelAnimationFrame(this.pendingUpdate), this.pendingUpdate = null);
                    var t = this.viewport;
                    t && (t.removeEventListener("resize", this.onResize), this.viewport = null), window.removeEventListener("touchstart", this.onTouchstart, !1), window.removeEventListener("touchmove", this.onTouchmove, !1)
                }
            }, {
                key: "attach",
                value: function () {
                    this.fancybox.on("initLayout", this.onReady)
                }
            }, {
                key: "detach",
                value: function () {
                    this.fancybox.off("initLayout", this.onReady), this.cleanup()
                }
            }]), t
        }(),
        z = function () {
            function t(e) {
                i(this, t), this.fancybox = e, this.$wrap = null, this.state = "init";
                for (var n = 0, o = ["onReady", "onClosing", "onKeydown"]; n < o.length; n++) {
                    var s = o[n];
                    this[s] = this[s].bind(this)
                }
                this.events = {
                    ready: this.onReady,
                    closing: this.onClosing,
                    keydown: this.onKeydown
                }
            }
            return o(t, [{
                key: "onReady",
                value: function () {
                    !0 === this.fancybox.option("Thumbs.autoStart") && this.initLayout()
                }
            }, {
                key: "onClosing",
                value: function () {
                    this.Carousel && this.Carousel.Panzoom.detachEvents()
                }
            }, {
                key: "onKeydown",
                value: function (t, e) {
                    e === t.option("Thumbs.key") && this.toggle()
                }
            }, {
                key: "initLayout",
                value: function () {
                    var t = this;
                    if ("init" === this.state) {
                        var e = this.getSlides();
                        if (e.length < this.fancybox.option("Thumbs.minSlideCount")) return !1;
                        var i = document.createElement("div");
                        i.classList.add("fancybox__thumbs"), this.fancybox.$container.appendChild(i), this.Carousel = new A(i, m(!0, {
                            Dots: !1,
                            Navigation: !1,
                            Sync: {
                                friction: 0
                            },
                            infinite: !1,
                            center: !0,
                            fill: !0,
                            dragFree: !0,
                            slidesPerPage: 1,
                            preload: 1
                        }, this.fancybox.option("Thumbs.Carousel"), {
                            Sync: {
                                with: this.fancybox.Carousel
                            },
                            slides: e
                        })), this.Carousel.Panzoom.on("wheel", (function (e, i) {
                            i.preventDefault(), t.fancybox[i.deltaY < 0 ? "prev" : "next"]()
                        })), this.$wrap = i, this.state = "ready"
                    }
                }
            }, {
                key: "getSlides",
                value: function () {
                    var t = [];
                    return this.fancybox.items.forEach((function (e) {
                        var i = e.thumb;
                        i && t.push({
                            html: '<div class="fancybox__thumb" style="background-image:url('.concat(i, ')"></div>'),
                            customClass: "has-thumb has-".concat(e.type || "image")
                        })
                    })), t
                }
            }, {
                key: "toggle",
                value: function () {
                    return "ready" === this.state ? (this.Carousel.Panzoom.detachEvents(), this.$wrap.style.display = "none", void(this.state = "hidden")) : "hidden" === this.state ? (this.$wrap.style.display = "", this.Carousel.Panzoom.attachEvents(), void(this.state = "ready")) : void this.initLayout()
                }
            }, {
                key: "cleanup",
                value: function () {
                    this.Carousel && (this.Carousel.destroy(), this.Carousel = null), this.$wrap && (this.$wrap.remove(), this.$wrap = null), this.state = "init"
                }
            }, {
                key: "attach",
                value: function () {
                    this.fancybox.on(this.events)
                }
            }, {
                key: "detach",
                value: function () {
                    this.fancybox.off(this.events), this.cleanup()
                }
            }]), t
        }();
    z.defaults = {
        autoStart: !0,
        minSlideCount: 3,
        key: "t"
    };
    var _ = function (t) {
            return Object.entries(t).map((function (t) {
                return t.map(encodeURIComponent).join("=")
            })).join("&")
        },
        R = function () {
            function t(e) {
                i(this, t), this.fancybox = e;
                for (var n = 0, o = ["onPrepare", "onCreateSlide", "onDeleteSlide", "onSelectSlide", "onUnselectSlide", "onRefresh", "onMessage"]; n < o.length; n++) {
                    var s = o[n];
                    this[s] = this[s].bind(this)
                }
                this.events = {
                    init: this.onPrepare,
                    "Carousel.createSlide": this.onCreateSlide,
                    "Carousel.deleteSlide": this.onDeleteSlide,
                    "Carousel.selectSlide": this.onSelectSlide,
                    "Carousel.unselectSlide": this.onUnselectSlide,
                    "Carousel.refresh": this.onRefresh
                }
            }
            return o(t, [{
                key: "onPrepare",
                value: function () {
                    var t = this;
                    this.fancybox.items.forEach((function (e) {
                        t.processType(e)
                    }))
                }
            }, {
                key: "processType",
                value: function (t) {
                    if (t.html) return t.src = t.html, t.type = "html", void delete t.html;
                    var e = t.src || "",
                        i = t.type || this.fancybox.options.type,
                        n = null;
                    if (!e || "string" == typeof e) {
                        if (n = e.match(/(?:youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)) {
                            var o = _(this.fancybox.option("Html.youtube")),
                                s = encodeURIComponent(n[1]);
                            t.videoId = s, t.src = "https://www.youtube-nocookie.com/embed/".concat(s, "?").concat(o), t.thumb = t.thumb || "https://i.ytimg.com/vi/".concat(s, "/mqdefault.jpg"), t.vendor = "youtube", i = "video"
                        } else if (n = e.match(/^.+vimeo.com\/(?:\/)?([\d]+)(.*)?/)) {
                            var a = _(this.fancybox.option("Html.vimeo")),
                                r = encodeURIComponent(n[1]);
                            t.videoId = r, t.src = "https://player.vimeo.com/video/".concat(r, "?").concat(a), t.vendor = "vimeo", i = "video"
                        } else(n = e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i)) ? (t.src = "//maps.google.".concat(n[1], "/?ll=").concat((n[2] ? n[2] + "&z=" + Math.floor(n[3]) + (n[4] ? n[4].replace(/^\//, "&") : "") : n[4] + "").replace(/\?/, "&"), "&output=").concat(n[4] && n[4].indexOf("layer=c") > 0 ? "svembed" : "embed"), i = "map") : (n = e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i)) && (t.src = "//maps.google.".concat(n[1], "/maps?q=").concat(n[2].replace("query=", "q=").replace("api=1", ""), "&output=embed"), i = "map");
                        i || ("#" === e.charAt(0) ? i = "inline" : (n = e.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (i = "html5video", t.format = t.format || "video/" + ("ogv" === n[1] ? "ogg" : n[1])) : e.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? i = "image" : e.match(/\.(pdf)((\?|#).*)?$/i) && (i = "pdf")), t.type = i || this.fancybox.option("defaultType", "image"), "html5video" !== i && "video" !== i || (t.video = m({}, this.fancybox.option("Html.video"), t.video), t.width && t.height ? t.ratio = parseFloat(t.width) / parseFloat(t.height) : t.ratio = t.ratio || t.video.ratio)
                    }
                }
            }, {
                key: "loadInlineContent",
                value: function (t) {
                    var e;
                    if (t.src instanceof HTMLElement) e = t.src;
                    else if ("string" == typeof t.src) {
                        var i = t.src.split("#", 2),
                            n = 2 === i.length && "" === i[0] ? i[1] : i[0];
                        e = document.getElementById(n)
                    }
                    if (e) {
                        if ("clone" === t.type || e.$placeHolder) {
                            var o = (e = e.cloneNode(!0)).getAttribute("id");
                            o = o ? "".concat(o, "--clone") : "clone-".concat(this.fancybox.id, "-").concat(t.index), e.setAttribute("id", o)
                        } else {
                            var s = document.createElement("div");
                            s.classList.add("fancybox-placeholder"), e.parentNode.insertBefore(s, e), e.$placeHolder = s
                        }
                        this.fancybox.setContent(t, e)
                    } else this.fancybox.setError(t, "{{ELEMENT_NOT_FOUND}}")
                }
            }, {
                key: "loadAjaxContent",
                value: function (t) {
                    var e = this.fancybox,
                        i = new XMLHttpRequest;
                    e.showLoading(t), i.onreadystatechange = function () {
                        i.readyState === XMLHttpRequest.DONE && "ready" === e.state && (e.hideLoading(t), 200 === i.status ? e.setContent(t, i.responseText) : e.setError(t, 404 === i.status ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"))
                    }, i.open("GET", t.src), i.send(t.ajax || null), t.xhr = i
                }
            }, {
                key: "loadIframeContent",
                value: function (t) {
                    var e = this,
                        i = this.fancybox,
                        n = document.createElement("iframe");
                    if (n.className = "fancybox__iframe", n.setAttribute("id", "fancybox__iframe_".concat(i.id, "_").concat(t.index)), n.setAttribute("allow", "autoplay; fullscreen"), n.setAttribute("scrolling", "auto"), t.$iframe = n, "iframe" !== t.type || !1 === t.preload) return n.setAttribute("src", t.src), void this.fancybox.setContent(t, n);
                    i.showLoading(t);
                    var o = document.createElement("div");
                    o.style.visibility = "hidden", this.fancybox.setContent(t, o), o.appendChild(n), n.onerror = function () {
                        i.setError(t, "{{IFRAME_ERROR}}")
                    }, n.onload = function () {
                        var s = !1;
                        "yes" !== n.dataset.ready && (n.dataset.ready = "yes", s = !0), n.src.length && (i.hideLoading(t), n.parentNode.style.visibility = "", !1 !== t.autoSize && e.autoSizeIframe(n), s && i.animateCSS(o, i.option("showClass")))
                    }, n.setAttribute("src", t.src)
                }
            }, {
                key: "setAspectRatio",
                value: function (t) {
                    var e = t.ratio;
                    if (e && t.$content) {
                        t.$content.style.maxWidth = "", t.$content.style.maxHeight = "";
                        var i = t.$content.offsetWidth,
                            n = t.$content.offsetHeight,
                            o = t.width,
                            s = t.height;
                        if (o && s && (i > o || n > s)) {
                            var a = Math.min(o / i, s / n);
                            i *= a, n *= a
                        }
                        e < i / n ? i = n * e : n = i / e, t.$content.style.maxWidth = "".concat(i, "px"), t.$content.style.maxHeight = "".concat(n, "px")
                    }
                }
            }, {
                key: "autoSizeIframe",
                value: function (t) {
                    if (t.dataset && "yes" === t.dataset.ready) {
                        var e = t.parentNode.style;
                        e.flex = "1 1 auto", e.width = "", e.height = "";
                        try {
                            var i = t.contentWindow.document,
                                n = i.getElementsByTagName("html")[0],
                                o = i.body,
                                s = window.getComputedStyle(t.parentNode),
                                a = parseFloat(s.paddingLeft) + parseFloat(s.paddingRight),
                                r = parseFloat(s.paddingTop) + parseFloat(s.paddingBottom);
                            o.style.overflow = "hidden";
                            var l = n.scrollWidth;
                            e.width = "".concat(l + a, "px"), o.style.overflow = "", e.flex = "", e.flexShrink = "0", e.height = "".concat(o.scrollHeight, "px");
                            var c = n.scrollHeight;
                            e.height = "".concat(c + r, "px")
                        } catch (t) {
                            e = ""
                        }
                    }
                }
            }, {
                key: "onRefresh",
                value: function (t, e) {
                    var i = this;
                    e.slides.forEach((function (t) {
                        t.$el && (t.$iframe && !1 !== t.autoSize && i.autoSizeIframe(t.$iframe), t.ratio && i.setAspectRatio(t))
                    }))
                }
            }, {
                key: "onCreateSlide",
                value: function (t, e, i) {
                    if (i && !i.isDom) {
                        switch (i.type) {
                            case "html":
                                this.fancybox.setContent(i, i.src);
                                break;
                            case "html5video":
                                this.fancybox.setContent(i, this.fancybox.option("Html.html5video.tpl").replace(/\{\{src\}\}/gi, i.src).replace("{{format}}", i.format || i.html5video && i.html5video.format || "").replace("{{poster}}", i.thumb || ""));
                                break;
                            case "inline":
                            case "clone":
                                this.loadInlineContent(i);
                                break;
                            case "ajax":
                                this.loadAjaxContent(i);
                                break;
                            case "iframe":
                            case "pdf":
                            case "video":
                            case "map":
                                this.loadIframeContent(i)
                        }
                        i.ratio && this.setAspectRatio(i)
                    }
                }
            }, {
                key: "onSelectSlide",
                value: function (t, e, i) {
                    if ("html5video" === i.type && i.$el.querySelector("video").play(), "video" === i.type && i.$iframe && i.$iframe.contentWindow) {
                        ! function t() {
                            if ("done" === i.state && i.$iframe.contentWindow) {
                                var e;
                                if (i.$iframe.isReady) return i.video && i.video.autoplay && (e = "youtube" == i.vendor ? {
                                    event: "command",
                                    func: "playVideo"
                                } : {
                                    method: "play",
                                    value: "true"
                                }), void(e && i.$iframe.contentWindow.postMessage(JSON.stringify(e), "*"));
                                "youtube" === i.vendor && (e = {
                                    event: "listening",
                                    id: i.$iframe.getAttribute("id")
                                }, i.$iframe.contentWindow.postMessage(JSON.stringify(e), "*")), i.poller = setTimeout(t, 250)
                            }
                        }()
                    }
                }
            }, {
                key: "onUnselectSlide",
                value: function (t, e, i) {
                    if ("html5video" !== i.type) {
                        var n = !1;
                        "vimeo" == i.vendor ? n = {
                            method: "pause",
                            value: "true"
                        } : "youtube" === i.vendor && (n = {
                            event: "command",
                            func: "pauseVideo"
                        }), n && i.$iframe && i.$iframe.contentWindow && i.$iframe.contentWindow.postMessage(JSON.stringify(n), "*"), clearTimeout(i.poller)
                    } else try {
                        i.$el.querySelector("video").pause()
                    } catch (t) {}
                }
            }, {
                key: "onDeleteSlide",
                value: function (t, e, i) {
                    i.xhr && (i.xhr.abort(), i.xhr = null), i.$iframe && (i.$iframe.onload = i.$iframe.onerror = null, i.$iframe.src = "//about:blank", i.$iframe = null);
                    var n = i.$content;
                    "inline" === i.type && n && (n.classList.remove("fancybox__content"), "none" !== n.style.display && (n.style.display = "none"), i.$closeButton && (i.$closeButton.remove(), i.$closeButton = null));
                    var o = n && n.$placeHolder;
                    o && (o.parentNode.insertBefore(n, o), o.remove(), n.$placeHolder = null)
                }
            }, {
                key: "onMessage",
                value: function (t) {
                    try {
                        var e = JSON.parse(t.data);
                        if ("https://player.vimeo.com" === t.origin) {
                            if ("ready" === e.event) {
                                var i, n = p(document.getElementsByClassName("fancybox__iframe"));
                                try {
                                    for (n.s(); !(i = n.n()).done;) {
                                        var o = i.value;
                                        o.contentWindow === t.source && (o.isReady = 1)
                                    }
                                } catch (t) {
                                    n.e(t)
                                } finally {
                                    n.f()
                                }
                            }
                        } else "https://www.youtube-nocookie.com" === t.origin && "onReady" === e.event && (document.getElementById(e.id).isReady = 1)
                    } catch (t) {}
                }
            }, {
                key: "attach",
                value: function () {
                    this.fancybox.on(this.events), window.addEventListener("message", this.onMessage, !1)
                }
            }, {
                key: "detach",
                value: function () {
                    this.fancybox.off(this.events), window.removeEventListener("message", this.onMessage, !1)
                }
            }]), t
        }();
    R.defaults = {
        video: {
            autoplay: !0,
            ratio: 16 / 9
        },
        youtube: {
            autohide: 1,
            fs: 1,
            rel: 0,
            hd: 1,
            wmode: "transparent",
            enablejsapi: 1,
            html5: 1
        },
        vimeo: {
            hd: 1,
            show_title: 1,
            show_byline: 1,
            show_portrait: 0,
            fullscreen: 1
        },
        html5video: {
            tpl: '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />\n  Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!\n</video>',
            format: ""
        }
    };
    var O = function (t) {
            var e = t.naturalWidth,
                i = t.naturalHeight,
                n = t.width,
                o = t.height,
                s = e / i,
                a = {
                    width: n,
                    height: o
                };
            return s > n / o ? a.height = n / s : a.width = o * s, a.left = .5 * (n - a.width), a.right = e + a.left, a
        },
        N = function () {
            function t(e) {
                i(this, t), this.fancybox = e;
                for (var n = 0, o = ["onReady", "onClosing", "onPageChange", "onCreateSlide", "onRemoveSlide", "onRefresh", "onImageStatusChange"]; n < o.length; n++) {
                    var s = o[n];
                    this[s] = this[s].bind(this)
                }
                this.events = {
                    ready: this.onReady,
                    closing: this.onClosing,
                    "Carousel.change": this.onPageChange,
                    "Carousel.createSlide": this.onCreateSlide,
                    "Carousel.deleteSlide": this.onRemoveSlide,
                    "Carousel.refresh": this.onRefresh
                }
            }
            return o(t, [{
                key: "onReady",
                value: function () {
                    var t = this.fancybox.getSlide();
                    "ready" === t.state && this.revealContent(t)
                }
            }, {
                key: "onCreateSlide",
                value: function (t, e, i) {
                    var n = this;
                    if (!(i.isDom || i.html || i.type && "image" !== i.type)) {
                        i.type = "image", i.state = "loading";
                        var o = document.createElement("div");
                        o.style.visibility = "hidden";
                        var s = document.createElement("img");
                        s.onload = function () {
                            return n.onImageStatusChange(i)
                        }, s.onerror = function () {
                            return n.onImageStatusChange(i)
                        }, s.src = i.src, s.alt = "", s.draggable = !1, s.classList.add("fancybox__image"), i.srcset && s.setAttribute("srcset", i.srcset), i.sizes && s.setAttribute("sizes", i.sizes), i.$image = s, o.appendChild(s), i.$el.dataset.imageFit = this.fancybox.option("Image.fit"), i.$el.style.display = "none", i.$el.offsetHeight, i.$el.style.display = "", this.fancybox.setContent(i, o), s.complete || s.error ? (s.onload = s.onerror = null, this.onImageStatusChange(i)) : s.complete || this.fancybox.showLoading(i)
                    }
                }
            }, {
                key: "initSlidePanzoom",
                value: function (t) {
                    var e = this;
                    t.Panzoom || (t.Panzoom = new C(t.$el, m(!0, this.fancybox.option("Image.Panzoom"), {
                        content: t.$image,
                        panOnlyZoomed: !0,
                        click: null,
                        doubleClick: null,
                        wheel: null,
                        on: {
                            afterAnimate: function (i) {
                                "zoomIn" === t.state && (i.attachEvents(), e.fancybox.done(t)), e.handleCursor(t)
                            },
                            updateMetrics: function () {
                                e.handleCursor(t)
                            },
                            touchMove: function () {
                                if (e.fancybox.Carousel.Panzoom.lockAxis) return !1
                            }
                        }
                    })), this.fancybox.option("Image.wheel") && t.Panzoom.on("wheel", (function (t, i) {
                        return e.onWheel(t, i)
                    })), this.fancybox.option("Image.click") && t.Panzoom.on("click", (function (t, i) {
                        return e.onClick(t, i)
                    })), "toggleZoom" === this.fancybox.option("Image.doubleClick") && t.Panzoom.on("doubleClick", (function (t, e) {
                        if (e.target.closest(".fancybox__content")) {
                            e.preventDefault(), e.stopPropagation();
                            var i = e.clientX - t.$content.getClientRects()[0].left,
                                n = e.clientY - t.$content.getClientRects()[0].top;
                            t.toggleZoom({
                                x: i,
                                y: n
                            })
                        }
                    })))
                }
            }, {
                key: "onImageStatusChange",
                value: function (t) {
                    this.fancybox.hideLoading(t);
                    var e = t.$image;
                    e.complete && e.width && e.height ? (t.state = "ready", this.updateDimensions(t), this.initSlidePanzoom(t), this.fancybox.trigger("load", t), this.revealContent(t)) : this.fancybox.setError(t, "{{IMAGE_ERROR}}")
                }
            }, {
                key: "updateDimensions",
                value: function (t) {
                    if ("cover" !== t.$el.dataset.imageFit) {
                        var e = t.$image,
                            i = t.$content;
                        i.style.maxWidth = "";
                        var n = e.offsetWidth - e.clientWidth;
                        i.style.maxWidth = "".concat(O(e).width + n, "px")
                    }
                    this.handleCursor(t)
                }
            }, {
                key: "revealContent",
                value: function (t) {
                    null === this.fancybox.Carousel.prevPage && t.index === this.fancybox.options.startIndex && this.canZoom() ? this.zoomIn() : this.fancybox.revealContent(t)
                }
            }, {
                key: "canZoom",
                value: function () {
                    var t = this.fancybox,
                        e = t.$container,
                        i = !1;
                    if (!t.option("Image.zoom")) return i;
                    var n = t.getSlide(),
                        o = n.$thumb;
                    if (!o || "loading" === n.state) return i;
                    e.style.pointerEvents = "none";
                    var s = o.getBoundingClientRect();
                    if (this.fancybox.option("Image.ignoreCoveredThumbnail")) {
                        var a = document.elementFromPoint(s.left + 1, s.top + 1) === o,
                            r = document.elementFromPoint(s.right - 1, s.bottom - 1) === o;
                        i = a && r
                    } else i = document.elementFromPoint(s.left + .5 * s.width, s.top + .5 * s.height) === o;
                    return e.style.pointerEvents = "", i
                }
            }, {
                key: "getZoomInfo",
                value: function (t) {
                    var e = t.$thumb.getBoundingClientRect(),
                        i = e.width,
                        n = e.height,
                        o = t.$content.getBoundingClientRect(),
                        s = O(t.$image),
                        a = s.width,
                        r = s.height,
                        l = o.top + .5 * r - (e.top + .5 * n),
                        c = o.left + .5 * a - (e.left + .5 * i),
                        h = this.fancybox.option("Image.zoomOpacity");
                    return "auto" === h && (h = Math.abs(i / n - a / r) > .1), {
                        top: l,
                        left: c,
                        scale: e.width / a,
                        opacity: h
                    }
                }
            }, {
                key: "zoomIn",
                value: function () {
                    var t = this.fancybox;
                    if ("init" !== t.Carousel.state) {
                        var e = t.getSlide(),
                            i = e.Panzoom,
                            n = this.getZoomInfo(e),
                            o = n.top,
                            s = n.left,
                            a = n.scale,
                            r = n.opacity;
                        e.state = "zoomIn", i.detachEvents(), t.trigger("reveal", e), i.panTo({
                            x: -1 * s,
                            y: -1 * o,
                            scale: a,
                            friction: 0,
                            ignoreBounds: !0
                        }), e.$content.style.visibility = "", !0 === r && i.on("afterTransform", (function (t) {
                            "zoomIn" !== e.state && "zoomOut" !== e.state || (t.$content.style.opacity = Math.min(1, t.current.scale))
                        })), i.panTo({
                            x: 0,
                            y: 0,
                            scale: 1,
                            friction: this.fancybox.option("Image.zoomFriction")
                        })
                    }
                }
            }, {
                key: "zoomOut",
                value: function () {
                    var t = this,
                        e = this.fancybox,
                        i = e.getSlide(),
                        n = i.Panzoom;
                    if (n) {
                        i.state = "zoomOut", e.state = "customClosing", i.$caption && (i.$caption.style.visibility = "hidden");
                        var o = .75 * this.fancybox.option("Image.zoomFriction"),
                            s = function () {
                                var e = t.getZoomInfo(i),
                                    s = e.top,
                                    a = e.left,
                                    r = e.scale;
                                n.panTo({
                                    x: -1 * a,
                                    y: -1 * s,
                                    scale: r,
                                    ignoreBounds: !0,
                                    friction: o
                                }), o *= .98
                            };
                        window.addEventListener("scroll", s), n.on("afterAnimate", (function () {
                            window.removeEventListener("scroll", s), e.destroy()
                        })), s()
                    }
                }
            }, {
                key: "handleCursor",
                value: function (t) {
                    var e = t.Panzoom,
                        i = this.fancybox.option("Image.click"),
                        n = t.$el.classList;
                    e && "toggleZoom" === i ? n[e && 1 === e.current.scale && e.option("maxScale") - e.current.scale > .01 ? "add" : "remove"](this.fancybox.option("Image.canZoomInClass")) : "close" === i && n.add(this.fancybox.option("Image.canZoomOutClass"))
                }
            }, {
                key: "onWheel",
                value: function (t, e) {
                    switch (this.fancybox.option("Image.wheel")) {
                        case "zoom":
                            t.zoomWithWheel(e);
                            break;
                        case "close":
                            this.fancybox.close();
                            break;
                        case "slide":
                            this.fancybox[e.deltaY < 0 ? "prev" : "next"]()
                    }
                    e.preventDefault()
                }
            }, {
                key: "onClick",
                value: function (t, e) {
                    if (!(this.fancybox.Carousel.Panzoom.drag.distance >= 6 || this.fancybox.Carousel.Panzoom.lockAxis || "IMG" != e.target.tagName && !e.target.classList.contains("fancybox__content"))) switch (e.preventDefault(), e.stopPropagation(), this.fancybox.option("Image.click")) {
                        case "toggleZoom":
                            var i = e.clientX - t.$content.getClientRects()[0].left,
                                n = e.clientY - t.$content.getClientRects()[0].top;
                            t.toggleZoom({
                                x: i,
                                y: n
                            });
                            break;
                        case "close":
                            this.fancybox.close();
                            break;
                        case "next":
                            this.fancybox.next();
                            break;
                        case "prev":
                            this.fancybox.prev()
                    }
                }
            }, {
                key: "onRefresh",
                value: function (t, e) {
                    var i = this;
                    e.slides.forEach((function (t) {
                        t.Panzoom && i.updateDimensions(t)
                    }))
                }
            }, {
                key: "onRemoveSlide",
                value: function (t, e, i) {
                    i.$image && (i.$el.classList.remove(t.option("Image.canZoomInClass")), i.$image.onload = i.$image.onerror = null, i.$image.remove(), i.$image = null), i.Panzoom && (i.Panzoom.destroy(), i.Panzoom = null), delete i.$el.dataset.imageFit
                }
            }, {
                key: "onClosing",
                value: function (t) {
                    t.Carousel.slides.forEach((function (t) {
                        t.$image && (t.$image.onload = t.$image.onerror = null), t.Panzoom && t.Panzoom.detachEvents()
                    })), "closing" === this.fancybox.state && this.canZoom() && this.zoomOut()
                }
            }, {
                key: "onPageChange",
                value: function (t, e) {
                    var i = this,
                        n = t.getSlide();
                    e.slides.forEach((function (t) {
                        t.Panzoom && "done" === t.state && (t.index !== n.index ? t.Panzoom.panTo({
                            x: 0,
                            y: 0,
                            scale: 1,
                            friction: .8
                        }) : 0 === e.Panzoom.velocity.x && i.revealContent(t))
                    }))
                }
            }, {
                key: "attach",
                value: function () {
                    this.fancybox.on(this.events)
                }
            }, {
                key: "detach",
                value: function () {
                    this.fancybox.off(this.events)
                }
            }]), t
        }();
    N.defaults = {
        Panzoom: {
            maxScale: 1
        },
        canZoomInClass: "can-zoom_in",
        canZoomOutClass: "can-zoom_out",
        zoom: !0,
        zoomOpacity: "auto",
        zoomFriction: .8,
        ignoreCoveredThumbnail: !1,
        click: "toggleZoom",
        doubleClick: null,
        wheel: "zoom",
        fit: "contain"
    };
    var F = function () {
            var t = window.location.hash.substr(1),
                e = t.split("-"),
                i = e.length > 1 && /^\+?\d+$/.test(e[e.length - 1]) && parseInt(e.pop(-1), 10) || null;
            return {
                hash: t,
                slug: e.join("-"),
                index: i
            }
        },
        B = {
            ScrollLock: I,
            Thumbs: z,
            Html: R,
            Image: N,
            Hash: function () {
                function t(e) {
                    i(this, t), this.fancybox = e, this.events = {
                        closing: this.onClosing.bind(this),
                        "Carousel.ready Carousel.change": this.onChange.bind(this)
                    }, this.hasCreatedHistory = !1, this.origHash = "", this.timer = null
                }
                return o(t, [{
                    key: "onChange",
                    value: function (t, e) {
                        var i = this;
                        this.timer && clearTimeout(this.timer);
                        var n = null === e.prevPage,
                            o = t.getSlide(),
                            s = o.$trigger && o.$trigger.dataset,
                            a = window.location.hash.substr(1),
                            r = !1;
                        if (o.slug) r = o.slug;
                        else {
                            var l = s && s.fancybox;
                            l && l.length && "true" !== l && (r = l + (e.slides.length > 1 ? "-" + (o.index + 1) : ""))
                        }
                        n && (this.origHash = a !== r ? this.origHash : ""), r && a !== r && (this.timer = setTimeout((function () {
                            try {
                                window.history[n ? "pushState" : "replaceState"]({}, document.title, window.location.pathname + window.location.search + "#" + r), n && (i.hasCreatedHistory = !0)
                            } catch (t) {}
                        }), 300))
                    }
                }, {
                    key: "onClosing",
                    value: function () {
                        if (this.timer && clearTimeout(this.timer), !0 !== this.hasSilentClose) {
                            if (!this.hasCreatedHistory) try {
                                return void window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (this.origHash ? "#" + this.origHash : ""))
                            } catch (t) {}
                            window.history.back()
                        }
                    }
                }, {
                    key: "attach",
                    value: function (t) {
                        t.on(this.events)
                    }
                }, {
                    key: "detach",
                    value: function (t) {
                        t.off(this.events)
                    }
                }], [{
                    key: "startFromUrl",
                    value: function () {
                        if (!t.Fancybox.getInstance()) {
                            var e = F(),
                                i = e.hash,
                                n = e.slug,
                                o = e.index;
                            if (n) {
                                var s = document.querySelector('[data-slug="'.concat(i, '"]'));
                                if (s && s.dispatchEvent(new CustomEvent("click", {
                                        bubbles: !0,
                                        cancelable: !0
                                    })), !t.Fancybox.getInstance()) {
                                    var a = document.querySelectorAll('[data-fancybox="'.concat(n, '"]'));
                                    a.length && (null === o && 1 === a.length ? s = a[0] : o && (s = a[o - 1]), s && s.dispatchEvent(new CustomEvent("click", {
                                        bubbles: !0,
                                        cancelable: !0
                                    })))
                                }
                            }
                        }
                    }
                }, {
                    key: "onHashChange",
                    value: function () {
                        var e = F(),
                            i = e.slug,
                            n = e.index,
                            o = t.Fancybox.getInstance();
                        if (o) {
                            if (i) {
                                var s, a = o.Carousel,
                                    r = p(a.slides);
                                try {
                                    for (r.s(); !(s = r.n()).done;) {
                                        var l = s.value;
                                        if (l.slug && l.slug === i) return a.slideTo(l.index)
                                    }
                                } catch (t) {
                                    r.e(t)
                                } finally {
                                    r.f()
                                }
                                var c = o.getSlide(),
                                    h = c.$trigger && c.$trigger.dataset;
                                if (h && h.fancybox === i) return a.slideTo(n - 1)
                            }
                            o.plugins.Hash.hasSilentClose = !0, o.close()
                        }
                        t.startFromUrl()
                    }
                }, {
                    key: "onReady",
                    value: function () {
                        window.addEventListener("hashchange", t.onHashChange, !1), t.startFromUrl()
                    }
                }, {
                    key: "create",
                    value: function () {
                        D && window.requestAnimationFrame((function () {
                            t.onReady()
                        }))
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        window.removeEventListener("hashchange", t.onHashChange, !1)
                    }
                }]), t
            }()
        },
        W = 0,
        H = null,
        U = function (t) {
            s(n, t);
            var e = h(n);

            function n(t) {
                var o, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                i(this, n);
                var a, r = function (t, e) {
                    var i = m(!0, {}, t[e.startIndex] || {});
                    return t.forEach((function (t) {
                        var e = t.$trigger;
                        if (e) {
                            var i = e.dataset || {};
                            t.src = i.src || e.getAttribute("href") || t.src, t.type = i.type || t.type
                        }
                    })), m(!0, {}, n.defaults, e, i)
                };
                return a = !1, document.createElement("div").focus({
                    get preventScroll() {
                        return a = !0, !1
                    }
                }), H = a, (o = e.call(this, r(t, s))).state = "init", o.items = t, o.bindHandlers(), o.attachPlugins(n.Plugins), o.trigger("init"), !0 === o.option("hideScrollbar") && o.hideScrollbar(), o.initLayout(), o.initCarousel(o.getSlides()), o.attachEvents(), o.state = "ready", o.trigger("ready"), o.$container.setAttribute("aria-hidden", "false"), o
            }
            return o(n, [{
                key: "bindHandlers",
                value: function () {
                    for (var t = 0, e = ["onMousedown", "onKeydown", "onClick", "onCreateSlide", "onSettle", "onTouchMove", "onTouchEnd", "onTransform"]; t < e.length; t++) {
                        var i = e[t];
                        this[i] = this[i].bind(this)
                    }
                }
            }, {
                key: "attachEvents",
                value: function () {
                    document.addEventListener("mousedown", this.onMousedown), document.addEventListener("keydown", this.onKeydown), this.$container.addEventListener("click", this.onClick)
                }
            }, {
                key: "detachEvents",
                value: function () {
                    document.removeEventListener("mousedown", this.onMousedown), document.removeEventListener("keydown", this.onKeydown), this.$container.removeEventListener("click", this.onClick)
                }
            }, {
                key: "initLayout",
                value: function () {
                    var t = this;
                    this.$root = this.option("parentEl") || document.body;
                    var e = this.option("template.main");
                    e && (this.$root.insertAdjacentHTML("beforeend", this.localize(e)), this.$container = this.$root.querySelector(".fancybox__container")), this.$container || (this.$container = document.createElement("div"), this.$root.appendChild(this.$container)), this.$container.onscroll = function () {
                        return t.$container.scrollLeft = 0, !1
                    }, Object.entries({
                        class: "fancybox__container",
                        role: "dialog",
                        "aria-modal": "true",
                        "aria-hidden": "true",
                        "aria-label": this.localize("{{MODAL}}")
                    }).forEach((function (e) {
                        var i;
                        return (i = t.$container).setAttribute.apply(i, u(e))
                    })), this.option("animated") && this.$container.classList.add("is-animated"), this.$backdrop = this.$container.querySelector(".fancybox__backdrop"), this.$backdrop || (this.$backdrop = document.createElement("div"), this.$backdrop.classList.add("fancybox__backdrop"), this.$container.appendChild(this.$backdrop)), this.$carousel = this.$container.querySelector(".fancybox__carousel"), this.$carousel || (this.$carousel = document.createElement("div"), this.$carousel.classList.add("fancybox__carousel"), this.$container.appendChild(this.$carousel)), this.$container.Fancybox = this, this.id = this.$container.getAttribute("id"), this.id || (this.id = this.options.id || ++W, this.$container.setAttribute("id", "fancybox-" + this.id));
                    var i, n = this.options.mainClass;
                    n && (i = this.$container.classList).add.apply(i, u(n.split(" ")));
                    return document.documentElement.classList.add("with-fancybox"), this.trigger("initLayout"), this
                }
            }, {
                key: "getSlides",
                value: function () {
                    var t = u(this.items);
                    return t.forEach((function (t) {
                        !t.src && t.$trigger && t.$trigger instanceof HTMLImageElement && (t.src = t.$trigger.currentSrc || t.$trigger.src);
                        var e = t.$thumb,
                            i = t.$trigger && t.$trigger.origTarget;
                        i && (e = i instanceof HTMLImageElement ? i : i.querySelector("img")), !e && t.$trigger && (e = t.$trigger instanceof HTMLImageElement ? t.$trigger : t.$trigger.querySelector("img")), t.$thumb = e || null;
                        var n = t.thumb;
                        !n && t.$thumb && (n = e.currentSrc || e.src), n || t.type && "image" !== t.type || (n = t.src), t.thumb = n || null
                    })), t
                }
            }, {
                key: "initCarousel",
                value: function (t) {
                    var e = this;
                    return new A(this.$carousel, m(!0, {}, {
                        classNames: {
                            viewport: "fancybox__viewport",
                            track: "fancybox__track",
                            slide: "fancybox__slide"
                        },
                        textSelection: !0,
                        preload: this.option("preload"),
                        friction: .88,
                        slides: t,
                        initialPage: this.options.startIndex,
                        infiniteX: this.option("infinite"),
                        infiniteY: !0,
                        l10n: this.option("l10n"),
                        Dots: !1,
                        Navigation: {
                            classNames: {
                                main: "fancybox__nav",
                                button: "carousel__button",
                                next: "is-next",
                                prev: "is-prev"
                            }
                        },
                        Panzoom: {
                            panOnlyZoomed: function () {
                                return e.Carousel.pages.length < 2 && !e.options.dragToClose
                            },
                            lockAxis: function () {
                                var t = e.Carousel.pages.length > 1 ? "x" : "";
                                return e.options.dragToClose && (t += "y"), t
                            }
                        },
                        on: {
                            "*": function (t) {
                                for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) n[o - 1] = arguments[o];
                                return e.trigger.apply(e, ["Carousel.".concat(t)].concat(n))
                            },
                            init: function (t) {
                                return e.Carousel = t
                            },
                            createSlide: this.onCreateSlide,
                            settle: this.onSettle
                        }
                    }, this.option("Carousel"))), this.options.dragToClose && this.Carousel.Panzoom.on({
                        touchMove: this.onTouchMove,
                        afterTransform: this.onTransform,
                        touchEnd: this.onTouchEnd
                    }), this.trigger("initCarousel"), this
                }
            }, {
                key: "onCreateSlide",
                value: function (t, e) {
                    var i = e.caption;
                    if (i) {
                        var n = document.createElement("div"),
                            o = "fancybox__caption_".concat(this.id, "_").concat(e.index);
                        n.className = "fancybox__caption", n.innerHTML = i, n.setAttribute("id", o), e.$caption = e.$el.appendChild(n), e.$el.classList.add("has-caption"), e.$el.setAttribute("aria-labelledby", o)
                    }
                }
            }, {
                key: "onSettle",
                value: function () {
                    this.focus()
                }
            }, {
                key: "onClick",
                value: function (t) {
                    if (!t.defaultPrevented && !t.target.closest(".fancybox__content") && !window.getSelection().toString().length) {
                        var e = this.option("click");
                        if ("function" == typeof e) return e.call(this);
                        switch (e) {
                            case "close":
                                this.close();
                                break;
                            case "next":
                                this.next()
                        }
                    }
                }
            }, {
                key: "onTouchMove",
                value: function () {
                    var t = this.getSlide().Panzoom;
                    return !t || 1 === t.current.scale
                }
            }, {
                key: "onTouchEnd",
                value: function (t) {
                    var e = t.drag.distanceY;
                    (Math.abs(e) >= 150 || Math.abs(e) >= 35 && t.drag.elapsedTime < 350) && (this.option("hideClass") && (this.getSlide().hideClass = "fancybox-throwOut".concat(t.current.y < 0 ? "Up" : "Down")), this.close())
                }
            }, {
                key: "onTransform",
                value: function (t) {
                    if (this.$backdrop) {
                        var e = Math.abs(t.current.y),
                            i = e < 1 ? "" : Math.max(0, Math.min(1, 1 - e / t.$content.clientHeight * 1.5));
                        this.$container.style.setProperty("--fancybox-ts", i ? "0s" : ""), this.$container.style.setProperty("--fancybox-opacity", i)
                    }
                }
            }, {
                key: "onMousedown",
                value: function () {
                    document.body.classList.add("is-using-mouse")
                }
            }, {
                key: "onKeydown",
                value: function (t) {
                    if (n.getInstance().id === this.id) {
                        document.body.classList.remove("is-using-mouse");
                        var e = t.key;
                        if ("Tab" === e && this.option("trapFocus")) this.focus(t);
                        else {
                            var i = this.option("keyboard");
                            if (i && !t.ctrlKey && !t.altKey && !t.shiftKey) {
                                var o = document.activeElement && document.activeElement.classList,
                                    s = o && o.contains("carousel__button");
                                if ("Escape" !== e && !s)
                                    if (t.target.isContentEditable || -1 !== ["BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(t.target.nodeName)) return;
                                if (!1 !== this.trigger("keydown", e)) {
                                    "Enter" !== e && t.preventDefault();
                                    var a = i[e];
                                    "function" == typeof this[a] && this[a]()
                                }
                            }
                        }
                    }
                }
            }, {
                key: "getSlide",
                value: function () {
                    var t = this.Carousel;
                    if (!t) return null;
                    var e = null === t.page ? t.option("initialPage") : t.page,
                        i = t.pages || [];
                    return i.length && i[e] ? i[e].slides[0] : null
                }
            }, {
                key: "focus",
                value: function (t) {
                    var e = function (t) {
                        t.setActive ? t.setActive() : H ? t.focus({
                            preventScroll: !0
                        }) : t.focus()
                    };
                    t && t.preventDefault();
                    var i = this.getSlide().$el;
                    i.tabIndex = 0;
                    var n, o = [],
                        s = p([].slice.call(this.$container.querySelectorAll(["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])'])));
                    try {
                        for (s.s(); !(n = s.n()).done;) {
                            var a = n.value;
                            if (!a.classList || !a.classList.contains("fancybox__slide")) {
                                var r = a.closest(".fancybox__slide");
                                r ? r === i && o[a.hasAttribute("autofocus") ? "unshift" : "push"](a) : o.push(a)
                            }
                        }
                    } catch (t) {
                        s.e(t)
                    } finally {
                        s.f()
                    }
                    if (o.length) {
                        this.Carousel.pages.length > 1 && o.push(i);
                        var l = o.indexOf(document.activeElement),
                            c = t && !t.shiftKey,
                            h = t && t.shiftKey;
                        return c ? l === o.length - 1 ? e(o[0]) : e(o[l + 1]) : h ? e(0 === l ? o[o.length - 1] : o[l - 1]) : l < 0 ? e(o[0]) : void 0
                    }
                }
            }, {
                key: "hideScrollbar",
                value: function () {
                    if (D) {
                        var t = window.innerWidth - document.documentElement.getBoundingClientRect().width,
                            e = "fancybox-style-noscroll",
                            i = document.getElementById(e);
                        i || t && ((i = document.createElement("style")).id = e, i.type = "text/css", i.innerHTML = ".compensate-for-scrollbar {padding-right: ".concat(t, "px;}"), document.getElementsByTagName("head")[0].appendChild(i), document.body.classList.add("compensate-for-scrollbar"))
                    }
                }
            }, {
                key: "revealScrollbar",
                value: function () {
                    document.body.classList.remove("compensate-for-scrollbar");
                    var t = document.getElementById("fancybox-style-noscroll");
                    t && t.remove()
                }
            }, {
                key: "clearContent",
                value: function (t) {
                    this.Carousel.trigger("deleteSlide", t), t.$content && (t.$content.remove(), t.$content = null), t._className && t.$el.classList.remove(t._className)
                }
            }, {
                key: "setContent",
                value: function (t, e) {
                    var i, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        o = t.$el;
                    if (e instanceof HTMLElement ? ["img", "iframe", "video", "audio"].indexOf(e.nodeName.toLowerCase()) > -1 ? (i = document.createElement("div")).appendChild(e) : i = e : (i = document.createElement("div")).innerHTML = e, !(i instanceof Element)) throw new Error("Element expected");
                    return t._className = "has-".concat(n.suffix || t.type || "unknown"), o.classList.add(t._className), i.classList.add("fancybox__content"), "none" !== i.style.display && "none" !== window.getComputedStyle(i).getPropertyValue("display") || (i.style.display = "flex"), t.id && i.setAttribute("id", t.id), t.$content = i, o.insertBefore(i, o.querySelector(".fancybox__caption")), this.manageCloseButton(t), "loading" !== t.state && (this.trigger("load", t), this.revealContent(t)), i
                }
            }, {
                key: "manageCloseButton",
                value: function (t) {
                    var e = this,
                        i = void 0 === t.closeButton ? this.option("closeButton") : t.closeButton;
                    if (i && (!this.$closeButton || "inside" === i)) {
                        var n = document.createElement("button");
                        n.classList.add("carousel__button", "is-close"), n.setAttribute("title", this.options.l10n.CLOSE), n.innerHTML = this.option("template.closeButton"), n.addEventListener("click", (function (t) {
                            return e.close(t)
                        })), "inside" === i ? (t.$closeButton && t.$closeButton.remove(), t.$closeButton = t.$content.appendChild(n)) : this.$closeButton = this.$container.insertBefore(n, this.$container.firstChild)
                    }
                }
            }, {
                key: "revealContent",
                value: function (t) {
                    var e = this;
                    if (this.trigger("reveal", t), t.$content.style.visibility = "", "error" !== t.state && null === this.Carousel.prevPage && t.index === this.options.startIndex) {
                        t.state = "animating";
                        var i = void 0 === t.showClass ? this.option("showClass") : t.showClass;
                        this.animateCSS(t.$content, i, (function () {
                            e.done(t)
                        }))
                    } else this.done(t)
                }
            }, {
                key: "animateCSS",
                value: function (t, e, i) {
                    if (t && t.dispatchEvent(new CustomEvent("animationend", {
                            bubbles: !0,
                            cancelable: !0
                        })), t && e) {
                        t.addEventListener("animationend", (function n(o) {
                            o.currentTarget === this && (t.classList.remove(e), t.removeEventListener("animationend", n), i && i())
                        })), t.classList.add(e)
                    } else "function" == typeof i && i()
                }
            }, {
                key: "done",
                value: function (t) {
                    if ("init" === this.state || "ready" === this.state) {
                        t.state = "done", this.trigger("done", t);
                        var e = this.getSlide();
                        e && t.index === e.index && this.option("autoFocus") && this.focus()
                    }
                }
            }, {
                key: "setError",
                value: function (t, e) {
                    this.hideLoading(t), this.clearContent(t), t.state = "error";
                    var i = document.createElement("div");
                    i.classList.add("fancybox-error"), i.innerHTML = this.localize(e || "<p>{{ERROR}}</p>"), this.setContent(t, i, {
                        suffix: "error"
                    })
                }
            }, {
                key: "showLoading",
                value: function (t) {
                    var e = this;
                    t.state = "loading", t.$el.classList.add("is-loading");
                    var i = t.$el.querySelector(".fancybox__spinner");
                    i || ((i = document.createElement("div")).classList.add("fancybox__spinner"), i.innerHTML = this.option("template.spinner"), i.addEventListener("click", (function () {
                        e.Carousel.Panzoom.velocity || e.close()
                    })), t.$el.insertBefore(i, t.$el.firstChild))
                }
            }, {
                key: "hideLoading",
                value: function (t) {
                    var e = t.$el.querySelector(".fancybox__spinner");
                    e && e.remove(), t.$el.classList.remove("is-loading")
                }
            }, {
                key: "next",
                value: function () {
                    var t = this.Carousel;
                    t && t.pages.length > 1 && t.slideNext()
                }
            }, {
                key: "prev",
                value: function () {
                    var t = this.Carousel;
                    t && t.pages.length > 1 && t.slidePrev()
                }
            }, {
                key: "jumpTo",
                value: function () {
                    var t;
                    this.Carousel && (t = this.Carousel).slideTo.apply(t, arguments)
                }
            }, {
                key: "close",
                value: function (t) {
                    var e = this;
                    if (t && t.preventDefault(), !(["closing", "customClosing", "destroy"].indexOf(this.state) > -1) && !1 !== this.trigger("shouldClose", t) && (this.state = "closing", this.Carousel.Panzoom.destroy(), this.detachEvents(), this.trigger("closing", t), "destroy" !== this.state)) {
                        this.$container.setAttribute("aria-hidden", "true"), this.$container.classList.add("is-closing");
                        var i = this.getSlide();
                        if (this.Carousel.slides.forEach((function (t) {
                                t.$content && t.index !== i.index && t.$content.remove()
                            })), "closing" === this.state) {
                            var n = void 0 === i.hideClass ? this.option("hideClass") : i.hideClass;
                            this.animateCSS(i.$content, n, (function () {
                                e.destroy()
                            }))
                        }
                    }
                }
            }, {
                key: "destroy",
                value: function () {
                    this.state = "destroy", this.trigger("destroy");
                    var t = this.option("placeFocusBack") ? this.getSlide().$trigger : null;
                    if (this.Carousel.destroy(), this.detachPlugins(), this.Carousel = null, this.options = {}, this.events = {}, this.$container.remove(), this.$container = this.$backdrop = this.$carousel = null, t)
                        if (H) t.focus({
                            preventScroll: !0
                        });
                        else {
                            var e = document.body.scrollTop;
                            t.focus(), document.body.scrollTop = e
                        } var i = n.getInstance();
                    i ? i.focus() : (document.documentElement.classList.remove("with-fancybox"), document.body.classList.remove("is-using-mouse"), this.revealScrollbar())
                }
            }], [{
                key: "show",
                value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return new n(t, e)
                }
            }, {
                key: "fromEvent",
                value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!t.defaultPrevented && !(t.button && 0 !== t.button || t.ctrlKey || t.metaKey || t.shiftKey)) {
                        var i, o, s, a = !1,
                            r = t.target;
                        if ((r.matches("[data-fancybox-trigger]") || (r = r.closest("[data-fancybox-trigger]"))) && (s = r && r.dataset && r.dataset.fancyboxTrigger), s) {
                            var l = document.querySelectorAll('[data-fancybox="'.concat(s, '"]')),
                                c = parseInt(r.dataset.fancyboxIndex, 10) || 0;
                            r = l.length ? l[c] : r
                        }
                        r || (r = t.target), Array.from(n.openers.keys()).reverse().some((function (e) {
                            if ((i = r).matches(e) || (i = i.closest(e))) return t.preventDefault(), o = e, !0
                        })), o && (e.target = i, i.origTarget = t.target, a = n.fromOpener(o, e));
                        var h = n.getInstance();
                        return h && "ready" === h.state && t.detail && document.body.classList.add("is-using-mouse"), a
                    }
                }
            }, {
                key: "fromOpener",
                value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = function (t) {
                            for (var e = ["false", "0", "no", "null"], i = ["true", "1", "yes"], n = Object.assign({}, t.dataset), o = 0, s = Object.entries(n); o < s.length; o++) {
                                var a = d(s[o], 2),
                                    r = a[0],
                                    l = a[1];
                                if ("string" == typeof l || l instanceof String)
                                    if (e.indexOf(l) > -1) n[r] = !1;
                                    else if (i.indexOf(n[r]) > -1) n[r] = !0;
                                else try {
                                    n[r] = JSON.parse(l)
                                } catch (t) {
                                    n[r] = l
                                }
                            }
                            return delete n.fancybox, delete n.type, t instanceof Element && (n.$trigger = t), n
                        },
                        o = [],
                        s = e.startIndex || 0,
                        a = (e = m({}, e, n.openers.get(t))).groupAttr;
                    void 0 === a && (a = "data-fancybox");
                    var r = e.target;
                    if (a) {
                        if (r && t && t === "[".concat(a, "]")) {
                            var l = r.getAttribute("".concat(a));
                            t = !(!l || !l.length || "true" === l) && "[".concat(a, "='").concat(l, "']")
                        }
                    } else t = !1;
                    if (t && (o = [].slice.call(document.querySelectorAll(t))), !o.length && r && (o = [r]), !o.length) return !1;
                    var c = n.getInstance();
                    return !(c && o.indexOf(c.options.$trigger) > -1) && (s = r ? o.indexOf(r) : s, new n(o = o.map(i), m({}, e, {
                        startIndex: s,
                        $trigger: r
                    })))
                }
            }, {
                key: "bind",
                value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (D) {
                        if (!n.openers.size) {
                            document.body.addEventListener("click", n.fromEvent, !1);
                            for (var i = 0, o = Object.entries(n.Plugins || {}); i < o.length; i++) {
                                var s = d(o[i], 2);
                                s[0];
                                var a = s[1];
                                a.Fancybox = this, "function" == typeof a.create && a.create()
                            }
                        }
                        n.openers.set(t, e)
                    }
                }
            }, {
                key: "unbind",
                value: function (t) {
                    n.openers.delete(t), n.openers.size || n.destroy()
                }
            }, {
                key: "destroy",
                value: function () {
                    for (var t; t = n.getInstance();) t.destroy();
                    n.openers = new Map, document.body.removeEventListener("click", n.fromEvent, !1)
                }
            }, {
                key: "getInstance",
                value: function (t) {
                    var e, i = p(t ? [document.getElementById("fancybox-".concat(t))] : Array.from(document.querySelectorAll(".fancybox__container")).reverse());
                    try {
                        for (i.s(); !(e = i.n()).done;) {
                            var n = e.value,
                                o = n && n.Fancybox;
                            if (o && "closing" !== o.state && "customClosing" !== o.state) return o
                        }
                    } catch (t) {
                        i.e(t)
                    } finally {
                        i.f()
                    }
                    return null
                }
            }, {
                key: "close",
                value: function () {
                    for (var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], e = null; e = n.getInstance();)
                        if (e.close(), !t) return
                }
            }]), n
        }(k);
    U.version = "4.0.0-alpha.2", U.defaults = {
        startIndex: 0,
        preload: 1,
        infinite: !0,
        showClass: "fancybox-zoomInUp",
        hideClass: "fancybox-fadeOut",
        animated: !0,
        hideScrollbar: !0,
        parentEl: null,
        mainClass: null,
        autoFocus: !0,
        trapFocus: !0,
        placeFocusBack: !0,
        click: "close",
        closeButton: "inside",
        dragToClose: !0,
        keyboard: {
            Escape: "close",
            Delete: "close",
            Backspace: "close",
            PageUp: "next",
            PageDown: "prev",
            ArrowUp: "next",
            ArrowDown: "prev",
            ArrowRight: "next",
            ArrowLeft: "prev"
        },
        template: {
            closeButton: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg>',
            spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
            main: null
        },
        l10n: {
            CLOSE: "Close",
            NEXT: "Next",
            PREV: "Previous",
            MODAL: "You can close this modal content with the ESC key",
            ERROR: "Something Went Wrong, Please Try Again Later",
            IMAGE_ERROR: "Image Not Found",
            ELEMENT_NOT_FOUND: "HTML Element Not Found",
            AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
            AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
            IFRAME_ERROR: "Error Loading Page"
        }
    }, U.openers = new Map, U.Plugins = B, U.isMobile = function () {
        return !!navigator && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }, U.bind("[data-fancybox]"), t.Carousel = A, t.Fancybox = U, t.Panzoom = C
}));

!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});
