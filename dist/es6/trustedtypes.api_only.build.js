(function(){'use strict';const {apply:f}=Reflect,{hasOwnProperty:C}=Object.prototype,D=function(){function n(a){let b=p.get(a);void 0===b&&(b=q(null),p.set(a,b));return b}function k(a){const b=y(a);if(null==b||y(b)!==E)throw Error();for(let c of F(b))r(a,c,{value:a[c]});return a}function l(a,b){d(a.prototype);delete a.name;r(a,"name",{value:b})}function t(a){return(b)=>b instanceof a&&p.has(b)}function u(a,b){return function(a,d){a=z(a);if(!a||!f(C,a,[b]))throw Error("Policy not found");return(0,a[b])(d)}}function G(a,
b){function c(c,e){const g=b[e],h=d(new c(A,a));return d({[e](a){const b=d(q(h));n(b).value=""+g(a);return b}}[e])}return d({createHTML:c(e,"createHTML"),createScriptURL:c(g,"createScriptURL"),createURL:c(h,"createURL")})}function z(a){return B.get(""+a)||null}const {assign:H,create:q,defineProperty:r,freeze:d,getOwnPropertyNames:F,getPrototypeOf:y,prototype:E}=Object,{forEach:I,push:J}=Array.prototype,A=Symbol(),p=k(new WeakMap),v=k([]),B=k(new Map),w=k([]);let x=!1;class m{constructor(a,b){if(a!==
A)throw Error("cannot call the constructor");r(this,"policyName",{value:""+b,enumerable:!0})}toString(){return n(this).value}valueOf(){return n(this).value}}class h extends m{}l(h,"TrustedURL");class g extends m{}l(g,"TrustedScriptURL");class e extends m{}l(e,"TrustedHTML");l(m,"TrustedType");const K={createHTML:()=>{throw Error("undefined conversion");},createURL:()=>{throw Error("undefined conversion");},createScriptURL:()=>{throw Error("undefined conversion");},expose:!1};return d({a:e,c:h,b:g,
f:u(e,"createHTML"),i:u(h,"createURL"),h:u(g,"createScriptURL"),g:function(a,b){a=""+a;if(x&&!w.includes(a))throw Error("Policy "+a+" disallowed.");if(v.includes(a))throw Error("Policy "+a+" exists.");v.push(a);const c=H(q(null),K);b(c);d(c);b=G(a,c);c.expose&&B.set(a,b);return b},j:z,l:function(){return v.slice()},m:t(e),s:t(h),o:t(g),u:function(a){a.includes("*")?x=!1:(x=!0,w.length=0,I.call(a,(a)=>{J.call(w,""+a)}))}})}();"undefined"!==typeof window&&"undefined"===typeof window.TrustedTypes&&(window.TrustedTypes={TrustedHTML:D.a,TrustedURL:D.c,TrustedScriptURL:D.b,createHTML:D.f,createURL:D.i,createScriptURL:D.h,createPolicy:D.g,getExposedPolicy:D.j,getPolicyNames:D.l});}).call(window);//# sourceMappingURL=trustedtypes.api_only.build.js.map
