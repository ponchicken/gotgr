(function(a){function t(t){for(var e,i,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)i=s[l],r[i]&&d.push(r[i][0]),r[i]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(a[e]=c[e]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var a,t=0;t<o.length;t++){for(var n=o[t],e=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(e=!1)}e&&(o.splice(t--,1),a=i(i.s=n[0]))}return a}var e={},r={app:0},o=[];function i(t){if(e[t])return e[t].exports;var n=e[t]={i:t,l:!1,exports:{}};return a[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=a,i.c=e,i.d=function(a,t,n){i.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:n})},i.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},i.t=function(a,t){if(1&t&&(a=i(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var e in a)i.d(n,e,function(t){return a[t]}.bind(null,e));return n},i.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return i.d(t,"a",t),t},i.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},i.p="/gist/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var p=c;o.push([0,"chunk-vendors"]),n()})({0:function(a,t,n){a.exports=n("56d7")},"17fc":function(a,t,n){},2856:function(a,t,n){},"56d7":function(a,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var e=n("2b0e"),r=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("Catalogue",{attrs:{data:a.catalogue}})],1)},o=[],i=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("section",[n("h2",[a._v("Catalogue of kittens")]),n("div",{staticClass:"calalogue"},a._l(a.data,function(a,t){return n("CatalogueItem",{key:t,attrs:{data:a}})}))])},s=[],c=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"card"},[n("h3",[a._v(a._s(a.data.decision))]),n("img",{attrs:{src:a.data.imageUrl,alt:""}}),n("div",{staticClass:"card-params"},[n("div",{staticClass:"card-param"},[n("span",[a._v("category")]),n("span",[a._v(a._s(a.data.category))])]),n("div",{staticClass:"card-param"},[n("span",[a._v("slp")]),n("span",[a._v(a._s(a.data.slp))])]),n("div",{staticClass:"card-param"},[n("span",[a._v("upc")]),n("span",[a._v(a._s(a.data.upc))])]),n("div",{staticClass:"card-param"},[n("span",[a._v("price")]),n("span",[a._v(a._s(a.data.price))])]),n("div",{staticClass:"card-param"},[n("span",[a._v("canVoid")]),n("span",{domProps:{innerHTML:a._s(a.displayToF(a.data.canVoid))}})]),n("div",{staticClass:"card-param"},[n("span",[a._v("canReprint")]),n("span",{domProps:{innerHTML:a._s(a.displayToF(a.data.canReprint))}})]),n("div",{staticClass:"card-param"},[n("span",[a._v("isVoided")]),n("span",{domProps:{innerHTML:a._s(a.displayToF(a.data.isVoided))}})])])])},u=[],p={props:["data"],computed:{},methods:{displayToF:function(a){return a?"&#x2714;":"&#x274C;"}}},l=p,d=(n("5f67"),n("2877")),f=Object(d["a"])(l,c,u,!1,null,"d2c1aa26",null);f.options.__file="CatalogueItem.vue";var v=f.exports,_={props:["data"],components:{CatalogueItem:v}},m=_,g=(n("7ba7"),Object(d["a"])(m,i,s,!1,null,"6933a917",null));g.options.__file="Catalogue.vue";var b=g.exports,h=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("header",[a._v(" test task ")])},y=[],C=(n("b522"),{}),j=Object(d["a"])(C,h,y,!1,null,"3ce41ae9",null);j.options.__file="Header.vue";var O=j.exports,x=n("8ac1"),w=n.n(x),M={name:"app",data:function(){return{catalogue:T({count:12})}},components:{Header:O,Catalogue:b}};function T(a){for(var t=a.count,n=[],e=0;e<t;e++)n.push(P());return console.log(n),n}function P(){return{decision:w()(1).join(""),category:w()(1).join(""),slp:w()(3).join(" "),upc:w()(3).join(" "),price:H(9999),imageUrl:"https://placekitten.com/200/200?image=".concat(H(17)),canVoid:k(),canReprint:k(),isVoided:k()}}function k(){return Math.random()>=.5}function H(a){return Math.floor(Math.random()*a)}var V=M,S=(n("5c0b"),Object(d["a"])(V,r,o,!1,null,null,null));S.options.__file="App.vue";var $=S.exports;e["a"].config.productionTip=!1,new e["a"]({render:function(a){return a($)}}).$mount("#app")},"5c0b":function(a,t,n){"use strict";var e=n("2856"),r=n.n(e);r.a},"5f67":function(a,t,n){"use strict";var e=n("c194"),r=n.n(e);r.a},"7ba7":function(a,t,n){"use strict";var e=n("a1aa"),r=n.n(e);r.a},a1aa:function(a,t,n){},b522:function(a,t,n){"use strict";var e=n("17fc"),r=n.n(e);r.a},c194:function(a,t,n){}});
//# sourceMappingURL=app.5c819e2f.js.map