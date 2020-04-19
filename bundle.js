!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";var r,i,a,o=n(13),l="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function s(){a=!1}function u(e){if(e){if(e!==r){if(e.length!==l.length)throw new Error("Custom alphabet for shortid must be "+l.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter((function(e,t,n){return t!==n.lastIndexOf(e)}));if(t.length)throw new Error("Custom alphabet for shortid must be "+l.length+" unique characters. These characters were not unique: "+t.join(", "));r=e,s()}}else r!==l&&(r=l,s())}function c(){return a||(a=function(){r||u(l);for(var e,t=r.split(""),n=[],i=o.nextValue();t.length>0;)i=o.nextValue(),e=Math.floor(i*t.length),n.push(t.splice(e,1)[0]);return n.join("")}())}e.exports={get:function(){return r||l},characters:function(e){return u(e),r},seed:function(e){o.seed(e),i!==e&&(s(),i=e)},lookup:function(e){return c()[e]},shuffled:c}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createElement=function(e){var t=e.tag,n=void 0===t?"div":t,r=e.className,i=e.content,a=document.createElement(n);return r&&a.classList.add(r),i&&("object"==typeof i?a.appendChild(i):a.innerHTML=i),a}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t.createEmailBlock=function(e){var t=r.createElement({className:"emails-field__added",content:e.value+' <span class="emails-field__remove" data-role="remove"></span>'});return e.valid||t.classList.add("invalid"),t}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),n(4);var i=r(n(8));window.EmailsInput=function(e,t){if(!e)return null;var n=new i.default(e,t);return{addRandomMail:n.addRandomMail,getEmailsCount:n.getEmailsCount,getAllAddedEmails:n.getAllAddedEmails,replaceAllEmails:n.replaceAllEmails,subscribe:n.subscribe}}},function(e,t,n){var r=n(5),i=n(6);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1},o=(r(i,a),i.locals?i.locals:{});e.exports=o},function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function l(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],i=0;i<e.length;i++){var a=e[i],s=t.base?a[0]+t.base:a[0],u=n[s]||0,c="".concat(s," ").concat(u);n[s]=u+1;var d=l(c),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(o[d].references++,o[d].updater(f)):o.push({identifier:c,updater:v(f,t),references:1}),r.push(c)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var c,d=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function f(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,i);else{var a=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function p(e,t,n){var r=n.css,i=n.media,a=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,m=0;function v(e,t){var n,r,i;if(t.singleton){var a=m++;n=h||(h=u(t)),r=f.bind(null,n,a,!1),i=f.bind(null,n,a,!0)}else n=u(t),r=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=l(n[r]);o[i].references--}for(var a=s(e,t),u=0;u<n.length;u++){var c=l(n[u]);0===o[c].references&&(o[c].updater(),o.splice(c,1))}n=a}}}},function(e,t,n){(t=n(7)(!1)).push([e.i,'*{box-sizing:border-box;margin:0;padding:0}*:focus{outline:none}.wrapper{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;min-height:100vh}.share{display:block;width:540px;background:#FFFFFF;box-shadow:0px 8px 20px rgba(0,0,0,0.2);border-radius:8px}.share__emails{height:96px}.share__field{padding:32px 50px 24px;background:#F8F8F7}.share__title{font-family:Open Sans;font-style:normal;font-weight:normal;font-size:20px;line-height:27px;color:#050038;margin-bottom:24px}.share__title span{font-weight:bold}.share__control{display:flex;flex-direction:row;padding:24px 50px 32px}.button{display:block;padding:8px 16px;background:#4262FF;border-radius:6px;font-family:Open Sans;font-size:14px;line-height:24px;color:#FFFFFF;cursor:pointer;margin-right:16px;border:none;outline:none}.button:hover{opacity:.8}.emails-field{display:block;height:100%;background:#FFFFFF;border:1px solid #C3C2CF;border-radius:4px;padding:8px 7px;overflow:auto}.emails-field__container{display:flex;flex-flow:row wrap;justify-content:flex-start;align-items:flex-start}.emails-field__added{display:block;position:relative;height:24px;background:rgba(102,153,255,0.2);border-radius:18px;font-family:Open Sans;font-size:14px;line-height:24px;color:#050038;padding:0 24px 0 10px;margin:0 8px 4px 0}.emails-field__added.invalid{background:transparent;padding:0 16px 0 0;border-bottom:1px dashed #D92929;border-radius:0}.emails-field__added.invalid .emails-field__remove{right:0}.emails-field__remove{display:block;position:absolute;width:9px;height:9px;top:0;left:auto;bottom:0;right:8px;margin:auto;transform:rotate(45deg);cursor:pointer}.emails-field__remove:after,.emails-field__remove:before{display:block;position:absolute;content:\'\';top:0;left:0;bottom:0;right:0;margin:auto;width:1px;height:100%;background:#050038}.emails-field__remove:before{width:100%;height:1px}.emails-field__input{display:block;flex-grow:1;padding:0;outline:none;font-size:14px;line-height:24px;height:24px;border:none;color:#050038;max-width:122px}.emails-field__input::placeholder{font-family:Open Sans;font-size:14px;line-height:24px;color:#C3C2CF}.example-without-form{margin-top:100px;width:calc(100% - 20px);max-width:750px}.example-without-form__title{font-size:20px;text-align:center;font-family:"Open Sans";margin-bottom:20px}#example-without-form{height:120px}#example-without-form__replace{display:block;margin:20px 0;padding:10px 20px;font-family:"Open Sans";font-size:16px;background-color:#333;border-radius:8px;cursor:pointer;text-align:center;color:#fff}\n',""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(o=r,l=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(s," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([i]).join("\n")}var o,l,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(i[o]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&i[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(9),a=n(10),o=r(n(11)),l=n(2),s=function(e,t){var n=this;void 0===t&&(t=[]),this.wrapper=e,this.emails=t,this.callListeners=function(){return n.listeners.forEach((function(e){return e(n.state)}))},this.addEmail=function(e){n.addEmailInState(e),n.addEmailInField(n.state[n.state.length-1]),n.input.value=""},this.addEmailInState=function(e){n.state.push({value:e,valid:i.validateEmail(e)})},this.addEmailInField=function(e){var t=l.createEmailBlock(e);n.fieldContainer.insertBefore(t,n.input),n.field.scrollTop<n.field.scrollHeight&&(n.field.scrollTop=n.field.scrollHeight)},this.removeEmail=function(e){var t=Array.prototype.slice.call(n.fieldContainer.children).indexOf(e);n.state.splice(t,1),n.fieldContainer.removeChild(e)},this.addEmailsListToState=function(e){void 0===e&&(e=[]),e.forEach((function(e){return n.state.push({value:e,valid:i.validateEmail(e)})}))},this.addRandomMail=function(){n.addEmail(o.default.generate()+"@ya.ru"),n.callListeners()},this.getEmailsCount=function(){var e=n.state.filter((function(e){return e.valid})).length;alert(e+" valid emails")},this.getAllAddedEmails=function(){return n.state.map((function(e){return e.value}))},this.replaceAllEmails=function(e){var t=n.fieldContainer.querySelectorAll(".emails-field__added");if(t&&t.length)for(var r=0;r<t.length;r++){var i=t[r];n.removeEmail(i)}n.state=[],e.map((function(e){return n.addEmail(e)})),n.callListeners()},this.subscribe=function(e){n.listeners.push(e)},this.state=[],this.addEmailsListToState(t),this.wrapper.children.length&&(this.wrapper.innerHTML=""),this.wrapper.appendChild(a.createField(this.state)),this.listeners=[],this.field=this.wrapper.querySelector(".emails-field"),this.fieldContainer=this.wrapper.querySelector(".emails-field__container"),this.input=this.wrapper.getElementsByTagName("input")[0],document.addEventListener("keydown",(function(e){if(n.input.value.length&&("Enter"===e.code&&n.input&&n.input.value.length&&(n.addEmail(n.input.value),n.callListeners()),n.input===document.activeElement&&("Comma"===e.code||"Slash"===e.code))){e.preventDefault();var t=n.input.value.split(",").join("");n.addEmail(t),n.callListeners()}})),document.addEventListener("click",(function(e){var t=e.target;if(t!==n.input&&n.input.value.length&&(n.addEmail(n.input.value),n.callListeners()),t&&n.wrapper.contains(t)&&"remove"===t.dataset.role){var r=t.parentNode;n.removeEmail(r),n.callListeners()}t!==n.field&&t!==n.fieldContainer||n.input.focus()})),this.listeners=[]};t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validateEmail=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(2);t.createField=function(e){var t=e.map((function(e){return i.createEmailBlock(e)})),n=r.createElement({tag:"input",className:"emails-field__input"});n.placeholder="add more people…",n.type="email";var a=r.createElement({className:"emails-field__container"});return t.forEach((function(e){return a.appendChild(e)})),a.appendChild(n),r.createElement({className:"emails-field",content:a})}},function(e,t,n){"use strict";e.exports=n(12)},function(e,t,n){"use strict";var r=n(0),i=n(14),a=n(18),o=n(19)||0;function l(){return i(o)}e.exports=l,e.exports.generate=l,e.exports.seed=function(t){return r.seed(t),e.exports},e.exports.worker=function(t){return o=t,e.exports},e.exports.characters=function(e){return void 0!==e&&r.characters(e),r.shuffled()},e.exports.isValid=a},function(e,t,n){"use strict";var r=1;e.exports={nextValue:function(){return(r=(9301*r+49297)%233280)/233280},seed:function(e){r=e}}},function(e,t,n){"use strict";var r,i,a=n(15);n(0);e.exports=function(e){var t="",n=Math.floor(.001*(Date.now()-1567752802062));return n===i?r++:(r=0,i=n),t+=a(7),t+=a(e),r>0&&(t+=a(r)),t+=a(n)}},function(e,t,n){"use strict";var r=n(0),i=n(16),a=n(17);e.exports=function(e){for(var t,n=0,o="";!t;)o+=a(i,r.get(),1),t=e<Math.pow(16,n+1),n++;return o}},function(e,t,n){"use strict";var r,i="object"==typeof window&&(window.crypto||window.msCrypto);r=i&&i.getRandomValues?function(e){return i.getRandomValues(new Uint8Array(e))}:function(e){for(var t=[],n=0;n<e;n++)t.push(Math.floor(256*Math.random()));return t},e.exports=r},function(e,t){e.exports=function(e,t,n){for(var r=(2<<Math.log(t.length-1)/Math.LN2)-1,i=-~(1.6*r*n/t.length),a="";;)for(var o=e(i),l=i;l--;)if((a+=t[o[l]&r]||"").length===+n)return a}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e){return!(!e||"string"!=typeof e||e.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(e)}},function(e,t,n){"use strict";e.exports=0}]);
//# sourceMappingURL=bundle.js.map