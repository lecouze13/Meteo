(function(){"use strict";var e={3045:function(e,t,n){var o=n(5130),r=n(6768),a=n(4232),i=n(144);const c={key:0},u=(0,r.Lk)("br",null,null,-1),l=(0,r.Lk)("br",null,null,-1);var f={__name:"App",setup(e){const t=(0,i.KR)(void 0),n=(0,i.KR)(!1),o=(0,i.KR)(null);async function f(e){console.log(e),console.log(e.coords.latitude),console.log(e.coords.longitude);const r=await fetch("https://api.meteo-concept.com/api/location/city?token=26e71f5cff44107dbaae491df66666b38b9ff19e08349e2dfc07b40af9249ab9&latlng="+e.coords.latitude+","+e.coords.longitude),a=await r.json();console.log(a.city.name),n.value=!0,t.value=a.city.name;const i=await fetch("https://api.meteo-concept.com/api/forecast/daily?token=26e71f5cff44107dbaae491df66666b38b9ff19e08349e2dfc07b40af9249ab9&insee="+a.city.insee),c=await i.json();o.value=c,console.log(o.value),console.log(n),o.value&&o.value.forecast&&o.value.forecast.map((e=>{const t=new Date(e.datetime),n={year:"numeric",month:"long",day:"numeric"};e.datetime=t.toLocaleDateString("fr-FR",n)}))}return navigator.geolocation.getCurrentPosition(f),(e,i)=>1==n.value?((0,r.uX)(),(0,r.CE)("h1",c,[(0,r.eW)((0,a.v_)(t.value)+" ",1),((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(o.value.forecast,(e=>((0,r.uX)(),(0,r.CE)("div",{key:e,class:"divCarrer"},[(0,r.eW)((0,a.v_)(e.datetime)+" ",1),u,(0,r.eW)(" Min "+(0,a.v_)(e.tmin)+"°c ",1),l,(0,r.eW)(" Max "+(0,a.v_)(e.tmax)+" °c Weather "+(0,a.v_)(e.weather)+" Probabilité de gel : "+(0,a.v_)(e.probafrost)+"% Probabilité qu'il pleut "+(0,a.v_)(e.probarain)+"% ",1)])))),128))])):(0,r.Q3)("",!0)}};const s=f;var v=s;(0,o.Ef)(v).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(f=0;f<e.length;f++){o=e[f][0],r=e[f][1],a=e[f][2];for(var c=!0,u=0;u<o.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(c=!1,a<i&&(i=a));if(c){e.splice(f--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var f=e.length;f>0&&e[f-1][2]>a;f--)e[f]=e[f-1];e[f]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],c=o[1],u=o[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(u)var f=u(n)}for(t&&t(o);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(f)},o=self["webpackChunkmeteo"]=self["webpackChunkmeteo"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(3045)}));o=n.O(o)})();
//# sourceMappingURL=app.9d57c9de.js.map