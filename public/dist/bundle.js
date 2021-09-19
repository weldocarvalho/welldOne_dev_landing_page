(()=>{"use strict";var n,e,t,r,o,A,i,a,c,s,l,d,u,m,E={764:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(537),o=t.n(r),A=t(645),i=t.n(A)()(o());i.push([n.id,":root {\n  /* COLORS */\n  --primary-orange-web: #fca311;\n  --secondary-blue-oxford: #14213d;\n  --tertiary-red-carmine: #96031A;\n  --blood-red: #6B0504;\n  --light-gray: #ebebeb;\n\n  /* PADDING */\n  --gap: 3rem;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 62.5%;\n  font-family: 'Nunito', sans-serif;\n  scroll-behavior: smooth;\n}\n\nbody{\n  line-height: 1.5;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\np {\n  font-size: 1.5rem;\n}\n","",{version:3,sources:["webpack://./assets/css/globalConfig.css"],names:[],mappings:"AAAA;EACE,WAAW;EACX,6BAA6B;EAC7B,gCAAgC;EAChC,+BAA+B;EAC/B,oBAAoB;EACpB,qBAAqB;;EAErB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,iCAAiC;EACjC,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;AACnB",sourcesContent:[":root {\n  /* COLORS */\n  --primary-orange-web: #fca311;\n  --secondary-blue-oxford: #14213d;\n  --tertiary-red-carmine: #96031A;\n  --blood-red: #6B0504;\n  --light-gray: #ebebeb;\n\n  /* PADDING */\n  --gap: 3rem;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 62.5%;\n  font-family: 'Nunito', sans-serif;\n  scroll-behavior: smooth;\n}\n\nbody{\n  line-height: 1.5;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\np {\n  font-size: 1.5rem;\n}\n"],sourceRoot:""}]);const a=i},342:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(537),o=t.n(r),A=t(645),i=t.n(A),a=t(764),c=i()(o());c.i(a.Z),c.push([n.id,".first_bg {\n  background-color: var(--primary-orange-web);\n}\n\n.second_bg {\n  background-color: var(--secondary-blue-oxford);\n}\n\n.third_bg {\n  background-color: var(--light-gray);\n}\n\n.forth_bg {\n  background-color: #a0302f;\n}\n\n.main_content {\n  max-width: 120rem;\n  margin: 0 auto;\n  padding: 7rem var(--gap);\n}\n","",{version:3,sources:["webpack://./assets/css/globalStyle.css"],names:[],mappings:"AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,8CAA8C;AAChD;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,wBAAwB;AAC1B",sourcesContent:['@import "./globalConfig.css";\n\n.first_bg {\n  background-color: var(--primary-orange-web);\n}\n\n.second_bg {\n  background-color: var(--secondary-blue-oxford);\n}\n\n.third_bg {\n  background-color: var(--light-gray);\n}\n\n.forth_bg {\n  background-color: #a0302f;\n}\n\n.main_content {\n  max-width: 120rem;\n  margin: 0 auto;\n  padding: 7rem var(--gap);\n}\n'],sourceRoot:""}]);const s=c},524:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(537),o=t.n(r),A=t(645),i=t.n(A),a=t(342),c=i()(o());c.i(a.Z),c.push([n.id,'.menu {\n  background-color: white;\n  width: 100%;\n}\n\n.menu_content {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.menu h1 {\n  font-size: 2rem;\n}\n\n.menu ul {\n  display: flex;\n}\n\n.menu ul li a {\n  display: block;\n  position: relative;\n  padding: 2rem;\n  font-size: 1.8rem;\n  color: black;\n}\n\n.menu ul li a::after {\n  content: "";\n  position: absolute;\n  bottom: 1rem;\n  left: 50%;\n  width: 0;\n  height: 0.2rem;\n  background: #a0302f;\n  transition: all 300ms ease-in-out;\n}\n\n.menu ul li a:hover::after {\n  width: 50%;\n  left: 25%;\n}\n\n.section {\n  min-height: 100vh;\n}\n\n.menu_spacing {\n  height: 6.5rem;\n}\n\n.intro {\n  background-color: var(--secondary-blue-oxford);\n}\n\n.intro_content {\n  position: relative;\n  top: -8rem;\n  display: grid;\n  grid-template-columns: 1fr 1.5fr;\n  gap: var(--gap);\n  min-height: 100vh;\n}\n\n.intro_text_content,\n.intro_img {\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-items: center;\n\n  color: white;\n}\n\n.intro_text_content h2 {\n  font-size: 6rem;\n  margin-bottom: 5rem;\n  line-height: 1.1;\n}\n\n.intro_img img {\n  max-width: 60%;\n  height: auto;\n}\n\n/* .grid_content {\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n} */\n\n.grid_content h2 {\n  font-size: 6rem;\n  color: var(--secondary-blue-oxford);\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: var(--gap);\n  counter-reset: grid_counter;\n}\n\n.grid h3 {\n  font-size: 3rem;\n  position: relative;\n  padding-left: 5rem;\n  padding-bottom: 2rem;\n  color: var(--secondary-blue-oxford);\n}\n\n.grid h3::before {\n  counter-increment: grid_counter;\n  content: counter(grid_counter);\n  position: absolute;\n  font-size: 7rem;\n  font-style: italic;\n  top: -3rem;\n  left: 0;\n}\n\n#contact_us {\n  background-color: #a0302f;\n}\n\n#contact_us img {\n  border-radius: 50%;\n}\n\n.footer_wrapper {\n  height: 25rem;\n  max-width: 120rem;\n  margin: 0 auto;\n\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.footer_wrapper p {\n  color: white;\n}\n\n@media (max-width: 1080px) {\n  .grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  .intro_text_content h2 {\n    font-size: 5rem;\n  }\n}\n\n@media (max-width: 740px) {\n  .intro_content,\n  .grid {\n    grid-template-columns: repeat(1, 1fr);\n  }\n\n  .intro_text_content h2 {\n    font-size: 4rem;\n  }\n\n  .footer_wrapper {\n    height: 35rem;\n    flex-direction: column;\n  }\n}\n\n@media (max-width: 425px) {\n  .menu_content, .menu_content ul {\n    flex-direction: column;\n  }\n}\n',"",{version:3,sources:["webpack://./assets/css/style.css"],names:[],mappings:"AAEA;EACE,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;;EAEnB,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,aAAa;EACb,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,YAAY;EACZ,SAAS;EACT,QAAQ;EACR,cAAc;EACd,mBAAmB;EACnB,iCAAiC;AACnC;;AAEA;EACE,UAAU;EACV,SAAS;AACX;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,8CAA8C;AAChD;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,aAAa;EACb,gCAAgC;EAChC,eAAe;EACf,iBAAiB;AACnB;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;;EAEnB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,YAAY;AACd;;AAEA;;;;;;GAMG;;AAEH;EACE,eAAe;EACf,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,eAAe;EACf,2BAA2B;AAC7B;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAkB;EAClB,oBAAoB;EACpB,mCAAmC;AACrC;;AAEA;EACE,+BAA+B;EAC/B,8BAA8B;EAC9B,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,UAAU;EACV,OAAO;AACT;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,cAAc;;EAEd,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE;IACE,qCAAqC;EACvC;;EAEA;IACE,eAAe;EACjB;AACF;;AAEA;EACE;;IAEE,qCAAqC;EACvC;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,sBAAsB;EACxB;AACF;;AAEA;EACE;IACE,sBAAsB;EACxB;AACF",sourcesContent:['@import "./globalStyle.css";\n\n.menu {\n  background-color: white;\n  width: 100%;\n}\n\n.menu_content {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.menu h1 {\n  font-size: 2rem;\n}\n\n.menu ul {\n  display: flex;\n}\n\n.menu ul li a {\n  display: block;\n  position: relative;\n  padding: 2rem;\n  font-size: 1.8rem;\n  color: black;\n}\n\n.menu ul li a::after {\n  content: "";\n  position: absolute;\n  bottom: 1rem;\n  left: 50%;\n  width: 0;\n  height: 0.2rem;\n  background: #a0302f;\n  transition: all 300ms ease-in-out;\n}\n\n.menu ul li a:hover::after {\n  width: 50%;\n  left: 25%;\n}\n\n.section {\n  min-height: 100vh;\n}\n\n.menu_spacing {\n  height: 6.5rem;\n}\n\n.intro {\n  background-color: var(--secondary-blue-oxford);\n}\n\n.intro_content {\n  position: relative;\n  top: -8rem;\n  display: grid;\n  grid-template-columns: 1fr 1.5fr;\n  gap: var(--gap);\n  min-height: 100vh;\n}\n\n.intro_text_content,\n.intro_img {\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-items: center;\n\n  color: white;\n}\n\n.intro_text_content h2 {\n  font-size: 6rem;\n  margin-bottom: 5rem;\n  line-height: 1.1;\n}\n\n.intro_img img {\n  max-width: 60%;\n  height: auto;\n}\n\n/* .grid_content {\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n} */\n\n.grid_content h2 {\n  font-size: 6rem;\n  color: var(--secondary-blue-oxford);\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: var(--gap);\n  counter-reset: grid_counter;\n}\n\n.grid h3 {\n  font-size: 3rem;\n  position: relative;\n  padding-left: 5rem;\n  padding-bottom: 2rem;\n  color: var(--secondary-blue-oxford);\n}\n\n.grid h3::before {\n  counter-increment: grid_counter;\n  content: counter(grid_counter);\n  position: absolute;\n  font-size: 7rem;\n  font-style: italic;\n  top: -3rem;\n  left: 0;\n}\n\n#contact_us {\n  background-color: #a0302f;\n}\n\n#contact_us img {\n  border-radius: 50%;\n}\n\n.footer_wrapper {\n  height: 25rem;\n  max-width: 120rem;\n  margin: 0 auto;\n\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.footer_wrapper p {\n  color: white;\n}\n\n@media (max-width: 1080px) {\n  .grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  .intro_text_content h2 {\n    font-size: 5rem;\n  }\n}\n\n@media (max-width: 740px) {\n  .intro_content,\n  .grid {\n    grid-template-columns: repeat(1, 1fr);\n  }\n\n  .intro_text_content h2 {\n    font-size: 4rem;\n  }\n\n  .footer_wrapper {\n    height: 35rem;\n    flex-direction: column;\n  }\n}\n\n@media (max-width: 425px) {\n  .menu_content, .menu_content ul {\n    flex-direction: column;\n  }\n}\n'],sourceRoot:""}]);const s=c},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,A){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&i[l[0]]||(void 0!==A&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=A),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),A="/*# ".concat(o," */"),i=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([A]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var A={},i=[],a=0;a<n.length;a++){var c=n[a],s=r.base?c[0]+r.base:c[0],l=A[s]||0,d="".concat(s," ").concat(l);A[s]=l+1;var u=t(d),m={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(e[u].references++,e[u].updater(m)):e.push({identifier:d,updater:o(m,r),references:1}),i.push(d)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var A=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<A.length;i++){var a=t(A[i]);e[a].references--}for(var c=r(n,o),s=0;s<A.length;s++){var l=t(A[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}A=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r=t.css,o=t.media,A=t.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),A&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),e.styleTagTransform(r,n)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},p={};function C(n){var e=p[n];if(void 0!==e)return e.exports;var t=p[n]={id:n,exports:{}};return E[n](t,t.exports,C),t.exports}C.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return C.d(e,{a:e}),e},C.d=(n,e)=>{for(var t in e)C.o(e,t)&&!C.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},C.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),C.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;C.g.importScripts&&(n=C.g.location+"");var e=C.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),C.p=n})(),n=C(379),e=C.n(n),t=C(795),r=C.n(t),o=C(569),A=C.n(o),i=C(565),a=C.n(i),c=C(216),s=C.n(c),l=C(589),d=C.n(l),u=C(524),(m={}).styleTagTransform=d(),m.setAttributes=a(),m.insert=A().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=s(),e()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals,C.p})();
//# sourceMappingURL=bundle.js.map