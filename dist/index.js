/*! For license information please see index.js.LICENSE.txt */
!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define("Carousal",[],r):"object"==typeof exports?exports.Carousal=r():e.Carousal=r()}(self,(function(){return(()=>{var e={315:(e,r,t)=>{"use strict";t.d(r,{Z:()=>o});var n=t(645),i=t.n(n)()((function(e){return e[1]}));i.push([e.id,"@keyframes heartbeat{0%{transform:scale(0)}25%{transform:scale(1.2)}50%{transform:scale(1)}75%{transform:scale(1.2)}100%{transform:scale(1)}}.react-3d-carousel{position:relative}.react-3d-carousel .slider-container{position:absolute;left:50%;top:0%;width:90%;margin:-0px auto 0px -45%}.react-3d-carousel .slider-container .slider-content{position:relative;left:50%;top:0%;width:70%;height:80%;transform:translateX(-50%)}.react-3d-carousel .slider-container .slider-content .slider-single{position:absolute;z-index:0;left:0;top:0;width:100%;transition:z-index 0ms 250ms}.react-3d-carousel .slider-container .slider-content .slider-single .slider-single-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;left:0;top:0;width:100%;box-shadow:0px 10px 40px rgba(0,0,0,0.2);transition:500ms cubic-bezier(0.17, 0.67, 0.55, 1.43);transform:scale(0);opacity:0}.react-3d-carousel .slider-container .slider-content .slider-single .slider-single-content img{max-width:100%}.react-3d-carousel .slider-container .slider-content .slider-single.preactivede .slider-single-content{transform:translateX(-50%) scale(0)}.react-3d-carousel .slider-container .slider-content .slider-single.preactive{z-index:1}.react-3d-carousel .slider-container .slider-content .slider-single.preactive .slider-single-content{opacity:0.3;transform:translateX(-25%) scale(0.8)}.react-3d-carousel .slider-container .slider-content .slider-single.proactive{z-index:1}.react-3d-carousel .slider-container .slider-content .slider-single.proactive .slider-single-content{opacity:0.3;transform:translateX(25%) scale(0.8)}.react-3d-carousel .slider-container .slider-content .slider-single.proactivede .slider-single-content{transform:translateX(50%) scale(0)}.react-3d-carousel .slider-container .slider-content .slider-single.active{z-index:2}.react-3d-carousel .slider-container .slider-content .slider-single.active .slider-left,.react-3d-carousel .slider-container .slider-content .slider-single.active .slider-right{display:block}.react-3d-carousel .slider-container .slider-content .slider-single.active .slider-single-content{opacity:1;transform:translateX(0%) scale(1)}.react-3d-carousel .slider-container .slider-left{position:absolute;display:none;z-index:3;right:101%;margin-right:5px;padding:20px 15px;height:100%;cursor:pointer}.react-3d-carousel .slider-container .slider-left div{position:absolute;top:50%;left:0%;margin-top:-20px;color:#ffffff;transform:translateY(-50%);padding:10px 10px;border-top:2px solid #fdc84b;border-right:2px solid #fdc84b;border-bottom:2px solid #fdc84b;border-left:2px solid #fdc84b}.react-3d-carousel .slider-container .slider-right{display:none;position:absolute;z-index:3;left:101%;padding:20px 15px;height:101%;cursor:pointer;margin-left:-2px}.react-3d-carousel .slider-container .slider-right div{position:absolute;top:50%;left:0%;margin-top:-20px;color:#ffffff;transform:translateY(-50%);padding:10px 10px;border-top:2px solid #fdc84b;border-right:2px solid #fdc84b;border-bottom:2px solid #fdc84b;border-left:2px solid #fdc84b}.react-3d-carousel .slider-container .slider-left-noborders{position:absolute;display:none;z-index:3;right:101%;margin-right:5px;padding:20px 15px;height:100%;cursor:pointer}.react-3d-carousel .slider-container .slider-left-noborders div{position:absolute;top:50%;left:0%;margin-top:-20px;color:#ffffff;transform:translateY(-50%);padding:10px 10px}.react-3d-carousel .slider-container .slider-right-noborders{display:none;position:absolute;z-index:3;left:101%;padding:20px 15px;height:101%;cursor:pointer;margin-left:-2px}.react-3d-carousel .slider-container .slider-right-noborders div{position:absolute;top:50%;left:0%;margin-top:-20px;color:#ffffff;transform:translateY(-50%);padding:10px 10px}.react-3d-carousel .slider-container .slider-disabled div{display:none}\n",""]);const o=i},645:e=>{"use strict";e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t=e(r);return r[2]?"@media ".concat(r[2]," {").concat(t,"}"):t})).join("")},r.i=function(e,t,n){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(n)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(i[s]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);n&&i[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),r.push(l))}},r}},703:(e,r,t)=>{"use strict";var n=t(414);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,r,t,i,o,s){if(s!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function r(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:o,resetWarningCache:i};return t.PropTypes=t,t}},697:(e,r,t)=>{e.exports=t(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},695:e=>{"use strict";var r={};e.exports=function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}},379:e=>{"use strict";var r=[];function t(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function n(e,n){for(var o={},s=[],a=0;a<e.length;a++){var l=e[a],c=n.base?l[0]+n.base:l[0],d=o[c]||0,u="".concat(c," ").concat(d);o[c]=d+1;var f=t(u),p={css:l[1],media:l[2],sourceMap:l[3]};-1!==f?(r[f].references++,r[f].updater(p)):r.push({identifier:u,updater:i(p,n),references:1}),s.push(u)}return s}function i(e,r){var t=r.domAPI(r);return t.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t.update(e=r)}else t.remove()}}e.exports=function(e,i){var o=n(e=e||[],i=i||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var a=t(o[s]);r[a].references--}for(var l=n(e,i),c=0;c<o.length;c++){var d=t(o[c]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}o=l}}},216:e=>{"use strict";e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r),r}},795:e=>{"use strict";e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(t){!function(e,r,t){var n=t.css,i=t.media,o=t.sourceMap;i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),r.styleTagTransform(n,e)}(r,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},785:(e,r,t)=>{"use strict";t(708);var n=t(297),i=60103;if("function"==typeof Symbol&&Symbol.for){var o=Symbol.for;i=o("react.element"),o("react.fragment")}var s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,o={},c=null,d=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(d=r.ref),r)a.call(r,n)&&!l.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:i,type:e,key:c,ref:d,props:o,_owner:s.current}}r.jsx=c,r.jsxs=c},597:(e,r,t)=>{"use strict";e.exports=t(785)},708:e=>{"use strict";var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var s,a,l=i(e),c=1;c<arguments.length;c++){for(var d in s=Object(arguments[c]))t.call(s,d)&&(l[d]=s[d]);if(r){a=r(s);for(var u=0;u<a.length;u++)n.call(s,a[u])&&(l[a[u]]=s[a[u]])}}return l}},297:e=>{"use strict";e.exports=require("react")}},r={};function t(n){var i=r[n];if(void 0!==i)return i.exports;var o=r[n]={id:n,exports:{}};return e[n](o,o.exports,t),o.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{"use strict";t.r(n),t.d(n,{default:()=>j});var e=t(297),r=t(697),i=t.n(r),o=t(379),s=t.n(o),a=t(795),l=t.n(a),c=t(695),d=t.n(c),u=t(216),f=t.n(u),p=t(315),m={styleTagTransform:function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}},setAttributes:function(e){var r=t.nc;r&&e.setAttribute("nonce",r)},insert:function(e){var r=d()("head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}};m.domAPI=l(),m.insertStyleElement=f(),s()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;var v=t(597);function g(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||y(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,i,o=[],s=!0,a=!1;try{for(t=t.call(e);!(s=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);s=!0);}catch(e){a=!0,i=e}finally{try{s||null==t.return||t.return()}finally{if(a)throw i}}return o}}(e,r)||y(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,r){if(e){if("string"==typeof e)return h(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?h(e,r):void 0}}function h(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function x(r){var t=b((0,e.useState)(0),2),n=t[0],i=t[1],o=b((0,e.useState)(-1),2),s=o[0],a=o[1],l=b((0,e.useState)([]),2),c=l[0],d=l[1],u=b((0,e.useState)("0px"),2),f=u[0],p=u[1],m=(0,e.useRef)();(0,e.useEffect)((function(){var e=[];console.log(r.slides),r.slides.forEach((function(r){var t={class:"slider-single proactivede",element:r};e.push(t)})),d(e),i(r.slides.length-1),a(-1),console.log(s),-1===s&&setTimeout((function(){y(),r.autoplay&&(m.interval=setTimeout((function(){y()}),r.interval))}),500)}),[r.slides]),(0,e.useEffect)((function(){-1===s&&setTimeout((function(){y()}),500)}),[c,s]);var y=function e(){var t,i,o=s,l="slider-single active",u=g(c);if(n>1){o<n?o++:o=0,t=o>0?u[o-1]:u[n];var f=u[o];i=o<n?u[o+1]:u[0],u.forEach((function(e,r){e.class.includes("preactivede")&&(e.class="slider-single proactivede"),e.class.includes("preactive")&&(e.class="slider-single preactivede")})),t.class="slider-single preactive",f.class=l,i.class="slider-single proactive",d(u),a(o),document.getElementsByClassName("slider-single active").length>0&&setTimeout((function(){if(document.getElementsByClassName("slider-single active").length>0){var e=document.getElementsByClassName("slider-single active")[0].clientHeight;p("".concat(e,"px"))}}),500),r.autoplay&&(clearTimeout(m.interval),m.interval=setTimeout((function(){e()}),r.interval))}else u[0]&&u[0].class!==l&&(u[0].class=l,d(u),a(0))},h=(0,e.useCallback)((function(){if(n>1){var e,r,t=s,i=g(c);t>0?t--:t=n,r=t<n?i[t+1]:i[0];var o=i[t];e=t>0?i[t-1]:i[n],i.forEach((function(e,r){e.class.includes("proactivede")&&(e.class="slider-single preactivede"),e.class.includes("proactive")&&(e.class="slider-single proactivede")})),e.class="slider-single preactive",o.class="slider-single active",r.class="slider-single proactive",d(i),a(t),document.getElementsByClassName("slider-single active").length>0&&setTimeout((function(){if(document.getElementsByClassName("slider-single active").length>0){var e=document.getElementsByClassName("slider-single active")[0].clientHeight;p("".concat(e,"px"))}}),500)}}),[s,n,c]),x=function(e){var t="slider-".concat(e);return r.arrows?r.arrows&&!r.arrowBorders&&(t="slider-".concat(e,"-noborders")):t="slider-disabled",t};return(0,v.jsx)("div",{className:"react-3d-carousel",style:{height:f},children:c&&c.length>0&&(0,v.jsx)("div",{className:"slider-container",children:(0,v.jsx)("div",{className:"slider-content",children:c.map((function(e,r){return(0,v.jsxs)("div",{className:e.class,children:[(0,v.jsx)("div",{className:x("left"),onClick:h,children:(0,v.jsx)("div",{children:(0,v.jsx)("i",{className:"fa fa-arrow-left"})})}),(0,v.jsx)("div",{className:x("right"),onClick:y,children:(0,v.jsx)("div",{children:(0,v.jsx)("i",{className:"fa fa-arrow-right"})})}),(0,v.jsx)("div",{className:"slider-single-content",children:e.element})]},r)}))})})})}x.propTypes={slides:i().arrayOf(i().element),autoplay:i().bool,interval:i().number,arrows:i().bool,arrowBorders:i().bool},x.defaultProps={autoplay:!1,interval:3e3,arrows:!0,arrowBorders:!0};const j=x})(),n})()}));