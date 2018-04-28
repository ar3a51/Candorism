!function(e,t){"function"==typeof define&&define.amd?define([],t(e)):"object"==typeof exports?module.exports=t(e):e.smoothScroll=t(e)}("undefined"!=typeof global?global:this.window||this.global,function(b){"use strict";var y,n,r,v,O,t,S,o={},a="querySelector"in document&&"addEventListener"in b,E={selector:"[data-scroll]",selectorHeader:null,speed:500,easing:"easeInOutCubic",offset:0,callback:function(){}},I=function(){var o={},n=!1,e=0,t=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(n=arguments[0],e++);for(var r=function(e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n&&"[object Object]"===Object.prototype.toString.call(e[t])?o[t]=I(!0,o[t],e[t]):o[t]=e[t])};e<t;e++){r(arguments[e])}return o},c=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,o=String(e),n=o.length,r=-1,a="",c=o.charCodeAt(0);++r<n;){if(0===(t=o.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");1<=t&&t<=31||127==t||0===r&&48<=t&&t<=57||1===r&&48<=t&&t<=57&&45===c?a+="\\"+t.toString(16)+" ":a+=128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?o.charAt(r):"\\"+o.charAt(r)}return"#"+a},H=function(){return Math.max(document.documentElement.clientHeight,b.innerHeight||0)},A=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},j=function(e){return e?(t=e,Math.max(t.scrollHeight,t.offsetHeight,t.clientHeight)+e.offsetTop):0;var t};o.animateScroll=function(c,i,e){var t,o=(t=i?i.getAttribute("data-options"):null)&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(t):{},l=I(y||E,e||{},o),s="[object Number]"===Object.prototype.toString.call(c),n=s||!c.tagName?null:c;if(s||n){var r=b.pageYOffset;l.selectorHeader&&!v&&(v=document.querySelector(l.selectorHeader)),O||(O=j(v));var a,u,d=s?c:function(e,t,o){var n=0;if(e.offsetParent)for(;n+=e.offsetTop,e=e.offsetParent;);return n=Math.max(n-t-o,0),Math.min(n,A()-H())}(n,O,parseInt("function"==typeof l.offset?l.offset():l.offset,10)),f=d-r,h=A(),m=0,p=function(e,t,o){var n,r,a=b.pageYOffset;(e==t||a==t||b.innerHeight+a>=h)&&(clearInterval(o),n=c,r=t,s||(n.focus(),document.activeElement.id!==n.id&&(n.setAttribute("tabindex","-1"),n.focus(),n.style.outline="none"),b.scrollTo(0,r)),l.callback(c,i))},g=function(){var e,t,o;a=1<(a=(m+=16)/parseInt(l.speed,10))?1:a,u=r+f*(e=l.easing,t=a,"easeInQuad"===e&&(o=t*t),"easeOutQuad"===e&&(o=t*(2-t)),"easeInOutQuad"===e&&(o=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e&&(o=t*t*t),"easeOutCubic"===e&&(o=--t*t*t+1),"easeInOutCubic"===e&&(o=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e&&(o=t*t*t*t),"easeOutQuart"===e&&(o=1- --t*t*t*t),"easeInOutQuart"===e&&(o=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e&&(o=t*t*t*t*t),"easeOutQuint"===e&&(o=1+--t*t*t*t*t),"easeInOutQuint"===e&&(o=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),o||t),b.scrollTo(0,Math.floor(u)),p(u,d,S)};0===b.pageYOffset&&b.scrollTo(0,0),clearInterval(S),S=setInterval(g,16)}};var i=function(e){try{c(decodeURIComponent(b.location.hash))}catch(e){c(b.location.hash)}n&&(n.id=n.getAttribute("data-scroll-id"),o.animateScroll(n,r),r=n=null)},l=function(e){if(0===e.button&&!e.metaKey&&!e.ctrlKey&&(r=function(e,t){for(Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),o=t.length;0<=--o&&t.item(o)!==this;);return-1<o});e&&e!==document;e=e.parentNode)if(e.matches(t))return e;return null}(e.target,y.selector))&&"a"===r.tagName.toLowerCase()&&r.hostname===b.location.hostname&&r.pathname===b.location.pathname&&/#/.test(r.href)){var t;try{t=c(decodeURIComponent(r.hash))}catch(e){t=c(r.hash)}if("#"===t){e.preventDefault();var o=(n=document.body).id?n.id:"smooth-scroll-top";return n.setAttribute("data-scroll-id",o),n.id="",void(b.location.hash.substring(1)===o?i():b.location.hash=o)}(n=document.querySelector(t))&&(n.setAttribute("data-scroll-id",n.id),n.id="",r.hash===b.location.hash&&(e.preventDefault(),i()))}},s=function(e){t||(t=setTimeout(function(){t=null,O=j(v)},66))};return o.destroy=function(){y&&(document.removeEventListener("click",l,!1),b.removeEventListener("resize",s,!1),S=t=O=v=r=n=y=null)},o.init=function(e){a&&(o.destroy(),y=I(E,e||{}),v=y.selectorHeader?document.querySelector(y.selectorHeader):null,O=j(v),document.addEventListener("click",l,!1),b.addEventListener("hashchange",i,!1),v&&b.addEventListener("resize",s,!1))},o});