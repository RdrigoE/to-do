(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>x});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),c=t(667),l=t.n(c),d=new URL(t(282),t.b),s=new URL(t(2),t.b),p=new URL(t(182),t.b),u=new URL(t(678),t.b),f=new URL(t(460),t.b),h=i()(r()),m=l()(d),g=l()(s),v=l()(p),b=l()(u),y=l()(f);h.push([n.id,"*{\n    margin: 0;\n    padding: 0;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\nbody{\n    height: 100vh;\n}\n\n.header{\n    display: flex;\n    height: 10vh;\n    text-align: left;\n    background-color: rgb(66, 66, 66);\n    color: white;\n    font-size: 6vh;\n    align-items: center;\n    padding-left: 2vh;\n}\n\n.header:before{\n    content: \"\";\n    display: block;\n    background: url("+m+') no-repeat;\n    width: 64px;\n    height: 64px;\n    float: left;\n    margin: 0 6px 0 0;\n    color: white;\n}\n\n.main{\n    height: 87vh;\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n}\n\n.navbar{\n    display: grid;\n    grid-template-rows: 1fr 2fr;\n}\n\n.defaults{\n    background-color: rgb(165, 165, 165);\n}\n\n.defaults>ul{\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: left;\n    padding-left: 3vw;\n    font-size: 3vh;\n    padding: 1vw;\n    gap: 1vw;\n}\n\n.defaults>ul>li{\n    list-style-type: none;\n    cursor: pointer;\n}\n\n.inbox:before{\n    content: "";\n    display: block;\n    background: url('+g+') no-repeat;\n    background-size: cover;\n    width: 3vh;\n    height: 3vh;\n    float: left;\n    margin: 0 6px 0 0;\n    color: white;\n}\n\n.today:before{\n    content: "";\n    display: block;\n    background: url('+v+') no-repeat;\n    background-size: cover;\n    width: 3vh;\n    height: 3vh;\n    float: left;\n    margin: 0 6px 0 0;\n    color: white;\n}\n\n.nextweek:before{\n    content: "";\n    display: block;\n    background: url('+b+') no-repeat;\n    background-size: cover;\n    width: 3vh;\n    height: 3vh;\n    float: left;\n    margin: 0 6px 0 0;\n    color: white;\n}\n\n.projects{\n    background-color: rgb(199, 199, 199);\n}\n\n.projects>ul{\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: left;\n    padding-left: 3vw;\n    font-size: 3vh;\n    padding: 1vw;\n    gap: 1vw;\n}\n\n.projects>ul>li{\n    list-style-type: none;\n    cursor: pointer;\n}\n\n.addProject:before{\n    content: "";\n    display: block;\n    background: url('+y+") no-repeat;\n    background-size: cover;\n    width: 3vh;\n    height: 3vh;\n    float: left;\n    margin: 0 6px 0 0;\n    color: white;\n}\n\n#content{\n    background-color: rgb(0, 0, 0);\n    display: grid;\n    grid-template-rows: repeat(auto-fit, calc(min(10vh,5vh)));\n    grid-template-columns: 1fr;\n    grid-gap: 10px;\n    justify-content: center;\n    \n}\n\ndiv.content-title>button#addCard{\n    height:85%;\n    width: 8vw;\n    margin-left: 2vw;\n    border: none;\n    background-color: #8ebf42;\n    color: #fff;\n    cursor: pointer;\n    /* width: 5vw; */\n    min-width: fit-content;\n    /* margin-bottom: 15px; */\n    opacity: 0.8;    \n    border-radius: 15px;\n    font-size: 75%;\n}\n\n.card{\n    background-color: aliceblue;\n    border-radius: 20px;\n    display: flex;\n    justify-content: left;\n    align-items: center;\n}\n\n.join{\n    /*display: flex;*/\n    align-items: center;\n    display: flex;\n    gap: 1vw;\n}\n.check{\n    width: 3vh;\n    height: 3vh;\n    margin-left: 2vh;\n}\n\n.content-title{\n    display: flex;\n    text-align: left;\n    background-color: rgb(116, 116, 116);\n    color: white;\n    font-size: 4vh;\n    align-items: center;\n    padding-left: 2vh;\n}\n\n.footer{\n    height:3vh;\n    display: flex;\n    text-align: left;\n    background-color: rgb(46, 46, 46);\n    color: white;\n    font-size: 2vh;\n    align-items: center;\n    justify-content: center;\n    padding-left: 2vh;\n}\n\n\n/* Pop Up Form */\n\n.todoPopup {\n    position: relative;\n    text-align: center;\n    font-size: 2vh;\n}\n.formPopup {\n    display: none;\n    position: fixed;\n    left: 50%;\n    top: 20%;\n    transform: translate(-50%, 5%);\n}\n.formContainer {\n\n    border-radius: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    padding: 1vh;\n    width: calc(max(300px,25vw));\n    height: 20vh;\n    max-width: 500px;\n    max-height: 500px;\n    padding: 20px;\n    background-color: #fff;\n}\n\n.formContainer > input{\n    height: 4vh;\n    font-size: 4vh;\n}\n\n.buttonsForm{\n    display: flex;\n    justify-content: space-around;\n    min-width: auto;\n}\n\n.formContainer h2{\n    font-size: 3vh;\n}\n\n.formContainer .btn {\n    padding: 1vh 1vw;\n    border: none;\n    background-color: #8ebf42;\n    color: #fff;\n    cursor: pointer;\n    width: 4vw;\n    min-width: fit-content;\n    margin-bottom: 1vh;\n    opacity: 0.8;\n    font-size: 3vh;\n    border-radius: 5px;\n}\n.formContainer .cancel {\n    background-color: #cc0000;\n}\n.formContainer .btn:hover,\n.openButton:hover {\n    opacity: 1;\n}",""]);const x=h},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);o&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),e.push(s))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var l=n[c],d=o.base?l[0]+o.base:l[0],s=a[d]||0,p="".concat(d," ").concat(s);a[d]=s+1;var u=t(p),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var h=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var l=o(n,r),d=0;d<a.length;d++){var s=t(a[d]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=l}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},460:(n,e,t)=>{n.exports=t.p+"e1f8aa7468e6f0cde861.png"},2:(n,e,t)=>{n.exports=t.p+"fb4f510a083b6ef61f0f.png"},678:(n,e,t)=>{n.exports=t.p+"dd2b27bcb474060f0b09.png"},182:(n,e,t)=>{n.exports=t.p+"1386c0e4f2650809994f.png"},282:(n,e,t)=>{n.exports=t.p+"f98e6326dfa3ca2cf84c.png"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),l=t.n(c),d=t(216),s=t.n(d),p=t(589),u=t.n(p),f=t(426),h={};h.styleTagTransform=u(),h.setAttributes=l(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=s(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const m=n=>{document.querySelectorAll(".card").forEach((n=>{n.remove()}));let e=document.getElementById("content"),t=0;n.forEach((n=>{let o=document.createDocumentFragment(),r=document.createElement("div");r.className="card "+String(t),t++;let a=document.createElement("div");a.className="join";let i=document.createElement("button");i.className="check";let c=document.createElement("p");c.className="todoTitle",c.innerHTML+=n.title,a.appendChild(i),a.append(c),r.appendChild(a),o.appendChild(r),e.appendChild(o)}))};let g=n=>{document.querySelectorAll(".card").forEach((e=>{e.querySelector(".check").addEventListener("click",(()=>{n.removeIndex(e.className.slice(4)),e.remove(),v()}))}))},v=()=>{let n=document.querySelectorAll(".card"),e=0;n.forEach((n=>{n.className=n.className.slice(0,5)+e,e++}))};const b=(n,e,t,o)=>({title:n,description:e,dueDate:t,priority:o});var y=(()=>{let n=[];return{list:n,addToDo:e=>{null!=e&""!=e.title&&n.push(e)},removeTodo:e=>{var t=n.indexOf(e);t>-1&&n.splice(t,1)},removeIndex:e=>{e>-1&&n.splice(e,1)}}})();y.addToDo(b("Rodrigo de Jesus Eusebio")),(n=>{let e=document.querySelector(".main"),t=document.createDocumentFragment();t=document.createElement("div"),t.id="content",e.appendChild(t);let o=document.createDocumentFragment(),r=document.createElement("div");r.className="content-title",r.textContent="Inbox",o.appendChild(r);let a=document.createElement("button");a.id="addCard",a.textContent="New Task",r.appendChild(a),o.appendChild(r),t.appendChild(o),m(n)})(y.list),g(y),document.getElementById("addCard").addEventListener("click",(()=>{(n=>{document.getElementById("popupForm").style.display="block",document.getElementById("close").addEventListener("click",(()=>{document.getElementById("popupForm").style.display="none"}),{once:!0}),document.getElementById("save").addEventListener("click",(()=>{if(null!=document.getElementById("title").value){var e=document.getElementById("title").value;let t=b(e);n.addToDo(t),m(n.list),g(n),console.log(n.list),document.getElementById("title").value="",document.getElementById("popupForm").style.display="none"}}),{once:!0})})(y)}))})()})();