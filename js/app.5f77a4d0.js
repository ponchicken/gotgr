(function(t){function a(a){for(var e,i,s=a[0],c=a[1],u=a[2],l=0,d=[];l<s.length;l++)i=s[l],r[i]&&d.push(r[i][0]),r[i]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);p&&p(a);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,a=0;a<o.length;a++){for(var n=o[a],e=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(e=!1)}e&&(o.splice(a--,1),t=i(i.s=n[0]))}return t}var e={},r={app:0},o=[];function i(a){if(e[a])return e[a].exports;var n=e[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,a,n){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)i.d(n,e,function(a){return t[a]}.bind(null,e));return n},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="https://ponchicken.github.io/gotgr/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=a,s=s.slice();for(var u=0;u<s.length;u++)a(s[u]);var p=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,a,n){t.exports=n("56d7")},"14fc":function(t,a,n){},"17fc":function(t,a,n){},2856:function(t,a,n){},4203:function(t,a,n){},"436e":function(t,a,n){"use strict";var e=n("14fc"),r=n.n(e);r.a},"56d7":function(t,a,n){"use strict";n.r(a);n("cadf"),n("551c"),n("097d");var e=n("2b0e"),r=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"app"}},[n("Header"),n("Catalogue",{attrs:{data:t.catalogue}})],1)},o=[],i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("section",[n("h2",[t._v("Catalogue of kittens")]),n("div",{staticClass:"calalogue"},t._l(t.data,function(t,a){return n("CatalogueItem",{key:a,attrs:{data:t}})}))])},s=[],c=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"card"},[n("h3",[t._v(t._s(t.data.decision))]),n("img",{attrs:{src:t.data.imageUrl,alt:""}}),n("div",{staticClass:"card-params"},[n("div",{staticClass:"card-param"},[n("span",[t._v("category")]),n("span",[t._v(t._s(t.data.category))])]),n("div",{staticClass:"card-param"},[n("span",[t._v("slp")]),n("span",[t._v(t._s(t.data.slp))])]),n("div",{staticClass:"card-param"},[n("span",[t._v("upc")]),n("span",[t._v(t._s(t.data.upc))])]),n("div",{staticClass:"card-param"},[n("span",[t._v("price")]),n("span",[t._v(t._s(t.data.price))])]),n("div",{staticClass:"card-param"},[n("span",[t._v("canVoid")]),n("span",{domProps:{innerHTML:t._s(t.displayToF(t.data.canVoid))}})]),n("div",{staticClass:"card-param"},[n("span",[t._v("canReprint")]),n("span",{domProps:{innerHTML:t._s(t.displayToF(t.data.canReprint))}})]),n("div",{staticClass:"card-param"},[n("span",[t._v("isVoided")]),n("span",{domProps:{innerHTML:t._s(t.displayToF(t.data.isVoided))}})])])])},u=[],p={props:["data"],computed:{},methods:{displayToF:function(t){return t?"&#x2714;":"&#x274C;"}}},l=p,d=(n("436e"),n("2877")),f=Object(d["a"])(l,c,u,!1,null,"427ab626",null);f.options.__file="CatalogueItem.vue";var v=f.exports,_={props:["data"],components:{CatalogueItem:v}},m=_,g=(n("a7ba"),Object(d["a"])(m,i,s,!1,null,"8531a6fe",null));g.options.__file="Catalogue.vue";var h=g.exports,b=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("header",[t._v(" test task ")])},y=[],C=(n("b522"),{}),j=Object(d["a"])(C,b,y,!1,null,"3ce41ae9",null);j.options.__file="Header.vue";var O=j.exports,x=n("8ac1"),w=n.n(x),M={name:"app",data:function(){return{catalogue:T({count:12})}},components:{Header:O,Catalogue:h}};function T(t){for(var a=t.count,n=[],e=0;e<a;e++)n.push(P());return console.log(n),n}function P(){return{decision:w()(1).join(""),category:w()(1).join(""),slp:w()(3).join(" "),upc:w()(3).join(" "),price:H(9999),imageUrl:"https://placekitten.com/200/200?image=".concat(H(17)),canVoid:k(),canReprint:k(),isVoided:k()}}function k(){return Math.random()>=.5}function H(t){return Math.floor(Math.random()*t)}var V=M,S=(n("5c0b"),Object(d["a"])(V,r,o,!1,null,null,null));S.options.__file="App.vue";var $=S.exports;e["a"].config.productionTip=!1,new e["a"]({render:function(t){return t($)}}).$mount("#app")},"5c0b":function(t,a,n){"use strict";var e=n("2856"),r=n.n(e);r.a},a7ba:function(t,a,n){"use strict";var e=n("4203"),r=n.n(e);r.a},b522:function(t,a,n){"use strict";var e=n("17fc"),r=n.n(e);r.a}});